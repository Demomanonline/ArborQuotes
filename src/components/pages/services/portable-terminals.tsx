import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function PortableTerminals() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <SEO
        title="Portable Terminals"
        description="Ideal for restaurants, cafes, and businesses that need flexibility within premises."
        keywords="portable terminals, wireless payment, restaurant payment, cafe payment solutions"
      />

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <Breadcrumb
            items={[
              { title: "Services", href: "/services" },
              {
                title: "Portable Terminals",
                href: "/services/portable-terminals",
              },
            ]}
            className="mb-6"
          />
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Portable Terminals
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Ideal for restaurants, cafes, and businesses that need flexibility
              within premises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556742231-77da025371f5?w=800&q=80"
                alt="Portable Card Terminal"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500 mr-3 mt-0.5"
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
                      Wireless Connectivity
                    </h3>
                    <p className="text-gray-600">
                      Move freely around your premises with reliable Wi-Fi and
                      4G connectivity options.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500 mr-3 mt-0.5"
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
                    <h3 className="font-semibold text-lg">Long Battery Life</h3>
                    <p className="text-gray-600">
                      All-day operation with fast-charging capabilities to keep
                      your business running smoothly.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500 mr-3 mt-0.5"
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
                      Table-side Payments
                    </h3>
                    <p className="text-gray-600">
                      Enhance customer experience by bringing the payment
                      process directly to their table.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Our Portable Terminals?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Improved Customer Experience
                </h3>
                <p className="text-gray-600">
                  Reduce wait times and enhance service by processing payments
                  at the customer's location.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Durable Design</h3>
                <p className="text-gray-600">
                  Built to withstand the demands of busy environments with
                  drop-resistant casing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Integrated Tipping
                </h3>
                <p className="text-gray-600">
                  Customizable tipping options to increase staff gratuities and
                  customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Fill out our quick form to receive personalized quotes for
              portable terminals tailored to your business needs.
            </p>
            <Link to="/">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-md">
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
                  How long does the battery last?
                </h3>
                <p className="text-gray-600">
                  Our portable terminals typically last 8-12 hours on a single
                  charge, depending on usage. They also feature fast charging
                  capabilities, reaching 80% battery in just 30 minutes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  What happens if I lose connectivity?
                </h3>
                <p className="text-gray-600">
                  Our terminals feature offline mode capabilities, allowing you
                  to continue processing transactions even when temporarily
                  disconnected. Transactions are securely stored and processed
                  once connectivity is restored.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Can I customize the receipt?
                </h3>
                <p className="text-gray-600">
                  Yes, you can fully customize digital and printed receipts with
                  your business logo, contact information, and promotional
                  messages.
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
