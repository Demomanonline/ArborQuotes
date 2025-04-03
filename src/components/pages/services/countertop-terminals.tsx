import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function CountertopTerminals() {
  const navigate = useNavigate();

  // Handle link clicks to scroll to top of content or specific element
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    elementId?: string,
  ) => {
    e.preventDefault();
    navigate(path);
    // Scroll to element or top with a slight delay to ensure navigation completes
    setTimeout(() => {
      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Countertop Terminals"
        description="Perfect for retail stores, restaurants, and businesses with a fixed point of sale. Compare countertop terminal solutions with fast transaction processing and reliable connectivity."
        keywords="countertop terminals, card payment, payment solutions, card terminals, payment processing, POS integration"
        ogImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { title: "Services", href: "/services" },
                {
                  title: "Countertop Terminals",
                  href: "/services/countertop-terminals",
                },
              ]}
            />
          </div>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Countertop Terminals
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Perfect for retail stores, restaurants, and businesses with a
              fixed point of sale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Countertop Terminal"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 mr-3 mt-0.5"
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
                      Fast Transaction Processing
                    </h3>
                    <p className="text-gray-600">
                      Process payments quickly with our high-speed terminals,
                      reducing customer wait times.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 mr-3 mt-0.5"
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
                      Reliable Connectivity
                    </h3>
                    <p className="text-gray-600">
                      Stay connected with multiple connectivity options
                      including Ethernet, Wi-Fi, and 4G backup.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 mr-3 mt-0.5"
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
                      Multiple Payment Methods
                    </h3>
                    <p className="text-gray-600">
                      Accept all major payment types including chip & PIN,
                      contactless, mobile wallets, and more.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Our Countertop Terminals?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Easy Integration</h3>
                <p className="text-gray-600">
                  Seamlessly connect with your existing POS system or use as a
                  standalone solution.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Secure Payments</h3>
                <p className="text-gray-600">
                  Advanced encryption and fraud prevention features to protect
                  your business and customers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock technical assistance and rapid replacement
                  service if issues arise.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Fill out our quick form to receive personalized quotes for
              countertop terminals tailored to your business needs.
            </p>
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, "/", "hero-form")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow"
            >
              Request a Quote
            </a>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  How long does installation take?
                </h3>
                <p className="text-gray-600">
                  Most countertop terminals can be set up in under 30 minutes.
                  Our team will guide you through the process and ensure
                  everything is working correctly before leaving.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Can I accept international payments?
                </h3>
                <p className="text-gray-600">
                  Yes, our terminals support multi-currency processing and can
                  accept payments from international cards, making them ideal
                  for businesses with international customers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  What happens if my internet goes down?
                </h3>
                <p className="text-gray-600">
                  Our terminals include offline processing capabilities,
                  allowing you to continue accepting payments even during
                  internet outages. Transactions are stored securely and
                  processed once connectivity is restored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
