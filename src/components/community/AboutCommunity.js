import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineCake } from "react-icons/md";

const AboutCommunity = () => {
  return (
    <div className="hidden lg:block w-[277px] h-[210px] rounded-md bg-white my-5">
      <div className="flex items-center justify-between h-11 bg-blue-500 rounded-t-md px-4 text-white">
        <h1 className="text-sm font-bold">About Community</h1>
        <BsThreeDots />
      </div>
      <div className="flex px-4 py-5 border border-b-gray-300">
        <div className="flex flex-col w-[50%] font-bold text-sm">
          <span>100</span>
          <span>Members</span>
        </div>
        <div className="flex flex-col font-bold text-sm">
          <span>1</span>
          <span>Online</span>
        </div>
      </div>

      <div className="flex items-center py-3 text-sm font-bold px-4 space-x-2">
        <MdOutlineCake className="w-5 h-5" />
        <h1>Created June 16 2022</h1>
      </div>
      <div className="px-4 mb-3">
        <button className="solid w-full h-[30px]">Create Post</button>
      </div>
    </div>
  );
};

export default AboutCommunity;
