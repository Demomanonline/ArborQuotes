import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function PosSystems() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <SEO
        title="POS Systems"
        description="Complete point-of-sale solutions for businesses that need inventory and customer management."
        keywords="POS systems, point of sale, inventory management, customer database, retail solutions"
      />

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <Breadcrumb
            items={[
              { title: "Services", href: "/services" },
              { title: "POS Systems", href: "/services/pos-systems" },
            ]}
            className="mb-6"
          />
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">POS Systems</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Complete point-of-sale solutions for businesses that need
              inventory and customer management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1647427017067-8f33ccbae493?w=800&q=80"
                alt="POS System"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500 mr-3 mt-0.5"
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
                  <div>
                    <h3 className="font-semibold text-lg">
                      Inventory Management
                    </h3>
                    <p className="text-gray-600">
                      Track stock levels, set automatic reordering, and manage
                      suppliers all in one place.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500 mr-3 mt-0.5"
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
                  <div>
                    <h3 className="font-semibold text-lg">Customer Database</h3>
                    <p className="text-gray-600">
                      Build customer profiles, track purchase history, and
                      implement loyalty programs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500 mr-3 mt-0.5"
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
                  <div>
                    <h3 className="font-semibold text-lg">
                      Advanced Reporting
                    </h3>
                    <p className="text-gray-600">
                      Gain insights with detailed sales analytics, employee
                      performance tracking, and financial reports.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Our POS Systems?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  All-in-One Solution
                </h3>
                <p className="text-gray-600">
                  Manage payments, inventory, customers, and reporting in a
                  single integrated platform.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Customizable Interface
                </h3>
                <p className="text-gray-600">
                  Tailor the system to your specific business needs with
                  customizable layouts and features.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Cloud-Based Access
                </h3>
                <p className="text-gray-600">
                  Monitor your business from anywhere with secure cloud-based
                  access to your data.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Fill out our quick form to receive personalized quotes for POS
              systems tailored to your business needs.
            </p>
            <Link to="/">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-md">
                Request a Quote
              </Button>
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Can I integrate with my existing systems?
                </h3>
                <p className="text-gray-600">
                  Yes, our POS systems integrate with most popular accounting
                  software, e-commerce platforms, and third-party applications
                  through our open API.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  How much training is required?
                </h3>
                <p className="text-gray-600">
                  We provide comprehensive training for all staff levels. Most
                  businesses are fully operational within 1-2 days, with ongoing
                  support available as needed.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  What happens during a power outage?
                </h3>
                <p className="text-gray-600">
                  Our systems include offline mode capabilities and automatic
                  data backup. When power is restored, all data synchronizes
                  automatically to ensure business continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
