# 🧠 GEMINI.MD - El Portal Project Map
**System Pilot Control Center**  
**Protocol:** B.L.A.S.T. (Blueprint, Link, Architect, Stylize, Trigger)  
**Architecture:** A.N.T. (Architecture-Navigation-Tools)

---

## 📋 Project Status

**Project Name:** El Portal  
**North Star:** A Next.js-based personal operating system that manages identity through strict temporal hierarchies (Versions > Cycles > Days) for high-performance productivity and life management  
**Current Phase:** ✅ OPERATIONAL (Production-Ready Application)  
**Last Updated:** 2026-02-03T13:42:47+01:00

### B.L.A.S.T. Phase Status
- [x] **B - Blueprint:** ✅ Complete (PRD exists, architecture defined)
- [x] **L - Link:** ✅ Complete (Supabase connected, Auth working)
- [x] **A - Architect:** 🟡 In Progress (Need to establish A.N.T. layers)
- [ ] **S - Stylize:** 🟡 Partial (UI exists but can be enhanced)
- [ ] **T - Trigger:** 🔴 Not Started (No automation/cron jobs yet)

---

## 🎯 Discovery Answers

### 1. North Star (Estrella Polar)
**What is the singular desired outcome?**
- A fully functional personal operating system that:
  - Tracks habits across 90-day Versions divided into 2-week Cycles
  - Provides daily performance scoring based on habit completion
  - Manages goals with asymptotic progression tracking
  - Archives knowledge (routines, notes, mantras, slides)
  - Delivers analytics and performance insights

### 2. Integraciones (Integrations)
**What external services are needed? Are keys ready?**
- **Supabase:** ✅ Connected
  - Auth (Email/Password + Google OAuth)
  - PostgreSQL Database
  - Storage (el-portal-assets bucket)
  - Keys: Located in `.env.local`
  
- **Potential Future Integrations:**
  - [ ] Slack (notifications)
  - [ ] Email service (reminders)
  - [ ] Calendar sync (Google Calendar)
  - [ ] Analytics (Google Analytics / Mixpanel)

### 3. Source of Truth (Fuente de la Verdad)
**Where does primary data live?**
- **Database:** Supabase PostgreSQL
- **Tables:** profiles, versions, cycles, habits, habit_logs, goals, archives, slides, mantras
- **Storage:** Supabase Storage (`el-portal-assets` bucket)
- **Access Layer:** `src/lib/supabaseService.ts` (singleton instance)
- **Data Flow:** UI → supabaseService → Supabase API → Database

### 4. Delivery Payload (Carga de Entrega)
**How and where should the final result be delivered?**
- **Primary Delivery:** Web Application (localhost:3000 in dev, deployed URL in production)
- **User Interface:** React components rendered in Next.js App Router
- **Data Display:** Real-time dashboard with habit tracking, scores, and analytics
- **Storage:** Avatars and slide images accessible via signed URLs

### 5. Reglas de Comportamiento (Behavioral Rules)
**How should the system "act"?**

**Tone:**
- Professional and focused
- Minimal but elegant UI/UX
- Data-driven and deterministic
- No hand-holding (power user focused)

**Logic Constraints:**
- **Strict Hierarchy:** Profile → Version → Cycle → Day
- **Data Integrity:** All operations through supabaseService
- **No Assumptions:** Never guess business logic
- **Deterministic:** Same input = same output
- **Self-Healing:** After errors, update architecture docs to prevent recurrence

**"No-Do" Rules:**
- ❌ Never bypass auth checks
- ❌ Never mutate state without reloading data
- ❌ Never hardcode user IDs or sensitive data
- ❌ Never use direct Supabase client calls (use supabaseService)
- ❌ Never ignore TypeScript errors in production code

---

## 📊 Data Schema (JSON Shapes)

### Input Schemas

#### User Login (Supabase Auth)
```json
{
  "email": "string",
  "password": "string"
}
```

#### Habit Creation
```json
{
  "name": "string",
  "weight": "LOW" | "MEDIUM" | "HIGH",
  "cycle_id": "uuid",
  "order_index": "number"
}
```

#### Goal Creation
```json
{
  "title": "string",
  "type": "HABIT_STREAK",
  "linked_habit_id": "uuid | null",
  "cycle_id": "uuid",
  "order_index": "number",
  "subtasks": [
    {
      "id": "uuid",
      "title": "string",
      "completed": "boolean"
    }
  ]
}
```

#### Cycle Creation
```json
{
  "name": "string",
  "start_date": "YYYY-MM-DD",
  "end_date": "YYYY-MM-DD",
  "version_id": "uuid",
  "cch_list": [
    {
      "icon": "string (emoji)",
      "title": "string",
      "body": "string"
    }
  ]
}
```

