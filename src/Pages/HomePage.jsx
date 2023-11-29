import React from "react";
import HeaderNew from "../Components/Header/HeaderNew";
import Work from "../Components/Work/Work";
import Footer from "../Components/Footer/Footer";
import BannerHome from "../Components/Banner/BannerHome";
import ProductWP from "../Components/ProductWriteUp/ProdWP";
import Student from "../Components/Student/Student";
import Cover from "../Components/Banner/Cover";

export const HomePage = () => {
  return (
    <div>
      <HeaderNew />
      <Cover/>
      <BannerHome />
      <ProductWP />
      <Work />
      <Student />
      <Footer />
    </div>
  );
};
