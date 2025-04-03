import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Profile information state
  const [profileInfo, setProfileInfo] = useState({
    name: "Admin User",
    email: "admin@arborcard.com",
    company: "Arbor Card Quotes",
  });

  // System settings state
  const [systemSettings, setSystemSettings] = useState({
    darkMode: false,
    autoRefresh: true,
    showLeadSource: true,
  });

  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    newLeadAlerts: true,
    leadStatusUpdates: false,
    dailySummary: true,
    browserNotifications: true,
    soundAlerts: false,
  });

  // Security settings state
  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: false,
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfileInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSystemSettingChange = (key: string, value: boolean) => {
    setSystemSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNotificationSettingChange = (key: string, value: boolean) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSecuritySettingChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { id, value } = e.target;
    setSecuritySettings((prev) => ({
      ...prev,
      [id.replace("password-", "")]: value,
    }));
  };

  const handleTwoFactorChange = (value: boolean) => {
    setSecuritySettings((prev) => ({
      ...prev,
      twoFactorEnabled: value,
    }));
  };

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("adminSettings");
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        if (parsedSettings.profileInfo)
          setProfileInfo(parsedSettings.profileInfo);
        if (parsedSettings.systemSettings)
          setSystemSettings(parsedSettings.systemSettings);
        if (parsedSettings.notificationSettings)
          setNotificationSettings(parsedSettings.notificationSettings);
      } catch (error) {
        console.error("Error parsing saved settings:", error);
      }
    }
  }, []);

  const saveChanges = () => {
    setIsLoading(true);

    try {
      // Save settings to localStorage instead of database
      localStorage.setItem(
        "adminSettings",
        JSON.stringify({
          profileInfo,
          systemSettings,
          notificationSettings,
        }),
      );

      toast({
        title: "Settings saved",
        description: "Your changes have been saved successfully.",
      });
    } catch (error: any) {
      console.error("Error saving settings:", error);
      toast({
        title: "Error saving settings",
        description: "An unexpected error occurred while saving settings",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updatePassword = async () => {
    if (securitySettings.newPassword !== securitySettings.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "New password and confirmation do not match",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // In a real app, you would update the password through Supabase Auth
      // This is a placeholder for demonstration
      toast({
        title: "Password updated",
        description: "Your password has been updated successfully.",
      });

      // Clear password fields
      setSecuritySettings((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
    } catch (error: any) {
      toast({
        title: "Error updating password",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Settings</h2>
        <Button onClick={saveChanges} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={profileInfo.name}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={profileInfo.email}
                    onChange={handleProfileChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={profileInfo.company}
                  onChange={handleProfileChange}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-gray-500">
                    Enable dark mode for the admin interface
                  </p>
                </div>
                <Switch
                  checked={systemSettings.darkMode}
                  onCheckedChange={(checked) =>
                    handleSystemSettingChange("darkMode", checked)
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-refresh Dashboard</p>
                  <p className="text-sm text-gray-500">
                    Automatically refresh dashboard data
                  </p>
                </div>
                <Switch
                  checked={systemSettings.autoRefresh}
                  onCheckedChange={(checked) =>
                    handleSystemSettingChange("autoRefresh", checked)
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Show Lead Source</p>
                  <p className="text-sm text-gray-500">
                    Display lead source information in lists
                  </p>
                </div>
                <Switch
                  checked={systemSettings.showLeadSource}
                  onCheckedChange={(checked) =>
                    handleSystemSettingChange("showLeadSource", checked)
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Lead Alerts</p>
                  <p className="text-sm text-gray-500">
                    Receive email when a new lead is submitted
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.newLeadAlerts}
                  onCheckedChange={(checked) =>
                    handleNotificationSettingChange("newLeadAlerts", checked)
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Lead Status Updates</p>
                  <p className="text-sm text-gray-500">
                    Receive email when a lead status changes
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.leadStatusUpdates}
                  onCheckedChange={(checked) =>
                    handleNotificationSettingChange(
                      "leadStatusUpdates",
                      checked,
                    )
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Daily Summary</p>
                  <p className="text-sm text-gray-500">
                    Receive daily summary of lead activity
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.dailySummary}
                  onCheckedChange={(checked) =>
                    handleNotificationSettingChange("dailySummary", checked)
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Browser Notifications</p>
                  <p className="text-sm text-gray-500">
                    Show browser notifications for new leads
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.browserNotifications}
                  onCheckedChange={(checked) =>
                    handleNotificationSettingChange(
                      "browserNotifications",
                      checked,
                    )
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sound Alerts</p>
                  <p className="text-sm text-gray-500">
                    Play sound when new notifications arrive
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.soundAlerts}
                  onCheckedChange={(checked) =>
                    handleNotificationSettingChange("soundAlerts", checked)
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  value={securitySettings.currentPassword}
                  onChange={handleSecuritySettingChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  value={securitySettings.newPassword}
                  onChange={handleSecuritySettingChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={securitySettings.confirmPassword}
                  onChange={handleSecuritySettingChange}
                />
              </div>
              <Button
                className="mt-2"
                onClick={updatePassword}
                disabled={
                  isLoading ||
                  !securitySettings.currentPassword ||
                  !securitySettings.newPassword ||
                  !securitySettings.confirmPassword
                }
              >
                Update Password
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable 2FA</p>
                  <p className="text-sm text-gray-500">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch
                  checked={securitySettings.twoFactorEnabled}
                  onCheckedChange={(checked) => handleTwoFactorChange(checked)}
                />
              </div>
              <Button
                variant="outline"
                className="mt-2"
                disabled={!securitySettings.twoFactorEnabled}
              >
                Set Up Two-Factor Authentication
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
