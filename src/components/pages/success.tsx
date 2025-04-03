import { CheckCircle, AlertTriangle, WifiOff } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const [isOffline, setIsOffline] = useState(false);
  const [hasPendingSubmissions, setHasPendingSubmissions] = useState(false);

  // Check if there are any pending submissions in localStorage
  useEffect(() => {
    const checkOfflineStatus = async () => {
      const pendingSubmissions = localStorage.getItem(
        "hasPendingLeadSubmissions",
      );
      setHasPendingSubmissions(pendingSubmissions === "true");

      // First check navigator.onLine as a quick check
      if (!navigator.onLine) {
        setIsOffline(true);
        return;
      }

      // Then try to ping Supabase to confirm connection
      try {
        const response = await fetch(import.meta.env.VITE_SUPABASE_URL || "", {
          method: "HEAD",
          timeout: 5000,
        });
        setIsOffline(!response.ok);
      } catch (error) {
        console.error("Connection check failed:", error);
        setIsOffline(true);
      }
    };

    checkOfflineStatus();

    // Set up interval to periodically check connection
    const intervalId = setInterval(checkOfflineStatus, 30000); // Check every 30 seconds

    // Listen for online/offline events
    const handleOnline = () => checkOfflineStatus();
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Try to submit any pending offline submissions when connection is restored
  useEffect(() => {
    if (!isOffline && hasPendingSubmissions) {
      const trySubmitOfflineData = async () => {
        const storedSubmissions = localStorage.getItem(
          "offlineLeadSubmissions",
        );
        if (!storedSubmissions) return;

        // We'll just check if there are any submissions left after attempting to submit
        // The actual submission logic is in the home.tsx component
        setTimeout(() => {
          const pendingSubmissions = localStorage.getItem(
            "hasPendingLeadSubmissions",
          );
          setHasPendingSubmissions(pendingSubmissions === "true");
        }, 5000); // Check after 5 seconds to give time for submissions to process
      };

      trySubmitOfflineData();
    }
  }, [isOffline, hasPendingSubmissions]);

  // Determine if this is a payment success or quote request success
  const isPaymentSuccess = location.search.includes("payment=success");
  const isQuoteSuccess =
    location.search.includes("quote=success") ||
    (!isPaymentSuccess && !location.search);

  return (
    <div
      className={`min-h-screen ${isOffline || hasPendingSubmissions ? "bg-gradient-to-br from-yellow-50 to-yellow-100" : "bg-gradient-to-br from-green-50 to-green-100"} flex items-center justify-center p-4`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          {isOffline || hasPendingSubmissions ? (
            hasPendingSubmissions ? (
              <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            ) : (
              <WifiOff className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            )
          ) : (
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          )}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          {isPaymentSuccess
            ? "Payment Successful!"
            : isQuoteSuccess
              ? "Quote Request Received!"
              : "Success!"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 mb-6"
        >
          {isOffline
            ? "You appear to be offline. Your request will be processed when your connection is restored."
            : hasPendingSubmissions
              ? "You have pending submissions that will be sent when your connection to our server is restored."
              : isPaymentSuccess
                ? "Thank you for your purchase. You will receive a confirmation email shortly."
                : "Thank you for your quote request. One of our specialists will contact you within 24 hours."}
        </motion.p>
        {(isOffline || hasPendingSubmissions) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-yellow-600 text-sm mb-6"
          >
            Note: We're currently experiencing connection issues with our
            server. Your data is saved locally and will be submitted
            automatically when the connection is restored.
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="/"
            className={`inline-block ${isOffline || hasPendingSubmissions ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"} text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200`}
          >
            Home
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
