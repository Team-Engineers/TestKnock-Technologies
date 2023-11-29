import React from 'react';
import { NavLink } from 'react-router-dom';
import './banner.css';

export const BannerTeam = () => {
  
  return (
    <div className="bannerTeam text-white md:h-[50vw] h-[150vw] bg-black">
      <div className=" max-w-[800px] relative top-[50%] md:top-[40%] mx-auto flex flex-col justify-center items-center">
        <div className="mt-[-46px] text-center">
          <h1 className="page_font text-[white] md:text-6xl sm:text-4xl text-4xl font-bold md:py-6">
            Meet Our Expert Team
          </h1>
        </div>  
        <div className="flex justify-center items-center">
          <NavLink to="/offering">
            <button className="bg-[black] w-[200px] hover:text-[gray] rounded-md font-medium my-6 py-3 text-white">
              Our Offerings
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
