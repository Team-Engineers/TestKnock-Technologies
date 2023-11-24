import React from "react";
import HeaderNew from "../Components/Header/HeaderNew";
import Footer from "../Components/Footer/Footer";
import BannerHome from "../Components/Banner/BannerHome";
import Offering from "../Components/Offering/Offering";

export const ContentPage = () => {
  return (
    <div>
      <HeaderNew />
      <BannerHome />
      <Offering />
      <Footer />
    </div>
  );
};
