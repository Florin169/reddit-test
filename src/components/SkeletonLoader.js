import React from "react";

const SkeletonLoader = () => {
  return (
    <div>
      <div className="w-[528px] p-3 bg-white rounded-md ">
        <div className="animate-pulse space-y-3">
          <div className="h-2 w-[30%] bg-gray-300 rounded-full"></div>
          <div className="h-2 w-full bg-gray-300 rounded-full"></div>
          <div className="h-2 w-full bg-gray-300 rounded-full"></div>
          <div className="h-2 w-full bg-gray-300 rounded-full"></div>
          <div className="h-[386px] w-full bg-gray-300 rounded-md"></div>
        </div>
      </div>
      <div className="w-[528px] p-3 bg-white rounded-md ">
        <div className="animate-pulse space-y-3">
          <div className="h-2 w-[30%] bg-gray-300 rounded-full"></div>
          <div className="h-2 w-full bg-gray-300 rounded-full"></div>
          <div className="h-2 w-full bg-gray-300 rounded-full"></div>
          <div className="h-2 w-full bg-gray-300 rounded-full"></div>
          <div className="h-[386px] w-full bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
