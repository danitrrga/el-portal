import React, { useState } from 'react';
import { Plus, X, CheckSquare, Square } from 'lucide-react';

interface LifeChecklistProps {
    content: string;
    onUpdate: (newContent: string) => void;
    onAutoSave: () => void;
}

export const LifeChecklist: React.FC<LifeChecklistProps> = ({ content, onUpdate, onAutoSave }) => {
    const [newTodo, setNewTodo] = useState('');

    // Helper to save immediately
    const saveContentDirectly = (newContent: string) => {
        onUpdate(newContent);
        // Trigger save
        setTimeout(onAutoSave, 500);
    };

    const handleAddTodo = () => {
        if (!newTodo.trim()) return;
        const newContent = content ? `${content}\n- [ ] ${newTodo}` : `- [ ] ${newTodo}`;
        setNewTodo('');
        saveContentDirectly(newContent);
    };

    const handleDeleteTodo = (idx: number) => {
        const lines = content.split('\n');
        lines.splice(idx, 1);
        saveContentDirectly(lines.join('\n'));
    };

    const handleUpdateTodoText = (idx: number, text: string) => {
        const lines = content.split('\n');
        const isDone = lines[idx].includes('[x]');
        lines[idx] = `- [${isDone ? 'x' : ' '}] ${text}`;
        onUpdate(lines.join('\n'));
    };

    const handleToggleTodo = (idx: number) => {
        const lines = content.split('\n');
        const line = lines[idx];
        const isDone = line.includes('[x]');
        // Regex replace to handle potential spacing variations
        lines[idx] = line.replace(/- \[(x| )\]/, `- [${isDone ? ' ' : 'x'}]`);
        saveContentDirectly(lines.join('\n'));
    };

    const handleBlur = () => {
        onAutoSave();
    };

    return (
        <div className="space-y-1 max-w-3xl mx-auto">
            {content.split('\n').map((line, idx) => {
                const isTask = line.trim().startsWith('- [');
                if (!isTask) return null;
                const isDone = line.includes('[x]');
                const text = line.replace(/- \[(x| )\] /, '');

                return (
                    <div key={idx} className="flex items-center gap-3 group py-2 px-3 rounded-lg hover:bg-graphite-50 dark:hover:bg-graphite-800/50 transition-colors">
                        <button onClick={() => handleToggleTodo(idx)} className={`flex-shrink-0 transition-colors ${isDone ? 'text-bali-500' : 'text-graphite-300 hover:text-graphite-500'}`}>
                            {isDone ? <CheckSquare size={20} /> : <Square size={20} />}
                        </button>
                        <input
                            value={text}
                            onChange={(e) => handleUpdateTodoText(idx, e.target.value)}
                            onBlur={handleBlur}
                            className={`flex-1 bg-transparent text-base focus:outline-none ${isDone ? 'text-graphite-400 line-through decoration-graphite-300' : 'text-graphite-700 dark:text-graphite-200'}`}
                        />
                        <button
                            onClick={() => handleDeleteTodo(idx)}
                            className="opacity-0 group-hover:opacity-100 text-graphite-400 hover:text-red-500 transition-all p-1"
                        >
                            <X size={16} />
                        </button>
                    </div>
                );
            })}
            <div className="flex items-center gap-3 pt-4 mt-2 border-t border-graphite-100 dark:border-graphite-800 px-3">
                <button onClick={handleAddTodo} className="text-graphite-400 hover:text-pacific-500 transition-colors">
                    <Plus size={20} />
                </button>
                <input
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAddTodo()}
                    placeholder="Add new item"
                    className="flex-1 bg-transparent text-base text-graphite-900 dark:text-white focus:outline-none placeholder-graphite-400"
                />
            </div>
        </div>
    );
};
