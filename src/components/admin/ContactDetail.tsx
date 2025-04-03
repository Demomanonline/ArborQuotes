import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  notes?: string;
};

export default function ContactDetail() {
  const { contactId } = useParams<{ contactId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Sample data for the contact
  const [contact, setContact] = useState<Contact>({
    id: parseInt(contactId || "1"),
    name:
      contactId === "1"
        ? "John Smith"
        : contactId === "2"
          ? "Sarah Johnson"
          : contactId === "3"
            ? "Michael Brown"
            : contactId === "4"
              ? "Emma Wilson"
              : "David Lee",
    email:
      contactId === "1"
        ? "john.smith@example.com"
        : contactId === "2"
          ? "sarah.j@coffeeheaven.co.uk"
          : contactId === "3"
            ? "m.brown@restaurantgroup.com"
            : contactId === "4"
              ? "emma@wilsonbakery.com"
              : "david.lee@techstartup.io",
    phone:
      contactId === "1"
        ? "07700 900123"
        : contactId === "2"
          ? "07700 900456"
          : contactId === "3"
            ? "07700 900789"
            : contactId === "4"
              ? "07700 900234"
              : "07700 900567",
    message:
      contactId === "1"
        ? "I'm interested in learning more about your countertop terminals for my retail store."
        : contactId === "2"
          ? "We're opening a new coffee shop and need a complete payment solution including mobile and countertop options."
          : contactId === "3"
            ? "Looking for information about your restaurant POS systems and integrated payment solutions."
            : contactId === "4"
              ? "Need a portable payment terminal for our bakery with multiple locations."
              : "Interested in online payment gateway options for our e-commerce platform.",
    status:
      contactId === "1"
        ? "new"
        : contactId === "2"
          ? "contacted"
          : contactId === "3"
            ? "qualified"
            : contactId === "4"
              ? "closed"
              : "new",
    created_at:
      contactId === "1"
        ? "2023-10-15T14:30:00"
        : contactId === "2"
          ? "2023-10-14T09:15:00"
          : contactId === "3"
            ? "2023-10-12T16:45:00"
            : contactId === "4"
              ? "2023-10-10T11:20:00"
              : "2023-10-09T13:50:00",
    notes: "",
  });

  const [notes, setNotes] = useState(contact.notes || "");
  const [status, setStatus] = useState(contact.status);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(contact);

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

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    setContact({ ...contact, status: newStatus });
    toast({
      title: "Status Updated",
      description: `Contact status has been updated to ${newStatus}`,
    });
  };

  const handleSaveNotes = () => {
    setContact({ ...contact, notes });
    toast({
      title: "Notes Saved",
      description: "Contact notes have been updated successfully",
    });
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setContact(editedContact);
      toast({
        title: "Contact Updated",
        description: "Contact information has been updated successfully",
      });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleSendEmail = () => {
    toast({
      title: "Email Sent",
      description: `An email has been sent to ${contact.email}`,
    });
  };

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
                <div className="border-l-2 border-blue-500 pl-4 py-1">
                  <p className="text-sm font-medium">
                    Status Changed to {contact.status}
                  </p>
                  <p className="text-xs text-gray-500">Today at 10:30 AM</p>
                </div>
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
