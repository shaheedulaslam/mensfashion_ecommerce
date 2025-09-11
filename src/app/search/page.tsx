"use client";
import { useSearchParams } from "next/navigation";
export default function SearchPage() {
  const q = useSearchParams().get("q") || "";
  // TODO: plug into your search API or content index
  return (
    <main className="p-6">
      <h1>Search</h1>
      <p>
        Query: <strong>{q}</strong>
      </p>
      {/* Render results here */}
    </main>
  );
}
