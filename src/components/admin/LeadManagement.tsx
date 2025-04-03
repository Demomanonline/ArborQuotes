import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabase/supabase";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DownloadIcon,
  SearchIcon,
  RefreshCw,
  CheckCircle,
  Clock,
  XCircle,
  PhoneCall,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tables } from "@/types/supabase";
import { useToast } from "@/components/ui/use-toast";

type Lead = Tables<"leads">;

export default function LeadManagement() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("created_at");
  const [sortDirection, setSortDirection] = useState<string>("desc");
  const { toast } = useToast();

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      let query = supabase
        .from("leads")
        .select("*")
        .order(sortBy, { ascending: sortDirection === "asc" });

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      if (searchQuery) {
        query = query.or(
          `business_name.ilike.%${searchQuery}%,contact_name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%,phone.ilike.%${searchQuery}%`,
        );
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setLeads(data || []);
    } catch (error) {
      console.error("Error fetching leads:", error);
      toast({
        title: "Error",
        description: "Failed to fetch leads. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [statusFilter, sortBy, sortDirection]);

  const handleSearch = () => {
    fetchLeads();
  };

  const handleStatusChange = async (leadId: number, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("leads")
        .update({ status: newStatus })
        .eq("id", leadId);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: `Lead status has been updated to ${newStatus}`,
      });

      fetchLeads();
    } catch (error) {
      console.error("Error updating lead status:", error);
      toast({
        title: "Error",
        description: "Failed to update lead status. Please try again.",
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    if (leads.length === 0) {
      toast({
        title: "No Data",
        description: "There are no leads to export.",
        variant: "destructive",
      });
      return;
    }

    const headers = [
      "ID",
      "Business Name",
      "Contact Name",
      "Email",
      "Phone",
      "Business Type",
      "Monthly Turnover",
      "Status",
      "Created At",
    ];

    const csvContent = [
      headers.join(","),
      ...leads.map((lead) => {
        return [
          lead.id,
          `"${lead.business_name || ""}"`,
          `"${lead.contact_name || ""}"`,
          `"${lead.email || ""}"`,
          `"${lead.phone || ""}"`,
          `"${lead.business_type || ""}"`,
          lead.turnover || "",
          `"${lead.status || ""}"`,
          lead.created_at,
        ].join(",");
      }),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `leads_export_${new Date().toISOString()}.csv`,
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export Successful",
      description: "Leads have been exported to CSV.",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return (
          <Badge className="bg-blue-500 hover:bg-blue-600">
            <Clock className="w-3 h-3 mr-1" /> New
          </Badge>
        );
      case "contacted":
        return (
          <Badge className="bg-yellow-500 hover:bg-yellow-600">
            <PhoneCall className="w-3 h-3 mr-1" /> Contacted
          </Badge>
        );
      case "qualified":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">
            <CheckCircle className="w-3 h-3 mr-1" /> Qualified
          </Badge>
        );
      case "disqualified":
        return (
          <Badge className="bg-red-500 hover:bg-red-600">
            <XCircle className="w-3 h-3 mr-1" /> Disqualified
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lead Management</h1>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => fetchLeads()}
            disabled={loading}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" onClick={exportToCSV}>
            <DownloadIcon className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Input
              placeholder="Search leads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="w-full md:w-48">
          <Select
            value={statusFilter}
            onValueChange={(value) => setStatusFilter(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="disqualified">Disqualified</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-48">
          <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="created_at">Date</SelectItem>
              <SelectItem value="business_name">Business Name</SelectItem>
              <SelectItem value="turnover">Turnover</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-48">
          <Select
            value={sortDirection}
            onValueChange={(value) => setSortDirection(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sort direction" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Descending</SelectItem>
              <SelectItem value="asc">Ascending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableCaption>
            {loading
              ? "Loading leads..."
              : leads.length === 0
                ? "No leads found"
                : `Showing ${leads.length} leads`}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Business</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Business Type</TableHead>
              <TableHead>Monthly Turnover</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow
                key={lead.id}
                className="cursor-pointer hover:bg-gray-50"
              >
                <TableCell className="font-medium">
                  <Link
                    to={`/admin-dashboard/leads/${lead.id}`}
                    className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {lead.business_name}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    to={`/admin-dashboard/leads/${lead.id}`}
                    className="block"
                  >
                    <div>{lead.contact_name}</div>
                    <div className="text-sm text-gray-500">{lead.email}</div>
                    <div className="text-sm text-gray-500">{lead.phone}</div>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    to={`/admin-dashboard/leads/${lead.id}`}
                    className="block"
                  >
                    {lead.business_type}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    to={`/admin-dashboard/leads/${lead.id}`}
                    className="block"
                  >
                    £{lead.turnover}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    to={`/admin-dashboard/leads/${lead.id}`}
                    className="block"
                  >
                    {getStatusBadge(lead.status || "new")}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    to={`/admin-dashboard/leads/${lead.id}`}
                    className="block"
                  >
                    {new Date(lead.created_at || "").toLocaleDateString()}
                  </Link>
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <Select
                    value={lead.status || "new"}
                    onValueChange={(value) =>
                      handleStatusChange(lead.id as number, value)
                    }
                  >
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Change status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="qualified">Qualified</SelectItem>
                      <SelectItem value="disqualified">Disqualified</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
