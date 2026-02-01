(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(portal)/archives/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-client] (ecmascript) <export default as ScrollText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-square.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Archives = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].VISION_5Y);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editorContent, setEditorContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editorTitle, setEditorTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newTodo, setNewTodo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Archives.useEffect": ()=>{
            loadItems();
        }
    }["Archives.useEffect"], []);
    const loadItems = async ()=>{
        const archives = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].getArchives();
        setItems(archives);
        if (activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].VISION_5Y || activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].LIFE_TODO) {
            const found = archives.find((a)=>a.type === activeTab);
            if (found) selectItem(found);
            else if (activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].LIFE_TODO) {
                const newLifeTodo = {
                    id: 'life-todo-main',
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].LIFE_TODO,
                    title: 'Life Checklist',
                    content: ''
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateArchive(newLifeTodo);
                setItems((prev)=>[
                        ...prev,
                        newLifeTodo
                    ]);
                selectItem(newLifeTodo);
            }
        }
    };
    const selectItem = (item)=>{
        setSelectedItem(item);
        setEditorTitle(item.title);
        setEditorContent(item.content);
    };
    const handleCreateNew = ()=>{
        const newItem = {
            id: `new-${Date.now()}`,
            type: activeTab,
            title: 'Untitled Entry',
            content: ''
        };
        selectItem(newItem);
    };
    const handleSave = async ()=>{
        if (selectedItem) {
            const updatedItem = {
                ...selectedItem,
                title: editorTitle,
                content: editorContent,
                type: activeTab
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateArchive(updatedItem);
            setItems((prev)=>prev.map((i)=>i.id === updatedItem.id ? updatedItem : i));
            setSelectedItem(updatedItem);
        }
    };
    // Helper to save content changes immediately
    const saveContentDirectly = async (newContent)=>{
        setEditorContent(newContent);
        if (selectedItem) {
            const updatedItem = {
                ...selectedItem,
                title: editorTitle,
                content: newContent,
                type: activeTab
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateArchive(updatedItem);
            setItems((prev)=>prev.map((i)=>i.id === updatedItem.id ? updatedItem : i));
            setSelectedItem(updatedItem);
        }
    };
    // Todo Logic
    const handleToggleTodo = (idx)=>{
        const lines = editorContent.split('\n');
        if (lines[idx].includes('[ ]')) lines[idx] = lines[idx].replace('[ ]', '[x]');
        else lines[idx] = lines[idx].replace('[x]', '[ ]');
        saveContentDirectly(lines.join('\n'));
    };
    const handleAddTodo = ()=>{
        if (!newTodo.trim()) return;
        const newContent = editorContent ? `${editorContent}\n- [ ] ${newTodo}` : `- [ ] ${newTodo}`;
        setNewTodo('');
        saveContentDirectly(newContent);
    };
    const handleDeleteTodo = (idx)=>{
        const lines = editorContent.split('\n');
        lines.splice(idx, 1);
        saveContentDirectly(lines.join('\n'));
    };
    const handleUpdateTodoText = (idx, text)=>{
        const lines = editorContent.split('\n');
        const isDone = lines[idx].includes('[x]');
        lines[idx] = `- [${isDone ? 'x' : ' '}] ${text}`;
        setEditorContent(lines.join('\n'));
    };
    const tabs = [
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].VISION_5Y,
            label: 'Vision',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                lineNumber: 84,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].LIFE_TODO,
            label: 'Life Checklist',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                lineNumber: 85,
                columnNumber: 65
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].ROUTINE,
            label: 'Routines',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                lineNumber: 86,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].MANTRA_BANK,
            label: 'Mantra Bank',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                lineNumber: 87,
                columnNumber: 64
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].THEORY_NOTES,
            label: 'Theory Notes',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                lineNumber: 88,
                columnNumber: 66
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    const filteredItems = items.filter((i)=>i.type === activeTab);
    const isSingleItemTab = activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].VISION_5Y || activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].LIFE_TODO;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-graphite-900 dark:text-white",
                        children: "Archives"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold text-graphite-500 uppercase tracking-widest",
                        children: "Knowledge Base"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden rounded-2xl border border-graphite-200 dark:border-graphite-800 bg-white dark:bg-graphite-900 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-64 flex-shrink-0 border-r border-graphite-100 dark:border-graphite-800 bg-graphite-50 dark:bg-graphite-950 p-4 space-y-1",
                        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveTab(tab.id);
                                    setSelectedItem(null);
                                    if (tab.id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].VISION_5Y || tab.id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].LIFE_TODO) {
                                        const found = items.find((i)=>i.type === tab.id);
                                        if (found) selectItem(found);
                                    }
                                },
                                className: `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-pacific-50 text-pacific-700 dark:bg-pacific-900/20 dark:text-pacific-300' : 'text-graphite-500 hover:bg-graphite-100 dark:hover:bg-graphite-800'}`,
                                children: [
                                    tab.icon,
                                    " ",
                                    tab.label
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isSingleItemTab && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-64 flex-shrink-0 border-r border-graphite-100 dark:border-graphite-800 bg-white dark:bg-graphite-900 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-graphite-100 dark:border-graphite-800 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-graphite-400 uppercase",
                                        children: "Entries"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCreateNew,
                                        className: "text-pacific-600 hover:bg-pacific-50 p-1 rounded",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 110
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-2 space-y-1",
                                children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>selectItem(item),
                                        className: `w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${selectedItem?.id === item.id ? 'bg-graphite-100 dark:bg-graphite-800 text-graphite-900 dark:text-white' : 'text-graphite-500 hover:bg-graphite-50 dark:hover:bg-graphite-800/50'}`,
                                        children: item.title || 'Untitled'
                                    }, item.id, false, {
                                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col bg-white dark:bg-graphite-900 relative",
                        children: selectedItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-b border-graphite-100 dark:border-graphite-800 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: editorTitle,
                                            onChange: (e)=>setEditorTitle(e.target.value),
                                            onBlur: handleSave,
                                            className: "bg-transparent text-2xl font-bold text-graphite-900 dark:text-white focus:outline-none placeholder-graphite-400 w-full",
                                            placeholder: "Entry Title..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        activeTab !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].LIFE_TODO && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSave,
                                            className: "flex items-center gap-2 px-4 py-2 bg-pacific-600 text-white text-xs font-bold rounded-lg hover:bg-pacific-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 208
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Save"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 57
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 p-8 overflow-y-auto",
                                    children: activeTab === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArchiveType"].LIFE_TODO ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 max-w-3xl",
                                        children: [
                                            editorContent.split('\n').map((line, idx)=>{
                                                const isTask = line.trim().startsWith('- [');
                                                if (!isTask) return null;
                                                const isDone = line.includes('[x]');
                                                const text = line.replace(/- \[(x| )\] /, '');
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 group py-2 px-3 rounded-lg hover:bg-graphite-50 dark:hover:bg-graphite-800/50 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleToggleTodo(idx),
                                                            className: `flex-shrink-0 transition-colors ${isDone ? 'text-bali-500' : 'text-graphite-300 hover:text-graphite-500'}`,
                                                            children: isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 39
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 67
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: text,
                                                            onChange: (e)=>handleUpdateTodoText(idx, e.target.value),
                                                            onBlur: handleSave,
                                                            className: `flex-1 bg-transparent text-base focus:outline-none ${isDone ? 'text-graphite-400 line-through decoration-graphite-300' : 'text-graphite-700 dark:text-graphite-200'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteTodo(idx),
                                                            className: "opacity-0 group-hover:opacity-100 text-graphite-400 hover:text-red-500 transition-all p-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 pt-4 mt-2 border-t border-graphite-100 dark:border-graphite-800 px-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleAddTodo,
                                                        className: "text-graphite-400 hover:text-pacific-500 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: newTodo,
                                                        onChange: (e)=>setNewTodo(e.target.value),
                                                        onKeyDown: (e)=>e.key === 'Enter' && handleAddTodo(),
                                                        placeholder: "Add new item",
                                                        className: "flex-1 bg-transparent text-base text-graphite-900 dark:text-white focus:outline-none placeholder-graphite-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: editorContent,
                                        onChange: (e)=>setEditorContent(e.target.value),
                                        onBlur: handleSave,
                                        className: "w-full h-full bg-transparent text-graphite-700 dark:text-graphite-300 font-mono text-sm resize-none focus:outline-none leading-loose",
                                        placeholder: "# Start writing..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(portal)/archives/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex items-center justify-center text-graphite-400 text-sm font-medium",
                            children: "Select an entry to view details"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/archives/page.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(portal)/archives/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(portal)/archives/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(portal)/archives/page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Archives, "DiBbi5A0IjNZZNOGqjBxcOGcnOk=");
_c = Archives;
const __TURBOPACK__default__export__ = Archives;
var _c;
__turbopack_context__.k.register(_c, "Archives");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>List
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const List = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("List", [
    [
        "line",
        {
            x1: "8",
            x2: "21",
            y1: "6",
            y2: "6",
            key: "7ey8pc"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "21",
            y1: "12",
            y2: "12",
            key: "rjfblc"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "21",
            y1: "18",
            y2: "18",
            key: "c3b1m8"
        }
    ],
    [
        "line",
        {
            x1: "3",
            x2: "3.01",
            y1: "6",
            y2: "6",
            key: "1g7gq3"
        }
    ],
    [
        "line",
        {
            x1: "3",
            x2: "3.01",
            y1: "12",
            y2: "12",
            key: "1pjlvk"
        }
    ],
    [
        "line",
        {
            x1: "3",
            x2: "3.01",
            y1: "18",
            y2: "18",
            key: "28t2mc"
        }
    ]
]);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "List",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Brain
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Brain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Brain", [
    [
        "path",
        {
            d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
            key: "l5xja"
        }
    ],
    [
        "path",
        {
            d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
            key: "ep3f8r"
        }
    ],
    [
        "path",
        {
            d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
            key: "1p4c4q"
        }
    ],
    [
        "path",
        {
            d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
            key: "tmeiqw"
        }
    ],
    [
        "path",
        {
            d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
            key: "105sqy"
        }
    ],
    [
        "path",
        {
            d: "M3.477 10.896a4 4 0 0 1 .585-.396",
            key: "ql3yin"
        }
    ],
    [
        "path",
        {
            d: "M19.938 10.5a4 4 0 0 1 .585.396",
            key: "1qfode"
        }
    ],
    [
        "path",
        {
            d: "M6 18a4 4 0 0 1-1.967-.516",
            key: "2e4loj"
        }
    ],
    [
        "path",
        {
            d: "M19.967 17.484A4 4 0 0 1 18 18",
            key: "159ez6"
        }
    ]
]);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Brain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollText
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ScrollText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ScrollText", [
    [
        "path",
        {
            d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",
            key: "13a6an"
        }
    ],
    [
        "path",
        {
            d: "M19 17V5a2 2 0 0 0-2-2H4",
            key: "zz82l3"
        }
    ],
    [
        "path",
        {
            d: "M15 8h-5",
            key: "1khuty"
        }
    ],
    [
        "path",
        {
            d: "M15 12h-5",
            key: "r7krc0"
        }
    ]
]);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-client] (ecmascript) <export default as ScrollText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Plus
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Plus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
]);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/check-square.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckSquare
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CheckSquare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CheckSquare", [
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ],
    [
        "path",
        {
            d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
            key: "1jnkn4"
        }
    ]
]);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/check-square.js [app-client] (ecmascript) <export default as CheckSquare>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckSquare",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-square.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Square
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Square = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Square", [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ]
]);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Square",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_273e10bc._.js.map