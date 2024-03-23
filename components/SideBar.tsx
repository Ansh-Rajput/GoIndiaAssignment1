"use client";
import { useState } from "react";
import { BiBell, BiUser } from "react-icons/bi";
import { FaCaretRight } from "react-icons/fa";
import { RiMessage2Fill, RiMoneyDollarCircleLine } from "react-icons/ri";

export const SideBar = () => {
  const width = "350px";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative">
      <div
        className="fixed z-20 xl:static h-screen bg-blue-950 text-white transition-all duration-300"
        style={{
          transform: sidebarOpen ? "translateX(0px)" : `translateX(-${width})`,
          width: sidebarOpen ? `${width}` : "0",
        }}
      >
        <div className="flex justify-between items-center p-3 border-b border-gray-200/50">
          <div className="flex gap-2 items-center justify-center">
            <BiUser size={25} />
            Hello,<span>User</span>
          </div>
          <BiBell size={25} />
        </div>
        <div className="flex gap-2 items-center p-3">
          <RiMessage2Fill size={25} />
          <span>Discussion Forum</span>
        </div>
        <div className="flex gap-2 items-center p-3">
          <RiMoneyDollarCircleLine size={25} />
          <span>Market Stories</span>
        </div>
      </div>
      <div
        className={`fixed z-20 top-[calc(50%)] -translate-y-2/4 h-16 cursor-pointer bg-blue-950/80 left-[${width}] text-white flex items-center transition-all duration-300`}
        onClick={handleToggleSidebar}
        style={{ left: sidebarOpen ? `${width}` : "0" }}
      >
        <FaCaretRight />
      </div>
    </div>
  );
};
