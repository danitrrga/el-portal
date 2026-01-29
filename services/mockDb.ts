
import { 
  Profile, Version, Cycle, Habit, HabitLog, 
  EntityStatus, HabitWeight, CCHItem, Goal, GoalType, ArchiveItem, ArchiveType, Slide, SlideCategory, DashboardData 
} from '../types';

// Initial Seed Data to mimic a fresh "El Portal" state
const SEED_VERSION: Version = {
  id: 'v-1',
  number: 42,
  title: 'The Creator',
  description: 'Building the media empire. Documenting reality, networking in Bali, and mastering the craft.',
  status: EntityStatus.ACTIVE,
  start_date: '2024-06-01',
  end_date: '2024-09-01',
};

const SEED_CYCLE: Cycle = {
  id: 'c-1',
  version_id: 'v-1',
  sprint_number: 1, // Displayed as Cycle 1
  focus_priorities: ['Launch YouTube Channel', 'Fix Sleep Schedule', 'Daily Content Output'],
  problems: 'Perfectionism delaying uploads. Inconsistent wake up times.',
  cch_list: [
    { category: 'Beliefs', items: ['Quantity leads to quality.', 'I am a prolific creator.'] },
    { category: 'Characteristics', items: ['Charismatic', 'Relentless', 'Authentic'] },
    { category: 'Skills', items: ['Storytelling', 'Video Editing', 'Public Speaking'] }
  ],
  mantras: ['Done is better than perfect', 'Document, don\'t create'],
  learning_focus: 'Viral Storytelling Structures',
  start_date: '2024-06-01',
  end_date: '2024-06-15',
};

const SEED_HABITS: Habit[] = [
  { id: 'h-1', cycle_id: 'c-1', name: 'Morning Protocol (Sunlight + Hydration)', weight: HabitWeight.HIGH, category: 'Health' },
  { id: 'h-2', cycle_id: 'c-1', name: 'Deep Work (Editing/Scripting)', weight: HabitWeight.HIGH, category: 'Work' },
  { id: 'h-3', cycle_id: 'c-1', name: 'Read 30 mins', weight: HabitWeight.MEDIUM, category: 'Mind', linked_goal_id: 'g-2' },
  { id: 'h-4', cycle_id: 'c-1', name: 'No Phone 1h Before Bed', weight: HabitWeight.LOW, category: 'Health' },
];

const SEED_GOALS: Goal[] = [
  {
    id: 'g-1',
    cycle_id: 'c-1',
    title: 'Launch Channel',
    description: 'Upload the first 3 videos to establish the channel baseline.',
    type: GoalType.TASK_PROJECT,
    subtasks: [
      { name: 'Film "Who am I" Intro', done: true },
      { name: 'Edit Bali Vlog #1', done: true },
      { name: 'Design Channel Art', done: false },
    ]
  },
  {
    id: 'g-2',
    cycle_id: 'c-1',
    title: 'Intellectual Expansion',
    description: 'Consistent reading habit to fuel creativity.',
    type: GoalType.CONSISTENCY_METRIC,
    linked_habit_id: 'h-3',
    current_streak: 8
  }
];

