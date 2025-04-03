import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Blog() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Stay updated with the latest news, insights, and tips about
              payment processing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&q=80"
                alt="POS System"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">Payment Solutions</p>
                <h3 className="text-xl font-bold mb-2">
                  How to Choose the Right POS System for Your Business
                </h3>
                <p className="text-gray-600 mb-4">
                  Selecting the perfect point-of-sale system can significantly
                  impact your business operations and customer experience...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">June 12, 2023</span>
                  <Link
                    to="/blog/pos-system-guide"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Countertop Terminal"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-green-600 mb-2">Industry Trends</p>
                <h3 className="text-xl font-bold mb-2">
                  The Rise of Contactless Payments: What You Need to Know
                </h3>
                <p className="text-gray-600 mb-4">
                  Contactless payment adoption has accelerated dramatically in
                  recent years. Learn how this trend affects your business...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">May 28, 2023</span>
                  <Link
                    to="/blog/contactless-payments"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                alt="Online Payments"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-purple-600 mb-2">Security</p>
                <h3 className="text-xl font-bold mb-2">
                  5 Ways to Enhance Payment Security for Your E-commerce Store
                </h3>
                <p className="text-gray-600 mb-4">
                  Protecting your customers' payment information is crucial for
                  building trust and maintaining compliance...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">April 15, 2023</span>
                  <Link
                    to="/blog/payment-security"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&q=80"
                alt="Portable Terminal"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-orange-600 mb-2">Tips & Advice</p>
                <h3 className="text-xl font-bold mb-2">
                  Reducing Payment Processing Fees: Strategies for Small
                  Businesses
                </h3>
                <p className="text-gray-600 mb-4">
                  Transaction fees can add up quickly. Discover practical ways
                  to minimize these costs without compromising service
                  quality...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">March 22, 2023</span>
                  <Link
                    to="/blog/reducing-fees"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=800&q=80"
                alt="Mobile Card Reader"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-red-600 mb-2">Case Study</p>
                <h3 className="text-xl font-bold mb-2">
                  How a London Café Increased Sales by 30% with Mobile Payment
                  Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Read about how The Coffee Corner revolutionized their customer
                  experience and boosted revenue with portable payment
                  terminals...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    February 8, 2023
                  </span>
                  <Link
                    to="/blog/cafe-case-study"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"
                alt="Payment Technology"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">Future Tech</p>
                <h3 className="text-xl font-bold mb-2">
                  The Future of Payments: Emerging Technologies to Watch
                </h3>
                <p className="text-gray-600 mb-4">
                  From biometric authentication to blockchain-based
                  transactions, explore the innovations shaping the future of
                  payment processing...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    January 17, 2023
                  </span>
                  <Link
                    to="/blog/future-payment-tech"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Load More Articles
            </Button>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600">
                Get the latest payment industry news, tips, and updates
                delivered directly to your inbox.
              </p>
            </div>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                Subscribe
              </Button>
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
                Helping businesses find the perfect payment solution since 2018.
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
