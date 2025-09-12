import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Results | itmarkerz Technologies",
  description: "Search through itmarkerz Technologies' services, portfolio, and expertise in web and mobile app development.",
  robots: "noindex, nofollow", // Typically search pages shouldn't be indexed
  alternates: { canonical: "/search" },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}