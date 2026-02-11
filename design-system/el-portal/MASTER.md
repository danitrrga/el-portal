# Design System: El Portal (v1.0)

> [!IMPORTANT]  
> **Source of Truth**: This document is the single source of truth for all UI/UX decisions in El Portal.  
> **Strict Adherence**: All new components must strictly follow these tokens. No magic values.

---

## 1. Core Principles

**Philosophy**:  
"Scientific Minimalism meets Data Density."  
El Portal is an Operating System for life management. It should feel like a precision instrument—clean, fast, and incredibly reliable.

**Keywords**:  
`Consistency` • `Clarity` • `Precision` • `Depth`

---

## 2. Typography

**Single Source of Truth**: `Inter`

We use **Inter** for *everything* to maintain extreme consistency and a clean, modern aesthetic.

| Role | Font Family | Weight | Usage |
| :--- | :--- | :--- | :--- |
| **Unified UI** | `Inter` | 400 - 800 | All text elements. |

### Scale
- **Display XL**: `text-4xl` font-bold tracking-tight (Page Titles)
- **Heading L**: `text-2xl` font-bold tracking-tight (Section Headers)
- **Heading M**: `text-xl` font-semibold (Card Titles)
- **Body**: `text-sm` (Default text)
- **Caption**: `text-xs` font-bold uppercase tracking-wider (Labels, Metadata)

---

## 3. Color Palette

### Base (Zinc)
The foundation of the interface. We use `zinc` (Graphite) for its clean, modern neutrality.

| Token | Hex | Tailwind | Usage |
| :--- | :--- | :--- | :--- |
| `bg-body` | `#09090b` | `zinc-950` | Global background (Dark Mode) |
| `bg-card` | `#18181b` | `zinc-900` | Card background |
| `bg-subtle` | `#27272a` | `zinc-800` | Secondary backgrounds, hovers |
| `border-subtle` | `#27272a` | `zinc-800` | Default borders |
| `text-main` | `#f4f4f5` | `zinc-100` | Primary text |
| `text-muted` | `#a1a1aa` | `zinc-400` | Secondary text, icons |

### Primary: Pacific (Sky)
Used for primary actions, active states, and focus.

| Token | Hex | Tailwind | Usage |
| :--- | :--- | :--- | :--- |
| `pacific-50` | `#f0f9ff` | `sky-50` | Subtle tints |
| `pacific-500` | `#0ea5e9` | `sky-500` | **Primary Brand Color** |
| `pacific-600` | `#0284c7` | `sky-600` | Hover states |

### Secondary: Bali (Emerald)
Used for success states, completion, and positive trends.

| Token | Hex | Tailwind | Usage |
| :--- | :--- | :--- | :--- |
| `bali-500` | `#10b981` | `emerald-500` | Success icons, completion checks |
| `bali-900` | `#064e3b` | `emerald-900` | Success backgrounds (subtle) |

---

## 4. Components & Patterns

### Cards (The "Glass & Metal" Effect)
We use a sophisticated layering strategy to create depth:
1.  **Base**: Deep semi-transparent graphite/black.
2.  **Texture**: Subtle noise or dot-grid patterns.
3.  **Border**: Thin, sharp borders (1px) with subtle gradients or gloss.
4.  **Highlight**: Inner white/pacific glow on top edges.

```tsx
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite-900/60 backdrop-blur-md shadow-2xl">
  {/* Shimmer/Gloss Effect */}
  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  {/* Content */}
</div>
```

### Visual Signatures
-   **Metallic Gradients**: Use `bg-gradient-to-b from-white/10 to-transparent` for subtle metallic sheens on headers/buttons.
-   **Dot Grid**: Use `bg-dot-white/[0.2]` (masked) for technological texture.
-   **Glows**: `shadow-[0_0_20px_rgba(14,165,233,0.3)]` for active elements.

### Buttons
**Primary (Glowing)**:
```tsx
<button className="relative overflow-hidden rounded-xl bg-pacific-600 px-4 py-2 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]">
  <span className="relative z-10 font-bold tracking-tight">Initialize</span>
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
</button>
```

**Secondary/Ghost**:
```tsx
<button className="bg-transparent hover:bg-graphite-800 text-graphite-400 hover:text-white font-medium rounded-xl px-4 py-2 transition-colors">
  Cancel
</button>
```

### Inputs
Minimalist, with a focus ring in Pacific Blue.
```tsx
<input className="bg-graphite-50 dark:bg-graphite-950 border border-graphite-200 dark:border-graphite-700 rounded-xl px-3 py-2 focus:border-pacific-500 focus:outline-none transition-colors" />
```

---

## 5. Iconography
We use **Lucide React**.
- **Size**: Default to `size={16}` or `size={18}` for UI icons. `size={14}` for metadata.
- **Stroke**: Default stroke width.
- **Color**: `text-graphite-400` for passive, `text-pacific-500` for active.

---

## 6. Layout & Spacing
- **Radius**: `rounded-2xl` (16px) for cards/modals. `rounded-xl` (12px) for buttons/inputs.
- **Padding**: `p-6` for standard cards. `p-4` for compact ones.
- **Gap**: `gap-4` or `gap-6` standard.

---

### Motion (Subtle & Intentional)
**Rule**: "No Continuous Motion."
Interface elements should be static unless interacted with.
-   **Duration**: `duration-200` or `duration-300` standard.
-   **Easing**: `ease-out`.
-   **Hovers**: Subtle brightness shifts (`brightness-110`) or micro-lifts (`-translate-y-[1px]`).
-   **No Loops**: Avoid infinite animations (pulsing, shimmering) unless for critical alerts.

### Anti-Patterns (Do NOT Use)
-   ❌ **Flashy Animations**: No shimmering borders or continuous movement.
-   ❌ **Light mode default**: Always check dark mode first.
-   ❌ **Emojis as icons**: Use SVG icons (Lucide).
-   ❌ **Layout-shifting**: Avoid hover states that change element dimensions.
