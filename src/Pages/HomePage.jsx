import React from 'react';
import HeaderNew from '../Components/Header/HeaderNew';
import Footer from '../Components/Footer/Footer';
import BannerHome from '../Components/Banner/BannerHome';


export const HomePage = () => {
  return (
    <div>
      <HeaderNew />
      <BannerHome />
      <Footer/>
    </div>
  )
}