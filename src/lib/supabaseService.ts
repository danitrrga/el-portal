
import { supabase } from './supabase';
import {
    Profile, Version, Cycle, Habit, HabitLog,
    Goal, ArchiveItem, Slide, DashboardData,
    EntityStatus, GoalType, ArchiveType
} from '@/types/types';

export class SupabaseService {

    // -- AUTH & ALIASING --
    // Helper to ensure we have a user and get their ID
    private async getUserId(): Promise<string> {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user) throw new Error("Not authenticated");
        return session.user.id;
    }

    // NEW: Helper to get YYYY-MM-DD in local time
    getLocalDateString(date: Date = new Date()): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Helper to get the full profile
    async getProfile(): Promise<Profile | null> {
        const userId = await this.getUserId();
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();

        if (error) {
            console.error('Error fetching profile:', error);
            return null;
        }
        return data;
    }

    // -- SYSTEM SETTINGS --
    async getSystemSettings(): Promise<{ days: number; cycles: number }> {
        const profile = await this.getProfile();
        return {
            days: profile?.version_days_default || 90,
            cycles: profile?.cycles_per_version_default || 6
        };
    }

    async updateProfile(updates: Partial<Profile>): Promise<void> {
        const userId = await this.getUserId();
        const { error } = await supabase
            .from('profiles')
            .update(updates)
            .eq('id', userId);
        if (error) throw error;
    }

    async uploadAvatar(file: File): Promise<string> {
        const userId = await this.getUserId();
        const fileExt = file.name.split('.').pop();
        const fileName = `${userId}/avatar-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('el-portal-assets')
            .upload(filePath, file, { upsert: true });

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
            .from('el-portal-assets')
            .getPublicUrl(filePath);

        return data.publicUrl;
    }

    async updateSystemSettings(days: number, cycles: number): Promise<void> {
        const userId = await this.getUserId();
        const { error } = await supabase
            .from('profiles')
            .update({ version_days_default: days, cycles_per_version_default: cycles })
            .eq('id', userId);
        if (error) throw error;
    }

    // -- ANALYTICS ALGORITHMS (Migrated from MockDB) --

    // 3.1 Daily Performance Calculation
    calculateDailyScore(habits: Habit[], logs: HabitLog[]): number {
        if (habits.length === 0) return 0;

        let totalWeight = 0;
        let completedWeight = 0;

        habits.forEach(habit => {
            totalWeight += habit.weight;
            // Check if log exists for this habit
            const isDone = logs.some(l => l.habit_id === habit.id && l.status);
            if (isDone) {
                completedWeight += habit.weight;
            }
        });

        if (totalWeight === 0) return 0;
        return Math.round((completedWeight / totalWeight) * 100);
    }

    // 3.2 Asymptotic Goal Progression
    calculateAsymptoticScore(streak: number, consistency: number = 0.5): number {
        // Benchmark: 7 days streak @ 50% consistency = 35% progress
        // Weighted Days = Streak * (0.8 + 0.4 * Consistency)
        // Formula: Progress % = 100 * (1 - e^(-0.061 * WeightedDays))

        const weightedDays = streak * (0.8 + 0.4 * consistency);
        if (weightedDays <= 0) return 0;

        const progress = 100 * (1 - Math.exp(-0.061 * weightedDays));
        return Math.min(100, Math.round(progress));
    }

    private calculateHabitStreaks(habitId: string, allLogs: HabitLog[]): { currentStreak: number, maxStreak: number, consistency: number } {
        // Filter logs for this habit and ensure they are 'true' (completed)
        const logs = allLogs.filter(l => l.habit_id === habitId && l.status);
        const dates = Array.from(new Set(logs.map(l => l.date))).sort();

        if (dates.length === 0) return { currentStreak: 0, maxStreak: 0, consistency: 0 };

        // Consistency Calculation
        const firstDate = new Date(dates[0]);
        const today = new Date();
        const totalDays = Math.max(1, Math.round((today.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)) + 1);
        const consistency = logs.length / totalDays;

        // Max Streak Calculation
        let max = 0;
        let current = 0;
        let prevTimestamp: number | null = null;

        for (const dStr of dates) {
            const timestamp = new Date(dStr).getTime();
            if (prevTimestamp) {
                const diffDays = Math.round((timestamp - prevTimestamp) / (1000 * 3600 * 24));
                if (diffDays === 1) {
                    current++;
                } else {
                    max = Math.max(max, current);
                    current = 1;
                }
            } else {
                current = 1;
            }
            prevTimestamp = timestamp;
        }
        max = Math.max(max, current);

        // Current Streak Calculation
        // Current Streak Calculation
        let streak = 0;
        // today is already defined above
        const todayStr = today.toISOString().split('T')[0];

        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        // Determine start point
        let checkDate: Date | null = null;

        if (dates.includes(todayStr)) {
            streak = 1;
            checkDate = new Date(today);
        } else if (dates.includes(yesterdayStr)) {
            streak = 1;
            checkDate = new Date(yesterday);
        }

        if (checkDate) {
            while (true) {
                checkDate.setDate(checkDate.getDate() - 1);
                const checkStr = checkDate.toISOString().split('T')[0];
                if (dates.includes(checkStr)) {
                    streak++;
                } else {
                    break;
                }
            }
        }

        return { currentStreak: streak, maxStreak: max, consistency };
    }

    // -- DATA FETCHING --

    async getDashboardData(): Promise<DashboardData> {
        const profile = await this.getProfile();
        if (!profile) throw new Error("Profile not found");

        // 1. Fetch current version & cycle details if they exist
        let currentVersion: Version | null = null;
        let currentCycle: Cycle | null = null;

        if (profile.current_version_id) {
            const { data } = await supabase.from('versions').select('*').eq('id', profile.current_version_id).single();
            currentVersion = data;
        }

        if (profile.current_cycle_id) {
            const { data } = await supabase.from('cycles').select('*').eq('id', profile.current_cycle_id).single();
            currentCycle = data;
        }

        // 2. Fetch Habits & Goals for Current Cycle
        let habits: Habit[] = [];
        let goals: Goal[] = [];

        if (currentCycle) {
            const { data: hData } = await supabase.from('habits').select('*').eq('cycle_id', currentCycle.id);
            habits = hData || [];

            const { data: gData } = await supabase.from('goals').select('*').eq('cycle_id', currentCycle.id);
            goals = gData || [];
        }

        // 3. Fetch Logs (Optimization: Fetch all logs for these habits? Or just active ones?)
        // For streaks we need history. Let's fetch logs for these habits.
        let logs: HabitLog[] = [];
        if (habits.length > 0) {
            const habitIds = habits.map(h => h.id);
            const { data: lData } = await supabase.from('habit_logs').select('*').in('habit_id', habitIds);
            logs = lData || [];
        }

        // 4. Calculate Stats
        const todayStr = this.getLocalDateString();
        const todayLogs = logs.filter(l => l.date === todayStr);

        const habitStats: Record<string, { currentStreak: number; maxStreak: number; consistency: number }> = {};
        habits.forEach(h => {
            habitStats[h.id] = this.calculateHabitStreaks(h.id, logs);
        });

        return {
            version: currentVersion,
            cycle: currentCycle,
            habits,
            todayLogs,
            habitStats,
            goals
        };
    }

    // -- ACTIONS --

    async toggleHabit(habitId: string, isChecked: boolean): Promise<void> {
        const userId = await this.getUserId();
        const todayStr = this.getLocalDateString();

        if (isChecked) {
            // INSERT log
            const { error } = await supabase.from('habit_logs').insert({
                habit_id: habitId,
                date: todayStr,
                status: true,
                user_id: userId
            });
            if (error) throw error;

            // Update Goal Streak if linked
            // Fetch habit to check link
            const { data: habit } = await supabase.from('habits').select('linked_goal_id').eq('id', habitId).single();
            if (habit && habit.linked_goal_id) {
                // Increment goal streak
                await supabase.rpc('increment_goal_streak', { goal_id: habit.linked_goal_id });
                // Note: We might need to implement this RPC or do it in two steps (fetch, update)
                // For now, let's do fetch-update safely
                const { data: goal } = await supabase.from('goals').select('current_streak').eq('id', habit.linked_goal_id).single();
                if (goal) {
                    await supabase.from('goals').update({ current_streak: (goal.current_streak || 0) + 1 }).eq('id', habit.linked_goal_id);
                }
            }

        } else {
            // DELETE log
            const { error } = await supabase.from('habit_logs').delete()
                .eq('habit_id', habitId)
                .eq('date', todayStr);

            if (error) throw error;

            // Decrement Goal Streak
            const { data: habit } = await supabase.from('habits').select('linked_goal_id').eq('id', habitId).single();
            if (habit && habit.linked_goal_id) {
                const { data: goal } = await supabase.from('goals').select('current_streak').eq('id', habit.linked_goal_id).single();
                if (goal) {
                    await supabase.from('goals').update({ current_streak: Math.max(0, (goal.current_streak || 0) - 1) }).eq('id', habit.linked_goal_id);
                }
            }
        }
    }

    // Toggle a habit log for a specific date (used by History page for retroactive edits)
    async toggleHabitForDate(habitId: string, date: string, isChecked: boolean): Promise<void> {
        const userId = await this.getUserId();

        if (isChecked) {
            const { error } = await supabase.from('habit_logs').insert({
                habit_id: habitId,
                date,
                status: true,
                user_id: userId
            });
            if (error) throw error;
        } else {
            const { error } = await supabase.from('habit_logs').delete()
                .eq('habit_id', habitId)
                .eq('date', date);
            if (error) throw error;
        }
    }

    // -- SLIDES (Storage + DB) --
    async getSlides(): Promise<Slide[]> {
        const { data } = await supabase.from('slides').select('*').order('category');
        if (!data) return [];

        return Promise.all(data.map(async (s) => {
            if (s.image_url && !s.image_url.startsWith('http')) {
                const { data: signed } = await supabase.storage
                    .from('el-portal-assets')
                    .createSignedUrl(s.image_url, 3600); // 1 hour expiry
                if (signed) {
                    return { ...s, image_url: signed.signedUrl };
                }
            }
            return s;
        }));
    }

    async updateSlide(slide: Slide, imageFile?: File): Promise<void> {
        const userId = await this.getUserId();
        let imageUrl = slide.image_url;

        if (imageFile) {
            // Upload to Supabase Storage
            const fileExt = imageFile.name.split('.').pop();
            const fileName = `${userId}/${slide.category}.${fileExt}`;
            const filePath = `${fileName}`; // e.g., "user_id/Me.jpg"

            const { error: uploadError } = await supabase.storage
                .from('el-portal-assets')
                .upload(filePath, imageFile, { upsert: true });

            if (uploadError) throw uploadError;

            // Ensure we store the PATH, or the Signed URL. 
            // Storing the PATH is cleaner, we generate Signed URL on read.
            // BUT `getSlides` returns `image_url`. The UI expects a usable URL.
            // So we should probably store the public URL if public, or generate signed urls on fetch.
            // Since it's private data, we must generate signed URLs.
            // For simplicity in this step, let's store the path and handle "view" logic in `getSlides` or separate method.
            // However, the interface expects `image_url`. 
            // Let's store the path in DB `image_url` column for now, and have a helper to sign it.
            imageUrl = filePath;
        }

        // Update DB Record
        // Check if exists
        const { data: existing } = await supabase.from('slides').select('id').eq('category', slide.category).single();

        if (existing) {
            await supabase.from('slides').update({
                image_url: imageUrl,
                caption: slide.caption
            }).eq('id', existing.id);
        } else {
            await supabase.from('slides').insert({
                user_id: userId,
                category: slide.category,
                image_url: imageUrl,
                caption: slide.caption
            });
        }
    }

    // Helper to get actual viewable URL
    // The UI might need to call this.
    async getSlideImageUrl(path: string): Promise<string> {
        if (!path) return '';
        if (path.startsWith('http')) return path; // Already a URL (e.g. seed data)

        const { data } = await supabase.storage.from('el-portal-assets').createSignedUrl(path, 3600); // 1 hour
        return data?.signedUrl || '';
    }

    // -- ARCHIVES --
    async getArchives(): Promise<ArchiveItem[]> {
        const { data } = await supabase.from('archives').select('*').order('created_at', { ascending: true });

        return (data || []).map(row => ({
            ...row,
            content: typeof row.content === 'object' && row.content?.markdown ? row.content.markdown : row.content
        }));
    }

    async updateArchive(item: ArchiveItem): Promise<{ id: string }> {
        const userId = await this.getUserId();
        const contentJson = { markdown: item.content };
        const isNewPlaceholder = item.id.startsWith('new-') || item.id === 'placeholder';

        // Check if exists - avoid invalid UUID query for new items
        let existing = null;
        if (!isNewPlaceholder) {
            const { data } = await supabase.from('archives').select('id').eq('id', item.id).maybeSingle();
            existing = data;
        }

        if (existing) {
            const { error } = await supabase.from('archives').update({
                type: item.type,
                title: item.title,
                content: contentJson
            }).eq('id', item.id);
            if (error) throw error;
            return { id: item.id };
        } else {
            // Remove 'temp' or 'new-' prefix if it exists to let DB generate UUID
            const { data, error } = await supabase.from('archives').insert({
                user_id: userId,
                type: item.type,
                title: item.title,
                content: contentJson,
                ...(!isNewPlaceholder ? { id: item.id } : {})
            }).select('id').single();

            if (error) throw error;
            return { id: data.id };
        }
    }

    async deleteArchive(id: string): Promise<void> {
        const { error } = await supabase.from('archives').delete().eq('id', id);
        if (error) throw error;
    }

    async seedDefaultArchives(): Promise<void> {
        const userId = await this.getUserId();

        const checkType = async (type: ArchiveType) => {
            const { data } = await supabase.from('archives').select('id').eq('user_id', userId).eq('type', type).limit(1);
            return data && data.length > 0;
        };

        const defaults = [
            {
                type: ArchiveType.VISION_5Y,
                title: 'Vision',
                content: { markdown: '# Vision\n\nWelcome to your Vision page. This is a single-document view focused on your long-term trajectory. Use this space to map out who you want to become and what you want to achieve.' }
            },
            {
                type: ArchiveType.LIFE_TODO,
                title: 'Life Checklist',
                content: { markdown: '# Life Checklist\n\nYour master list of personal projects and to-dos. You can use markdown to organize your life.\n\n- [ ] Example task' }
            },
            {
                type: ArchiveType.THEORY_NOTES,
                title: 'Purpose of Theory Notes',
                content: { markdown: 'Reflect on what is preventing results, catch daily frictions/problems, and draft solutions.' }
            },
            {
                type: ArchiveType.ROUTINE,
                title: 'Morning Routine',
                content: { markdown: '# Morning Routine:\n- [ ] Get sunlight\n- [ ] Get Water & (Creatine)\n- [ ] 20 Chin-Tucks\n- [ ] Take a look to Vision Board / Mantras\n- [ ] Meditate (5-10mins)' }
            },
            {
                type: ArchiveType.ROUTINE,
                title: 'Night Routine',
                content: { markdown: '# Night Routine:\n- [ ] **Start at 21:15**\n    - [ ] Shut everything off → charge devices\n    - [ ] Red lights\n    - [ ] Deep Sleep playlist\n- [ ] Brush teeth + face\n- [ ] Plan tomorrow\n- [ ] Journaling\n\n**9:45PM - 10PM**\n- [ ] Read in bed\n\n**Finish before 22:30**' }
            }
        ];

        for (const item of defaults) {
            const exists = await checkType(item.type);
            if (!exists) {
                await supabase.from('archives').insert({
                    user_id: userId,
                    type: item.type,
                    title: item.title,
                    content: item.content
                });
            }
        }
    }

    // -- MISC Helpers --
    // -- HISTORY & ANALYTICS --

    async getHistoryData(): Promise<{
        dailyScores: { date: string; score: number; details: any[] }[],
        cycles: Cycle[],
        habitStats: Record<string, { currentStreak: number; maxStreak: number; consistency: number }>
    }> {
        const userId = await this.getUserId();

        // 1. Fetch range
        const today = new Date();
        const ninetyDaysAgo = new Date();
        ninetyDaysAgo.setDate(today.getDate() - 90);
        const startDateStr = ninetyDaysAgo.toISOString().split('T')[0];

        // 2. Fetch Logs
        const { data: logsData } = await supabase
            .from('habit_logs')
            .select('*')
            .eq('user_id', userId)
            .gte('date', startDateStr);
        const logs = logsData || [];

        // 3. Fetch Habits (All of them to map names, or just current? History implies past habits too)
        // For accurate score, we need habits active ON THAT DATE. 
        // Our current schema links habits to cycles, and cycles have dates.
        // Simplification: We will fetch ALL habits and cycles to reconstruct context.
        const { data: habitsData } = await supabase.from('habits').select('*').eq('user_id', userId);
        const habits = habitsData || [];

        const { data: cyclesData } = await supabase.from('cycles').select('*').eq('user_id', userId);
        const cycles = cyclesData || [];

        // 4. Calculate Stats (Streaks)
        const habitStats: Record<string, { currentStreak: number; maxStreak: number; consistency: number }> = {};
        habits.forEach(h => {
            // We pass ALL logs to streak calc, it handles filtering by habit_id
            habitStats[h.id] = this.calculateHabitStreaks(h.id, logs);
        });

        // 5. Build Daily Scores
        const dailyScores = [];
        const todayStr = this.getLocalDateString();

        for (let i = 0; i <= 90; i++) {
            const d = new Date(ninetyDaysAgo);
            d.setDate(d.getDate() + i);
            const dateStr = this.getLocalDateString(d);
            if (dateStr > todayStr) break; // Don't go into future

            // Find active cycle for this date
            const activeCycle = cycles.find(c => c.start_date <= dateStr && c.end_date >= dateStr);

            // Find habits linked to this cycle
            const daysHabits = activeCycle
                ? habits.filter(h => h.cycle_id === activeCycle.id)
                : [];

            const dayLogs = logs.filter(l => l.date === dateStr);

            let score = 0;
            const details: any[] = []; // Explicitly typed as any[] or match interface if possible

            if (daysHabits.length > 0) {
                score = this.calculateDailyScore(daysHabits, dayLogs);

                // Populate details for HistoryPage inspector
                daysHabits.forEach(h => {
                    const isDone = dayLogs.some(l => l.habit_id === h.id && l.status);
                    details.push({
                        habit: h,
                        done: isDone
                    });
                });
            }

            dailyScores.push({
                date: dateStr,
                score,
                details
            });
        }

        return {
            dailyScores: dailyScores.reverse(), // Newest first usually? Or UI sorts? Dashboard slices -14.
            cycles, // Return all cycles
            habitStats
        };
    }

    // -- VERSION MANAGEMENT --
    async createVersion(data: { title: string; description: string; number: number; startDate: string }): Promise<Version> {
        const userId = await this.getUserId();
        const profile = await this.getProfile();

        const defaultDays = profile?.version_days_default || 90;
        const start = new Date(data.startDate);
        const end = new Date(start);
        end.setDate(start.getDate() + defaultDays);

        const { data: newVersion, error } = await supabase.from('versions').insert({
            user_id: userId,
            number: data.number,
            title: data.title,
            description: data.description,
            status: EntityStatus.ACTIVE,
            start_date: data.startDate,
            end_date: end.toISOString().split('T')[0]
        }).select().single();

        if (error) throw error;

        // Update Profile
        await supabase.from('profiles').update({ current_version_id: newVersion.id }).eq('id', userId);

        return newVersion;
    }

    // -- GOAL MANAGEMENT --
    async updateGoal(updatedGoal: Goal): Promise<void> {
        const { error } = await supabase.from('goals').update({
            title: updatedGoal.title,
            description: updatedGoal.description,
            type: updatedGoal.type,
            cycle_id: updatedGoal.cycle_id,
            subtasks: updatedGoal.subtasks, // JSONB
            current_streak: updatedGoal.current_streak,
            linked_habit_id: updatedGoal.linked_habit_id
        }).eq('id', updatedGoal.id);

        if (error) throw error;
    }

    // -- MANTRA MANAGEMENT --
    async getMantras(): Promise<string[]> {
        const userId = await this.getUserId();

        // 1. Get from Cycles
        const { data: cycles } = await supabase.from('cycles').select('mantras').eq('user_id', userId);
        const cycleMantras = new Set<string>();
        cycles?.forEach((c: any) => c.mantras?.forEach((m: string) => cycleMantras.add(m)));

        // 2. Get from Archives (Mantra Bank)
        const { data: archives } = await supabase
            .from('archives')
            .select('content')
            .eq('user_id', userId)
            .eq('type', ArchiveType.MANTRA_BANK);

        archives?.forEach(a => {
            // content might be jsonb or string depending on how we saved.
            // Our Schema says content is jsonb, but addMantra saves it. 
            // Let's assume content field in archive holds the string in 'markdown' prop or similar if structured, 
            // but for Mantras specifically we might just store the string or { text: ... }
            // Wait, previous implem used `content: text` in addMantra.
            // Let's coerce.
            const text = typeof a.content === 'object' && (a.content as any).markdown
                ? (a.content as any).markdown
                : JSON.stringify(a.content); // Fallback
            cycleMantras.add(text);
        });

        return Array.from(cycleMantras);
    }

    async addMantra(text: string): Promise<void> {
        const userId = await this.getUserId();

        await supabase.from('archives').insert({
            user_id: userId,
            type: ArchiveType.MANTRA_BANK,
            title: 'Mantra',
            content: { markdown: text }
        });
    }

    // -- CYCLE CREATION (Complex Transaction) --
    async createCycle(
        cycleData: Omit<Cycle, 'id' | 'version_id' | 'start_date' | 'end_date' | 'sprint_number'>,
        goalsData: Array<{ title: string; description: string; type: GoalType; subtasks?: string[]; habit?: { name: string; weight: number; category: string } }>,
        standaloneHabits: Array<{ name: string; weight: number; category: string }>
    ): Promise<Cycle> {
        const userId = await this.getUserId();
        const profile = await this.getProfile();
        if (!profile?.current_version_id) throw new Error("No active version");

        // 1. Calculate Sprint Number
        const { count } = await supabase
            .from('cycles')
            .select('*', { count: 'exact', head: true })
            .eq('version_id', profile.current_version_id);

        const sprintNum = (count || 0) + 1;

        // 2. Create Cycle
        const { data: newCycle, error: cycleError } = await supabase.from('cycles').insert({
            user_id: userId,
            version_id: profile.current_version_id,
            sprint_number: sprintNum,
            start_date: new Date().toISOString().split('T')[0], // Default today
            end_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            status: EntityStatus.ACTIVE,
            focus_priorities: cycleData.focus_priorities,
            problems: cycleData.problems,
            cch_list: cycleData.cch_list,
            mantras: cycleData.mantras,
            learning_focus: cycleData.learning_focus
        }).select().single();

        if (cycleError) throw cycleError;

        // 3. Create Goals & Linked Habits
        for (const gData of goalsData) {
            // Insert Goal first (without habit link)
            const { data: goal, error: gError } = await supabase.from('goals').insert({
                user_id: userId,
                cycle_id: newCycle.id,
                title: gData.title,
                description: gData.description,
                type: gData.type,
                subtasks: gData.subtasks?.map(name => ({ name, done: false })),
            }).select().single();

            if (gError) console.error("Error creating goal", gError);

            if (gData.habit && goal) {
                // Create Linked Habit
                const { data: habit, error: hError } = await supabase.from('habits').insert({
                    user_id: userId,
                    cycle_id: newCycle.id,
                    name: gData.habit.name,
                    weight: gData.habit.weight,
                    category: gData.habit.category,
                    linked_goal_id: goal.id
                }).select().single();

                // Update Goal with linked_habit_id
                if (habit) {
                    await supabase.from('goals').update({ linked_habit_id: habit.id }).eq('id', goal.id);
                }
            }
        }

        // 4. Create Standalone Habits
        for (const hData of standaloneHabits) {
            await supabase.from('habits').insert({
                user_id: userId,
                cycle_id: newCycle.id,
                name: hData.name,
                weight: hData.weight,
                category: hData.category
            });
        }

        // 5. Update Profile
        await supabase.from('profiles').update({ current_cycle_id: newCycle.id }).eq('id', userId);

        return newCycle;
    }

    // -- LAB METHODS --

    async getLabData(): Promise<{ goals: Goal[]; version: Version | null; cycles: Cycle[]; habits: Habit[]; activeCycleId: string | null, habitStats: Record<string, { currentStreak: number; maxStreak: number; consistency: number }> }> {
        const userId = await this.getUserId();
        const profile = await this.getProfile();

        // Fetch Versions (to find current)
        const { data: versions } = await supabase.from('versions').select('*').eq('user_id', userId);
        const currentVersion = versions?.find(v => v.id === profile?.current_version_id) || null;

        // Fetch Cycles
        const { data: cycles } = await supabase.from('cycles').select('*').eq('user_id', userId).order('sprint_number', { ascending: false });
        // Filter cycles for current version if exists
        const versionCycles = currentVersion
            ? (cycles || []).filter(c => c.version_id === currentVersion.id)
            : [];

        // Fetch ALL Goals and Habits (Lab needs access to database/library)
        const { data: goals } = await supabase.from('goals').select('*').eq('user_id', userId);
        const { data: habits } = await supabase.from('habits').select('*').eq('user_id', userId);

        // Fetch Logs for Stats
        const { data: logs } = await supabase.from('habit_logs').select('*').eq('user_id', userId);
        const habitStats: Record<string, { currentStreak: number; maxStreak: number; consistency: number }> = {};

        if (habits && logs) {
            habits.forEach(h => {
                habitStats[h.id] = this.calculateHabitStreaks(h.id, logs);
            });
        }

        return {
            goals: goals || [],
            version: currentVersion,
            cycles: versionCycles,
            habits: habits || [],
            activeCycleId: profile?.current_cycle_id || null,
            habitStats
        };
    }

    async updateCycle(cycle: Cycle): Promise<void> {
        const { error } = await supabase.from('cycles').update({
            start_date: cycle.start_date,
            end_date: cycle.end_date,
            status: cycle.status,
            focus_priorities: cycle.focus_priorities,
            problems: cycle.problems,
            cch_list: cycle.cch_list,
            mantras: cycle.mantras,
            learning_focus: cycle.learning_focus
        }).eq('id', cycle.id);
        if (error) throw error;
    }

    async deleteCycle(cycleId: string): Promise<void> {
        const userId = await this.getUserId();
        // Constraints: Goals/Habits restricted by foreign key? 
        // Our schema might have cascade delete. If not, we do manual cleanup.
        // Assuming CASCADE is ON for Foreign Keys in Schema.
        const { error } = await supabase.from('cycles').delete().eq('id', cycleId);
        if (error) throw error;

        // Update Profile if active cycle was deleted
        const profile = await this.getProfile();
        if (profile?.current_cycle_id === cycleId) {
            // Pick another or null
            // We just set to null, let UI handle or User pick
            await supabase.from('profiles').update({ current_cycle_id: null }).eq('id', userId);
        }
    }

    async setCycleActive(cycleId: string): Promise<void> {
        const userId = await this.getUserId();
        await supabase.from('profiles').update({ current_cycle_id: cycleId }).eq('id', userId);
    }

    // -- GOAL CRUD --
    async addGoal(goal: Goal): Promise<void> {
        const userId = await this.getUserId();
        // Goal ID might be pre-generated by UI or we let DB generate. 
        // DB uses uuid_generate_v4() default.
        // If UI sends ID, we use it. `goal.id` from `Lab.tsx` usage is `g-UUID`.
        // We need to respect that ID if we want optimistic UI to match.
        // But our DB calls `gen_random_uuid()`. 
        // Either we insert with ID or we let DB decide. 
        // Supabase allows inserting ID.

        const { error } = await supabase.from('goals').insert({
            id: goal.id, // Explicit ID from UI
            user_id: userId,
            cycle_id: goal.cycle_id,
            title: goal.title,
            description: goal.description,
            type: goal.type,
            subtasks: goal.subtasks?.map((s: any) => ({ ...s, name: s.name, done: s.done })), // Sanitation
            linked_habit_id: goal.linked_habit_id,
            current_streak: goal.current_streak
        });
        if (error) throw error;
    }

    async deleteGoal(goalId: string): Promise<void> {
        const { error } = await supabase.from('goals').delete().eq('id', goalId);
        if (error) throw error;
    }

    // -- HABIT CRUD --
    async getAllHabits(): Promise<Habit[]> {
        const userId = await this.getUserId();
        const { data } = await supabase.from('habits').select('*').eq('user_id', userId);
        return data || [];
    }

    async addHabit(habit: Habit): Promise<void> {
        const userId = await this.getUserId();
        const { error } = await supabase.from('habits').insert({
            id: habit.id,
            user_id: userId,
            cycle_id: habit.cycle_id,
            name: habit.name,
            weight: habit.weight,
            category: habit.category,
            linked_goal_id: habit.linked_goal_id
        });
        if (error) throw error;
    }

    async updateHabit(habit: Habit): Promise<void> {
        const { error } = await supabase.from('habits').update({
            name: habit.name,
            weight: habit.weight,
            category: habit.category,
            linked_goal_id: habit.linked_goal_id
        }).eq('id', habit.id);
        if (error) throw error;
    }

    async deleteHabit(habitId: string): Promise<void> {
        const { error } = await supabase.from('habits').delete().eq('id', habitId);
        if (error) throw error;
    }

    // -- DATABASE PAGE HELPERS --

    async getAllVersions(): Promise<Version[]> {
        const userId = await this.getUserId();
        const { data } = await supabase.from('versions').select('*').eq('user_id', userId).order('start_date', { ascending: false });
        return data || [];
    }

    async updateVersion(version: Version): Promise<void> {
        const { error } = await supabase.from('versions').update({
            title: version.title,
            description: version.description,
            start_date: version.start_date,
            end_date: version.end_date,
            status: version.status
        }).eq('id', version.id);
        if (error) throw error;
    }

    async deleteVersion(versionId: string): Promise<void> {
        const { error } = await supabase.from('versions').delete().eq('id', versionId);
        if (error) throw error;
    }

    async getAllCycles(): Promise<Cycle[]> {
        const userId = await this.getUserId();
        const { data } = await supabase.from('cycles').select('*').eq('user_id', userId).order('sprint_number', { ascending: false });
        return data || [];
    }

    async getAllGoals(): Promise<Goal[]> {
        const userId = await this.getUserId();
        const { data } = await supabase.from('goals').select('*').eq('user_id', userId);
        return data || [];
    }

    async signOut(): Promise<void> {
        await supabase.auth.signOut();
    }
}

export const supabaseService = new SupabaseService();
