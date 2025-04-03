import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase/supabase";
import { Tables } from "@/types/supabase";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  PhoneCall,
  XCircle,
  Mail,
  Phone,
} from "lucide-react";
import { LoadingScreen } from "../ui/loading-spinner";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Lead = Tables<"leads">;

export default function LeadDetails() {
  const { leadId } = useParams<{ leadId: string }>();
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchLead = async () => {
      if (!leadId) return;

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("leads")
          .select("*")
          .eq("id", leadId)
          .single();

        if (error) {
          throw error;
        }

        setLead(data);
      } catch (error) {
        console.error("Error fetching lead:", error);
        toast({
          title: "Error",
          description: "Failed to fetch lead details. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLead();
  }, [leadId, toast]);

  const handleStatusChange = async (newStatus: string) => {
    if (!lead) return;

    try {
      const { error } = await supabase
        .from("leads")
        .update({ status: newStatus })
        .eq("id", lead.id);

      if (error) throw error;

      setLead({ ...lead, status: newStatus });

      toast({
        title: "Status Updated",
        description: `Lead status has been updated to ${newStatus}`,
      });
    } catch (error) {
      console.error("Error updating lead status:", error);
      toast({
        title: "Error",
        description: "Failed to update lead status. Please try again.",
        variant: "destructive",
      });
    }
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

  if (loading) {
    return <LoadingScreen text="Loading lead details..." />;
  }

  if (!lead) {
    return (
      <div>
        <Button
          variant="outline"
          onClick={() => navigate("/admin-dashboard/leads")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Lead Management
        </Button>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-10">
              <h2 className="text-xl font-semibold mb-2">Lead Not Found</h2>
              <p className="text-gray-500">
                The lead you're looking for doesn't exist or has been removed.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="outline"
          onClick={() => navigate("/admin-dashboard/leads")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Lead Management
        </Button>

        <div className="flex items-center gap-4">
          <Select
            value={lead.status || "new"}
            onValueChange={handleStatusChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Change status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="disqualified">Disqualified</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center">
            <Mail className="h-4 w-4 mr-2" /> Email Lead
          </Button>

          <Button variant="outline" className="flex items-center">
            <Phone className="h-4 w-4 mr-2" /> Call Lead
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{lead.business_name}</span>
                {getStatusBadge(lead.status || "new")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Business Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Type</p>
                      <p>{lead.business_type || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Monthly Turnover
                      </p>
                      <p>£{lead.turnover}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Address
                      </p>
                      <p>{lead.address || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Current Provider
                      </p>
                      <p>{lead.current_provider || "Not specified"}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p>{lead.contact_name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p>
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-blue-600 hover:underline flex items-center"
                        >
                          {lead.email}
                          <Mail className="h-3 w-3 ml-1" />
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p>
                        <a
                          href={`tel:${lead.phone}`}
                          className="text-blue-600 hover:underline flex items-center"
                        >
                          {lead.phone}
                          <Phone className="h-3 w-3 ml-1" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Technical Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        EPOS Provider
                      </p>
                      <p>{lead.epos_provider || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Uses EPOS Integration
                      </p>
                      <p>
                        {lead.uses_epos_integration === true
                          ? "Yes"
                          : lead.uses_epos_integration === false
                            ? "No"
                            : "Not specified"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Uses Booking App
                      </p>
                      <p>
                        {lead.uses_booking_app === true
                          ? "Yes"
                          : lead.uses_booking_app === false
                            ? "No"
                            : "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lead Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Created</p>
                  <p>
                    {lead.created_at
                      ? new Date(lead.created_at).toLocaleString()
                      : "Unknown"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Last Updated
                  </p>
                  <p>
                    {lead.updated_at
                      ? new Date(lead.updated_at).toLocaleString()
                      : "Not updated yet"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lead Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full" variant="outline">
                  Add Note
                </Button>
                <Button className="w-full" variant="outline">
                  Schedule Follow-up
                </Button>
                <Button className="w-full" variant="outline">
                  Send Quote
                </Button>
                <Button className="w-full" variant="outline">
                  Assign to Team Member
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
