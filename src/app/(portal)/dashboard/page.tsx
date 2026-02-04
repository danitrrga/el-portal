"use client";

import React, { useEffect, useState } from 'react';
import { supabaseService } from '@/lib/supabaseService';
import { Cycle, Goal, Habit, GoalType, HabitLog, Version } from '@/types/types';
import { Brain, Target, CheckCircle, ChevronDown, ChevronUp, Check, RefreshCw, TrendingUp, Plus, Calendar, Layers, Flame, Trophy, BookOpen, AlertTriangle } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import PerformanceChart with no SSR - Recharts doesn't work with SSR
const PerformanceChart = dynamic(
  () => import('@/components/PerformanceChart').then(mod => ({ default: mod.PerformanceChart })),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full flex items-center justify-center">
        <div className="animate-spin">
          <RefreshCw size={24} className="text-graphite-400" />
        </div>
      </div>
    )
  }
);

import { NewVersionModal } from '@/components/NewVersionModal';
import { ProgressArc } from '@/components/ProgressArc';
import { DashboardGoals } from '@/components/DashboardGoals';

type ChartView = 'week' | '30d' | 'cycle';

interface DashboardData {
  version: Version | null;
  cycle: Cycle | null;
  habits: Habit[];
  todayLogs: HabitLog[];
  habitStats: Record<string, { currentStreak: number; maxStreak: number }>;
  goals: Goal[];
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [history, setHistory] = useState<{ date: string; score: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [togglingHabits, setTogglingHabits] = useState<Set<string>>(new Set());
  const [chartView, setChartView] = useState<ChartView>('week');

  const [showNewVersion, setShowNewVersion] = useState(false);

  const loadData = async () => {
    try {
      await supabaseService.seedDefaultArchives();
      const dashboardData = await supabaseService.getDashboardData();
      const historyData = await supabaseService.getHistoryData();
      setData(dashboardData);
      setHistory(historyData.dailyScores);
      console.log('Dashboard Data Loaded:', dashboardData);
      console.log('History Data Loaded:', historyData.dailyScores);
      setCurrentScore(supabaseService.calculateDailyScore(dashboardData.habits, dashboardData.todayLogs));
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleToggleHabit = async (habitId: string, currentStatus: boolean) => {
    if (!data) return;

    // Prevent double-clicking while toggle is in progress
    if (togglingHabits.has(habitId)) return;

    const newStatus = !currentStatus;

    // Mark this habit as being toggled
    setTogglingHabits(prev => new Set(prev).add(habitId));

    try {
      // Optimistic UI update
      const updatedLogs = newStatus
        ? [...data.todayLogs, { id: 'temp', habit_id: habitId, date: '', status: true }]
        : data.todayLogs.filter(l => l.habit_id !== habitId);

      setData({ ...data, todayLogs: updatedLogs });
      const newScore = supabaseService.calculateDailyScore(data.habits, updatedLogs);
      setCurrentScore(newScore);

      const todayStr = supabaseService.getLocalDateString();
      setHistory(prev => prev.map(d => d.date === todayStr ? { ...d, score: newScore } : d));

      // Perform database update
      await supabaseService.toggleHabit(habitId, newStatus);

      // Efficiently update only the affected data instead of full reload
      const dashboardData = await supabaseService.getDashboardData();
      setData(dashboardData);
      setCurrentScore(supabaseService.calculateDailyScore(dashboardData.habits, dashboardData.todayLogs));

    } catch (error) {
      console.error('Error toggling habit:', error);
      // Revert optimistic update on error
      await loadData();
    } finally {
      // Remove from toggling set
      setTogglingHabits(prev => {
        const newSet = new Set(prev);
        newSet.delete(habitId);
        return newSet;
      });
    }
  };





  const handleCreateVersion = async (vData: { title: string; description: string; number: number; startDate: string }) => {
    await supabaseService.createVersion(vData);
    setShowNewVersion(false);
    loadData();
  };

  if (loading || !data) return <div className="flex h-full items-center justify-center text-sm font-medium text-graphite-400">Initializing Portal...</div>;

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
        weekDays.push(supabaseService.getLocalDateString(d));
      }

      return weekDays.map(dateStr => {
        const existing = history.find(h => h.date === dateStr);
        return existing || { date: dateStr, score: 0 };
      });
    }
    else if (chartView === '30d') {
      const sorted = [...history].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      return sorted.slice(0, 30).reverse();
    }
    else {
      // Cycle View
      if (!data.cycle) return [...history].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 14).reverse();

      const start = data.cycle.start_date;
      const end = data.cycle.end_date;

      const cycleData = history.filter(h => h.date >= start && h.date <= end);
      return [...cycleData].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
  };

  const chartData = getChartData();
  // activeProjects removed - handled in DashboardGoals


  const learningItems = data.cycle?.learning_focus
    ? data.cycle.learning_focus.split(/[,\n]/).map(s => s.trim()).filter(Boolean)
    : [];

