import localFont from "next/font/local";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";

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
  title: "90s MensFashion - Mens Retro Styles",
  description: "Bold graphics, neon accents, and relaxed fits — curated for today's streetwear revival.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={generalSans.variable}>
          <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}