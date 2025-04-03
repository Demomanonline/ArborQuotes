import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="About Us"
        description="Learn about Arbor Card Quotes, helping businesses find the perfect payment solution since 2024. Our mission, values, and commitment to transparent advice."
        keywords="about us, payment solutions, card payment, payment processing, transparent advice"
        ogImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb items={[{ title: "About Us", href: "/about-us" }]} />
          </div>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Helping businesses find the perfect payment solution since 2024.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Arbor Card Quotes Team"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Arbor Card Quotes was founded in 2024 with a simple mission: to
                help businesses navigate the complex world of payment processing
                and find solutions that truly fit their needs.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, having worked in the payment industry for over 15
                years, saw firsthand how businesses were often sold payment
                solutions that weren't right for them, resulting in unnecessary
                costs and frustration.
              </p>
              <p className="text-gray-600">
                Today, we've helped thousands of businesses across the UK find
                the perfect payment solution, saving them time, money, and
                hassle. Our commitment to unbiased, transparent advice has made
                us a trusted partner for businesses of all sizes.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Transparency</h3>
                <p className="text-gray-600">
                  We believe in complete honesty about pricing, features, and
                  limitations of every solution we recommend.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Independence</h3>
                <p className="text-gray-600">
                  As an independent comparison service, we provide unbiased
                  recommendations based solely on what's best for your business.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3">Expertise</h3>
                <p className="text-gray-600">
                  Our team of payment specialists has decades of combined
                  experience in the industry, ensuring you get expert advice.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Ready to Find Your Perfect Payment Solution?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of businesses who have found the right payment
              solution through Arbor Card Quotes.
            </p>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
