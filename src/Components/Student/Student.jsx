import React from "react";
import "./sudent.css";
const Student = () => {
  return (
    <div className="py-[100px] px-4">
      <div className="flex justify-center">
        <h2 className=" text-[50px] font-sans ">What They Say</h2>
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-4 gap-4 py-10">
        <div className="shadow-xl student1 h-[500px] my-4 bg-gray-200 hover:scale-90 duration-100 rounded-3xl"></div>
        <div className="shadow-xl h-[500px] student2 my-4 bg-gray-200 hover:scale-90 duration-100 rounded-3xl"></div>
        <div className="shadow-xl h-[500px] student3 my-4 bg-gray-200 hover:scale-90 duration-100 rounded-3xl"></div>
        <div className="shadow-xl h-[500px] student4 my-4 bg-gray-200 hover:scale-90 duration-100 rounded-3xl"></div>
      </div>
    </div>
  );
};

export default Student;
