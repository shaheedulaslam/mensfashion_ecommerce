import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Plans | itmarkerz Technologies",
  description: "Transparent pricing for web and mobile app development services. Projects start at $3,000 with monthly support packages available.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing & Plans | itmarkerz Technologies",
    description: "Get transparent pricing for web and mobile app development services",
    url: "https://itmarkerz.co.in/pricing",
    type: "website",
    images: ["/pricing-og.jpg"],
  },
};


export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
