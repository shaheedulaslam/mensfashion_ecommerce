import Script from "next/script";
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "itmarkerz Technologies",
    image: "https://itmarkerz.co.in/logo.png",
    url: "https://itmarkerz.co.in",
    telephone: "+91-9074773494",
    priceRange: "$$",
    currenciesAccepted: "USD, INR, GBP, EUR",
    paymentAccepted: "Credit Card, Bank Transfer, UPI",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4th floor, Swapna Building, Central Junction",
      addressLocality: "Changanacherry",
      addressRegion: "Kerala",
      postalCode: "686101",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Kerala" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "UAE" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        sameAs: [
          "https://www.facebook.com/itmarkerz",
          "https://twitter.com/itmarkerz",
          "https://www.linkedin.com/company/itmarkerz",
          "https://www.instagram.com/itmarkerz",
        ],
      },
    ],
  };
  return (
    <Script
      id="localbusiness-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
