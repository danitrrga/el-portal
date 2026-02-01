
import { createClient } from '@supabase/supabase-js';


// Type assertion for Next.js env variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    // We don't throw error to avoid crashing the app entirely if env vars are missing during dev
    console.warn('Supabase URL or Anon Key is missing. Check your .env.local file. defaulting to placeholder to prevent crash.');
}

// Ensure we pass a valid URL format to avoid runtime crash during development if variables are missing
const validUrl = supabaseUrl || 'https://hrmemkwrdjbwtqguuqjm.supabase.co';
const validKey = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhybWVta3dyZGpid3RxZ3V1cWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5MTg5OTAsImV4cCI6MjA4NDQ5NDk5MH0.6Dltp4LOeaQROJzisvUAfXzctyEDO4DtgXomuPkfAks';

export const supabase = createClient(validUrl, validKey);
