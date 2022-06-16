import React from "react";
import { FaRegComment } from "react-icons/fa";
import { BiShare, BiBookmark } from "react-icons/bi";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Post = ({ post }) => {
  return (
    <div className="flex w-full md:w-[528px] bg-white rounded-md mb-3">
      <div className="flex flex-col items-center px-1 pt-4 bg-gray-200 rounded-l-md">
        <AiOutlineArrowUp className="cursor-pointer text-xl" />
        <span className="font-semibold text-sm my-2">100</span>
        <AiOutlineArrowDown className="cursor-pointer text-xl" />
      </div>
      <div className="p-2">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded-full bg-red-400"></div>
          <h1 className="text-sm font-bold">r/{post?.communityId}</h1>
          <span className="text-xs text-gray-400">
            by u/{post?.creatorDisplayName}
          </span>
          <span className="text-xs text-gray-400">1 min ago</span>
        </div>

        <div>
          <h1 className="font-semibold text-lg">{post?.title}</h1>
          <p className="text-sm my-2">{post?.text}</p>
          {post?.imageURL && (
            <img
              src={post?.imageURL}
              alt="img"
              className="w-full h-full object-cover rounded-md"
            />
          )}
        </div>

        <div className="flex items-center space-x-2 mt-5 text-gray-500">
          <div className="flex items-center space-x-2 social-anim">
            <FaRegComment />
            <span className="font-bold text-xs">1</span>
          </div>
          <div className="flex items-center space-x-2 social-anim">
            <BiShare />
            <span className="font-bold text-xs">Share</span>
          </div>
          <div className="flex items-center space-x-2 social-anim">
            <BiBookmark />
            <span className="font-bold text-xs">Save</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
