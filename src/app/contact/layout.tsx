import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | itmarkerz Technologies | Web & Mobile App Development",
  description: "Get in touch with our expert team for Laravel, PHP, React, Next.js, React Native, and iOS/Android development services.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | itmarkerz Technologies",
    description: "Reach out to discuss your web or mobile app development project",
    url: "https://itmarkerz.co.in/contact",
    type: "website",
    images: ["/contact-og.jpg"],
  },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

