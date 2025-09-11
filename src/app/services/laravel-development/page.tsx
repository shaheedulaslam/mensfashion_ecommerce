"use client";

import { WebPageJsonLd } from "@/components/seo/WebPageJsonLd";
import { BreadcrumbsJsonLd } from "@/components/seo/BreadcrumbsJsonLd";
export default function Page() {
  const url = "https://itmarkerz.co.in/services/laravel-development";
  return (
    <>
      <WebPageJsonLd
        name="Laravel Development Services | itmarkerz Technologies"
        url={url}
        description="Custom Laravel apps, API development, performance optimization, and enterprise i"
      />
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", item: "https://itmarkerz.co.in/" },
          { name: "Services", item: "https://itmarkerz.co.in/services" },
          { name: "Laravel Development", item: url },
        ]}
      />
      {/* Service content */}
    </>
  );
}
