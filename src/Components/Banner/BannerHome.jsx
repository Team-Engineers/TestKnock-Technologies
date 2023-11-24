import React from "react";

const BannerHome = () => {
  return (
    <div className="bannerHome text-white md:h-[45vw] h-[150vw] bg-[#e7d987]">
      <div className="max-w-[800px] relative top-[50%] md:top-[40%] mx-auto flex flex-col justify-center items-center">
        <div className="mt-[-96px] text-center">
          <p className="page_font text-[white] font-bold p-2 md:text-5xl text-2xl ">Revise Smarter, Score Better:</p>
          <p className="page_font text-[#c9c0c0] font-bold p-1 md:text-1.5xl text-1xl">with our</p>
          <h1 className="page_font  text-[white] md:text-6xl sm:text-4xl text-2xl font-bold md:p-2 w-[70vw]">
          Expert Solutions, Scorecards, and Top-tier Technical & IT Services
          </h1>
        </div>  
        <div className="flex justify-center items-center">
          <a href="https://ourntamockpapers.com/">
            <button className="bg-[black] w-[180px] rounded-md font-medium my-6 py-3 text-white">
              Explore
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
