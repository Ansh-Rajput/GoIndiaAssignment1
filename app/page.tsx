import { Disscussion } from "@/components/DisscussionComponents/Disscussion";
import { MarketStories } from "@/components/MarketStoryComponents/MarketStories";

export default function Home() {
  return (
    <main className="grid max-h-screen grid-cols-12 relative">
      <Disscussion/>
      <MarketStories/>
    </main>
  );
}
