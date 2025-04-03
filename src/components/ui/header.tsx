import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

// Keep default export for backward compatibility
export default Header;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-blue-600 text-white backdrop-blur-md border-b border-blue-700/30">
      <div className="max-w-[1200px] mx-auto flex h-14 md:h-12 items-center justify-between px-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="font-medium text-lg md:text-xl text-white whitespace-nowrap"
          >
            Arbor Card Quotes
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            onClick={toggleMenu}
            variant="ghost"
            className="p-1 text-white hover:bg-blue-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4">
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
            <Link to="/">
              <Button className="rounded-full bg-green-600 text-white hover:bg-green-700 text-sm px-4 shadow">
                GET A QUOTE
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link to="/" onClick={toggleMenu}>
              <Button className="w-full rounded-full bg-black text-white hover:bg-gray-800 text-sm px-4 shadow">
                Home
              </Button>
            </Link>
            <Link to="/about-us" onClick={toggleMenu}>
              <Button className="w-full rounded-full bg-black text-white hover:bg-gray-800 text-sm px-4 shadow">
                About Us
              </Button>
            </Link>
            <Link to="/contact-us" onClick={toggleMenu}>
              <Button className="w-full rounded-full bg-black text-white hover:bg-gray-800 text-sm px-4 shadow">
                Contact Us
              </Button>
            </Link>
            <Link to="/" onClick={toggleMenu}>
              <Button className="w-full rounded-full bg-green-600 text-white hover:bg-green-700 text-sm px-4 shadow">
                GET A QUOTE
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
