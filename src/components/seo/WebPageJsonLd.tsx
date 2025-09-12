/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Script from "next/script";
type Props = {
  name: string;
  url: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
};
export function WebPageJsonLd({
  name,
  url,
  description,
  datePublished,
  dateModified,
}: Props) {
  const data: any = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url,
    description,
  };
  if (datePublished) data.datePublished = datePublished;
  if (dateModified) data.dateModified = dateModified;
  return (
    <Script
      id={`webpage-jsonld-${url}`}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
