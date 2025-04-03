import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Settings, Home as HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function AdminSidebar({
  activeTab,
  setActiveTab,
}: AdminSidebarProps) {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-white shadow-sm h-full fixed">
      <div className="p-4">
        <Button
          variant="outline"
          className="w-full justify-start text-left mb-6"
          onClick={() => navigate("/")}
        >
          <HomeIcon className="h-4 w-4 mr-2" />
          Back to Website
        </Button>

        <nav className="space-y-1">
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            className="w-full justify-start text-left"
            onClick={() => setActiveTab("dashboard")}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "leads" ? "default" : "ghost"}
            className="w-full justify-start text-left"
            onClick={() => setActiveTab("leads")}
          >
            <Users className="h-4 w-4 mr-2" />
            Lead Management
          </Button>
          <Button
            variant={activeTab === "settings" ? "default" : "ghost"}
            className="w-full justify-start text-left"
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </nav>
      </div>
    </aside>
  );
}
