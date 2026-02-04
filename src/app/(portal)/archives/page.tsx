'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { supabaseService } from '@/lib/supabaseService';
import { ArchiveItem, ArchiveType } from '@/types/types';
import { Library, Eye, List, Brain, ScrollText, Plus, Save, Trash2, X, Search, ArrowUpDown, Edit3, Check, CheckSquare, Square } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Archives: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ArchiveType>(ArchiveType.VISION_5Y);
  const [items, setItems] = useState<ArchiveItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);
  const [loading, setLoading] = useState(true);

  const [editorContent, setEditorContent] = useState('');
  const [editorTitle, setEditorTitle] = useState('');
  const [newTodo, setNewTodo] = useState('');

  // New state for modes and tracking
  const [viewMode, setViewMode] = useState<'view' | 'edit'>('view');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [originalContent, setOriginalContent] = useState('');

  // Mantra Bank specific
  const [mantraSearch, setMantraSearch] = useState('');
  const [mantraSort, setMantraSort] = useState<'desc' | 'asc'>('desc');
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'error' | 'idle'>('idle');
  // New state for multi-item editing (Mantra Bank)
  const [modifiedMantras, setModifiedMantras] = useState<Record<string, string>>({});

  useEffect(() => { loadItems(); }, []);

  // Track unsaved changes
  useEffect(() => {
    // For Life Checklist, we don't track unsaved changes this way as it saves automatically/directly
    if (activeTab === ArchiveType.LIFE_TODO) return;

    if (viewMode === 'edit' || activeTab === ArchiveType.MANTRA_BANK) {
      setHasUnsavedChanges(editorContent !== originalContent);
    }
  }, [editorContent, originalContent, viewMode, activeTab]);

  const loadItems = async () => {
    setLoading(true);
    try {
      await supabaseService.seedDefaultArchives();
      const archives = await supabaseService.getArchives();
      setItems(archives);

      // Auto-select for singletons
      if (activeTab === ArchiveType.VISION_5Y || activeTab === ArchiveType.LIFE_TODO) {
        const found = archives.find((a: ArchiveItem) => a.type === activeTab);
        if (found) {
          selectItem(found);
          setViewMode('view');
        } else {
          handleCreateNewForTab(activeTab);
          // For Life Checklist, viewMode doesn't really matter as we render custom UI, but for consistency
          setViewMode('edit');
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const selectItem = (item: ArchiveItem) => {
    setSelectedItem(item);
    setEditorTitle(item.title);
    setEditorContent(item.content);
    setOriginalContent(item.content);
    setHasUnsavedChanges(false);
    setSaveStatus('idle');
  };

  const handleTabChange = (tabId: ArchiveType) => {
    setActiveTab(tabId);
    setSaveStatus('idle');
    setHasUnsavedChanges(false);
    setSelectedItem(null);

    const isSingleton = tabId === ArchiveType.VISION_5Y || tabId === ArchiveType.LIFE_TODO;
    if (isSingleton) {
      const found = items.find((i: ArchiveItem) => i.type === tabId);
      if (found) {
        selectItem(found);
        setViewMode('view'); // Default to view mode for singletons
      } else {
        handleCreateNewForTab(tabId);
        setViewMode('edit');
      }
    } else {
      // For collections (Theory, Routines), clear selection so user sees list
      setSelectedItem(null);
      setViewMode('view');
    }
  };

  const handleCreateNewForTab = (tabId: ArchiveType) => {
    const isMantra = tabId === ArchiveType.MANTRA_BANK;

    let defaultTitle = 'New Entry';
    let defaultContent = '';

    if (isMantra) {
      defaultTitle = 'Mantra';
    } else if (tabId === ArchiveType.VISION_5Y) {
      defaultTitle = 'Vision';
    } else if (tabId === ArchiveType.LIFE_TODO) {
      defaultTitle = 'Life Checklist';
    } else if (tabId === ArchiveType.THEORY_NOTES) {
      defaultTitle = 'Theory Note';
      defaultContent = '# Theory Note\n\n**Problem/Friction:**\n\n\n**Proposed Solution:**\n';
    }

    const newItem: ArchiveItem = {
      id: `new-${Date.now()}`,
      type: tabId,
      title: defaultTitle,
      content: defaultContent
    };

    if (isMantra) {
      // For mantras, add directly to items (simulating prompt appearance)
      setItems(prev => [newItem, ...prev]);
      setModifiedMantras(prev => ({ ...prev, [newItem.id]: defaultContent }));
    } else {
      selectItem(newItem);
      setViewMode('edit');
    }
  };

  const handleCreateNew = () => {
    handleCreateNewForTab(activeTab);
  };

  // Dedicated Save Handler
  const handleSave = async (shouldCloseMantra = false, contentOverride?: string) => {
    if (selectedItem) {
      setSaveStatus('saving');
      try {
        const contentToSave = contentOverride !== undefined ? contentOverride : editorContent;
        const updatedItem = { ...selectedItem, title: editorTitle, content: contentToSave, type: activeTab };
        const result = await supabaseService.updateArchive(updatedItem);

        const savedItem = { ...updatedItem, id: result.id };
        setOriginalContent(contentToSave);
        if (contentOverride === undefined) {
          setEditorContent(contentToSave); // Ensure local state matches if we passed an override that wasn't already set
        }
        setHasUnsavedChanges(false);

        setItems(prev => {
          const exists = prev.some(i => i.id === selectedItem.id || i.id === result.id);
          if (exists) {
            return prev.map(i => (i.id === selectedItem.id || i.id === result.id) ? savedItem : i);
          }
          return [...prev, savedItem];
        });

        // Update current valid item with new ID if it was new
        setSelectedItem(savedItem);

        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 2000);

        if (activeTab === ArchiveType.MANTRA_BANK && shouldCloseMantra) {
          setSelectedItem(null);
        }

      } catch (err) {
        console.error(err);
        setSaveStatus('error');
      }
    }
  };

  // --- LIFE CHECKLIST SPECIFIC LOGIC ---
  const saveContentDirectly = (newContent: string) => {
    setEditorContent(newContent);
    handleSave(false, newContent);
  };

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
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
    setEditorContent(lines.join('\n')); // Just update state, save on blur
    setHasUnsavedChanges(true);
  };

  const handleToggleTodo = (idx: number) => {
    const lines = editorContent.split('\n');
    const line = lines[idx];
    const isDone = line.includes('[x]');
    // Regex replace to handle potential spacing variations
    lines[idx] = line.replace(/- \[(x| )\]/, `- [${isDone ? ' ' : 'x'}]`);
    saveContentDirectly(lines.join('\n'));
  };
  // --------------------------------------

  const handleSaveMantra = async (item: ArchiveItem, newContent: string) => {
    setSaveStatus('saving');
    try {
      const updatedItem = { ...item, content: newContent };
      // Pass item directly; updateArchive handles 'new-' IDs by inserting
      const result = await supabaseService.updateArchive(updatedItem);

      const savedItem = { ...updatedItem, id: result.id };

      setItems(prev => prev.map(i => i.id === item.id ? savedItem : i));

      setModifiedMantras(prev => {
        const next = { ...prev };
        delete next[item.id]; // Remove from modified since saved
        return next;
      });

      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (err) {
      console.error(err);
      setSaveStatus('error');
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (id.startsWith('new-')) {
      setSelectedItem(null);
      return;
    }
    if (confirm('Permanently delete this entry?')) {
      await supabaseService.deleteArchive(id);
      const refreshed = items.filter(i => i.id !== id);
      setItems(refreshed);
      if (selectedItem?.id === id) setSelectedItem(null);
    }
  };

  const tabs = [
    { id: ArchiveType.VISION_5Y, label: 'Vision', icon: <Eye size={18} /> },
    { id: ArchiveType.LIFE_TODO, label: 'Life Checklist', icon: <Check size={18} /> },
    { id: ArchiveType.ROUTINE, label: 'Routines', icon: <List size={18} /> },
    { id: ArchiveType.MANTRA_BANK, label: 'Mantra Bank', icon: <Brain size={18} /> },
    { id: ArchiveType.THEORY_NOTES, label: 'Theory Notes', icon: <ScrollText size={18} /> },
  ];

  const filteredItems = useMemo(() => {
    let list = items.filter(i => i.type === activeTab);
    if (activeTab === ArchiveType.MANTRA_BANK) {
      if (mantraSearch) {
        list = list.filter(i => i.content.toLowerCase().includes(mantraSearch.toLowerCase()));
      }
      list = [...list].sort((a, b) => {
        const dateA = new Date(a.created_at || 0).getTime();
        const dateB = new Date(b.created_at || 0).getTime();
        return mantraSort === 'desc' ? dateB - dateA : dateA - dateB;
      });
    }
    return list;
  }, [items, activeTab, mantraSearch, mantraSort]);

  const isSingleton = activeTab === ArchiveType.VISION_5Y || activeTab === ArchiveType.LIFE_TODO;
  const isMantraBank = activeTab === ArchiveType.MANTRA_BANK;
  const isLifeChecklist = activeTab === ArchiveType.LIFE_TODO;

  return (
    <div className="h-full flex flex-col">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-graphite-900 dark:text-white">Archives</h1>
        <p className="text-xs font-bold text-graphite-500 uppercase tracking-widest">Knowledge Base</p>
      </header>

      <div className="flex-1 flex overflow-hidden rounded-2xl border border-graphite-200 dark:border-graphite-800 bg-white dark:bg-graphite-900 shadow-sm">

        {/* Primary Sidebar - Tabs */}
        <div className="w-64 flex-shrink-0 border-r border-graphite-100 dark:border-graphite-800 bg-graphite-50 dark:bg-graphite-950 p-4 space-y-1">
          {tabs.map(tab => (
            <button key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-pacific-50 text-pacific-700 dark:bg-pacific-900/20 dark:text-pacific-300' : 'text-graphite-500 hover:bg-graphite-100 dark:hover:bg-graphite-800'}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Secondary Sidebar - Entries (for Collections) */}
        {!isSingleton && !isMantraBank && (
          <div className="w-64 flex-shrink-0 border-r border-graphite-100 dark:border-graphite-800 bg-white dark:bg-graphite-900 flex flex-col">
            <div className="p-4 border-b border-graphite-100 dark:border-graphite-800 flex justify-between items-center">
              <span className="text-xs font-bold text-graphite-400 uppercase">Entries</span>
              <button
                onClick={handleCreateNew}
                className="text-pacific-600 hover:bg-pacific-50 p-1.5 rounded-lg transition-colors"
                title="Create New Entry"
              >
                <Plus size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {filteredItems.map((item: ArchiveItem) => (
                <div key={item.id} className="group relative">
                  <button
                    onClick={() => { selectItem(item); setViewMode('view'); }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${selectedItem?.id === item.id ? 'bg-graphite-100 dark:bg-graphite-800 text-graphite-900 dark:text-white' : 'text-graphite-500 hover:bg-graphite-50 dark:hover:bg-graphite-800/50'}`}
                  >
                    {item.title || 'Untitled'}
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDeleteItem(item.id); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 opacity-0 group-hover:opacity-100 text-graphite-400 hover:text-red-500 transition-all"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              {filteredItems.length === 0 && <div className="p-4 text-center text-graphite-400 text-xs italic">No entries yet</div>}
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-white dark:bg-graphite-900 relative">
          {isMantraBank ? (
            <div className="flex-1 flex flex-col p-8 overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-graphite-900 dark:text-white">Mantra Bank</h2>
                  <div className="flex items-center gap-2 mt-1 min-h-[16px]">
                    {saveStatus === 'saving' && <span className="flex items-center gap-1.5 text-[10px] font-bold text-pacific-500 animate-pulse uppercase tracking-wider"><Save size={10} /> Saving...</span>}
                    {saveStatus === 'saved' && <span className="flex items-center gap-1.5 text-[10px] font-bold text-bali-500 uppercase tracking-wider"><Check size={10} /> Saved</span>}
                    {saveStatus === 'error' && <span className="flex items-center gap-1.5 text-[10px] font-bold text-red-500 uppercase tracking-wider"><X size={10} /> Error Saving</span>}
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-graphite-400" />
                    <input
                      value={mantraSearch}
                      onChange={e => setMantraSearch(e.target.value)}
                      placeholder="Search mantras..."
                      className="bg-graphite-100 dark:bg-graphite-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-pacific-500 w-64"
                    />
                  </div>
                  <button
                    onClick={() => setMantraSort(s => s === 'desc' ? 'asc' : 'desc')}
                    className="flex items-center gap-2 px-3 py-2 bg-graphite-100 dark:bg-graphite-800 rounded-lg text-graphite-500 hover:text-graphite-900 dark:hover:text-white transition-colors text-xs font-bold uppercase tracking-wide"
                  >
                    <ArrowUpDown size={14} />
                    {mantraSort === 'desc' ? 'Newest' : 'Oldest'}
                  </button>
                  <button onClick={handleCreateNew} className="flex items-center gap-2 px-4 py-2 bg-pacific-600 text-white text-sm font-bold rounded-lg hover:bg-pacific-500 shadow-lg shadow-pacific-600/20 active:scale-95 transition-all"><Plus size={18} /> New Mantra</button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                {filteredItems.map(mantra => {
                  const isModified = modifiedMantras[mantra.id] !== undefined && modifiedMantras[mantra.id] !== mantra.content;
                  const currentContent = modifiedMantras[mantra.id] ?? mantra.content;

                  return (
                    <div key={mantra.id} className="group relative px-6 py-4 rounded-2xl bg-transparent border-b border-graphite-100 dark:border-graphite-800 transition-all flex flex-col justify-center">
                      <div className="flex gap-4 items-start w-full">
                        {/* Text Area - Horizontal Flow */}
                        <div className="flex-1 min-w-0">
                          <textarea
                            value={currentContent}
                            onChange={(e) => setModifiedMantras(prev => ({ ...prev, [mantra.id]: e.target.value }))}
                            className="w-full bg-transparent text-lg font-medium text-graphite-600 dark:text-graphite-300 focus:text-graphite-900 dark:focus:text-white placeholder-graphite-300 border-none focus:ring-0 focus:outline-none focus:shadow-none outline-none ring-0 border-0 resize-none p-0 leading-relaxed h-auto overflow-hidden field-sizing-content"
                            placeholder="Write your mantra..."
                            spellCheck="false"
                            rows={1}
                            style={{ fieldSizing: "content", outline: 'none', boxShadow: 'none' } as any} // Modern CSS to auto-grow
                            onInput={(e) => {
                              const target = e.target as HTMLTextAreaElement;
                              target.style.height = "auto";
                              target.style.height = `${target.scrollHeight}px`;
                            }}
                          />
                        </div>

                        {/* Actions & Metadata - Stays on right or fades in */}
                        <div className="flex items-center gap-4 shrink-0 self-center">
                          <span className="text-[10px] text-graphite-300 font-mono uppercase tracking-widest opacity-60">
                            {mantra.created_at ? new Date(mantra.created_at).toLocaleDateString() : new Date().toLocaleDateString()}
                          </span>

                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                            {isModified && (
                              <button
                                onClick={() => handleSaveMantra(mantra, currentContent)}
                                className="p-2 text-pacific-500 hover:bg-pacific-50 dark:hover:bg-pacific-900/20 rounded-lg transition-transform hover:scale-105 active:scale-95"
                                title="Save Changes"
                              >
                                <Save size={16} />
                              </button>
                            )}
                            <button
                              onClick={() => handleDeleteItem(mantra.id)}
                              className="p-2 text-graphite-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                              title="Delete Mantra"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {filteredItems.length === 0 && !loading && (
                  <div className="h-64 flex flex-col items-center justify-center text-graphite-500 space-y-4">
                    <Brain size={48} className="text-graphite-800 opacity-20" />
                    <p className="italic text-sm">Your mantra bank is empty. Add something to anchor your focus.</p>
                  </div>
                )}
              </div>
            </div>
          ) : selectedItem ? (
            <>
              {/* Header / Title Area */}
              <div className="p-6 border-b border-graphite-100 dark:border-graphite-800 flex justify-between items-center bg-white dark:bg-graphite-900/50 backdrop-blur-md sticky top-0 z-10 transition-all duration-300">
                <div className="flex-1 mr-4">
                  <input
                    value={editorTitle}
                    onChange={e => setEditorTitle(e.target.value)}
                    onBlur={() => handleSave(false)}
                    className="bg-transparent text-2xl font-bold text-graphite-900 dark:text-white focus:outline-none placeholder-graphite-400 w-full"
                    placeholder="Entry Title..."
                    disabled={false}
                  />
                  <div className="flex items-center gap-3 mt-1 min-h-[16px]">
                    {saveStatus === 'saving' && <span className="flex items-center gap-1.5 text-[10px] font-bold text-pacific-500 animate-pulse uppercase tracking-wider"><Save size={10} /> Saving Changes...</span>}
                    {saveStatus === 'saved' && <span className="flex items-center gap-1.5 text-[10px] font-bold text-bali-500 uppercase tracking-wider"><Check size={10} /> All Changes Saved</span>}
                    {saveStatus === 'error' && <span className="flex items-center gap-1.5 text-[10px] font-bold text-red-500 uppercase tracking-wider"><X size={10} /> Connection Error</span>}

                    {saveStatus === 'idle' && hasUnsavedChanges && (
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-orange-500 uppercase tracking-wider animate-pulse">
                        <span className="h-2 w-2 rounded-full bg-orange-500"></span> Unsaved Changes
                      </span>
                    )}

                    {saveStatus === 'idle' && !hasUnsavedChanges && isSingleton && <span className="text-[10px] font-bold text-graphite-400 uppercase tracking-wider">Synced</span>}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* View/Edit Toggle for All EXCEPT LIFE CHECKLIST */}
                  {!isLifeChecklist && (
                    <div className="flex bg-graphite-100 dark:bg-graphite-800 rounded-lg p-1 mr-2">
                      <button
                        onClick={() => setViewMode('view')}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${viewMode === 'view' ? 'bg-white dark:bg-graphite-700 shadow-sm text-graphite-900 dark:text-white' : 'text-graphite-500 hover:text-graphite-700'}`}
                      >
                        <Eye size={14} className="inline mr-1.5 mb-0.5" /> Read
                      </button>
                      <button
                        onClick={() => setViewMode('edit')}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${viewMode === 'edit' ? 'bg-white dark:bg-graphite-700 shadow-sm text-graphite-900 dark:text-white' : 'text-graphite-500 hover:text-graphite-700'}`}
                      >
                        <Edit3 size={14} className="inline mr-1.5 mb-0.5" /> Write
                      </button>
                    </div>
                  )}

                  {!isSingleton && <button onClick={() => handleDeleteItem(selectedItem.id)} className="p-2 text-graphite-400 hover:text-red-500 transition-colors bg-graphite-100 dark:bg-graphite-800 rounded-lg" title="Delete Entry"><Trash2 size={16} /></button>}

                  {/* Manual Save button for non-checklist */}
                  {!isLifeChecklist && viewMode === 'edit' && (
                    <button onClick={() => handleSave(false)} className="flex items-center gap-2 px-4 py-2 bg-pacific-600 text-white text-xs font-bold rounded-lg hover:bg-pacific-500 shadow-lg shadow-pacific-600/20 active:scale-95 transition-all">
                      <Save size={16} /> Save
                    </button>
                  )}
                  {/* Manual Save button for Life Checklist (optional, but good for title saves etc if not auto handled nicely by blur, but we use blur for title) */}
                  {isLifeChecklist && (
                    <button onClick={() => handleSave(false)} className="flex items-center gap-2 px-4 py-2 bg-pacific-600 text-white text-xs font-bold rounded-lg hover:bg-pacific-500 shadow-lg shadow-pacific-600/20 active:scale-95 transition-all">
                      <Save size={16} /> Save
                    </button>
                  )}
                </div>
              </div>

              <div className="flex-1 p-8 overflow-y-auto">
                {isLifeChecklist ? (
                  /* LIFE CHECKLIST CUSTOM UI */
                  <div className="space-y-1 max-w-3xl">
                    {editorContent.split('\n').filter(line => line.trim() !== '').map((line, idx) => {
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
                            onBlur={() => handleSave(false)}
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
                  /* STANDARD MARKDOWN / TEXTAREA UI */
                  viewMode === 'view' ? (
                    <div className="prose prose-sm md:prose-base dark:prose-invert max-w-4xl mx-auto">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          input: ({ node, ...props }) => (
                            <input {...props} type="checkbox" className="w-4 h-4 rounded-sm border-2 border-pacific-500 text-pacific-600 focus:ring-offset-0 focus:ring-0 mr-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 accent-pacific-500/80 bg-transparent" />
                          )
                        }}
                      >
                        {editorContent}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <textarea
                      value={editorContent}
                      onChange={e => setEditorContent(e.target.value)}
                      className="w-full h-full bg-transparent text-graphite-700 dark:text-graphite-300 font-mono text-base resize-none focus:outline-none leading-relaxed p-4"
                      placeholder="# Start writing some markdown..."
                    />
                  )
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-graphite-400 space-y-4">
              <Library size={48} className="opacity-10" />
              <p className="text-sm font-medium">Select an entry or create a new one to begin.</p>
              {!isSingleton && <button onClick={handleCreateNew} className="text-pacific-500 font-bold flex items-center gap-2 hover:underline"><Plus size={16} /> Create Fresh Entry</button>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Archives;
