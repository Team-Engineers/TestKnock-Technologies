import React from "react";
import { NavLink } from "react-router-dom";
import "./product_write_up.css";


function ProdWP() {
  return (
    <div className="product_wp relative z-[10]  mx-auto ml-[30px] mr-[30px] ">
      <div className="flex justify-center ">
      <h2 className="heading_main text-center font-bold md:my-[5%] my-[15%] md:text-[40px] text-[30px] ">OUR PRODUCTS</h2>
      </div>
      <div className="max-w-[1240px]  mb-[6%] mx-auto md:grid grid-cols-2 gap-10 ">
        <div className=" border-2 max-md:mb-[5vw] max-md:h-full max-lg:h-[25em]  shadow-2xl shadow-slate-950 rounded-[20px] ">
          <img className="bg-cover w-full h-full  rounded-[20px]" src={require("../../Assets/Images/productWriteUp/productWP03.gif")}/>
        </div>
        <div className="flex flex-col justify-center ">
        <p className="subheading_main p-2 md:text-4xl text-4xl flex justify-center md:mb-[1vw] mb-[3vw] tracking-wide">TestKnock</p>
        <p className="text-justify xl:text-[100%] 2xl:text-[120%] text-[100%]  ">
          Test Knock is more than just a platform; it's your personal gateway to conquering Aptitude Skills effortlessly and interactively. Our mission goes beyond teaching; we're here to ignite a passion for learning, making the journey towards excellence an adventure rather than a task. Join our vibrant community and discover a world where mastering crucial skills feels more like an exciting quest than a challenge. At Test Knock, we're committed to providing the tools and guidance you need to not just succeed but thrive in your academic and professional endeavors.
          </p>
          <NavLink target="_blank" to="https://ourntamockpapers.com/">
            <button className="bg-[#161616] w-[180px] hover:text-[gray] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-white">
              Checkout Product
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProdWP;