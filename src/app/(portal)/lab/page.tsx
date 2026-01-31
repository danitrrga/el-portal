"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabaseService } from '@/lib/supabaseService';
import { Goal, GoalType, Version, Cycle, HabitWeight, Habit, EntityStatus } from '@/types/types';
import { Target, Zap, Circle, CheckCircle2, Plus, ArrowRight, Brain, AlertTriangle, List, X, Layers, Activity, Fingerprint, ChevronRight, BarChart3, Calendar, ChevronDown, Edit3, Save, Trash2, Check, LayoutList, Link as LinkIcon, ChevronUp, MoreHorizontal, Copy, History, RefreshCw, Search, CornerDownRight, Archive, Eye, EyeOff } from 'lucide-react';
import { GoalFormModal } from '@/components/GoalFormModal';
import { CycleEditorModal } from '@/components/CycleEditorModal';
import { NewVersionModal } from '@/components/NewVersionModal';

// --- MODAL COMPONENTS ---

interface CycleSettingsModalProps {
    cycle: Cycle;
    isActive: boolean;
    onClose: () => void;
    onSave: (cycleId: string, startDate: string, endDate: string, setActive: boolean) => void;
}

const CycleSettingsModal: React.FC<CycleSettingsModalProps> = ({ cycle, isActive, onClose, onSave }) => {
    const [startDate, setStartDate] = useState(cycle.start_date);
    const [endDate, setEndDate] = useState(cycle.end_date);
    const [makeActive, setMakeActive] = useState(isActive);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4" onClick={onClose}>
            <div
                className="w-full max-w-md rounded-2xl bg-white dark:bg-graphite-900 p-6 shadow-2xl border border-graphite-200 dark:border-graphite-800 animate-in zoom-in-95 duration-200"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-graphite-900 dark:text-white flex items-center gap-2">
                        <Calendar size={18} className="text-pacific-500" /> Cycle Settings
                    </h2>
                    <button onClick={onClose} type="button"><X size={18} className="text-graphite-400 hover:text-white" /></button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-graphite-500 uppercase mb-1.5">Start Date</label>
                        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl px-3 py-2 text-sm text-graphite-900 dark:text-white focus:outline-none focus:border-pacific-500" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-graphite-500 uppercase mb-1.5">End Date</label>
                        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl px-3 py-2 text-sm text-graphite-900 dark:text-white focus:outline-none focus:border-pacific-500" />
                    </div>

                    <div className="pt-2">
                        <label className={`flex items-center gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${makeActive ? 'bg-pacific-50 dark:bg-pacific-900/10 border-pacific-500/50' : 'bg-graphite-50 dark:bg-graphite-800 border-graphite-200 dark:border-graphite-700 hover:border-graphite-400'}`}>
                            <div className={`h-5 w-5 rounded-full border flex items-center justify-center transition-colors ${makeActive ? 'bg-pacific-500 border-pacific-500' : 'border-graphite-400'}`}>
                                {makeActive && <Check size={12} className="text-white" />}
                            </div>
                            <input type="checkbox" checked={makeActive} onChange={e => !isActive && setMakeActive(e.target.checked)} className="hidden" disabled={isActive} />
                            <div>
                                <div className="text-sm font-bold text-graphite-900 dark:text-white">Active Status</div>
                                <div className="text-xs text-graphite-500">{isActive ? 'Currently the active cycle' : 'Set as current active cycle'}</div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-6 mt-2 border-t border-graphite-200 dark:border-graphite-800">
                    <button onClick={onClose} type="button" className="px-4 py-2 text-sm font-bold text-graphite-500 hover:text-graphite-900 dark:hover:text-white transition-colors">Cancel</button>
                    <button onClick={() => onSave(cycle.id, startDate, endDate, makeActive)} type="button" className="px-6 py-2 bg-pacific-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-pacific-500/30 hover:bg-pacific-500 transition-colors flex items-center gap-2">
                        <Save size={14} /> Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

interface HabitSelectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (habit: Habit) => void;
    currentCycleHabits: Habit[];
    allHabits: Habit[];
}

