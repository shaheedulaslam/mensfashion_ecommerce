import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";


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
      <body>
          <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}