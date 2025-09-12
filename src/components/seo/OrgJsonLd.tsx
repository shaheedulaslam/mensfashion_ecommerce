/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";

export function OrgSeoJsonLd() {
  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://itmarkerz.co.in/#organization",
      name: "itmarkerz technologies",
      url: "https://itmarkerz.co.in",
      logo: {
        "@type": "ImageObject",
        url: "https://itmarkerz.co.in/logo.png",
      },
      description:
        "itmarkerz technologies is a web & mobile app development company in India specializing in Laravel, React, Next.js, and mobile apps.",
      foundingDate: "2012-03-01",
      foundingLocation: { "@type": "Place", name: "Changanacherry, Kerala, India" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "4th floor, Swapna Building, Central Junction",
        addressLocality: "Changanacherry",
        addressRegion: "Kerala",
        postalCode: "686101",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9074773494",
          contactType: "sales",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/itmarkerz",
        "https://twitter.com/itmarkerz",
        "https://www.linkedin.com/company/itmarkerz",
        "https://www.instagram.com/itmarkerz",
      ],
      // Useful topical hints
      knowsAbout: [
        "Laravel development",
        "PHP outsourcing",
        "Next.js",
        "React",
        "React Native",
        "iOS app development",
        "Android app development",
        "Shopify apps",
        "WordPress",
        "Python automation",
        "Web scraping",
        "AI/ML integration",
        "DevOps",
        "Uptime monitoring",
      ],
      // Link to services catalog below
      hasOfferCatalog: { "@id": "https://itmarkerz.co.in/#services" },
    },

    // WebSite with sitelinks search box
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://itmarkerz.co.in/#website",
      url: "https://itmarkerz.co.in",
      name: "itmarkerz technologies",
      publisher: { "@id": "https://itmarkerz.co.in/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://itmarkerz.co.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en",
    },

    // Breadcrumbs for the homepage (expand per page)
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://itmarkerz.co.in/#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://itmarkerz.co.in/",
        },
      ],
    },

    // OfferCatalog with Service items (no prices to avoid misleading data)
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "@id": "https://itmarkerz.co.in/#services",
      name: "Software Development & Consulting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://itmarkerz.co.in/#service-laravel",
            name: "Laravel Development",
            serviceType: "Web development",
            provider: { "@id": "https://itmarkerz.co.in/#organization" },
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            url: "https://itmarkerz.co.in/services/laravel",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://itmarkerz.co.in/#service-nextjs",
            name: "Next.js Development",
            serviceType: "Web app development",
            provider: { "@id": "https://itmarkerz.co.in/#organization" },
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            url: "https://itmarkerz.co.in/services/nextjs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://itmarkerz.co.in/#service-react-native",
            name: "React Native Apps",
            serviceType: "Mobile application development",
            provider: { "@id": "https://itmarkerz.co.in/#organization" },
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            url: "https://itmarkerz.co.in/services/react-native",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://itmarkerz.co.in/#service-shopify",
            name: "Shopify App & Store Development",
            serviceType: "E-commerce development",
            provider: { "@id": "https://itmarkerz.co.in/#organization" },
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            url: "https://itmarkerz.co.in/services/shopify",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://itmarkerz.co.in/#service-wordpress",
            name: "WordPress Development",
            serviceType: "CMS website development",
            provider: { "@id": "https://itmarkerz.co.in/#organization" },
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            url: "https://itmarkerz.co.in/services/wordpress",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://itmarkerz.co.in/#service-python",
            name: "Python Automation & Crawlers",
            serviceType: "Automation & data extraction",
            provider: { "@id": "https://itmarkerz.co.in/#organization" },
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            url: "https://itmarkerz.co.in/services/python-automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://itmarkerz.co.in/#service-aiml",
            name: "AI/ML Integrations",
            serviceType: "AI integration & consulting",
            provider: { "@id": "https://itmarkerz.co.in/#organization" },
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            url: "https://itmarkerz.co.in/services/ai-ml",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://itmarkerz.co.in/#service-devops",
            name: "DevOps & Cloud",
            serviceType: "Infrastructure & SRE",
            provider: { "@id": "https://itmarkerz.co.in/#organization" },
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            url: "https://itmarkerz.co.in/services/devops",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://itmarkerz.co.in/#service-uptime",
            name: "Uptime Monitoring & SRE",
            serviceType: "Monitoring & incident response",
            provider: { "@id": "https://itmarkerz.co.in/#organization" },
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            url: "https://itmarkerz.co.in/services/uptime-monitoring",
          },
        },
      ],
    },
  ];

  return (
    <Script
      id="org-seo-graph"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
