import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Header from "@/components/ui/header";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Cookie Policy"
        description="Our Cookie Policy explains how Arbor Card Quotes uses cookies and similar technologies on our website, and the choices you have regarding their use."
        keywords="cookie policy, cookies, privacy, website cookies, cookie settings"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { title: "Legal", href: "/legal" },
                { title: "Cookie Policy", href: "/cookie-policy" },
              ]}
            />
          </div>
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-gray-600">Last updated: June 1, 2024</p>
          </div>

          <div className="prose prose-lg max-w-none bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-800">
                This Cookie Policy explains how Arbor Card Quotes Ltd ("we",
                "us", or "our") uses cookies and similar technologies on our
                website. This policy is designed to help you understand what
                cookies are, how we use them, and the choices you have regarding
                their use.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-800">
                Cookies are small text files that are placed on your device when
                you visit a website. They are widely used to make websites work
                more efficiently and provide information to the website owners.
                Cookies can be "persistent" or "session" cookies. Persistent
                cookies remain on your device when you go offline, while session
                cookies are deleted as soon as you close your web browser.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                How We Use Cookies
              </h2>
              <p className="text-gray-800 mb-4">
                We use cookies for several reasons. Some cookies are required
                for technical reasons for our website to operate, while others
                enable us to track and target the interests of our users to
                enhance their experience on our site. The types of cookies we
                use include:
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Essential Cookies
              </h3>
              <p className="text-gray-800">
                These cookies are necessary for the website to function
                properly. They enable basic functions like page navigation and
                access to secure areas of the website. The website cannot
                function properly without these cookies.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Performance Cookies
              </h3>
              <p className="text-gray-800">
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously.
                They help us improve the way our website works.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Functionality Cookies
              </h3>
              <p className="text-gray-800">
                These cookies allow the website to remember choices you make
                (such as your username, language, or the region you are in) and
                provide enhanced, more personal features.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Targeting/Advertising Cookies
              </h3>
              <p className="text-gray-800">
                These cookies are used to deliver advertisements more relevant
                to you and your interests. They are also used to limit the
                number of times you see an advertisement as well as help measure
                the effectiveness of advertising campaigns.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Managing Cookies
              </h2>
              <p className="text-gray-800">
                Most web browsers allow you to control cookies through their
                settings preferences. However, if you limit the ability of
                websites to set cookies, you may worsen your overall user
                experience, as it will no longer be personalized to you. It may
                also stop you from saving customized settings like login
                information.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Changes to This Cookie Policy
              </h2>
              <p className="text-gray-800">
                We may update our Cookie Policy from time to time. We will
                notify you of any changes by posting the new Cookie Policy on
                this page and updating the "Last updated" date at the top of
                this policy.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-800 mb-4">
                If you have any questions about our Cookie Policy, please
                contact us at:
              </p>
              <div className="bg-white p-4 rounded-md border border-gray-200">
                <p className="text-gray-800">
                  Arbor Card Quotes
                  <br />
                  123 Payment Street
                  <br />
                  London, EC1A 1BB
                  <br />
                  United Kingdom
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:privacy@arborcardquotes.com"
                    className="text-blue-600 hover:underline"
                  >
                    privacy@arborcardquotes.com
                  </a>
                  <br />
                  Phone: +44 20 1234 5678
                </p>
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
