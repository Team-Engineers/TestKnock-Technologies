import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#e7d987] overflow-hidden  md:w-full w-[100%]">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8  text-[gray]">
        <div>
          <h1 className="w-full text-3xl font-bold text-black">KUCH BHI</h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing ullam iste
            repellat accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 px-4">
          <div>
            <h6 className="font-medium text-black text-[20px]">Solutions</h6>
            <ul>
              <li className="py-2 text-[18px] ">Analytics</li>
              <li className="py-2 text-[18px]">Marketing</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black text-[20px]">Support</h6>
            <ul>
              <li className="py-2 text-[18px]">Documentation</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black text-[20px]">Company</h6>
            <ul>
              <li className="py-2 text-[18px]">About</li>
              <li className="py-2 text-[18px]">Blog</li>
              <li className="py-2 text-[18px]">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black text-[20px]">Legal</h6>
            <ul>
              <li className="py-2 text-[18px]">Claim</li>
              <li className="py-2 text-[18px]">Policy</li>
              <li className="py-2 text-[18px]">Terms</li>
            </ul>
          </div>
        </div>
        <div className="col-span-3 mt-8 text-center text-[18px]">
          <p> &copy; 2023 Your Company Name</p>
        </div>
        <div className="col-span-3  text-center text-[18px]">
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
