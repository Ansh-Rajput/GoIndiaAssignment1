"use client";
import { useSearchParams } from "next/navigation";
import { MarketStoryBox } from "./market-story-box";

export const MarketStories = () => {
    const searchParams = useSearchParams();
  return (
    <div className="w-full fixed bg-white xl:static max-h-full col-span-12 xl:col-span-3"
    style={{zIndex:(searchParams.get("page") === "stories" ? "10" : "0" )}}
    >
      <h1 className="hidden xl:flex h-[50px] text-lg text-red-500 bg-slate-300 justify-center items-center w-[calc(100%-50px)] m-auto">MarketStoryBox</h1>
      <div className="h-[calc(100vh-50px)] overflow-y-scroll hideScrollBar">
        <MarketStoryBox />
        <MarketStoryBox />
        <MarketStoryBox />
        <MarketStoryBox />
        <MarketStoryBox />
        <MarketStoryBox />
        <MarketStoryBox />
      </div>
    </div>
  );
};
