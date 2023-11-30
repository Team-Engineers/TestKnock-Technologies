import React from 'react';
import { NavLink } from 'react-router-dom';
import './banner.css';

export const BannerAbout = () => {
  return (
    <div className="bannerAbout text-white md:h-[45vw] h-[150vw] bg-black">
      <div className="max-w-[800px] relative top-[50%] md:top-[40%] mx-auto flex flex-col justify-center items-center">
        <div className="mt-[-46px] text-center">
          <h1 className="page_font text-[white] md:text-7xl sm:text-5xl text-5xl font-bold md:py-6">
            About Us
          </h1>
        </div>  
        <div className="flex justify-center items-center">
          <NavLink to="/team">
            <button className="bg-[black]  hover:text-[gray] w-[200px] rounded-md font-medium my-6 py-3 text-white">
              Meet Our Team
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}