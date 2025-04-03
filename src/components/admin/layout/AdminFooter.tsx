import React from "react";
import { Link } from "react-router-dom";

export default function AdminFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Arbor Card Quotes. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/privacy-policy"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact-us"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
