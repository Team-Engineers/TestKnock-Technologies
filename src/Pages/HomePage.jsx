import React from 'react';
import HeaderNew from '../Components/Header/HeaderNew';
import Footer from '../Components/Footer/Footer';
import BannerHome from '../Components/Banner/BannerHome';
import Card from '../Components/Card/Card';
import Work from '../Components/Work/Work';
import Student from '../Components/Student/Student';


export const HomePage = () => {
  return (
    <div>
      <HeaderNew />
      <BannerHome />
      <Card />
      <Work />
      <Student />
      <Footer/>
    </div>
  )
}