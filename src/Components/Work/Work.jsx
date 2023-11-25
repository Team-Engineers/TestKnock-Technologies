import React from "react";
import "./work.css";

const Work = () => {
  return (
    <div className="py-[100px] px-4 mx-auto ml-[20px] mr-[20px]">
      <div className="flex justify-center">
      <h2 className="page_font font-bold md:my-[2vw] my-[-3vw] text-[40px] ">What We Craft</h2>
      </div>

      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-10 ">
      <div className="shadow-2xl  h-[500px] my-10">
          <img
            src={require("../../Assets/Images/offerings/work7.gif")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-center">
        <h3 className="text-green-800 flex justify-center my-2 mx-auto font-sans; text-[38px] md:text-[40px] ">
            Content Creation
          </h3>
          <p className=" text-[20px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] text-justify leading-7 ">
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
          <a href="/contact">
          <button className="bg-[#161616] hover:text-[gray] w-[180px] flex justify-center my-6 mx-auto rounded-md font-medium  px-4 py-3 text-white">
           Subscribe our product to test
          </button>
          </a>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-10">
      <div className="shadow-2xl shadow-slate-950 md:hidden block h-[400px] my-[5vw] ">
          <img
            src={require("../../Assets/Images/offerings/work-1.png")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" flex flex-col justify-center">
        <h3 className="text-green-800 flex justify-center my-2 mx-auto font-sans; text-[40px] ">
            Tech Solutions
          </h3>
          <p className="  text-[20px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] text-justify leading-7">
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
          <button className="bg-black text-white w-[300px] rounded-lg font-medium my-6 hover:text-[gray] cursor-pointer flex justify-center  mx-auto py-3 text-[20px] ">
            <a href="/contact">Connect to Know more</a>
          </button>
        </div>
        <div className="shadow-2xl shadow-neutral-500 md:block hidden  h-[500px] my-40 ">
          <img
            src={require("../../Assets/Images/offerings/work-1.png")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center">
      <a href="/offering">
      <button className="bg-black text-white w-[300px] rounded-lg font-medium my-6 hover:text-[gray] cursor-pointer mx-auto md:mx-0 py-3 text-[20px] ">
          Get To Know More..
        </button>
        </a>
      </div>
    </div>
  );
};
export default Work;
