
// 2.2 Supabase Database Schema Mappings & Enums

export enum EntityStatus {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
}

export enum HabitWeight {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 4,
}

export enum GoalType {
  TASK_PROJECT = 'task_project',
  CONSISTENCY_METRIC = 'consistency_metric',
}

export enum ArchiveType {
  ROUTINE = 'routine',
  VISION_5Y = 'vision_5y',
  LIFE_TODO = 'life_todo',
  MANTRA_BANK = 'mantra_bank',
  THEORY_NOTES = 'theory_notes',
}

export enum SlideCategory {
  ME = 'Me',
  HER = 'Her',
  PURPOSE = 'Purpose',
  SOCIAL = 'Social',
  MATERIAL = 'Material',
}

// -- CORE MANAGEMENT --
export interface Profile {
  id: string;
  current_version_id: string | null;
  current_cycle_id: string | null;
  avatar_url?: string;
  // System Tempo Settings
  version_days_default: number; // Default 90
  cycles_per_version_default: number; // Default 6
}

// -- TIME MANAGEMENT --
export interface Version {
  id: string;
  number: number;
  title: string;
  description: string; // The "Persona"
  status: EntityStatus;
  start_date: string; // ISO Date
  end_date: string; // ISO Date
}

export interface CCHItem {
  category: 'Beliefs' | 'Characteristics' | 'Skills';
  items: string[];
}

export interface Cycle {
  id: string;
  version_id: string;
  sprint_number: number;
  focus_priorities: string[]; // Max 3
  problems: string;
  cch_list: CCHItem[];
  mantras: string[];
  learning_focus: string;
  start_date: string;
  end_date: string;
  status?: EntityStatus;
}

// -- ACTION ENGINE --
export interface Habit {
  id: string;
  cycle_id: string;
  name: string;
  weight: HabitWeight;
  category: string;
  linked_goal_id?: string;
}

export interface HabitLog {
  id: string;
  habit_id: string;
  date: string; // ISO Date "YYYY-MM-DD"
  status: boolean;
}

export interface Subtask {
  name: string;
  done: boolean;
  level?: number; // 0 = root, 1 = sub, etc.
}

export interface Goal {
  id: string;
  cycle_id: string;
  title: string;
  description: string;
  type: GoalType;
  // For Projects
  subtasks?: Subtask[];
  // For Metrics
  linked_habit_id?: string;
  current_streak?: number;
}

// -- KNOWLEDGE & ARCHIVES --
export interface ArchiveItem {
  id: string;
  type: ArchiveType;
  title: string;
  content: string;
  created_at?: string;
}

// -- VISUALIZATION --
export interface Slide {
  id: string;
  category: SlideCategory;
  image_url: string;
  gallery_images?: string[];
  caption: string;
}

// -- DATA TRANSFER OBJECTS FOR UI --
export interface DashboardData {
  version: Version | null;
  cycle: Cycle | null;
  habits: Habit[];
  todayLogs: HabitLog[];
  habitStats: Record<string, { currentStreak: number; maxStreak: number }>;
  goals: Goal[];
}
