import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function OurPartners() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-[rgba(255,255,255,0.8)] backdrop-blur-md border-b border-[#f5f5f7]/30">
        <div className="max-w-[1200px] mx-auto flex h-12 items-center justify-between px-4">
          <div className="flex items-center">
            <Link to="/" className="font-medium text-xl">
              Arbor Card Quotes
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button
                variant="ghost"
                className="text-sm font-light hover:text-gray-500"
              >
                Home
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button className="rounded-full bg-black text-white hover:bg-gray-800 text-sm px-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              We work with the UK's leading payment providers to bring you the
              best solutions for your business.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              Payment Processing Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">
                    WorldPay
                  </div>
                  <p className="text-sm text-gray-500">Global Payment Leader</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">Stripe</div>
                  <p className="text-sm text-gray-500">
                    Online Payment Specialist
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">SumUp</div>
                  <p className="text-sm text-gray-500">Mobile Payment Expert</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">iZettle</div>
                  <p className="text-sm text-gray-500">
                    Small Business Solution
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">
                    Barclaycard
                  </div>
                  <p className="text-sm text-gray-500">
                    Trusted Banking Partner
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">Square</div>
                  <p className="text-sm text-gray-500">
                    Integrated POS Solutions
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">PayPal</div>
                  <p className="text-sm text-gray-500">
                    Online Payment Pioneer
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">
                    Sage Pay
                  </div>
                  <p className="text-sm text-gray-500">
                    Business Integration Expert
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Why We Partner with the Best
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  We only work with established, reputable payment providers
                  with proven track records of reliability and security.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Competitive Rates
                </h3>
                <p className="text-gray-600">
                  Our partnerships allow us to negotiate better rates for our
                  customers than they could get directly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">
                  Diverse Solutions
                </h3>
                <p className="text-gray-600">
                  With multiple partners, we can offer solutions for every
                  business type, size, and industry requirement.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Technology Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">Shopify</div>
                  <p className="text-sm text-gray-500">E-commerce Platform</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">
                    WooCommerce
                  </div>
                  <p className="text-sm text-gray-500">WordPress Integration</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">Magento</div>
                  <p className="text-sm text-gray-500">Enterprise E-commerce</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">Xero</div>
                  <p className="text-sm text-gray-500">Accounting Software</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">
                    QuickBooks
                  </div>
                  <p className="text-sm text-gray-500">Financial Management</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-800">
                    Salesforce
                  </div>
                  <p className="text-sm text-gray-500">CRM Integration</p>
                </div>
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
                  <Link to="/our-partners" className="hover:text-white">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white">
                    Careers
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
