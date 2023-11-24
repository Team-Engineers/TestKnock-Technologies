import React from 'react';
import HeaderNew from '../Components/Header/HeaderNew';
import Footer from '../Components/Footer/Footer';
import Team from '../Components/TeamPage/Team';
import { BannerTeam } from '../Components/Banner/BannerTeam';


export const TeamPage = () => {
  return (
    <div>
      <HeaderNew />
      <BannerTeam/>
      < Team/>
      <Footer/>
    </div>
  )
}