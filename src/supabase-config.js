// Centralized Supabase configuration
export const supabaseConfig = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
};

// For debugging purposes
console.log("Supabase URL available:", !!import.meta.env.VITE_SUPABASE_URL);
console.log(
  "Supabase Anon Key available:",
  !!import.meta.env.VITE_SUPABASE_ANON_KEY,
);
