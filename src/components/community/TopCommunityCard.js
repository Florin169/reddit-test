import React from "react";

const TopCommunityCard = ({ community }) => {
  return (
    <div className="flex items-center justify-between px-3 w-full h-[50px] space-x-3 border border-b-gray-100 rounded-b-md">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-red-200"></div>
        <span className="font-bold text-gray-600 text-sm">
          r/{community?.id}
        </span>
      </div>
      <button className="solid text-xs font-bold w-[52px] h-[22px]">
        Join
      </button>
    </div>
  );
};

export default TopCommunityCard;
