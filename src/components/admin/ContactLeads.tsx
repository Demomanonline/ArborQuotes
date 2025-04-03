import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  created_at: string;
  subject?: string;
};

export default function ContactLeads() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      // Get contacts from localStorage or use sample data
      const storedContacts = localStorage.getItem("contactLeads");
      const parsedContacts = storedContacts ? JSON.parse(storedContacts) : [];

      // Combine stored contacts with sample data
      const sampleContacts = [
        {
          id: 1,
          name: "John Smith",
          email: "john.smith@example.com",
          phone: "07700 900123",
          message:
            "I'm interested in learning more about your countertop terminals for my retail store.",
          status: "new",
          created_at: "2023-10-15T14:30:00",
        },
        {
          id: 2,
          name: "Sarah Johnson",
          email: "sarah.j@coffeeheaven.co.uk",
          phone: "07700 900456",
          message:
            "We're opening a new coffee shop and need a complete payment solution including mobile and countertop options.",
          status: "contacted",
          created_at: "2023-10-14T09:15:00",
        },
        {
          id: 3,
          name: "Michael Brown",
          email: "m.brown@restaurantgroup.com",
          phone: "07700 900789",
          message:
            "Looking for information about your restaurant POS systems and integrated payment solutions.",
          status: "qualified",
          created_at: "2023-10-12T16:45:00",
        },
        {
          id: 4,
          name: "Emma Wilson",
          email: "emma@wilsonbakery.com",
          phone: "07700 900234",
          message:
            "Need a portable payment terminal for our bakery with multiple locations.",
          status: "closed",
          created_at: "2023-10-10T11:20:00",
        },
        {
          id: 5,
          name: "David Lee",
          email: "david.lee@techstartup.io",
          phone: "07700 900567",
          message:
            "Interested in online payment gateway options for our e-commerce platform.",
          status: "new",
          created_at: "2023-10-09T13:50:00",
        },
      ];

      // Use stored contacts if available, otherwise use sample data
      setContacts(
        parsedContacts.length > 0
          ? [...parsedContacts, ...sampleContacts]
          : sampleContacts,
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast({
        title: "Error",
        description: "Failed to load contact leads. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const updateContactStatus = (id: number, newStatus: string) => {
    try {
      // Update local state only since we're not using Supabase in this demo
      setContacts(
        contacts.map((contact) =>
          contact.id === id ? { ...contact, status: newStatus } : contact,
        ),
      );

      toast({
        title: "Status Updated",
        description: `Contact status has been updated to ${newStatus}`,
      });
    } catch (error) {
      console.error("Error updating contact status:", error);
      toast({
        title: "Error",
        description: "Failed to update contact status. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-500">New</Badge>;
      case "contacted":
        return <Badge className="bg-yellow-500">Contacted</Badge>;
      case "qualified":
        return <Badge className="bg-green-500">Qualified</Badge>;
      case "closed":
        return <Badge className="bg-gray-500">Closed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const filteredContacts = contacts.filter((contact) => {
    // Apply status filter
    if (filter !== "all" && contact.status !== filter) return false;

    // Apply search filter
    if (searchTerm === "") return true;

    const searchLower = searchTerm.toLowerCase();
    return (
      contact.name?.toLowerCase().includes(searchLower) ||
      contact.email?.toLowerCase().includes(searchLower) ||
      contact.phone?.toLowerCase().includes(searchLower) ||
      contact.message?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contact Leads</h2>
        <Button onClick={fetchContacts}>Refresh</Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>Contact Inquiries</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <div>
                <Input
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-[200px]"
                />
              </div>
              <div>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="h-9 w-full sm:w-[150px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {searchTerm || filter !== "all" ? (
                <p>No contacts match your search criteria.</p>
              ) : (
                <p>No contact leads found.</p>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-medium">{contact.name}</h3>
                      <div className="text-sm text-gray-500">
                        {formatDate(contact.created_at)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(contact.status)}
                      <select
                        value={contact.status}
                        onChange={(e) =>
                          updateContactStatus(contact.id, e.target.value)
                        }
                        className="h-8 rounded-md border border-input bg-background px-2 py-1 text-xs shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                    <div>
                      <span className="text-xs font-medium text-gray-500">
                        Email:
                      </span>{" "}
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500">
                        Phone:
                      </span>{" "}
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-700">{contact.message}</p>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        navigate(`/admin-dashboard/contacts/${contact.id}`)
                      }
                    >
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Send Email
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
