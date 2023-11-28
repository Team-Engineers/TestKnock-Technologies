import React from 'react';
import HeaderNew from '../Components/Header/HeaderNew';
import Footer from '../Components/Footer/Footer';
import { BannerAbout } from '../Components/Banner/BannerAbout';
import About from '../Components/About/About';
import OurAdvisory from '../Components/About/OurAdvisory';


export const AboutPage = () => {
  return (
    <div>
      <HeaderNew />
      <BannerAbout/>
      <About/>
      <OurAdvisory/>
      <Footer/>
    </div>
  )
}