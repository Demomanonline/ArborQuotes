import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase, checkSupabaseConnection } from "../../../supabase/supabase";

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  created_at: string;
  subject?: string;
  notes?: string;
};

export default function ContactDetail() {
  const { contactId } = useParams<{ contactId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("new");
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState<Contact | null>(null);
  const [connectionStatus, setConnectionStatus] = useState(true);

  useEffect(() => {
    // Check connection status and fetch contact data on component mount
    const fetchContactData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check connection to Supabase
        const isConnected = await checkSupabaseConnection();
        setConnectionStatus(isConnected);

        if (!isConnected) {
          toast({
            title: "Connection Issue",
            description: "Unable to connect to the database.",
            variant: "destructive",
          });
          setLoading(false);
          setError("Database connection error. Please try again later.");
          return;
        }

        if (!contactId) {
          setError("Contact ID is missing");
          setLoading(false);
          return;
        }

        // Fetch contact data from Supabase
        const { data, error } = await supabase
          .from("contact_leads")
          .select("*")
          .eq("id", contactId)
          .single();

        if (error) {
          console.error("Error fetching contact:", error);
          setError("Failed to load contact details. Please try again.");
          setLoading(false);
          return;
        }

        if (!data) {
          setError("Contact not found");
          setLoading(false);
          return;
        }

        // Set contact data
        setContact(data);
        setEditedContact(data);
        setNotes(data.notes || "");
        setStatus(data.status || "new");
        setLoading(false);
      } catch (err) {
        console.error("Error in fetchContactData:", err);
        setError("An unexpected error occurred. Please try again.");
        setLoading(false);
      }
    };

    fetchContactData();
  }, [contactId, toast]);

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

  const handleStatusChange = async (newStatus: string) => {
    if (!contact) return;

    try {
      setStatus(newStatus);

      // Update in Supabase if connected
      if (connectionStatus) {
        const { error } = await supabase
          .from("contact_leads")
          .update({ status: newStatus })
          .eq("id", contact.id);

        if (error) {
          console.error("Error updating status in Supabase:", error);
          toast({
            title: "Update Error",
            description:
              "Failed to update status in database. Changes saved locally only.",
            variant: "destructive",
          });
        }
      }

      // Update local state
      setContact({ ...contact, status: newStatus });

      toast({
        title: "Status Updated",
        description: `Contact status has been updated to ${newStatus}`,
      });
    } catch (err) {
      console.error("Error in handleStatusChange:", err);
      toast({
        title: "Error",
        description: "Failed to update status. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSaveNotes = async () => {
    if (!contact) return;

    try {
      // Update in Supabase if connected
      if (connectionStatus) {
        const { error } = await supabase
          .from("contact_leads")
          .update({ notes })
          .eq("id", contact.id);

        if (error) {
          console.error("Error saving notes in Supabase:", error);
          toast({
            title: "Save Error",
            description:
              "Failed to save notes in database. Changes saved locally only.",
            variant: "destructive",
          });
        }
      }

      // Update local state
      setContact({ ...contact, notes });

      toast({
        title: "Notes Saved",
        description: "Contact notes have been updated successfully",
      });
    } catch (err) {
      console.error("Error in handleSaveNotes:", err);
      toast({
        title: "Error",
        description: "Failed to save notes. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEditToggle = async () => {
    if (!contact || !editedContact) return;

    if (isEditing) {
      try {
        // Update in Supabase if connected
        if (connectionStatus) {
          const { error } = await supabase
            .from("contact_leads")
            .update({
              name: editedContact.name,
              email: editedContact.email,
              phone: editedContact.phone,
              message: editedContact.message,
            })
            .eq("id", contact.id);

          if (error) {
            console.error("Error updating contact in Supabase:", error);
            toast({
              title: "Update Error",
              description:
                "Failed to update contact in database. Changes saved locally only.",
              variant: "destructive",
            });
          }
        }

        // Update local state
        setContact(editedContact);

        toast({
          title: "Contact Updated",
          description: "Contact information has been updated successfully",
        });
      } catch (err) {
        console.error("Error in handleEditToggle:", err);
        toast({
          title: "Error",
          description: "Failed to update contact. Please try again.",
          variant: "destructive",
        });
      }
    }

    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editedContact) return;

    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleSendEmail = () => {
    toast({
      title: "Email Sent",
      description: `An email has been sent to ${contact.email}`,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Contact Details</h2>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8 text-gray-500">
              <p className="text-red-500">{error}</p>
              <Button className="mt-4" onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Contact Details</h2>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8 text-gray-500">
              <p>
                Contact not found. This contact may have been deleted or does
                not exist.
              </p>
              <Button className="mt-4" onClick={() => navigate(-1)}>
                Return to Contacts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contact Details</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button onClick={handleEditToggle}>
            {isEditing ? "Save Changes" : "Edit Contact"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={editedContact.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={editedContact.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={editedContact.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={editedContact.message}
                      onChange={(e) =>
                        editedContact &&
                        setEditedContact({
                          ...editedContact,
                          message: e.target.value,
                        })
                      }
                      rows={4}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Name
                      </h3>
                      <p className="mt-1">{contact.name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Status
                      </h3>
                      <div className="mt-1 flex items-center gap-2">
                        {getStatusBadge(contact.status)}
                        <select
                          value={status}
                          onChange={(e) => handleStatusChange(e.target.value)}
                          className="h-8 rounded-md border border-input bg-background px-2 py-1 text-xs shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Email
                      </h3>
                      <p className="mt-1">
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {contact.email}
                        </a>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Phone
                      </h3>
                      <p className="mt-1">
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-blue-600 hover:underline"
                        >
                          {contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Submitted On
                    </h3>
                    <p className="mt-1">{formatDate(contact.created_at)}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Message
                    </h3>
                    <p className="mt-1 text-gray-700 whitespace-pre-wrap">
                      {contact.message}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Add notes about this contact..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="mb-4"
              />
              <Button onClick={handleSaveNotes}>Save Notes</Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button
                  className="w-full justify-start"
                  onClick={handleSendEmail}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Email
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Contact
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Schedule Follow-up
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Create Quote
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Activity History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-gray-300 pl-4 py-1">
                  <p className="text-sm font-medium">Contact Created</p>
                  <p className="text-xs text-gray-500">
                    {formatDate(contact.created_at)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
