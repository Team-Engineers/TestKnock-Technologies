import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ouradvisory.css";
import { Navigation, Autoplay, Pagination, FreeMode } from "swiper/modules";

const advisoryData = [
  {
    id: 1,
    imageUrl:
      "https://st2.depositphotos.com/2208684/11079/i/950/depositphotos_110794798-stock-photo-professional-man-standing-at-office.jpg",
    name: "Animesh Ikshit",
    qualification:
      "B. Des. from NIFT Delhi M.A. in DESIGN STUDIES from NOTTINGHAM TRENT UNIVERSITY (U.K.)",
    expertise: "DESIGN AND CREATIVITY EXPERT CORE MEMBER",
  },
  {
    id: 2,
    imageUrl:
      "https://st2.depositphotos.com/2208684/11079/i/950/depositphotos_110794798-stock-photo-professional-man-standing-at-office.jpg",
    name: "Animesh Ikshit",
    qualification:
      "B. Des. from NIFT Delhi M.A. in DESIGN STUDIES from NOTTINGHAM TRENT UNIVERSITY (U.K.)",
    expertise: "DESIGN AND CREATIVITY EXPERT CORE MEMBER",
  },
  {
    id: 3,
    imageUrl:
      "https://st2.depositphotos.com/2208684/11079/i/950/depositphotos_110794798-stock-photo-professional-man-standing-at-office.jpg",
    name: "Animesh Ikshit",
    qualification:
      "B. Des. from NIFT Delhi M.A. in DESIGN STUDIES from NOTTINGHAM TRENT UNIVERSITY (U.K.)",
    expertise: "DESIGN AND CREATIVITY EXPERT CORE MEMBER",
  },
  {
    id: 4,
    imageUrl:
      "https://st2.depositphotos.com/2208684/11079/i/950/depositphotos_110794798-stock-photo-professional-man-standing-at-office.jpg",
    name: "Animesh Ikshit",
    qualification:
      "B. Des. from NIFT Delhi M.A. in DESIGN STUDIES from NOTTINGHAM TRENT UNIVERSITY (U.K.)",
    expertise: "DESIGN AND CREATIVITY EXPERT CORE MEMBER",
  },
  {
    id: 5,
    imageUrl:
      "https://st2.depositphotos.com/2208684/11079/i/950/depositphotos_110794798-stock-photo-professional-man-standing-at-office.jpg",
    name: "Animesh Ikshit",
    qualification:
      "B. Des. from NIFT Delhi M.A. in DESIGN STUDIES from NOTTINGHAM TRENT UNIVERSITY (U.K.)",
    expertise: "DESIGN AND CREATIVITY EXPERT CORE MEMBER",
  },
];

const OurAdvisory = () => {
  return (
    <>
      <div className="flex justify-center ">
        <h2 className="font-bold text-[200%] mb-[50px] ">OUR ADVISORY TEAM</h2>
      </div>
      <div className="h-[120%] w-[80%] swiperrr ml-auto mr-auto mb-[50px]">
        <Swiper
          style={{
            "--swiper-navigation-color": "black",
            "--swiper-pagination-color": "blue",
          }}
          cssMode={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {advisoryData.map((advisor) => (
            <SwiperSlide key={advisor.id}>
              <div className="flex flex-row ">
                <div>
                  <img src={advisor.imageUrl} alt="" />
                </div>
                <div className="w-[80%] mr-[20px] ml-[20px] mt-auto mb-auto">
                  <h1>
                    <span className="text-[150%] font-bold">
                      {advisor.name}
                    </span>
                    <br />
                    {advisor.qualification}
                    <br />
                    {advisor.expertise}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default OurAdvisory;
