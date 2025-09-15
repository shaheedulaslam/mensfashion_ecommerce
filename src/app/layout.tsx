import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayoutComponent from "@/components/LayoutComponent";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itmarkerz.co.in"),
  title:
    "itmarkerz Technologies | Laravel, PHP & React Development Company India",
  description:
    "itmarkerz Technologies offers Laravel, PHP outsourcing, React, Next.js, React Native, Expo, iOS",
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/itmIcon.png", // Add this line for favicon
  },
  openGraph: {
    title: "itmarkerz Technologies | Web & Mobile App Development",
    description:
      "Building scalable web & mobile experiences with Laravel, PHP, React, Next.js, React",
    url: "https://itmarkerz.co.in",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={generalSans.variable}>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}