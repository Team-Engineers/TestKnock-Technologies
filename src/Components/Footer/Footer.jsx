import React from "react";
import { NavLink } from "react-router-dom";

import { IoMdPin, IoMdMail, IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-black overflow-hidden ">
      <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="grid justify-center ">
            <div className=" flex justify-center gap-6 lg:justify-start text-[#063970] ">
              <NavLink to="/">
                <div className="flex items-center">
                  <div className="mr-4 mb-[-12px] ">
                    <img
                      src="./logo_final.png"
                      alt="Logo"
                      className="max-h-[60px] max-w-[60px] px-4 pb-2"
                    />
                  </div>
                  <div className="text-white font-sans font-bold text-[150%] ml-[-13%]">
                    <h2>
                      <span>Tes</span> 
                      <span>tKn</span> 
                      <span>ock</span>
                    </h2>
                  </div>
                </div>
              </NavLink>
            </div>
            <p className="mt-6 lg:text-justify md:text-[100%] text-[80%] hover:text-white text-center leading-relaxed text-gray-600 lg:max-w-xs ml-[20px] mr-[20px] ">
              At TestKnock, we are dedicated to more than just academic success.
              Our unwavering commitment extends to providing you with the
              essential tools and expert guidance. So join us on this
              transformative expedition and discover where educational
              excellence is not just an aspiration but an inspiring and
              achievable pursuit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:col-span-2">
            <div className="text-center ">
              <p className="md:text-[120%] text-[90%] text-gray-400 hover:text-white ">Company</p>
              <ul className="mt-8 space-y-4 text-[80%] md:text-[100%]">
                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/team"
                  >
                    Our Team
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/offering"
                  >
                    Offering
                  </NavLink>
                </li>
                <li className="max-sm:hidden">
                  <NavLink
                    className="text-gray-600 transition hover:text-white"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="text-center ">
              <p className="md:text-[120%] text-[90%] hover:text-white  text-gray-400 whitespace-nowrap">
                Whom we Serve
              </p>
              <ul className="mt-8 space-y-4 text-[80%] md:text-[100%]">
                <li>
                  <p className="text-gray-600 transition hover:text-white whitespace-nowrap">
                    School Students
                  </p>
                </li>

                <li>
                  <p className="text-gray-600 transition hover:text-white whitespace-nowrap">
                    College Students
                  </p>
                </li>

                <li>
                  <p className="text-gray-600  transition hover:text-white whitespace-nowrap">
                    Educational Institutions
                  </p>
                </li>

                <li>
                  <p className="text-gray-600 transition  hover:text-white whitespace-nowrap">
                    Private Schools
                  </p>
                </li>
              </ul>
            </div>
            <div className="text-center  max-sm:hidden sm:text-left">
              <p className="text-[120%] hover:text-white font-medium text-gray-400">
                Contact Us
              </p>
              <ul className="mt-8 space-y-4 text-md">
                <li>
                  <NavLink
                    className="flex items-center hover:text-white text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    to="/"
                  >
                    <IoMdMail />

                    <span className="flex-1 hover:text-white text-gray-600">
                      info@testknock.com
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="flex items-center hover:text-white text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    to="/"
                  >
                    <IoMdCall />

                    <span className="flex-1 hover:text-white text-gray-600">9953617456</span>
                  </NavLink>
                </li>

                <li className="flex items-start hover:text-white text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <IoMdPin />
                  <address className="-mt-0.5 flex-1 not-italic hover:text-white text-gray-600">
                    Office No. - 42, Durga Vihar, Near Amrapali Saphhire,
                    Sec-45, Noida , 201301
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:hidden block text-center mt-[6vw] sm:text-left">
          <NavLink
            to="/contact"
            className="text-[110%] font-medium text-gray-400"
          >
            Contact Us
          </NavLink>
          <ul className="mt-8 space-y-4 text-[80%]">
            <li className="flex items-center text-gray-600 justify-center gap-1.5 ">
              <NavLink
                className="flex items-center text-gray-600 justify-center gap-1.5 "
                to="/"
              >
                <IoMdMail />
                <span className="flex-1 text-gray-600">info@testknock.com</span>
              </NavLink>
            </li>
            <li className="flex items-center text-gray-600 justify-center gap-1.5 ">
              <NavLink
                className="flex items-center text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                to="/"
              >
                <IoMdCall />

                <span className="flex-1 text-gray-600">9953617456</span>
              </NavLink>
            </li>
            <li className="flex items-center text-gray-600 justify-center gap-1.5 ">
              <address className=" flex-1 not-italic text-gray-600">
                Office No. - 42, Durga Vihar, Near Amrapali Saphhire,
                Sec-45, Noida , 201301
              </address>
            </li>
          </ul>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-6 ml-[20px] mr-[20px]">
          <div className="text-center sm:flex justify-between sm:text-left">
            <p className="block text-gray-400 sm:inline">All rights reserved.</p>
            <p className="flex sm:flex-row flex-col  gap-[10px] max-md:justify-center  md:text-[100%] text-[90%] ">

             <NavLink
                className=" whitespace-nowrap  text-[#063970] underline transition hover:text-blue-800"
                to="/"
                >
                Terms & Conditions
              </NavLink>
              <p className="md:block hidden  text-gray-400 sm:inline"> | </p>
              <NavLink
                className="whitespace-nowrap text-[#063970] underline transition hover:text-blue-800"
                to="/"
                >
                Privacy Policy
              </NavLink>
                </p>
            <p className="mt-4 md:text-[100%] text-[90%] text-gray-400 sm:order-first sm:mt-0">
              &copy; {updatedDate} TestKnock
            </p>
          </div>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
