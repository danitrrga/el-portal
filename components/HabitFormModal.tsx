
import React, { useState, useEffect, useMemo } from 'react';
import { Habit, HabitWeight } from '../types';
import { CheckCircle2, X, Save, Library, Plus, Search, Tag, Trash2, ArrowRight, Settings, Edit2, ArrowLeft, AlertCircle, Check } from 'lucide-react';

interface HabitFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (habitData: { name: string; category: string; weight: HabitWeight }) => void;
  initialHabit?: Habit;
  allHabits?: Habit[];
  onDeleteFromLibrary?: (habitId: string) => void;
  onRenameCategory?: (oldName: string, newName: string) => Promise<void>;
  onDeleteCategory?: (categoryName: string) => Promise<void>;
}

export const HabitFormModal: React.FC<HabitFormModalProps> = ({ 
    isOpen, onClose, onSave, initialHabit, allHabits = [], onDeleteFromLibrary, onRenameCategory, onDeleteCategory 
}) => {
    const [activeTab, setActiveTab] = useState<'create' | 'library'>('create');
    const [isManagingCats, setIsManagingCats] = useState(false);
    
    // Form State
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [weight, setWeight] = useState<HabitWeight>(HabitWeight.MEDIUM);

    // Library State
    const [librarySearch, setLibrarySearch] = useState('');
    const [verifyDeleteId, setVerifyDeleteId] = useState<string | null>(null);

    // Category Manager State
    const [editingCatName, setEditingCatName] = useState<string | null>(null);
    const [tempCatName, setTempCatName] = useState('');
    const [verifyDeleteCat, setVerifyDeleteCat] = useState<string | null>(null);

    useEffect(() => {
        if (initialHabit) {
            setName(initialHabit.name);
            setCategory(initialHabit.category);
            setWeight(initialHabit.weight);
            setActiveTab('create');
        } else {
            // Reset only if opening for new habit
            if (isOpen && !initialHabit && activeTab === 'create' && name === '') {
                setName('');
                setCategory('');
                setWeight(HabitWeight.MEDIUM);
            }
        }
        setIsManagingCats(false);
    }, [initialHabit, isOpen]);

    // Smart Category Derivation
    const uniqueCategories = useMemo(() => {
        const cats = new Set(allHabits.map(h => h.category).filter(Boolean));
        return Array.from(cats).sort();
    }, [allHabits]);

    // Smart Library Derivation
    const libraryItems = useMemo(() => {
        const unique = new Map<string, Habit>();
        allHabits.forEach(h => {
            if (!unique.has(h.name)) {
                unique.set(h.name, h);
            }
        });
        return Array.from(unique.values()).filter(h => 
            h.name.toLowerCase().includes(librarySearch.toLowerCase()) || 
            h.category.toLowerCase().includes(librarySearch.toLowerCase())
        );
    }, [allHabits, librarySearch]);

    if (!isOpen) return null;

    const handleSave = () => {
        if (!name.trim() || !category.trim()) return;
        onSave({ name, category, weight });
    };

    const handleImportFromLibrary = (habit: Habit) => {
        setName(habit.name);
        setCategory(habit.category);
        setWeight(habit.weight);
        setActiveTab('create');
    };

    const handleDeleteClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        if (verifyDeleteId === id) {
            if (onDeleteFromLibrary) onDeleteFromLibrary(id);
            setVerifyDeleteId(null);
        } else {
            setVerifyDeleteId(id);
            setTimeout(() => setVerifyDeleteId(null), 3000);
        }
    };

    // --- Category Manager Handlers ---
    const startEditCategory = (cat: string) => {
        setEditingCatName(cat);
        setTempCatName(cat);
    };

    const saveEditCategory = async () => {
        if (editingCatName && tempCatName.trim() && tempCatName !== editingCatName) {
            if (onRenameCategory) {
                await onRenameCategory(editingCatName, tempCatName.trim());
                // If the current form category matched the edited one, update it too
                if (category === editingCatName) setCategory(tempCatName.trim());
            }
        }
        setEditingCatName(null);
        setTempCatName('');
    };

    const deleteCategory = async (cat: string) => {
        if (verifyDeleteCat === cat) {
            if (onDeleteCategory) {
                await onDeleteCategory(cat);
                // If form selected this category, clear it
                if (category === cat) setCategory('');
            }
            setVerifyDeleteCat(null);
        } else {
            setVerifyDeleteCat(cat);
            setTimeout(() => setVerifyDeleteCat(null), 3000);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4" onClick={onClose}>
             <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-graphite-900 shadow-2xl animate-in zoom-in-95 duration-200 border border-graphite-200 dark:border-graphite-800 flex flex-col max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
                 
                 {/* Header & Tabs */}
                 <div className="flex-none border-b border-graphite-200 dark:border-graphite-800">
                     <div className="p-6 pb-4 flex justify-between items-center">
                        <h2 className="text-lg font-bold text-graphite-900 dark:text-white flex items-center gap-2">
                            {isManagingCats ? (
                                <><Settings size={18} className="text-graphite-500"/> Manage Categories</>
                            ) : activeTab === 'create' ? (
                                <><CheckCircle2 size={18} className="text-pacific-500"/> {initialHabit ? 'Edit Habit' : 'Add Habit'}</>
                            ) : (
                                <><Library size={18} className="text-bali-500"/> Habit Library</>
                            )}
                        </h2>
                        <button onClick={onClose} className="text-graphite-400 hover:text-white"><X size={18}/></button>
                     </div>
                     
                     {!initialHabit && !isManagingCats && (
                         <div className="px-6 flex gap-4">
                             <button 
                                onClick={() => setActiveTab('create')}
                                className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'create' ? 'border-pacific-500 text-pacific-600 dark:text-pacific-400' : 'border-transparent text-graphite-400 hover:text-graphite-600 dark:hover:text-graphite-300'}`}
                             >
                                 Create New
                             </button>
                             <button 
                                onClick={() => setActiveTab('library')}
                                className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'library' ? 'border-bali-500 text-bali-600 dark:text-bali-400' : 'border-transparent text-graphite-400 hover:text-graphite-600 dark:hover:text-graphite-300'}`}
                             >
                                 From History
                             </button>
                         </div>
                     )}
                 </div>

                 {/* Content Area */}
                 <div className="flex-1 overflow-y-auto p-6">
                    {isManagingCats ? (
                        <div className="animate-in fade-in slide-in-from-right-4 space-y-4">
                            <div className="flex items-center justify-between mb-2">
                                <button onClick={() => setIsManagingCats(false)} className="text-xs font-bold text-graphite-500 hover:text-pacific-500 flex items-center gap-1">
                                    <ArrowLeft size={12}/> Back to Form
                                </button>
                                <span className="text-[10px] uppercase text-graphite-400 font-bold">{uniqueCategories.length} Categories</span>
                            </div>
                            
                            <div className="space-y-2">
                                {uniqueCategories.map(cat => (
                                    <div key={cat} className="group flex items-center justify-between p-3 rounded-xl border border-graphite-200 dark:border-graphite-800 bg-white dark:bg-graphite-800/50 hover:border-pacific-200 dark:hover:border-pacific-900 transition-all">
                                        {editingCatName === cat ? (
                                            <div className="flex items-center gap-2 flex-1">
                                                <input 
                                                    value={tempCatName} 
                                                    onChange={e => setTempCatName(e.target.value)}
                                                    className="flex-1 bg-graphite-50 dark:bg-graphite-900 border border-pacific-500 rounded-lg px-2 py-1 text-sm text-graphite-900 dark:text-white outline-none"
                                                    autoFocus
                                                    onKeyDown={e => e.key === 'Enter' && saveEditCategory()}
                                                />
                                                <button onClick={saveEditCategory} className="p-1.5 bg-pacific-500 text-white rounded-lg"><Check size={14}/></button>
                                                <button onClick={() => setEditingCatName(null)} className="p-1.5 text-graphite-400 hover:text-white"><X size={14}/></button>
                                            </div>
                                        ) : (
                                            <>
                                                <span className="text-sm font-medium text-graphite-700 dark:text-graphite-300">{cat}</span>
                                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => startEditCategory(cat)} className="p-2 text-graphite-400 hover:text-pacific-500 hover:bg-pacific-50 dark:hover:bg-pacific-900/20 rounded-lg"><Edit2 size={14}/></button>
                                                    {cat !== 'Uncategorized' && (
                                                        <button 
                                                            onClick={() => deleteCategory(cat)} 
                                                            className={`p-2 rounded-lg flex items-center gap-2 transition-all ${verifyDeleteCat === cat ? 'bg-red-500 text-white w-24 justify-center' : 'text-graphite-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'}`}
                                                        >
                                                            <Trash2 size={14}/> {verifyDeleteCat === cat && <span className="text-[10px] font-bold">Confirm</span>}
                                                        </button>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                                {uniqueCategories.length === 0 && <div className="text-center py-8 text-graphite-400 text-sm">No categories defined yet.</div>}
                            </div>
                            
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30 flex gap-3 items-start">
                                <AlertCircle size={16} className="text-blue-500 mt-0.5 shrink-0"/>
                                <div className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                                    <strong>Note:</strong> Renaming updates all habits history. Deleting moves associated habits to "Uncategorized".
                                </div>
                            </div>
                        </div>
                    ) : activeTab === 'create' ? (
                        <div className="space-y-5 animate-in fade-in slide-in-from-left-4">
                            <div>
                                <label className="block text-xs font-bold text-graphite-500 uppercase mb-1.5">Habit Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pacific-500 text-graphite-900 dark:text-white transition-all" placeholder="e.g. Morning Run" autoFocus />
                            </div>
                            
                            <div>
                                <div className="flex justify-between items-center mb-1.5">
                                    <label className="block text-xs font-bold text-graphite-500 uppercase">Category</label>
                                    <button onClick={() => setIsManagingCats(true)} className="text-[10px] font-bold text-pacific-500 hover:text-pacific-600 flex items-center gap-1"><Settings size={10}/> Manage</button>
                                </div>
                                <div className="relative">
                                    <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-graphite-400"/>
                                    <input value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-pacific-500 text-graphite-900 dark:text-white transition-all" placeholder="e.g. Health" />
                                </div>
                                {/* Category Chips */}
                                {uniqueCategories.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {uniqueCategories.slice(0, 8).map(cat => (
                                            <button 
                                                key={cat}
                                                onClick={() => setCategory(cat === category ? '' : cat)}
                                                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide border transition-all ${category === cat ? 'bg-pacific-500 text-white border-pacific-500' : 'bg-graphite-100 dark:bg-graphite-800 text-graphite-500 border-transparent hover:bg-pacific-50 dark:hover:bg-pacific-900/20 hover:text-pacific-600 dark:hover:text-pacific-400'}`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-graphite-500 uppercase mb-1.5">Impact Weight</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {[HabitWeight.LOW, HabitWeight.MEDIUM, HabitWeight.HIGH].map((w) => (
                                        <button 
                                            key={w} 
                                            onClick={() => setWeight(w)}
                                            className={`py-2.5 text-xs font-bold rounded-xl border transition-all ${weight === w ? 'bg-pacific-500 text-white border-pacific-500 shadow-md shadow-pacific-500/20' : 'bg-graphite-50 dark:bg-graphite-800 text-graphite-500 border-graphite-200 dark:border-graphite-700 hover:border-graphite-400'}`}
                                        >
                                            {w === HabitWeight.LOW ? 'Low (1)' : w === HabitWeight.MEDIUM ? 'Medium (2)' : 'High (4)'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4">
                            <div className="relative mb-4">
                                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-graphite-400"/>
                                <input 
                                    value={librarySearch} 
                                    onChange={e => setLibrarySearch(e.target.value)} 
                                    className="w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-bali-500 text-graphite-900 dark:text-white" 
                                    placeholder="Search history..." 
                                    autoFocus
                                />
                            </div>
                            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                                {libraryItems.length > 0 ? libraryItems.map(habit => (
                                    <div key={habit.id} onClick={() => handleImportFromLibrary(habit)} className="group flex items-center justify-between p-3 rounded-xl border border-graphite-200 dark:border-graphite-800 bg-white dark:bg-graphite-800/50 hover:border-bali-500 dark:hover:border-bali-500 cursor-pointer transition-all">
                                        <div>
                                            <div className="text-sm font-bold text-graphite-900 dark:text-white group-hover:text-bali-600 dark:group-hover:text-bali-400 transition-colors">{habit.name}</div>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-[10px] font-medium bg-graphite-100 dark:bg-graphite-900 text-graphite-500 px-2 py-0.5 rounded">{habit.category}</span>
                                                <div className="flex gap-0.5">{[...Array(habit.weight)].map((_,i) => <div key={i} className="h-1 w-1 rounded-full bg-bali-400"/>)}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={(e) => handleDeleteClick(e, habit.id)} 
                                                className={`p-2 rounded-lg transition-all ${verifyDeleteId === habit.id ? 'bg-red-500 text-white' : 'text-graphite-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 opacity-0 group-hover:opacity-100'}`}
                                            >
                                                <Trash2 size={14}/>
                                            </button>
                                            <ArrowRight size={16} className="text-graphite-300 group-hover:text-bali-500 -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100"/>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="text-center py-12 text-graphite-400 text-sm">No matching habits found in history.</div>
                                )}
                            </div>
                        </div>
                    )}
                 </div>

                 {/* Footer */}
                 <div className="p-6 border-t border-graphite-200 dark:border-graphite-800 flex justify-end gap-3 bg-white dark:bg-graphite-900 rounded-b-2xl">
                     {!isManagingCats ? (
                         <>
                             <button onClick={onClose} className="px-4 py-2 text-sm font-bold text-graphite-500 hover:text-graphite-800 dark:hover:text-white transition-colors">Cancel</button>
                             {activeTab === 'create' && (
                                 <button onClick={handleSave} disabled={!name.trim()} className="px-6 py-2 bg-pacific-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-pacific-500/30 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pacific-500 transition-colors flex items-center gap-2">
                                     <Save size={14}/> Save
                                 </button>
                             )}
                         </>
                     ) : (
                         <button onClick={() => setIsManagingCats(false)} className="px-6 py-2 bg-graphite-100 dark:bg-graphite-800 text-graphite-900 dark:text-white rounded-xl text-sm font-bold hover:bg-graphite-200 dark:hover:bg-graphite-700 transition-colors">
                             Done
                         </button>
                     )}
                 </div>
             </div>
        </div>
    );
};
