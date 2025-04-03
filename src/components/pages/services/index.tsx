import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SEO } from "@/components/ui/seo";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function ServicesIndex() {
  const services = [
    {
      title: "Countertop Terminals",
      description:
        "Perfect for retail stores, restaurants, and businesses with a fixed point of sale.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      link: "/services/countertop-terminals",
      color: "bg-gray-50",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Portable Terminals",
      description:
        "Ideal for restaurants, cafes, and businesses that need flexibility within premises.",
      image:
        "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&q=80",
      link: "/services/portable-terminals",
      color: "bg-purple-50",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      title: "Mobile Card Readers",
      description:
        "Perfect for mobile businesses, pop-up shops, and on-the-go entrepreneurs.",
      image:
        "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=800&q=80",
      link: "/services/mobile-card-readers",
      color: "bg-green-50",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "POS Systems",
      description:
        "Complete point-of-sale solutions for businesses stock and management",
      image:
        "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&q=80",
      link: "/services/pos-systems",
      color: "bg-orange-50",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    },
    {
      title: "Online Payments",
      description:
        "Secure, reliable payment processing solutions for e-commerce and online businesses.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      link: "/services/online-payments",
      color: "bg-blue-50",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Dojo Restaurant App",
      description:
        "Streamline your restaurant operations with Dojo's integrated booking and payment solution.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      link: "/services/dojo-restaurant-app",
      color: "bg-purple-50",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Payment Services | Arbor Card Quotes"
        description="Explore our range of payment solutions including countertop terminals, portable terminals, mobile card readers, POS systems, and online payment solutions."
        keywords="payment services, card payment, payment solutions, card terminals, payment processing, POS systems, mobile payment"
        ogImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { title: "Home", href: "/" },
                { title: "Services", href: "/services" },
              ]}
            />
          </div>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Payment Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Explore our range of payment solutions tailored to meet the needs
              of your business. From fixed terminals to mobile solutions, we
              have options for every type of business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="md:flex h-full">
                  <div className="md:shrink-0 h-48 md:h-auto md:w-48 overflow-hidden">
                    <img
                      className="h-full w-full object-cover md:h-full md:w-full"
                      src={service.image}
                      alt={service.title}
                    />
                  </div>
                  <div className="p-6 flex flex-col h-full flex-grow justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                    </div>
                    <div>
                      <Link to={service.link}>
                        <Button className={`${service.buttonColor} text-white`}>
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Why Choose Arbor Card Quotes?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3 text-blue-700">
                  Competitive Rates
                </h3>
                <p className="text-gray-600">
                  We negotiate with multiple providers to ensure you get the
                  best possible rates for your business size and industry.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3 text-blue-700">
                  Expert Guidance
                </h3>
                <p className="text-gray-600">
                  Our payment specialists provide personalized recommendations
                  based on your specific business needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3 text-blue-700">
                  Ongoing Support
                </h3>
                <p className="text-gray-600">
                  We don't just set you up and leave - we provide continuous
                  support to ensure your payment systems run smoothly.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Fill out our quick form to receive personalized quotes for payment
              solutions tailored to your business needs.
            </p>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
