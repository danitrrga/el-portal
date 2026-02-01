(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/GoalFormModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoalFormModal",
    ()=>GoalFormModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-circle-2.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const GoalFormModal = ({ isOpen, onClose, onSave, initialGoal, currentCycleHabits, allHabits })=>{
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].TASK_PROJECT);
    const [subtasks, setSubtasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedHabit, setSelectedHabit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [habitTab, setHabitTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('current');
    const [habitSearch, setHabitSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoalFormModal.useEffect": ()=>{
            if (initialGoal) {
                setTitle(initialGoal.title);
                setDescription(initialGoal.description);
                setType(initialGoal.type);
                // Convert subtasks array to string with indentation preservation
                if (initialGoal.subtasks) {
                    setSubtasks(initialGoal.subtasks.map({
                        "GoalFormModal.useEffect": (t)=>{
                            const indent = "  ".repeat(t.level || 0);
                            return `${indent}${t.name}`;
                        }
                    }["GoalFormModal.useEffect"]).join('\n'));
                } else {
                    setSubtasks('');
                }
                // Link habit if ID exists
                if (initialGoal.linked_habit_id) {
                    const found = allHabits.find({
                        "GoalFormModal.useEffect.found": (h)=>h.id === initialGoal.linked_habit_id
                    }["GoalFormModal.useEffect.found"]);
                    if (found) setSelectedHabit(found);
                }
            } else {
                // Reset for Add Mode
                setTitle('');
                setDescription('');
                setType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].TASK_PROJECT);
                setSubtasks('');
                setSelectedHabit(null);
            }
        }
    }["GoalFormModal.useEffect"], [
        initialGoal,
        isOpen
    ]);
    if (!isOpen) return null;
    const uniqueDbHabits = Array.from(new Map(allHabits.map((h)=>[
            h.name,
            h
        ])).values());
    const displayHabits = habitTab === 'current' ? currentCycleHabits : uniqueDbHabits;
    const filteredHabits = displayHabits.filter((h)=>h.name.toLowerCase().includes(habitSearch.toLowerCase()));
    const handleSave = ()=>{
        if (!title.trim()) return;
        const subtaskList = type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].TASK_PROJECT ? subtasks.split('\n').filter((s)=>s.trim().length > 0) : undefined;
        onSave({
            title,
            description,
            type,
            subtasks: subtaskList
        }, selectedHabit);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.currentTarget.selectionStart;
            const end = e.currentTarget.selectionEnd;
            const value = e.currentTarget.value;
            const indent = "  ";
            const newValue = value.substring(0, start) + indent + value.substring(end);
            setSubtasks(newValue);
            requestAnimationFrame(()=>{
                if (e.currentTarget) {
                    e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + indent.length;
                }
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-xl rounded-2xl bg-white dark:bg-graphite-900 shadow-2xl animate-in zoom-in-95 duration-200 border border-graphite-200 dark:border-graphite-800 flex flex-col max-h-[90vh]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-graphite-200 dark:border-graphite-800 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-graphite-900 dark:text-white flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 20,
                                    className: "text-pacific-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                initialGoal ? 'Edit Goal' : 'Add New Goal'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GoalFormModal.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-graphite-400 hover:text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoalFormModal.tsx",
                                lineNumber: 95,
                                columnNumber: 94
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/GoalFormModal.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GoalFormModal.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-graphite-500 uppercase mb-1.5",
                                            children: "Goal Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 100,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: title,
                                            onChange: (e)=>setTitle(e.target.value),
                                            className: "w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pacific-500 text-graphite-900 dark:text-white",
                                            placeholder: "e.g. Launch Marketing Campaign",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 101,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-graphite-500 uppercase mb-1.5",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 104,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: description,
                                            onChange: (e)=>setDescription(e.target.value),
                                            rows: 2,
                                            className: "w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pacific-500 text-graphite-900 dark:text-white resize-none",
                                            placeholder: "What is the objective?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GoalFormModal.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-graphite-500 uppercase mb-2",
                                    children: "Goal Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 p-1 bg-graphite-100 dark:bg-graphite-800 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].TASK_PROJECT),
                                            className: `py-2 rounded-lg text-sm font-bold transition-all ${type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].TASK_PROJECT ? 'bg-white dark:bg-graphite-700 text-pacific-600 dark:text-white shadow-sm' : 'text-graphite-500 hover:text-graphite-700 dark:hover:text-graphite-300'}`,
                                            children: "Project (Tasks)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].CONSISTENCY_METRIC),
                                            className: `py-2 rounded-lg text-sm font-bold transition-all ${type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].CONSISTENCY_METRIC ? 'bg-white dark:bg-graphite-700 text-pacific-600 dark:text-white shadow-sm' : 'text-graphite-500 hover:text-graphite-700 dark:hover:text-graphite-300'}`,
                                            children: "Habit Metric"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 112,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GoalFormModal.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].TASK_PROJECT ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-in fade-in slide-in-from-top-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-graphite-500 uppercase mb-1.5",
                                    children: "Action Plan (Subtasks)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: subtasks,
                                    onChange: (e)=>setSubtasks(e.target.value),
                                    onKeyDown: handleKeyDown,
                                    rows: 6,
                                    className: "w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-pacific-500 text-graphite-900 dark:text-white leading-relaxed",
                                    placeholder: "- Research competitors - Analyze pricing (Indented with Tab) - Draft copy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 118,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-graphite-400 mt-1 text-right",
                                    children: "Use Tab to indent sub-tasks"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GoalFormModal.tsx",
                            lineNumber: 116,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-in fade-in slide-in-from-top-2 p-4 border border-graphite-200 dark:border-graphite-700 rounded-xl bg-graphite-50 dark:bg-graphite-800/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-pacific-500 uppercase mb-3 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 128
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Link Habit Source"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 123,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mb-3 border-b border-graphite-200 dark:border-graphite-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setHabitTab('current'),
                                            className: `pb-2 text-xs font-bold uppercase transition-colors border-b-2 ${habitTab === 'current' ? 'border-pacific-500 text-pacific-600 dark:text-pacific-400' : 'border-transparent text-graphite-400'}`,
                                            children: "Current Cycle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 125,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setHabitTab('database'),
                                            className: `pb-2 text-xs font-bold uppercase transition-colors border-b-2 ${habitTab === 'database' ? 'border-pacific-500 text-pacific-600 dark:text-pacific-400' : 'border-transparent text-graphite-400'}`,
                                            children: "Database Search"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 126,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                habitTab === 'database' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            size: 14,
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-graphite-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: habitSearch,
                                            onChange: (e)=>setHabitSearch(e.target.value),
                                            className: "w-full bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-700 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-pacific-500",
                                            placeholder: "Search habit history..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 131,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-h-40 overflow-y-auto space-y-1 pr-1",
                                    children: [
                                        filteredHabits.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedHabit(h),
                                                className: `w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex justify-between items-center ${selectedHabit?.name === h.name ? 'bg-pacific-500 text-white shadow-md' : 'hover:bg-graphite-200 dark:hover:bg-graphite-700 text-graphite-700 dark:text-graphite-300'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium truncate",
                                                        children: h.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GoalFormModal.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    selectedHabit?.name === h.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GoalFormModal.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 76
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, h.id, true, {
                                                fileName: "[project]/src/components/GoalFormModal.tsx",
                                                lineNumber: 136,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        filteredHabits.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-4 text-xs text-graphite-400 italic",
                                            children: "No habits found."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 141,
                                            columnNumber: 65
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                selectedHabit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 pt-3 border-t border-graphite-200 dark:border-graphite-700 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-graphite-500",
                                            children: [
                                                "Selected: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-graphite-900 dark:text-white",
                                                    children: selectedHabit.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 91
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 145,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedHabit(null),
                                            className: "text-xs text-red-400 hover:text-red-500",
                                            children: "Clear"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GoalFormModal.tsx",
                                            lineNumber: 146,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GoalFormModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GoalFormModal.tsx",
                            lineNumber: 122,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GoalFormModal.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-graphite-200 dark:border-graphite-800 flex justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 text-sm font-bold text-graphite-500 hover:text-graphite-800 dark:hover:text-white transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GoalFormModal.tsx",
                            lineNumber: 153,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSave,
                            disabled: !title.trim() || type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].CONSISTENCY_METRIC && !selectedHabit,
                            className: "px-6 py-2 bg-pacific-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-pacific-500/30 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pacific-500 transition-colors",
                            children: initialGoal ? 'Save Changes' : 'Create Goal'
                        }, void 0, false, {
                            fileName: "[project]/src/components/GoalFormModal.tsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GoalFormModal.tsx",
                    lineNumber: 152,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/GoalFormModal.tsx",
            lineNumber: 89,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/GoalFormModal.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GoalFormModal, "swEsZyxsLPwcjBn3+Ew8UXMgTv8=");
_c = GoalFormModal;
var _c;
__turbopack_context__.k.register(_c, "GoalFormModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HabitFormModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HabitFormModal",
    ()=>HabitFormModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-circle-2.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/library.js [app-client] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const HabitFormModal = ({ isOpen, onClose, onSave, initialHabit, allHabits = [], onDeleteFromLibrary, onRenameCategory, onDeleteCategory })=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('create');
    const [isManagingCats, setIsManagingCats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form State
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [weight, setWeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HabitWeight"].MEDIUM);
    // Library State
    const [librarySearch, setLibrarySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [verifyDeleteId, setVerifyDeleteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Category Manager State
    const [editingCatName, setEditingCatName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tempCatName, setTempCatName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [verifyDeleteCat, setVerifyDeleteCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HabitFormModal.useEffect": ()=>{
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
                    setWeight(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HabitWeight"].MEDIUM);
                }
            }
            setIsManagingCats(false);
        }
    }["HabitFormModal.useEffect"], [
        initialHabit,
        isOpen
    ]);
    // Smart Category Derivation
    const uniqueCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HabitFormModal.useMemo[uniqueCategories]": ()=>{
            const cats = new Set(allHabits.map({
                "HabitFormModal.useMemo[uniqueCategories]": (h)=>h.category
            }["HabitFormModal.useMemo[uniqueCategories]"]).filter(Boolean));
            return Array.from(cats).sort();
        }
    }["HabitFormModal.useMemo[uniqueCategories]"], [
        allHabits
    ]);
    // Smart Library Derivation
    const libraryItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HabitFormModal.useMemo[libraryItems]": ()=>{
            const unique = new Map();
            allHabits.forEach({
                "HabitFormModal.useMemo[libraryItems]": (h)=>{
                    if (!unique.has(h.name)) {
                        unique.set(h.name, h);
                    }
                }
            }["HabitFormModal.useMemo[libraryItems]"]);
            return Array.from(unique.values()).filter({
                "HabitFormModal.useMemo[libraryItems]": (h)=>h.name.toLowerCase().includes(librarySearch.toLowerCase()) || h.category.toLowerCase().includes(librarySearch.toLowerCase())
            }["HabitFormModal.useMemo[libraryItems]"]);
        }
    }["HabitFormModal.useMemo[libraryItems]"], [
        allHabits,
        librarySearch
    ]);
    if (!isOpen) return null;
    const handleSave = ()=>{
        if (!name.trim() || !category.trim()) return;
        onSave({
            name,
            category,
            weight
        });
    };
    const handleImportFromLibrary = (habit)=>{
        setName(habit.name);
        setCategory(habit.category);
        setWeight(habit.weight);
        setActiveTab('create');
    };
    const handleDeleteClick = (e, id)=>{
        e.stopPropagation();
        if (verifyDeleteId === id) {
            if (onDeleteFromLibrary) onDeleteFromLibrary(id);
            setVerifyDeleteId(null);
        } else {
            setVerifyDeleteId(id);
            setTimeout(()=>setVerifyDeleteId(null), 3000);
        }
    };
    // --- Category Manager Handlers ---
    const startEditCategory = (cat)=>{
        setEditingCatName(cat);
        setTempCatName(cat);
    };
    const saveEditCategory = async ()=>{
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
    const deleteCategory = async (cat)=>{
        if (verifyDeleteCat === cat) {
            if (onDeleteCategory) {
                await onDeleteCategory(cat);
                // If form selected this category, clear it
                if (category === cat) setCategory('');
            }
            setVerifyDeleteCat(null);
        } else {
            setVerifyDeleteCat(cat);
            setTimeout(()=>setVerifyDeleteCat(null), 3000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-2xl bg-white dark:bg-graphite-900 shadow-2xl animate-in zoom-in-95 duration-200 border border-graphite-200 dark:border-graphite-800 flex flex-col max-h-[85vh]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-none border-b border-graphite-200 dark:border-graphite-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 pb-4 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-graphite-900 dark:text-white flex items-center gap-2",
                                    children: isManagingCats ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                size: 18,
                                                className: "text-graphite-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 140,
                                                columnNumber: 35
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Manage Categories"
                                        ]
                                    }, void 0, true) : activeTab === 'create' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 18,
                                                className: "text-pacific-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 142,
                                                columnNumber: 35
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            initialHabit ? 'Edit Habit' : 'Add Habit'
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"], {
                                                size: 18,
                                                className: "text-bali-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 144,
                                                columnNumber: 35
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Habit Library"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HabitFormModal.tsx",
                                    lineNumber: 138,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "text-graphite-400 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 147,
                                        columnNumber: 98
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HabitFormModal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HabitFormModal.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        !initialHabit && !isManagingCats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('create'),
                                    className: `pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'create' ? 'border-pacific-500 text-pacific-600 dark:text-pacific-400' : 'border-transparent text-graphite-400 hover:text-graphite-600 dark:hover:text-graphite-300'}`,
                                    children: "Create New"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HabitFormModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('library'),
                                    className: `pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'library' ? 'border-bali-500 text-bali-600 dark:text-bali-400' : 'border-transparent text-graphite-400 hover:text-graphite-600 dark:hover:text-graphite-300'}`,
                                    children: "From History"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HabitFormModal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HabitFormModal.tsx",
                            lineNumber: 151,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HabitFormModal.tsx",
                    lineNumber: 136,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-6",
                    children: isManagingCats ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-in fade-in slide-in-from-right-4 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsManagingCats(false),
                                        className: "text-xs font-bold text-graphite-500 hover:text-pacific-500 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 174,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Back to Form"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 173,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase text-graphite-400 font-bold",
                                        children: [
                                            uniqueCategories.length,
                                            " Categories"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 176,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                lineNumber: 172,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    uniqueCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group flex items-center justify-between p-3 rounded-xl border border-graphite-200 dark:border-graphite-800 bg-white dark:bg-graphite-800/50 hover:border-pacific-200 dark:hover:border-pacific-900 transition-all",
                                            children: editingCatName === cat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: tempCatName,
                                                        onChange: (e)=>setTempCatName(e.target.value),
                                                        className: "flex-1 bg-graphite-50 dark:bg-graphite-900 border border-pacific-500 rounded-lg px-2 py-1 text-sm text-graphite-900 dark:text-white outline-none",
                                                        autoFocus: true,
                                                        onKeyDown: (e)=>e.key === 'Enter' && saveEditCategory()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: saveEditCategory,
                                                        className: "p-1.5 bg-pacific-500 text-white rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HabitFormModal.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 139
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setEditingCatName(null),
                                                        className: "p-1.5 text-graphite-400 hover:text-white",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HabitFormModal.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 150
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 183,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-graphite-700 dark:text-graphite-300",
                                                        children: cat
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>startEditCategory(cat),
                                                                className: "p-2 text-graphite-400 hover:text-pacific-500 hover:bg-pacific-50 dark:hover:bg-pacific-900/20 rounded-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/HabitFormModal.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 217
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            cat !== 'Uncategorized' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>deleteCategory(cat),
                                                                className: `p-2 rounded-lg flex items-center gap-2 transition-all ${verifyDeleteCat === cat ? 'bg-red-500 text-white w-24 justify-center' : 'text-graphite-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 61
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " ",
                                                                    verifyDeleteCat === cat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold",
                                                                        children: "Confirm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 110
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        }, cat, false, {
                                            fileName: "[project]/src/components/HabitFormModal.tsx",
                                            lineNumber: 181,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    uniqueCategories.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8 text-graphite-400 text-sm",
                                        children: "No categories defined yet."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 212,
                                        columnNumber: 67
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                lineNumber: 179,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30 flex gap-3 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        size: 16,
                                        className: "text-blue-500 mt-0.5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 216,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-blue-700 dark:text-blue-300 leading-relaxed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Note:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 218,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            ' Renaming updates all habits history. Deleting moves associated habits to "Uncategorized".'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 217,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                lineNumber: 215,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HabitFormModal.tsx",
                        lineNumber: 171,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : activeTab === 'create' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5 animate-in fade-in slide-in-from-left-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-graphite-500 uppercase mb-1.5",
                                        children: "Habit Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 225,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        className: "w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pacific-500 text-graphite-900 dark:text-white transition-all",
                                        placeholder: "e.g. Morning Run",
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 226,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                lineNumber: 224,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-graphite-500 uppercase",
                                                children: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 231,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsManagingCats(true),
                                                className: "text-[10px] font-bold text-pacific-500 hover:text-pacific-600 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        size: 10
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 183
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Manage"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 232,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 230,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                size: 14,
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-graphite-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 235,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: category,
                                                onChange: (e)=>setCategory(e.target.value),
                                                className: "w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:border-pacific-500 text-graphite-900 dark:text-white transition-all",
                                                placeholder: "e.g. Health"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 236,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 234,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    uniqueCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex flex-wrap gap-2",
                                        children: uniqueCategories.slice(0, 8).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCategory(cat === category ? '' : cat),
                                                className: `px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide border transition-all ${category === cat ? 'bg-pacific-500 text-white border-pacific-500' : 'bg-graphite-100 dark:bg-graphite-800 text-graphite-500 border-transparent hover:bg-pacific-50 dark:hover:bg-pacific-900/20 hover:text-pacific-600 dark:hover:text-pacific-400'}`,
                                                children: cat
                                            }, cat, false, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 242,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 240,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                lineNumber: 229,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-graphite-500 uppercase mb-1.5",
                                        children: "Impact Weight"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 255,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-2",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HabitWeight"].LOW,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HabitWeight"].MEDIUM,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HabitWeight"].HIGH
                                        ].map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setWeight(w),
                                                className: `py-2.5 text-xs font-bold rounded-xl border transition-all ${weight === w ? 'bg-pacific-500 text-white border-pacific-500 shadow-md shadow-pacific-500/20' : 'bg-graphite-50 dark:bg-graphite-800 text-graphite-500 border-graphite-200 dark:border-graphite-700 hover:border-graphite-400'}`,
                                                children: w === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HabitWeight"].LOW ? 'Low (1)' : w === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HabitWeight"].MEDIUM ? 'Medium (2)' : 'High (4)'
                                            }, w, false, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 258,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 256,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                lineNumber: 254,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HabitFormModal.tsx",
                        lineNumber: 223,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col h-full animate-in fade-in slide-in-from-right-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 14,
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-graphite-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 272,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: librarySearch,
                                        onChange: (e)=>setLibrarySearch(e.target.value),
                                        className: "w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-bali-500 text-graphite-900 dark:text-white",
                                        placeholder: "Search history...",
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 273,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                lineNumber: 271,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto space-y-2 pr-1",
                                children: libraryItems.length > 0 ? libraryItems.map((habit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>handleImportFromLibrary(habit),
                                        className: "group flex items-center justify-between p-3 rounded-xl border border-graphite-200 dark:border-graphite-800 bg-white dark:bg-graphite-800/50 hover:border-bali-500 dark:hover:border-bali-500 cursor-pointer transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold text-graphite-900 dark:text-white group-hover:text-bali-600 dark:group-hover:text-bali-400 transition-colors",
                                                        children: habit.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-medium bg-graphite-100 dark:bg-graphite-900 text-graphite-500 px-2 py-0.5 rounded",
                                                                children: habit.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-0.5",
                                                                children: [
                                                                    ...Array(habit.weight)
                                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-1 w-1 rounded-full bg-bali-400"
                                                                    }, i, false, {
                                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 119
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 284,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>handleDeleteClick(e, habit.id),
                                                        className: `p-2 rounded-lg transition-all ${verifyDeleteId === habit.id ? 'bg-red-500 text-white' : 'text-graphite-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 opacity-0 group-hover:opacity-100'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HabitFormModal.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 16,
                                                        className: "text-graphite-300 group-hover:text-bali-500 -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                                lineNumber: 291,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, habit.id, true, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 283,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12 text-graphite-400 text-sm",
                                    children: "No matching habits found in history."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HabitFormModal.tsx",
                                    lineNumber: 302,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                lineNumber: 281,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HabitFormModal.tsx",
                        lineNumber: 270,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/HabitFormModal.tsx",
                    lineNumber: 169,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-graphite-200 dark:border-graphite-800 flex justify-end gap-3 bg-white dark:bg-graphite-900 rounded-b-2xl",
                    children: !isManagingCats ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "px-4 py-2 text-sm font-bold text-graphite-500 hover:text-graphite-800 dark:hover:text-white transition-colors",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                lineNumber: 313,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'create' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                disabled: !name.trim(),
                                className: "px-6 py-2 bg-pacific-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-pacific-500/30 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pacific-500 transition-colors flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HabitFormModal.tsx",
                                        lineNumber: 316,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Save"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HabitFormModal.tsx",
                                lineNumber: 315,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsManagingCats(false),
                        className: "px-6 py-2 bg-graphite-100 dark:bg-graphite-800 text-graphite-900 dark:text-white rounded-xl text-sm font-bold hover:bg-graphite-200 dark:hover:bg-graphite-700 transition-colors",
                        children: "Done"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HabitFormModal.tsx",
                        lineNumber: 321,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/HabitFormModal.tsx",
                    lineNumber: 310,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HabitFormModal.tsx",
            lineNumber: 133,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/HabitFormModal.tsx",
        lineNumber: 132,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HabitFormModal, "ZP4e2a97Dgvejxlec/EGB7gNCRM=");
_c = HabitFormModal;
var _c;
__turbopack_context__.k.register(_c, "HabitFormModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CycleEditorModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CycleEditorModal",
    ()=>CycleEditorModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fingerprint.js [app-client] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-circle-2.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-triangle.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/power.js [app-client] (ecmascript) <export default as Power>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GoalFormModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HabitFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HabitFormModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
// Helper for safe date arithmetic without timezone issues
const addDaysToDate = (dateStr, days)=>{
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
const CycleEditorModal = ({ mode = 'edit', cycle, goals, habits, allHabits, suggestedSprintNumber, onClose, onSaveCycle, onManageGoal, onManageHabit, onCreate, onRenameCategory, onDeleteCategory, onDeleteHabitFromDB, maxCycles = 6, versionStartDate, existingCycles })=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('strategy');
    // --- Cycle Config State (Create Mode) ---
    const [sprintNumber, setSprintNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(suggestedSprintNumber || 1);
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [cycleDuration, setCycleDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15); // Default, updated by DB
    // --- Cycle Content State ---
    const [priorities, setPriorities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        '',
        '',
        ''
    ]);
    const [problems, setProblems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [learning, setLearning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [beliefs, setBeliefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [characteristics, setCharacteristics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [skills, setSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedMantras, setSelectedMantras] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- Local Lists State (Buffer for Create Mode) ---
    // In 'create' mode, we manipulate these arrays. In 'edit' mode, we use the props `goals` and `habits` but might optimistic update these for UI.
    const [localGoals, setLocalGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [localHabits, setLocalHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- Helper State ---
    const [allMantras, setAllMantras] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tempBelief, setTempBelief] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tempChar, setTempChar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tempSkill, setTempSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newMantra, setNewMantra] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Sub-Modals State ---
    const [editingGoal, setEditingGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [isGoalModalOpen, setIsGoalModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingHabit, setEditingHabit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [isHabitModalOpen, setIsHabitModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verifyDeleteId, setVerifyDeleteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Initialization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CycleEditorModal.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].getMantras().then(setAllMantras);
            if (mode === 'edit' && cycle) {
                setPriorities(cycle.focus_priorities);
                setProblems(cycle.problems);
                setLearning(cycle.learning_focus);
                setBeliefs(cycle.cch_list.find({
                    "CycleEditorModal.useEffect": (c)=>c.category === 'Beliefs'
                }["CycleEditorModal.useEffect"])?.items || []);
                setCharacteristics(cycle.cch_list.find({
                    "CycleEditorModal.useEffect": (c)=>c.category === 'Characteristics'
                }["CycleEditorModal.useEffect"])?.items || []);
                setSkills(cycle.cch_list.find({
                    "CycleEditorModal.useEffect": (c)=>c.category === 'Skills'
                }["CycleEditorModal.useEffect"])?.items || []);
                setSelectedMantras(cycle.mantras);
                setSprintNumber(cycle.sprint_number);
                setStartDate(cycle.start_date);
                setEndDate(cycle.end_date);
            }
        }
    }["CycleEditorModal.useEffect"], [
        mode,
        cycle
    ]);
    // Smart Scheduling Logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CycleEditorModal.useEffect": ()=>{
            const initScheduling = {
                "CycleEditorModal.useEffect.initScheduling": async ()=>{
                    // 1. Fetch System Settings
                    const settings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].getSystemSettings();
                    const duration = Math.floor(settings.days / settings.cycles);
                    setCycleDuration(duration);
                    // 2. Auto-Suggest Dates (Only in Create Mode)
                    if (mode === 'create' && versionStartDate) {
                        let suggestedStart = versionStartDate;
                        // If cycles exist, start after the last one
                        if (existingCycles && existingCycles.length > 0) {
                            // Sort by end date descending
                            const sorted = [
                                ...existingCycles
                            ].sort({
                                "CycleEditorModal.useEffect.initScheduling.sorted": (a, b)=>new Date(b.end_date).getTime() - new Date(a.end_date).getTime()
                            }["CycleEditorModal.useEffect.initScheduling.sorted"]);
                            const lastCycle = sorted[0];
                            suggestedStart = addDaysToDate(lastCycle.end_date, 1);
                        }
                        setStartDate(suggestedStart);
                        setEndDate(addDaysToDate(suggestedStart, duration - 1));
                    }
                }
            }["CycleEditorModal.useEffect.initScheduling"];
            initScheduling();
        }
    }["CycleEditorModal.useEffect"], [
        mode,
        versionStartDate,
        existingCycles
    ]);
    // Sync local state with props in Edit mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CycleEditorModal.useEffect": ()=>{
            if (mode === 'edit') {
                setLocalGoals(goals);
                setLocalHabits(habits);
            }
        }
    }["CycleEditorModal.useEffect"], [
        goals,
        habits,
        mode
    ]);
    // -- Cycle Logic Handlers --
    const handleAddMantra = async ()=>{
        if (newMantra.trim()) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].addMantra(newMantra);
            setAllMantras((prev)=>[
                    ...prev,
                    newMantra
                ]);
            setSelectedMantras((prev)=>[
                    ...prev,
                    newMantra
                ]);
            setNewMantra('');
        }
    };
    const handleAddBelief = ()=>{
        if (tempBelief.trim()) {
            setBeliefs([
                ...beliefs,
                tempBelief.trim()
            ]);
            setTempBelief('');
        }
    };
    const handleAddChar = ()=>{
        if (tempChar.trim()) {
            setCharacteristics([
                ...characteristics,
                tempChar.trim()
            ]);
            setTempChar('');
        }
    };
    const handleAddSkill = ()=>{
        if (tempSkill.trim()) {
            setSkills([
                ...skills,
                tempSkill.trim()
            ]);
            setTempSkill('');
        }
    };
    const handleManualStartDateChange = (e)=>{
        const newStart = e.target.value;
        setStartDate(newStart);
        if (newStart && cycleDuration > 0) {
            setEndDate(addDaysToDate(newStart, cycleDuration - 1));
        }
    };
    // -- Main Save Handler --
    const handleFinalSave = ()=>{
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
            status: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityStatus"].ACTIVE : undefined,
            focus_priorities: priorities.filter((p)=>p.trim().length > 0),
            problems,
            learning_focus: learning,
            mantras: selectedMantras,
            cch_list: [
                {
                    category: 'Beliefs',
                    items: beliefs
                },
                {
                    category: 'Characteristics',
                    items: characteristics
                },
                {
                    category: 'Skills',
                    items: skills
                }
            ]
        };
        if (mode === 'create' && onCreate) {
            onCreate(cycleData, localGoals, localHabits);
        } else if (mode === 'edit' && onSaveCycle && cycle) {
            // In edit mode, goals/habits are handled atomically by other handlers. We just save the cycle config.
            onSaveCycle({
                ...cycle,
                ...cycleData
            });
        }
    };
    // -- Goal/Habit Wrapper Handlers --
    const handleGoalSaveWrapper = (goalData, selectedHabit)=>{
        // goalData from modal: { title, description, type, subtasks (string[]) }
        const newGoalObj = {
            id: editingGoal?.id || `temp-g-${Date.now()}`,
            ...goalData,
            // If it's consistency, we need to store the habit data structure temporarily for the parent to process
            linkedHabit: selectedHabit,
            // In create mode, subtasks come as strings from modal, we format them for preview
            subtasks: goalData.subtasks?.map((s)=>({
                    name: s,
                    done: false
                }))
        };
        if (mode === 'create') {
            if (editingGoal) {
                setLocalGoals((prev)=>prev.map((g)=>g.id === editingGoal.id ? {
                            ...g,
                            ...newGoalObj
                        } : g));
            } else {
                setLocalGoals((prev)=>[
                        ...prev,
                        newGoalObj
                    ]);
            }
        } else {
            // Edit Mode: Immediate DB Action
            if (onManageGoal) {
                const action = editingGoal ? 'update' : 'create';
                onManageGoal(action, {
                    ...newGoalObj,
                    linkedHabit: selectedHabit
                });
            }
        }
        setIsGoalModalOpen(false);
    };
    const handleHabitSaveWrapper = (habitData)=>{
        const newHabitObj = {
            id: editingHabit?.id || `temp-h-${Date.now()}`,
            ...habitData
        };
        if (mode === 'create') {
            if (editingHabit) {
                setLocalHabits((prev)=>prev.map((h)=>h.id === editingHabit.id ? newHabitObj : h));
            } else {
                setLocalHabits((prev)=>[
                        ...prev,
                        newHabitObj
                    ]);
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
    const handleDeleteFromLibrary = async (habitId)=>{
        if (onDeleteHabitFromDB) {
            await onDeleteHabitFromDB(habitId);
        } else if (onManageHabit) {
            onManageHabit('delete', {
                id: habitId
            });
        } else {
            console.warn("Delete from library not fully supported in create mode without parent handler");
        }
    };
    const handleDeleteItem = (id, type)=>{
        if (verifyDeleteId !== id) {
            setVerifyDeleteId(id);
            setTimeout(()=>setVerifyDeleteId(null), 3000);
            return;
        }
        if (mode === 'create') {
            if (type === 'goal') setLocalGoals((prev)=>prev.filter((g)=>g.id !== id));
            else setLocalHabits((prev)=>prev.filter((h)=>h.id !== id));
        } else {
            if (type === 'goal' && onManageGoal) onManageGoal('delete', {
                id
            });
            if (type === 'habit' && onManageHabit) onManageHabit('delete', {
                id
            });
        }
        setVerifyDeleteId(null);
    };
    // Open Handlers
    const openAddGoal = ()=>{
        setEditingGoal(undefined);
        setIsGoalModalOpen(true);
    };
    const openEditGoal = (g)=>{
        setEditingGoal(g);
        setIsGoalModalOpen(true);
    };
    const openAddHabit = ()=>{
        setEditingHabit(undefined);
        setIsHabitModalOpen(true);
    };
    const openEditHabit = (h)=>{
        setEditingHabit(h);
        setIsHabitModalOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl rounded-2xl bg-white dark:bg-graphite-900 shadow-2xl animate-in zoom-in-95 duration-200 border border-graphite-200 dark:border-graphite-800 flex flex-col h-[85vh]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-graphite-200 dark:border-graphite-800 flex justify-between items-center bg-graphite-50 dark:bg-graphite-950/50 rounded-t-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-graphite-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        mode === 'create' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                            size: 20,
                                            className: "text-pacific-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 282,
                                            columnNumber: 50
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                            size: 20,
                                            className: "text-pacific-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 282,
                                            columnNumber: 102
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        mode === 'create' ? 'Initialize New Cycle' : 'Cycle Editor'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 281,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-graphite-500 mt-1 uppercase tracking-wider",
                                    children: mode === 'create' ? 'System Configuration' : `Cycle ${cycle?.sprint_number} Configuration`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 285,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                            lineNumber: 280,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex bg-white dark:bg-graphite-800 p-1 rounded-xl border border-graphite-200 dark:border-graphite-700",
                            children: [
                                {
                                    id: 'strategy',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                        lineNumber: 293,
                                        columnNumber: 53
                                    }, ("TURBOPACK compile-time value", void 0))
                                },
                                {
                                    id: 'identity',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                        lineNumber: 294,
                                        columnNumber: 53
                                    }, ("TURBOPACK compile-time value", void 0))
                                },
                                {
                                    id: 'mantras',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                        lineNumber: 295,
                                        columnNumber: 52
                                    }, ("TURBOPACK compile-time value", void 0))
                                },
                                {
                                    id: 'goals',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                        lineNumber: 296,
                                        columnNumber: 50
                                    }, ("TURBOPACK compile-time value", void 0))
                                },
                                {
                                    id: 'habits',
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                        lineNumber: 297,
                                        columnNumber: 51
                                    }, ("TURBOPACK compile-time value", void 0))
                                }
                            ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab.id),
                                    className: `flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === tab.id ? 'bg-pacific-500 text-white shadow-md' : 'text-graphite-500 hover:text-graphite-900 dark:hover:text-graphite-white hover:bg-graphite-50 dark:hover:bg-graphite-700'}`,
                                    children: [
                                        tab.icon,
                                        " ",
                                        tab.id
                                    ]
                                }, tab.id, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 299,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                            lineNumber: 291,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            type: "button",
                            className: "text-graphite-400 hover:text-white transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                lineNumber: 312,
                                columnNumber: 126
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                            lineNumber: 312,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                    lineNumber: 279,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-8 bg-graphite-50/50 dark:bg-graphite-900/50",
                    children: [
                        activeTab === 'strategy' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 max-w-2xl mx-auto animate-in fade-in slide-in-from-right-2",
                            children: [
                                mode === 'create' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-pacific-500 text-xs font-bold uppercase tracking-widest",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Temporal Config"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] font-bold text-pacific-600 dark:text-pacific-400 bg-pacific-50 dark:bg-pacific-900/20 px-2 py-1 rounded",
                                                    children: "AUTO-SUGGESTED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 323,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-graphite-500 uppercase mb-1.5",
                                                            children: "Start Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: startDate,
                                                            onChange: handleManualStartDateChange,
                                                            className: "w-full bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-3 py-2.5 text-sm text-graphite-900 dark:text-white focus:outline-none focus:border-pacific-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-graphite-500 uppercase mb-1.5",
                                                            children: "End Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: endDate,
                                                            onChange: (e)=>setEndDate(e.target.value),
                                                            className: "w-full bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-3 py-2.5 text-sm text-graphite-900 dark:text-white focus:outline-none focus:border-pacific-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 331,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4 pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-graphite-500 uppercase mb-1.5",
                                                            children: [
                                                                "Cycle Number (1-",
                                                                maxCycles,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: "1",
                                                            max: maxCycles,
                                                            value: sprintNumber,
                                                            onChange: (e)=>{
                                                                const val = Number(e.target.value);
                                                                setSprintNumber(val);
                                                                if (val > maxCycles) setError(`Maximum ${maxCycles} cycles allowed per version.`);
                                                                else setError(null);
                                                            },
                                                            className: `w-full bg-graphite-50 dark:bg-graphite-950 border rounded-xl px-3 py-2.5 text-sm text-graphite-900 dark:text-white focus:outline-none focus:border-pacific-500 ${error ? 'border-red-500 ring-1 ring-red-500/20' : 'border-graphite-200 dark:border-graphite-700'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-[10px] mt-1 font-bold flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                    size: 10
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                    lineNumber: 367,
                                                                    columnNumber: 134
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                error
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 55
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsActive(!isActive),
                                                        className: `w-full py-2.5 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${isActive ? 'bg-pacific-500/10 border-pacific-500/50 text-pacific-600 dark:text-pacific-400' : 'bg-graphite-50 dark:bg-graphite-950 border-graphite-200 dark:border-graphite-700 text-graphite-500'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            isActive ? 'Status: Active' : 'Status: Inactive'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 351,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 322,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-graphite-500 uppercase mb-4",
                                            children: "Focus Priorities"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 382,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: priorities.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex h-10 w-10 items-center justify-center rounded-lg bg-graphite-100 dark:bg-graphite-800 font-bold text-graphite-500 border border-graphite-200 dark:border-graphite-700",
                                                            children: i + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: p,
                                                            onChange: (e)=>{
                                                                const newP = [
                                                                    ...priorities
                                                                ];
                                                                newP[i] = e.target.value;
                                                                setPriorities(newP);
                                                            },
                                                            className: "flex-1 bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 text-sm focus:outline-none focus:border-pacific-500 transition-colors",
                                                            placeholder: `Priority ${i + 1}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 383,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 381,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-graphite-500 uppercase mb-2",
                                            children: "Current Friction/Problems"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 393,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: problems,
                                            onChange: (e)=>setProblems(e.target.value),
                                            rows: 3,
                                            className: "w-full bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl p-4 text-sm focus:outline-none focus:border-pacific-500 resize-none transition-colors",
                                            placeholder: "What is slowing you down?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 394,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 392,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-graphite-500 uppercase mb-2",
                                            children: "Learning Focus"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 397,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: learning,
                                            onChange: (e)=>setLearning(e.target.value),
                                            className: "w-full bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl p-4 text-sm focus:outline-none focus:border-pacific-500 transition-colors",
                                            placeholder: "One major skill to master..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 398,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 396,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                            lineNumber: 318,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        activeTab === 'identity' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-right-2",
                            children: [
                                {
                                    title: 'Core Beliefs',
                                    items: beliefs,
                                    add: handleAddBelief,
                                    val: tempBelief,
                                    set: setTempBelief,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                        lineNumber: 406,
                                        columnNumber: 137
                                    }, ("TURBOPACK compile-time value", void 0))
                                },
                                {
                                    title: 'Characteristics',
                                    items: characteristics,
                                    add: handleAddChar,
                                    val: tempChar,
                                    set: setTempChar,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                        lineNumber: 406,
                                        columnNumber: 271
                                    }, ("TURBOPACK compile-time value", void 0))
                                },
                                {
                                    title: 'Skills Acquisition',
                                    items: skills,
                                    add: handleAddSkill,
                                    val: tempSkill,
                                    set: setTempSkill,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                        lineNumber: 406,
                                        columnNumber: 408
                                    }, ("TURBOPACK compile-time value", void 0))
                                }
                            ].map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-graphite-900 dark:text-white flex items-center gap-2 mb-4",
                                            children: [
                                                section.icon,
                                                " ",
                                                section.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 408,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 mb-4",
                                            children: section.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-graphite-100 dark:bg-graphite-800 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 border border-graphite-200 dark:border-graphite-700",
                                                    children: [
                                                        item,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                if (section.title === 'Core Beliefs') setBeliefs(beliefs.filter((_, j)=>j !== i));
                                                                else if (section.title === 'Characteristics') setCharacteristics(characteristics.filter((_, j)=>j !== i));
                                                                else setSkills(skills.filter((_, j)=>j !== i));
                                                            },
                                                            className: "text-graphite-400 hover:text-red-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 370
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 409,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: section.val,
                                                    onChange: (e)=>section.set(e.target.value),
                                                    onKeyDown: (e)=>e.key === 'Enter' && section.add(),
                                                    className: "flex-1 bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-pacific-500 transition-colors",
                                                    placeholder: `Add ${section.title}...`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: section.add,
                                                    className: "p-2 bg-pacific-500 text-white rounded-xl hover:bg-pacific-600 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 163
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 417,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 407,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                            lineNumber: 405,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        activeTab === 'mantras' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-right-2 bg-white dark:bg-graphite-900 p-6 rounded-2xl border border-graphite-200 dark:border-graphite-800 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-graphite-500 uppercase mb-3",
                                            children: "Select Active Mantras"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 430,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto pr-2",
                                            children: allMantras.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setSelectedMantras((prev)=>prev.includes(m) ? prev.filter((x)=>x !== m) : [
                                                                ...prev,
                                                                m
                                                            ]),
                                                    className: `p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${selectedMantras.includes(m) ? 'bg-pacific-50 border-pacific-500 text-pacific-700 dark:bg-pacific-900/20 dark:text-pacific-300' : 'bg-graphite-50 dark:bg-graphite-950 border-transparent text-graphite-600 dark:text-graphite-400 hover:bg-graphite-100 dark:hover:bg-graphite-800'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: m
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        selectedMantras.includes(m) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 77
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 431,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 429,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 pt-4 border-t border-graphite-200 dark:border-graphite-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: newMantra,
                                            onChange: (e)=>setNewMantra(e.target.value),
                                            className: "flex-1 bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-pacific-500 transition-colors",
                                            placeholder: "New Mantra..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 441,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleAddMantra,
                                            className: "px-4 bg-graphite-900 dark:bg-white text-white dark:text-graphite-900 rounded-xl font-bold text-xs uppercase tracking-wider",
                                            children: "ADD"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 442,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 440,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                            lineNumber: 428,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        activeTab === 'goals' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto animate-in fade-in slide-in-from-right-2 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-graphite-500 uppercase tracking-widest",
                                            children: "Active Goals"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 451,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: openAddGoal,
                                            className: "flex items-center gap-2 px-4 py-2 bg-pacific-600 text-white rounded-xl text-xs font-bold hover:bg-pacific-500 shadow-lg shadow-pacific-500/30 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Add Goal"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 452,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 450,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        localGoals.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 rounded-2xl flex justify-between items-center group hover:border-pacific-500/30 transition-all shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-graphite-900 dark:text-white flex items-center gap-2",
                                                                children: [
                                                                    g.title,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-[10px] uppercase px-2 py-0.5 rounded border ${g.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].TASK_PROJECT ? 'border-purple-200 text-purple-600 dark:border-purple-900 dark:text-purple-400' : 'border-bali-200 text-bali-600 dark:border-bali-900 dark:text-bali-400'}`,
                                                                        children: g.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].TASK_PROJECT ? 'Project' : 'Metric'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                        lineNumber: 462,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-graphite-500 mt-1 line-clamp-1",
                                                                children: g.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openEditGoal(g),
                                                                className: "p-2 text-graphite-400 hover:text-pacific-500 hover:bg-pacific-50 dark:hover:bg-pacific-900/20 rounded-lg transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 220
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                lineNumber: 469,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDeleteItem(g.id, 'goal'),
                                                                className: `p-2 rounded-lg transition-all flex items-center gap-2 ${verifyDeleteId === g.id ? 'bg-red-500 text-white w-24 justify-center' : 'text-graphite-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                        lineNumber: 474,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " ",
                                                                    verifyDeleteId === g.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-bold",
                                                                        children: "Confirm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                        lineNumber: 474,
                                                                        columnNumber: 98
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, g.id, true, {
                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                lineNumber: 458,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        localGoals.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-12 text-graphite-400 italic bg-graphite-50 dark:bg-graphite-950 rounded-2xl border border-dashed border-graphite-200 dark:border-graphite-800",
                                            children: "No goals defined."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 479,
                                            columnNumber: 61
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 456,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                            lineNumber: 449,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        activeTab === 'habits' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto animate-in fade-in slide-in-from-right-2 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-graphite-500 uppercase tracking-widest",
                                            children: "Cycle Habits"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 488,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: openAddHabit,
                                            className: "flex items-center gap-2 px-4 py-2 bg-pacific-600 text-white rounded-xl text-xs font-bold hover:bg-pacific-500 shadow-lg shadow-pacific-500/30 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Add Habit"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 489,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 487,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        localHabits.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 rounded-2xl flex justify-between items-center group hover:border-pacific-500/30 transition-all shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-graphite-900 dark:text-white flex items-center gap-2",
                                                                children: [
                                                                    h.name,
                                                                    h.linked_goal_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] uppercase px-2 py-0.5 rounded bg-pacific-50 dark:bg-pacific-900/20 text-pacific-600 dark:text-pacific-400 font-bold flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                                size: 10
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                                lineNumber: 499,
                                                                                columnNumber: 240
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            " Linked"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                        lineNumber: 499,
                                                                        columnNumber: 70
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                lineNumber: 497,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-graphite-500 mt-1 flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-graphite-100 dark:bg-graphite-800 px-2 py-0.5 rounded",
                                                                        children: h.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                        lineNumber: 502,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Weight: ",
                                                                            h.weight
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                        lineNumber: 503,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                        lineNumber: 496,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openEditHabit(h),
                                                                className: "p-2 text-graphite-400 hover:text-pacific-500 hover:bg-pacific-50 dark:hover:bg-pacific-900/20 rounded-lg transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 221
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                lineNumber: 507,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDeleteItem(h.id, 'habit'),
                                                                className: `p-2 rounded-lg transition-all flex items-center gap-2 ${verifyDeleteId === h.id ? 'bg-red-500 text-white w-24 justify-center' : 'text-graphite-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                        lineNumber: 512,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " ",
                                                                    verifyDeleteId === h.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-bold",
                                                                        children: "Confirm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                        lineNumber: 512,
                                                                        columnNumber: 98
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                                lineNumber: 508,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, h.id, true, {
                                                fileName: "[project]/src/components/CycleEditorModal.tsx",
                                                lineNumber: 495,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        localHabits.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-12 text-graphite-400 italic bg-graphite-50 dark:bg-graphite-950 rounded-2xl border border-dashed border-graphite-200 dark:border-graphite-800",
                                            children: "No habits defined."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                                            lineNumber: 517,
                                            columnNumber: 62
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 493,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                            lineNumber: 486,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                    lineNumber: 315,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-graphite-200 dark:border-graphite-800 flex justify-end gap-3 bg-white dark:bg-graphite-900 rounded-b-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-6 py-2 text-sm font-bold text-graphite-500 hover:text-graphite-900 dark:hover:text-white transition-colors",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                            lineNumber: 525,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleFinalSave,
                            className: "px-8 py-2 bg-graphite-900 dark:bg-white text-white dark:text-graphite-900 rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2",
                            children: [
                                mode === 'create' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 527,
                                    columnNumber: 46
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                                    lineNumber: 527,
                                    columnNumber: 69
                                }, ("TURBOPACK compile-time value", void 0)),
                                mode === 'create' ? 'Initialize Cycle' : 'Save Cycle Config'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CycleEditorModal.tsx",
                            lineNumber: 526,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                    lineNumber: 524,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalFormModal"], {
                    isOpen: isGoalModalOpen,
                    onClose: ()=>setIsGoalModalOpen(false),
                    onSave: handleGoalSaveWrapper,
                    initialGoal: editingGoal,
                    allHabits: allHabits,
                    currentCycleHabits: localHabits
                }, void 0, false, {
                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                    lineNumber: 533,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HabitFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HabitFormModal"], {
                    isOpen: isHabitModalOpen,
                    onClose: ()=>setIsHabitModalOpen(false),
                    onSave: handleHabitSaveWrapper,
                    initialHabit: editingHabit,
                    allHabits: allHabits,
                    onDeleteFromLibrary: handleDeleteFromLibrary,
                    onRenameCategory: onRenameCategory,
                    onDeleteCategory: onDeleteCategory
                }, void 0, false, {
                    fileName: "[project]/src/components/CycleEditorModal.tsx",
                    lineNumber: 541,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CycleEditorModal.tsx",
            lineNumber: 276,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/CycleEditorModal.tsx",
        lineNumber: 275,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CycleEditorModal, "B7M6+EG1wndO1EPlu0vGamtBDUw=");
