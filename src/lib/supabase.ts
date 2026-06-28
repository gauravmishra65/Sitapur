// src/lib/supabase.ts
// ── Supabase Client Initialization ──────────────────────────
// Add to .env.local:
//   VITE_SUPABASE_URL=https://your-project.supabase.co
//   VITE_SUPABASE_ANON_KEY=your-anon-key
//
// NEVER commit real keys. Only .env.example goes to GitHub.
// ────────────────────────────────────────────────────────────

import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL  as string;
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Fallback to placeholder so the app renders even if env vars are missing at build time.
// Real values must be set via VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY env vars.
export const supabase = createClient(
  supabaseUrl  || 'https://placeholder.supabase.co',
  supabaseAnon || 'placeholder-anon-key'
);

// ── Database Types ───────────────────────────────────────────
export interface InterestRegistration {
  id?: string;
  parent_name:   string;
  child_name:    string;
  grade:         string;
  subjects:      string[];
  phone:         string;
  whatsapp?:     string;
  tuition_mode:  'home' | 'online' | 'either';
  timing:        string;
  interest_type: 'demo' | 'admission' | 'info';
  message?:      string;
  created_at?:   string;
}

export interface StudentProfile {
  id:             string;  // matches auth.users.id
  full_name:      string;
  parent_name:    string;
  grade:          string;
  phone:          string;
  whatsapp?:      string;
  subjects?:      string[];
  tuition_mode?:  string;
  batch_timing?:  string;
  enrollment_date?: string;
  is_active?:     boolean;
  created_at?:    string;
}