### Output Schemas

#### Dashboard Data
```json
{
  "version": {
    "id": "uuid",
    "name": "string",
    "start_date": "YYYY-MM-DD",
    "end_date": "YYYY-MM-DD",
    "days": "number"
  },
  "cycle": {
    "id": "uuid",
    "name": "string",
    "start_date": "YYYY-MM-DD",
    "end_date": "YYYY-MM-DD",
    "cch_list": "CCHItem[]"
  },
  "habits": "Habit[]",
  "logs": "HabitLog[]",
  "goals": "Goal[]",
  "stats": {
    "currentStreak": "number",
    "maxStreak": "number",
    "dailyScore": "number"
  }
}
```

#### Performance Analytics
```json
{
  "dailyScores": [
    {
      "date": "YYYY-MM-DD",
      "score": "number (0-100)"
    }
  ],
  "cycles": "Cycle[]",
  "habitStats": {
    "habitId": {
      "currentStreak": "number",
      "maxStreak": "number"
    }
  }
}
```

---

## 🏗 A.N.T. Architecture Structure

### Capa 1: Architecture (architecture/)
**Status:** 🔴 Not Created  
**Purpose:** Technical SOPs in Markdown defining objectives, inputs, logic, and edge cases

**Required SOPs:**
- [ ] `architecture/auth-flow.md` - Authentication and session management
- [ ] `architecture/habit-tracking.md` - Habit completion and logging
- [ ] `architecture/scoring-algorithm.md` - Daily score calculation
- [ ] `architecture/goal-progression.md` - Asymptotic goal tracking
- [ ] `architecture/data-sync.md` - Supabase data synchronization
- [ ] `architecture/storage-management.md` - Avatar and image handling

### Capa 2: Navigation (Your AI Reasoning)
**Status:** ✅ Active  
**Purpose:** Route data between SOPs and Tools, make decisions

**Current Navigation Patterns:**
- UI Component → supabaseService → Database
- Auth Check → Data Fetch → State Update → UI Render
- User Action → Mutation → Reload Data → UI Refresh

### Capa 3: Tools (tools/)
**Status:** 🔴 Not Created  
**Purpose:** Deterministic Python scripts for automation and testing

**Required Tools:**
- [ ] `tools/verify_auth.py` - Test authentication flow
- [ ] `tools/seed_test_data.py` - Generate test users/cycles/habits
- [ ] `tools/calculate_scores.py` - Batch score calculation
- [ ] `tools/backup_database.py` - Export database to JSON
- [ ] `tools/validate_schema.py` - Verify data integrity
- [ ] `tools/generate_analytics.py` - Export performance reports

---

## 🗂 Project Structure

```
el-portal/
├── gemini.md                    # ✅ THIS FILE - Source of Truth
├── .env.local                   # ✅ Supabase credentials
├── AGENTS.md                    # ✅ Developer documentation
├── README.md                    # ✅ Setup instructions
├── architecture/                # 🔴 TO CREATE - Technical SOPs
├── tools/                       # 🔴 TO CREATE - Python automation
├── .tmp/                        # 🔴 TO CREATE - Temporary workspace
├── src/
│   ├── app/                     # ✅ Next.js App Router
│   ├── components/              # ✅ React components
│   ├── lib/                     # ✅ supabaseService (Data Access Layer)
│   ├── contexts/                # ✅ ThemeContext
│   └── types/                   # ✅ TypeScript interfaces
├── package.json                 # ✅ Dependencies
└── tailwind.config.ts           # ✅ Styling configuration
```

---

## 🔧 Technology Stack

**Frontend:**
- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS

**Backend:**
- Supabase (PostgreSQL + Auth + Storage)

**Data Access:**
- Singleton pattern: `supabaseService` instance
- All DB operations centralized

**Styling:**
- Custom color palette: `graphite`, `pacific`, `bali`
- Fonts: Inter, Plus Jakarta Sans, JetBrains Mono
- Dark mode support via ThemeContext

---

## 🧪 Testing & Verification

**Current State:**
- ❌ No automated test suite
- ✅ Manual testing via `npm run dev`
- ❌ No CI/CD pipeline

**Needed:**
- [ ] Unit tests for supabaseService methods
- [ ] Integration tests for auth flow
- [ ] E2E tests for critical user journeys
- [ ] Performance benchmarking
- [ ] Error tracking (Sentry/LogRocket)

---

## 🐛 Maintenance Log (Self-Annealing)

