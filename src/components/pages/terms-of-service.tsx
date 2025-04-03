import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Header from "@/components/ui/header";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Terms of Service"
        description="Our Terms of Service outline the conditions for using Arbor Card Quotes services, including your rights and responsibilities when using our platform."
        keywords="terms of service, legal terms, conditions, payment solutions, business terms"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { title: "Legal", href: "/legal" },
                { title: "Terms of Service", href: "/terms-of-service" },
              ]}
            />
          </div>
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-600">Last updated: June 1, 2024</p>
          </div>

          <div className="prose prose-lg max-w-none bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-800">
                Please read these Terms of Service ("Terms", "Terms of Service")
                carefully before using the Arbor Card Quotes website (the
                "Service") operated by Arbor Card Quotes ("us", "we", or "our").
              </p>
              <p className="text-gray-800 mt-4">
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users, and others who access or use the
                Service.
              </p>
              <p className="text-gray-800 mt-4 font-medium">
                By accessing or using the Service you agree to be bound by these
                Terms. If you disagree with any part of the terms, then you may
                not access the Service.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                1. Services
              </h2>
              <p className="text-gray-800 mb-4">
                Arbor Card Quotes provides a comparison service for businesses
                seeking card payment solutions. We connect businesses with
                payment providers based on the information provided through our
                quote request form. Our service is free to use for businesses
                seeking quotes.
              </p>
              <p className="text-gray-800">
                We do not provide payment processing services directly. We act
                as an intermediary between businesses and payment providers. The
                contractual relationship for payment services will be between
                you and the payment provider you select.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                2. Quote Requests
              </h2>
              <p className="text-gray-800 mb-4">
                When you submit a quote request through our website, you agree
                to provide accurate, current, and complete information about
                your business. You acknowledge that the quotes you receive will
                be based on the information you provide, and inaccurate
                information may result in unsuitable recommendations.
              </p>
              <p className="text-gray-800">
                By submitting a quote request, you consent to being contacted by
                us and/or our partner payment providers regarding your request.
                This contact may be via email, telephone, or other means you
                have provided.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                3. User Accounts
              </h2>
              <p className="text-gray-800 mb-4">
                When you create an account with us, you must provide information
                that is accurate, complete, and current at all times. Failure to
                do so constitutes a breach of the Terms, which may result in
                immediate termination of your account on our Service.
              </p>
              <p className="text-gray-800">
                You are responsible for safeguarding the password that you use
                to access the Service and for any activities or actions under
                your password. You agree not to disclose your password to any
                third party. You must notify us immediately upon becoming aware
                of any breach of security or unauthorized use of your account.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-800">
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                Arbor Card Quotes and its licensors. The Service is protected by
                copyright, trademark, and other laws of both the United Kingdom
                and foreign countries. Our trademarks and trade dress may not be
                used in connection with any product or service without the prior
                written consent of Arbor Card Quotes.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                5. Links To Other Web Sites
              </h2>
              <p className="text-gray-800 mb-4">
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Arbor Card Quotes.
              </p>
              <p className="text-gray-800 mb-4">
                Arbor Card Quotes has no control over, and assumes no
                responsibility for, the content, privacy policies, or practices
                of any third-party web sites or services. You further
                acknowledge and agree that Arbor Card Quotes shall not be
                responsible or liable, directly or indirectly, for any damage or
                loss caused or alleged to be caused by or in connection with the
                use of or reliance on any such content, goods, or services
                available on or through any such web sites or services.
              </p>
              <p className="text-gray-800">
                We strongly advise you to read the terms and conditions and
                privacy policies of any third-party web sites or services that
                you visit.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                6. Termination
              </h2>
              <p className="text-gray-800 mb-4">
                We may terminate or suspend your account immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms.
              </p>
              <p className="text-gray-800">
                Upon termination, your right to use the Service will immediately
                cease. If you wish to terminate your account, you may simply
                discontinue using the Service.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                7. Limitation Of Liability
              </h2>
              <p className="text-gray-800">
                In no event shall Arbor Card Quotes, nor its directors,
                employees, partners, agents, suppliers, or affiliates, be liable
                for any indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from (i)
                your access to or use of or inability to access or use the
                Service; (ii) any conduct or content of any third party on the
                Service; (iii) any content obtained from the Service; and (iv)
                unauthorized access, use or alteration of your transmissions or
                content, whether based on warranty, contract, tort (including
                negligence) or any other legal theory, whether or not we have
                been informed of the possibility of such damage.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                8. Disclaimer
              </h2>
              <p className="text-gray-800 mb-4">
                Your use of the Service is at your sole risk. The Service is
                provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
                provided without warranties of any kind, whether express or
                implied, including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement or course of performance.
              </p>
              <p className="text-gray-800">
                Arbor Card Quotes does not warrant that a) the Service will
                function uninterrupted, secure or available at any particular
                time or location; b) any errors or defects will be corrected; c)
                the Service is free of viruses or other harmful components; or
                d) the results of using the Service will meet your requirements.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                9. Governing Law
              </h2>
              <p className="text-gray-800 mb-4">
                These Terms shall be governed and construed in accordance with
                the laws of the United Kingdom, without regard to its conflict
                of law provisions.
              </p>
              <p className="text-gray-800">
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights. If any
                provision of these Terms is held to be invalid or unenforceable
                by a court, the remaining provisions of these Terms will remain
                in effect. These Terms constitute the entire agreement between
                us regarding our Service, and supersede and replace any prior
                agreements we might have between us regarding the Service.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                10. Changes
              </h2>
              <p className="text-gray-800 mb-4">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days' notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
              <p className="text-gray-800">
                By continuing to access or use our Service after those revisions
                become effective, you agree to be bound by the revised terms. If
                you do not agree to the new terms, please stop using the
                Service.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-800 mb-4">
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <div className="bg-white p-4 rounded-md border border-gray-200">
                <p className="text-gray-800">
                  Arbor Card Quotes
                  <br />
                  167-169 Great Portland Street, 5th Floor
                  <br />
                  London, W1W 5PF
                  <br />
                  United Kingdom
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:legal@arborcardquotes.com"
                    className="text-blue-600 hover:underline"
                  >
                    legal@arborcardquotes.com
                  </a>
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