_c = CycleEditorModal;
var _c;
__turbopack_context__.k.register(_c, "CycleEditorModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(portal)/database/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GoalFormModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CycleEditorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CycleEditorModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HabitFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HabitFormModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const EditModal = ({ isOpen, onClose, type, data, onSave, categories })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditModal.useEffect": ()=>{
            setFormData(data);
        }
    }["EditModal.useEffect"], [
        data
    ]);
    if (!isOpen || !formData) return null;
    const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const renderFields = ()=>{
        switch(type){
            case 'versions':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold uppercase text-graphite-500",
                                    children: "Title"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-lg p-2 text-sm",
                                    value: formData.title,
                                    onChange: (e)=>handleChange('title', e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                            lineNumber: 39,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold uppercase text-graphite-500",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-lg p-2 text-sm",
                                    value: formData.description,
                                    onChange: (e)=>handleChange('description', e.target.value),
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                            lineNumber: 44,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase text-graphite-500",
                                            children: "Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            className: "w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-lg p-2 text-sm",
                                            value: formData.start_date,
                                            onChange: (e)=>handleChange('start_date', e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase text-graphite-500",
                                            children: "End Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            className: "w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-lg p-2 text-sm",
                                            value: formData.end_date,
                                            onChange: (e)=>handleChange('end_date', e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                            lineNumber: 49,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold uppercase text-graphite-500",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-lg p-2 text-sm",
                                    value: formData.status,
                                    onChange: (e)=>handleChange('status', e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityStatus"].ACTIVE,
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityStatus"].ARCHIVED,
                                            children: "Archived"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                            lineNumber: 61,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true);
            case 'cycles':
                // Handled by CycleEditorModal
                return null;
            case 'habits':
                // Handled by HabitFormModal
                return null;
            case 'goals':
                // Handled by GoalFormModal
                return null;
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg rounded-2xl bg-white dark:bg-graphite-900 p-6 shadow-2xl border border-graphite-200 dark:border-graphite-800 animate-in zoom-in-95 duration-200",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-graphite-900 dark:text-white capitalize",
                            children: [
                                "Edit ",
                                type.slice(0, -1)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20,
                                className: "text-graphite-400 hover:text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 89,
                                columnNumber: 47
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 mb-6",
                    children: renderFields()
                }, void 0, false, {
                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                    lineNumber: 91,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 text-sm font-bold text-graphite-500 hover:text-graphite-900 dark:hover:text-white",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSave(formData),
                            className: "px-6 py-2 bg-pacific-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-pacific-500/30 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Save Changes"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                    lineNumber: 94,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(portal)/database/page.tsx",
            lineNumber: 86,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(portal)/database/page.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EditModal, "RrpcPrTHLcVnTXbs51ayQBSxquM=");
_c = EditModal;
const DatabasePage = ()=>{
    _s1();
    const [versions, setVersions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cycles, setCycles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [habits, setHabits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [goals, setGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('versions');
    const [verifyDeleteId, setVerifyDeleteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadData = async ()=>{
        try {
            const v = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].getAllVersions();
            const c = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].getAllCycles();
            const h = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].getAllHabits();
            const g = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].getAllGoals();
            setVersions(v);
            setCycles(c);
            setHabits(h);
            setGoals(g);
        } catch (err) {
            console.error(err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatabasePage.useEffect": ()=>{
            loadData();
        }
    }["DatabasePage.useEffect"], []);
    // Reset delete verification when changing tabs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatabasePage.useEffect": ()=>{
            setVerifyDeleteId(null);
        }
    }["DatabasePage.useEffect"], [
        activeTab
    ]);
    const handleDelete = async (id, type)=>{
        // 1. Check if we are verifying this specific ID
        if (verifyDeleteId !== id) {
            setVerifyDeleteId(id);
            // Auto-reset after 3s
            setTimeout(()=>setVerifyDeleteId((prev)=>prev === id ? null : prev), 3000);
            return;
        }
        // 2. Already verifying, perform delete
        try {
            switch(type){
                case 'versions':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].deleteVersion(id);
                    break;
                case 'cycles':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].deleteCycle(id);
                    break;
                case 'habits':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].deleteHabit(id);
                    break;
                case 'goals':
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].deleteGoal(id);
                    break;
            }
            setVerifyDeleteId(null);
            loadData();
        } catch (e) {
            console.error("Delete failed", e);
            loadData();
        }
    };
    const handleEdit = (item)=>{
        setEditingItem({
            type: activeTab,
            data: item
        });
    };
    const handleSaveEdit = async (updatedData)=>{
        const type = editingItem?.type;
        if (!type) return;
        switch(type){
            case 'versions':
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateVersion(updatedData);
                break;
            case 'cycles':
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateCycle(updatedData);
                break;
        }
        setEditingItem(null);
        loadData();
    };
    const handleGoalSave = async (goalData, selectedHabit)=>{
        if (editingItem?.type !== 'goals' || !editingItem.data) return;
        const originalGoal = editingItem.data;
        const parsedSubtasks = goalData.subtasks?.map((rawName)=>{
            const match = rawName.match(/^(\s*)/);
            const leadingStr = match ? match[1] : '';
            const normalizedIndent = leadingStr.replace(/\t/g, '  ');
            const level = Math.floor(normalizedIndent.length / 2);
            return {
                name: rawName.trim(),
                done: false,
                level
            };
        });
        const updatedGoal = {
            ...originalGoal,
            title: goalData.title,
            description: goalData.description,
            type: goalData.type,
            subtasks: parsedSubtasks,
            linked_habit_id: selectedHabit?.id
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateGoal(updatedGoal);
        setEditingItem(null);
        loadData();
    };
    const handleHabitSave = async (habitData)=>{
        if (editingItem?.type !== 'habits' || !editingItem.data) return;
        const originalHabit = editingItem.data;
        const updatedHabit = {
            ...originalHabit,
            name: habitData.name,
            category: habitData.category,
            weight: habitData.weight
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateHabit(updatedHabit);
        setEditingItem(null);
        loadData();
    };
    const handleCycleManageGoal = async (action, payload)=>{
        if (!editingItem?.data) return;
        if (action === 'delete') {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].deleteGoal(payload.id);
        } else {
            // Simplified replication of Lab.tsx logic for Database view context
            if (action === 'create') {
                const newGoal = {
                    id: `g-${crypto.randomUUID()}`,
                    cycle_id: editingItem.data.id,
                    title: payload.title,
                    description: payload.description,
                    type: payload.type,
                    subtasks: payload.subtasks?.map((s)=>({
                            name: s.trim(),
                            done: false,
                            level: 0
                        })) || []
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].addGoal(newGoal);
            } else {
                const originalGoal = goals.find((g)=>g.id === payload.id);
                if (originalGoal) {
                    const updatedGoal = {
                        ...originalGoal,
                        ...payload
                    };
                    if (payload.subtasks && typeof payload.subtasks[0] === 'string') {
                        updatedGoal.subtasks = payload.subtasks.map((s)=>({
                                name: s.trim(),
                                done: false,
                                level: 0
                            }));
                    }
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateGoal(updatedGoal);
                }
            }
        }
        loadData();
    };
    const handleCycleManageHabit = async (action, payload)=>{
        if (!editingItem?.data) return;
        if (action === 'delete') {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].deleteHabit(payload.id);
        } else if (action === 'create') {
            const newHabit = {
                id: `h-${crypto.randomUUID()}`,
                cycle_id: editingItem.data.id,
                name: payload.name,
                category: payload.category,
                weight: payload.weight
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].addHabit(newHabit);
        } else {
            const originalHabit = habits.find((h)=>h.id === payload.id);
            if (originalHabit) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateHabit({
                    ...originalHabit,
                    ...payload
                });
            }
        }
        loadData();
    };
    // Get unique categories for habits
    const uniqueCategories = Array.from(new Set(habits.map((h)=>h.category))).sort();
    // Calculate current cycle habits for goal linking context
    const activeCycle = cycles.find((c)=>c.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityStatus"].ACTIVE) || cycles[cycles.length - 1];
    const currentCycleHabits = activeCycle ? habits.filter((h)=>h.cycle_id === activeCycle.id) : [];
    const renderTable = ()=>{
        let headers = [];
        let rows = [];
        switch(activeTab){
            case 'versions':
                headers = [
                    'Number',
                    'Title',
                    'Status',
                    'Dates',
                    'Actions'
                ];
                rows = versions.map((v)=>({
                        id: v.id,
                        data: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: [
                                    "v",
                                    v.number,
                                    ".0"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 288,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            v.title,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-2 py-1 rounded text-xs font-bold uppercase ${v.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityStatus"].ACTIVE ? 'bg-bali-100 text-bali-700 dark:bg-bali-900/30 dark:text-bali-400' : 'bg-graphite-100 text-graphite-500 dark:bg-graphite-800'}`,
                                children: v.status
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 290,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono text-graphite-500",
                                children: [
                                    v.start_date,
                                    " → ",
                                    v.end_date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 291,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ],
                        original: v
                    }));
                break;
            case 'cycles':
                headers = [
                    'Sprint #',
                    'Priorities',
                    'Version Link',
                    'Dates',
                    'Actions'
                ];
                rows = cycles.map((c)=>({
                        id: c.id,
                        data: [
                            `Cycle ${c.sprint_number}`,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: c.focus_priorities.slice(0, 2).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: [
                                            "• ",
                                            p
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/(portal)/database/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 124
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 302,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-pacific-500 font-mono",
                                children: c.version_id
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 303,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono text-graphite-500",
                                children: [
                                    c.start_date,
                                    " → ",
                                    c.end_date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 304,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ],
                        original: c
                    }));
                break;
            case 'habits':
                headers = [
                    'Name',
                    'Category',
                    'Weight',
                    'Cycle Link',
                    'Actions'
                ];
                rows = habits.map((h)=>({
                        id: h.id,
                        data: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: h.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 314,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs bg-graphite-100 dark:bg-graphite-800 px-2 py-1 rounded",
                                children: h.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 315,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-0.5",
                                children: [
                                    ...Array(h.weight)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-1.5 rounded-full bg-pacific-500"
                                    }, i, false, {
                                        fileName: "[project]/src/app/(portal)/database/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 104
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 316,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-pacific-500 font-mono",
                                children: h.cycle_id
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 317,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ],
                        original: h
                    }));
                break;
            case 'goals':
                headers = [
                    'Title',
                    'Type',
                    'Cycle Link',
                    'Linked Habit',
                    'Actions'
                ];
                rows = goals.map((g)=>({
                        id: g.id,
                        data: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: g.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 327,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[10px] font-bold uppercase px-2 py-1 rounded border ${g.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].TASK_PROJECT ? 'border-purple-200 text-purple-600 dark:border-purple-900 dark:text-purple-400' : 'border-bali-200 text-bali-600 dark:border-bali-900 dark:text-bali-400'}`,
                                children: g.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalType"].TASK_PROJECT ? 'Project' : 'Consistency'
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 328,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-pacific-500 font-mono",
                                children: g.cycle_id
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 329,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            g.linked_habit_id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono text-graphite-400",
                                children: [
                                    g.linked_habit_id.slice(0, 8),
                                    "..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 330,
                                columnNumber: 45
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-graphite-300",
                                children: "-"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 330,
                                columnNumber: 143
                            }, ("TURBOPACK compile-time value", void 0))
                        ],
                        original: g
                    }));
                break;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full text-left text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-graphite-50 dark:bg-graphite-800/50 text-graphite-500 uppercase font-bold text-xs sticky top-0 backdrop-blur-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: headers.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-6 py-3",
                                children: h
                            }, i, false, {
                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                lineNumber: 341,
                                columnNumber: 48
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(portal)/database/page.tsx",
                        lineNumber: 340,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                    lineNumber: 339,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "divide-y divide-graphite-200 dark:divide-graphite-800",
                    children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-graphite-50 dark:hover:bg-graphite-800/30 transition-colors group",
                            children: [
                                row.data.map((cell, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4 text-graphite-700 dark:text-graphite-300 align-middle",
                                        children: cell
                                    }, i, false, {
                                        fileName: "[project]/src/app/(portal)/database/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit(row.original),
                                                className: "p-1.5 text-graphite-400 hover:text-pacific-500 hover:bg-pacific-50 dark:hover:bg-pacific-900/20 rounded-lg transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDelete(row.id, activeTab),
                                                className: `p-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 ${verifyDeleteId === row.id ? 'bg-red-500 text-white px-3 shadow-lg shadow-red-500/30 opacity-100' : 'text-graphite-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(portal)/database/page.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    verifyDeleteId === row.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold animate-in fade-in slide-in-from-left-1",
                                                        children: "Confirm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(portal)/database/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(portal)/database/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(portal)/database/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, row.id, true, {
                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                            lineNumber: 346,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                    lineNumber: 344,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(portal)/database/page.tsx",
            lineNumber: 338,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-end justify-between border-b border-graphite-200 dark:border-graphite-800 pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xs font-bold uppercase tracking-widest text-graphite-500 mb-2",
                            children: "System Records"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                            lineNumber: 382,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-display font-medium text-graphite-900 dark:text-white flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                    className: "text-graphite-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Database View"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(portal)/database/page.tsx",
                            lineNumber: 385,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(portal)/database/page.tsx",
                    lineNumber: 381,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/database/page.tsx",
                lineNumber: 380,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 border-b border-graphite-200 dark:border-graphite-800",
                children: [
                    'versions',
                    'cycles',
                    'habits',
                    'goals'
                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab),
                        className: `pb-3 text-sm font-bold uppercase tracking-wide transition-colors border-b-2 ${activeTab === tab ? 'border-pacific-500 text-pacific-700 dark:border-pacific-400 dark:text-pacific-400' : 'border-transparent text-graphite-500 hover:text-graphite-700 dark:hover:text-graphite-300'}`,
                        children: tab
                    }, tab, false, {
                        fileName: "[project]/src/app/(portal)/database/page.tsx",
                        lineNumber: 394,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/database/page.tsx",
                lineNumber: 392,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 rounded-lg shadow-sm",
                children: [
                    renderTable(),
                    (activeTab === 'versions' && versions.length === 0 || activeTab === 'cycles' && cycles.length === 0 || activeTab === 'habits' && habits.length === 0 || activeTab === 'goals' && goals.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-12 text-center text-graphite-400 italic",
                        children: "No records found in database."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(portal)/database/page.tsx",
                        lineNumber: 412,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(portal)/database/page.tsx",
                lineNumber: 404,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            editingItem && (editingItem.type === 'goals' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoalFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalFormModal"], {
                isOpen: true,
                onClose: ()=>setEditingItem(null),
                onSave: handleGoalSave,
                initialGoal: editingItem.data,
                allHabits: habits,
                currentCycleHabits: currentCycleHabits
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/database/page.tsx",
                lineNumber: 418,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : editingItem.type === 'cycles' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CycleEditorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CycleEditorModal"], {
                cycle: editingItem.data,
                goals: goals.filter((g)=>g.cycle_id === editingItem.data.id),
                habits: habits.filter((h)=>h.cycle_id === editingItem.data.id),
                allHabits: habits,
                onClose: ()=>setEditingItem(null),
                onSaveCycle: handleSaveEdit,
                onManageGoal: handleCycleManageGoal,
                onManageHabit: handleCycleManageHabit,
                onRenameCategory: async (oldName, newName)=>{
                    const all = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].getAllHabits();
                    const targets = all.filter((h)=>h.category === oldName);
                    for (const h of targets)await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateHabit({
                        ...h,
                        category: newName
                    });
                    await loadData();
                },
                onDeleteCategory: async (catName)=>{
                    const all = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].getAllHabits();
                    const targets = all.filter((h)=>h.category === catName);
                    for (const h of targets)await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateHabit({
                        ...h,
                        category: 'Uncategorized'
                    });
                    await loadData();
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/database/page.tsx",
                lineNumber: 427,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : editingItem.type === 'habits' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HabitFormModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HabitFormModal"], {
                isOpen: true,
                onClose: ()=>setEditingItem(null),
                onSave: handleHabitSave,
                initialHabit: editingItem.data,
                allHabits: habits,
                onDeleteFromLibrary: (id)=>handleDelete(id, 'habits'),
                onRenameCategory: async (oldName, newName)=>{
                    const all = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].getAllHabits();
                    const targets = all.filter((h)=>h.category === oldName);
                    for (const h of targets)await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateHabit({
                        ...h,
                        category: newName
                    });
                    await loadData();
                },
                onDeleteCategory: async (catName)=>{
                    const all = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].getAllHabits();
                    const targets = all.filter((h)=>h.category === catName);
                    for (const h of targets)await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseService"].updateHabit({
                        ...h,
                        category: 'Uncategorized'
                    });
                    await loadData();
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/database/page.tsx",
                lineNumber: 450,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditModal, {
                isOpen: !!editingItem,
                onClose: ()=>setEditingItem(null),
                type: editingItem.type,
                data: editingItem.data,
                onSave: handleSaveEdit,
                categories: uniqueCategories
            }, void 0, false, {
                fileName: "[project]/src/app/(portal)/database/page.tsx",
                lineNumber: 471,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(portal)/database/page.tsx",
        lineNumber: 379,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(DatabasePage, "TrxRuQ1ApyzGXyoPMTdw7HgicWI=");
_c1 = DatabasePage;
const __TURBOPACK__default__export__ = DatabasePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "EditModal");
__turbopack_context__.k.register(_c1, "DatabasePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e03ed770._.js.map