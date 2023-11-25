import React from "react";
import HeaderNew from "../Components/Header/HeaderNew";
import Footer from "../Components/Footer/Footer";
import Offering from "../Components/Offering/Offering";
import BannerOffering from "../Components/Banner/BannerOffering";

export const ContentPage = () => {
  return (
    <div>
      <HeaderNew />
      <BannerOffering />
      <Offering />
      <Footer />
    </div>
  );
};
