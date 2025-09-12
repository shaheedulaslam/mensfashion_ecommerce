// app/services/ios-app-development/layout.tsx
import { generateServiceMetadata } from "@/lib/service-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateServiceMetadata({
  title: "iOS App Development Company",
  description: "Delivering Result-Driven iOS App Development Services. We build next-generation iOS apps designed to meet the highest quality standards.",
  serviceType: "iOS Development",
  keywords: [
    "iOS app development",
    "iPhone app development",
    "iPad app development",
    "Apple Watch app development",
    "Swift development",
    "iOS UI/UX design",
    "mobile app development",
    "iOS app developers"
  ]
});

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}