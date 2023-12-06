import React from 'react';
import { NavLink } from 'react-router-dom';
import './banner.css';

export const BannerAbout = () => {
  return (
    <div className="bannerAbout text-white xl:h-[34em] lg:h-[34em] md:h-[34em]  2xl:h-[38em] h-[34em]  flex items-center">
      <div className="max-w-[800px] mx-auto flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="page_font text-[white] md:text-7xl sm:text-5xl text-5xl font-bold md:pb-6 md:pt-20">
            About Us
          </h1>
        </div>  
        <div className="flex justify-center items-center">
          <NavLink to="/team">
            <button className="bg-[black] text-[80%] md:text-[100%] border border-white hover:text-[gray] sm:w-[180px] w-[140px] rounded-md font-medium mb-[5vw] my-9 py-2 sm:py-3 text-white">
              Meet Our Team
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
