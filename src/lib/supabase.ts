
import { createClient } from '@supabase/supabase-js';


// Type assertion for Next.js env variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    // We don't throw error to avoid crashing the app entirely if env vars are missing during dev
    console.warn('Supabase URL or Anon Key is missing. Check your .env.local file. defaulting to placeholder to prevent crash.');
}

// Ensure we pass a valid URL format to avoid runtime crash during development if variables are missing
const validUrl = supabaseUrl || 'https://placeholder.supabase.co';
const validKey = supabaseAnonKey || 'placeholder-key';

export const supabase = createClient(validUrl, validKey);
