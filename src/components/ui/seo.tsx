import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title
      ? `${title} - Arbor Card Quotes`
      : "Arbor Card Quotes - Compare Payment Solutions";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.setAttribute("name", "description");
      newMetaDescription.setAttribute("content", description);
      document.head.appendChild(newMetaDescription);
    }

    // Update meta keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        const newMetaKeywords = document.createElement("meta");
        newMetaKeywords.setAttribute("name", "keywords");
        newMetaKeywords.setAttribute("content", keywords);
        document.head.appendChild(newMetaKeywords);
      }
    }

    // Update Open Graph meta tags
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute("content", ogTitle || title);
    } else if (ogTitle || title) {
      const newOgTitle = document.createElement("meta");
      newOgTitle.setAttribute("property", "og:title");
      newOgTitle.setAttribute("content", ogTitle || title);
      document.head.appendChild(newOgTitle);
    }

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute("content", ogDescription || description);
    } else if (ogDescription || description) {
      const newOgDesc = document.createElement("meta");
      newOgDesc.setAttribute("property", "og:description");
      newOgDesc.setAttribute("content", ogDescription || description);
      document.head.appendChild(newOgDesc);
    }

    if (ogImage) {
      const ogImageTag = document.querySelector('meta[property="og:image"]');
      if (ogImageTag) {
        ogImageTag.setAttribute("content", ogImage);
      } else {
        const newOgImage = document.createElement("meta");
        newOgImage.setAttribute("property", "og:image");
        newOgImage.setAttribute("content", ogImage);
        document.head.appendChild(newOgImage);
      }
    }

    if (ogUrl) {
      const ogUrlTag = document.querySelector('meta[property="og:url"]');
      if (ogUrlTag) {
        ogUrlTag.setAttribute("content", ogUrl);
      } else {
        const newOgUrl = document.createElement("meta");
        newOgUrl.setAttribute("property", "og:url");
        newOgUrl.setAttribute("content", ogUrl);
        document.head.appendChild(newOgUrl);
      }
    }

    // Clean up function to reset title when component unmounts
    return () => {
      // We don't reset the title or meta tags here to avoid flickering
      // when navigating between pages
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl]);

  // This component doesn't render anything
  return null;
}
