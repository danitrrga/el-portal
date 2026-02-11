import React, { useState } from 'react';
import { Goal, GoalType, Habit, HabitWeight } from '@/types/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import {
    Target,
    ChevronDown,
    ChevronUp,
    Check,
    Activity,
    Flame,
    Trophy,
    CornerDownRight,
    Zap
} from 'lucide-react';
import { supabaseService } from '@/lib/supabaseService';

interface DashboardGoalsProps {
    goals: Goal[];
    habits: Habit[];
    habitStats: Record<string, { currentStreak: number; maxStreak: number }>;
    onUpdate: () => void;
}

export const DashboardGoals: React.FC<DashboardGoalsProps> = ({
    goals,
    habits,
    habitStats,
    onUpdate
}) => {
    // Local state for optimistic updates
    const [optimisticGoals, setOptimisticGoals] = useState<Goal[]>(goals);

    // Sync local state when props change (background revalidation)
    React.useEffect(() => {
        setOptimisticGoals(goals);
    }, [goals]);

    const handleToggleSubtask = async (goal: Goal, index: number) => {
        if (!goal.subtasks) return;

        // 1. Optimistic Update
        const newSubtasks = [...goal.subtasks];
        const newStatus = !newSubtasks[index].done;
        newSubtasks[index] = { ...newSubtasks[index], done: newStatus };

        const updatedGoal = { ...goal, subtasks: newSubtasks };

        // Update local UI immediately
        setOptimisticGoals(prev => prev.map(g => g.id === goal.id ? updatedGoal : g));

        // 2. Persist to Database (Background)
        try {
            await supabaseService.updateGoal(updatedGoal);
            // Optimization: We DO NOT call onUpdate() here to avoid race conditions.
            // The local state is already correct. Re-fetching stale data from the server
            // while multiple clicks are happening would cause the UI to flicker.
        } catch (error) {
            console.error('Error updating subtask:', error);
            // Revert on error
            setOptimisticGoals(prev => prev.map(g => g.id === goal.id ? goal : g));
            onUpdate(); // Force re-sync on error
        }
    };

    // State for single expanded goal (Accordion behavior)
    const [expandedGoalId, setExpandedGoalId] = useState<string | null>(null);

    const toggleGoal = (id: string) => {
        setExpandedGoalId(prev => prev === id ? null : id);
    };

    const getPercentage = (goal: Goal) => {
        if (goal.type === GoalType.TASK_PROJECT && goal.subtasks) {
            const total = goal.subtasks.length;
            if (total === 0) return 0;
            const completed = goal.subtasks.filter(t => t.done).length;
            return Math.round((completed / total) * 100);
        }
        // For consistency goals, we rely on the linked habit stats if available
        // or return 0/placeholder if not clearly defined in requirements
        return 0;
    };

    if (!goals || goals.length === 0) {
        return (
            <Card className="h-full bg-white dark:bg-graphite-900 border-graphite-200 dark:border-graphite-800 shadow-sm">
                <CardHeader className="pb-2">
                    <CardTitle className="text-[10px] font-bold text-graphite-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Target size={12} /> CYCLE GOALS
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center h-[200px] text-graphite-400">
                    <p className="text-xs italic">No goals defined for this cycle.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="h-full bg-white dark:bg-graphite-900 border-graphite-200 dark:border-graphite-800 shadow-sm overflow-hidden flex flex-col">
            <CardHeader className="pb-3 border-b border-graphite-100 dark:border-graphite-800/50">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-[10px] font-bold text-graphite-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Target size={12} /> CYCLE GOALS
                    </CardTitle>
                </div>
            </CardHeader>

            <CardContent className="p-0 overflow-y-auto flex-1 custom-scrollbar">
                <div className="flex flex-col divide-y divide-graphite-100 dark:divide-graphite-800/50">
                    {optimisticGoals.filter(g => g.type === GoalType.TASK_PROJECT).slice(0, 5).map((goal) => {
                        const isExpanded = expandedGoalId === goal.id;
                        const percentage = getPercentage(goal);
                        const subtasks = goal.subtasks || [];

                        return (
                            <div
                                key={goal.id}
                                className={`group relative p-4 transition-all duration-200 hover:bg-graphite-50/50 dark:hover:bg-graphite-800/20`}
                            >
                                {/* Header Section */}
                                <div className="flex items-center justify-between gap-3 mb-2">
                                    <div className="space-y-0.5 flex-1 min-w-0">
                                        <h3 className="text-xs font-bold text-graphite-900 dark:text-white leading-tight truncate">
                                            {goal.title}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <span className="text-[10px] font-mono font-bold text-graphite-400">{percentage}%</span>

                                        {/* Expand Toggle for Projects */}
                                        <button
                                            onClick={() => toggleGoal(goal.id)}
                                            className="p-0.5 rounded text-graphite-400 hover:text-pacific-500 hover:bg-pacific-50 dark:hover:bg-pacific-900/10 transition-colors"
                                        >
                                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                        </button>
                                    </div>
                                </div>

                                {/* CONTENT AREA */}
                                <div className="space-y-3">

                                    {/* PROJECT PROGRESS BAR */}
                                    <div className="w-full">
                                        <Progress
                                            value={percentage}
                                            className="h-1 bg-graphite-100 dark:bg-graphite-800"
                                            indicatorClassName={percentage >= 100 ? "bg-bali-500" : "bg-pacific-500"}
                                        />
                                    </div>



                                    {/* SUBTASKS ACCORDION */}
                                    {isExpanded && (
                                        <div className="pt-2 animate-in slide-in-from-top-1 duration-200">
                                            {/* Removed Separator for compactness */}

                                            <div className="space-y-0.5">
                                                {subtasks.length > 0 ? (
                                                    subtasks.map((task, i) => (
                                                        <div
                                                            key={i}
                                                            className={`
                                group/item flex items-start gap-2 p-1.5 rounded-md transition-colors
                                ${task.done
                                                                    ? 'opacity-50'
                                                                    : 'hover:bg-graphite-50 dark:hover:bg-graphite-800/30'
                                                                }
                              `}
                                                            style={{ paddingLeft: `${(task.level || 0) * 8 + 4}px` }}
                                                        >
                                                            {(task.level || 0) > 0 && (
                                                                <CornerDownRight className="text-graphite-300 dark:text-graphite-700 mt-1 flex-shrink-0" size={10} />
                                                            )}

                                                            <button
                                                                onClick={() => handleToggleSubtask(goal, i)}
                                                                className={`
                                  mt-0.5 h-3.5 w-3.5 rounded flex items-center justify-center border transition-all flex-shrink-0
                                  ${task.done
                                                                        ? 'bg-pacific-500 border-pacific-500 text-white shadow-sm'
                                                                        : 'bg-transparent border-graphite-300 dark:border-graphite-600 hover:border-pacific-400'
                                                                    }
                                `}
                                                            >
                                                                {task.done && <Check size={8} strokeWidth={4} />}
                                                            </button>

                                                            <span
                                                                className={`
                                  text-[11px] font-medium leading-snug cursor-pointer flex-1 pt-0.5 transition-colors line-clamp-1
                                  ${task.done
                                                                        ? 'text-graphite-400 line-through decoration-graphite-300 dark:decoration-graphite-700'
                                                                        : 'text-graphite-600 dark:text-graphite-300 group-hover/item:text-graphite-900 dark:group-hover/item:text-white'
                                                                    }
                                `}
                                                                onClick={() => handleToggleSubtask(goal, i)}
                                                            >
                                                                {task.name}
                                                            </span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-center py-2 text-[10px] text-graphite-400 italic">
                                                        No subtasks
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
};