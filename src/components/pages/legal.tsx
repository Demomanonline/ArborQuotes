import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { ChevronRight } from "lucide-react";

export default function Legal() {
  const legalPages = [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
      description:
        "Learn how we collect, use, and protect your personal information.",
    },
    {
      title: "Terms of Service",
      href: "/terms-of-service",
      description:
        "Understand the conditions for using our services and platform.",
    },
    {
      title: "Cookie Policy",
      href: "/cookie-policy",
      description:
        "Information about how we use cookies and similar technologies.",
    },
    {
      title: "GDPR Compliance",
      href: "/gdpr-compliance",
      description:
        "Details about our compliance with EU data protection regulations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Legal Information"
        description="Access all legal documents and policies for Arbor Card Quotes, including Privacy Policy, Terms of Service, Cookie Policy, and GDPR Compliance information."
        keywords="legal, privacy policy, terms of service, cookie policy, GDPR, data protection"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb items={[{ title: "Legal", href: "/legal" }]} />
          </div>
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Legal Information</h1>
            <p className="text-gray-600">
              Access all legal documents and policies for Arbor Card Quotes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {legalPages.map((page, index) => (
              <Link
                key={page.href}
                to={page.href}
                className={`block hover:bg-blue-50 transition-colors ${index !== legalPages.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-blue-700 mb-2">
                      {page.title}
                    </h2>
                    <p className="text-gray-600">{page.description}</p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
