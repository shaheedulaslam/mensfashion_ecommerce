// lib/service-metadata.ts
import type { Metadata } from "next";

interface ServiceMetadataProps {
  title: string;
  description: string;
  serviceType: string;
  keywords?: string[];
}

export function generateServiceMetadata({
  title,
  description,
  serviceType,
  keywords = []
}: ServiceMetadataProps): Metadata {
  const fullTitle = `${title} | itmarkerz Technologies`;
  const fullKeywords = [
    ...keywords,
    serviceType,
    "web development",
    "mobile app development",
    "software development",
    "India"
  ];

  return {
    title: fullTitle,
    description,
    keywords: fullKeywords.join(", "),
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      images: ["/services/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}