const SEED_SLIDES: Slide[] = [
  { 
    id: 's-1', 
    category: SlideCategory.ME, 
    image_url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80', 
    caption: `# The Protagonist\n\nLiving life in the first person.\n\n- Confident\n- Stoic\n- Magnetic` 
  },
  { id: 's-2', category: SlideCategory.HER, image_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80', caption: '## The Muse\n\nFinding beauty in the quiet moments.' },
  { id: 's-3', category: SlideCategory.PURPOSE, image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80', caption: '## The Mission\n\nTo inspire others to live closer to their potential.' },
  { id: 's-4', category: SlideCategory.SOCIAL, image_url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80', caption: '## The Tribe\n\nSurround yourself with those who force you to level up.' },
  { id: 's-5', category: SlideCategory.MATERIAL, image_url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80', caption: '## The Aesthetics\n\nEnvironment designs the mind. Clean, modern, nature.' },
];

const SEED_ARCHIVES: ArchiveItem[] = [
  { id: 'a-1', type: ArchiveType.VISION_5Y, title: '5 Year Vision', content: '# 2029 Vision\n\nLiving in a modernist home in the mountains, running a media empire, physically peak condition.' },
  { id: 'a-2', type: ArchiveType.ROUTINE, title: 'Morning Boot Protocol', content: '- 07:00: Wake up\n- 07:10: Hydrate\n- 07:15: Cold Shower\n- 07:30: Deep Work Block 1' },
  { id: 'a-3', type: ArchiveType.LIFE_TODO, title: 'Master Life List', content: '- [ ] Visit Japan\n- [ ] Skyive in Dubai\n- [ ] Run a Marathon' }
];

class MockDB {
  private get<T>(key: string): T | null {
    const item = localStorage.getItem(`elportal_${key}`);
    return item ? JSON.parse(item) : null;
  }

  private set(key: string, value: any): void {
    localStorage.setItem(`elportal_${key}`, JSON.stringify(value));
  }

  // Simulate Auth
  login(): Promise<Profile> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let profile = this.get<Profile>('profile');
        if (!profile) {
          profile = {
            id: 'user-1',
            current_version_id: SEED_VERSION.id,
            current_cycle_id: SEED_CYCLE.id,
            avatar_url: 'https://picsum.photos/200',
            version_days_default: 90,
            cycles_per_version_default: 6
          };
          this.set('profile', profile);
          
          // Seed initial data if fresh user
          this.set('versions', [SEED_VERSION]);
          this.set('cycles', [SEED_CYCLE]);
          this.set('habits', SEED_HABITS);
          this.set('goals', SEED_GOALS);
          this.set('logs', []);
          this.set('archives', SEED_ARCHIVES);
          this.set('slides', SEED_SLIDES);
        }
        // Migration support for old data
        if (!profile.version_days_default) {
            profile.version_days_default = 90;
            profile.cycles_per_version_default = 6;
            this.set('profile', profile);
        }
        resolve(profile);
      }, 500);
    });
  }

  // -- SYSTEM SETTINGS --
  async getSystemSettings(): Promise<{ days: number; cycles: number }> {
      const profile = this.get<Profile>('profile');
      return {
          days: profile?.version_days_default || 90,
          cycles: profile?.cycles_per_version_default || 6
      };
  }

  async updateSystemSettings(days: number, cycles: number): Promise<void> {
      const profile = this.get<Profile>('profile');
      if (profile) {
          profile.version_days_default = days;
          profile.cycles_per_version_default = cycles;
          this.set('profile', profile);
      }
  }

  private calculateHabitStreaks(habitId: string, allLogs: HabitLog[]): { currentStreak: number, maxStreak: number } {
        // Filter logs for this habit and ensure they are 'true' (completed)
        const logs = allLogs.filter(l => l.habit_id === habitId && l.status);
        const dates = Array.from(new Set(logs.map(l => l.date))).sort();
        
        if (dates.length === 0) return { currentStreak: 0, maxStreak: 0 };

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
        let streak = 0;
        const today = new Date();
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
        
        return { currentStreak: streak, maxStreak: max };
  }

  async getDashboardData(): Promise<DashboardData> {
    const profile = this.get<Profile>('profile');
    if (!profile) throw new Error("Not authenticated");

    const versions = this.get<Version[]>('versions') || [];
    const cycles = this.get<Cycle[]>('cycles') || [];
    const habits = this.get<Habit[]>('habits') || [];
    const allLogs = this.get<HabitLog[]>('logs') || [];
    const goals = this.get<Goal[]>('goals') || [];

    const currentVersion = versions.find(v => v.id === profile.current_version_id) || null;
    const currentCycle = cycles.find(c => c.id === profile.current_cycle_id) || null;
    
    // Filter habits for current cycle
    const cycleHabits = currentCycle ? habits.filter(h => h.cycle_id === currentCycle.id) : [];

    // Filter goals for current cycle
    const cycleGoals = currentCycle ? goals.filter(g => g.cycle_id === currentCycle.id) : [];

    // Get today's logs
    const todayStr = new Date().toISOString().split('T')[0];
    const todayLogs = allLogs.filter(l => l.date === todayStr);

    // Calculate Stats for each habit
    const habitStats: Record<string, { currentStreak: number; maxStreak: number }> = {};
    cycleHabits.forEach(h => {
        habitStats[h.id] = this.calculateHabitStreaks(h.id, allLogs);
    });

    return {
      version: currentVersion,
      cycle: currentCycle,
      habits: cycleHabits,
      todayLogs,
      habitStats,
      goals: cycleGoals
    };
  }

  async toggleHabit(habitId: string, isChecked: boolean): Promise<void> {
    const allLogs = this.get<HabitLog[]>('logs') || [];
    const todayStr = new Date().toISOString().split('T')[0];
    const habits = this.get<Habit[]>('habits') || [];
    const goals = this.get<Goal[]>('goals') || [];

    // Remove existing log for today if exists
    const filteredLogs = allLogs.filter(l => !(l.habit_id === habitId && l.date === todayStr));

    if (isChecked) {
      filteredLogs.push({
        id: crypto.randomUUID(),
        habit_id: habitId,
        date: todayStr,
        status: true
      });

      // Update Linked Goal Streak
      const habit = habits.find(h => h.id === habitId);
      if (habit && habit.linked_goal_id) {
          const goalIndex = goals.findIndex(g => g.id === habit.linked_goal_id);
          if (goalIndex !== -1) {
              const g = goals[goalIndex];
              g.current_streak = (g.current_streak || 0) + 1;
              goals[goalIndex] = g;
              this.set('goals', goals);
          }
      }
    } else {
        // Decrease streak if unchecked
        const habit = habits.find(h => h.id === habitId);
        if (habit && habit.linked_goal_id) {
          const goalIndex = goals.findIndex(g => g.id === habit.linked_goal_id);
          if (goalIndex !== -1) {
              const g = goals[goalIndex];
              g.current_streak = Math.max(0, (g.current_streak || 0) - 1);
              goals[goalIndex] = g;
              this.set('goals', goals);
          }
      }
    }

    this.set('logs', filteredLogs);
  }

  // 3.1 Daily Performance Calculation
  // Weighted Average based on habit priority
  calculateDailyScore(habits: Habit[], logs: HabitLog[]): number {
    if (habits.length === 0) return 0;

    let totalWeight = 0;
    let completedWeight = 0;

    habits.forEach(habit => {
      totalWeight += habit.weight;
      const isDone = logs.some(l => l.habit_id === habit.id && l.status);
      if (isDone) {
        completedWeight += habit.weight;
      }
    });

    if (totalWeight === 0) return 0;
    return Math.round((completedWeight / totalWeight) * 100);
  }

  // 3.2 Asymptotic Goal Progression
  calculateAsymptoticScore(streak: number): number {
    // Constraint: 7 days = ~35%
    // Formula: Progress % = 100 * (1 - e^(-0.061 * StreakDays))
    if (streak <= 0) return 0;
    const progress = 100 * (1 - Math.exp(-0.061 * streak));
    return Math.min(100, Math.round(progress));
  }

  // -- LAB METHODS --

  async getLabData(): Promise<{ goals: Goal[]; version: Version | null; cycles: Cycle[]; habits: Habit[]; activeCycleId: string | null }> {
    const profile = this.get<Profile>('profile');
    if (!profile) throw new Error("Not authenticated");

    let goals = this.get<Goal[]>('goals');
    // Only seed if the key doesn't exist at all (null).
    if (goals === null) {
        goals = SEED_GOALS;
        this.set('goals', goals);
    }

    const versions = this.get<Version[]>('versions') || [];
    const cycles = this.get<Cycle[]>('cycles') || [];
    const habits = this.get<Habit[]>('habits') || [];

    const currentVersion = versions.find(v => v.id === profile.current_version_id) || null;
    
    // Get ALL cycles for this version, sorted newest first
    const versionCycles = currentVersion 
        ? cycles.filter(c => c.version_id === currentVersion.id).sort((a,b) => b.sprint_number - a.sprint_number)
        : [];

    // Get goals and habits for these cycles
    const cycleIds = versionCycles.map(c => c.id);
    const relevantGoals = goals.filter(g => cycleIds.includes(g.cycle_id));
    const relevantHabits = habits.filter(h => cycleIds.includes(h.cycle_id));

    return { 
        goals: relevantGoals,
        version: currentVersion,
        cycles: versionCycles,
        habits: relevantHabits,
        activeCycleId: profile.current_cycle_id
    };
  }

  async updateCycle(cycle: Cycle): Promise<void> {
      const cycles = this.get<Cycle[]>('cycles') || [];
      const index = cycles.findIndex(c => c.id === cycle.id);
      if (index !== -1) {
          cycles[index] = cycle;
          this.set('cycles', cycles);
      }
  }

  async deleteCycle(cycleId: string): Promise<void> {
    try {
        const profile = this.get<Profile>('profile');
        
        // 1. Delete Cycle
        let cycles = this.get<Cycle[]>('cycles') || [];
        cycles = cycles.filter(c => c.id !== cycleId);
        
        this.set('cycles', cycles);

        // 2. Delete Associated Goals
        let goals = this.get<Goal[]>('goals') || [];
        goals = goals.filter(g => g.cycle_id !== cycleId);
        this.set('goals', goals);

        // 3. Delete Associated Habits
        let habits = this.get<Habit[]>('habits') || [];
        habits = habits.filter(h => h.cycle_id !== cycleId);
        this.set('habits', habits);

        // 4. Update Profile if active cycle was deleted
        if (profile && profile.current_cycle_id === cycleId) {
            const remainingCycles = cycles.filter(c => c.version_id === profile.current_version_id);
            // Fallback to the latest cycle of the current version, or null
            const newest = remainingCycles.sort((a,b) => b.sprint_number - a.sprint_number)[0];
            profile.current_cycle_id = newest ? newest.id : null;
            this.set('profile', profile);
        }
    } catch (e) {
        throw e; // Re-throw to be caught by the UI
    }
  }
  
  // -- GOAL MANAGEMENT --
  
  async addGoal(goal: Goal): Promise<void> {
      const goals = this.get<Goal[]>('goals') || [];
      goals.push(goal);
      this.set('goals', goals);
  }

  async getAllGoals(): Promise<Goal[]> {
      return this.get<Goal[]>('goals') || [];
  }

  async updateGoal(updatedGoal: Goal): Promise<void> {
    let goals = this.get<Goal[]>('goals') || [];
    const idx = goals.findIndex(g => g.id === updatedGoal.id);
    if (idx !== -1) {
      goals[idx] = updatedGoal;
      this.set('goals', goals);
    }
  }

  async deleteGoal(goalId: string): Promise<void> {
    let goals = this.get<Goal[]>('goals') || [];
    goals = goals.filter(g => g.id !== goalId);
    this.set('goals', goals);
  }

  async setCycleActive(cycleId: string): Promise<void> {
      const profile = this.get<Profile>('profile');
      if (profile) {
          profile.current_cycle_id = cycleId;
          this.set('profile', profile);
      }
  }

  async getLastVersion(): Promise<Version | undefined> {
      const versions = this.get<Version[]>('versions') || [];
      return versions[versions.length - 1];
  }

  async createVersion(data: { title: string; description: string; number: number; startDate: string }): Promise<Version> {
      const versions = this.get<Version[]>('versions') || [];
      const profile = this.get<Profile>('profile');
      
      const defaultDays = profile?.version_days_default || 90;
      const start = new Date(data.startDate);
      const end = new Date(start);
      end.setDate(start.getDate() + defaultDays);

      const newVersion: Version = {
          id: `v-${versions.length + 1}`,
          number: data.number,
          title: data.title,
          description: data.description,
          status: EntityStatus.ACTIVE,
          start_date: data.startDate,
          end_date: end.toISOString().split('T')[0]
      };

      versions.push(newVersion);
      this.set('versions', versions);

      if (profile) {
          profile.current_version_id = newVersion.id;
          this.set('profile', profile);
      }

      return newVersion;
  }

  async updateVersion(version: Version): Promise<void> {
      const versions = this.get<Version[]>('versions') || [];
      const idx = versions.findIndex(v => v.id === version.id);
      if (idx !== -1) {
          versions[idx] = version;
          this.set('versions', versions);
      }
  }

  async deleteVersion(id: string): Promise<void> {
      let versions = this.get<Version[]>('versions') || [];
      versions = versions.filter(v => v.id !== id);
      this.set('versions', versions);
      
      const profile = this.get<Profile>('profile');
      if (profile && profile.current_version_id === id) {
          const remaining = versions[versions.length - 1];
          profile.current_version_id = remaining ? remaining.id : null;
          this.set('profile', profile);
      }
  }

  async createCycle(
      cycleData: Omit<Cycle, 'id' | 'version_id' | 'start_date' | 'end_date' | 'sprint_number'>, 
      goalsData: Array<{ title: string; description: string; type: GoalType; subtasks?: string[]; habit?: { name: string; weight: number; category: string } }>,
      standaloneHabits: Array<{ name: string; weight: number; category: string }>
  ): Promise<Cycle> {
      const profile = this.get<Profile>('profile');
      if (!profile || !profile.current_version_id) throw new Error("No active version found to attach cycle to.");

      const cycles = this.get<Cycle[]>('cycles') || [];
      const goals = this.get<Goal[]>('goals') || [];
      const habits = this.get<Habit[]>('habits') || [];

      // Determine sprint number for this version
      const versionCycles = cycles.filter(c => c.version_id === profile.current_version_id);
      const sprintNum = versionCycles.length + 1;

      const newCycle: Cycle = {
          id: `c-${Date.now()}`,
          version_id: profile.current_version_id,
          sprint_number: sprintNum,
          start_date: new Date().toISOString().split('T')[0],
          end_date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          ...cycleData
      };

      cycles.push(newCycle);
      this.set('cycles', cycles);

      // Create Goals & Linked Habits
      goalsData.forEach((gData, idx) => {
          const goalId = `g-${newCycle.id}-${idx}`;
          const newGoal: Goal = {
              id: goalId,
              cycle_id: newCycle.id,
              title: gData.title,
              description: gData.description,
              type: gData.type,
              subtasks: gData.subtasks?.map(name => ({ name, done: false })),
              current_streak: gData.type === GoalType.CONSISTENCY_METRIC ? 0 : undefined
          };
          
          if (gData.type === GoalType.CONSISTENCY_METRIC && gData.habit) {
              const habitId = `h-${goalId}`;
              newGoal.linked_habit_id = habitId;
              habits.push({
                  id: habitId,
                  cycle_id: newCycle.id,
                  name: gData.habit.name,
                  weight: gData.habit.weight,
                  category: gData.habit.category,
                  linked_goal_id: goalId
              });
          }
          goals.push(newGoal);
      });

      // Create Standalone Habits
      standaloneHabits.forEach((hData, idx) => {
          habits.push({
              id: `h-${newCycle.id}-s-${idx}`,
              cycle_id: newCycle.id,
              name: hData.name,
              weight: hData.weight,
              category: hData.category
          });
      });

      this.set('goals', goals);
      this.set('habits', habits);

      // Update Profile
      profile.current_cycle_id = newCycle.id;
      this.set('profile', profile);

      return newCycle;
  }

  async getMantras(): Promise<string[]> {
      const cycles = this.get<Cycle[]>('cycles') || [];
      const archives = this.get<ArchiveItem[]>('archives') || [];
      
      const allMantras = new Set<string>();
      cycles.forEach(c => c.mantras.forEach(m => allMantras.add(m)));
      
      const mantraArchives = archives.filter(a => a.type === ArchiveType.MANTRA_BANK);
      mantraArchives.forEach(a => allMantras.add(a.content));

      return Array.from(allMantras);
  }

  async addMantra(text: string): Promise<void> {
      const archives = this.get<ArchiveItem[]>('archives') || [];
      
      if (archives.some(a => a.type === ArchiveType.MANTRA_BANK && a.content === text)) return;

      archives.push({
          id: `arch-${Date.now()}`,
          type: ArchiveType.MANTRA_BANK,
          title: 'Mantra',
          content: text
      });
      
      this.set('archives', archives);
  }

  // Enhanced getHistoryData for rich analytics
  async getHistoryData(): Promise<{ 
    dailyScores: { date: string; score: number; details: { habit: Habit; done: boolean }[] }[],
    cycles: Cycle[],
    habitStats: Record<string, { currentStreak: number; maxStreak: number }>
  }> {
      const habits = this.get<Habit[]>('habits') || [];
      const logs = this.get<HabitLog[]>('logs') || [];
      const cycles = this.get<Cycle[]>('cycles') || [];
      const todayStr = new Date().toISOString().split('T')[0];
      
      // Calculate Stats
      const habitStats: Record<string, { currentStreak: number; maxStreak: number }> = {};
      habits.forEach(h => {
          habitStats[h.id] = this.calculateHabitStreaks(h.id, logs);
      });

      const days = [];
      // Generate last 90 days
      for (let i = 89; i >= 0; i--) {
          const d = new Date();
          d.setDate(d.getDate() - i);
          const dateStr = d.toISOString().split('T')[0];
          
          const dayLogs = logs.filter(l => l.date === dateStr);
          let score = 0;
          let details: { habit: Habit; done: boolean }[] = [];

          if (dateStr === todayStr) {
             // Real calculation for today
             score = this.calculateDailyScore(habits, dayLogs);
             details = habits.map(h => ({
                 habit: h,
                 done: dayLogs.some(l => l.habit_id === h.id && l.status)
             }));
          } else if (i > 0) {
              // MOCK DATA GENERATION FOR PAST DAYS
              // In a real app, this would query DB. Here we simulate "habit history"
              // Deterministic random based on date string so it doesn't flicker on refresh
              const hash = dateStr.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
              const pseudoRandom = (Math.sin(hash) + 1) / 2; // 0 to 1
              
              // Simulate habits for that day (using current habits for simplicity)
              details = habits.map(h => {
                 // Randomly done based on pseudoRandom + habit weight factor
                 const done = ((pseudoRandom * 100) + (h.weight * 5)) % 100 > 30; // ~70% success rate varying
                 return { habit: h, done };
              });
              
              // Calculate score based on these simulated logs
              let totalWeight = 0;
              let completedWeight = 0;
              details.forEach(d => {
                  totalWeight += d.habit.weight;
                  if (d.done) completedWeight += d.habit.weight;
              });
              score = totalWeight === 0 ? 0 : Math.round((completedWeight / totalWeight) * 100);
          }
          
          days.push({ date: dateStr, score, details });
      }
      return { dailyScores: days, cycles, habitStats };
  }

  async getSlides(): Promise<Slide[]> {
    let slides = this.get<Slide[]>('slides');
    if (!slides || slides.length === 0) {
        slides = SEED_SLIDES;
        this.set('slides', slides);
    }
    return slides;
  }

  async updateSlide(slide: Slide): Promise<void> {
    let slides = this.get<Slide[]>('slides') || [];
    const idx = slides.findIndex(s => s.category === slide.category);
    if (idx !== -1) {
        slides[idx] = slide;
    } else {
        slides.push(slide);
    }
    this.set('slides', slides);
  }

  async getArchives(): Promise<ArchiveItem[]> {
    let archives = this.get<ArchiveItem[]>('archives');
    if (!archives || archives.length === 0) {
        archives = SEED_ARCHIVES;
        this.set('archives', archives);
    }
    return archives;
  }

  async updateArchive(item: ArchiveItem): Promise<void> {
    let archives = this.get<ArchiveItem[]>('archives') || [];
    const idx = archives.findIndex(a => a.id === item.id);
    if (idx !== -1) {
        archives[idx] = item;
    } else {
        archives.push(item);
    }
    this.set('archives', archives);
  }

  // -- FULL HABIT MANAGEMENT --
  
  async getAllHabits(): Promise<Habit[]> {
    return this.get<Habit[]>('habits') || [];
  }

  async addHabit(habit: Habit): Promise<void> {
    const habits = this.get<Habit[]>('habits') || [];
    habits.push(habit);
    this.set('habits', habits);
  }

  async updateHabit(habit: Habit): Promise<void> {
    const habits = this.get<Habit[]>('habits') || [];
    const idx = habits.findIndex(h => h.id === habit.id);
    if (idx !== -1) {
        habits[idx] = habit;
        this.set('habits', habits);
    }
  }

  async deleteHabit(id: string): Promise<void> {
      let habits = this.get<Habit[]>('habits') || [];
      habits = habits.filter(h => h.id !== id);
      this.set('habits', habits);
      
      // Also delete logs associated with this habit to keep DB clean
      let logs = this.get<HabitLog[]>('logs') || [];
      logs = logs.filter(l => l.habit_id !== id);
      this.set('logs', logs);
  }
}

export const db = new MockDB();
