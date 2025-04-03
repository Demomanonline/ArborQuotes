import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function BlogIndex() {
  const navigate = useNavigate();

  // Handle link clicks to scroll to top of content
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();
    navigate(path);
    // Scroll to top with a slight delay to ensure navigation completes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const blogPosts = [
    {
      id: "choosing-right-card-terminal",
      title: "How to Choose the Right Card Terminal for Your Business",
      excerpt:
        "Selecting the perfect card terminal can significantly impact your business operations and customer satisfaction. Learn the key factors to consider.",
      date: "June 15, 2023",
      category: "Payment Solutions",
      image:
        "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&q=80",
      author: "Sarah Johnson",
    },
    {
      id: "reduce-payment-processing-fees",
      title: "5 Ways to Reduce Your Payment Processing Fees",
      excerpt:
        "Payment processing fees can eat into your profits. Discover practical strategies to minimize these costs without compromising service quality.",
      date: "July 3, 2023",
      category: "Cost Saving",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      author: "Michael Chen",
    },
    {
      id: "contactless-payment-trends",
      title: "The Rise of Contactless Payments: Trends and Predictions",
      excerpt:
        "Contactless payment adoption has accelerated dramatically. Explore current trends and what the future holds for this convenient payment method.",
      date: "August 22, 2023",
      category: "Industry Trends",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      author: "Emma Wilson",
    },
    {
      id: "mobile-payment-security",
      title: "Mobile Payment Security: Protecting Your Business and Customers",
      excerpt:
        "With the rise in mobile payments comes increased security concerns. Learn essential practices to safeguard transaction data and build customer trust.",
      date: "September 10, 2023",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      author: "David Thompson",
    },
    {
      id: "restaurant-payment-solutions",
      title: "Innovative Payment Solutions for Restaurants in 2023",
      excerpt:
        "The restaurant industry faces unique payment challenges. Discover cutting-edge solutions that enhance dining experiences and streamline operations.",
      date: "October 5, 2023",
      category: "Industry Solutions",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      author: "Lisa Rodriguez",
    },
    {
      id: "ecommerce-payment-gateways",
      title: "Comparing Top E-commerce Payment Gateways",
      excerpt:
        "Choosing the right payment gateway is crucial for online businesses. Compare features, fees, and integration options of leading providers.",
      date: "November 18, 2023",
      category: "E-commerce",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      author: "James Wilson",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 mb-6">
          <Breadcrumb />
        </div>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Payment Processing Insights
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Expert advice, industry trends, and practical tips to optimize
              your payment processing strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <a
                  href={`/blog/${post.id}`}
                  onClick={(e) => handleLinkClick(e, `/blog/${post.id}`)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <a
                    href={`/blog/${post.id}`}
                    onClick={(e) => handleLinkClick(e, `/blog/${post.id}`)}
                  >
                    <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      By {post.author}
                    </span>
                    <a
                      href={`/blog/${post.id}`}
                      onClick={(e) => handleLinkClick(e, `/blog/${post.id}`)}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest payment processing trends, tips,
                and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
