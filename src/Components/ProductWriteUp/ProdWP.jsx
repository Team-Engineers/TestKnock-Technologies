import React from "react";
import Carousel from "react-elastic-carousel";
import "./product_write_up.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const CustomArrow = ({ type, onClick }) => {
  return (
    <button onClick={onClick} className="custom-arrow md:block hidden text-[20px]">
      
      <h1 className="eeee">{type === "PREV" ? "<" : ">"}</h1>

    </button>
  );
};

const handleTransitionEnd = (currentItem, totalItems) => {
  if (currentItem === totalItems - 1) {
    setTimeout(() => carousel.slideTo(0), 0);
  }
};

let carousel;
function ProdWP() {
  const imageUrls = [
    require("../../Assets/Images/productWriteUp/ournta01.png"),
    require("../../Assets/Images/productWriteUp/ournta02.png"),
    require("../../Assets/Images/productWriteUp/ournta03.png"),
    require("../../Assets/Images/productWriteUp/ournta04.png"),
  ];

  return (
    <div className="product_wp h-screen">
      <div className="flex justify-center ">
        <h2 className="font-bold mt-[2vw] mb-[3vw] text-[30px] my-[30px]">OUR PRODUCT</h2>
      </div>
      <div className="flex lg:flex-row flex-col h-[30vw]">
        <div className="w-[500px] h-full border-2 shadow-lg shadow-gray-600 border-gray rounded-[20px] mx-auto md:w-[700px] md:py-[30px]">
          {/* <Carousel
            breakPoints={breakPoints}
            renderArrow={CustomArrow}
            enableAutoPlay
            autoPlaySpeed={3000}
            ref={(ref) => (carousel = ref)} // Save the reference to the Carousel component
            onTransitionEnd={({ index, items }) =>
              handleTransitionEnd(index, items.length)
            }
          >
            {imageUrls.map((url, index) => (
              <div key={index}>
                <img src={url} alt={`carousel-item-${index}`} />
              </div>
            ))}
          </Carousel> */}
          <img className="bg-cover w-full h-full" src={require("../../Assets/Images/productWriteUp/productWP03.gif")}/>
        </div>

        <div className="col-span-6 max-w-[500px] p-[30px] mx-auto justify-center relative top-[3vw]">
        <p className="text-[#063970] font-bold p-2 md:text-3xl text-1.5xl flex justify-center mb-[1vw] tracking-wide">TestKnock</p>
          <p className="text-justify md:text-[1.1em] text-1xl ">
          Test Knock, your ultimate destination for mastering Aptitude Skills effortlessly and interactively. Our platform empowers students with an engaging learning experience, ensuring a seamless journey to excel in these essential skills. Join us to unlock your full potential with minimal effort, paving the way for your academic and career success.
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
