"use client";

import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { WebPageJsonLd } from "@/components/seo/WebPageJsonLd";
import { BreadcrumbsJsonLd } from "@/components/seo/BreadcrumbsJsonLd";


export default function ContactPage() {
  const url = "https://itmarkerz.co.in/contact";
  return (
    <>
      <LocalBusinessJsonLd />
      <WebPageJsonLd
        name="Contact itmarkerz Technologies"
        url={url}
        description="Get in touch for Laravel, PHP, React, Next.js, React Native, and iOS/Android dev"
      />
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", item: "https://itmarkerz.co.in/" },
          { name: "Contact", item: url },
        ]}
      />
      {/* Contact content */}
    </>
  );
}
