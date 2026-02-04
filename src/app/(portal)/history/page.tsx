"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { supabaseService } from '@/lib/supabaseService';
import { CalendarDays, TrendingUp, BarChart3, ChevronDown, CheckCircle2, XCircle, Calendar, RefreshCw, MousePointerClick, Flame, Trophy } from 'lucide-react';
import { Habit, Cycle } from '@/types/types';
import dynamic from 'next/dynamic';

// Dynamically import PerformanceChart with no SSR
const PerformanceChart = dynamic(
    () => import('@/components/PerformanceChart').then(mod => ({ default: mod.PerformanceChart })),
    { ssr: false }
);

type TimeRange = '15d' | '30d' | '90d' | 'cycle';

interface DayData {
    date: string;
    score: number;
    details: { habit: Habit; done: boolean }[];
}

const HistoryPage: React.FC = () => {
    const [rawData, setRawData] = useState<DayData[]>([]);
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [habitStats, setHabitStats] = useState<Record<string, { currentStreak: number; maxStreak: number }>>({});
    const [loading, setLoading] = useState(true);

    // Controls
    const [timeRange, setTimeRange] = useState<TimeRange>('15d');
    const [selectedCycleId, setSelectedCycleId] = useState<string | null>(null);

    // Interactive Selection
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [hoverDate, setHoverDate] = useState<string | null>(null);

    useEffect(() => {
        supabaseService.getHistoryData().then((res: any) => {
            setRawData(res.dailyScores);
            setCycles(res.cycles);
            setHabitStats(res.habitStats);
            if (res.cycles.length > 0) setSelectedCycleId(res.cycles[0].id);

            // Default select today
            const today = supabaseService.getLocalDateString();
            setSelectedDate(today);

            setLoading(false);
        });
    }, []);

    // Filter Data based on controls
    const displayData = useMemo(() => {
        if (!rawData) return [];

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (timeRange === 'cycle' && selectedCycleId) {
            const cycle = cycles.find((c: Cycle) => c.id === selectedCycleId);
            if (cycle) {
                const start = new Date(cycle.start_date);
                const end = new Date(cycle.end_date);
                const cycleDays = [];

                let current = new Date(start);
                while (current <= end) {
                    cycleDays.push(supabaseService.getLocalDateString(current));
                    current.setDate(current.getDate() + 1);
                }

                return cycleDays.map(dateStr => {
                    const existing = rawData.find(d => d.date === dateStr);
                    return existing || { date: dateStr, score: 0, details: [] };
                });
            }
        } else {
            const daysToTake = timeRange === '15d' ? 15 : timeRange === '30d' ? 30 : 90;

            // Protect state from mutation, sort by date descending (newest first)
            const sortedRecords = [...rawData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            const slicedRecords = sortedRecords.slice(0, daysToTake);

            // Reverse so graph reads chronologically (Oldest -> Newest)
            return slicedRecords.reverse();
        }
        return rawData;
    }, [rawData, timeRange, selectedCycleId, cycles]);

    // Derived Stats
    const averageScore = displayData.length > 0
        ? Math.round(displayData.reduce((acc: number, curr: DayData) => acc + curr.score, 0) / displayData.length)
        : 0;

    const perfectDays = displayData.filter(d => d.score === 100).length;

    // Selected Day Details
    const selectedDayDetails = useMemo(() => {
        if (!selectedDate) return null;
        return rawData.find(d => d.date === selectedDate) || null;
    }, [selectedDate, rawData]);

    // Format helpers
    const formatDate = (dateStr: string) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    if (loading) return <div className="flex h-full items-center justify-center font-medium text-graphite-400">Loading Temporal Records...</div>;

    return (
        <div className="h-full flex flex-col gap-6">
            {/* Header & Controls */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-graphite-200 dark:border-graphite-800">
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-graphite-500 mb-2 flex items-center gap-2">
                        <BarChart3 size={14} /> Performance Analytics
                    </h2>
                    <h1 className="text-3xl font-display font-bold text-graphite-900 dark:text-white">
                        Temporal Records
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    {/* Cycle Selector (Only visible if 'cycle' mode) */}
                    {timeRange === 'cycle' && (
                        <div className="relative">
                            <select
                                value={selectedCycleId || ''}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCycleId(e.target.value)}
                                className="appearance-none bg-white dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-2 pr-10 text-sm font-bold text-graphite-700 dark:text-graphite-200 focus:outline-none focus:border-pacific-500"
                            >
                                {cycles.map((c: Cycle) => (
                                    <option key={c.id} value={c.id}>Cycle {c.sprint_number}</option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-graphite-400 pointer-events-none" />
                        </div>
                    )}

                    {/* Range Toggles */}
                    <div className="flex bg-white dark:bg-graphite-900 p-1 rounded-xl border border-graphite-200 dark:border-graphite-800 shadow-sm">
                        {(['15d', '30d', '90d', 'cycle'] as TimeRange[]).map(range => (
                            <button
                                key={range}
                                onClick={() => setTimeRange(range)}
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${timeRange === range
                                    ? 'bg-graphite-900 text-white dark:bg-white dark:text-graphite-900 shadow-md'
                                    : 'text-graphite-500 hover:text-graphite-900 dark:hover:text-white'
                                    }`}
                            >
                                {range === 'cycle' ? 'Cycle' : range.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">

                {/* LEFT: Chart Area */}
                <div className="lg:col-span-8 flex flex-col gap-6">

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-5 rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 shadow-sm">
                            <div className="text-xs font-bold text-graphite-400 uppercase tracking-wider mb-1">Avg Score</div>
                            <div className="text-3xl font-bold text-pacific-600 dark:text-pacific-400">{averageScore}%</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 shadow-sm">
                            <div className="text-xs font-bold text-graphite-400 uppercase tracking-wider mb-1">Perfect Days</div>
                            <div className="text-3xl font-bold text-bali-500">{perfectDays}</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 shadow-sm">
                            <div className="text-xs font-bold text-graphite-400 uppercase tracking-wider mb-1">Data Points</div>
                            <div className="text-3xl font-bold text-graphite-700 dark:text-graphite-200">{displayData.length}</div>
                        </div>
                    </div>

                    {/* Chart Container */}
                    <div className="rounded-3xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-6 shadow-sm flex flex-col flex-1 min-h-0">
                        <div className="mb-6 flex items-center justify-between flex-shrink-0">
                            <div className="flex items-center gap-2 text-pacific-500">
                                <TrendingUp size={20} />
                                <h3 className="font-bold text-graphite-900 dark:text-white">Performance Trajectory</h3>
                            </div>
                            <div className="flex items-center gap-4 text-xs font-mono text-graphite-400">
                                <span>{displayData.length > 0 ? `${formatDate(displayData[0].date)} — ${formatDate(displayData[displayData.length - 1].date)}` : ''}</span>
                            </div>
                        </div>

                        <div className="flex-1 min-h-[400px] w-full relative">
                            <PerformanceChart
                                data={displayData}
                                className="h-full w-full absolute inset-0"
                                onDataSelect={(item: any) => setSelectedDate(item.date)}
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT: Day Inspector Panel */}
                <div className="lg:col-span-4 flex flex-col h-full min-h-[400px]">
                    <div className="flex-1 rounded-3xl bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-800 p-1 shadow-inner flex flex-col">
                        {selectedDayDetails ? (
                            <div className="flex flex-col h-full bg-white dark:bg-graphite-900 rounded-[20px] shadow-sm overflow-hidden animate-in slide-in-from-right-4 duration-300">
                                {/* Inspector Header */}
                                <div className="p-6 border-b border-graphite-100 dark:border-graphite-800 bg-graphite-50/50 dark:bg-graphite-900">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold uppercase tracking-widest text-graphite-400 flex items-center gap-2">
                                            <Calendar size={14} /> Day Inspector
                                        </span>
                                        {selectedDayDetails.score >= 90 && (
                                            <span className="px-2 py-0.5 rounded bg-bali-100 dark:bg-bali-900/30 text-bali-600 dark:text-bali-400 text-[10px] font-bold uppercase">
                                                Elite Performance
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-baseline justify-between">
                                        <h2 className="text-2xl font-display font-bold text-graphite-900 dark:text-white">
                                            {new Date(selectedDayDetails.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                                        </h2>
                                        <div className="text-right">
                                            <div className="text-3xl font-bold text-pacific-600 dark:text-pacific-400">{selectedDayDetails.score}%</div>
                                            <div className="text-[10px] text-graphite-400 font-bold uppercase">Daily Score</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Inspector Content: Habits List */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                    {selectedDayDetails.details.map((detail: { habit: Habit; done: boolean }, idx: number) => {
                                        const stats = habitStats[detail.habit.id] || { currentStreak: 0, maxStreak: 0 };
                                        return (
                                            <div key={idx} className="flex items-center justify-between group">
                                                <div className="flex items-center gap-3">
                                                    <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${detail.done
                                                        ? 'bg-bali-100 text-bali-600 dark:bg-bali-900/20 dark:text-bali-400'
                                                        : 'bg-red-100 text-red-500 dark:bg-red-900/20 dark:text-red-400'
                                                        }`}>
                                                        {detail.done ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                                                    </div>
                                                    <div>
                                                        <div className={`text-sm font-medium ${detail.done ? 'text-graphite-900 dark:text-white' : 'text-graphite-500 dark:text-graphite-400'}`}>
                                                            {detail.habit.name}
                                                        </div>
                                                        <div className="flex items-center gap-3 mt-0.5">
                                                            <div className="text-[10px] text-graphite-400 uppercase tracking-wide">
                                                                {detail.habit.category} • Weight: {detail.habit.weight}
                                                            </div>
                                                            <div className="h-3 w-[1px] bg-graphite-200 dark:bg-graphite-700"></div>
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex items-center gap-0.5" title="Current Streak">
                                                                    <Flame size={10} className={stats.currentStreak > 0 ? "text-orange-500" : "text-graphite-300 dark:text-graphite-600"} />
                                                                    <span className={`text-[10px] font-bold ${stats.currentStreak > 0 ? "text-graphite-600 dark:text-graphite-400" : "text-graphite-300 dark:text-graphite-600"}`}>{stats.currentStreak}</span>
                                                                </div>
                                                                <div className="flex items-center gap-0.5" title="Max Streak">
                                                                    <Trophy size={10} className={stats.maxStreak > 0 ? "text-yellow-600" : "text-graphite-300 dark:text-graphite-600"} />
                                                                    <span className="text-[10px] font-bold text-graphite-300 dark:text-graphite-600">{stats.maxStreak}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`text-xs font-bold ${detail.done ? 'text-bali-500' : 'text-red-500 opacity-0 group-hover:opacity-100 transition-opacity'}`}>
                                                    {detail.done ? '+PTS' : 'MISS'}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-graphite-400 p-8 text-center">
                                <MousePointerClick size={32} className="mb-4 opacity-20" />
                                <p className="text-sm font-medium">Click on the timeline to inspect detailed logs for that day.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryPage;
