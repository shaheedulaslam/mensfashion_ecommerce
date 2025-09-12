/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";
type Crumb = { name: string; item: string };
export function BreadcrumbsJsonLd({ items }: { items: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
  return (
    <Script
      id={`breadcrumbs-${items.at(-1)?.item}`}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
