
import React, { useEffect, useState } from 'react';
import { supabaseService } from '../services/supabaseService';
import { Habit, HabitLog, Version, Cycle, HabitWeight, Goal, GoalType } from '../types';
import { Check, Activity, Target, Brain, AlertTriangle, Calendar, TrendingUp, Clock, Flame, Trophy, Layers, Plus, ChevronDown, ChevronUp, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import { NewVersionModal } from '../components/NewVersionModal';
import { PerformanceChart } from '../components/PerformanceChart';
import { DeepWorkTimer } from '../components/DeepWorkTimer';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<{
    version: Version | null;
    cycle: Cycle | null;
    habits: Habit[];
    todayLogs: HabitLog[];
    habitStats: Record<string, { currentStreak: number; maxStreak: number }>;
    goals: Goal[];
  } | null>(null);

  const [history, setHistory] = useState<{ date: string; score: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [showNewVersion, setShowNewVersion] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  // Load Data
  const loadData = async () => {
    try {
      const dashboardData = await supabaseService.getDashboardData();
      const historyData = await supabaseService.getHistoryData();
      setData(dashboardData);
      setHistory(historyData.dailyScores);
      setCurrentScore(supabaseService.calculateDailyScore(dashboardData.habits, dashboardData.todayLogs));
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleToggleHabit = async (habitId: string, currentStatus: boolean) => {
    if (!data) return;
    const newStatus = !currentStatus;
    const updatedLogs = newStatus
      ? [...data.todayLogs, { id: 'temp', habit_id: habitId, date: '', status: true }]
      : data.todayLogs.filter(l => l.habit_id !== habitId);

    // Optimistic Update
    setData({ ...data, todayLogs: updatedLogs });
    const newScore = supabaseService.calculateDailyScore(data.habits, updatedLogs);
    setCurrentScore(newScore);

    const todayStr = new Date().toISOString().split('T')[0];
    setHistory(prev => prev.map(d => d.date === todayStr ? { ...d, score: newScore } : d));

    // Server Sync
    await supabaseService.toggleHabit(habitId, newStatus);
    await loadData(); // Reload to get accurate streak data
  };

  const toggleProject = (id: string) => {
    const newSet = new Set(expandedProjects);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setExpandedProjects(newSet);
  };

  const handleToggleSubtask = async (goalId: string, index: number) => {
    if (!data) return;

    const goalIndex = data.goals.findIndex(g => g.id === goalId);
    if (goalIndex === -1) return;

    const goal = data.goals[goalIndex];
    // Supabase returns subtasks as JSONB, which is typed as any or specific structure. 
    // Ensure it's treated as array.
    if (!goal.subtasks || !Array.isArray(goal.subtasks)) return;

    const newSubtasks = [...goal.subtasks];
    newSubtasks[index] = { ...newSubtasks[index], done: !newSubtasks[index].done };

    const updatedGoal = { ...goal, subtasks: newSubtasks };

    // Optimistic Update
    const newGoals = [...data.goals];
    newGoals[goalIndex] = updatedGoal;

    setData({ ...data, goals: newGoals });

    await supabaseService.updateGoal(updatedGoal);
  };

  const handleCreateVersion = async (vData: { title: string; description: string; number: number; startDate: string }) => {
    await supabaseService.createVersion(vData);
    setShowNewVersion(false);
    loadData();
  };

  if (loading || !data) return <div className="flex h-full items-center justify-center text-sm font-medium text-graphite-400">Initializing Portal...</div>;

  // -- CHART LOGIC --
  const recentHistory = history.slice(-14);

  // Filter Active Projects
  const activeProjects = data.goals.filter(g => g.type === GoalType.TASK_PROJECT && g.cycle_id === data.cycle?.id);

  // -- DONUT CALCS --
  const getCycleProgress = () => {
    if (!data.cycle) return { percent: 0, daysLeft: 0 };
    const start = new Date(data.cycle.start_date).getTime();
    const end = new Date(data.cycle.end_date).getTime();
    const now = new Date().getTime();
    const total = end - start;
    const elapsed = now - start;
    const percent = total > 0 ? Math.min(100, Math.max(0, (elapsed / total) * 100)) : 0;
    const daysLeft = Math.max(0, Math.ceil((end - now) / (1000 * 60 * 60 * 24)));
    return { percent, daysLeft };
  };
  const cycleStats = getCycleProgress();

  const formatDateShort = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    // Format: JUN 01
    const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const day = d.getDate().toString().padStart(2, '0');
    return `${month} ${day}`;
  };

  return (
    <div className="space-y-4 pb-4 h-full flex flex-col">

      {/* Hero Header */}
      <header className="flex-none flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-graphite-200 dark:border-graphite-800 pb-4">
        {data.version ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center rounded-md bg-pacific-500/10 border border-pacific-500/20 px-2 py-0.5 text-[10px] font-bold text-pacific-600 dark:text-pacific-400 uppercase tracking-wider">
                Version {data.version.number}.0
              </span>
              <span className="text-[10px] font-bold text-graphite-400 uppercase tracking-wider">Active</span>
            </div>
            <h1 className="text-3xl font-display font-bold text-graphite-900 dark:text-white tracking-tight leading-none">
              {data.version.title}
            </h1>
            <p className="mt-1.5 text-sm text-graphite-500 dark:text-graphite-400 max-w-2xl leading-snug line-clamp-1">{data.version.description}</p>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3 text-graphite-400">
              <div className="p-2 bg-graphite-100 dark:bg-graphite-800 rounded-lg">
                <Layers size={20} />
              </div>
              <div>
                <h1 className="text-lg font-bold text-graphite-900 dark:text-white">System Standby</h1>
              </div>
            </div>
            <button onClick={() => setShowNewVersion(true)} className="px-4 py-2 bg-pacific-600 text-white text-xs font-bold rounded-xl hover:bg-pacific-500 transition-colors shadow-lg shadow-pacific-500/20 flex items-center gap-2">
              <Plus size={14} /> Initialize Version 1.0
            </button>
          </div>
        )}

        {data.version && (
          <div className="flex flex-col items-end">
            {data.cycle ? (
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pacific-500 animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase text-graphite-500 dark:text-graphite-400 tracking-wider">Cycle {data.cycle.sprint_number} Active</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                <span className="text-[10px] font-bold uppercase text-graphite-500 dark:text-graphite-400 tracking-wider">No Active Cycle</span>
              </div>
            )}
            <div className="flex items-center gap-3 text-[10px] font-medium text-graphite-400">
              <span>{data.cycle?.start_date || 'N/A'}</span>
              <span className="text-graphite-300 dark:text-graphite-700">|</span>
              <span className="text-pacific-500">{data.cycle?.end_date || 'N/A'}</span>
            </div>
          </div>
        )}
      </header>

      {/* Main Grid: 3-6-3 Layout - ALL COLUMNS STRETCH */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 flex-1 items-stretch">

        {/* Left: Habits & Projects (Col-3) */}
        <div className="lg:col-span-3 flex flex-col gap-4 h-full">

          {/* HABITS - Fixed or Auto Height */}
          <div className="flex flex-col gap-2 flex-shrink-0">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-[10px] font-bold text-graphite-500 uppercase tracking-widest flex items-center gap-1.5">
                <Calendar size={12} />
                HABIT TRACKER
              </h3>
            </div>

            <div className="space-y-2">
              {data.habits.map((habit) => {
                const isDone = data.todayLogs.some(l => l.habit_id === habit.id && l.status);
                const stats = data.habitStats[habit.id] || { currentStreak: 0, maxStreak: 0 };

                return (
                  <div
                    key={habit.id}
                    onClick={() => handleToggleHabit(habit.id, isDone)}
                    className={`group relative cursor-pointer rounded-xl p-2.5 transition-all duration-300 border backdrop-blur-sm
                        ${isDone
                        ? 'bg-bali-900/10 border-bali-500/20 shadow-[0_0_10px_-5px_rgba(16,185,129,0.1)]'
                        : 'bg-white/80 dark:bg-graphite-900/40 border-graphite-200 dark:border-graphite-800 hover:border-pacific-500/30 hover:bg-white dark:hover:bg-graphite-800'
                      }
                      `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`h-4 w-4 flex-shrink-0 rounded flex items-center justify-center transition-all duration-300 border ${isDone
                          ? 'bg-bali-500 border-bali-500 text-white'
                          : 'bg-transparent border-graphite-300 dark:border-graphite-600 text-transparent group-hover:border-pacific-400'
                          }`}>
                          <Check size={10} strokeWidth={4} />
                        </div>
                        <div className="min-w-0">
                          <span className={`text-xs font-bold transition-colors break-words ${isDone ? 'text-bali-600 dark:text-bali-400 line-through decoration-bali-500/30' : 'text-graphite-700 dark:text-graphite-200'}`}>
                            {habit.name}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 opacity-60 flex-shrink-0 ml-2">
                        {/* Current Streak */}
                        <div className="flex items-center gap-0.5" title="Current Streak">
                          <Flame size={10} className={stats.currentStreak > 0 ? "text-orange-500" : "text-graphite-400"} />
                          <span className={`text-[9px] font-bold ${stats.currentStreak > 0 ? "text-graphite-600 dark:text-graphite-300" : "text-graphite-400"}`}>{stats.currentStreak}</span>
                        </div>
                        {/* Max Streak */}
                        <div className="flex items-center gap-0.5" title="Max Streak">
                          <Trophy size={10} className={stats.maxStreak > 0 ? "text-yellow-500" : "text-graphite-400"} />
                          <span className={`text-[9px] font-bold ${stats.maxStreak > 0 ? "text-graphite-600 dark:text-graphite-300" : "text-graphite-400"}`}>{stats.maxStreak}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CURRENT FOCUS - Flex 1 to push down */}
          <div className="flex flex-col gap-2 mt-2 flex-1">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-[10px] font-bold text-graphite-500 uppercase tracking-widest flex items-center gap-1.5">
                <Target size={12} />
                CURRENT FOCUS
              </h3>
            </div>
            <div className="space-y-3">
              {activeProjects.map((project) => {
                const isExpanded = expandedProjects.has(project.id);
                const subtasks = project.subtasks || [];
                const completed = subtasks.filter(t => t.done).length;
                const total = subtasks.length;
                const progress = total > 0 ? (completed / total) * 100 : 0;
                const isDone = total > 0 && completed === total;

                return (
                  <div
                    key={project.id}
                    className={`group relative rounded-xl border transition-all duration-300 overflow-hidden backdrop-blur-sm ${isExpanded || isDone
                      ? 'bg-bali-900/10 border-bali-500/20 shadow-sm'
                      : 'bg-white/80 dark:bg-graphite-900/40 border-graphite-200 dark:border-graphite-800 hover:border-pacific-500/30 hover:bg-white dark:hover:bg-graphite-800'
                      }`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-graphite-100 dark:bg-graphite-800/50">
                      <div
                        className={`h-full transition-all duration-500 ${isDone ? 'bg-bali-500' : 'bg-pacific-500'}`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div
                      onClick={() => toggleProject(project.id)}
                      className="p-4 cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className={`text-sm font-bold leading-tight ${isDone ? 'text-bali-600 dark:text-bali-400 line-through' : 'text-graphite-900 dark:text-white'}`}>
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-graphite-400">
                          {Math.round(progress)}%
                          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </div>
                      </div>

                      {project.description && (
                        <p className="text-xs text-graphite-500 dark:text-graphite-400 line-clamp-1 mb-2">
                          {project.description}
                        </p>
                      )}

                      {isExpanded && (
                        <div className="pt-3 border-t border-graphite-100 dark:border-graphite-800 space-y-2 animate-in slide-in-from-top-1">
                          {subtasks.length > 0 ? subtasks.map((task, i) => (
                            <div key={i} className="flex items-start gap-2 group/task" onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={() => handleToggleSubtask(project.id, i)}
                                className={`mt-0.5 h-3.5 w-3.5 rounded-[4px] border flex items-center justify-center transition-all flex-shrink-0 ${task.done
                                  ? 'bg-pacific-500 border-pacific-500 text-white'
                                  : 'border-graphite-300 dark:border-graphite-600 hover:border-pacific-400'
                                  }`}
                              >
                                {task.done && <Check size={10} strokeWidth={3} />}
                              </button>
                              <span
                                className={`text-xs leading-tight transition-colors cursor-pointer ${task.done ? 'text-graphite-400 line-through' : 'text-graphite-600 dark:text-graphite-300'
                                  }`}
                                onClick={() => handleToggleSubtask(project.id, i)}
                              >
                                {task.name}
                              </span>
                            </div>
                          )) : (
                            <div className="text-center py-2 text-[10px] text-graphite-400 italic">No subtasks defined.</div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Center: Analytics (Col-6) */}
        <div className="lg:col-span-6 flex flex-col gap-4 h-full">

          {/* Row 1: Vitals (Efficiency & Cycle) - Compact Height h-36 */}
          <div className="grid grid-cols-2 gap-4 h-36 flex-shrink-0">

            {/* Slot 1: Efficiency Index */}
            <div className="relative rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-4 shadow-sm flex flex-col items-center justify-center overflow-hidden">
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="relative w-20 h-20">
                  <svg className="-rotate-90 transform w-full h-full" viewBox="0 0 100 100">
                    {/* Background Ring */}
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-graphite-100 dark:text-graphite-800" />
                    {/* Value Ring - Thinner (6) + Drop Shadow */}
                    <circle
                      cx="50" cy="50" r="40"
                      stroke="currentColor" strokeWidth="6"
                      fill="transparent" strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={2 * Math.PI * 40 * (1 - currentScore / 100)}
                      className="text-pacific-500 transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(14,165,233,0.3)]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center -mt-0.5">
                    <span className="text-3xl font-display font-bold text-graphite-900 dark:text-white tracking-tighter">{currentScore}%</span>
                  </div>
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-graphite-500">Efficiency</div>
              </div>
            </div>

            {/* Slot 2: Cycle Progress */}
            <div className="relative rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-4 shadow-sm flex flex-col items-center justify-center overflow-hidden">
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="relative w-20 h-20">
                  <svg className="-rotate-90 transform w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-graphite-100 dark:text-graphite-800" />
                    <circle
                      cx="50" cy="50" r="40"
                      stroke="currentColor" strokeWidth="6"
                      fill="transparent" strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={2 * Math.PI * 40 * (1 - cycleStats.percent / 100)}
                      className="text-bali-500 transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center leading-none -mt-1">
                    <span className="text-3xl font-display font-bold text-graphite-900 dark:text-white tracking-tighter">{cycleStats.daysLeft}</span>
                    <span className="text-[8px] font-bold uppercase text-graphite-400 mt-1">Days Left</span>
                  </div>
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-graphite-500">Cycle {data.cycle?.sprint_number}</div>

                {/* Added Dates Footer */}
                <div className="mt-2 px-2 py-0.5 rounded-full bg-graphite-50 dark:bg-white/5 border border-graphite-100 dark:border-white/5 flex items-center gap-1.5">
                  <span className="text-[9px] font-bold text-graphite-500 dark:text-graphite-400 tracking-widest font-mono">
                    {formatDateShort(data.cycle?.start_date || '')} <span className="text-graphite-300 dark:text-graphite-600 mx-0.5">|</span> {formatDateShort(data.cycle?.end_date || '')}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2: Performance Graph - Fixed Height h-48 */}
          <div className="rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-5 shadow-sm overflow-hidden relative flex flex-col h-48 flex-shrink-0">
            <div className="mb-2 flex items-center justify-between relative z-10 shrink-0">
              <span className="text-xs font-bold uppercase text-graphite-400 flex items-center gap-2"><TrendingUp size={14} /> Performance Trajectory</span>
            </div>

            {/* Explicit Pixel Height for Recharts */}
            <div className="flex-1 w-full -ml-2 min-h-0">
              <PerformanceChart
                data={recentHistory}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* Right: The Stack (Col-3) */}
        <div className="lg:col-span-3 flex flex-col gap-4 h-full">

          {/* Focus Priorities */}
          <div className="rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-4 shadow-sm flex-shrink-0">
            <div className="mb-3 flex items-center gap-2 text-pacific-500">
              <Target size={16} />
              <h3 className="text-xs font-bold uppercase tracking-wider">Focus Priorities</h3>
            </div>
            <ul className="space-y-2.5">
              {data.cycle?.focus_priorities.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 group">
                  <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded bg-graphite-100 dark:bg-graphite-800 text-[9px] font-bold text-graphite-500 border border-graphite-200 dark:border-graphite-700 group-hover:border-pacific-500 group-hover:text-pacific-500 transition-colors">{i + 1}</span>
                  <span className="text-xs font-medium text-graphite-700 dark:text-graphite-300 leading-snug">{p}</span>
                </li>
              ))}
              {!data.cycle && <li className="text-xs text-graphite-400 italic">No active cycle data.</li>}
            </ul>
          </div>

          {/* Learning Focus - Minimal Strip */}
          <div className="rounded-xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-3 shadow-sm flex items-center gap-3 flex-shrink-0">
            <div className="p-1.5 bg-pacific-50 dark:bg-pacific-900/10 rounded-lg text-pacific-500">
              <Brain size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-bold uppercase tracking-widest text-graphite-400 mb-0.5">Learning Focus</div>
              <div className="text-xs font-bold text-graphite-900 dark:text-white truncate">
                {data.cycle?.learning_focus || 'Not defined'}
              </div>
            </div>
          </div>

          {/* Deep Work Timer - Natural Content Fit */}
          <DeepWorkTimer />

        </div>

      </div>

      {showNewVersion && <NewVersionModal onClose={() => setShowNewVersion(false)} onCreate={handleCreateVersion} suggestedNumber={1} />}
    </div>
  );
};

export default Dashboard;
