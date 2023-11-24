import React from "react";
import "./product_write_up.css";


function ProdWP() {

  return (
    <div className="product_wp h-screen">
      <div className="flex justify-center ">
        <h2 className="page_font font-bold mt-[2vw] mb-[3vw] text-[30px] my-[30px]">OUR PRODUCT</h2>
      </div>
      <div className="flex lg:flex-row flex-col h-[30vw]">
        <div className="w-[500px] h-full border-2 shadow-2xl shadow-gray-600 border-gray rounded-[20px] mx-auto md:w-[700px] md:py-[30px]">
          <img className="bg-cover w-full h-full " src={require("../../Assets/Images/productWriteUp/productWP03.gif")}/>
        </div>

        <div className="col-span-6 max-w-[500px] px-[30px] mx-auto justify-center relative ">
        <p className="text-[#063970] font-bold p-2 md:text-4xl text-2xl flex justify-center mb-[1vw] tracking-wide">TestKnock</p>
          <p className="text-justify md:text-[1em] text-1xl leading-[1.3em] ">
          Test Knock is more than just a platform; it's your personal gateway to conquering Aptitude Skills effortlessly and interactively. Our mission goes beyond teaching; we're here to ignite a passion for learning, making the journey towards excellence an adventure rather than a task. Join our vibrant community and discover a world where mastering crucial skills feels more like an exciting quest than a challenge. At Test Knock, we're committed to providing the tools and guidance you need to not just succeed but thrive in your academic and professional endeavors.
          </p>
          <a href="https://ourntamockpapers.com/">
            <button className="bg-[#161616] w-[180px] flex justify-center rounded-md font-medium my-6 mx-auto px-4 py-3 text-white">
              Checkout Product
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProdWP;
