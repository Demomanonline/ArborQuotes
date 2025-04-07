"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { supabase } from "../../../supabase/supabase";

type Notification = {
  id: string;
  title: string;
  message: string;
  leadId?: string;
  read: boolean;
  createdAt: string;
};

type NotificationContextType = {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (
    notification: Omit<Notification, "id" | "read" | "createdAt">,
  ) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider",
    );
  }
  return context;
}

type NotificationProviderProps = {
  children: ReactNode;
};

function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Set up real-time subscription for leads
  useEffect(() => {
    // Load notifications from localStorage on mount
    const savedNotifications = localStorage.getItem("adminNotifications");
    if (savedNotifications) {
      try {
        const parsedNotifications = JSON.parse(savedNotifications);
        setNotifications(parsedNotifications);
        setUnreadCount(
          parsedNotifications.filter((n: Notification) => !n.read).length,
        );
      } catch (error) {
        console.error("Error parsing saved notifications:", error);
      }
    } else {
      // For demo purposes, create some sample notifications
      const sampleNotifications: Notification[] = [
        {
          id: "1",
          title: "New lead submitted",
          message: "A new lead has been submitted from the website.",
          leadId: "1", // This would be a real lead ID in production
          read: false,
          createdAt: new Date(Date.now() - 10 * 60000).toISOString(), // 10 minutes ago
        },
        {
          id: "2",
          title: "Lead status updated",
          message:
            "The status of 'Coffee Shop Ltd' has been updated to 'Contacted'.",
          leadId: "2",
          read: false,
          createdAt: new Date(Date.now() - 30 * 60000).toISOString(), // 30 minutes ago
        },
        {
          id: "3",
          title: "Daily summary",
          message: "You received 5 new leads today. 2 have been qualified.",
          read: true,
          createdAt: new Date(Date.now() - 5 * 3600000).toISOString(), // 5 hours ago
        },
      ];

      setNotifications(sampleNotifications);
      setUnreadCount(sampleNotifications.filter((n) => !n.read).length);
      localStorage.setItem(
        "adminNotifications",
        JSON.stringify(sampleNotifications),
      );
    }

    // Set up real-time subscription for leads table
    try {
      const leadsSubscription = supabase
        .channel("leads-changes")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "leads" },
          (payload) => {
            const newLead = payload.new;
            const notification: Notification = {
              id: Date.now().toString(),
              title: "New lead submitted",
              message: `New lead from ${newLead.business_name || "Unknown Business"} has been received.`,
              leadId: newLead.id,
              read: false,
              createdAt: new Date().toISOString(),
            };

            setNotifications((prev) => [notification, ...prev]);
            setUnreadCount((prev) => prev + 1);
          },
        )
        .subscribe();

      // Set up real-time subscription for contact_leads table
      const contactLeadsSubscription = supabase
        .channel("contact-leads-changes")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "contact_leads" },
          (payload) => {
            const newLead = payload.new;
            const notification: Notification = {
              id: Date.now().toString(),
              title: "New contact form submission",
              message: `New message from ${newLead.name || "Unknown"} has been received.`,
              leadId: newLead.id,
              read: false,
              createdAt: new Date().toISOString(),
            };

            setNotifications((prev) => [notification, ...prev]);
            setUnreadCount((prev) => prev + 1);
          },
        )
        .subscribe();

      // Clean up subscriptions
      return () => {
        supabase.removeChannel(leadsSubscription);
        supabase.removeChannel(contactLeadsSubscription);
      };
    } catch (error) {
      console.error("Error setting up realtime subscriptions:", error);
    }
  }, []);

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("adminNotifications", JSON.stringify(notifications));
  }, [notifications]);

  const addNotification = (
    notification: Omit<Notification, "id" | "read" | "createdAt">,
  ) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      read: false,
      createdAt: new Date().toISOString(),
    };

    setNotifications((prev) => [newNotification, ...prev]);
    setUnreadCount((prev) => prev + 1);
  };

  const markAsRead = (id: string) => {
    // Find the notification first to check if it's already read
    const notification = notifications.find((n) => n.id === id);
    const wasUnread = notification && !notification.read;

    // Update the notification
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );

    // Only decrement the counter if it was previously unread
    if (wasUnread) {
      setUnreadCount((prev) => Math.max(0, prev - 1));
    }
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true })),
    );
    setUnreadCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationProvider, useNotifications };
