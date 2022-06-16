import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { openCommunityModal } from "../../redux/features/communitySlice";

const DirectoryModal = () => {
  const modal = useSelector((state) => state.auth.directoryModal);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        !modal && "hidden"
      } absolute top-10 left-[125px]  w-[70px] lg:w-[212px]  border border-gray-300 rounded-md p-2 bg-white`}
    >
      <h1 className="text-[10px] text-gray-400 mb-3">MY COMMUNITIES</h1>
      <div
        className="flex items-center space-x-2 hover:bg-gray-300 rounded-md p-1 transition duration-300"
        onClick={() => dispatch(openCommunityModal())}
      >
        <AiOutlinePlus className="w-5 h-5" />
        <h1 className="text-sm">Create Community</h1>
      </div>
    </div>
  );
};

export default DirectoryModal;
