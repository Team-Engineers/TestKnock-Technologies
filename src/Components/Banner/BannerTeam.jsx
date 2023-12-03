import React from 'react';
import { NavLink } from 'react-router-dom';
import './banner.css';

export const BannerTeam = () => {
  
  return (
    <div className="bannerTeam  text-white xl:h-[30em] lg:h-[30em] md:h-[30em]  2xl:h-[35em] h-[30em] flex items-center">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center">
        <div className="text-center">
        <h1 className="page_font text-[white] md:text-7xl sm:text-5xl text-4xl font-bold md:py-6">
            Meet Our Expert Team
          </h1>
        </div>  
        <div className="flex justify-center items-center">
          <NavLink to="/offerings">
          <button className="bg-[black] text-[80%] md:text-[100%] border border-white hover:text-[gray] sm:w-[180px] w-[140px] rounded-md font-medium mb-[5vw] my-9 py-2 sm:py-3 text-white">
              Our Offerings
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
