import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  // Handle link clicks to scroll to top of content
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();
    navigate(path);
    // Scroll to top with a slight delay to ensure navigation completes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
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
                <a
                  href="/services/countertop-terminals"
                  className="hover:text-white"
                  onClick={(e) =>
                    handleLinkClick(e, "/services/countertop-terminals")
                  }
                >
                  Countertop Terminals
                </a>
              </li>
              <li>
                <a
                  href="/services/portable-terminals"
                  className="hover:text-white"
                  onClick={(e) =>
                    handleLinkClick(e, "/services/portable-terminals")
                  }
                >
                  Portable Terminals
                </a>
              </li>
              <li>
                <a
                  href="/services/mobile-card-readers"
                  className="hover:text-white"
                  onClick={(e) =>
                    handleLinkClick(e, "/services/mobile-card-readers")
                  }
                >
                  Mobile Card Readers
                </a>
              </li>
              <li>
                <a
                  href="/services/pos-systems"
                  className="hover:text-white"
                  onClick={(e) => handleLinkClick(e, "/services/pos-systems")}
                >
                  POS Systems
                </a>
              </li>
              <li>
                <a
                  href="/services/online-payments"
                  className="hover:text-white"
                  onClick={(e) =>
                    handleLinkClick(e, "/services/online-payments")
                  }
                >
                  Online Payments
                </a>
              </li>
              <li>
                <a
                  href="/services/dojo-restaurant-app"
                  className="hover:text-white"
                  onClick={(e) =>
                    handleLinkClick(e, "/services/dojo-restaurant-app")
                  }
                >
                  Dojo Restaurant App
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about-us"
                  className="hover:text-white"
                  onClick={(e) => handleLinkClick(e, "/about-us")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-white"
                  onClick={(e) => handleLinkClick(e, "/blog")}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-white"
                  onClick={(e) => handleLinkClick(e, "/contact-us")}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white"
                  onClick={(e) => handleLinkClick(e, "/privacy-policy")}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-white"
                  onClick={(e) => handleLinkClick(e, "/terms-of-service")}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="hover:text-white"
                  onClick={(e) => handleLinkClick(e, "/cookie-policy")}
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/gdpr-compliance"
                  className="hover:text-white"
                  onClick={(e) => handleLinkClick(e, "/gdpr-compliance")}
                >
                  GDPR Compliance
                </a>
              </li>
              <li>
                <a
                  href="/admin-login"
                  className="hover:text-white text-xs opacity-50"
                  onClick={(e) => handleLinkClick(e, "/admin-login")}
                >
                  Admin Login
                </a>
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
