import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export const NavBar = () => {
  return (
    <div className="xl:hidden h-10 flex bg-blue-950/80 text-white justify-between items-center">
      <Link
        href={`?${new URLSearchParams({
          page: "disscussion",
        })}`}
        className="text-center flex-1"
      >
        Disscussion Fourm
      </Link>
      <Link
        href={`?${new URLSearchParams({
          page: "stories",
        })}`}
        className="text-center flex-1"
      >
        Market Stories
      </Link>
    </div>
  );
};
