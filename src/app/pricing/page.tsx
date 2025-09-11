"use client";

import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
export default function PricingPage() {
  return (
    <>
      <FaqJsonLd
        faqs={[
          {
            question: "What is your project minimum?",
            answer: "Projects start at $3,000.",
          },
          {
            question: "Do you offer monthly support?",
            answer: "Yes, packages start at $99/month.",
          },
        ]}
      />
      {/* Pricing content */}
    </>
  );
}
