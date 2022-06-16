import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrReddit } from "react-icons/gr";
import UserModal from "../modals/UserModal";
import { useDispatch } from "react-redux";
import { toggleUserModal } from "../../redux/features/authSlice";

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center justify-between w-[70px] lg:w-[143px] h-8 border border-gray-300 rounded-md p-2 cursor-pointer hover:border-gray-500 hover:bg-gray-100 transition duration-300"
      onClick={() => dispatch(toggleUserModal())}
    >
      <div className="flex items-center">
        <div className="flex items-center justify-center w-6 h-6 rounded-md bg-red-200 mr-2">
          <GrReddit />
        </div>
        <div className="hidden lg:flex flex-col text-xs">
          <span className="font-bold">florin</span>
          <span>1 karma</span>
        </div>
      </div>
      <MdKeyboardArrowDown className="w-4 h-4" />

      <UserModal />
    </div>
  );
};

export default UserMenu;
