# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

El Portal is a Next.js-based personal operating system that manages identity through strict temporal hierarchies (Versions > Cycles > Days). It's a high-performance productivity and life management system with authentication, habit tracking, goal management, and performance analytics.

**Stack:** Next.js 16 (App Router), React 18, TypeScript, Tailwind CSS, Supabase (Auth + Database + Storage)

## Development Commands

### Core Commands
```bash
npm install              # Install dependencies
npm run dev             # Start development server (http://localhost:3000)
npm run build           # Production build
npm start               # Start production server
npm run lint            # Run ESLint
```

### Environment Setup
- Required: `.env.local` with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Supabase credentials are hardcoded in `src/lib/supabase.ts` as fallbacks (development only)

## Architecture

### Data Model Hierarchy
The system follows a strict temporal hierarchy:
1. **Profile** → 2. **Version** (90 days default) → 3. **Cycle** (2-week sprints) → 4. **Day** (habit logs)

**Key Relationships:**
- Profile tracks `current_version_id` and `current_cycle_id`
- Versions contain multiple Cycles
- Cycles contain Habits and Goals
- HabitLogs track daily completion status
- Goals can be linked to Habits (for streak tracking)

### Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with fonts, ThemeProvider
│   ├── page.tsx                # Redirects to /dashboard
│   ├── globals.css             # Global Tailwind styles
│   └── (portal)/               # Route group for authenticated pages
│       ├── layout.tsx          # Auth wrapper + PortalEntry animation
│       ├── dashboard/          # Main dashboard view
│       ├── lab/                # Cycle creation & management
│       ├── history/            # Performance analytics
│       ├── archives/           # Knowledge management (routines, notes, mantras)
│       ├── cinema/             # Visual slide gallery
│       └── database/           # Raw data CRUD interface
├── components/
│   ├── Layout.tsx              # Sidebar navigation + settings
│   ├── PortalEntry.tsx         # Auth screen + split-door animation
│   ├── NewVersionModal.tsx     # Version creation UI
│   ├── CycleEditorModal.tsx    # Cycle creation/editing
│   ├── GoalFormModal.tsx       # Goal creation/editing
│   ├── HabitFormModal.tsx      # Habit creation/editing
│   ├── PerformanceChart.tsx    # Recharts-based daily score visualization
│   ├── ProgressArc.tsx         # Circular progress indicator
│   ├── CycleProgressBar.tsx    # Linear cycle progress
│   ├── CycleProgressDonut.tsx  # Donut chart for cycle progress
│   ├── DeepWorkTimer.tsx       # Focus timer component
│   ├── TempoSettingsModal.tsx  # System settings (version days, cycles)
│   ├── AccountSettingsModal.tsx# Profile/avatar management
│   └── CustomDatePicker.tsx    # Date input component
├── lib/
│   ├── supabase.ts             # Supabase client initialization
│   └── supabaseService.ts      # Data access layer (SupabaseService class)
├── contexts/
│   └── ThemeContext.tsx        # Dark/light mode with localStorage
└── types/
    └── types.ts                # TypeScript interfaces & enums
