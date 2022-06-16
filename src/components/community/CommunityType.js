import React from "react";
import { FaUser } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

const CommunityType = ({ communityType, setCommunityType }) => {
  return (
    <div>
      <h1>Community Type</h1>
      <div className="flex items-center space-x-3 mb-2">
        <input
          type="radio"
          value="Public"
          checked={communityType === "Public"}
          onChange={(e) => setCommunityType(e.target.value)}
        />
        <div className="flex items-center space-x-2">
          <FaUser className="text-gray-500" />
          <h1 className="font-bold text-sm">Public</h1>
        </div>
        <p className="text-xs text-gray-500">
          Anyone can view, post or comment on this community
        </p>
      </div>
      <div className="flex items-center space-x-3 mb-2">
        <input
          type="radio"
          value="Restricted"
          checked={communityType === "Restricted"}
          onChange={(e) => setCommunityType(e.target.value)}
        />
        <div className="flex items-center space-x-2">
          <AiFillEye className="text-gray-500" />
          <h1 className="font-bold text-sm">Restricted</h1>
        </div>
        <p className="text-xs text-gray-500">
          Anyone can viewthis community but only aproved users can post
        </p>
      </div>
      <div className="flex items-center space-x-3 ">
        <input
          type="radio"
          value="Private"
          checked={communityType === "Private"}
          onChange={(e) => setCommunityType(e.target.value)}
        />
        <div className="flex items-center space-x-2">
          <BiLockAlt className="text-gray-500" />
          <h1 className="font-bold text-sm">Private</h1>
        </div>
        <p className="text-xs text-gray-500">
          Only aproved users can view and submit to this community
        </p>
      </div>
    </div>
  );
};

export default CommunityType;
