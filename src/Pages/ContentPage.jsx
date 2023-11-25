import React from "react";
import HeaderNew from "../Components/Header/HeaderNew";
import Footer from "../Components/Footer/Footer";
import Offering from "../Components/Offering/Offering";
import BannerOffering from "../Components/Banner/BannerOffering";
import Client from "../Components/Client/Client";

export const ContentPage = () => {
  return (
    <div className="overflow-hidden">
      <HeaderNew />
      <BannerOffering />
      <Offering />
      <Client />
      <Footer />
    </div>
  );
};
