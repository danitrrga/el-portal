
import React, { useState, useEffect } from 'react';
import { Goal, GoalType, Habit } from '../types';
import { CheckCircle2, X, Link as LinkIcon, Search, Check } from 'lucide-react';

interface GoalFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (
    goal: { title: string; description: string; type: GoalType; subtasks?: string[] }, 
    selectedHabit: Habit | null
  ) => void;
  initialGoal?: Goal;
  currentCycleHabits: Habit[];
  allHabits: Habit[];
}

export const GoalFormModal: React.FC<GoalFormModalProps> = ({ 
    isOpen, onClose, onSave, initialGoal, currentCycleHabits, allHabits 
}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState<GoalType>(GoalType.TASK_PROJECT);
    const [subtasks, setSubtasks] = useState('');
    const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);
    const [habitTab, setHabitTab] = useState<'current' | 'database'>('current');
    const [habitSearch, setHabitSearch] = useState('');

    useEffect(() => {
        if (initialGoal) {
            setTitle(initialGoal.title);
            setDescription(initialGoal.description);
            setType(initialGoal.type);
            // Convert subtasks array to string with indentation preservation
            if (initialGoal.subtasks) {
                setSubtasks(initialGoal.subtasks.map(t => {
                    const indent = "  ".repeat(t.level || 0);
                    return `${indent}${t.name}`;
                }).join('\n'));
            } else {
                setSubtasks('');
            }
            // Link habit if ID exists
            if (initialGoal.linked_habit_id) {
                const found = allHabits.find(h => h.id === initialGoal.linked_habit_id);
                if (found) setSelectedHabit(found);
            }
        } else {
            // Reset for Add Mode
            setTitle('');
            setDescription('');
            setType(GoalType.TASK_PROJECT);
            setSubtasks('');
            setSelectedHabit(null);
        }
    }, [initialGoal, isOpen]);

    if (!isOpen) return null;

    const uniqueDbHabits = Array.from(new Map(allHabits.map(h => [h.name, h])).values());
    const displayHabits = habitTab === 'current' ? currentCycleHabits : uniqueDbHabits;
    const filteredHabits = displayHabits.filter(h => h.name.toLowerCase().includes(habitSearch.toLowerCase()));

    const handleSave = () => {
        if (!title.trim()) return;
        const subtaskList = type === GoalType.TASK_PROJECT ? subtasks.split('\n').filter(s => s.trim().length > 0) : undefined;
        onSave({ title, description, type, subtasks: subtaskList }, selectedHabit);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.currentTarget.selectionStart;
            const end = e.currentTarget.selectionEnd;
            const value = e.currentTarget.value;
            const indent = "  "; 
            const newValue = value.substring(0, start) + indent + value.substring(end);
            setSubtasks(newValue);
            requestAnimationFrame(() => {
                if (e.currentTarget) {
                    e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + indent.length;
                }
            });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4" onClick={onClose}>
             <div className="w-full max-w-xl rounded-2xl bg-white dark:bg-graphite-900 shadow-2xl animate-in zoom-in-95 duration-200 border border-graphite-200 dark:border-graphite-800 flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                 <div className="p-6 border-b border-graphite-200 dark:border-graphite-800 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-graphite-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-pacific-500"/> 
                        {initialGoal ? 'Edit Goal' : 'Add New Goal'}
                    </h2>
                    <button onClick={onClose} className="text-graphite-400 hover:text-white"><X size={20}/></button>
                 </div>
                 <div className="p-6 overflow-y-auto space-y-5">
                     <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-graphite-500 uppercase mb-1.5">Goal Title</label>
                            <input value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pacific-500 text-graphite-900 dark:text-white" placeholder="e.g. Launch Marketing Campaign" autoFocus />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-graphite-500 uppercase mb-1.5">Description</label>
                            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={2} className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pacific-500 text-graphite-900 dark:text-white resize-none" placeholder="What is the objective?" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-graphite-500 uppercase mb-2">Goal Type</label>
                        <div className="grid grid-cols-2 gap-2 p-1 bg-graphite-100 dark:bg-graphite-800 rounded-xl">
                             <button onClick={() => setType(GoalType.TASK_PROJECT)} className={`py-2 rounded-lg text-sm font-bold transition-all ${type === GoalType.TASK_PROJECT ? 'bg-white dark:bg-graphite-700 text-pacific-600 dark:text-white shadow-sm' : 'text-graphite-500 hover:text-graphite-700 dark:hover:text-graphite-300'}`}>Project (Tasks)</button>
                             <button onClick={() => setType(GoalType.CONSISTENCY_METRIC)} className={`py-2 rounded-lg text-sm font-bold transition-all ${type === GoalType.CONSISTENCY_METRIC ? 'bg-white dark:bg-graphite-700 text-pacific-600 dark:text-white shadow-sm' : 'text-graphite-500 hover:text-graphite-700 dark:hover:text-graphite-300'}`}>Habit Metric</button>
                        </div>
                     </div>
                     {type === GoalType.TASK_PROJECT ? (
                         <div className="animate-in fade-in slide-in-from-top-2">
                             <label className="block text-xs font-bold text-graphite-500 uppercase mb-1.5">Action Plan (Subtasks)</label>
                             <textarea value={subtasks} onChange={e => setSubtasks(e.target.value)} onKeyDown={handleKeyDown} rows={6} className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-pacific-500 text-graphite-900 dark:text-white leading-relaxed" placeholder="- Research competitors&#10;  - Analyze pricing (Indented with Tab)&#10;- Draft copy" />
                            <p className="text-[10px] text-graphite-400 mt-1 text-right">Use Tab to indent sub-tasks</p>
                         </div>
                     ) : (
                         <div className="animate-in fade-in slide-in-from-top-2 p-4 border border-graphite-200 dark:border-graphite-700 rounded-xl bg-graphite-50 dark:bg-graphite-800/50">
                             <label className="block text-xs font-bold text-pacific-500 uppercase mb-3 flex items-center gap-2"><LinkIcon size={14}/> Link Habit Source</label>
                             <div className="flex gap-4 mb-3 border-b border-graphite-200 dark:border-graphite-700">
                                 <button onClick={() => setHabitTab('current')} className={`pb-2 text-xs font-bold uppercase transition-colors border-b-2 ${habitTab === 'current' ? 'border-pacific-500 text-pacific-600 dark:text-pacific-400' : 'border-transparent text-graphite-400'}`}>Current Cycle</button>
                                 <button onClick={() => setHabitTab('database')} className={`pb-2 text-xs font-bold uppercase transition-colors border-b-2 ${habitTab === 'database' ? 'border-pacific-500 text-pacific-600 dark:text-pacific-400' : 'border-transparent text-graphite-400'}`}>Database Search</button>
                             </div>
                             {habitTab === 'database' && (
                                 <div className="relative mb-3">
                                     <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-graphite-400"/>
                                     <input value={habitSearch} onChange={e => setHabitSearch(e.target.value)} className="w-full bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-700 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-pacific-500" placeholder="Search habit history..." />
                                 </div>
                             )}
                             <div className="max-h-40 overflow-y-auto space-y-1 pr-1">
                                 {filteredHabits.map(h => (
                                     <button key={h.id} onClick={() => setSelectedHabit(h)} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex justify-between items-center ${selectedHabit?.name === h.name ? 'bg-pacific-500 text-white shadow-md' : 'hover:bg-graphite-200 dark:hover:bg-graphite-700 text-graphite-700 dark:text-graphite-300'}`}>
                                         <span className="font-medium truncate">{h.name}</span>
                                         {selectedHabit?.name === h.name && <Check size={14}/>}
                                     </button>
                                 ))}
                                 {filteredHabits.length === 0 && <div className="text-center py-4 text-xs text-graphite-400 italic">No habits found.</div>}
                             </div>
                             {selectedHabit && (
                                 <div className="mt-3 pt-3 border-t border-graphite-200 dark:border-graphite-700 flex items-center justify-between">
                                     <span className="text-xs text-graphite-500">Selected: <span className="font-bold text-graphite-900 dark:text-white">{selectedHabit.name}</span></span>
                                     <button onClick={() => setSelectedHabit(null)} className="text-xs text-red-400 hover:text-red-500">Clear</button>
                                 </div>
                             )}
                         </div>
                     )}
                 </div>
                 <div className="p-6 border-t border-graphite-200 dark:border-graphite-800 flex justify-end gap-3">
                     <button onClick={onClose} className="px-4 py-2 text-sm font-bold text-graphite-500 hover:text-graphite-800 dark:hover:text-white transition-colors">Cancel</button>
                     <button onClick={handleSave} disabled={!title.trim() || (type === GoalType.CONSISTENCY_METRIC && !selectedHabit)} className="px-6 py-2 bg-pacific-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-pacific-500/30 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pacific-500 transition-colors">
                         {initialGoal ? 'Save Changes' : 'Create Goal'}
                     </button>
                 </div>
             </div>
        </div>
    );
};
