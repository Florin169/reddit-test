import React from "react";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { toggleUserModal } from "../../redux/features/authSlice";

const UserModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.auth.userModal);

  const signOutHandler = () => {
    signOut(auth);

    dispatch(toggleUserModal());
  };

  return (
    <div
      className={`${
        !modal && "hidden"
      } absolute top-10 right-3 w-[70px] lg:w-[143px] border border-gray-300 rounded-md p-2 bg-white`}
    >
      <div className="user-modal">
        <BiUser className="w-5 h-5" />
        <h1 className="text-sm font-bold">Profile</h1>
      </div>
      <div className="user-modal" onClick={signOutHandler}>
        <FiLogOut className="w-5 h-5" />
        <h1 className="text-sm font-bold">Log Out</h1>
      </div>
    </div>
  );
};

export default UserModal;
