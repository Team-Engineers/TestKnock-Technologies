import React from "react";
import { NavLink } from "react-router-dom";

const BannerHome = () => {
  return (
    <div className="bannerHome text-white xl:h-[30em] lg:h-[30em] md:h-[30em]  2xl:h-[35em] h-[30em]  flex items-center">
      <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center mt-[10%] ">
      <div className="text-center">
          <p className="page_font text-[white] font-bold p-2 md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-2xl ">Revise Smarter, Score Better:</p>
          <p className="page_font text-[#c9c0c0] font-bold my-2 md:text-2xl text-sm">with our</p>
          <h1 className="page_font mx-auto flex  text-[white] md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-2xl  font-bold md:p-5 ">
          Expert Solutions, Scorecards, and Top-tier Technical & IT Services
          </h1>
        </div>  
        <div className="flex justify-center items-center">
          <NavLink target="_blank" to="https://ourntamockpapers.com/">
          <button className="bg-[black] text-[80%] md:text-[100%] border border-white hover:text-[gray] sm:w-[180px] w-[140px] rounded-md font-medium mb-[5vw] my-9 py-2 sm:py-3 text-white">
              Explore
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
