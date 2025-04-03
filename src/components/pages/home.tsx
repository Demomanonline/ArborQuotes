import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SEO } from "@/components/ui/seo";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronRight,
  CreditCard,
  Settings,
  Smartphone,
  TabletSmartphone,
  Terminal,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../supabase/auth";
import { Input } from "../ui/input";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { supabase } from "../../../supabase/supabase";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";

type FormData = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  turnover: string;
  address: string;
  businessType: string;
};

type ExtendedFormData = FormData & {
  currentProvider: string;
  eposProvider: string;
  usesEposIntegration: boolean;
  usesBookingApp: boolean;
};

export default function LandingPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Handle link clicks to scroll to top of content
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();
    navigate(path);
    // Scroll to top with a slight delay to ensure navigation completes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const [formData, setFormData] = useState<ExtendedFormData>({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    turnover: "",
    address: "",
    currentProvider: "",
    businessType: "",
    eposProvider: "",
    usesEposIntegration: false,
    usesBookingApp: false,
  });

  const [showExtendedFields, setShowExtendedFields] = useState(false);

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showExtendedForm, setShowExtendedForm] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user types
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const errors: Partial<FormData> = {};

    if (!formData.businessName.trim())
      errors.businessName = "Business name is required";
    if (!formData.contactName.trim())
      errors.contactName = "Contact name is required";

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9\s\-\+\(\)]{10,15}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!formData.turnover.trim())
      errors.turnover = "Annual turnover is required";

    if (showExtendedFields) {
      if (!formData.address.trim()) {
        errors.address = "Business address is required";
      } else if (
        !/^.+([A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2})$/i.test(
          formData.address,
        )
      ) {
        errors.address = "Please include a valid UK postcode (e.g. AB12 3CD)";
      }
      if (!formData.businessType.trim())
        errors.businessType = "Business type is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const [isOffline, setIsOffline] = useState(false);
  const [offlineSubmissions, setOfflineSubmissions] = useState<
    ExtendedFormData[]
  >(() => {
    // Load any stored offline submissions from localStorage on component mount
    const storedSubmissions = localStorage.getItem("offlineLeadSubmissions");
    return storedSubmissions ? JSON.parse(storedSubmissions) : [];
  });

  // Check connection status on component mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        // First check navigator.onLine as a quick check
        if (!navigator.onLine) {
          setIsOffline(true);
          return;
        }

        // Then try to ping Supabase
        const response = await fetch(import.meta.env.VITE_SUPABASE_URL || "", {
          method: "HEAD",
          timeout: 5000,
        });
        setIsOffline(!response.ok);
      } catch (error) {
        console.log("Connection check failed:", error);
        setIsOffline(true);
      }
    };

    checkConnection();

    // Set up interval to periodically check connection
    const intervalId = setInterval(checkConnection, 30000); // Check every 30 seconds

    // Also listen for online/offline events
    const handleOnline = () => {
      checkConnection(); // Verify connection when online event fires
      // Try to submit any stored offline submissions
      trySubmitOfflineData();
    };
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Function to try submitting offline data when connection is restored
  const trySubmitOfflineData = async () => {
    const storedSubmissions = localStorage.getItem("offlineLeadSubmissions");
    if (!storedSubmissions) return;

    const submissions: ExtendedFormData[] = JSON.parse(storedSubmissions);
    if (submissions.length === 0) return;

    // Check if we're online
    try {
      const response = await fetch(import.meta.env.VITE_SUPABASE_URL || "", {
        method: "HEAD",
        timeout: 5000,
      });

      if (!response.ok) return; // Still offline

      // We're online, try to submit using the edge function for better reliability
      try {
        // First try to use the edge function
        const { data, error } = await supabase.functions.invoke(
          "sync-offline-data",
          {
            body: { offlineData: submissions },
          },
        );

        if (!error && data?.success) {
          // Clear all submissions as they've been processed by the edge function
          localStorage.removeItem("offlineLeadSubmissions");
          localStorage.removeItem("hasPendingLeadSubmissions");
          setOfflineSubmissions([]);
          return;
        }
      } catch (edgeFunctionError) {
        console.error(
          "Edge function error, falling back to direct submission:",
          edgeFunctionError,
        );
        // Fall back to direct submission if edge function fails
      }

      // Fallback: We're online, try to submit each stored submission directly
      let successCount = 0;

      for (const formData of submissions) {
        try {
          // Create the lead object
          const leadData = {
            business_name: formData.businessName,
            contact_name: formData.contactName,
            email: formData.email,
            phone: formData.phone,
            turnover: formData.turnover,
            address: formData.address || null,
            current_provider: formData.currentProvider || null,
            business_type: formData.businessType || null,
            epos_provider: formData.eposProvider || null,
            uses_epos_integration: formData.usesEposIntegration || false,
            uses_booking_app: formData.usesBookingApp || false,
            status: "new",
          };

          const { error } = await supabase.from("leads").insert([leadData]);

          if (!error) successCount++;
        } catch (error) {
          console.error("Error submitting stored form:", error);
        }
      }

      if (successCount > 0) {
        // Update the stored submissions
        const remainingSubmissions = submissions.slice(successCount);
        localStorage.setItem(
          "offlineLeadSubmissions",
          JSON.stringify(remainingSubmissions),
        );
        setOfflineSubmissions(remainingSubmissions);

        // Update the flag in localStorage
        if (remainingSubmissions.length === 0) {
          localStorage.removeItem("hasPendingLeadSubmissions");
        }
      }
    } catch (error) {
      console.error("Error checking connection:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Create the lead object
      const leadData = {
        business_name: formData.businessName,
        contact_name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        turnover: formData.turnover,
        address: formData.address || null,
        current_provider: formData.currentProvider || null,
        business_type: formData.businessType || null,
        epos_provider: formData.eposProvider || null,
        uses_epos_integration: formData.usesEposIntegration || false,
        uses_booking_app: formData.usesBookingApp || false,
        status: "new",
      };

      // Check if we're offline or if Supabase is unreachable
      let connectionError = false;

      if (!isOffline) {
        try {
          // Try to submit to Supabase
          console.log("Submitting form data:", formData);
          const { data, error } = await supabase
            .from("leads")
            .insert([leadData])
            .select();

          if (error) {
            console.error("Error submitting form:", error);
            // Check if it's a connection error
            if (
              error?.message?.includes("Failed to fetch") ||
              error?.code === "NETWORK_ERROR" ||
              error?.message?.includes("ERR_NAME_NOT_RESOLVED")
            ) {
              connectionError = true;
            } else {
              throw error;
            }
          }
        } catch (error: any) {
          console.error("Submission error:", error);
          // Check if it's a connection error
          if (
            error?.message?.includes("Failed to fetch") ||
            error?.code === "NETWORK_ERROR" ||
            error?.message?.includes("ERR_NAME_NOT_RESOLVED")
          ) {
            connectionError = true;
          } else {
            throw error;
          }
        }
      }

      // If we're offline or had a connection error, store the submission locally
      if (isOffline || connectionError) {
        // Store the form data in localStorage for later submission
        const updatedSubmissions = [...offlineSubmissions, formData];
        setOfflineSubmissions(updatedSubmissions);
        localStorage.setItem(
          "offlineLeadSubmissions",
          JSON.stringify(updatedSubmissions),
        );

        // Set a flag in localStorage to indicate there are pending submissions
        localStorage.setItem("hasPendingLeadSubmissions", "true");

        // Set offline flag to true if it wasn't already
        if (!isOffline) setIsOffline(true);
      }

      // Show success state
      setIsSuccess(true);
      setShowExtendedFields(false);

      // Scroll to top of form with a slight delay to ensure UI updates
      setTimeout(() => {
        const formElement = document.getElementById("hero-form");
        if (formElement) {
          // Adjust scroll position to account for header height
          const headerHeight = 80; // Approximate header height
          const formRect = formElement.getBoundingClientRect();
          const absoluteFormTop =
            window.pageYOffset + formRect.top - headerHeight;
          window.scrollTo({ top: absoluteFormTop, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);

      // Reset form after 8 seconds
      setTimeout(() => {
        setFormData({
          businessName: "",
          contactName: "",
          email: "",
          phone: "",
          turnover: "",
          address: "",
          currentProvider: "",
          businessType: "",
          eposProvider: "",
          usesEposIntegration: false,
          usesBookingApp: false,
        });
        setIsSuccess(false);
      }, 8000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const showMoreFields = () => {
    // Validate the basic form fields first
    const errors: Partial<FormData> = {};

    if (!formData.businessName.trim())
      errors.businessName = "Business name is required";
    if (!formData.contactName.trim())
      errors.contactName = "Contact name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9\s\-\+\(\)]{10,15}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!formData.turnover.trim())
      errors.turnover = "Annual turnover is required";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setShowExtendedFields(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Get Fast Card Payment Solutions for Your Business"
        description="Find the perfect payment solution tailored to your business needs. Get competitive quotes from top providers in minutes and save up to 40% on fees."
        keywords="card payment, payment solutions, card terminals, payment processing, card readers, POS systems, countertop terminals, mobile card readers"
        ogImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
      />
      <Header />

      <main className="pt-12">
        {/* Hero section with quote form */}
        <section
          className="py-20 bg-gradient-to-b from-blue-50 to-white"
          style={{
            backgroundImage: "url('/images/coffee-shop.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-blue-900">
                Get Fast Card Payment Solutions for Your Business
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Find the perfect payment solution tailored to your business
                needs. Get competitive quotes from the UKs largest provider in
                minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">No obligation quotes</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">Save up to 40% on fees</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg" id="hero-form">
              {isSuccess ? (
                <div className="text-center py-12 mt-4">
                  <div
                    className={`h-16 w-16 ${isOffline ? "bg-yellow-100" : "bg-green-100"} rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce`}
                  >
                    {isOffline ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-yellow-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                  {isOffline ? (
                    <div>
                      <p className="text-gray-600 mb-4">
                        Your quote request has been saved locally. It will be
                        submitted automatically when your connection is
                        restored.
                      </p>
                      <p className="text-yellow-600 text-sm mb-4">
                        Note: We're currently experiencing connection issues.
                        Please check your internet connection or try again
                        later.
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-600 mb-4">
                      Your quote request has been submitted successfully. One of
                      our specialists will contact you within 24 hours.
                    </p>
                  )}
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Request Another Quote
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-4">
                    Get Your Free Quote Today
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Business Name
                      </label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className={
                          formErrors.businessName ? "border-red-500" : ""
                        }
                        placeholder="Your business name"
                      />
                      {formErrors.businessName && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.businessName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Contact Name
                      </label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className={
                          formErrors.contactName ? "border-red-500" : ""
                        }
                        placeholder="Your full name"
                      />
                      {formErrors.contactName && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.contactName}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={formErrors.email ? "border-red-500" : ""}
                          placeholder="you@example.com"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={formErrors.phone ? "border-red-500" : ""}
                          placeholder="Your phone number"
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="turnover"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Annual Card Turnover
                      </label>
                      <select
                        id="turnover"
                        name="turnover"
                        value={formData.turnover}
                        onChange={handleInputChange}
                        className={`flex h-10 w-full rounded-md border ${formErrors.turnover ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                      >
                        <option value="">Select Annual Card Turnover</option>
                        <option value="1000-5000">£1,000 - £5,000</option>
                        <option value="5001-10000">£5,001 - £10,000</option>
                        <option value="10001-25000">£10,001 - £25,000</option>
                        <option value="25001-50000">£25,001 - £50,000</option>
                        <option value="50001-100000">£50,001 - £100,000</option>
                        <option value="100001-250000">
                          £100,001 - £250,000
                        </option>
                        <option value="250001-500000">
                          £250,001 - £500,000
                        </option>
                        <option value="500001+">£500,001+</option>
                      </select>
                      {formErrors.turnover && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.turnover}
                        </p>
                      )}
                    </div>

                    {showExtendedFields && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Business Address (including UK Postcode)
                            </label>
                            <Input
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className={
                                formErrors.address ? "border-red-500" : ""
                              }
                              placeholder="123 Business St, London, AB12 3CD"
                              required
                            />
                            {formErrors.address && (
                              <p className="text-red-500 text-xs mt-1">
                                {formErrors.address}
                              </p>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="currentProvider"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Current Provider (if any)
                            </label>
                            <select
                              id="currentProvider"
                              name="currentProvider"
                              value={formData.currentProvider}
                              onChange={handleInputChange}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <option value="">
                                Select current provider (if any)
                              </option>
                              <option value="Worldpay">Worldpay</option>
                              <option value="Teya">Teya</option>
                              <option value="Zettle">Zettle</option>
                              <option value="Paymentsave">Paymentsave</option>
                              <option value="AIB">AIB</option>
                              <option value="Paymentsense">Paymentsense</option>
                              <option value="Barclaycard">Barclaycard</option>
                              <option value="Sumup">Sumup</option>
                              <option value="Square">Square</option>
                              <option value="Lloydscardnet">
                                Lloydscardnet
                              </option>
                              <option value="Takepayments">Takepayments</option>
                              <option value="RMS">RMS</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="businessType"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Business Type
                          </label>
                          <select
                            id="businessType"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleInputChange}
                            className={`flex h-10 w-full rounded-md border ${formErrors.businessType ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                            required
                          >
                            <option value="">Select business type</option>
                            <option value="retail">Retail</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="cafe">Café</option>
                            <option value="bar">Bar</option>
                            <option value="hotel">Hotel</option>
                            <option value="salon">Salon/Spa</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="professional">
                              Professional Services
                            </option>
                            <option value="other">Other</option>
                          </select>
                          {formErrors.businessType && (
                            <p className="text-red-500 text-xs mt-1">
                              {formErrors.businessType}
                            </p>
                          )}
                        </div>

                        {formData.businessType === "restaurant" && (
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="usesBookingApp"
                              name="usesBookingApp"
                              checked={formData.usesBookingApp}
                              onChange={handleInputChange}
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label
                              htmlFor="usesBookingApp"
                              className="text-sm font-medium text-gray-700"
                            >
                              Do you use a booking app?
                            </label>
                          </div>
                        )}

                        <div>
                          <label
                            htmlFor="eposProvider"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            EPOS Provider (if any)
                          </label>
                          <Input
                            id="eposProvider"
                            name="eposProvider"
                            value={formData.eposProvider}
                            onChange={handleInputChange}
                            placeholder="e.g. Lightspeed, Square"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="usesEposIntegration"
                            name="usesEposIntegration"
                            checked={formData.usesEposIntegration}
                            onChange={handleInputChange}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <label
                            htmlFor="usesEposIntegration"
                            className="text-sm font-medium text-gray-700"
                          >
                            Do you use integration for your EPOS?
                          </label>
                        </div>
                      </>
                    )}

                    {!showExtendedFields ? (
                      <Button
                        type="button"
                        onClick={showMoreFields}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors"
                      >
                        Get My Free Quote
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors"
                      >
                        {isSubmitting
                          ? "Processing..."
                          : "Submit Quote Request"}
                      </Button>
                    )}

                    <p className="text-xs text-gray-500 text-center mt-2">
                      By submitting this form, you agree to our{" "}
                      <a
                        href="/terms-of-service"
                        className="text-blue-600 hover:underline"
                        onClick={(e) => handleLinkClick(e, "/terms-of-service")}
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy-policy"
                        className="text-blue-600 hover:underline"
                        onClick={(e) => handleLinkClick(e, "/privacy-policy")}
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Service Comparison section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Payment Solutions for Every Business
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get the most comprehensive card payment solutions to find the
                perfect fit for your business needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Countertop Terminals */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Terminal className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Countertop Terminals
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for retail stores, restaurants, and businesses with
                    a fixed point of sale.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">
                        Fast transaction processing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Reliable connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Multiple payment methods</span>
                    </li>
                  </ul>
                  <a
                    href="/services/countertop-terminals"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow h-9 px-4 py-2 w-full bg-blue-600 hover:bg-blue-700"
                    onClick={(e) =>
                      handleLinkClick(e, "/services/countertop-terminals")
                    }
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Portable Terminals */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <TabletSmartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Portable Terminals
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ideal for restaurants, cafes, and businesses that need
                    flexibility within premises.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Wireless connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Long battery life</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Table-side payments</span>
                    </li>
                  </ul>
                  <a
                    href="/services/portable-terminals"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow h-9 px-4 py-2 w-full bg-purple-600 hover:bg-purple-700"
                    onClick={(e) =>
                      handleLinkClick(e, "/services/portable-terminals")
                    }
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Mobile Readers */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mobile Readers</h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for mobile businesses, pop-up shops, and on-the-go
                    entrepreneurs.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Smartphone connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Compact and portable</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Low transaction fees</span>
                    </li>
                  </ul>
                  <a
                    href="/services/mobile-card-readers"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow h-9 px-4 py-2 w-full bg-green-600 hover:bg-green-700"
                    onClick={(e) =>
                      handleLinkClick(e, "/services/mobile-card-readers")
                    }
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* POS Systems */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">POS Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Complete point-of-sale solutions for businesses stock and
                    management
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Inventory management</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Customer database</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">Advanced reporting</span>
                    </li>
                  </ul>
                  <a
                    href="/services/pos-systems"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow h-9 px-4 py-2 w-full bg-orange-600 hover:bg-orange-700"
                    onClick={(e) => handleLinkClick(e, "/services/pos-systems")}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Arbor Card Quotes?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We help thousands of businesses find the right payment solution
                every month.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Save Money</h3>
                <p className="text-gray-600">
                  Our comparison service helps businesses save up to 40% on
                  their card processing fees by finding the most competitive
                  rates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Trusted Providers
                </h3>
                <p className="text-gray-600">
                  We only work Dojo the UK's largest and most reputable payment
                  provider who offer reliable service, excellent customer
                  support, and secure transactions at competitive rates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-14 w-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
                <p className="text-gray-600">
                  Get a single straightforward quote with just one application.
                  Our process is quick and straightforward, saving you time and
                  hassle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about our card payment comparison
                service.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-2xl">
                  Is there a fee for using your service?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    No, our comparison service is completely free to use. Our
                    partner pays us so you don't have to.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-2xl">
                  How long does it take to receive quotes?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Our team will reach out to you via email or telephone to
                    discuss your requirement in detail. Our team works quickly
                    to match you with suitable solution, and you can expect to
                    get an offer within 1-2 business days.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-2xl">
                  What types of businesses do you work with?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    We work with businesses of all sizes and across all
                    industries. Whether you're a small retail shop, a
                    restaurant, an e-commerce store, or a large enterprise, we
                    can help you find the right payment solution for your
                    specific needs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-2xl">
                  Can I switch from my current payment provider?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Yes, many businesses use our service to find better rates
                    than their current provider. When you receive quotes, you
                    can compare them against your current rates to see how much
                    you could save. If you decide to switch, the new provider
                    will help manage the transition process to ensure minimal
                    disruption to your business.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-2xl">
                  What information do I need to provide?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    To get accurate quotes, we need some basic information about
                    your business, including your business name, contact
                    details, and approximate annual card turnover. The more
                    information you provide, the more tailored the quotes will
                    be to your specific needs.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-[900px] mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Payment Solution?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of businesses who have found the right payment
              solution through Arbor Card Quotes.
            </p>
            <Button
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-md"
              onClick={() =>
                document
                  .getElementById("hero-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Your Free Quote Now
            </Button>
          </div>
        </section>
      </main>

      {/* Removed dialog as requested */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
