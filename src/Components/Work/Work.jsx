import React from "react";
import "./work.css";

const Work = () => {
  return (
    <div className="py-[100px] px-4 overflow-hidden ">
      <div className="flex justify-center ">
        <p className=" text-[30px] text-center font-sans ">
          What We Do <br></br>
          <span className="text-[50px] ">OUR SERVICES</span>
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-6">
        <div className="shadow-xl  h-[400px] my-10">
          <img
            src={require("../../Assets/Images/offerings/work7.gif")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-center">
          <h3 className="text-green-800 flex justify center font-sans; text-[40px] my-10 mx-10">
            Content Creation
          </h3>
          <p className=" text-[20px] mx-10 text-justify ">
            "Providing quality and concept-based content is our commitment to
            students. We strive to offer educational materials that not only
            meet academic standards but also foster a deep understanding of the
            subject matter. Our content is curated to inspire curiosity,
            critical thinking, and a love for learning. Whether it's
            comprehensive study materials, engaging exercises, or insightful
            resources, we aim to empower students with the knowledge and skills
            they need to succeed academically and beyond. Join us on a journey
            of discovery and academic excellence!"
          </p>
          <button className="bg-black text-white w-[300px] rounded-lg font-medium my-6 mx-10 hover:text-[gray] cursor-pointer   py-3 text-[20px]">
            <a href="/contact">Subscribe our product to test</a>
          </button>
        </div>
      </div>
      <div className="flex justify-center "></div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-6">
        <div className=" flex flex-col justify-center">
          <h3 className="text-green-800 flex justify center font-sans; text-[40px] my-10 mx-10">
            Tech Solutions
          </h3>
          <p className=" text-[20px] text-justify">
            "Empowering businesses with innovative and tailored tech solutions
            is at the core of our mission. We specialize in crafting
            cutting-edge technology solutions that address the unique challenges
            of today's dynamic digital landscape. From scalable software
            development to robust IT infrastructure, we leverage the latest
            advancements to drive efficiency, enhance user experiences, and
            propel our clients toward sustained success. Our dedicated team of
            tech experts is committed to delivering comprehensive solutions that
            not only meet current needs but also anticipate and adapt to the
            evolving demands of tomorrow. Partner with us for a transformative
            journey into the world of unparalleled technological solutions."
          </p>
          <button className="bg-black text-white w-[300px] rounded-lg font-medium my-6 hover:text-[gray] cursor-pointer mx-auto md:mx-0 py-3 text-[20px]">
            <a href="/contact">Connect to Know more</a>
          </button>
        </div>
        <div className="shadow-xl  h-[300px] my-40 border border-r-2">
          <img
            src={require("../../Assets/Images/offerings/work10.gif")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-black text-white w-[300px] rounded-lg font-medium my-6 hover:text-[gray] cursor-pointer mx-auto md:mx-0 py-3 text-[25px]">
          <a href="/offering">Get To Know More..</a>
        </button>
      </div>
    </div>
  );
};
export default Work;
