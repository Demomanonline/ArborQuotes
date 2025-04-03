import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-blue-600 text-white backdrop-blur-md border-b border-blue-700/30">
      <div className="max-w-[1200px] mx-auto flex h-12 items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="font-medium text-xl text-white">
            Arbor Card Quotes
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button className="rounded-full bg-black text-white hover:bg-gray-800 text-sm px-4 shadow">
                Home
              </Button>
            </Link>
            <Link to="/about-us">
              <Button className="rounded-full bg-black text-white hover:bg-gray-800 text-sm px-4 shadow">
                About Us
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button className="rounded-full bg-black text-white hover:bg-gray-800 text-sm px-4 shadow">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
