
import React, { useState, useEffect } from 'react';
import { Cycle, Goal, Habit, GoalType, EntityStatus, CCHItem } from '../types';
import { supabaseService } from '../services/supabaseService';
import { Edit3, Brain, Fingerprint, Activity, Plus, Trash2, CheckCircle2, List, X, Save, Target, AlertTriangle, Calendar, Rocket, Power, AlertCircle } from 'lucide-react';
import { GoalFormModal } from './GoalFormModal';
import { HabitFormModal } from './HabitFormModal';

interface CycleEditorModalProps {
    mode?: 'create' | 'edit';
    cycle?: Cycle; // Optional, undefined in 'create' mode
    goals: Goal[];
    habits: Habit[];
    allHabits: Habit[];
    suggestedSprintNumber?: number; // For create mode auto-fill
    onClose: () => void;
    // Handler for 'edit' mode (atomic updates)
    onSaveCycle?: (cycle: Cycle) => void;
    onManageGoal?: (action: 'create' | 'update' | 'delete', goal: any) => void;
    onManageHabit?: (action: 'create' | 'update' | 'delete', habit: any) => void;
    // Handler for 'create' mode (bulk save)
    onCreate?: (cycleData: any, goals: any[], habits: any[]) => void;
    // Category Handlers
    onRenameCategory?: (oldName: string, newName: string) => Promise<void>;
    onDeleteCategory?: (categoryName: string) => Promise<void>;
    // Explicit Handler for deleting habits from the library (database)
    onDeleteHabitFromDB?: (habitId: string) => Promise<void>;
    // Dynamic Cycle Limit
    maxCycles?: number;
    // Context for Smart Scheduling
    versionStartDate?: string;
    existingCycles?: Cycle[];
}

