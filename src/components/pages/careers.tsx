import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Careers() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Join our team and help businesses find the perfect payment
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team working together"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
              <p className="text-gray-600 mb-4">
                At Arbor Card Quotes, we're passionate about helping businesses
                navigate the complex world of payment processing. We're looking
                for talented individuals who share our commitment to providing
                exceptional service and innovative solutions.
              </p>
              <p className="text-gray-600 mb-4">
                We offer a dynamic work environment, competitive compensation,
                and opportunities for professional growth. Our team is
                collaborative, supportive, and dedicated to making a difference
                for our clients.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Competitive Benefits
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive health insurance, retirement plans, and
                      generous paid time off.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Growth Opportunities
                    </h3>
                    <p className="text-gray-600">
                      Continuous learning, professional development, and clear
                      paths for advancement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Collaborative Culture
                    </h3>
                    <p className="text-gray-600">
                      Work with talented professionals in a supportive and
                      inclusive environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Payment Solutions Specialist
                    </h3>
                    <p className="text-gray-600">London, UK (Hybrid)</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  We're looking for a knowledgeable Payment Solutions Specialist
                  to help our clients find the perfect payment processing
                  solutions for their businesses. You'll provide expert advice,
                  compare options, and ensure clients receive the best possible
                  service.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Apply Now
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Business Development Manager
                    </h3>
                    <p className="text-gray-600">Manchester, UK</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Join our growing team as a Business Development Manager
                  responsible for building relationships with payment providers
                  and expanding our network of partners. You'll play a key role
                  in growing our business and enhancing our service offerings.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Apply Now
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Customer Success Representative
                    </h3>
                    <p className="text-gray-600">Remote (UK-based)</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Part-time
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  We're seeking a dedicated Customer Success Representative to
                  ensure our clients have an exceptional experience with our
                  service. You'll provide support, follow up on leads, and help
                  maintain high levels of customer satisfaction.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Apply Now
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Digital Marketing Specialist
                    </h3>
                    <p className="text-gray-600">London, UK (Hybrid)</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Full-time
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Join our marketing team to develop and implement digital
                  strategies that drive lead generation and brand awareness.
                  You'll manage our online presence, create compelling content,
                  and analyze campaign performance.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-16 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Don't See the Right Fit?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              We're always looking for talented individuals to join our team.
              Send us your CV and let us know how you can contribute to our
              mission.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md">
              Submit Your CV
            </Button>
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
