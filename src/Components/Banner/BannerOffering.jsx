import React from "react";
import { NavLink } from "react-router-dom";

const BannerOffering = () => {
  return (
    <div className="bannerOffer text-white md:h-[45vw] h-[150vw] bg-black">
      <div className="max-w-[800px] relative top-[50%] md:top-[40%] mx-auto flex flex-col justify-center items-center">
        <div className="mt-[-96px] text-center">
          <h1 className="text-[white] m-[14px] md:text-6xl sm:text-4xl text-2xl font-bold md:p-2 w-[70vw]">
            HOW WE HELP
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <NavLink to="/contact">
            <button className="bg-[black] w-[180px] hover:text-[gray] rounded-md font-medium my-6 py-3 text-white">
              Know More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BannerOffering;
