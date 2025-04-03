import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function MobileCardReaders() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Mobile Card Readers"
        description="Perfect for mobile businesses, pop-up shops, and on-the-go entrepreneurs. Compare mobile card reader solutions with competitive rates and no monthly fees."
        keywords="mobile card readers, card payment, payment solutions, mobile payment, smartphone payment, portable payment"
        ogImage="https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=1200&q=80"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { title: "Services", href: "/services" },
                {
                  title: "Mobile Card Readers",
                  href: "/services/mobile-card-readers",
                },
              ]}
            />
          </div>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile Card Readers
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Perfect for mobile businesses, pop-up shops, and on-the-go
              entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=800&q=80"
                alt="Mobile Card Reader"
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
                      Smartphone Connectivity
                    </h3>
                    <p className="text-gray-600">
                      Easily connects to your smartphone or tablet via Bluetooth
                      for seamless payment processing.
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
                      Compact and Portable
                    </h3>
                    <p className="text-gray-600">
                      Lightweight design fits in your pocket, making it perfect
                      for businesses on the move.
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
                      Low Transaction Fees
                    </h3>
                    <p className="text-gray-600">
                      Competitive rates designed specifically for small
                      businesses and entrepreneurs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Our Mobile Card Readers?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">No Monthly Fees</h3>
                <p className="text-gray-600">
                  Pay only for what you use with transparent transaction-based
                  pricing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Simple Setup</h3>
                <p className="text-gray-600">
                  Be ready to accept payments in minutes with our easy-to-use
                  mobile app.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Versatile Acceptance
                </h3>
                <p className="text-gray-600">
                  Accept chip & PIN, contactless, and mobile wallet payments
                  anywhere.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Fill out our quick form to receive personalized quotes for mobile
              card readers tailored to your business needs.
            </p>
            <Link to="/">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-md">
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
                  Do I need a constant internet connection?
                </h3>
                <p className="text-gray-600">
                  While an internet connection is required to process
                  transactions, our mobile readers can store offline
                  transactions and process them once connectivity is restored.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  How quickly will I receive funds?
                </h3>
                <p className="text-gray-600">
                  Most transactions are settled within 1-2 business days, with
                  options for same-day settlement available for qualifying
                  businesses.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Is the mobile app compatible with all devices?
                </h3>
                <p className="text-gray-600">
                  Our mobile app works with most iOS and Android devices. We
                  recommend using devices running iOS 12+ or Android 8+ for
                  optimal performance.
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
