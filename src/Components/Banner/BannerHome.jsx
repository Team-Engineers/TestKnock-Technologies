import React from "react";

const BannerHome = () => {
  return (
    <div className="bannerHome w text-white bg-[#e7d987]">
      <div className="w-[80vw] relative top-[50%] md:top-[40%] mx-auto flex flex-col justify-center items-center">
        <div className="sm:mt-[10vw] mt-[30vw]  text-center">
          <p className="page_font text-[white] font-bold p-2 md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-3xl ">Revise Smarter, Score Better:</p>
          <p className="page_font text-[#c9c0c0] font-bold p-1 md:text-1.5xl text-1xl">with our</p>
          <h1 className="page_font mx-auto flex  text-[white] md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-3xl  font-bold md:p-2 ">
          Expert Solutions, Scorecards, and Top-tier Technical & IT Services
          </h1>
        </div>  
        <div className="flex justify-center items-center">
          <a target="_blank" href="https://ourntamockpapers.com/">
            <button className="bg-[black] w-[180px] rounded-md font-medium mb-[5vw] my-9 py-3 text-white">
              Explore
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