```

### Data Access Layer

**ALL database operations** must go through `supabaseService` (singleton instance in `src/lib/supabaseService.ts`).

**Key Methods:**
- **Auth:** `getUserId()`, `getProfile()`, `updateProfile()`, `signOut()`
- **Dashboard:** `getDashboardData()` (returns version, cycle, habits, logs, goals, stats)
- **History:** `getHistoryData()` (returns 90 days of scores, cycles, habit stats)
- **Habits:** `toggleHabit()`, `getAllHabits()`, `addHabit()`, `updateHabit()`, `deleteHabit()`
- **Goals:** `updateGoal()`, `addGoal()`, `deleteGoal()`, `getAllGoals()`
- **Cycles:** `createCycle()`, `updateCycle()`, `deleteCycle()`, `setCycleActive()`, `getAllCycles()`
- **Versions:** `createVersion()`, `updateVersion()`, `deleteVersion()`, `getAllVersions()`
- **Archives:** `getArchives()`, `updateArchive()`
- **Slides:** `getSlides()`, `updateSlide()`, `getSlideImageUrl()`
- **Mantras:** `getMantras()`, `addMantra()`
- **Analytics:** `calculateDailyScore()`, `calculateAsymptoticScore()`, `calculateHabitStreaks()`
- **Settings:** `getSystemSettings()`, `updateSystemSettings()`, `uploadAvatar()`

**Storage:** Uses Supabase Storage bucket `el-portal-assets` for avatars and slide images (1-hour signed URLs).

### TypeScript Types

All types are defined in `src/types/types.ts`:
- **Enums:** `EntityStatus`, `HabitWeight`, `GoalType`, `ArchiveType`, `SlideCategory`
- **Interfaces:** `Profile`, `Version`, `Cycle`, `Habit`, `HabitLog`, `Goal`, `Subtask`, `ArchiveItem`, `Slide`, `DashboardData`, `CCHItem`

### Routing & Authentication

- Uses Next.js 14+ App Router with route groups `(portal)`
- `src/app/(portal)/layout.tsx` handles auth state and portal entry animation
- Unauthenticated users see `PortalEntry.tsx` login screen
- Auth providers: Email/Password, Google OAuth (configured in Supabase)
- After login, split-door animation plays while children pre-load data

### Styling

- **Tailwind CSS** with custom color palette:
  - `graphite-*`: Neutral grays (50-950)
  - `pacific-*`: Primary blue accent (50-950)
  - `bali-*`: Success/green accent (50-900)
- **Dark mode:** Controlled by `ThemeContext` (uses `dark` class on `<html>`)
- **Fonts:**
  - Sans: Inter (variable `--font-sans`)
  - Display: Plus Jakarta Sans (variable `--font-display`)
  - Mono: JetBrains Mono (variable `--font-mono`)

### Analytics Algorithms

1. **Daily Performance Score:**
   - Formula: `(Sum of completed habit weights / Sum of all habit weights) × 100`
   - Weights: LOW=1, MEDIUM=2, HIGH=4

2. **Asymptotic Goal Progression:**
   - Formula: `Progress % = 100 × (1 - e^(-0.061 × StreakDays))`
   - At 7 days ≈ 35%, asymptotically approaches 100%

3. **Habit Streaks:**
   - Current Streak: Consecutive days from today/yesterday backward
   - Max Streak: Longest consecutive run in all logs

## Development Patterns

### Component Patterns
- Use `"use client"` for all interactive components (React hooks, event handlers)
- Server components only for static layout wrappers
- All modals use backdrop click-to-close with `onClick={(e) => e.stopPropagation()}` on modal content

### State Management
- No external state library (Redux, Zustand, etc.)
- Use `useState` for local component state
- Use `useEffect` for data fetching on mount
- Call `loadData()` or similar after mutations to refresh UI

### Data Fetching Pattern
```tsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadData = async () => {
    try {
      const result = await supabaseService.getDashboardData();
      setData(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  loadData();
}, []);
```

### Path Aliases
- Use `@/*` for `src/*` imports (configured in `tsconfig.json`)
- Example: `import { supabase } from '@/lib/supabase'`

## Important Notes

### TypeScript Configuration
- Build errors are **ignored** via `next.config.mjs` (`ignoreBuildErrors: true`)
- When adding new code, ensure proper typing to avoid runtime errors

### Database Schema
- All tables have `user_id` foreign key to `auth.users`
- Primary keys use UUID (`gen_random_uuid()`)
- JSONB columns: `subtasks` (Goals), `content` (Archives), `cch_list` (Cycles)
- Date fields use ISO format strings: `YYYY-MM-DD`

### Common Pitfalls
1. **Storage URLs:** Images in `el-portal-assets` require signed URLs (1-hour expiry) - use `getSlideImageUrl()` helper
2. **Auth State:** Always check session before data operations - handled by `getUserId()` in supabaseService
3. **Cascade Deletes:** Foreign key constraints handle related data cleanup (habits/goals when cycle deleted)
4. **Optimistic UI:** Update local state immediately, then call API, then reload data

### Testing
- No test suite currently configured
- Manual testing via `npm run dev` required

## Windows Development Notes
- Using PowerShell (`pwsh`) as shell
- Git Bash is installed but not default
- Chocolatey package manager available

## Related Documentation
- README: Basic setup instructions and AI Studio link
- metadata.json: Contains project description and permissions
