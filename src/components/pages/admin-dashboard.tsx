import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const adminLoggedIn = localStorage.getItem("adminLoggedIn");
    if (adminLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple authentication check
    if (email === "ibbysj@gmail.com" && password === "12345567") {
      setIsLoggedIn(true);
      localStorage.setItem("adminLoggedIn", "true");
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("adminLoggedIn");
  };

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
            {isLoggedIn && (
              <Button
                onClick={handleLogout}
                className="rounded-full bg-red-600 text-white hover:bg-red-700 text-sm px-4"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
              <h1 className="text-2xl font-bold mb-6 text-center">
                Admin Login
              </h1>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors"
                >
                  Login
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
              <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  Welcome to the Admin Dashboard
                </h2>
                <p className="text-gray-600 mb-4">
                  From here you can manage leads, update website content, and
                  view analytics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">
                      Lead Management
                    </h3>
                    <p className="text-gray-600 mb-4">
                      View and manage all incoming quote requests.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      View Leads
                    </Button>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">
                      Content Management
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Update website content and service information.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Edit Content
                    </Button>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Analytics</h3>
                    <p className="text-gray-600 mb-4">
                      View website traffic and conversion metrics.
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      View Analytics
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
