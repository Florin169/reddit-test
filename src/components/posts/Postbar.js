import React from "react";
import { BsReddit, BsCardImage, BsLink45Deg } from "react-icons/bs";

const Postbar = () => {
  return (
    <div className="flex items-center w-full md:w-[528px] h-14 border border-gray-300 rounded-md bg-white my-5 p-2">
      <BsReddit className="w-8 h-8 mr-4" />
      <input
        type="text"
        placeholder="Create Post"
        className="input h-9 flex-1 bg-gray-100 focus:bg-white"
      />
      <div className="flex items-center text-xl space-x-3 ml-3">
        <BsCardImage className="cursor-pointer" />
        <BsLink45Deg className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Postbar;
