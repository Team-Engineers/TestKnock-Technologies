import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./ouradvisory.css";
import { Navigation, Autoplay, Pagination, FreeMode } from 'swiper/modules';

const advisoryData = [
    {
        id: 1,
        imageUrl: require('../../Assets/Images/advisory/animesh_ikshit.jpeg'),
        name: 'Animesh Ikshit',
        qualification: 'B. Des. from NIFT Delhi M.A. in DESIGN STUDIES from NOTTINGHAM TRENT UNIVERSITY (U.K.)',
        expertise: 'DESIGN AND CREATIVITY EXPERT CORE MEMBER',
    },
    {
        id: 2,
        imageUrl: require('../../Assets/Images/advisory/manoj_jha.jpeg'),
        name: 'Manoj Jha',
        qualification: 'Management Graduate',
        expertise: 'Expert in STRATEGIES',
    },
    {
        id: 3,
        imageUrl: require('../../Assets/Images/advisory/prasanjit_sharma.jpeg'),
        name: 'Prasanjit Sharma',
        qualification: 'B. Tech from IIT Delhi',
        expertise: 'Tech Architech',
    },
    {
        id: 4,
        imageUrl: require('../../Assets/Images/advisory/omansh_mathur.jpeg'),
        name: 'Omansh Mathur',
        qualification: 'Graduated with a Dual Degree focused in Mathematics and Computing from Indian Institute of Technology (Banaras Hindu University), Varanas',
        expertise: 'SDE 3 GOOGLE',
    },
    {
        id: 5,
        imageUrl: require('../../Assets/Images/advisory/pranav_vijayvaran.jpeg'),
        name: 'pranav vijayvaran',
        qualification: 'IIT Bombay',
        expertise: 'Senior Software Engineer Microsoft',
    },
];

const OurAdvisory = () => {
    return (
        <>
            <div className="flex justify-center ">
                <h2 className="font-bold text-[200%] mb-[50px] ">OUR ADVISORY TEAM</h2>
            </div>
            <div className='h-[120%] w-[80%] swiperrr'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': 'black',
                        '--swiper-pagination-color': 'blue',
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
                            <div className='flex flex-row '>
                                <div>
                                    <img src={advisor.imageUrl} alt="" />
                                </div>
                                <div className='w-[80%] mr-[20px] ml-[20px] mt-auto mb-auto'>
                                    <h1>
                                        <span className='text-[150%] font-bold'>{advisor.name}</span><br />
                                        {advisor.qualification}<br />
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
}

export default OurAdvisory;