  // Importance dots component
  const ImportanceDots = ({ weight, isDone }: { weight: number; isDone: boolean }) => (
    <div className="flex gap-0.5" title={`Importance: ${weight}`}>
      {[...Array(weight)].map((_, i) => (
        <div
          key={i}
          className={`h-1.5 w-2.5 rounded-full transition-colors duration-300 ${isDone ? 'bg-bali-500' : 'bg-graphite-400 dark:bg-graphite-600'
            }`}
        />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-5 h-full">

      {/* Hero Header - Compact */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-graphite-200 dark:border-graphite-800 pb-4 flex-shrink-0">
        {data.version ? (
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center rounded-md bg-pacific-500/10 border border-pacific-500/20 px-2.5 py-0.5 text-[10px] font-bold text-pacific-600 dark:text-pacific-400 uppercase tracking-wider">
                Version {data.version.number}.0
              </span>
              <span className="text-[10px] font-bold text-graphite-400 uppercase tracking-wider">Active</span>
            </div>
            <h1 className="text-2xl font-display font-bold text-graphite-900 dark:text-white tracking-tight leading-none">
              {data.version.title}
            </h1>
            <p className="mt-1.5 text-xs text-graphite-500 dark:text-graphite-400 max-w-2xl leading-snug line-clamp-1">{data.version.description}</p>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-2">
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
                <span className="h-2 w-2 rounded-full bg-pacific-500 animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase text-graphite-500 dark:text-graphite-400 tracking-wider">Cycle {data.cycle.sprint_number} Active</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                <span className="text-[10px] font-bold uppercase text-graphite-500 dark:text-graphite-400 tracking-wider">No Active Cycle</span>
              </div>
            )}
            <div className="flex items-center gap-2.5 text-[11px] font-mono font-medium text-graphite-500">
              <span>{formatDateShort(data.cycle?.start_date || '')}</span>
              <span className="text-graphite-300 dark:text-graphite-600">→</span>
              <span className="text-pacific-500 font-bold">{formatDateShort(data.cycle?.end_date || '')}</span>
            </div>
          </div>
        )}
      </header>

      {/* MAIN GRID: 4-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-shrink-0">

        {/* Col 1: Habit Tracker - 4 columns */}
        <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[10px] font-bold text-graphite-500 uppercase tracking-widest flex items-center gap-1.5">
              <Calendar size={12} /> HABIT TRACKER
            </h3>
            <span className="text-[10px] font-mono text-graphite-400">{data.todayLogs.filter(l => l.status).length}/{data.habits.length}</span>
          </div>
          <div className="space-y-2">
            {data.habits.map((habit) => {
              const isDone = data.todayLogs.some(l => l.habit_id === habit.id && l.status);
              const stats = data.habitStats[habit.id] || { currentStreak: 0, maxStreak: 0 };
              const isToggling = togglingHabits.has(habit.id);
              return (
                <div
                  key={habit.id}
                  onClick={() => !isToggling && handleToggleHabit(habit.id, isDone)}
                  className={`group relative rounded-xl p-3 transition-all duration-300 border
                      ${isToggling ? 'cursor-wait opacity-60' : 'cursor-pointer'}
                      ${isDone
                      ? 'bg-bali-500/10 border-bali-500/30'
                      : 'bg-graphite-50 dark:bg-graphite-800/50 border-graphite-200 dark:border-graphite-700 hover:border-pacific-500/50 hover:shadow-sm'
                    }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`h-5 w-5 flex-shrink-0 rounded-md flex items-center justify-center transition-all duration-300 border ${isDone
                        ? 'bg-bali-500 border-bali-500 text-white shadow-sm shadow-bali-500/30'
                        : 'bg-transparent border-graphite-300 dark:border-graphite-600 text-transparent group-hover:border-pacific-400'
                        }`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-semibold transition-colors truncate ${isDone ? 'text-bali-600 dark:text-bali-400 line-through decoration-bali-500/30' : 'text-graphite-700 dark:text-graphite-200'}`}>
                        {habit.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      {/* Importance Dots */}
                      <ImportanceDots weight={habit.weight} isDone={isDone} />
                      {/* Streak indicators */}
                      <div className="flex items-center gap-2 opacity-70">
                        <div className="flex items-center gap-0.5" title="Current Streak">
                          <Flame size={11} className={stats.currentStreak > 0 ? "text-orange-500" : "text-graphite-400"} />
                          <span className={`text-[10px] font-bold ${stats.currentStreak > 0 ? "text-graphite-600 dark:text-graphite-300" : "text-graphite-400"}`}>{stats.currentStreak}</span>
                        </div>
                        <div className="flex items-center gap-0.5" title="Best Streak">
                          <Trophy size={11} className={stats.maxStreak > 0 ? "text-yellow-500" : "text-graphite-400"} />
                          <span className={`text-[10px] font-bold ${stats.maxStreak > 0 ? "text-graphite-600 dark:text-graphite-300" : "text-graphite-400"}`}>{stats.maxStreak}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {data.habits.length === 0 && (
              <div className="text-center py-8 text-xs text-graphite-400 italic">No habits defined for this cycle.</div>
            )}
          </div>
        </div>

        {/* Col 2: Arc Cards STACKED VERTICALLY - 2 columns */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Efficiency Arc - Square */}
          <div className="aspect-square rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 shadow-sm flex items-center justify-center">
            <ProgressArc
              value={currentScore}
              max={100}
              label="Efficiency"
              color="pacific"
              size="sm"
            />
          </div>
          {/* Cycle Arc - Square */}
          <div className="aspect-square rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 shadow-sm flex items-center justify-center">
            <ProgressArc
              value={cycleStats.daysLeft}
              max={cycleStats.totalDays}
              label={`Cycle ${data.cycle?.sprint_number || '-'}`}
              sublabel="Days Left"
              color="bali"
              size="sm"
            />
          </div>
        </div>

        {/* Col 3: Cycle Goals - 3 columns */}
        <div className="lg:col-span-3 h-full min-h-[400px]">
          <DashboardGoals
            goals={data.goals.filter(g => g.cycle_id === data.cycle?.id)}
            habits={data.habits}
            habitStats={data.habitStats}
            onUpdate={loadData}
          />
        </div>

        {/* Col 4: Focus Cards - 3 columns */}
        <div className="lg:col-span-3 flex flex-col gap-3">

          {/* Learning Focus */}
          <div className="rounded-xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-3.5 shadow-sm">
            <div className="flex items-center gap-1.5 mb-2.5">
              <BookOpen size={13} className="text-pacific-500" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-graphite-500">Learning Focus</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {learningItems.length > 0 ? learningItems.map((item, i) => (
                <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-lg bg-pacific-500/10 border border-pacific-500/20 text-[11px] font-medium text-pacific-600 dark:text-pacific-400">
                  {item}
                </span>
              )) : (
                <span className="text-[10px] text-graphite-400 italic">Not defined</span>
              )}
            </div>
          </div>

          {/* Focus Priorities */}
          <div className="rounded-xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-3.5 shadow-sm">
            <div className="flex items-center gap-1.5 mb-2.5">
              <Target size={13} className="text-bali-500" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-graphite-500">Focus Priorities</h3>
            </div>
            <div className="space-y-2">
              {data.cycle?.focus_priorities?.map((p, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-bali-500/10 text-[10px] font-bold text-bali-500">{i + 1}</span>
                  <span className="text-xs font-medium text-graphite-700 dark:text-graphite-300 leading-snug">{p}</span>
                </div>
              ))}
              {!data.cycle?.focus_priorities?.length && <div className="text-[10px] text-graphite-400 italic">Not defined</div>}
            </div>
          </div>

          {/* Current Friction */}
          <div className="rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200/50 dark:border-red-900/30 p-3.5 shadow-sm">
            <div className="flex items-center gap-1.5 mb-2">
              <AlertTriangle size={13} className="text-red-500" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-red-500 dark:text-red-400">Friction</h3>
            </div>
            {data.cycle?.problems ? (
              <p className="text-xs italic text-red-700 dark:text-red-300/80 leading-relaxed">"{data.cycle.problems}"</p>
            ) : (
              <p className="text-[10px] text-graphite-400 italic">No friction defined</p>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM: Progress Chart - Full Width, Taller, Flex to Fill */}
      <div className="rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-6 shadow-sm flex-1 min-h-[350px] flex flex-col">
        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <span className="text-[11px] font-bold uppercase text-graphite-500 flex items-center gap-2">
            <TrendingUp size={14} /> Progress Chart
          </span>
          <div className="flex gap-1 bg-graphite-100 dark:bg-graphite-800 p-1 rounded-xl">
            {(['week', '30d', 'cycle'] as ChartView[]).map((view) => (
              <button
                key={view}
                onClick={() => setChartView(view)}
                className={`px-3 py-1 text-[10px] font-bold rounded-lg transition-all ${chartView === view
                  ? 'bg-white dark:bg-graphite-700 text-pacific-600 dark:text-pacific-400 shadow-sm'
                  : 'text-graphite-400 hover:text-graphite-600 dark:hover:text-graphite-200'
                  }`}
              >
                {view === 'week' ? 'WEEK' : view === '30d' ? '30 DAYS' : 'CYCLE'}
              </button>
            ))}
          </div>
        </div>

        {/* Ensure this div has a height and flex-basis */}
        <div className="flex-1 min-h-[300px] w-full relative">
          <PerformanceChart
            data={chartData}
            className="h-full w-full absolute inset-0"
          />
        </div>
      </div>

      {showNewVersion && (
        <NewVersionModal
          onClose={() => setShowNewVersion(false)}
          onCreate={handleCreateVersion}
          suggestedNumber={1}
        />
      )}
    </div>
  );
};

export default Dashboard;
