import * as React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbProps {
  items?: {
    title: string;
    href: string;
  }[];
  homeHref?: string;
  className?: string;
}

export function Breadcrumb({
  items = [],
  homeHref = "/",
  className,
}: BreadcrumbProps) {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // If items are provided, use them; otherwise, generate from the current path
  const breadcrumbItems = items.length
    ? items
    : pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        return {
          title: segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          href,
        };
      });

  return (
    <nav
      className={`flex items-center text-sm text-gray-500 ${className || ""}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            to={homeHref}
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
            {index === breadcrumbItems.length - 1 ? (
              <span className="font-medium text-gray-900">{item.title}</span>
            ) : (
              <Link
                to={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
