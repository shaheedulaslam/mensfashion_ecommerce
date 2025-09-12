import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web & Mobile App Development Projects | itmarkerz",
  description: "Explore our portfolio of successful web and mobile app development projects across various industries and technologies.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Web & Mobile App Development Projects | itmarkerz",
    description: "Browse our extensive portfolio of web and mobile applications developed with cutting-edge technologies",
    url: "https://itmarkerz.co.in/portfolio",
    type: "website",
    images: ["/portfolio-og.jpg"],
  },
  twitter: { 
    card: "summary_large_image",
    title: "Portfolio | itmarkerz Technologies",
    description: "Web and mobile app development portfolio showcasing our expertise"
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
