import React from "react";
import "./product_write_up.css";


function ProdWP() {

  return (
    <div className="product_wp ">
      <div className="flex justify-center ">
        <h2 className="page_font font-bold md:my-[3vw] my-[7vw] text-[30px]">OUR PRODUCT</h2>
      </div>
      <div className="flex mb-[5vw] justify-center lg:flex-row flex-col ">
        <div className="w-full h-full border-2 md:shadow-2xl shadow-gray-600 border-gray rounded-[20px] md:h-[500px] lg:h-[400px] 2xl:h-[500px] 2xl:w-[700px] xl:w-[700px] lg:w-[600px] ">
          <img className="bg-cover w-full h-full rounded-[20px]" src={require("../../Assets/Images/productWriteUp/productWP03.gif")}/>
        </div>
        <div className="col-span-6 md:w-[40vw] max-md:w-full px-[30px]  max-lg:mt-[5vw] justify-center relative ">
        <p className="text-[#063970] font-bold p-2 md:text-4xl text-4xl flex justify-center md:mb-[1vw] mb-[3vw] tracking-wide">TestKnock</p>
          <p className="text-justify 2xl:text-[1.3em] lg:text-[1em] text-[1.2em] leading-[1.3em] ">
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
