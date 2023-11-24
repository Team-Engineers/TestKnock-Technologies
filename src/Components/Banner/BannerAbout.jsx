import React from 'react';
import './banner.css';

export const BannerAbout = () => {
  return (
    <div className="bannerAbout text-white md:h-[45vw] h-[150vw] bg-[#e7d987]">
      <div className="max-w-[800px] relative top-[50%] md:top-[40%] mx-auto flex flex-col justify-center items-center">
        <div className="mt-[-96px] text-center">
          {/* <p className="text-[black] font-bold p-2 md:text-4xl text-2xl">We provide the</p> */}
          <h1 className="text-[white] md:text-8xl sm:text-6xl text-5xl font-bold md:py-6">
            About Us
          </h1>
        </div>  
        <div className="flex justify-center items-center">
          <a href="/team">
            <button className="bg-[black] w-[200px] rounded-md font-medium my-6 py-3 text-white">
              Meet Our Team
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}