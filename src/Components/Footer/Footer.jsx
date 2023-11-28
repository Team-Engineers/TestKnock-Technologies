import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import { IoMdPin, IoMdMail, IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="grid justify-center ">
            <div className=" flex justify-center gap-6 lg:justify-start text-teal-600  ">
              <NavLink to="/">
                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      src="./logo_04.png"
                      alt="Logo"
                      className="max-h-[100px] max-w-[100px] px-4"
                    />
                  </div>
                  <div className="text-white font-sans font-bold text-[150%] ml-[-13%]">
                    <h2>TestKnock</h2>
                  </div>
                </div>
              </NavLink>
            </div>
            <p className="mt-6 lg:text-justify md:text-[100%] text-[80%] text-center leading-relaxed text-gray-600 lg:max-w-xs ml-[20px] mr-[20px] ">
              At TestKnock, we are dedicated to more than just academic success;
              our unwavering commitment extends to providing you with the
              essential tools and expert guidance. So,Join us on this
              transformative expedition and discover where educational
              excellence is not just an aspiration but an inspiring and
              achievable pursuit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:col-span-2">
            <div className="text-center ">
              <p className="md:text-[120%] text-[90%] text-gray-400">Company</p>
              <ul className="mt-8 space-y-4 text-[80%] md:text-[100%]">
                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-gray-400/75"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-gray-400/75"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-gray-400/75"
                    to="/team"
                  >
                    Our Team
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-600 transition hover:text-gray-400/75"
                    to="/offering"
                  >
                    Offering
                  </NavLink>
                </li>
                <li className="max-sm:hidden">
                  <NavLink
                    className="text-gray-600 transition hover:text-gray-400/75"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="text-center ">
              <p className="md:text-[120%] text-[90%]  text-gray-400 whitespace-nowrap">
                Whom we Serve
              </p>
              <ul className="mt-8 space-y-4 text-[80%] md:text-[100%]">
                <li>
                  <p className="text-gray-600 transition hover:text-gray-400/75 whitespace-nowrap">
                    Class 9th & 10th
                  </p>
                </li>

                <li>
                  <p className="text-gray-600 transition hover:text-gray-400/75 whitespace-nowrap">
                    Class 11th & 12th
                  </p>
                </li>

                <li>
                  <p className="text-gray-600 transition hover:text-gray-400/75 whitespace-nowrap">
                    Under Graduates
                  </p>
                </li>

                <li>
                  <p className="text-gray-600 transition hover:text-gray-400/75 whitespace-nowrap">
                    Private School
                  </p>
                </li>
              </ul>
            </div>

            <div className="text-center  max-sm:hidden sm:text-left">
              <p className="text-[120%] font-medium text-gray-400">
                Contact Us
              </p>
              <ul className="mt-8 space-y-4 text-md">
                <li>
                  <NavLink
                    className="flex items-center text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    to="/"
                  >
                    <IoMdMail />

                    <span className="flex-1 text-gray-600">
                      info@testknock.com
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="flex items-center text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    to="/"
                  >
                    <IoMdCall />

                    <span className="flex-1 text-gray-600">9953617456</span>
                  </NavLink>
                </li>

                <li className="flex items-start text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <IoMdPin />
                  <address className="-mt-0.5 flex-1 not-italic text-gray-600">
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
        <ul className="mt-8 flex text-[30px] justify-center gap-6  lg:gap-8">
          <li>
            <NavLink
              to="/"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-400/75"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagramSquare />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-400/75"
            >
              <span className="sr-only">Twitter</span>
              <FaTwitterSquare />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-400/75"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookSquare />
            </NavLink>
          </li>
        </ul>
        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="md:text-[100%] text-[90%] text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>

              <NavLink
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                to="/"
              >
                Terms & Conditions
              </NavLink>

              <span>&middot;</span>

              <NavLink
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
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
