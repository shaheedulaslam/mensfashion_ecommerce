import Script from "next/script";

export function OrgJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "itmarkerz Technologies",
    url: "https://itmarkerz.co.in",
    logo: "https://itmarkerz.co.in/logo.png",
    description:
      "itmarkerz Technologies is a web & mobile app development company in India specializing in Lara",
    foundingDate: "2012-03-01",
    foundingLocation: {
      "@type": "Place",
      name: "Changanacherry, Kerala, India",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "4th floor, Swapna Building, Central Junction",
      addressLocality: "Changanacherry",
      addressRegion: "Kerala",
      postalCode: "686101",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9074773494",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.facebook.com/itmarkerz",
      "https://twitter.com/itmarkerz",
      "https://www.linkedin.com/company/itmarkerz",
      "https://www.instagram.com/itmarkerz",
    ],
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "UAE" },
    ],
    priceRange: "$$",
    offers: [
      {
        "@type": "Offer",
        name: "Custom Development Projects",
        priceCurrency: "USD",
        price: "3000",
        description:
          "Projects starting from $3,000 and scaling to enterprise-level development.",
      },
      {},
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "120",
    },
    numberOfEmployees: { "@type": "QuantitativeValue", value: "1-10" },
  };
  return (
    <Script
      id="org-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
