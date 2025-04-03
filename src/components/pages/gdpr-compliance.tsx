import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";

export default function GdprCompliance() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="GDPR Compliance"
        description="Our GDPR Compliance statement explains how we comply with the General Data Protection Regulation and outlines your rights under this regulation."
        keywords="GDPR, data protection, privacy, data rights, personal data, compliance"
      />
      {/* Apple-style navigation */}
      <header className="fixed top-0 z-50 w-full bg-blue-600 text-white backdrop-blur-md border-b border-blue-700/30">
        <div className="max-w-[1200px] mx-auto flex h-12 items-center justify-between px-4">
          <div className="flex items-center">
            <Link to="/" className="font-medium text-xl text-white">
              Arbor Card Quotes
            </Link>
          </div>
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
              <Button className="rounded-full bg-black text-white hover:bg-gray-800 text-sm px-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { title: "Legal", href: "/legal" },
                { title: "GDPR Compliance", href: "/gdpr-compliance" },
              ]}
            />
          </div>
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">GDPR Compliance</h1>
            <p className="text-gray-600">Last updated: June 1, 2023</p>
          </div>

          <div className="prose prose-lg max-w-none bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-800">
                At Arbor Card Quotes Ltd, we are committed to protecting and
                respecting your privacy. This GDPR Compliance statement explains
                how we comply with the General Data Protection Regulation (GDPR)
                and outlines your rights under this regulation.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Our Commitment to GDPR
              </h2>
              <p className="text-gray-800">
                We have implemented appropriate technical and organizational
                measures to ensure that data protection is built into our
                business processes. We only collect and process personal data
                when necessary and ensure that it is handled securely and in
                accordance with the GDPR principles.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Data Protection Principles
              </h2>
              <p className="text-gray-800 mb-4">
                Under GDPR, we adhere to the following principles when
                processing personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Lawfulness, fairness, and transparency</li>
                <li>Purpose limitation</li>
                <li>Data minimization</li>
                <li>Accuracy</li>
                <li>Storage limitation</li>
                <li>Integrity and confidentiality</li>
                <li>Accountability</li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Your Rights Under GDPR
              </h2>
              <p className="text-gray-800 mb-4">
                The GDPR provides you with several rights regarding your
                personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>The right to be informed about how your data is used</li>
                <li>The right of access to your personal data</li>
                <li>
                  The right to rectification if your data is inaccurate or
                  incomplete
                </li>
                <li>The right to erasure ("right to be forgotten")</li>
                <li>The right to restrict processing of your data</li>
                <li>The right to data portability</li>
                <li>The right to object to the processing of your data</li>
                <li>
                  Rights related to automated decision making and profiling
                </li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                How to Exercise Your Rights
              </h2>
              <p className="text-gray-800">
                If you wish to exercise any of these rights, please contact our
                Data Protection Officer at{" "}
                <a
                  href="mailto:privacy@arborcardquotes.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@arborcardquotes.com
                </a>
                . We will respond to your request within one month of receipt.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Data Breaches
              </h2>
              <p className="text-gray-800">
                We have procedures in place to detect, report, and investigate
                personal data breaches. In the event of a breach that is likely
                to result in a risk to your rights and freedoms, we will notify
                the relevant supervisory authority within 72 hours of becoming
                aware of it, and you will be notified without undue delay.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                International Transfers
              </h2>
              <p className="text-gray-800">
                If we transfer your personal data outside the European Economic
                Area (EEA), we ensure that appropriate safeguards are in place
                to protect your data, such as Standard Contractual Clauses
                approved by the European Commission.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-800">
                If you have any questions about our GDPR compliance or how we
                handle your personal data, please contact our Data Protection
                Officer at{" "}
                <a
                  href="mailto:privacy@arborcardquotes.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@arborcardquotes.com
                </a>
                .
              </p>
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
