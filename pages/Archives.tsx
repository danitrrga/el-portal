import React, { useEffect, useState } from 'react';
import { db } from '../services/mockDb';
import { ArchiveItem, ArchiveType } from '../types';
import { Library, Eye, List, Brain, ScrollText, Plus, Save, Trash2, CheckSquare, Square, X } from 'lucide-react';

const Archives: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ArchiveType>(ArchiveType.VISION_5Y);
  const [items, setItems] = useState<ArchiveItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);
  
  const [editorContent, setEditorContent] = useState('');
  const [editorTitle, setEditorTitle] = useState('');
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => { loadItems(); }, []);

  const loadItems = async () => {
    const archives = await db.getArchives();
    setItems(archives);
    if (activeTab === ArchiveType.VISION_5Y || activeTab === ArchiveType.LIFE_TODO) {
       const found = archives.find(a => a.type === activeTab);
       if (found) selectItem(found);
       else if (activeTab === ArchiveType.LIFE_TODO) {
         const newLifeTodo: ArchiveItem = { id: 'life-todo-main', type: ArchiveType.LIFE_TODO, title: 'Life Checklist', content: '' };
         await db.updateArchive(newLifeTodo); setItems(prev => [...prev, newLifeTodo]); selectItem(newLifeTodo);
       }
    }
  };

  const selectItem = (item: ArchiveItem) => { setSelectedItem(item); setEditorTitle(item.title); setEditorContent(item.content); };
  const handleCreateNew = () => { const newItem: ArchiveItem = { id: `new-${Date.now()}`, type: activeTab, title: 'Untitled Entry', content: '' }; selectItem(newItem); };
  
  const handleSave = async () => { 
      if (selectedItem) { 
          const updatedItem = { ...selectedItem, title: editorTitle, content: editorContent, type: activeTab }; 
          await db.updateArchive(updatedItem); 
          setItems(prev => prev.map(i => i.id === updatedItem.id ? updatedItem : i)); 
          setSelectedItem(updatedItem); 
      } 
  };

  // Helper to save content changes immediately
  const saveContentDirectly = async (newContent: string) => {
      setEditorContent(newContent);
      if (selectedItem) {
          const updatedItem = { ...selectedItem, title: editorTitle, content: newContent, type: activeTab };
          await db.updateArchive(updatedItem);
          setItems(prev => prev.map(i => i.id === updatedItem.id ? updatedItem : i));
          setSelectedItem(updatedItem);
      }
  };

  // Todo Logic
  const handleToggleTodo = (idx: number) => { 
      const lines = editorContent.split('\n'); 
      if(lines[idx].includes('[ ]')) lines[idx] = lines[idx].replace('[ ]', '[x]'); 
      else lines[idx] = lines[idx].replace('[x]', '[ ]'); 
      saveContentDirectly(lines.join('\n'));
  };

  const handleAddTodo = () => { 
      if(!newTodo.trim()) return; 
      const newContent = editorContent ? `${editorContent}\n- [ ] ${newTodo}` : `- [ ] ${newTodo}`; 
      setNewTodo(''); 
      saveContentDirectly(newContent);
  };

  const handleDeleteTodo = (idx: number) => {
      const lines = editorContent.split('\n');
      lines.splice(idx, 1);
      saveContentDirectly(lines.join('\n'));
  };

  const handleUpdateTodoText = (idx: number, text: string) => {
      const lines = editorContent.split('\n');
      const isDone = lines[idx].includes('[x]');
      lines[idx] = `- [${isDone ? 'x' : ' '}] ${text}`;
      setEditorContent(lines.join('\n'));
  };

  const tabs = [
    { id: ArchiveType.VISION_5Y, label: 'Vision', icon: <Eye size={18}/> },
    { id: ArchiveType.LIFE_TODO, label: 'Life Checklist', icon: <CheckSquare size={18}/> },
    { id: ArchiveType.ROUTINE, label: 'Routines', icon: <List size={18}/> },
    { id: ArchiveType.MANTRA_BANK, label: 'Mantra Bank', icon: <Brain size={18}/> },
    { id: ArchiveType.THEORY_NOTES, label: 'Theory Notes', icon: <ScrollText size={18}/> },
  ];

  const filteredItems = items.filter(i => i.type === activeTab);
  const isSingleItemTab = activeTab === ArchiveType.VISION_5Y || activeTab === ArchiveType.LIFE_TODO;

  return (
    <div className="h-full flex flex-col">
      <header className="mb-6">
           <h1 className="text-3xl font-bold text-graphite-900 dark:text-white">Archives</h1>
           <p className="text-xs font-bold text-graphite-500 uppercase tracking-widest">Knowledge Base</p>
      </header>

      <div className="flex-1 flex overflow-hidden rounded-2xl border border-graphite-200 dark:border-graphite-800 bg-white dark:bg-graphite-900 shadow-sm">
         
         <div className="w-64 flex-shrink-0 border-r border-graphite-100 dark:border-graphite-800 bg-graphite-50 dark:bg-graphite-950 p-4 space-y-1">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => { setActiveTab(tab.id); setSelectedItem(null); if (tab.id === ArchiveType.VISION_5Y || tab.id === ArchiveType.LIFE_TODO) { const found = items.find(i => i.type === tab.id); if (found) selectItem(found); } }}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-pacific-50 text-pacific-700 dark:bg-pacific-900/20 dark:text-pacific-300' : 'text-graphite-500 hover:bg-graphite-100 dark:hover:bg-graphite-800'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
         </div>

         {!isSingleItemTab && (
            <div className="w-64 flex-shrink-0 border-r border-graphite-100 dark:border-graphite-800 bg-white dark:bg-graphite-900 flex flex-col">
               <div className="p-4 border-b border-graphite-100 dark:border-graphite-800 flex justify-between items-center">
                  <span className="text-xs font-bold text-graphite-400 uppercase">Entries</span>
                  <button onClick={handleCreateNew} className="text-pacific-600 hover:bg-pacific-50 p-1 rounded"><Plus size={18}/></button>
               </div>
               <div className="flex-1 overflow-y-auto p-2 space-y-1">
                  {filteredItems.map(item => (
                    <button key={item.id} onClick={() => selectItem(item)} className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${selectedItem?.id === item.id ? 'bg-graphite-100 dark:bg-graphite-800 text-graphite-900 dark:text-white' : 'text-graphite-500 hover:bg-graphite-50 dark:hover:bg-graphite-800/50'}`}>
                      {item.title || 'Untitled'}
                    </button>
                  ))}
               </div>
            </div>
         )}

         <div className="flex-1 flex flex-col bg-white dark:bg-graphite-900 relative">
            {selectedItem ? (
               <>
                 <div className="p-6 border-b border-graphite-100 dark:border-graphite-800 flex justify-between items-center">
                    <input value={editorTitle} onChange={e => setEditorTitle(e.target.value)} onBlur={handleSave} className="bg-transparent text-2xl font-bold text-graphite-900 dark:text-white focus:outline-none placeholder-graphite-400 w-full" placeholder="Entry Title..." />
                    {activeTab !== ArchiveType.LIFE_TODO && <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-pacific-600 text-white text-xs font-bold rounded-lg hover:bg-pacific-500"><Save size={16}/> Save</button>}
                 </div>
                 <div className="flex-1 p-8 overflow-y-auto">
                    {activeTab === ArchiveType.LIFE_TODO ? (
                        <div className="space-y-1 max-w-3xl">
                             {editorContent.split('\n').map((line, idx) => {
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
                                            onBlur={handleSave}
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
                    ) : (
                        <textarea value={editorContent} onChange={e => setEditorContent(e.target.value)} onBlur={handleSave} className="w-full h-full bg-transparent text-graphite-700 dark:text-graphite-300 font-mono text-sm resize-none focus:outline-none leading-loose" placeholder="# Start writing..." />
                    )}
                 </div>
               </>
            ) : (
               <div className="flex-1 flex items-center justify-center text-graphite-400 text-sm font-medium">Select an entry to view details</div>
            )}
         </div>
      </div>
    </div>
  );
};

export default Archives;