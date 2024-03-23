"use client";
import { Disscussion } from "@/components/DisscussionComponents/Disscussion";
import { MarketStories } from "@/components/MarketStoryComponents/MarketStories";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="grid max-h-screen grid-cols-12 relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Disscussion />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MarketStories />
      </Suspense>
    </main>
  );
}
