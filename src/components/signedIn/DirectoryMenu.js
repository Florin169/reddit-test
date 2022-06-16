import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import DirectoryModal from "../modals/DirectoryModal";
import { useDispatch } from "react-redux";
import { toggleDirectoryModal } from "../../redux/features/authSlice";

const DirectoryMenu = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center justify-between w-[70px] lg:w-[212px] h-8 border border-gray-300 rounded-md p-2 ml-5 cursor-pointer"
      onClick={() => dispatch(toggleDirectoryModal())}
    >
      <div className="flex items-center space-x-2">
        <AiFillHome className="text-xl" />
        <h1 className="hidden lg:block font-bold">Home</h1>
      </div>
      <MdKeyboardArrowDown />

      <DirectoryModal />
    </div>
  );
};

export default DirectoryMenu;
