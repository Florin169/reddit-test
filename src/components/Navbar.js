import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import redditLogo from "../assets/redditFace.svg";
import redditText from "../assets/redditText.svg";
import { useDispatch, useSelector } from "react-redux";
import { openSignUpModal, openSignInModal } from "../redux/features/authSlice";
import DirectoryMenu from "./signedIn/DirectoryMenu";
import Social from "./signedIn/Social";
import UserMenu from "./signedIn/UserMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between px-3 h-11 bg-white">
      <Link to="/">
        <div className="flex items-center">
          <img src={redditLogo} alt="" className="w-7 h-7" />
          <img src={redditText} alt="" className=" w-16 h-16 hidden md:block" />
        </div>
      </Link>
      {user && <DirectoryMenu />}
      <div className="flex items-center flex-1 mx-2 md:mx-10 h-[80%] border border-gray-300 rounded-md">
        <AiOutlineSearch className="w-6 h-6 mx-3" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="w-full h-8 bg-transparent outline-none"
        />
      </div>
      {!user ? (
        <div className="flex items-center space-x-4">
          <div className="hidden lg:block space-x-4">
            <button
              className="w-[110px] h-7 outline"
              onClick={() => dispatch(openSignInModal())}
            >
              Log in
            </button>
            <button
              className="w-[110px] h-7 solid"
              onClick={() => dispatch(openSignUpModal())}
            >
              Sign up
            </button>
          </div>
          <div className="flex items-center text-2xl hover:bg-gray-200 p-1 rounded-md cursor-pointer transition duration-300">
            <BiUser />
            <MdKeyboardArrowDown />
          </div>
        </div>
      ) : (
        <>
          <Social />
          <UserMenu />
        </>
      )}
    </div>
  );
};

export default Navbar;
