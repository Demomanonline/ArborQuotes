import React from "react";
import { AlertTriangle, WifiOff, Database } from "lucide-react";
import { Button } from "./button";

interface OfflineFallbackProps {
  message?: string;
  onRetry?: () => void;
  type?: "connection" | "database" | "general";
  hasPendingData?: boolean;
}

export function OfflineFallback({
  message = "Unable to connect to the server. Please check your internet connection and try again.",
  onRetry,
  type = "connection",
  hasPendingData = false,
}: OfflineFallbackProps) {
  return (
    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md flex flex-col items-center text-center">
      {type === "database" ? (
        <Database className="h-10 w-10 text-yellow-500 mb-2" />
      ) : type === "general" ? (
        <AlertTriangle className="h-10 w-10 text-yellow-500 mb-2" />
      ) : (
        <WifiOff className="h-10 w-10 text-yellow-500 mb-2" />
      )}

      <h3 className="text-lg font-medium text-yellow-800 mb-1">
        {type === "database"
          ? "Database Connection Issue"
          : type === "general"
            ? "Service Unavailable"
            : "Connection Issue"}
      </h3>

      <p className="text-yellow-700 mb-4">{message}</p>

      {hasPendingData && (
        <p className="text-sm text-yellow-600 mb-4">
          Your data has been saved locally and will be submitted automatically
          when connection is restored.
        </p>
      )}

      {onRetry && (
        <Button
          variant="outline"
          onClick={onRetry}
          className="border-yellow-300 text-yellow-700 hover:bg-yellow-100"
        >
          <AlertTriangle className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      )}
    </div>
  );
}
