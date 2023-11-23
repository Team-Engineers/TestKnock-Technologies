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
    <div className="product_wp">
      <div className="flex justify-center ">
        <h2 className="font-bold text-[30px] my-[30px]">OUR PRODUCTS</h2>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="w-[350px] mx-auto md:w-[800px] md:py-[30px]">
          <Carousel
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
          </Carousel>
        </div>

        <div className="col-span-6 max-w-[500px] p-[40px] mx-auto justify-center relative top-[5vw]">
          <p>
            Best Platform for students to learn Aptitude Skills with minimum
            efforts and in an interactive manner.
          </p>
          <a href="https://ourntamockpapers.com/">
            <button className="bg-[#161616] w-[200px] flex justify-center rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
              Checkout Product
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProdWP;
