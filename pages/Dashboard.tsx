
import React, { useEffect, useState } from 'react';
import { supabaseService } from '../services/supabaseService';
import { Habit, HabitLog, Version, Cycle, Goal, GoalType } from '../types';
import { Check, Target, Brain, Calendar, TrendingUp, Flame, Trophy, Layers, Plus, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { NewVersionModal } from '../components/NewVersionModal';
import { PerformanceChart } from '../components/PerformanceChart';
import { ProgressArc } from '../components/ProgressArc';

type ChartView = 'week' | '30d' | 'cycle';

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
  const [chartView, setChartView] = useState<ChartView>('week');

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

    setData({ ...data, todayLogs: updatedLogs });
    const newScore = supabaseService.calculateDailyScore(data.habits, updatedLogs);
    setCurrentScore(newScore);

    const todayStr = new Date().toISOString().split('T')[0];
    setHistory(prev => prev.map(d => d.date === todayStr ? { ...d, score: newScore } : d));

    await supabaseService.toggleHabit(habitId, newStatus);
    await loadData();
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
    if (!goal.subtasks || !Array.isArray(goal.subtasks)) return;

    const newSubtasks = [...goal.subtasks];
    newSubtasks[index] = { ...newSubtasks[index], done: !newSubtasks[index].done };
    const updatedGoal = { ...goal, subtasks: newSubtasks };
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

  // Calculations
  const getCycleProgress = () => {
    if (!data.cycle) return { percent: 0, daysLeft: 0, totalDays: 30 };
    const start = new Date(data.cycle.start_date).getTime();
    const end = new Date(data.cycle.end_date).getTime();
    const now = new Date().getTime();
    const total = end - start;
    const elapsed = now - start;
    const percent = total > 0 ? Math.min(100, Math.max(0, (elapsed / total) * 100)) : 0;
    const daysLeft = Math.max(0, Math.ceil((end - now) / (1000 * 60 * 60 * 24)));
    const totalDays = Math.ceil(total / (1000 * 60 * 60 * 24));
    return { percent, daysLeft, totalDays };
  };
  const cycleStats = getCycleProgress();

  const formatDateShort = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const day = d.getDate().toString().padStart(2, '0');
    return `${month} ${day}`;
  };

  // Chart data based on view
  const getChartData = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (chartView === 'week') {
      const dayOfWeek = today.getDay();
      const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
      const monday = new Date(today);
      monday.setDate(today.getDate() + mondayOffset);

      const weekDays = [];
      for (let i = 0; i < 7; i++) {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        weekDays.push(d.toISOString().split('T')[0]);
      }

      return weekDays.map(dateStr => {
        const existing = history.find(h => h.date === dateStr);
        return existing || { date: dateStr, score: 0 };
      });
    } else if (chartView === '30d') {
      return history.slice(-30);
    } else {
      if (!data.cycle) return history.slice(-14);
      const cycleStart = new Date(data.cycle.start_date);
      const cycleEnd = new Date(data.cycle.end_date);
      return history.filter(h => {
        const d = new Date(h.date);
        return d >= cycleStart && d <= cycleEnd;
      });
    }
  };

  const chartData = getChartData();
  const activeProjects = data.goals.filter(g => g.type === GoalType.TASK_PROJECT && g.cycle_id === data.cycle?.id);

  // Parse learning focus as list
  const learningItems = data.cycle?.learning_focus
    ? data.cycle.learning_focus.split(/[,\n]/).map(s => s.trim()).filter(Boolean)
    : [];

  return (
    <div className="flex flex-col gap-6 p-2">

      {/* Hero Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-graphite-200 dark:border-graphite-800 pb-4">
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
              <div className="p-2 bg-graphite-100 dark:bg-graphite-800 rounded-lg"><Layers size={20} /></div>
              <h1 className="text-lg font-bold text-graphite-900 dark:text-white">System Standby</h1>
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
            <div className="flex items-center gap-2 text-[10px] font-mono font-medium text-graphite-400">
              <span>{formatDateShort(data.cycle?.start_date || '')}</span>
              <span className="text-graphite-300 dark:text-graphite-600">→</span>
              <span className="text-pacific-500">{formatDateShort(data.cycle?.end_date || '')}</span>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT COLUMN: Habit Tracker */}
        <div className="rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-graphite-500 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={14} /> HABIT TRACKER
            </h3>
          </div>
          <div className="space-y-3">
            {data.habits.map((habit) => {
              const isDone = data.todayLogs.some(l => l.habit_id === habit.id && l.status);
              const stats = data.habitStats[habit.id] || { currentStreak: 0, maxStreak: 0 };
              return (
                <div
                  key={habit.id}
                  onClick={() => handleToggleHabit(habit.id, isDone)}
                  className={`group relative cursor-pointer rounded-xl p-4 transition-all duration-300 border
                      ${isDone
                      ? 'bg-bali-500/10 border-bali-500/30'
                      : 'bg-graphite-50 dark:bg-graphite-800/50 border-graphite-200 dark:border-graphite-700 hover:border-pacific-500/50'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`h-5 w-5 flex-shrink-0 rounded-md flex items-center justify-center transition-all duration-300 border ${isDone
                        ? 'bg-bali-500 border-bali-500 text-white'
                        : 'bg-transparent border-graphite-300 dark:border-graphite-600 text-transparent group-hover:border-pacific-400'
                        }`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-semibold transition-colors ${isDone ? 'text-bali-600 dark:text-bali-400 line-through decoration-bali-500/30' : 'text-graphite-700 dark:text-graphite-200'}`}>
                        {habit.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 opacity-70 flex-shrink-0">
                      <div className="flex items-center gap-1" title="Current Streak">
                        <Flame size={14} className={stats.currentStreak > 0 ? "text-orange-500" : "text-graphite-400"} />
                        <span className={`text-xs font-bold ${stats.currentStreak > 0 ? "text-graphite-600 dark:text-graphite-300" : "text-graphite-400"}`}>{stats.currentStreak}</span>
                      </div>
                      <div className="flex items-center gap-1" title="Max Streak">
                        <Trophy size={14} className={stats.maxStreak > 0 ? "text-yellow-500" : "text-graphite-400"} />
                        <span className={`text-xs font-bold ${stats.maxStreak > 0 ? "text-graphite-600 dark:text-graphite-300" : "text-graphite-400"}`}>{stats.maxStreak}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {data.habits.length === 0 && (
              <div className="text-center py-12 text-sm text-graphite-400 italic">No habits defined for this cycle.</div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Arcs + Cycle Goals */}
        <div className="flex flex-col gap-6">

          {/* Row 1: Two Square Arc Cards - Using fixed height */}
          <div className="grid grid-cols-2 gap-6">
            {/* Efficiency Arc - Square Card */}
            <div className="h-40 rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 shadow-sm flex items-center justify-center">
              <ProgressArc
                value={currentScore}
                max={100}
                label="Efficiency"
                color="pacific"
                size="md"
              />
            </div>

            {/* Cycle Progress Arc - Square Card */}
            <div className="h-40 rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 shadow-sm flex items-center justify-center">
              <ProgressArc
                value={cycleStats.daysLeft}
                max={cycleStats.totalDays}
                label={`Cycle ${data.cycle?.sprint_number || '-'}`}
                sublabel="Days Left"
                color="bali"
                size="md"
              />
            </div>
          </div>

          {/* Row 2: Cycle Goals - Takes remaining space */}
          <div className="rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-5 shadow-sm flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-graphite-500 uppercase tracking-widest flex items-center gap-2">
                <Target size={14} /> CYCLE GOALS
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
                    className={`group relative rounded-xl border transition-all duration-300 overflow-hidden ${isExpanded || isDone
                      ? 'bg-bali-500/10 border-bali-500/30'
                      : 'bg-graphite-50 dark:bg-graphite-800/50 border-graphite-200 dark:border-graphite-700 hover:border-pacific-500/50'
                      }`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-graphite-100 dark:bg-graphite-800/50">
                      <div className={`h-full transition-all duration-500 ${isDone ? 'bg-bali-500' : 'bg-pacific-500'}`} style={{ width: `${progress}%` }} />
                    </div>
                    <div onClick={() => toggleProject(project.id)} className="p-4 cursor-pointer">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className={`text-sm font-bold leading-tight ${isDone ? 'text-bali-600 dark:text-bali-400 line-through' : 'text-graphite-900 dark:text-white'}`}>
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-graphite-400">
                          {Math.round(progress)}%
                          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </div>
                      </div>
                      {isExpanded && (
                        <div className="pt-3 border-t border-graphite-100 dark:border-graphite-700 space-y-2 mt-3">
                          {subtasks.length > 0 ? subtasks.map((task, i) => (
                            <div key={i} className="flex items-start gap-2" onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={() => handleToggleSubtask(project.id, i)}
                                className={`mt-0.5 h-4 w-4 rounded border flex items-center justify-center transition-all flex-shrink-0 ${task.done
                                  ? 'bg-pacific-500 border-pacific-500 text-white'
                                  : 'border-graphite-300 dark:border-graphite-600 hover:border-pacific-400'
                                  }`}
                              >
                                {task.done && <Check size={10} strokeWidth={3} />}
                              </button>
                              <span className={`text-sm leading-tight cursor-pointer ${task.done ? 'text-graphite-400 line-through' : 'text-graphite-600 dark:text-graphite-300'}`}
                                onClick={() => handleToggleSubtask(project.id, i)}>
                                {task.name}
                              </span>
                            </div>
                          )) : (
                            <div className="text-center py-2 text-xs text-graphite-400 italic">No subtasks defined.</div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              {activeProjects.length === 0 && (
                <div className="text-center py-8 text-sm text-graphite-400 italic">No cycle goals defined.</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: Progress Chart + Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Chart - 2/3 width */}
        <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase text-graphite-500 flex items-center gap-2">
              <TrendingUp size={14} /> Progress Chart
            </span>
            <div className="flex items-center gap-1 p-1 bg-graphite-100 dark:bg-graphite-800 rounded-lg">
              {(['week', '30d', 'cycle'] as ChartView[]).map((view) => (
                <button
                  key={view}
                  onClick={() => setChartView(view)}
                  className={`px-3 py-1.5 text-[10px] font-bold uppercase rounded-md transition-all ${chartView === view
                    ? 'bg-white dark:bg-graphite-700 text-graphite-900 dark:text-white shadow-sm'
                    : 'text-graphite-500 hover:text-graphite-700 dark:hover:text-graphite-300'
                    }`}
                >
                  {view === 'week' ? 'Week' : view === '30d' ? '30D' : 'Cycle'}
                </button>
              ))}
            </div>
          </div>
          <div className="h-36">
            <PerformanceChart
              data={chartData}
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Learning Focus + Priorities - 1/3 width */}
        <div className="flex flex-col gap-6">
          {/* Learning Focus */}
          <div className="rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-4 shadow-sm flex-1">
            <div className="flex items-center gap-2 mb-3 text-pacific-500">
              <BookOpen size={14} />
              <h3 className="text-[10px] font-bold uppercase tracking-widest">Learning Focus</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {learningItems.length > 0 ? learningItems.map((item, i) => (
                <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-lg bg-pacific-50 dark:bg-pacific-900/20 border border-pacific-200 dark:border-pacific-800 text-[11px] font-medium text-pacific-700 dark:text-pacific-300">
                  {item}
                </span>
              )) : (
                <span className="text-xs text-graphite-400 italic">Not defined</span>
              )}
            </div>
          </div>

          {/* Focus Priorities */}
          <div className="rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-4 shadow-sm flex-1">
            <div className="flex items-center gap-2 mb-3 text-bali-500">
              <Target size={14} />
              <h3 className="text-[10px] font-bold uppercase tracking-widest">Focus Priorities</h3>
            </div>
            <ul className="space-y-2">
              {data.cycle?.focus_priorities?.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 group">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-graphite-100 dark:bg-graphite-800 text-[10px] font-bold text-graphite-500">{i + 1}</span>
                  <span className="text-xs font-medium text-graphite-700 dark:text-graphite-300 leading-snug">{p}</span>
                </li>
              ))}
              {!data.cycle?.focus_priorities?.length && <li className="text-xs text-graphite-400 italic">Not defined</li>}
            </ul>
          </div>
        </div>
      </div>

      {showNewVersion && <NewVersionModal onClose={() => setShowNewVersion(false)} onCreate={handleCreateVersion} suggestedNumber={1} />}
    </div>
  );
};

export default Dashboard;
