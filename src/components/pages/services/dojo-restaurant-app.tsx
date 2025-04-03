import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Header from "@/components/ui/header";

export default function DojoRestaurantApp() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Dojo Restaurant Booking App"
        description="Streamline your restaurant operations with Dojo's integrated booking and payment solution. Manage reservations, reduce no-shows, and enhance customer experience."
        keywords="restaurant app, booking app, restaurant payment, table management, restaurant operations, Dojo app"
        ogImage="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { title: "Services", href: "/services" },
                {
                  title: "Dojo Restaurant App",
                  href: "/services/dojo-restaurant-app",
                },
              ]}
            />
          </div>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dojo Restaurant Booking App
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Streamline your restaurant operations with Dojo's integrated
              booking and payment solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                alt="Restaurant booking app on tablet"
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
                      Seamless Booking Management
                    </h3>
                    <p className="text-gray-600">
                      Manage all your reservations in one place with an
                      intuitive interface that reduces double-bookings and
                      maximizes table utilization.
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
                      Integrated Payment Processing
                    </h3>
                    <p className="text-gray-600">
                      Seamlessly connect your booking system with Dojo's payment
                      terminals for a unified customer experience from
                      reservation to payment.
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
                      Customer Relationship Management
                    </h3>
                    <p className="text-gray-600">
                      Build customer profiles with dining preferences,
                      allergies, and visit history to provide personalized
                      service and targeted marketing.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Dojo for Your Restaurant?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Reduce No-Shows</h3>
                <p className="text-gray-600">
                  Automated reminders and deposit options significantly reduce
                  costly no-shows and last-minute cancellations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Increase Revenue</h3>
                <p className="text-gray-600">
                  Optimize table turnover, enable pre-ordering, and implement
                  dynamic pricing for special events or peak times.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Enhance Customer Experience
                </h3>
                <p className="text-gray-600">
                  Provide a seamless booking-to-payment journey with
                  personalized service that keeps customers coming back.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Ready to Transform Your Restaurant Operations?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of restaurants already using Dojo's integrated
              booking and payment solution to streamline operations and enhance
              customer experience.
            </p>
            <Link to="/">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-md">
                Request a Demo
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
                  How does Dojo integrate with my existing POS system?
                </h3>
                <p className="text-gray-600">
                  Dojo's booking app is designed to integrate with most popular
                  restaurant POS systems. Our technical team will assess
                  compatibility during setup and ensure a smooth integration
                  process.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Can customers book directly through my website?
                </h3>
                <p className="text-gray-600">
                  Yes, Dojo provides customizable booking widgets that can be
                  embedded directly into your website, allowing customers to
                  make reservations without leaving your site.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Is there a mobile app for staff to manage bookings?
                </h3>
                <p className="text-gray-600">
                  Yes, Dojo offers both web-based management and mobile apps for
                  iOS and Android, allowing your staff to manage bookings, view
                  table status, and process payments from anywhere in the
                  restaurant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-medium text-white text-lg mb-4">
                Arbor Card Quotes
              </h4>
              <p className="text-sm mb-4">
                Helping businesses find the perfect payment solution since 2024.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-white text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/services/countertop-terminals"
                    className="hover:text-white"
                  >
                    Countertop Terminals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/portable-terminals"
                    className="hover:text-white"
                  >
                    Portable Terminals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/mobile-card-readers"
                    className="hover:text-white"
                  >
                    Mobile Card Readers
                  </Link>
                </li>
                <li>
                  <Link to="/services/pos-systems" className="hover:text-white">
                    POS Systems
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/online-payments"
                    className="hover:text-white"
                  >
                    Online Payments
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/dojo-restaurant-app"
                    className="hover:text-white"
                  >
                    Dojo Restaurant App
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about-us" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/gdpr-compliance" className="hover:text-white">
                    GDPR Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin-dashboard"
                    className="hover:text-white text-xs opacity-50"
                  >
                    Admin Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-800 text-sm">
            <p>
              © {new Date().getFullYear()} Arbor Card Quotes. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
