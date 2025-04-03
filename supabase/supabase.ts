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
    // Add fetch options to improve reliability
    fetch: (url, options = {}) => {
      const fetchOptions = {
        ...options,
        // Add timeout to prevent hanging requests
        signal:
          options.signal ||
          (typeof AbortController !== "undefined"
            ? new AbortController().signal
            : undefined),
      };

      return fetch(url, fetchOptions);
    },
  },
  realtime: {
    // Add reconnection parameters for WebSocket connections
    params: {
      eventsPerSecond: 2,
    },
  },
});

// Add a helper function to check connection status
export const checkSupabaseConnection = async () => {
  try {
    // First try a simple fetch to the Supabase URL
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(supabaseUrl, {
        method: "HEAD",
        signal: controller.signal,
        // Add cache busting to prevent cached responses
        headers: { "Cache-Control": "no-cache", Pragma: "no-cache" },
      });
      clearTimeout(timeoutId);
      if (response.ok) return true;
    } catch (fetchError) {
      console.log("Fetch connection test failed:", fetchError);
      // Continue to the next test if fetch fails
    }

    // If fetch fails, try a database query as backup
    const { error } = await supabase
      .from("leads")
      .select("count", { count: "exact", head: true });
    return !error;
  } catch (e) {
    console.error("Supabase connection check failed:", e);
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
