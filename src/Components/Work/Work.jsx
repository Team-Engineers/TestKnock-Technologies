import React from "react";
import { NavLink } from "react-router-dom";
import "./work.css";

const Work = () => {
  return (
    <div className="py-[50px] px-4 mx-auto ml-[20px] mr-[20px] overflow-hidden">
      <div className="flex justify-center">
        <h2 className="heading_main text-center font-bold md:mt-[0%] md:mb-[3%] my-[10%] md:text-[40px] text-[30px]">
          What We Craft
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto md:grid grid-cols-2 gap-10 ">
        <div className="shadow-2xl  h-[400px] my-10 shadow-slate-950 ">
          <img
            src={require("../../Assets/Images/offerings/content_001.jpeg")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-center">
          <h3 className="subheading_main p-2 md:text-4xl text-4xl flex justify-center md:mb-[1vw] mb-[3vw] tracking-wide ">
            Content Creation
          </h3>
          {/* <p className=" text-[20px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] text-justify leading-7 "> */}
          <p className="text-justify xl:text-[100%] 2xl:text-[120%] text-[100%]">
            Providing quality and concept-based content is our commitment to
            students. We strive to offer educational materials that not only
            meet academic standards but also foster a deep understanding of the
            subject matter. Our content is curated to inspire curiosity,
            critical thinking, and a love for learning. Whether it's
            comprehensive study materials, engaging exercises, or insightful
            resources, we aim to empower students with the knowledge and skills
            they need to succeed academically and beyond. Join us on a journey
            of discovery and academic excellence!
          </p>
          <NavLink to="/contact">
            <button className="bg-[#161616] hover:text-[gray] w-[320px] flex justify-center my-6 mx-auto rounded-md font-medium  px-3 py-3 text-white">
              Subscribe to Experience Our Product
            </button>
          </NavLink>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto md:grid grid-cols-2 gap-10">
        <div className="shadow-2xl shadow-slate-950 rounded-[20px] md:hidden block h-[400px] my-[5vw] ">
          <img
            src={require("../../Assets/Images/offerings/work-1.png")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-center">
          <h3 className="subheading_main p-2 md:text-4xl text-4xl flex justify-center md:mb-[1vw] mb-[3vw] tracking-wide">
            Tech Solutions
          </h3>
          {/* <p className="  text-[20px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] text-justify leading-7"> */}
          <p className="text-justify xl:text-[100%] 2xl:text-[120%] text-[100%]">
            Empowering businesses with innovative and tailored tech solutions
            is at the core of our mission. We specialize in crafting
            cutting-edge technology solutions that address the unique challenges
            of today's dynamic digital landscape. From scalable software
            development to robust IT infrastructure, we leverage the latest
            advancements to drive efficiency, enhance user experiences, and
            propel our clients toward sustained success.Our dedicated team of
            tech experts is committed to delivering comprehensive solutions that
            not only meet current needs but also anticipate and adapt to the
            evolving demands of tomorrow. Partner with us for a transformative
            journey into the world of unparalleled technological solutions.
          </p>
          <button className="bg-[#161616] hover:text-[gray] w-[240px] flex justify-center my-6 mx-auto rounded-md font-medium  px-4 py-3 text-white">
            <NavLink to="/contact">Connect to Know more</NavLink>
          </button>
        </div>
        <div className="shadow-2xl shadow-slate-950 md:block hidden  h-[400px] my-[8vw] ">
          <img
            src={require("../../Assets/Images/offerings/tech_solution03.png")}
            alt=""
            className="w-full h-full object-cover grayscale-[0%]"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <NavLink to="/offering">
          <button className="bg-[#161616] hover:text-[gray] w-[240px] flex justify-center my-6 mx-auto rounded-md font-medium  px-4 py-3 text-white">
            Get To Know More
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default Work;
