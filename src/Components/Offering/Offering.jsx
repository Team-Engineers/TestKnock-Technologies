import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./offering.css";
const Offering = () => {

  return (
    <div
      className=" bg-white overflow-hidden py-[100px] px-4 mx-auto ml-[20px] mr-[20px]"
    >
      <p className=" text-[20px] font-bold text-center font-sans ">
        What We Do <br></br>
        <span className="text-[30px] font-bold text-center  font-sans">
          OUR SERVICES
        </span>
      </p>
      <div
        className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-10 "
      >
        <div>
          <div className="shadow-xl max-lg:ml-auto max-lg:mr-auto 2xl:w-[450px] 2xl:h-[550px] lg:w-[370px] lg:h-[460px] xl:w-[500px] xl:h-[450px] w-[300px] h-[360px] my-10 relative">
            <div className="absolute top-[5vw] 2xl:w-[450px] 2xl:h-[550px] lg:w-[370px] lg:h-[460px] xl:w-[500px] xl:h-[450px] w-[300px] h-[360px] left-[4vw] z-10 inset-0 border-[2px] border-black  "></div>

            <img
              src={require("../../Assets/Images/offerings/offering-2.png")}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <h3 className="text-[#063970] font-bold flex justify-center my-2 mx-auto font-sans; text-[38px] md:text-4xl  ">
            Top Quality Content
          </h3>
          <p className=" text-[20px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] text-justify leading-7 ">
            Explore a premier platform tailored for students seeking top-tier
            aptitude practice. Our site curates exclusive, high-quality content
            meticulously designed for professionals-in-training. Elevate your
            skills with uniquely crafted exercises and resources, ensuring a
            comprehensive and effective learning experience. Gain a competitive
            edge in aptitude testing through our expertly curated collection,
            empowering you to excel in your academic and professional endeavors.
          </p>
        </div>
      </div>

      <div
        className="max-w-[1240px] mt-[5vw] max-lg:mb-[25vw] max-md:mb-[10vw] mx-auto lg:grid grid-cols-2 gap-10 "
      >
        <div className=" h-[400px] relative top-[10vw]  lg:flex hidden  flex-col justify-center">
          <h3 className="text-[#063970] flex justify-center  mx-auto font-sans; text-[38px] md:text-4xl ">
            We Provide
          </h3>
          <h2 className="text-[20px] text-left py-6">Class 9th & 10th</h2>
          <p className=" text-sm text-justify -my-4">
            Our company provides interactive math ,science and current affairs
            learning tools designed to enhance the mathematical skills of
            students in 9th and 10th grades.This holistic approach equips
            students with a diverse skill set, laying the foundation for future
            academic pursuits and an informed, thoughtful approach to the
            challenges of the modern era.
          </p>
          <h2 className="text-[20px] text-left py-6">Class 11th & 12th</h2>
          <p className=" text-sm text-justify -my-4">
            Our company is dedicated to providing crafted materials in
            mathematics, guiding students through advanced concepts like
            calculus, algebra, and statistical analysis. In the realm of general
            English, our resources aid in mastering literature analysis,
            language proficiency, and effective communication. Current affairs
            modules keep students abreast of global events, politics, and
            socio-economic issues, fostering a well-rounded perspective. Our
            offerings extend to logical reasoning, developing analytical
            thinking and problem-solving skills.
          </p>
          <h2 className="text-[20px] text-left py-6">College(Tech)</h2>
          <p className=" text-sm text-justify -my-4">
            In Technical Education, we offer specialized resources to fortify
            skills in technical quantitative aptitude, verbal ability,
            reasoning, and comparison logical reasoning. Our platform provides
            targeted content, interactive learning modules, and practice
            assessments tailored to enhance proficiency in technical subjects.
          </p>
          <h2 className="text-[20px] text-left py-6">College(Non-Tech)</h2>
          <p className=" text-sm text-justify -my-4">
            In Non-Tech education, we provide a specialized and targeted
            approach to enhance skills in Quantitative Aptitude, Verbal Ability,
            Comprehension, Logical Reasoning and General Awareness. Our
            comprehensive platform offers curated content, including interactive
            modules and practice assessments, designed to strengthen
            foundational numerical skills and improve language proficiency.
          </p>
        </div>
        <div className="shadow-xl lg:h-[700px] h-[400px] my-10">
          <img
            src={require("../../Assets/Images/offerings/offering5.png")}
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="  md:h-[400px] lg:hidden block ">
          <h2 className="text-3xl  text-left flex justify-center text-[#063970] font-serif">
            We Provide
          </h2>
          <h2 className="text-[20px] text-left py-6">Class 9th & 10th</h2>
          <p className=" text-sm text-justify -my-4">
            Our company provides interactive math ,science and current affairs
            learning tools designed to enhance the mathematical skills of
            students in 9th and 10th grades.This holistic approach equips
            students with a diverse skill set, laying the foundation for future
            academic pursuits and an informed, thoughtful approach to the
            challenges of the modern era.
          </p>
          <h2 className="text-[20px] text-left py-6">Class 11th & 12th</h2>
          <p className=" text-sm text-justify -my-4">
            Our company is dedicated to providing crafted materials in
            mathematics, guiding students through advanced concepts like
            calculus, algebra, and statistical analysis. In the realm of general
            English, our resources aid in mastering literature analysis,
            language proficiency, and effective communication. Current affairs
            modules keep students abreast of global events, politics, and
            socio-economic issues, fostering a well-rounded perspective. Our
            offerings extend to logical reasoning, developing analytical
            thinking and problem-solving skills.
          </p>
          <h2 className="text-[20px] text-left py-6">College(Tech)</h2>
          <p className=" text-sm text-justify -my-4">
            In Technical Education, we offer specialized resources to fortify
            skills in technical quantitative aptitude, verbal ability,
            reasoning, and comparison logical reasoning. Our platform provides
            targeted content, interactive learning modules, and practice
            assessments tailored to enhance proficiency in technical subjects.
          </p>
          <h2 className="text-[20px] text-left py-6">College(Non-Tech)</h2>
          <p className=" text-sm text-justify -my-4">
            In Non-Tech education, we provide a specialized and targeted
            approach to enhance skills in Quantitative Aptitude, Verbal Ability,
            Comprehension, Logical Reasoning and General Awareness. Our
            comprehensive platform offers curated content, including interactive
            modules and practice assessments, designed to strengthen
            foundational numerical skills and improve language proficiency.
          </p>
        </div>
      </div>
      <div
        className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-10 "
      >
        <div className="shadow-xl max-lg:ml-auto max-lg:mr-auto 2xl:w-[550px] 2xl:h-[400px] lg:w-[370px] lg:h-[460px] xl:w-[550px] xl:h-[350px] w-[260px] h-[300px] my-10 relative">
          <div className="absolute top-[4vw] 2xl:w-[550px] 2xl:h-[400px] lg:w-[370px] lg:h-[460px] xl:w-[550px] xl:h-[350px] w-[260px] h-[300px] left-[3vw] z-10 inset-0 border-[2px] border-black  "></div>

          <img
            src={require("../../Assets/Images/offerings/offering4.png")}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-center">
          <h3 className="text-[#063970] font-bold flex justify-center my-2 mx-auto font-sans; text-[38px] md:text-4xl ">
            End-To-End Tech Soltuion
          </h3>
          <p className=" text-[20px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] text-justify leading-7 ">
            An end-to-end solution (E2ES) is a term that means that the provider
            of an application program, software and system will supply all the
            software as well as hardware requirements of the customer such that
            no other vendor is involved to meet the needs. These solutions are
            designed to address a specific business or technical challenge from
            start to finish, providing a seamless and holistic experience for
            users or organizations. Examples of end-to-end technology solutions
            can be found in various industries, such as enterprise resource
            planning (ERP) systems, supply chain management solutions, and
            integrated healthcare information systems.
          </p>
        </div>
      </div>
      <div
        className="max-w-[1240px] mt-[5vw] max-lg:mb-[25vw] max-md:mb-[10vw] mx-auto lg:grid grid-cols-2 gap-10 "
      >
        <div className=" h-[400px] relative top-[10vw]  lg:flex hidden  flex-col justify-center">
          <h2 className="text-[#063970] flex justify-center my-2 mx-auto font-sans; text-3xl md:text-4xl ">
            We Provide
          </h2>
          <h2 className="text-[20px] text-left py-6">Web Development</h2>
          <p className=" text-sm text-justify -my-4">
            In web development encompass a wide range of tools and practices
            aimed at creating robust, scalable, and user-friendly websites and
            web applications.Here are some key aspects of tech solutions in web
            development:<br></br>
            <p className=" text-sm text-justify my-1">1. Responsive Design</p>
            <br></br>
            <p className=" text-sm text-justify -my-3">
              2. Front-End Frameworks
            </p>
            <br></br>
            <p className=" text-sm text-justify my-2">
              3. Server-Side Scripting
            </p>
            <br></br>
            <p className=" text-sm text-justify -my-3 ">
              4. Progressive Web Apps
            </p>
          </p>
          <h2 className="text-[20px] text-left py-10">Mobile App</h2>
          <p className=" text-sm text-justify -my-6">
            Mobile app involve the application of advanced technologies to
            address various challenges in mobile app development.Key aspects of
            tech solutions for mobile apps include:<br></br>
            <p className=" text-sm text-justify my-2">
              1. Cross-Platform Development
            </p>
            <br></br>
            <p className=" text-sm text-justify -my-3">2. Cloud Integration</p>
            <br></br>
            <p className=" text-sm text-justify my-2">
              3. Machine Learning and AI
            </p>
            <br></br>
            <p className=" text-sm text-justify -my-3">
              4. Blockchain Technology
            </p>
            <br></br>
            <p className=" text-sm text-justify my-2">
              5. Cybersecurity Measures
            </p>
          </p>
        </div>
        <div className="shadow-xl lg:h-[700px] h-[400px] my-10">
          <img
            src={require("../../Assets/Images/offerings/offering-1.png")}
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className=" md:h-[400px]   lg:hidden block ">
          <h2 className="text-3xl  text-left  flex justify-center text-[#063970] font-serif">
            We Provide
          </h2>
          <h2 className="text-[20px] text-left py-6">Web Development</h2>
          <p className=" text-sm text-justify -my-4">
            In web development encompass a wide range of tools and practices
            aimed at creating robust, scalable, and user-friendly websites and
            web applications.Here are some key aspects of tech solutions in web
            development:
            <br />
            <p className=" text-sm text-justify my-2">1.Responsive Design</p>
            <br></br>
            <p className=" text-sm text-justify -my-3">
              2.Front-End Frameworks
            </p>
            <br></br>
            <p className=" text-sm text-justify my-2">
              3.Server-Side Scripting
            </p>
            <br></br>
            <p className=" text-sm text-justify -my-3">
              4.Progressive Web Apps
            </p>
          </p>
          <h2 className="text-[20px] text-left py-10">Mobile App</h2>
          <p className=" text-sm text-justify -my-6">
            Mobile app involve the application of advanced technologies to
            address various challenges in mobile app development.Key aspects of
            tech solutions for mobile apps include:<br></br>
            <p className=" text-sm text-justify my-2">
              1.Cross-Platform Development
            </p>
            <br></br>
            <p className=" text-sm text-justify -my-3">2.Cloud Integration</p>
            <br></br>
            <p className=" text-sm text-justify my-2">
              3.Machine Learning and AI
            </p>
            <br></br>
            <p className=" text-sm text-justify -my-3">
              4.Blockchain Technology
            </p>
            <br></br>
            <p className=" text-sm text-justify my-2">
              5.Cybersecurity Measures
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offering;
