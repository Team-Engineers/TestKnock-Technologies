import React from 'react';
import HeaderNew from '../Components/Header/HeaderNew';
import Footer from '../Components/Footer/Footer';
import { BannerAbout } from '../Components/Banner/BannerAbout';
import About from '../Components/About/About';


export const AboutPage = () => {
  return (
    <div>
      <HeaderNew />
      <BannerAbout/>
      <About/>
      <Footer/>
    </div>
  )
}