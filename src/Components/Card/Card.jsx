
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cube";
// import "swiper/css/pagination";
// import "swiper/swiper-bundle.css"; 

// import { EffectCube, Pagination } from "swiper/modules";

// const Card = () => {
//   return (
//     <div className="w-full bg-white py-16 px-4">
//       <div className="flex justify-center">
//         <div className="max-w-[1000px] mx-auto md:grid grid-cols-2 gap-10">
//           <div className="shadow-xl h-[400px] my-4 ">
//             <Swiper
//               effect={"cube"}
//               grabCursor={true}
//               cubeEffect={{
//                 shadow: true,
//                 slideShadows: true,
//                 shadowOffset: 20,
//                 shadowScale: 0.94,
//               }}
//               pagination={true}
//               modules={[EffectCube, Pagination]}
//               className="mySwiper"
//             >
//               <SwiperSlide>
//                 <img
//                   src={require("../../Assets/Images/background/bgcard1.png")}
//                   alt="Nature 1"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src={require("../../Assets/Images/background/bgcard2.png")}
//                   alt="Nature 2"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src={require("../../Assets/Images/background/bgcard13.png")}
//                   alt="Nature 3"
//                 />
//               </SwiperSlide>
//             </Swiper>
//           </div>
//           <div className="flex flex-col justify-center">
//             <p className="text-[#00df9a] font-bold text-[30px]">
//               About OurntaMockpaper
//             </p>
//             <p className=" text-[25px]">
//               Ourntamockpaper is a Best Platform for students to learn Aptitude
//               Skill with Minimum Efforts and Interactive Manner.
//             </p>
//             <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 hover:text-[gray] cursor-pointer mx-auato md:mx-0 py-3">
//               <a href="https://ourntamockpapers.com/">Check out Product</a>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation"; // Import the navigation module
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { EffectCube, Navigation, Pagination } from "swiper/modules";

const Card = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="flex justify-center">
        <div className="max-w-[1000px] mx-auto md:grid grid-cols-2 gap-10">
          <div className="shadow-xl h-[400px] my-4 ">
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              navigation={true} // Enable navigation
              modules={[EffectCube, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src={require("../../Assets/Images/background/bgcard13.png")}
                  alt="Nature 3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={require("../../Assets/Images/background/bgcard1.png")}
                  alt="Nature 2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={require("../../Assets/Images/background/bgcard2.png")}
                  alt="Nature 3"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col justify-center">
            <p className=" text-[25px]">
              Ourntamockpaper is a Best Platform for students to learn Aptitude
              Skill with Minimum Efforts and Interactive Manner.
            </p>
            <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 hover:text-[gray] cursor-pointer mx-auto md:mx-0 py-3">
              <a href="https://ourntamockpapers.com/">CHECK OUT PRODUCT</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

