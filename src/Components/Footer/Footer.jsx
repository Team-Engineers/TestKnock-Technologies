import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[black] overflow-hidden  w-full">
      <div className="max-w-[1240px] mx-auto mr-[10px] ml-[10px] py-16 px-4 lg:grid lg:grid-cols-3 gap-8 text-[gray]">
        <div className="lg:col-span-1">
          <h3 className="font-medium text-2xl  text-[white] mx-12">DYNAMIC SAVVYY</h3>
          <p className="py-4 mx-12 text-white">About Us</p>
          <p className="py-4 mx-12 text-white">Contact Us</p>
          <p className="py-4 mx-12 text-white">Our Team</p>
          <p className="py-4 mx-12 text-white">Refund Policy</p>
          <p className="py-4 mx-12 text-white">Term & Conditions</p>
          <p className="py-4 mx-12 text-white">Privacy Policy</p>
          <h2 className="text-[20px] mx-12 my-6">Follow Us</h2>
          <div className="flex justify-between w-full md:w-[75%] my-8 mx-12">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
          <p className="text-[20px] mx-12">+91 95604 43520</p>
        </div>
        <div className="lg:col-span-2 flex flex-cols- lg:flex-row justify-between mt-6 lg:px-4">
          <div className="mb-8 lg:mb-0">
            <h4 className="font-medium text-white text-lg lg:text-2xl">
              Whom do we serve?
            </h4>
            <ul>
              <li className="py-4 text-base lg:text-xl">9th & 10th Students</li>
              <li className="py-4 text-base lg:text-xl">
                11th & 12th Students
              </li>
              <li className="py-4 text-base lg:text-xl">Undergraduate</li>
              <li className="py-4 text-base lg:text-xl">
                Certification in Career Counselling
              </li>
              <li className="py-4 text-base lg:text-xl">Private Schools</li>
              <li className="py-4 text-base lg:text-xl">Partnership Program</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <h4 className="font-medium text-white text-lg lg:text-2xl">
              Students Resources
            </h4>
            <ul>
              <li className="py-4 text-base lg:text-xl">
                Collage Admission Update
              </li>
              <li className="py-4 text-base lg:text-xl">Explore Careers</li>
              <li className="py-4 text-base lg:text-xl">EXplore Hobby</li>
              <li className="py-4 text-base lg:text-xl">Entrance Exams</li>
              <li className="py-4 text-base lg:text-xl">Scholarships</li>
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