// Helper for safe date arithmetic without timezone issues
const addDaysToDate = (dateStr: string, days: number): string => {
    if (!dateStr) return '';
    const parts = dateStr.split('-').map(Number);
    // Create date in local time (Year, Month Index, Day)
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    date.setDate(date.getDate() + days);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const CycleEditorModal: React.FC<CycleEditorModalProps> = ({
    mode = 'edit', cycle, goals, habits, allHabits, suggestedSprintNumber, onClose, onSaveCycle, onManageGoal, onManageHabit, onCreate, onRenameCategory, onDeleteCategory, onDeleteHabitFromDB, maxCycles = 6, versionStartDate, existingCycles
}) => {
    const [activeTab, setActiveTab] = useState<'strategy' | 'identity' | 'mantras' | 'goals' | 'habits'>('strategy');

    // --- Cycle Config State (Create Mode) ---
    const [sprintNumber, setSprintNumber] = useState(suggestedSprintNumber || 1);
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
    const [isActive, setIsActive] = useState(true);
    const [cycleDuration, setCycleDuration] = useState(15); // Default, updated by DB

    // --- Cycle Content State ---
    const [priorities, setPriorities] = useState<string[]>(['', '', '']);
    const [problems, setProblems] = useState('');
    const [learning, setLearning] = useState('');
    const [beliefs, setBeliefs] = useState<string[]>([]);
    const [characteristics, setCharacteristics] = useState<string[]>([]);
    const [skills, setSkills] = useState<string[]>([]);
    const [selectedMantras, setSelectedMantras] = useState<string[]>([]);

    // --- Local Lists State (Buffer for Create Mode) ---
    // In 'create' mode, we manipulate these arrays. In 'edit' mode, we use the props `goals` and `habits` but might optimistic update these for UI.
    const [localGoals, setLocalGoals] = useState<Goal[]>([]);
    const [localHabits, setLocalHabits] = useState<Habit[]>([]);

    // --- Helper State ---
    const [allMantras, setAllMantras] = useState<string[]>([]);
    const [tempBelief, setTempBelief] = useState('');
    const [tempChar, setTempChar] = useState('');
    const [tempSkill, setTempSkill] = useState('');
    const [newMantra, setNewMantra] = useState('');
    const [error, setError] = useState<string | null>(null);

    // --- Sub-Modals State ---
    const [editingGoal, setEditingGoal] = useState<Goal | undefined>(undefined);
    const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
    const [editingHabit, setEditingHabit] = useState<Habit | undefined>(undefined);
    const [isHabitModalOpen, setIsHabitModalOpen] = useState(false);
    const [verifyDeleteId, setVerifyDeleteId] = useState<string | null>(null);

    // Initialization
    useEffect(() => {
        supabaseService.getMantras().then(setAllMantras);

        if (mode === 'edit' && cycle) {
            setPriorities(cycle.focus_priorities);
            setProblems(cycle.problems);
            setLearning(cycle.learning_focus);
            setBeliefs(cycle.cch_list.find(c => c.category === 'Beliefs')?.items || []);
            setCharacteristics(cycle.cch_list.find(c => c.category === 'Characteristics')?.items || []);
            setSkills(cycle.cch_list.find(c => c.category === 'Skills')?.items || []);
            setSelectedMantras(cycle.mantras);
            setSprintNumber(cycle.sprint_number);
            setStartDate(cycle.start_date);
            setEndDate(cycle.end_date);
        }
    }, [mode, cycle]);

    // Smart Scheduling Logic
    useEffect(() => {
        const initScheduling = async () => {
            // 1. Fetch System Settings
            const settings = await supabaseService.getSystemSettings();
            const duration = Math.floor(settings.days / settings.cycles);
            setCycleDuration(duration);

            // 2. Auto-Suggest Dates (Only in Create Mode)
            if (mode === 'create' && versionStartDate) {
                let suggestedStart = versionStartDate;

                // If cycles exist, start after the last one
                if (existingCycles && existingCycles.length > 0) {
                    // Sort by end date descending
                    const sorted = [...existingCycles].sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
                    const lastCycle = sorted[0];
                    suggestedStart = addDaysToDate(lastCycle.end_date, 1);
                }

                setStartDate(suggestedStart);
                setEndDate(addDaysToDate(suggestedStart, duration - 1));
            }
        };
        initScheduling();
    }, [mode, versionStartDate, existingCycles]);

    // Sync local state with props in Edit mode
    useEffect(() => {
        if (mode === 'edit') {
            setLocalGoals(goals);
            setLocalHabits(habits);
        }
    }, [goals, habits, mode]);

    // -- Cycle Logic Handlers --
    const handleAddMantra = async () => { if (newMantra.trim()) { await supabaseService.addMantra(newMantra); setAllMantras(prev => [...prev, newMantra]); setSelectedMantras(prev => [...prev, newMantra]); setNewMantra(''); } };
    const handleAddBelief = () => { if (tempBelief.trim()) { setBeliefs([...beliefs, tempBelief.trim()]); setTempBelief(''); } };
    const handleAddChar = () => { if (tempChar.trim()) { setCharacteristics([...characteristics, tempChar.trim()]); setTempChar(''); } };
    const handleAddSkill = () => { if (tempSkill.trim()) { setSkills([...skills, tempSkill.trim()]); setTempSkill(''); } };

    const handleManualStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newStart = e.target.value;
        setStartDate(newStart);
        if (newStart && cycleDuration > 0) {
            setEndDate(addDaysToDate(newStart, cycleDuration - 1));
        }
    };

    // -- Main Save Handler --
    const handleFinalSave = () => {
        // Validate Constraints
        if (mode === 'create' && (sprintNumber < 1 || sprintNumber > maxCycles)) {
            setError(`Versions are limited to exactly ${maxCycles} cycles.`);
            setActiveTab('strategy');
            return;
        }

        const cycleData = {
            sprint_number: sprintNumber,
            start_date: startDate,
            end_date: endDate,
            status: isActive ? EntityStatus.ACTIVE : undefined, // Only relevant for create usually
            focus_priorities: priorities.filter(p => p.trim().length > 0),
            problems,
            learning_focus: learning,
            mantras: selectedMantras,
            cch_list: [
                { category: 'Beliefs', items: beliefs },
                { category: 'Characteristics', items: characteristics },
                { category: 'Skills', items: skills }
            ] as CCHItem[]
        };

        if (mode === 'create' && onCreate) {
            onCreate(cycleData, localGoals, localHabits);
        } else if (mode === 'edit' && onSaveCycle && cycle) {
            // In edit mode, goals/habits are handled atomically by other handlers. We just save the cycle config.
            onSaveCycle({ ...cycle, ...cycleData });
        }
    };

    // -- Goal/Habit Wrapper Handlers --

    const handleGoalSaveWrapper = (goalData: any, selectedHabit: any) => {
        // goalData from modal: { title, description, type, subtasks (string[]) }
        const newGoalObj = {
            id: editingGoal?.id || `temp-g-${Date.now()}`,
            ...goalData,
            // If it's consistency, we need to store the habit data structure temporarily for the parent to process
            linkedHabit: selectedHabit,
            // In create mode, subtasks come as strings from modal, we format them for preview
            subtasks: goalData.subtasks?.map((s: string) => ({ name: s, done: false }))
        };

        if (mode === 'create') {
            if (editingGoal) {
                setLocalGoals(prev => prev.map(g => g.id === editingGoal.id ? { ...g, ...newGoalObj } : g));
            } else {
                setLocalGoals(prev => [...prev, newGoalObj]);
            }
        } else {
            // Edit Mode: Immediate DB Action
            if (onManageGoal) {
                const action = editingGoal ? 'update' : 'create';
                onManageGoal(action, { ...newGoalObj, linkedHabit: selectedHabit });
            }
        }
        setIsGoalModalOpen(false);
    };

    const handleHabitSaveWrapper = (habitData: any) => {
        const newHabitObj = {
            id: editingHabit?.id || `temp-h-${Date.now()}`,
            ...habitData
        };

        if (mode === 'create') {
            if (editingHabit) {
                setLocalHabits(prev => prev.map(h => h.id === editingHabit.id ? newHabitObj : h));
            } else {
                setLocalHabits(prev => [...prev, newHabitObj]);
            }
        } else {
            if (onManageHabit) {
                const action = editingHabit ? 'update' : 'create';
                onManageHabit(action, newHabitObj);
            }
        }
        setIsHabitModalOpen(false);
    };

    // Handle deleting a habit from the library/history view in the modal
    const handleDeleteFromLibrary = async (habitId: string) => {
        if (onDeleteHabitFromDB) {
            await onDeleteHabitFromDB(habitId);
        } else if (onManageHabit) {
            onManageHabit('delete', { id: habitId });
        } else {
            console.warn("Delete from library not fully supported in create mode without parent handler");
        }
    };

    const handleDeleteItem = (id: string, type: 'goal' | 'habit') => {
        if (verifyDeleteId !== id) {
            setVerifyDeleteId(id);
            setTimeout(() => setVerifyDeleteId(null), 3000);
            return;
        }

        if (mode === 'create') {
            if (type === 'goal') setLocalGoals(prev => prev.filter(g => g.id !== id));
            else setLocalHabits(prev => prev.filter(h => h.id !== id));
        } else {
            if (type === 'goal' && onManageGoal) onManageGoal('delete', { id });
            if (type === 'habit' && onManageHabit) onManageHabit('delete', { id });
        }
        setVerifyDeleteId(null);
    };

    // Open Handlers
    const openAddGoal = () => { setEditingGoal(undefined); setIsGoalModalOpen(true); };
    const openEditGoal = (g: Goal) => { setEditingGoal(g); setIsGoalModalOpen(true); };
    const openAddHabit = () => { setEditingHabit(undefined); setIsHabitModalOpen(true); };
    const openEditHabit = (h: Habit) => { setEditingHabit(h); setIsHabitModalOpen(true); };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4" onClick={onClose}>
            <div className="w-full max-w-4xl rounded-2xl bg-white dark:bg-graphite-900 shadow-2xl animate-in zoom-in-95 duration-200 border border-graphite-200 dark:border-graphite-800 flex flex-col h-[85vh]" onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div className="p-6 border-b border-graphite-200 dark:border-graphite-800 flex justify-between items-center bg-graphite-50 dark:bg-graphite-950/50 rounded-t-2xl">
                    <div>
                        <h2 className="text-xl font-bold text-graphite-900 dark:text-white flex items-center gap-2">
                            {mode === 'create' ? <Rocket size={20} className="text-pacific-500" /> : <Edit3 size={20} className="text-pacific-500" />}
                            {mode === 'create' ? 'Initialize New Cycle' : 'Cycle Editor'}
                        </h2>
                        <div className="text-xs text-graphite-500 mt-1 uppercase tracking-wider">
                            {mode === 'create' ? 'System Configuration' : `Cycle ${cycle?.sprint_number} Configuration`}
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-white dark:bg-graphite-800 p-1 rounded-xl border border-graphite-200 dark:border-graphite-700">
                        {[
                            { id: 'strategy', icon: <Target size={14} /> },
                            { id: 'identity', icon: <Fingerprint size={14} /> },
                            { id: 'mantras', icon: <Brain size={14} /> },
                            { id: 'goals', icon: <CheckCircle2 size={14} /> },
                            { id: 'habits', icon: <List size={14} /> }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === tab.id
                                    ? 'bg-pacific-500 text-white shadow-md'
                                    : 'text-graphite-500 hover:text-graphite-900 dark:hover:text-graphite-white hover:bg-graphite-50 dark:hover:bg-graphite-700'
                                    }`}
                            >
                                {tab.icon} {tab.id}
                            </button>
                        ))}
                    </div>

                    <button onClick={onClose} type="button" className="text-graphite-400 hover:text-white transition-colors"><X size={24} /></button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 bg-graphite-50/50 dark:bg-graphite-900/50">
                    {/* STRATEGY TAB */}
                    {activeTab === 'strategy' && (
                        <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in slide-in-from-right-2">

                            {/* CREATE MODE: Configuration Fields */}
                            {mode === 'create' && (
                                <div className="bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-pacific-500 text-xs font-bold uppercase tracking-widest">
                                            <Calendar size={14} /> Temporal Config
                                        </div>
                                        <div className="text-[10px] font-bold text-pacific-600 dark:text-pacific-400 bg-pacific-50 dark:bg-pacific-900/20 px-2 py-1 rounded">
                                            AUTO-SUGGESTED
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-graphite-500 uppercase mb-1.5">Start Date</label>
                                            <input
                                                type="date"
                                                value={startDate}
                                                onChange={handleManualStartDateChange}
                                                className="w-full bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-3 py-2.5 text-sm text-graphite-900 dark:text-white focus:outline-none focus:border-pacific-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-graphite-500 uppercase mb-1.5">End Date</label>
                                            <input
                                                type="date"
                                                value={endDate}
                                                onChange={e => setEndDate(e.target.value)}
                                                className="w-full bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-3 py-2.5 text-sm text-graphite-900 dark:text-white focus:outline-none focus:border-pacific-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <div>
                                            <label className="block text-xs font-bold text-graphite-500 uppercase mb-1.5">Cycle Number (1-{maxCycles})</label>
                                            <input
                                                type="number"
                                                min="1"
                                                max={maxCycles}
                                                value={sprintNumber}
                                                onChange={e => {
                                                    const val = Number(e.target.value);
                                                    setSprintNumber(val);
                                                    if (val > maxCycles) setError(`Maximum ${maxCycles} cycles allowed per version.`);
                                                    else setError(null);
                                                }}
                                                className={`w-full bg-graphite-50 dark:bg-graphite-950 border rounded-xl px-3 py-2.5 text-sm text-graphite-900 dark:text-white focus:outline-none focus:border-pacific-500 ${error ? 'border-red-500 ring-1 ring-red-500/20' : 'border-graphite-200 dark:border-graphite-700'}`}
                                            />
                                            {error && <p className="text-red-500 text-[10px] mt-1 font-bold flex items-center gap-1"><AlertCircle size={10} /> {error}</p>}
                                        </div>
                                        <div className="flex items-end">
                                            <button
                                                onClick={() => setIsActive(!isActive)}
                                                className={`w-full py-2.5 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${isActive ? 'bg-pacific-500/10 border-pacific-500/50 text-pacific-600 dark:text-pacific-400' : 'bg-graphite-50 dark:bg-graphite-950 border-graphite-200 dark:border-graphite-700 text-graphite-500'}`}
                                            >
                                                <Power size={16} /> {isActive ? 'Status: Active' : 'Status: Inactive'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm">
                                <label className="block text-xs font-bold text-graphite-500 uppercase mb-4">Focus Priorities</label>
                                <div className="space-y-3">
                                    {priorities.map((p, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-graphite-100 dark:bg-graphite-800 font-bold text-graphite-500 border border-graphite-200 dark:border-graphite-700">{i + 1}</span>
                                            <input value={p} onChange={e => { const newP = [...priorities]; newP[i] = e.target.value; setPriorities(newP); }} className="flex-1 bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 text-sm focus:outline-none focus:border-pacific-500 transition-colors" placeholder={`Priority ${i + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm">
                                <label className="block text-xs font-bold text-graphite-500 uppercase mb-2">Current Friction/Problems</label>
                                <textarea value={problems} onChange={e => setProblems(e.target.value)} rows={3} className="w-full bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl p-4 text-sm focus:outline-none focus:border-pacific-500 resize-none transition-colors" placeholder="What is slowing you down?" />
                            </div>
                            <div className="bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm">
                                <label className="block text-xs font-bold text-graphite-500 uppercase mb-2">Learning Focus</label>
                                <input value={learning} onChange={e => setLearning(e.target.value)} className="w-full bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl p-4 text-sm focus:outline-none focus:border-pacific-500 transition-colors" placeholder="One major skill to master..." />
                            </div>
                        </div>
                    )}

                    {/* IDENTITY TAB */}
                    {activeTab === 'identity' && (
                        <div className="space-y-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-right-2">
                            {[{ title: 'Core Beliefs', items: beliefs, add: handleAddBelief, val: tempBelief, set: setTempBelief, icon: <Brain size={18} /> }, { title: 'Characteristics', items: characteristics, add: handleAddChar, val: tempChar, set: setTempChar, icon: <Fingerprint size={18} /> }, { title: 'Skills Acquisition', items: skills, add: handleAddSkill, val: tempSkill, set: setTempSkill, icon: <Activity size={18} /> }].map((section, idx) => (
                                <div key={idx} className="bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm">
                                    <h3 className="text-sm font-bold text-graphite-900 dark:text-white flex items-center gap-2 mb-4">{section.icon} {section.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {section.items.map((item, i) => (
                                            <span key={i} className="bg-graphite-100 dark:bg-graphite-800 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 border border-graphite-200 dark:border-graphite-700">
                                                {item}
                                                <button onClick={() => { if (section.title === 'Core Beliefs') setBeliefs(beliefs.filter((_, j) => j !== i)); else if (section.title === 'Characteristics') setCharacteristics(characteristics.filter((_, j) => j !== i)); else setSkills(skills.filter((_, j) => j !== i)); }} className="text-graphite-400 hover:text-red-500"><X size={12} /></button>
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <input value={section.val} onChange={e => section.set(e.target.value)} onKeyDown={e => e.key === 'Enter' && section.add()} className="flex-1 bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-pacific-500 transition-colors" placeholder={`Add ${section.title}...`} />
                                        <button onClick={section.add} className="p-2 bg-pacific-500 text-white rounded-xl hover:bg-pacific-600 transition-colors"><Plus size={20} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* MANTRAS TAB */}
                    {activeTab === 'mantras' && (
                        <div className="space-y-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-right-2 bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm">
                            <div>
                                <label className="block text-xs font-bold text-graphite-500 uppercase mb-3">Select Active Mantras</label>
                                <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto pr-2">
                                    {allMantras.map((m, i) => (
                                        <div key={i} onClick={() => setSelectedMantras(prev => prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m])} className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${selectedMantras.includes(m) ? 'bg-pacific-50 border-pacific-500 text-pacific-700 dark:bg-pacific-900/20 dark:text-pacific-300' : 'bg-graphite-50 dark:bg-graphite-950 border-transparent text-graphite-600 dark:text-graphite-400 hover:bg-graphite-100 dark:hover:bg-graphite-800'}`}>
                                            <span className="text-sm font-medium">{m}</span>
                                            {selectedMantras.includes(m) && <CheckCircle2 size={16} />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2 pt-4 border-t border-graphite-200 dark:border-graphite-800">
                                <input value={newMantra} onChange={e => setNewMantra(e.target.value)} className="flex-1 bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-pacific-500 transition-colors" placeholder="New Mantra..." />
                                <button onClick={handleAddMantra} className="px-4 bg-graphite-900 dark:bg-white text-white dark:text-graphite-900 rounded-xl font-bold text-xs uppercase tracking-wider">ADD</button>
                            </div>
                        </div>
                    )}

                    {/* GOALS TAB */}
                    {activeTab === 'goals' && (
                        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-right-2 space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-bold text-graphite-500 uppercase tracking-widest">Active Goals</h3>
                                <button onClick={openAddGoal} className="flex items-center gap-2 px-4 py-2 bg-pacific-600 text-white rounded-xl text-xs font-bold hover:bg-pacific-500 shadow-lg shadow-pacific-500/30 transition-colors">
                                    <Plus size={16} /> Add Goal
                                </button>
                            </div>
                            <div className="space-y-3">
                                {localGoals.map((g) => (
                                    <div key={g.id} className="p-4 bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 rounded-2xl flex justify-between items-center group hover:border-pacific-500/30 transition-all shadow-sm">
                                        <div>
                                            <div className="font-bold text-graphite-900 dark:text-white flex items-center gap-2">
                                                {g.title}
                                                <span className={`text-[10px] uppercase px-2 py-0.5 rounded border ${g.type === GoalType.TASK_PROJECT ? 'border-purple-200 text-purple-600 dark:border-purple-900 dark:text-purple-400' : 'border-bali-200 text-bali-600 dark:border-bali-900 dark:text-bali-400'}`}>
                                                    {g.type === GoalType.TASK_PROJECT ? 'Project' : 'Metric'}
                                                </span>
                                            </div>
                                            <div className="text-xs text-graphite-500 mt-1 line-clamp-1">{g.description}</div>
                                        </div>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => openEditGoal(g)} className="p-2 text-graphite-400 hover:text-pacific-500 hover:bg-pacific-50 dark:hover:bg-pacific-900/20 rounded-lg transition-colors"><Edit3 size={16} /></button>
                                            <button
                                                onClick={() => handleDeleteItem(g.id, 'goal')}
                                                className={`p-2 rounded-lg transition-all flex items-center gap-2 ${verifyDeleteId === g.id ? 'bg-red-500 text-white w-24 justify-center' : 'text-graphite-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'}`}
                                            >
                                                <Trash2 size={16} /> {verifyDeleteId === g.id && <span className="text-xs font-bold">Confirm</span>}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                {localGoals.length === 0 && <div className="text-center py-12 text-graphite-400 italic bg-graphite-50 dark:bg-graphite-950 rounded-2xl border border-dashed border-graphite-200 dark:border-graphite-800">No goals defined.</div>}
                            </div>
                        </div>
                    )}

                    {/* HABITS TAB */}
                    {activeTab === 'habits' && (
                        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-right-2 space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-bold text-graphite-500 uppercase tracking-widest">Cycle Habits</h3>
                                <button onClick={openAddHabit} className="flex items-center gap-2 px-4 py-2 bg-pacific-600 text-white rounded-xl text-xs font-bold hover:bg-pacific-500 shadow-lg shadow-pacific-500/30 transition-colors">
                                    <Plus size={16} /> Add Habit
                                </button>
                            </div>
                            <div className="space-y-3">
                                {localHabits.map((h) => (
                                    <div key={h.id} className="p-4 bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 rounded-2xl flex justify-between items-center group hover:border-pacific-500/30 transition-all shadow-sm">
                                        <div>
                                            <div className="font-bold text-graphite-900 dark:text-white flex items-center gap-2">
                                                {h.name}
                                                {h.linked_goal_id && <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-pacific-50 dark:bg-pacific-900/20 text-pacific-600 dark:text-pacific-400 font-bold flex items-center gap-1"><AlertTriangle size={10} /> Linked</span>}
                                            </div>
                                            <div className="text-xs text-graphite-500 mt-1 flex items-center gap-3">
                                                <span className="bg-graphite-100 dark:bg-graphite-800 px-2 py-0.5 rounded">{h.category}</span>
                                                <span>Weight: {h.weight}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => openEditHabit(h)} className="p-2 text-graphite-400 hover:text-pacific-500 hover:bg-pacific-50 dark:hover:bg-pacific-900/20 rounded-lg transition-colors"><Edit3 size={16} /></button>
                                            <button
                                                onClick={() => handleDeleteItem(h.id, 'habit')}
                                                className={`p-2 rounded-lg transition-all flex items-center gap-2 ${verifyDeleteId === h.id ? 'bg-red-500 text-white w-24 justify-center' : 'text-graphite-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'}`}
                                            >
                                                <Trash2 size={16} /> {verifyDeleteId === h.id && <span className="text-xs font-bold">Confirm</span>}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                {localHabits.length === 0 && <div className="text-center py-12 text-graphite-400 italic bg-graphite-50 dark:bg-graphite-950 rounded-2xl border border-dashed border-graphite-200 dark:border-graphite-800">No habits defined.</div>}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-graphite-200 dark:border-graphite-800 flex justify-end gap-3 bg-white dark:bg-graphite-900 rounded-b-2xl">
                    <button onClick={onClose} className="px-6 py-2 text-sm font-bold text-graphite-500 hover:text-graphite-900 dark:hover:text-white transition-colors">Close</button>
                    <button onClick={handleFinalSave} className="px-8 py-2 bg-graphite-900 dark:bg-white text-white dark:text-graphite-900 rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                        {mode === 'create' ? <Rocket size={16} /> : <Save size={16} />}
                        {mode === 'create' ? 'Initialize Cycle' : 'Save Cycle Config'}
                    </button>
                </div>

                {/* Sub-Modals */}
                <GoalFormModal
                    isOpen={isGoalModalOpen}
                    onClose={() => setIsGoalModalOpen(false)}
                    onSave={handleGoalSaveWrapper}
                    initialGoal={editingGoal}
                    allHabits={allHabits}
                    currentCycleHabits={localHabits}
                />
                <HabitFormModal
                    isOpen={isHabitModalOpen}
                    onClose={() => setIsHabitModalOpen(false)}
                    onSave={handleHabitSaveWrapper}
                    initialHabit={editingHabit}
                    allHabits={allHabits}
                    onDeleteFromLibrary={handleDeleteFromLibrary}
                    onRenameCategory={onRenameCategory}
                    onDeleteCategory={onDeleteCategory}
                />
            </div>
        </div>
    )
};
