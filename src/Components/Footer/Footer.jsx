import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#e7d987] overflow-hidden  w-full">
      <div className="max-w-[1240px] mx-auto mr-[10px] ml-[10px] py-16 px-4 lg:grid lg:grid-cols-3 gap-8 text-[gray]">
        <div className="lg:col-span-1">
          <h1 className="w-full text-3xl font-bold text-black">KUCH BHI</h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing ullam iste
            repellat accusantium.
          </p>
          <div className="flex justify-between w-full md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-cols- lg:flex-row justify-between mt-6 lg:px-4">
          <div className="mb-8 lg:mb-0">
            <h6 className="font-medium text-black text-lg lg:text-2xl">Solutions</h6>
            <ul>
              <li className="py-2 text-base lg:text-xl">Analytics</li>
              <li className="py-2 text-base lg:text-xl">Marketing</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <h6 className="font-medium text-black text-lg lg:text-2xl">Support</h6>
            <ul>
              <li className="py-2 text-base lg:text-xl">Documentation</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <h6 className="font-medium text-black text-lg lg:text-2xl">Company</h6>
            <ul>
              <li className="py-2 text-base lg:text-xl">About</li>
              <li className="py-2 text-base lg:text-xl">Blog</li>
              <li className="py-2 text-base lg:text-xl">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black text-lg lg:text-2xl">Legal</h6>
            <ul>
              <li className="py-2 text-base lg:text-xl">Claim</li>
              <li className="py-2 text-base lg:text-xl">Policy</li>
              <li className="py-2 text-base lg:text-xl">Terms</li>
            </ul>
          </div>
        </div>
        <div className="col-span-3 mt-8 text-center text-lg lg:text-xl">
          <p> &copy; 2023 Your Company Name</p>
        </div>
        <div className="col-span-3 text-center text-lg lg:text-xl">
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
