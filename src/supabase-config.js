// Centralized Supabase configuration
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://qxqhaufiqzlhoacqsyti.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4cWhhdWZpcXpsaG9hY3FzeXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNTk0MjgsImV4cCI6MjA1ODgzNTQyOH0.j9SUA5bqLGWO6n3p-fcf-ghhAzrCm_xtm5tlw-d8FNE";

// For debugging purposes
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase URL available:", !!supabaseUrl);
console.log("Supabase Anon Key available:", !!supabaseAnonKey);

export const supabaseConfig = {
  supabaseUrl,
  supabaseAnonKey,
};
