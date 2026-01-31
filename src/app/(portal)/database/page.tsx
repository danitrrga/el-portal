
'use client';

import React, { useEffect, useState } from 'react';
import { supabaseService } from '@/lib/supabaseService';
import { Version, Cycle, EntityStatus, Habit, Goal, HabitWeight, GoalType } from '@/types/types';
import { Database, Search, ArrowUpRight, Trash2, Edit3, X, Save } from 'lucide-react';
import { GoalFormModal } from '@/components/GoalFormModal';
import { CycleEditorModal } from '@/components/CycleEditorModal';
import { HabitFormModal } from '@/components/HabitFormModal';

type TabType = 'versions' | 'cycles' | 'habits' | 'goals';

const EditModal = ({ isOpen, onClose, type, data, onSave, categories }: {
    isOpen: boolean;
    onClose: () => void;
    type: TabType;
    data: any;
    onSave: (updatedData: any) => void;
    categories?: string[];
}) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
        setFormData(data);
    }, [data]);

    if (!isOpen || !formData) return null;

    const handleChange = (field: string, value: any) => {
        setFormData((prev: any) => ({ ...prev, [field]: value }));
    };

    const renderFields = () => {
        switch (type) {
            case 'versions':
                return (
                    <>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-graphite-500">Title</label>
                            <input className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-lg p-2 text-sm"
                                value={formData.title} onChange={e => handleChange('title', e.target.value)} />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-graphite-500">Description</label>
                            <textarea className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-lg p-2 text-sm"
                                value={formData.description} onChange={e => handleChange('description', e.target.value)} rows={3} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-graphite-500">Start Date</label>
                                <input type="date" className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-lg p-2 text-sm"
                                    value={formData.start_date} onChange={e => handleChange('start_date', e.target.value)} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-graphite-500">End Date</label>
                                <input type="date" className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-lg p-2 text-sm"
                                    value={formData.end_date} onChange={e => handleChange('end_date', e.target.value)} />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-graphite-500">Status</label>
                            <select className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-lg p-2 text-sm"
                                value={formData.status} onChange={e => handleChange('status', e.target.value)}>
                                <option value={EntityStatus.ACTIVE}>Active</option>
                                <option value={EntityStatus.ARCHIVED}>Archived</option>
                            </select>
                        </div>
                    </>
                );
            case 'cycles':
                // Handled by CycleEditorModal
                return null;
            case 'habits':
                // Handled by HabitFormModal
                return null;
            case 'goals':
                // Handled by GoalFormModal
                return null;
            default: return null;
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4" onClick={onClose}>
            <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-graphite-900 p-6 shadow-2xl border border-graphite-200 dark:border-graphite-800 animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-graphite-900 dark:text-white capitalize">Edit {type.slice(0, -1)}</h2>
                    <button onClick={onClose}><X size={20} className="text-graphite-400 hover:text-white" /></button>
                </div>
                <div className="space-y-4 mb-6">
                    {renderFields()}
                </div>
                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 text-sm font-bold text-graphite-500 hover:text-graphite-900 dark:hover:text-white">Cancel</button>
                    <button onClick={() => onSave(formData)} className="px-6 py-2 bg-pacific-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-pacific-500/30 flex items-center gap-2">
                        <Save size={16} /> Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

const DatabasePage: React.FC = () => {
    const [versions, setVersions] = useState<Version[]>([]);
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [habits, setHabits] = useState<Habit[]>([]);
    const [goals, setGoals] = useState<Goal[]>([]);
    const [activeTab, setActiveTab] = useState<TabType>('versions');
    const [verifyDeleteId, setVerifyDeleteId] = useState<string | null>(null);

    const [editingItem, setEditingItem] = useState<{ type: TabType; data: any } | null>(null);

    const loadData = async () => {
        try {
            const v = await supabaseService.getAllVersions();
            const c = await supabaseService.getAllCycles();
            const h = await supabaseService.getAllHabits();
            const g = await supabaseService.getAllGoals();

            setVersions(v);
            setCycles(c);
            setHabits(h);
            setGoals(g);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => { loadData(); }, []);

    // Reset delete verification when changing tabs
    useEffect(() => {
        setVerifyDeleteId(null);
    }, [activeTab]);

    const handleDelete = async (id: string, type: TabType) => {
        // 1. Check if we are verifying this specific ID
        if (verifyDeleteId !== id) {
            setVerifyDeleteId(id);
            // Auto-reset after 3s
            setTimeout(() => setVerifyDeleteId((prev: string | null) => prev === id ? null : prev), 3000);
            return;
        }

        // 2. Already verifying, perform delete
        try {
            switch (type) {
                case 'versions': await supabaseService.deleteVersion(id); break;
                case 'cycles': await supabaseService.deleteCycle(id); break;
                case 'habits': await supabaseService.deleteHabit(id); break;
                case 'goals': await supabaseService.deleteGoal(id); break;
            }
            setVerifyDeleteId(null);
            loadData();
        } catch (e) {
            console.error("Delete failed", e);
            loadData();
        }
    };

    const handleEdit = (item: any) => {
        setEditingItem({ type: activeTab, data: item });
    };

    const handleSaveEdit = async (updatedData: any) => {
        const type = editingItem?.type;
        if (!type) return;

        switch (type) {
            case 'versions': await supabaseService.updateVersion(updatedData); break;
            case 'cycles': await supabaseService.updateCycle(updatedData); break;
            // Habits and Goals are now handled by specific modals and handlers
        }
        setEditingItem(null);
        loadData();
    };

    const handleGoalSave = async (goalData: { title: string; description: string; type: GoalType; subtasks?: string[] }, selectedHabit: Habit | null) => {
        if (editingItem?.type !== 'goals' || !editingItem.data) return;
        const originalGoal = editingItem.data as Goal;
        const parsedSubtasks = goalData.subtasks?.map((rawName: string) => {
            const match = rawName.match(/^(\s*)/);
            const leadingStr = match ? match[1] : '';
            const normalizedIndent = leadingStr.replace(/\t/g, '  ');
            const level = Math.floor(normalizedIndent.length / 2);
            return { name: rawName.trim(), done: false, level };
        });

        const updatedGoal: Goal = {
            ...originalGoal,
            title: goalData.title,
            description: goalData.description,
            type: goalData.type,
            subtasks: parsedSubtasks,
            linked_habit_id: selectedHabit?.id
        };

        await supabaseService.updateGoal(updatedGoal);
        setEditingItem(null);
        loadData();
    };

    const handleHabitSave = async (habitData: { name: string; category: string; weight: HabitWeight }) => {
        if (editingItem?.type !== 'habits' || !editingItem.data) return;
        const originalHabit = editingItem.data as Habit;
        const updatedHabit: Habit = {
            ...originalHabit,
            name: habitData.name,
            category: habitData.category,
            weight: habitData.weight
        };
        await supabaseService.updateHabit(updatedHabit);
        setEditingItem(null);
        loadData();
    };

    const handleCycleManageGoal = async (action: 'create' | 'update' | 'delete', payload: any) => {
        if (!editingItem?.data) return;
        if (action === 'delete') {
            await supabaseService.deleteGoal(payload.id);
        } else {
            // Simplified replication of Lab.tsx logic for Database view context
            if (action === 'create') {
                const newGoal: Goal = {
                    id: `g-${crypto.randomUUID()}`,
                    cycle_id: editingItem.data.id,
                    title: payload.title,
                    description: payload.description,
                    type: payload.type,
                    subtasks: payload.subtasks?.map((s: string) => ({ name: s.trim(), done: false, level: 0 })) || []
                };
                await supabaseService.addGoal(newGoal);
            } else {
                const originalGoal = goals.find((g: Goal) => g.id === payload.id);
                if (originalGoal) {
                    const updatedGoal = { ...originalGoal, ...payload };
                    if (payload.subtasks && typeof payload.subtasks[0] === 'string') {
                        updatedGoal.subtasks = payload.subtasks.map((s: string) => ({ name: s.trim(), done: false, level: 0 }));
                    }
                    await supabaseService.updateGoal(updatedGoal);
                }
            }
        }
        loadData();
    };

    const handleCycleManageHabit = async (action: 'create' | 'update' | 'delete', payload: any) => {
        if (!editingItem?.data) return;
        if (action === 'delete') {
            await supabaseService.deleteHabit(payload.id);
        } else if (action === 'create') {
            const newHabit: Habit = {
                id: `h-${crypto.randomUUID()}`,
                cycle_id: editingItem.data.id,
                name: payload.name,
                category: payload.category,
                weight: payload.weight
            };
            await supabaseService.addHabit(newHabit);
        } else {
            const originalHabit = habits.find((h: Habit) => h.id === payload.id);
            if (originalHabit) {
                await supabaseService.updateHabit({ ...originalHabit, ...payload });
            }
        }
        loadData();
    };

    // Get unique categories for habits
    const uniqueCategories = Array.from(new Set(habits.map((h: Habit) => h.category))).sort() as string[];

    // Calculate current cycle habits for goal linking context
    const activeCycle = cycles.find(c => c.status === EntityStatus.ACTIVE) || cycles[cycles.length - 1];
    const currentCycleHabits = activeCycle ? habits.filter(h => h.cycle_id === activeCycle.id) : [];

    const renderTable = () => {
        let headers: string[] = [];
        let rows: any[] = [];

        switch (activeTab) {
            case 'versions':
                headers = ['Number', 'Title', 'Status', 'Dates', 'Actions'];
                rows = versions.map((v: Version) => ({
                    id: v.id,
                    data: [
                        <span className="font-medium">v{v.number}.0</span>,
                        v.title,
                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${v.status === EntityStatus.ACTIVE ? 'bg-bali-100 text-bali-700 dark:bg-bali-900/30 dark:text-bali-400' : 'bg-graphite-100 text-graphite-500 dark:bg-graphite-800'}`}>{v.status}</span>,
                        <span className="text-xs font-mono text-graphite-500">{v.start_date} → {v.end_date}</span>
                    ],
                    original: v
                }));
                break;
            case 'cycles':
                headers = ['Sprint #', 'Priorities', 'Version Link', 'Dates', 'Actions'];
                rows = cycles.map((c: Cycle) => ({
                    id: c.id,
                    data: [
                        `Cycle ${c.sprint_number}`,
                        <div className="flex flex-col gap-1">{c.focus_priorities.slice(0, 2).map((p: string, i: number) => <span key={i} className="text-xs">• {p}</span>)}</div>,
                        <span className="text-xs text-pacific-500 font-mono">{c.version_id}</span>,
                        <span className="text-xs font-mono text-graphite-500">{c.start_date} → {c.end_date}</span>
                    ],
                    original: c
                }));
                break;
            case 'habits':
                headers = ['Name', 'Category', 'Weight', 'Cycle Link', 'Actions'];
                rows = habits.map((h: Habit) => ({
                    id: h.id,
                    data: [
                        <span className="font-medium">{h.name}</span>,
                        <span className="text-xs bg-graphite-100 dark:bg-graphite-800 px-2 py-1 rounded">{h.category}</span>,
                        <div className="flex gap-0.5">{[...Array(h.weight)].map((_: any, i: number) => <div key={i} className="h-1.5 w-1.5 rounded-full bg-pacific-500" />)}</div>,
                        <span className="text-xs text-pacific-500 font-mono">{h.cycle_id}</span>
                    ],
                    original: h
                }));
                break;
            case 'goals':
                headers = ['Title', 'Type', 'Cycle Link', 'Linked Habit', 'Actions'];
                rows = goals.map((g: Goal) => ({
                    id: g.id,
                    data: [
                        <span className="font-medium">{g.title}</span>,
                        <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded border ${g.type === GoalType.TASK_PROJECT ? 'border-purple-200 text-purple-600 dark:border-purple-900 dark:text-purple-400' : 'border-bali-200 text-bali-600 dark:border-bali-900 dark:text-bali-400'}`}>{g.type === GoalType.TASK_PROJECT ? 'Project' : 'Consistency'}</span>,
                        <span className="text-xs text-pacific-500 font-mono">{g.cycle_id}</span>,
                        g.linked_habit_id ? <span className="text-xs font-mono text-graphite-400">{g.linked_habit_id.slice(0, 8)}...</span> : <span className="text-xs text-graphite-300">-</span>
                    ],
                    original: g
                }));
                break;
        }

        return (
            <table className="w-full text-left text-sm">
                <thead className="bg-graphite-50 dark:bg-graphite-800/50 text-graphite-500 uppercase font-bold text-xs sticky top-0 backdrop-blur-sm">
                    <tr>
                        {headers.map((h, i) => <th key={i} className="px-6 py-3">{h}</th>)}
                    </tr>
                </thead>
                <tbody className="divide-y divide-graphite-200 dark:divide-graphite-800">
                    {rows.map(row => (
                        <tr key={row.id} className="hover:bg-graphite-50 dark:hover:bg-graphite-800/30 transition-colors group">
                            {row.data.map((cell: any, i: number) => (
                                <td key={i} className="px-6 py-4 text-graphite-700 dark:text-graphite-300 align-middle">
                                    {cell}
                                </td>
                            ))}
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => handleEdit(row.original)} className="p-1.5 text-graphite-400 hover:text-pacific-500 hover:bg-pacific-50 dark:hover:bg-pacific-900/20 rounded-lg transition-colors">
                                        <Edit3 size={16} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(row.id, activeTab)}
                                        className={`p-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 ${verifyDeleteId === row.id
                                            ? 'bg-red-500 text-white px-3 shadow-lg shadow-red-500/30 opacity-100'
                                            : 'text-graphite-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                                            }`}
                                    >
                                        <Trash2 size={16} />
                                        {verifyDeleteId === row.id && (
                                            <span className="text-xs font-bold animate-in fade-in slide-in-from-left-1">Confirm</span>
                                        )}
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="space-y-8 h-full flex flex-col">
            <header className="flex items-end justify-between border-b border-graphite-200 dark:border-graphite-800 pb-6">
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-graphite-500 mb-2">
                        System Records
                    </h2>
                    <h1 className="text-3xl font-display font-medium text-graphite-900 dark:text-white flex items-center gap-3">
                        <Database className="text-graphite-400" />
                        Database View
                    </h1>
                </div>
            </header>

            <div className="flex gap-4 border-b border-graphite-200 dark:border-graphite-800">
                {(['versions', 'cycles', 'habits', 'goals'] as TabType[]).map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3 text-sm font-bold uppercase tracking-wide transition-colors border-b-2 ${activeTab === tab ? 'border-pacific-500 text-pacific-700 dark:border-pacific-400 dark:text-pacific-400' : 'border-transparent text-graphite-500 hover:text-graphite-700 dark:hover:text-graphite-300'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-auto bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 rounded-lg shadow-sm">
                {renderTable()}
                {(
                    (activeTab === 'versions' && versions.length === 0) ||
                    (activeTab === 'cycles' && cycles.length === 0) ||
                    (activeTab === 'habits' && habits.length === 0) ||
                    (activeTab === 'goals' && goals.length === 0)
                ) && (
                        <div className="p-12 text-center text-graphite-400 italic">No records found in database.</div>
                    )}
            </div>

            {editingItem && (
                editingItem.type === 'goals' ? (
                    <GoalFormModal
                        isOpen={true}
                        onClose={() => setEditingItem(null)}
                        onSave={handleGoalSave}
                        initialGoal={editingItem.data as Goal}
                        allHabits={habits}
                        currentCycleHabits={currentCycleHabits}
                    />
                ) : editingItem.type === 'cycles' ? (
                    <CycleEditorModal
                        cycle={editingItem.data as Cycle}
                        goals={goals.filter((g: Goal) => g.cycle_id === editingItem.data.id)}
                        habits={habits.filter((h: Habit) => h.cycle_id === editingItem.data.id)}
                        allHabits={habits}
                        onClose={() => setEditingItem(null)}
                        onSaveCycle={handleSaveEdit}
                        onManageGoal={handleCycleManageGoal}
                        onManageHabit={handleCycleManageHabit}
                        onRenameCategory={async (oldName: string, newName: string) => {
                            const all = await supabaseService.getAllHabits();
                            const targets = all.filter((h: Habit) => h.category === oldName);
                            for (const h of targets) await supabaseService.updateHabit({ ...h, category: newName });
                            await loadData();
                        }}
                        onDeleteCategory={async (catName: string) => {
                            const all = await supabaseService.getAllHabits();
                            const targets = all.filter((h: Habit) => h.category === catName);
                            for (const h of targets) await supabaseService.updateHabit({ ...h, category: 'Uncategorized' });
                            await loadData();
                        }}
                    />
                ) : editingItem.type === 'habits' ? (
                    <HabitFormModal
                        isOpen={true}
                        onClose={() => setEditingItem(null)}
                        onSave={handleHabitSave}
                        initialHabit={editingItem.data as Habit}
                        allHabits={habits}
                        onDeleteFromLibrary={(id: string) => handleDelete(id, 'habits')}
                        onRenameCategory={async (oldName: string, newName: string) => {
                            const all = await supabaseService.getAllHabits();
                            const targets = all.filter((h: Habit) => h.category === oldName);
                            for (const h of targets) await supabaseService.updateHabit({ ...h, category: newName });
                            await loadData();
                        }}
                        onDeleteCategory={async (catName: string) => {
                            const all = await supabaseService.getAllHabits();
                            const targets = all.filter((h: Habit) => h.category === catName);
                            for (const h of targets) await supabaseService.updateHabit({ ...h, category: 'Uncategorized' });
                            await loadData();
                        }}
                    />
                ) : (
                    <EditModal
                        isOpen={!!editingItem}
                        onClose={() => setEditingItem(null)}
                        type={editingItem.type}
                        data={editingItem.data}
                        onSave={handleSaveEdit}
                        categories={uniqueCategories}
                    />
                )
            )}
        </div>
    );
};

export default DatabasePage;
