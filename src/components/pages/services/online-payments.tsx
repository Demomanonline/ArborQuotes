import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function OnlinePayments() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <SEO
        title="Online Payments"
        description="Secure, reliable payment processing solutions for e-commerce and online businesses."
        keywords="online payments, e-commerce, payment processing, payment gateway, online business"
      />

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <Breadcrumb
            items={[
              { title: "Services", href: "/services" },
              { title: "Online Payments", href: "/services/online-payments" },
            ]}
            className="mb-6"
          />
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Online Payments
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Secure, reliable payment processing solutions for e-commerce and
              online businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                alt="Online Payments"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mr-3 mt-0.5"
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
                      Seamless Integration
                    </h3>
                    <p className="text-gray-600">
                      Easy integration with all major e-commerce platforms and
                      custom websites.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mr-3 mt-0.5"
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
                      Advanced Fraud Protection
                    </h3>
                    <p className="text-gray-600">
                      Sophisticated fraud detection and prevention tools to
                      secure your transactions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mr-3 mt-0.5"
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
                      Global Payment Options
                    </h3>
                    <p className="text-gray-600">
                      Accept payments in multiple currencies with support for
                      international customers.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Our Online Payment Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">PCI Compliance</h3>
                <p className="text-gray-600">
                  Fully compliant with the latest Payment Card Industry Data
                  Security Standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Subscription Management
                </h3>
                <p className="text-gray-600">
                  Easily set up and manage recurring billing and subscription
                  services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Developer-Friendly
                </h3>
                <p className="text-gray-600">
                  Comprehensive API documentation and developer tools for custom
                  implementations.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Fill out our quick form to receive personalized quotes for online
              payment solutions tailored to your business needs.
            </p>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md">
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
                  How long does integration take?
                </h3>
                <p className="text-gray-600">
                  Basic integration can be completed in as little as a few
                  hours. More complex implementations typically take 1-3 days,
                  depending on your platform and requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  What are the transaction fees?
                </h3>
                <p className="text-gray-600">
                  We offer competitive rates based on your business volume and
                  industry. Our transparent pricing model ensures you know
                  exactly what you're paying with no hidden fees.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  How do refunds work?
                </h3>
                <p className="text-gray-600">
                  Our platform makes it easy to process full or partial refunds
                  through our merchant dashboard. Refunds can be processed up to
                  180 days after the original transaction.
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
