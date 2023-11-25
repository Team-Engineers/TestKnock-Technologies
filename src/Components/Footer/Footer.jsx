import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import { IoMdPin, IoMdMail,IoMdCall } from 'react-icons/io';
import { Link } from "react-router-dom";
const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer class="bg-black">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="flex justify-center text-teal-600 sm:justify-start">
              <Link to="/">
                <img
                  src="./logo03.png"
                  alt="Logo"
                  className="max-h-[90px] max-w-[150px] px-5"
                />
              </Link>
            </div>

            <p class="mt-6 max-w-md text-center leading-relaxed text-gray-600 sm:max-w-xs sm:text-left">
              It's a product, service, or organization that emerged or gained
              prominence after that date. TestKnock is a platform, company, or
              concept related to testing or another field, I recommend checking
              their official website, relevant publications, or news sources for
              the latest and most accurate information.
            </p>

            <ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-400/75"
                >
                  <span class="sr-only">Instagram</span>
              <FaInstagramSquare/>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-400/75"
                >
                  <span class="sr-only">Twitter</span>
          <FaTwitterSquare/>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-teal-700 transition hover:text-teal-400/75"
                >
                  <span class="sr-only">Facebook</span> 
                  <FaFacebookSquare/>
                </a>
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:col-span-2">
            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-400">Company</p>

              <ul class="mt-8 space-y-4 text-md">
                <li>
                  <a
                    class="text-gray-600 transition hover:text-gray-400/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-600 transition hover:text-gray-400/75"
                    href="/"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-600 transition hover:text-gray-400/75"
                    href="/"
                  >
                    Our Team
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-600 transition hover:text-gray-400/75"
                    href="/"
                  >
                    Offering
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 transition hover:text-gray-400/75"
                    href="/"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-400">Whom we Serve</p>

              <ul class="mt-8 space-y-4 text-md">
                <li>
                  <a
                    class="text-gray-600 transition hover:text-gray-400/75"
                    href="/"
                  >
                   Class 9th and 10th
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-600 transition hover:text-gray-400/75"
                    href="/"
                  >
                   Class 11th and 12th
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-600 transition hover:text-gray-400/75"
                    href="/"
                  >
                    Under Graduates
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-600 transition hover:text-gray-400/75"
                    href="/"
                  >
                    Private School
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-400">Contact Us</p>

              <ul class="mt-8 space-y-4 text-md">
                <li>
                  <a
                    class="flex items-center text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <IoMdMail/>


                    <span class="flex-1 text-gray-600">info@testknock.com</span>
                  </a>
                </li>

                <li>
                  <a
                    class="flex items-center text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <IoMdCall/>

                    <span class="flex-1 text-gray-600">9953617456</span>
                  </a>
                </li>

                <li class="flex items-start text-gray-600 justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
<IoMdPin/>
                  <address class="-mt-0.5 flex-1 not-italic text-gray-600">
                  Office No. - 42, Durga Vihar, Near Amrapali Saphhire,
                      Sec-45, Noida , 201301
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-gray-100 pt-6">
          <div class="text-center sm:flex sm:justify-between sm:text-left">
            <p class="text-md text-gray-400">
              <span class="block sm:inline">All rights reserved.</span>

              <a
                class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Privacy Policy
              </a>
            </p>

            <p class="mt-4 text-md text-gray-400 sm:order-first sm:mt-0">
              &copy; {updatedDate} TestKnock
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
