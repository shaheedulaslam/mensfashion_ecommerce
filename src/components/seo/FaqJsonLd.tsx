/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";
type QA = { question: string; answer: string };
export function FaqJsonLd({ faqs }: { faqs: QA[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
  return (
    <Script
      id="faq-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
