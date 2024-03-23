"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const NavBar = () => {
  const searchParams = useSearchParams();

  return (
    <div className="xl:hidden h-10 flex bg-blue-950/80 text-white justify-between items-center">
      <Link href={{ pathname: "/", query: { page: "disscussion" } }} className="w-full h-full">
        <div className={`text-center flex-1 flex items-center justify-center self-center cursor-pointer w-full h-full ${searchParams.get("page") === "disscussion" && "bg-blue-950"}`}>
          Disscussion Forum
        </div>
      </Link>
      <Link href={{ pathname: "/", query: { page: "stories" } } } className="w-full h-full">
        <div className={`text-center flex-1 w-full h-full flex items-center justify-center cursor-pointer ${searchParams.get("page") === "stories" && "bg-blue-950"}`}>
          Market Stories
        </div>
      </Link>
    </div>
  );
};

