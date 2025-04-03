import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
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
                  to="/admin-login"
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
  );
}
