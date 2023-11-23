import React from 'react';
import './banner.css';

export const BannerTeam = () => {
  // return (
  //   <div className=" bannerTeam text-white p-10 ">
  //     <div className="max-w-[800px] mt-[-96px]  h-screen mx-auto text-center flex flex-col justify-center">
  //       {/* <p className="text-[white] font-bold p-2 text-3xl ">Learn with us</p> */}
  //       <h2 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
  //         Meet Our Expert Team
  //       </h2>
  //       <div className="flex justify-center items-center">
         
  //       </div>
  //       <button className="bg-[black] w-[200px]  rounded-md font-medium my-6 mx-auto py-3 text-white">
  //          Connect with us
  //       </button>
  //     </div>
  //   </div>
  // )
  return (
    <div className="bannerTeam text-white md:h-[45vw] h-[150vw] bg-[#e7d987]">
      <div className="max-w-[800px] relative top-[50%] md:top-[40%] mx-auto flex flex-col justify-center items-center">
        <div className="mt-[-96px] text-center">
          {/* <p className="text-[black] font-bold p-2 md:text-4xl text-2xl">We provide the</p> */}
          <h1 className="text-[white] md:text-8xl sm:text-6xl text-5xl font-bold md:py-6">
            Meet Our Expert Team
          </h1>
        </div>  
        <div className="flex justify-center items-center">
          <a href="/offering">
            <button className="bg-[black] w-[200px] rounded-md font-medium my-6 py-3 text-white">
              Our Offerings
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
