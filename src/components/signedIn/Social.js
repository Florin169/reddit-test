import React from "react";
import { BsArrowUpRightCircle, BsCameraVideo } from "react-icons/bs";
import { AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { BiBell } from "react-icons/bi";

const Social = () => {
  return (
    <div className="hidden lg:flex items-center space-x-2 text-xl mr-3">
      <div className="social-anim">
        <BsArrowUpRightCircle />
      </div>
      <div className="social-anim">
        <BsCameraVideo />
      </div>
      <div className="social-anim">
        <AiOutlineMessage />
      </div>
      <div className="social-anim">
        <BiBell />
      </div>
      <div className="social-anim">
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default Social;
