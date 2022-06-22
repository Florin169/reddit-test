import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const Comment = ({ comment }) => {
  return (
    <div className="p-2 flex space-x-3">
      <div className="w-7 h-7 rounded-full bg-red-300"></div>
      <div>
        <div className="flex items-center space-x-2 text-xs text-gray-400">
          <span>{comment?.name}</span>
          <span>a month ago</span>
        </div>
        <p className="text-sm my-2">{comment?.text}</p>
        <div className="flex items-center text-lg space-x-2">
          <BsArrowUpShort />
          <BsArrowDownShort />
        </div>
      </div>
    </div>
  );
};

export default Comment;
