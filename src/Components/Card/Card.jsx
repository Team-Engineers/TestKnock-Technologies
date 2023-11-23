import React from "react";

const Card = () => {
  return (
    <div className="py-[100px] px-4 mx-auto mr-[70px] ml-[70px]">
      <div className="flex justify-center ">
        <h2 className="font-bold text-[30px]">OUR CLIENTS</h2>
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl  h-[400px] my-4 hover:scale-90 duration-100">
          1.
          <h2 className="text-2xl font-bold text-center py-8">Client ABC</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">heyy there! </p>
          </div>
          <button className="bg-[#161616] w-[200px] flex justify-center rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
            Read More
          </button>
        </div>
        <div className="shadow-xl  h-[400px] my-4 bg-gray-100 hover:scale-90 duration-100">
          2.
          <h2 className="text-2xl font-bold text-center py-8">Client ABC</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">this is me! </p>
          </div>
          <button className="bg-[#161616] w-[200px] flex justify-center rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
            Read More
          </button>
        </div>
        <div className="shadow-xl  h-[400px] my-4 hover:scale-90 duration-100">
          3.
          <h2 className="text-2xl font-bold text-center py-8">Client ABC</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Hello ! </p>  
          </div>
          <button className="bg-[#161616] w-[200px] flex justify-center rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
