import { BiHeart } from "react-icons/bi";
import { FaRegCommentAlt, FaRegEye, FaUserCircle } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export const CommentBox = () => {
  return (
    <div className="w-[calc(100%-100px)] m-auto grid grid-cols-12 shadow-md rounded-md min-h-[calc(100%/4-20px)] my-5">
      <div className="flex justify-center col-span-2">
        <FaUserCircle size={25} />
      </div>
      <div className="col-span-8 flex flex-col justify-between gap-1  ">
        <div className="flex gap-2">
          Lorem ipsum
          <span className="text-white bg-blue-600 rounded-xl text-center flex items-center px-1 text-xs">sector 2</span>
        </div>
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, autem?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, autem?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, autem?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, autem?
        </div>
        <div className="flex justify-between py-1">
          <div className="flex gap-1 justify-center items-center">
            <BiHeart />
            <span className="text-xs">2k</span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <FaRegEye />
            <span className="text-xs">2k</span>
          </div>
          <div className="flex gap-1 justify-center items-center">
          <FaRegCommentAlt />
            <span className="text-xs">2k Comments</span>
          </div>
          <div className="flex gap-1 justify-center items-center">
          <IoShareSocialOutline />
            <span className="text-xs">Share</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center  col-span-2 text-xs text-blue-400">
        2m ago
      </div>
    </div>
  );
};