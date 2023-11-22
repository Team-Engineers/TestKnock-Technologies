import React from "react";

const Hero = () => {
  return (
    <div className=" banner text-white bg-[#e7d987]">
      <div className="max-w-[800px] mt-[-96px]  h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[black] font-bold p-2 text-3xl">Learn with us</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with us.
        </h1>
        <div className="flex justify-center items-center">
         
        </div>
        <button className="bg-[black] w-[200px]  rounded-md font-medium my-6 mx-auto py-3 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
