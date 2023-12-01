import React from "react";
import { NavLink } from "react-router-dom";

const BannerOffering = () => {
  return (
    <div className="bannerOffer text-white md:h-[41vw] h-[130vw] bg-black">
      <div className="max-w-[800px] relative top-[50%] md:top-[40%] mx-auto flex flex-col justify-center items-center">
        <div className="mt-[-46px] text-center">
          <h1 className="page_font text-[white] md:text-7xl sm:text-5xl text-5xl font-bold md:py-6">
            HOW WE HELP
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <NavLink to="/team">
            {/* <button className="bg-[black]  hover:text-[gray] w-[200px] rounded-md font-medium my-6 py-3 text-white"> */}
            <button className="bg-[black] border border-white hover:text-[gray] sm:w-[180px] w-[140px] rounded-md font-medium mb-[5vw] my-9 py-2 sm:py-3 text-white">
              Know more
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BannerOffering;
