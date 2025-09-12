/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "itmarkerz Technologies",
    url: "https://itmarkerz.co.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://itmarkerz.co.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