const HabitSelectorModal: React.FC<HabitSelectorModalProps> = ({ isOpen, onClose, onSelect, currentCycleHabits, allHabits }) => {
    const [activeTab, setActiveTab] = useState<'current' | 'database'>('current');
    const [searchTerm, setSearchTerm] = useState('');

    if (!isOpen) return null;
    const uniqueDbHabits = Array.from(new Map(allHabits.map((h: Habit) => [h.name, h])).values());
    const displayHabits = activeTab === 'current' ? currentCycleHabits : uniqueDbHabits;
    const filteredHabits = displayHabits.filter((h: Habit) => h.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4" onClick={onClose}>
            <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-graphite-900 shadow-2xl animate-in zoom-in-95 duration-200 border border-graphite-200 dark:border-graphite-800 flex flex-col max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 border-b border-graphite-200 dark:border-graphite-800">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-graphite-900 dark:text-white flex items-center gap-2"><LinkIcon size={18} className="text-pacific-500" /> Link Habit</h2>
                        <button onClick={onClose} className="text-graphite-400 hover:text-graphite-600 dark:hover:text-white"><X size={18} /></button>
                    </div>
                    <div className="flex gap-2 p-1 bg-graphite-100 dark:bg-graphite-800 rounded-lg mb-4">
                        <button onClick={() => setActiveTab('current')} className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-md transition-all ${activeTab === 'current' ? 'bg-white dark:bg-graphite-700 text-graphite-900 dark:text-white shadow-sm' : 'text-graphite-500'}`}>Current Cycle</button>
                        <button onClick={() => setActiveTab('database')} className={`flex-1 py-1.5 text-xs font-bold uppercase rounded-md transition-all ${activeTab === 'database' ? 'bg-white dark:bg-graphite-700 text-graphite-900 dark:text-white shadow-sm' : 'text-graphite-500'}`}>Database</button>
                    </div>
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search habits..." className="w-full bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-pacific-500 text-graphite-900 dark:text-white" />
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {filteredHabits.length > 0 ? filteredHabits.map(habit => (
                        <button key={habit.id} onClick={() => onSelect(habit)} className="w-full text-left p-4 rounded-xl border border-graphite-200 dark:border-graphite-800 hover:border-pacific-500 dark:hover:border-pacific-500 bg-white dark:bg-graphite-800/50 hover:bg-pacific-50 dark:hover:bg-pacific-900/10 transition-all group">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold text-graphite-900 dark:text-white group-hover:text-pacific-600 dark:group-hover:text-pacific-400 transition-colors">{habit.name}</span>
                                {activeTab === 'database' && <span className="text-[10px] font-bold uppercase text-graphite-400 bg-graphite-100 dark:bg-graphite-800 px-2 py-0.5 rounded">Import</span>}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-graphite-500">
                                <span>{habit.category}</span>
                                <span className="text-graphite-300">•</span>
                                <span className={habit.weight === HabitWeight.HIGH ? 'text-pacific-500 font-bold' : ''}>{habit.weight === HabitWeight.HIGH ? 'High Priority' : habit.weight === HabitWeight.MEDIUM ? 'Medium' : 'Low'}</span>
                            </div>
                        </button>
                    )) : (<div className="text-center py-8 text-graphite-400 text-sm">No habits found.</div>)}
                </div>
            </div>
        </div>
    );
};

const Lab: React.FC = () => {
    const [data, setData] = useState<{ goals: Goal[]; version: Version | null; cycles: Cycle[]; habits: Habit[]; activeCycleId: string | null } | null>(null);
    const [loading, setLoading] = useState(true);
    const [showNewVersion, setShowNewVersion] = useState(false);
    const [showNewCycle, setShowNewCycle] = useState(false);
    const [editingCycle, setEditingCycle] = useState<Cycle | null>(null);
    const [cycleInSettings, setCycleInSettings] = useState<Cycle | null>(null);
    const [showAddGoalModal, setShowAddGoalModal] = useState(false);
    const [targetCycleIdForAddGoal, setTargetCycleIdForAddGoal] = useState<string | null>(null);
    const [showHabitSelector, setShowHabitSelector] = useState(false);
    const [selectedGoalIdForLinking, setSelectedGoalIdForLinking] = useState<string | null>(null);
    const [allHabitsHistory, setAllHabitsHistory] = useState<Habit[]>([]);
    const [editingSubtask, setEditingSubtask] = useState<{ goalId: string, index: number } | null>(null);
    const [editSubtaskText, setEditSubtaskText] = useState('');
    const [addingSubtaskGoalId, setAddingSubtaskGoalId] = useState<string | null>(null);
    const [newSubtaskText, setNewSubtaskText] = useState('');
    const [expandedCycleId, setExpandedCycleId] = useState<string | null>(null);
    const [collapsedGoals, setCollapsedGoals] = useState<Set<string>>(new Set());
    const [showArchived, setShowArchived] = useState(false);
    const [verifyDeleteId, setVerifyDeleteId] = useState<string | null>(null);
    const [maxCycles, setMaxCycles] = useState(6);

    const loadLabData = async () => {
        try {
            const labData = await supabaseService.getLabData();
            setData(labData);
            const history = await supabaseService.getAllHabits();
            setAllHabitsHistory(history);
            const settings = await supabaseService.getSystemSettings();
            setMaxCycles(settings.cycles);
            if (labData.activeCycleId && !expandedCycleId) setExpandedCycleId(labData.activeCycleId);
            setLoading(false);
        } catch (e) { console.error(e); }
    };

    useEffect(() => { loadLabData(); }, []);

    const handleCreateVersion = async (vData: { title: string; description: string; number: number; startDate: string }) => { await supabaseService.createVersion(vData); setShowNewVersion(false); loadLabData(); };

    const handleCreateCycle = async (cData: any, gData: any[], hData: any[]) => {
        await supabaseService.createCycle(cData, gData, hData);
        setShowNewCycle(false);
        loadLabData();
    };

    const handleUpdateCycle = async (updatedCycle: Cycle) => { await supabaseService.updateCycle(updatedCycle); setEditingCycle(null); loadLabData(); };

    const handleArchiveCycle = async (e: React.MouseEvent, cycleId: string) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            if (!data) return;
            const cycle = data.cycles.find((c: Cycle) => c.id === cycleId);
            if (!cycle) return;

            const currentStatus = cycle.status || EntityStatus.ACTIVE;
            const newStatus = currentStatus === EntityStatus.ARCHIVED ? EntityStatus.ACTIVE : EntityStatus.ARCHIVED;

            const updatedCycles = data.cycles.map((c: Cycle) => c.id === cycleId ? { ...c, status: newStatus } : c);
            setData({ ...data, cycles: updatedCycles });

            await supabaseService.updateCycle({ ...cycle, status: newStatus });
            await loadLabData();
        } catch (e) {
            console.error("Archive failed", e);
            loadLabData();
        }
    };

    const handleDeleteCycle = async (e: React.MouseEvent, cycleId: string) => {
        e.preventDefault();
        e.stopPropagation();

        if (verifyDeleteId !== cycleId) {
            setVerifyDeleteId(cycleId);
            setTimeout(() => setVerifyDeleteId(curr => curr === cycleId ? null : curr), 3000);
            return;
        }

        try {
            setData((currentData: any) => {
                if (!currentData) return null;
                return {
                    ...currentData,
                    cycles: currentData.cycles.filter((c: Cycle) => c.id !== cycleId)
                };
            });

            if (expandedCycleId === cycleId) setExpandedCycleId(null);

            await supabaseService.deleteCycle(cycleId);
            await loadLabData();

            setVerifyDeleteId(null);
        } catch (err) {
            loadLabData();
        }
    };

    const handleUpdateCycleSettings = async (cycleId: string, startDate: string, endDate: string, setActive: boolean) => {
        if (!data) return;
        const cycleToUpdate = data.cycles.find((c: Cycle) => c.id === cycleId);
        if (cycleToUpdate) {
            const updatedCycle = { ...cycleToUpdate, start_date: startDate, end_date: endDate };
            await supabaseService.updateCycle(updatedCycle);
        }
        if (setActive && data.activeCycleId !== cycleId) { await supabaseService.setCycleActive(cycleId); }
        setCycleInSettings(null);
        loadLabData();
    };

    const handleAddGoal = async (goalData: { title: string; description: string; type: GoalType; subtasks?: string[] }, linkedHabit: Habit | null) => {
        if (!targetCycleIdForAddGoal) return;
        const newGoalId = `g-${crypto.randomUUID()}`;
        const newGoal: Goal = { id: newGoalId, cycle_id: targetCycleIdForAddGoal, title: goalData.title, description: goalData.description, type: goalData.type, };
        if (goalData.type === GoalType.TASK_PROJECT) {
            const tasks = goalData.subtasks?.map(rawName => {
                const match = rawName.match(/^(\s*)/); const leadingStr = match ? match[1] : ''; const normalizedIndent = leadingStr.replace(/\t/g, '  '); const level = Math.floor(normalizedIndent.length / 2);
                return { name: rawName.trim(), done: false, level };
            }) || [];
            newGoal.subtasks = tasks;
        } else if (goalData.type === GoalType.CONSISTENCY_METRIC && linkedHabit) {
            let habitId = linkedHabit.id;
            if (linkedHabit.cycle_id !== targetCycleIdForAddGoal) {
                const newHabitId = `h-${crypto.randomUUID()}`; const newHabit: Habit = { ...linkedHabit, id: newHabitId, cycle_id: targetCycleIdForAddGoal, linked_goal_id: newGoalId };
                await supabaseService.addHabit(newHabit); habitId = newHabitId;
            } else { const updatedHabit = { ...linkedHabit, linked_goal_id: newGoalId }; await supabaseService.updateHabit(updatedHabit); }
            newGoal.linked_habit_id = habitId; newGoal.current_streak = 0;
        }
        await supabaseService.addGoal(newGoal); setShowAddGoalModal(false); loadLabData();
    };

    const handleDeleteGoal = async (id: string) => { await supabaseService.deleteGoal(id); loadLabData(); };
    const handleOpenHabitSelector = (goalId: string) => { setSelectedGoalIdForLinking(goalId); setShowHabitSelector(true); };
    const handleLinkHabit = async (habit: Habit) => {
        if (!data || !selectedGoalIdForLinking) return;
        const isCurrentCycle = habit.cycle_id === data.activeCycleId;
        let habitIdToLink = habit.id;
        if (!isCurrentCycle && data.activeCycleId) {
            const newHabit: Habit = { id: `h-${crypto.randomUUID()}`, cycle_id: data.activeCycleId, name: habit.name, category: habit.category, weight: habit.weight, linked_goal_id: selectedGoalIdForLinking };
            await supabaseService.addHabit(newHabit); habitIdToLink = newHabit.id;
        } else { const updatedHabit = { ...habit, linked_goal_id: selectedGoalIdForLinking }; await supabaseService.updateHabit(updatedHabit); }
        const goalToUpdate = data.goals.find((g: Goal) => g.id === selectedGoalIdForLinking);
        if (goalToUpdate) { const updatedGoal = { ...goalToUpdate, linked_habit_id: habitIdToLink }; await supabaseService.updateGoal(updatedGoal); }
        setShowHabitSelector(false); setSelectedGoalIdForLinking(null); loadLabData();
    };

    const handleToggleSubtask = async (goal: Goal, index: number) => { if (!goal.subtasks) return; const updatedSubtasks = [...goal.subtasks]; updatedSubtasks[index].done = !updatedSubtasks[index].done; const updatedGoal = { ...goal, subtasks: updatedSubtasks }; await supabaseService.updateGoal(updatedGoal); loadLabData(); };
    const handleDeleteSubtask = async (goal: Goal, index: number) => { if (!goal.subtasks) return; const updatedSubtasks = goal.subtasks.filter((_, i) => i !== index); const updatedGoal = { ...goal, subtasks: updatedSubtasks }; await supabaseService.updateGoal(updatedGoal); loadLabData(); };
    const handleStartEditSubtask = (goalId: string, index: number, currentName: string) => { setEditingSubtask({ goalId, index }); setEditSubtaskText(currentName); };
    const handleSaveSubtaskEdit = async (goal: Goal, index: number) => { if (!goal.subtasks) return; const updatedSubtasks = [...goal.subtasks]; updatedSubtasks[index].name = editSubtaskText; const updatedGoal = { ...goal, subtasks: updatedSubtasks }; await supabaseService.updateGoal(updatedGoal); setEditingSubtask(null); setEditSubtaskText(''); loadLabData(); };
    const handleAddNewSubtask = async (goal: Goal) => { if (!newSubtaskText.trim()) return; const updatedSubtasks = goal.subtasks ? [...goal.subtasks] : []; updatedSubtasks.push({ name: newSubtaskText, done: false, level: 0 }); const updatedGoal = { ...goal, subtasks: updatedSubtasks }; await supabaseService.updateGoal(updatedGoal); setAddingSubtaskGoalId(null); setNewSubtaskText(''); loadLabData(); };
    const toggleGoalCollapse = (goalId: string) => { const newSet = new Set(collapsedGoals); if (newSet.has(goalId)) newSet.delete(goalId); else newSet.add(goalId); setCollapsedGoals(newSet); };

    // --- Handlers for CycleEditorModal ---
    const handleManageGoal = async (action: 'create' | 'update' | 'delete', payload: any) => {
        if (!editingCycle) return;
        if (action === 'delete') {
            await handleDeleteGoal(payload.id);
        } else {
            const goalData = {
                title: payload.title,
                description: payload.description,
                type: payload.type,
                subtasks: payload.subtasks
            };

            if (action === 'create') {
                const newGoalId = `g-${crypto.randomUUID()}`;
                const newGoal: Goal = {
                    id: newGoalId,
                    cycle_id: editingCycle.id,
                    title: goalData.title,
                    description: goalData.description,
                    type: goalData.type
                };

                if (goalData.type === GoalType.TASK_PROJECT) {
                    const tasks = payload.subtasks?.map((rawName: string) => {
                        const match = rawName.match(/^(\s*)/);
                        const leadingStr = match ? match[1] : '';
                        const normalizedIndent = leadingStr.replace(/\t/g, '  ');
                        const level = Math.floor(normalizedIndent.length / 2);
                        return { name: rawName.trim(), done: false, level };
                    }) || [];
                    newGoal.subtasks = tasks;
                } else if (goalData.type === GoalType.CONSISTENCY_METRIC && payload.linkedHabit) {
                    let habitId = payload.linkedHabit.id;
                    if (payload.linkedHabit.cycle_id !== editingCycle.id) {
                        const newHabitId = `h-${crypto.randomUUID()}`;
                        const newHabit: Habit = { ...payload.linkedHabit, id: newHabitId, cycle_id: editingCycle.id, linked_goal_id: newGoalId };
                        await supabaseService.addHabit(newHabit);
                        habitId = newHabitId;
                    } else {
                        const updatedHabit = { ...payload.linkedHabit, linked_goal_id: newGoalId };
                        await supabaseService.updateHabit(updatedHabit);
                    }
                    newGoal.linked_habit_id = habitId;
                    newGoal.current_streak = 0;
                }
                await supabaseService.addGoal(newGoal);
            } else {
                const originalGoal = data?.goals.find((g: Goal) => g.id === payload.id);
                if (!originalGoal) return;

                let updatedSubtasks = originalGoal.subtasks;
                if (goalData.type === GoalType.TASK_PROJECT && payload.subtasks) {
                    updatedSubtasks = payload.subtasks.map((rawName: string) => {
                        const match = rawName.match(/^(\s*)/);
                        const leadingStr = match ? match[1] : '';
                        const normalizedIndent = leadingStr.replace(/\t/g, '  ');
                        const level = Math.floor(normalizedIndent.length / 2);
                        return { name: rawName.trim(), done: false, level };
                    });
                }

                const updatedGoal: Goal = {
                    ...originalGoal,
                    title: goalData.title,
                    description: goalData.description,
                    type: goalData.type,
                    subtasks: updatedSubtasks,
                    linked_habit_id: payload.linkedHabit?.id
                };
                await supabaseService.updateGoal(updatedGoal);
            }
            await loadLabData();
        }
    };

    const handleManageHabit = async (action: 'create' | 'update' | 'delete', payload: any) => {
        if (!editingCycle) return;
        if (action === 'delete') {
            await supabaseService.deleteHabit(payload.id);
        } else if (action === 'create') {
            const newHabit: Habit = {
                id: `h-${crypto.randomUUID()}`,
                cycle_id: editingCycle.id,
                name: payload.name,
                category: payload.category,
                weight: payload.weight
            };
            await supabaseService.addHabit(newHabit);
        } else {
            const updatedHabit: Habit = {
                ...data?.habits.find((h: Habit) => h.id === payload.id)!,
                name: payload.name,
                category: payload.category,
                weight: payload.weight
            };
            await supabaseService.updateHabit(updatedHabit);
        }
        await loadLabData();
    };

    const handleRenameCategory = async (oldName: string, newName: string) => {
        const allHabits = await supabaseService.getAllHabits();
        const toUpdate = allHabits.filter(h => h.category === oldName);
        for (const h of toUpdate) {
            await supabaseService.updateHabit({ ...h, category: newName });
        }
        await loadLabData();
    };

    const handleDeleteCategory = async (categoryName: string) => {
        const allHabits = await supabaseService.getAllHabits();
        const toUpdate = allHabits.filter(h => h.category === categoryName);
        for (const h of toUpdate) {
            await supabaseService.updateHabit({ ...h, category: 'Uncategorized' });
        }
        await loadLabData();
    };

    // Define the standardized handler for library deletions
    const handleDeleteHabitFromLibrary = async (habitId: string) => {
        // 1. Perform Deletion
        await supabaseService.deleteHabit(habitId);

        // 2. Refresh Local Library State immediately
        const history = await supabaseService.getAllHabits();
        setAllHabitsHistory(history);

        // 3. Refresh Global Lab Data
        await loadLabData();
    };

    if (loading || !data) return <div className="flex h-full items-center justify-center font-medium text-graphite-400">Loading Lab Environment...</div>;

    const currentHabits = data.habits.filter(h => h.cycle_id === data.activeCycleId);

    const hasArchivedCycles = data.cycles.some(c => c.status === EntityStatus.ARCHIVED);
    const visibleCycles = data.cycles.filter(c => showArchived || c.status !== EntityStatus.ARCHIVED);

    return (
        <div className="pb-10">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                {data.version ? (
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="inline-flex items-center justify-center rounded bg-pacific-500/10 border border-pacific-500/20 px-2 py-0.5 text-[10px] font-bold text-pacific-600 dark:text-pacific-400 uppercase tracking-wider">Current Version</span>
                            <span className="text-pacific-500 font-mono font-bold text-sm">v{data.version.number}.0</span>
                        </div>
                        <h1 className="text-4xl font-display font-bold text-graphite-900 dark:text-white tracking-tight">{data.version.title}</h1>
                        <p className="text-graphite-500 italic mt-1">"{data.version.description}"</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center gap-3 text-graphite-400">
                            <div className="p-2 bg-graphite-100 dark:bg-graphite-800 rounded-lg">
                                <Layers size={24} />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-graphite-900 dark:text-white">System Standby</h1>
                                <p className="text-xs font-medium uppercase tracking-wide">No Active Version</p>
                            </div>
                        </div>
                        <p className="text-sm text-graphite-500 max-w-md">The system is currently dormant. Initialize the first Version to begin tracking cycles and habits.</p>
                        <button onClick={() => setShowNewVersion(true)} className="px-4 py-2 bg-pacific-600 text-white text-sm font-bold rounded-xl hover:bg-pacific-500 transition-colors shadow-lg shadow-pacific-500/20 flex items-center gap-2">
                            <Plus size={16} /> Initialize Version 1.0
                        </button>
                    </div>
                )}

                {data.version && (
                    <div className="flex items-center gap-3">
                        <div className="text-right mr-4 hidden md:block"><div className="text-[10px] font-bold text-graphite-400 uppercase tracking-widest flex items-center justify-end gap-2"><Calendar size={12} /> Timeline</div><div className="font-mono text-sm text-graphite-600 dark:text-graphite-300">{data.version.start_date} — {data.version.end_date}</div></div>
                        <button onClick={() => setShowNewVersion(true)} type="button" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 text-sm font-bold hover:border-pacific-500 transition-colors"><Plus size={16} /> New Version</button>
                    </div>
                )}
            </header>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h3 className="text-xs font-bold text-graphite-400 uppercase tracking-widest flex items-center gap-2"><Layers size={14} /> Cycles Log</h3>
                        {hasArchivedCycles && (
                            <button
                                onClick={() => setShowArchived(!showArchived)}
                                type="button"
                                className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-graphite-100 dark:bg-graphite-800 text-graphite-500 hover:text-pacific-500 transition-colors flex items-center gap-1"
                            >
                                {showArchived ? <EyeOff size={12} /> : <Eye size={12} />} {showArchived ? 'Hide Archived' : 'Show Archived'}
                            </button>
                        )}
                    </div>
                    {data.version && data.cycles.length < maxCycles && (
                        <button onClick={() => setShowNewCycle(true)} type="button" className="text-pacific-600 hover:text-pacific-500 p-2 rounded-lg bg-pacific-50 dark:bg-pacific-900/10"><Plus size={20} /></button>
                    )}
                </div>

                {visibleCycles.map((cycle: Cycle) => {
                    const isSystemActive = cycle.id === data.activeCycleId;
                    const isArchived = cycle.status === EntityStatus.ARCHIVED;
                    const cycleGoals = data.goals.filter((g: Goal) => g.cycle_id === cycle.id);
                    const isExpanded = expandedCycleId === cycle.id;
                    const cardBaseClass = "bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-[#262629] transition-all duration-300";
                    const textBaseClass = "text-graphite-900 dark:text-white";
                    const subtextBaseClass = "text-graphite-400 dark:text-graphite-500";

                    return (
                        <div key={cycle.id} className={`rounded-3xl border transition-all duration-300 overflow-hidden ${cardBaseClass} ${isArchived ? 'opacity-70 grayscale border-dashed' : (!isSystemActive && !isExpanded ? 'opacity-60 hover:opacity-100' : 'opacity-100')}`}>
                            <div
                                onClick={(e) => {
                                    if ((e.target as HTMLElement).closest('button')) return;
                                    setExpandedCycleId(isExpanded ? null : cycle.id);
                                }}
                                className={`group/header p-6 border-b flex items-center justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${isSystemActive ? 'border-graphite-200 dark:border-graphite-800' : 'border-graphite-100 dark:border-graphite-800'}`}
                            >
                                <div className="flex items-center gap-4">
                                    {isExpanded ? <ChevronDown className="text-pacific-500" /> : <ChevronRight className="text-graphite-400" />}
                                    <h2 className={`text-xl font-bold ${textBaseClass} ${isArchived ? 'line-through decoration-graphite-400' : ''}`}>Cycle {cycle.sprint_number}</h2>

                                    <div className="flex items-center gap-4 relative z-10" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                                        {isSystemActive ? (<button onClick={() => setCycleInSettings(cycle)} type="button" className="px-3 py-1 rounded-lg bg-pacific-500/10 text-pacific-600 dark:text-pacific-400 border border-pacific-500/20 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-pacific-500/20 transition-colors">Active <Calendar size={12} className="pointer-events-none" /></button>) : isArchived ? (<span className="px-3 py-1 rounded-lg bg-graphite-100 dark:bg-graphite-800 text-graphite-500 border border-graphite-200 dark:border-graphite-700 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><Archive size={10} /> Archived</span>) : (<button onClick={() => setCycleInSettings(cycle)} type="button" className="px-3 py-1 rounded-lg bg-transparent text-graphite-400 border border-graphite-200 dark:border-graphite-700 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-graphite-100 dark:hover:bg-graphite-800 hover:text-graphite-600 dark:hover:text-graphite-300 transition-colors">Configure <Calendar size={12} className="pointer-events-none" /></button>)}
                                    </div>
                                </div>
                                <div className="flex items-center justify-end"><div className={`font-mono text-sm ${subtextBaseClass} transition-all duration-300`}>{cycle.start_date} — {cycle.end_date}</div></div>
                            </div>

                            {isExpanded && (
                                <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in slide-in-from-top-4 duration-300">
                                    <div className="space-y-8">
                                        <div><h4 className={`text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2 ${isSystemActive ? 'text-graphite-500' : 'text-graphite-500 dark:text-graphite-400'}`}><Target size={14} /> Priorities</h4><div className="space-y-3">{cycle.focus_priorities.map((p: string, i: number) => (<div key={i} className={`flex items-center gap-4 p-3 rounded-xl border ${isSystemActive ? 'bg-white/5 border-white/10' : 'bg-graphite-50 dark:bg-graphite-800 border-graphite-200 dark:border-graphite-700'}`}><span className="text-pacific-500 font-mono text-xs font-bold">0{i + 1}.</span><span className={`font-medium ${textBaseClass}`}>{p}</span></div>))}</div></div>
                                        <div><h4 className={`text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2 ${isSystemActive ? 'text-graphite-500' : 'text-graphite-500 dark:text-graphite-400'}`}><Activity size={14} /> Identity Kernel</h4><div className="grid grid-cols-2 gap-4">{cycle.cch_list.map((c: { category: string; items: string[] }, i: number) => (<div key={i}><div className={`text-[10px] font-bold mb-2 uppercase ${isSystemActive ? 'text-graphite-500' : 'text-graphite-600 dark:text-graphite-400'}`}>{c.category}</div><div className="flex flex-wrap gap-2">{c.items.map((item: string, j: number) => (<span key={j} className={`text-xs border px-2 py-1 rounded-md ${isSystemActive ? 'text-graphite-400 border-graphite-700' : 'text-graphite-400 dark:text-graphite-500 border-graphite-200 dark:border-graphite-700'}`}>{item}</span>))}</div></div>))}</div></div>
                                        <div className={`p-6 rounded-2xl border ${isSystemActive ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/30' : 'bg-white dark:bg-graphite-800/50 border-red-100 dark:border-red-900/30 shadow-sm'}`}><h4 className="text-[10px] font-bold text-red-500 dark:text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2"><AlertTriangle size={12} /> Friction</h4><p className={`text-sm italic ${isSystemActive ? 'text-graphite-700 dark:text-red-100/80' : 'text-graphite-600 dark:text-graphite-400'}`}>"{cycle.problems}"</p></div>

                                        <div className="pt-6 border-t border-graphite-200 dark:border-graphite-800 flex flex-wrap items-center gap-3 relative z-10" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                                            <button onClick={() => setEditingCycle(cycle)} type="button" className="flex items-center gap-2 px-4 py-2 bg-graphite-100 dark:bg-graphite-800 text-graphite-600 dark:text-graphite-300 rounded-xl text-sm font-bold hover:bg-graphite-200 dark:hover:bg-graphite-700 transition-colors"><Edit3 size={16} className="pointer-events-none" /> Edit Content</button>
                                            <button
                                                onClick={(e) => handleArchiveCycle(e, cycle.id)}
                                                type="button"
                                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all border ${isArchived ? 'bg-bali-50 dark:bg-bali-900/20 text-bali-600 dark:text-bali-400 border-bali-200 dark:border-bali-800' : 'bg-graphite-50 dark:bg-graphite-900/50 text-graphite-500 hover:text-pacific-600 dark:hover:text-pacific-400 border-transparent hover:border-pacific-200 dark:hover:border-pacific-800'}`}
                                            >
                                                {isArchived ? <><RefreshCw size={16} className="pointer-events-none" /> Restore</> : <><Archive size={16} className="pointer-events-none" /> Archive</>}
                                            </button>
                                            <button
                                                onClick={(e) => handleDeleteCycle(e, cycle.id)}
                                                type="button"
                                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${verifyDeleteId === cycle.id
                                                    ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/30 scale-105'
                                                    : 'bg-graphite-50 dark:bg-graphite-900/50 text-graphite-400 hover:text-red-500 border border-transparent hover:border-red-200 dark:hover:border-red-900/30'
                                                    }`}
                                            >
                                                <Trash2 size={16} className="pointer-events-none" />
                                                {verifyDeleteId === cycle.id ? 'Confirm Delete?' : 'Delete'}
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-4"><h4 className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${isSystemActive ? 'text-graphite-500' : 'text-graphite-500 dark:text-graphite-400'}`}><CheckCircle2 size={14} /> Goals & Objectives</h4><button onClick={() => { setTargetCycleIdForAddGoal(cycle.id); setShowAddGoalModal(true); }} type="button" className="text-[10px] font-bold text-pacific-400 hover:text-white flex items-center gap-1">+ ADD GOAL</button></div>
                                        <div className="space-y-4">
                                            {cycleGoals.map((goal: Goal) => {
                                                const linkedHabit = currentHabits.find((h: Habit) => h.id === goal.linked_habit_id);
                                                const isProject = goal.type === GoalType.TASK_PROJECT;
                                                const isCollapsed = collapsedGoals.has(goal.id);
                                                const goalCardClass = isSystemActive ? "bg-graphite-50 dark:bg-graphite-800/50 border-graphite-200 dark:border-graphite-700 hover:border-pacific-500/30" : "bg-graphite-50 dark:bg-graphite-800/50 border-graphite-200 dark:border-graphite-700 hover:border-pacific-500/30";
                                                let progressPercent = 0; let showProgressBar = false;
                                                if (goal.type === GoalType.TASK_PROJECT) { const totalTasks = goal.subtasks?.length || 0; const completedTasks = goal.subtasks?.filter(t => t.done).length || 0; if (totalTasks > 0) { progressPercent = (completedTasks / totalTasks) * 100; showProgressBar = true; } }
                                                else if (goal.type === GoalType.CONSISTENCY_METRIC) { const streak = goal.current_streak || 0; progressPercent = Math.min(100, 100 * (1 - Math.exp(-0.061 * streak))); showProgressBar = true; }

                                                return (
                                                    <div key={goal.id} onClick={isProject ? () => toggleGoalCollapse(goal.id) : undefined} className={`group relative p-5 rounded-2xl border transition-all overflow-hidden ${goalCardClass} ${isProject ? 'cursor-pointer' : ''}`}>
                                                        {showProgressBar && (<div className="absolute top-0 left-0 right-0 h-1.5 bg-graphite-200 dark:bg-black/20"><div className={`h-full transition-all duration-500 ${progressPercent >= 100 ? 'bg-bali-500' : 'bg-pacific-500'}`} style={{ width: `${progressPercent}%` }} /></div>)}
                                                        <div className="flex justify-between items-start mb-3"><div><h3 className={`font-bold text-lg ${textBaseClass}`}>{goal.title}</h3><p className={`text-sm leading-relaxed mt-1 ${subtextBaseClass}`}>{goal.description}</p></div><div className="flex items-center gap-3">{isProject && (<div className="text-graphite-400 group-hover:text-pacific-500 transition-colors">{isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}</div>)}<div className="text-xs font-bold text-graphite-500 uppercase tracking-wider">{goal.type === GoalType.CONSISTENCY_METRIC ? 'Consistency' : 'Project'}</div></div></div>
                                                        {goal.type === GoalType.CONSISTENCY_METRIC && (<div className="mt-4 pl-1" onClick={e => e.stopPropagation()}><button onClick={() => handleOpenHabitSelector(goal.id)} type="button" className={`flex items-center gap-3 px-3 py-2 rounded-lg border transition-all group/habit w-full sm:w-auto ${isSystemActive ? 'bg-white dark:bg-graphite-900 border-graphite-200 dark:border-graphite-700' : 'bg-white dark:bg-graphite-900 border-graphite-200 dark:border-graphite-700'}`}><div className={`p-1.5 rounded-md ${isSystemActive ? 'bg-pacific-50 dark:bg-pacific-900/20 text-pacific-600 dark:text-pacific-400' : 'bg-pacific-50 dark:bg-pacific-900/20 text-pacific-600 dark:text-pacific-400'}`}><Activity size={14} /></div><div className="flex flex-col items-start"><span className="text-[10px] font-bold text-graphite-400 uppercase tracking-wider">Linked Habit</span>{linkedHabit ? (<span className={`text-xs font-bold ${textBaseClass}`}>{linkedHabit.name}</span>) : (<span className="text-xs font-bold text-red-400">Select Habit Source</span>)}</div>{linkedHabit ? (<LinkIcon size={12} className="ml-2 text-graphite-400 group-hover/habit:text-pacific-500 transition-colors opacity-0 group-hover/habit:opacity-100" />) : (<AlertTriangle size={12} className="ml-2 text-red-400" />)}</button></div>)}
                                                        {goal.type === GoalType.TASK_PROJECT && !isCollapsed && (<div className="mt-4 pl-1 animate-in slide-in-from-top-1 fade-in duration-200" onClick={(e: React.MouseEvent) => e.stopPropagation()}><div className="space-y-2 mb-3">{goal.subtasks?.map((t: { name: string; done: boolean; level?: number }, i: number) => (<div key={i} className={`flex items-center gap-3 text-sm group/task min-h-[28px] ${subtextBaseClass}`} style={{ paddingLeft: `${(t.level || 0) * 1.5}rem` }}>{(t.level || 0) > 0 && <CornerDownRight size={12} className="text-graphite-500 dark:text-graphite-600 flex-shrink-0" />}{editingSubtask?.goalId === goal.id && editingSubtask.index === i ? (<div className="flex-1 flex items-center gap-2"><input value={editSubtaskText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditSubtaskText(e.target.value)} className="flex-1 bg-graphite-900 dark:bg-white border border-pacific-500 rounded px-2 py-1 text-white dark:text-graphite-900 text-sm focus:outline-none" autoFocus onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') handleSaveSubtaskEdit(goal, i); if (e.key === 'Escape') setEditingSubtask(null); }} /><button onClick={() => handleSaveSubtaskEdit(goal, i)} className="text-pacific-500 hover:text-white"><Check size={16} /></button><button onClick={() => setEditingSubtask(null)} className="text-red-500 hover:text-white"><X size={16} /></button></div>) : (<><button onClick={() => handleToggleSubtask(goal, i)} type="button" className={`h-4 w-4 flex-shrink-0 rounded border flex items-center justify-center transition-all ${t.done ? 'bg-pacific-500 border-pacific-500 text-white' : 'border-graphite-600 dark:border-graphite-400 hover:border-pacific-500'}`}>{t.done && <Check size={10} />}</button><span className={`flex-1 transition-all ${t.done ? 'line-through opacity-50' : ''}`} onDoubleClick={() => handleStartEditSubtask(goal.id, i, t.name)}>{t.name}</span><div className="opacity-0 group-hover/task:opacity-100 flex items-center gap-2 transition-opacity"><button onClick={() => handleStartEditSubtask(goal.id, i, t.name)} className="text-graphite-500 hover:text-pacific-400"><Edit3 size={12} /></button><button onClick={() => handleDeleteSubtask(goal, i)} className="text-graphite-500 hover:text-red-500"><Trash2 size={12} /></button></div></>)}</div>))}</div>{addingSubtaskGoalId === goal.id ? (<div className="flex items-center gap-2 animate-in fade-in slide-in-from-top-1"><input value={newSubtaskText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewSubtaskText(e.target.value)} className="flex-1 bg-graphite-900 dark:bg-white border border-graphite-600 dark:border-graphite-300 rounded px-2 py-1 text-white dark:text-graphite-900 text-sm focus:outline-none focus:border-pacific-500" placeholder="New item..." autoFocus onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') handleAddNewSubtask(goal); if (e.key === 'Escape') { setAddingSubtaskGoalId(null); setNewSubtaskText(''); } }} /><button onClick={() => handleAddNewSubtask(goal)} className="p-1 bg-pacific-600 text-white rounded hover:bg-pacific-500"><Plus size={14} /></button><button onClick={() => { setAddingSubtaskGoalId(null); setNewSubtaskText(''); }} className="p-1 text-graphite-500 hover:text-white"><X size={14} /></button></div>) : (<button onClick={() => setAddingSubtaskGoalId(goal.id)} className="text-[10px] font-bold text-graphite-500 hover:text-pacific-400 flex items-center gap-1 transition-colors mt-2"><Plus size={12} /> ADD ITEM</button>)}</div>)}
                                                        <button onClick={(e) => { e.stopPropagation(); handleDeleteGoal(goal.id); }} className="absolute bottom-4 right-4 text-graphite-600 dark:text-graphite-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-2"><Trash2 size={16} /></button>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                {!data.version && visibleCycles.length === 0 && (
                    <div className="text-center py-12 text-graphite-400 text-sm">System Empty. Initialize a version to proceed.</div>
                )}
                {data.version && !hasArchivedCycles && visibleCycles.length === 0 && (
                    <div className="text-center py-12 text-graphite-400 text-sm">No cycles found. Start by creating a new version or cycle.</div>
                )}
                {hasArchivedCycles && visibleCycles.length === 0 && (
                    <div className="text-center py-12 text-graphite-400 text-sm">All cycles are archived. Click "Show Archived" to view them.</div>
                )}
            </div>

            {showNewVersion && <NewVersionModal onClose={() => setShowNewVersion(false)} onCreate={handleCreateVersion} suggestedNumber={(data.version?.number || 0) + 1} />}

            {/* CREATING New Cycle */}
            {showNewCycle && (
                <CycleEditorModal
                    mode="create"
                    goals={[]}
                    habits={[]}
                    allHabits={allHabitsHistory}
                    suggestedSprintNumber={data.cycles.length + 1}
                    onClose={() => setShowNewCycle(false)}
                    onCreate={handleCreateCycle}
                    onDeleteHabitFromDB={handleDeleteHabitFromLibrary}
                    maxCycles={maxCycles}
                    // PASSING SMART SCHEDULING CONTEXT
                    versionStartDate={data.version?.start_date}
                    existingCycles={data.cycles}
                />
            )}

            {/* EDITING Existing Cycle */}
            {editingCycle && (
                <CycleEditorModal
                    mode="edit"
                    cycle={editingCycle}
                    goals={data.goals.filter(g => g.cycle_id === editingCycle.id)}
                    habits={data.habits.filter(h => h.cycle_id === editingCycle.id)}
                    allHabits={allHabitsHistory}
                    onClose={() => setEditingCycle(null)}
                    onSaveCycle={handleUpdateCycle}
                    onManageGoal={handleManageGoal}
                    onManageHabit={handleManageHabit}
                    onRenameCategory={async (oldName: string, newName: string) => {
                        const all = await supabaseService.getAllHabits();
                        const targets = all.filter((h: Habit) => h.category === oldName);
                        for (const h of targets) await supabaseService.updateHabit({ ...h, category: newName });
                        await loadLabData();
                    }}
                    onDeleteCategory={async (catName: string) => {
                        const all = await supabaseService.getAllHabits();
                        const targets = all.filter((h: Habit) => h.category === catName);
                        for (const h of targets) await supabaseService.updateHabit({ ...h, category: 'Uncategorized' });
                        await loadLabData();
                    }}
                    onDeleteHabitFromDB={handleDeleteHabitFromLibrary}
                    maxCycles={maxCycles}
                />
            )}

            {cycleInSettings && <CycleSettingsModal cycle={cycleInSettings} isActive={data.activeCycleId === cycleInSettings.id} onClose={() => setCycleInSettings(null)} onSave={handleUpdateCycleSettings} />}
            {showAddGoalModal && <GoalFormModal isOpen={showAddGoalModal} onClose={() => setShowAddGoalModal(false)} onSave={handleAddGoal} currentCycleHabits={data.habits.filter(h => h.cycle_id === targetCycleIdForAddGoal)} allHabits={allHabitsHistory} />}
            <HabitSelectorModal isOpen={showHabitSelector} onClose={() => setShowHabitSelector(false)} onSelect={handleLinkHabit} currentCycleHabits={currentHabits} allHabits={allHabitsHistory} />
        </div>
    );
};

export default Lab;
