import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleHeader = () => {
    setToggle(!toggle);
  };

  return (
    <div className=" navbar bg-[#e7d987]">
      <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[black]">LOGO</h1>
        <ul className="hidden md:flex">
          <li className="p-4 hover:text-[gray] cursor-pointer text-[black] text-[22px]">
            Home
          </li>
          <li className="p-4 hover:text-[gray] cursor-pointer text-[black] text-[22px]">
            About
          </li>
          <li className="p-4 hover:text-[gray] cursor-pointer text-[black] text-[22px]">
            Contact
          </li>
        </ul>
        <div onClick={handleHeader} className="block md:hidden">
          {toggle ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            toggle
              ? "fixed left-0 top-[100px] w-[70%] h-full border-r border-r-gray-900  bg-[#000300]  ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[black] m-4">REACT.</h1>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
