import React from 'react';
import HeaderNew from '../Components/Header/HeaderNew';
import Card from '../Components/Card/Card';
import Work from '../Components/Work/Work';
import Footer from '../Components/Footer/Footer';
import BannerHome from '../Components/Banner/BannerHome';
import ProductWP from '../Components/ProductWriteUp/ProdWP';

export const HomePage = () => {
  return (
    <div>
      <HeaderNew />
      <BannerHome />
      <ProductWP/>
      <Card/>
      <Work/>
      <Footer/>
    </div>
  )
}