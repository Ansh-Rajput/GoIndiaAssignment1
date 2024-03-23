"use client";
import { useSearchParams } from "next/navigation";
import { CommentBox } from "./commentBox";

export const Disscussion = () => {
    const searchParams = useSearchParams();
  return (
    <div 
        className="w-full fixed bg-white xl:static h-full col-span-12 xl:col-span-9 flex-col"
        style={{zIndex:(searchParams.get("page") === "stories" ? "0" : "10" )}}
    >
      <h1 className="hidden xl:flex h-[50px] text-lg text-red-500 bg-slate-300 justify-center items-center my-0 w-[calc(100%-100px)] m-auto">Disscussion</h1>
      <div className="overflow-y-scroll h-[calc(100vh-70px)] hideScrollBar">
        <CommentBox />
        <CommentBox />
        <CommentBox />

        <CommentBox />
        <CommentBox />
      </div>
    </div>
  );
};
