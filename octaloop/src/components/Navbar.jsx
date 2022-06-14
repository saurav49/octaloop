import React from "react";
import {
  AiOutlineInstagram,
  BsFacebook,
  RiArrowDownSLine,
  IoMdArrowForward,
} from "../Icons/Icons";

const Navbar = () => {
  return (
    <div className="bg-[#1a1a1a] py-4 flex flex-col space-y-4 md:flex-row md:space-y-2 items-center justify-around text-[#f5df4d]">
      <div>
        <h1 className="font-bold text-2xl">Binamite</h1>
      </div>
      <ul className="flex items-center flex-wrap justify-center space-y-2 sm:space-y-0 space-x-4 text-sm">
        <li>Pricing</li>
        <li className="flex items-center space-x-1">
          <span>Who it's for</span>
          <RiArrowDownSLine className="mt-1" />
        </li>
        <li className="flex items-center space-x-1">
          <span>Features</span>
          <RiArrowDownSLine className="mt-1" />
        </li>
        <li>Blog</li>
        <li className="flex items-center space-x-1">
          <AiOutlineInstagram className="text-xl mt-1" />
        </li>
        <li>
          <BsFacebook className="text-lg mt-1" />
        </li>
      </ul>
      <div className="space-x-4 flex items-center text-sm">
        <button className="py-2 px-4 rounded-xl bg-[#f5df4d] text-[#1a1a1a] font-bold cursor-not-allowed">
          Sign Up Free
        </button>
        <button className="py-2 px-4 space-x-2 rounded-xl bg-[#f5df4d] text-[#1a1a1a] flex items-center font-bold cursor-not-allowed">
          <span>Login</span>
          <IoMdArrowForward />
        </button>
      </div>
    </div>
  );
};

export { Navbar };