### 2026-02-03 - Progress Charts Not Rendering
**Issue:** Performance charts in Dashboard and History tabs were not rendering or had axis labels cut off by container divs.  
**Root Cause:** Improper chart margins and container sizing. Margins were too small (top:10, right:10, left:5) causing axis labels to be clipped. Containers lacked proper flex layout causing overflow issues.  
**Solution:**  
1. Increased chart margins to top:15, right:20, left:10, bottom:10
2. Increased Y-axis width from 45px to 50px
3. Set X-axis height to 40px with `interval="preserveStartEnd"`
4. Fixed Dashboard container: `flex-1 min-h-[240px] flex flex-col`
5. Fixed chart wrapper: `flex-1 min-h-0 overflow-hidden`
6. Added empty state placeholder for charts with no data  
**Learning:** Chart margins are critical for label visibility. Use `flex-1 min-h-0 overflow-hidden` pattern for responsive chart containers to prevent overflow and ensure proper sizing.  
**Impact:** Charts now render perfectly in both Dashboard and History with no clipping.

### 2026-02-03 - Goal-Habit Linking Not Persisting
**Issue:** When linking a habit to a goal in Lab, the selection appeared to work but didn't persist to the database. Goals showed "Select Habit Source" in red even after linking.  
**Root Cause:** The `updateGoal` method in supabaseService.ts was missing the `linked_habit_id` field in the database update (line 582).  
**Solution:** Added `linked_habit_id: updatedGoal.linked_habit_id` to the database update payload.  
**Learning:** Always verify that all relevant fields are included in database update operations. Missing fields in the update query cause silent data loss.  
**Prevention:** Consider adding TypeScript exhaustiveness checks or database schema validation to catch missing fields.

### 2026-02-03 - Dashboard Habit Toggle Lag and Errors
**Issue:** Clicking habits in Dashboard caused lag, visual clipping, double-click issues, and occasional Next.js errors.  
**Root Cause:** After each toggle, the code was calling `loadData()` which refetched ALL dashboard data, causing race conditions when clicking rapidly.  
**Solution:**  
1. Added `togglingHabits` Set to track habits currently being toggled
2. Prevented clicks while toggle is in progress (debouncing)
3. Replaced full `loadData()` with targeted `getDashboardData()` update
4. Added try-catch error handling with optimistic UI revert
5. Added visual loading state (opacity + cursor-wait)  
**Learning:** Avoid full data reloadsafter single-item mutations. Use targeted updates and optimistic UI with proper loading states.  
**Impact:** Significantly improved performance and eliminated race conditions.

### 2026-02-03 - B.L.A.S.T. Protocol Initialization
**Issue:** Project lacks A.N.T. architecture for automation and maintenance  
**Solution:** Created gemini.md, identified missing architecture/ and tools/  
**Learning:** Need to establish SOPs before building automation  
**Status:** In Progress

### Previous Issues (From Conversation History)
1. **Markdown Rendering:** Fixed checkbox rendering and edit mode blocking
2. **Life Checklist:** Reverted to string manipulation logic
3. **Archives UI:** Improved save status indicators and mantra styling
4. **Auth Redirect Loop:** Resolved infinite redirect after Google OAuth
5. **CSS Build Errors:** Fixed invalid Tailwind syntax

---

## 📝 Next Steps (Immediate Actions)

1. **Create Architecture Layer:**
   - Create `architecture/` directory
   - Write initial SOPs for core workflows
   
2. **Create Tools Layer:**
   - Create `tools/` directory
   - Create `.tmp/` directory
   - Build verification scripts

3. **Establish Triggers:**
   - Define automation needs (daily score recalc, email reminders, backups)
   - Choose trigger mechanism (cron, webhooks, Supabase functions)

4. **Enhance Stylization:**
   - Audit UI/UX for improvements
   - Apply ui-ux-pro-max skill guidelines
   - Refine animations and transitions

---

## 🔐 Environment Variables

**Location:** `.env.local`

```bash
NEXT_PUBLIC_SUPABASE_URL=<supabase_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon_key>
```

**Note:** Fallback credentials exist in `src/lib/supabase.ts` for development

---

## 🚀 Deployment Status

**Current Environment:** Development (localhost:3000)  
**Production Environment:** Not configured  

**Deployment Checklist:**
- [ ] Choose hosting platform (Vercel/Netlify/Railway)
- [ ] Configure production environment variables
- [ ] Set up custom domain
- [ ] Configure Supabase production instance
- [ ] Set up monitoring and logging
- [ ] Configure backups

---

## 📚 Documentation Links

- [AGENTS.md](file:///c:/Users/20252128/dev/Projects/el-portal/AGENTS.md) - Development guide
- [Supabase Docs](https://supabase.io/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**End of gemini.md**  
*This is a living document. Update it whenever the system state changes.*
