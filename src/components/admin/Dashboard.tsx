import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabase/supabase";
import { Tables } from "@/types/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Users, Clock, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

type Lead = Tables<"leads">;

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    qualified: 0,
    disqualified: 0,
    conversionRate: 0,
    avgResponseTime: 0,
  });
  const { toast } = useToast();

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("leads").select("*");

        if (error) {
          throw error;
        }

        setLeads(data || []);
        calculateStats(data || []);
      } catch (error) {
        console.error("Error fetching leads:", error);
        toast({
          title: "Error",
          description: "Failed to fetch dashboard data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, [toast]);

  const calculateStats = (leads: Lead[]) => {
    const total = leads.length;
    const newLeads = leads.filter((lead) => lead.status === "new").length;
    const contacted = leads.filter(
      (lead) => lead.status === "contacted",
    ).length;
    const qualified = leads.filter(
      (lead) => lead.status === "qualified",
    ).length;
    const disqualified = leads.filter(
      (lead) => lead.status === "disqualified",
    ).length;

    // Calculate conversion rate (qualified / total)
    const conversionRate =
      total > 0 ? Math.round((qualified / total) * 100) : 0;

    // For demo purposes, let's set a fixed avg response time
    const avgResponseTime = 4;

    setStats({
      total,
      new: newLeads,
      contacted,
      qualified,
      disqualified,
      conversionRate,
      avgResponseTime,
    });
  };

  // Get leads from the last 7 days for the "from last week" metric
  const getLeadsLastWeek = () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const leadsLastWeek = leads.filter((lead) => {
      const createdAt = lead.created_at
        ? new Date(lead.created_at)
        : new Date();
      return createdAt >= oneWeekAgo;
    });

    return leadsLastWeek.length;
  };

  const recentLeads = leads
    .sort((a, b) => {
      const dateA = a.created_at ? new Date(a.created_at) : new Date();
      const dateB = b.created_at ? new Date(b.created_at) : new Date();
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              Total Leads
            </h3>
            <p className="text-3xl font-bold">{stats.total}</p>
            <p className="text-sm text-gray-500 mt-2">
              +{getLeadsLastWeek()} from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              Conversion Rate
            </h3>
            <p className="text-3xl font-bold">{stats.conversionRate}%</p>
            <p className="text-sm text-gray-500 mt-2">
              Based on qualified leads
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              Avg. Response Time
            </h3>
            <p className="text-3xl font-bold">{stats.avgResponseTime} hrs</p>
            <p className="text-sm text-gray-500 mt-2">
              From lead creation to first contact
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Lead Status Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                  <span>New</span>
                </div>
                <span className="font-medium">{stats.new}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
                  <span>Contacted</span>
                </div>
                <span className="font-medium">{stats.contacted}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                  <span>Qualified</span>
                </div>
                <span className="font-medium">{stats.qualified}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
                  <span>Disqualified</span>
                </div>
                <span className="font-medium">{stats.disqualified}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Leads</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin-dashboard/leads" className="flex items-center">
                View All <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {recentLeads.length > 0 ? (
              <div className="space-y-4">
                {recentLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="flex justify-between items-center border-b pb-2 last:border-0"
                  >
                    <div>
                      <Link
                        to={`/admin-dashboard/leads/${lead.id}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {lead.business_name}
                      </Link>
                      <p className="text-sm text-gray-500">{lead.email}</p>
                    </div>
                    <div className="flex items-center">
                      {lead.status === "new" && (
                        <span className="flex items-center text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1">
                          <Clock className="h-3 w-3 mr-1" /> New
                        </span>
                      )}
                      {lead.status === "contacted" && (
                        <span className="flex items-center text-xs bg-yellow-100 text-yellow-800 rounded-full px-2 py-1">
                          <Users className="h-3 w-3 mr-1" /> Contacted
                        </span>
                      )}
                      {lead.status === "qualified" && (
                        <span className="flex items-center text-xs bg-green-100 text-green-800 rounded-full px-2 py-1">
                          <CheckCircle className="h-3 w-3 mr-1" /> Qualified
                        </span>
                      )}
                      {lead.status === "disqualified" && (
                        <span className="flex items-center text-xs bg-red-100 text-red-800 rounded-full px-2 py-1">
                          <XCircle className="h-3 w-3 mr-1" /> Disqualified
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-500">
                No leads available
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lead Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border border-dashed rounded-lg">
            <p className="text-gray-500">
              {loading
                ? "Loading chart data..."
                : "Chart visualization will appear here"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
