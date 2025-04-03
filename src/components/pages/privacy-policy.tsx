import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Privacy Policy"
        description="Our Privacy Policy explains how we collect, use, and protect your personal information when you use Arbor Card Quotes services."
        keywords="privacy policy, data protection, personal information, GDPR, data security"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { title: "Legal", href: "/legal" },
                { title: "Privacy Policy", href: "/privacy-policy" },
              ]}
            />
          </div>
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: June 1, 2024</p>
          </div>

          <div className="prose prose-lg max-w-none bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-800">
                At Arbor Card Quotes, we take your privacy seriously. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services. Please read this privacy policy carefully. If you do
                not agree with the terms of this privacy policy, please do not
                access the site.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-800 mb-4">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
                <li>
                  Fill out forms on our website, including the quote request
                  form
                </li>
                <li>Correspond with us by phone, email, or other means</li>
                <li>Create an account or profile</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Participate in surveys, contests, or promotions</li>
              </ul>

              <p className="text-gray-800 mb-4">
                The types of information we may collect include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>
                  Personal identifiers (name, email address, phone number,
                  postal address)
                </li>
                <li>
                  Business information (business name, industry, annual
                  turnover)
                </li>
                <li>Payment processing requirements and preferences</li>
                <li>Communications and correspondence with us</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Automatically Collected Information
              </h2>
              <p className="text-gray-800 mb-4">
                When you visit our website, we may automatically collect certain
                information about your device and usage patterns, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>IP address and browser type</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on those pages</li>
                <li>Referral sources</li>
                <li>Device information (such as device ID and type)</li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-800 mb-4">
                We may use the information we collect for various purposes,
                including to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Provide, maintain, and improve our services</li>
                <li>
                  Process your requests for quotes and connect you with payment
                  solution providers
                </li>
                <li>
                  Communicate with you about our services, promotions, and
                  events
                </li>
                <li>Respond to your comments, questions, and requests</li>
                <li>
                  Monitor and analyze trends, usage, and activities in
                  connection with our services
                </li>
                <li>
                  Detect, investigate, and prevent fraudulent transactions and
                  other illegal activities
                </li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Sharing Your Information
              </h2>
              <p className="text-gray-800 mb-4">
                We may share your personal information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>
                  Payment solution providers to fulfill your quote requests
                </li>
                <li>Service providers who perform services on our behalf</li>
                <li>
                  Professional advisors, such as lawyers, auditors, and insurers
                </li>
                <li>Government bodies when required by law</li>
                <li>
                  In connection with, or during negotiations of, any merger,
                  sale of company assets, financing, or acquisition
                </li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Your Rights and Choices
              </h2>
              <p className="text-gray-800 mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>

              <p className="text-gray-800">
                To exercise these rights, please contact us using the details
                provided at the end of this policy.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Cookies and Similar Technologies
              </h2>
              <p className="text-gray-800">
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. Cookies
                are files with a small amount of data which may include an
                anonymous unique identifier. You can instruct your browser to
                refuse all cookies or to indicate when a cookie is being sent.
                However, if you do not accept cookies, you may not be able to
                use some portions of our site.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Data Security
              </h2>
              <p className="text-gray-800">
                We have implemented appropriate technical and organizational
                security measures designed to protect the security of any
                personal information we process. However, please also remember
                that we cannot guarantee that the internet itself is 100%
                secure. Although we will do our best to protect your personal
                information, transmission of personal information to and from
                our website is at your own risk.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Third-Party Websites
              </h2>
              <p className="text-gray-800">
                Our website may contain links to other websites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that third party's site. We strongly advise you to
                review the Privacy Policy of every site you visit. We have no
                control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party sites or
                services.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-800">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date at the top of
                this Privacy Policy. You are advised to review this Privacy
                Policy periodically for any changes.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-800 mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>By email: privacy@arborcardquotes.com</li>
                <li>
                  By mail: 167-169 Great Portland Street, 5th Floor, London, W1W
                  5PF
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
