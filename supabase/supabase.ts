import { createClient } from "@supabase/supabase-js";
import { supabaseConfig } from "../src/supabase-config";

const supabaseUrl = supabaseConfig.supabaseUrl || "";
const supabaseAnonKey = supabaseConfig.supabaseAnonKey || "";

// Add validation and better error handling for Supabase initialization
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Supabase URL or Anonymous Key is missing. Please check your environment variables.",
  );
}

console.log("Initializing Supabase client with URL:", supabaseUrl);

// Create the Supabase client with additional options for better reliability
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: {
      "x-application-name": "arbor-card-quotes",
    },
  },
  realtime: {
    params: {
      eventsPerSecond: 2,
    },
  },
});

// Test the Supabase connection on load
(async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    console.log("Supabase connection test:", error ? "Failed" : "Successful");
    if (error) {
      console.error("Supabase connection error:", error);
    }
  } catch (e) {
    console.error("Supabase initialization error:", e);
  }
})();

// Add a helper function to check connection status
export const checkSupabaseConnection = async () => {
  try {
    console.log("Checking Supabase connection to:", supabaseUrl);

    // Try a simple auth check first (doesn't require database access)
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error("Supabase auth check failed:", error);
      return false;
    }

    console.log("Supabase connection successful");
    return true;
  } catch (e) {
    console.error("Supabase connection check failed with exception:", e);
    return false;
  }
};

// Add a function to handle offline mode gracefully
export const handleSupabaseError = (error: any) => {
  console.error("Supabase operation failed:", error);

  // Check if it's a network-related error
  if (
    error?.message?.includes("Failed to fetch") ||
    error?.code === "NETWORK_ERROR" ||
    error?.message?.includes("ERR_NAME_NOT_RESOLVED")
  ) {
    return {
      isOffline: true,
      message:
        "Network connection to database unavailable. Please try again later.",
    };
  }

  return {
    isOffline: false,
    message: error?.message || "An unexpected error occurred",
  };
};
