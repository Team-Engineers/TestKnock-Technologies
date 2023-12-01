import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import "./offering.css";

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const Offering = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
 
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className=" bg-white overflow-hidden mt-[10px]  ml-[20px] mr-[20px]"
    >
       <div className="heading_main text-center font-bold md:mt-[5%] mt-[15%] md:mb-[2%] mb-[12%] md:text-[40px] text-[30px] ">
        <h2> What We Do </h2>
      </div> 
      <motion.div
        className="max-w-[1200px]  mx-auto lg:grid grid-cols-2 gap-[55px] "
        variants={fadeIn("up", "tween", 0.2, 1)}
        ref={ref1}
        animate={controls1}
      >
        <div>
          <div className="shadow-2xl mb-[50px] lg:w-full w-[90%] mx-auto container my-10 relative ">
            <div className="absolute lg:left-[40px] lg:top-[50px] h-[101%] w-[101%] top-[3vw] left-[3vw] z-10 inset-0 border-[3px] border-black  "></div>
            <img
              src={require("../../Assets/Images/offerings/offering5.png")}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <h3 className="text-[#063970] font-bold flex text-center justify-center my-2 mx-auto font-sans; text-3xl md:text-4xl  ">
            Top Quality Content
          </h3>
          <p className=" text-[90%] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] text-justify  ">
            Explore a premier platform tailored for students seeking top-tier
            aptitude practice. Our site curates exclusive, high-quality content
            meticulously designed for professionals-in-training. Elevate your
            skills with uniquely crafted exercises and resources, ensuring a
            comprehensive and effective learning experience. Gain a competitive
            edge in aptitude testing through our expertly curated collection,
            empowering you to excel in your academic and professional endeavors.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="max-w-[1200px] mt-[5vw]  max-md:mb-[10vw] mx-auto lg:grid grid-cols-2 gap-10 max-lg:mb-[20%]"
        ref={ref2}
        animate={controls2}
      >
        <div className=" h-[400px] relative top-[10vw]  lg:flex hidden  flex-col justify-center">
        <h3 className="text-[#063970] font-bold flex justify-center my-2 mx-auto font-sans; text-3xl md:text-4xl  ">
            We Provide
          </h3>
          <h2 className="text-[20px] text-[#063970] text-left py-6">Class 9th & 10th</h2>
          <p className=" text-sm text-justify -my-4">
            Our company provides interactive math ,science and current affairs
            learning tools designed to enhance the mathematical skills of
            students in 9th and 10th grades.This holistic approach equips
            students with a diverse skill set, laying the foundation for future
            academic pursuits and an informed, thoughtful approach to the
            challenges of the modern era.
          </p>
          <h2 className="text-[20px] text-[#063970] text-left py-6">Class 11th & 12th</h2>
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
          <h2 className="text-[20px] text-[#063970] text-left py-6">College(Tech)</h2>
          <p className=" text-sm text-justify -my-4">
            In Technical Education, we offer specialized resources to fortify
            skills in technical quantitative aptitude, verbal ability,
            reasoning, and comparison logical reasoning. Our platform provides
            targeted content, interactive learning modules, and practice
            assessments tailored to enhance proficiency in technical subjects.
          </p>
          <h2 className="text-[20px] text-[#063970] text-left py-6">College(Non-Tech)</h2>
          <p className=" text-sm text-justify -my-4">
            In Non-Tech education, we provide a specialized and targeted
            approach to enhance skills in Quantitative Aptitude, Verbal Ability,
            Comprehension, Logical Reasoning and General Awareness. Our
            comprehensive platform offers curated content, including interactive
            modules and practice assessments, designed to strengthen
            foundational numerical skills and improve language proficiency.
          </p>
        </div>
        <div className="shadow-2xl rounded-2xl lg:h-[700px] mx-auto md:h-[500px] h-[300px] sm:w-[80%] w-[85%] lg:w-[500px] md:mb-[10%] my-10">
          <img
            src={require("../../Assets/Images/offerings/offering6.png")}
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="  max-lg:h-[500px]md:h-[400px] max-md:h-full lg:hidden block ">
          <h3 className="text-[#063970] font-bold flex justify-center my-2 mx-auto font-sans; text-3xl md:text-4xl  ">
            We Provide
          </h3>
          <h2 className="text-[20px] text-[#063970] text-left py-6">Class 9th & 10th</h2>
          <p className=" text-sm text-justify -my-4">
            Our company provides interactive math ,science and current affairs
            learning tools designed to enhance the mathematical skills of
            students in 9th and 10th grades.This holistic approach equips
            students with a diverse skill set, laying the foundation for future
            academic pursuits and an informed, thoughtful approach to the
            challenges of the modern era.
          </p>
          <h2 className="text-[20px] text-[#063970] text-left py-6">Class 11th & 12th</h2>
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
          <h2 className="text-[20px] text-[#063970] text-left py-6">College(Tech)</h2>
          <p className=" text-sm text-justify -my-4">
            In Technical Education, we offer specialized resources to fortify
            skills in technical quantitative aptitude, verbal ability,
            reasoning, and comparison logical reasoning. Our platform provides
            targeted content, interactive learning modules, and practice
            assessments tailored to enhance proficiency in technical subjects.
          </p>
          <h2 className="text-[20px] text-[#063970] text-left py-6">College(Non-Tech)</h2>
          <p className=" text-sm text-justify -my-4">
            In Non-Tech education, we provide a specialized and targeted
            approach to enhance skills in Quantitative Aptitude, Verbal Ability,
            Comprehension, Logical Reasoning and General Awareness. Our
            comprehensive platform offers curated content, including interactive
            modules and practice assessments, designed to strengthen
            foundational numerical skills and improve language proficiency.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="max-w-[1200px]  mx-auto lg:grid grid-cols-2 gap-[55px] "
        variants={fadeIn("right", "tween", 0.2, 1)}
        ref={ref3}
        animate={controls3}
      >
         <div className="shadow-2xl mb-[50px] lg:w-full w-[90%] mx-auto container my-10 relative ">
            <div className="absolute lg:left-[40px] lg:top-[50px] h-[101%] w-[101%] top-[3vw] left-[3vw] z-10 inset-0 border-[3px] border-black  "></div>
          <img
            src={require("../../Assets/Images/offerings/offering4.png")}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-center">
          <h3 className="text-[#063970] font-bold flex text-center justify-center my-5 mx-auto font-sans; text-3xl md:text-4xl ">
            <span className="sm:hidden"> End-To-End <br /> Tech Solution</span> <span className="max-sm:hidden">End-To-End Tech Solution</span>
          </h3>
          <p className=" text-[90%] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] text-justify  ">
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
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="max-w-[1200px] mt-[5vw] max-lg:mb-[25vw] max-md:mb-[10vw] mx-auto lg:grid grid-cols-2 gap-10 "
        ref={ref4}
        animate={controls4}
      >
        <div className=" h-[400px] relative top-[10vw]  lg:flex hidden  flex-col justify-center">
        <h3 className="text-[#063970] font-bold flex justify-center my-2 mx-auto font-sans; text-3xl md:text-4xl  ">
            We Provide
          </h3>
          <h2 className="text-[20px] text-left text-[#063970] py-6">
            Web Development :
          </h2>
          <p className=" text-sm text-justify -my-4">
            In web development encompass a wide range of tools and practices
            aimed at creating robust, scalable, and user-friendly websites and
            web applications.Here are some key aspects of tech solutions in web
            development:<br></br>
          </p>
          <div className=" grid grid-cols-4 gap-[80px] justify-center items-center ml-auto mr-auto">
            <div className="shadow-2xl w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/responsive.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Responsive</p>
            </div>
            <div className="shadow-2xl w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/frontend.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Frontend</p>
            </div>
            <div className="shadow-2xl w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/server side.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Server-Side</p>
            </div>
            <div className="shadow-2xl w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/progressive.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Progressive</p>
            </div>
          </div>
          <h2 className="text-[20px] text-left text-[#063970] py-10 my-6">
            Mobile App :
          </h2>
          <p className=" text-sm text-justify -my-10">
            Mobile app involve the application of advanced technologies to
            address various challenges in mobile app development.Key aspects of
            tech solutions for mobile apps include:<br></br>
          </p>
          <div className=" grid grid-cols-5 gap-[80px] justify-center items-center ml-auto mr-auto my-8">
            <div className="shadow-2xl w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/crossplatform.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Cross Platform</p>
            </div>
            <div className="shadow-2xl w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/cloudintergration.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Cloud Integration</p>
            </div>
            <div className="shadow-2xl w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/miandai.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>MI and AI</p>
            </div>
            <div className="shadow-2xl w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/blockchain.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Block Chain</p>
            </div>
            <div className="shadow-2xl w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/cybersecurity.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Cyber Security</p>
            </div>
          </div>
        </div>
        <div className="shadow-2xl rounded-2xl lg:h-[700px] mx-auto md:h-[500px] h-[300px] sm:w-[80%] w-[85%] lg:w-[500px] md:mb-[10%] my-10">
          <img
            src={require("../../Assets/Images/offerings/offering-1.png")}
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className=" md:h-[400px]   lg:hidden block  ">
        <h3 className="text-[#063970] font-bold flex justify-center my-2 mx-auto font-sans; text-3xl md:text-4xl  ">
            We Provide
          </h3>
          <h2 className="text-[20px] text-left text-[#063970] py-6">
            Web Development :
          </h2>
          <p className=" text-sm text-justify -my-4">
            In web development encompass a wide range of tools and practices
            aimed at creating robust, scalable, and user-friendly websites and
            web applications.Here are some key aspects of tech solutions in web
            development:
            <br />
          </p>
          <div className="flex flex-wrap mx-auto offeringimage2 justify-center items-center ml-auto mr-auto mt-[40px] mb-[50px] ">
            <div className=" w-[60px] h-[60px] mb-[-60px] relative">
              <img
                src={require("../../Assets/Images/offerings/responsive.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Responsive</p>
            </div>
            <div className=" w-[60px] h-[60px] mb-[-60px] relative">
              <img
                src={require("../../Assets/Images/offerings/frontend.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Frontend</p>
            </div>
            <div className=" w-[60px] h-[60px]  relative">
              <img
                src={require("../../Assets/Images/offerings/server side.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Server-Side Scripting</p>
            </div>
            <div className=" w-[60px] h-[60px]  relative">
              <img
                src={require("../../Assets/Images/offerings/progressive.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Progressive Web Apps</p>
            </div>
          </div>
          <h2 className="text-[20px] text-left text-[#063970] py-10">Mobile App :</h2>
          <p className=" text-sm text-justify -my-6">
            Mobile app involve the application of advanced technologies to
            address various challenges in mobile app development.Key aspects of
            tech solutions for mobile apps include:<br></br>
          </p>
          <div className="container justify-center mx-auto">
            <div className=" flex flex-wrap offeringimage sm justify-center items-center mx-auto mt-[10px] mb-[30px] ">
            <div className=" w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/crossplatform.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Cross Platform</p>
            </div>
            <div className=" w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/cloudintergration.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Cloud Integration</p>
            </div>
            <div className=" text-center w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/miandai.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>MI and AI</p>
            </div>
            <div className=" w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/blockchain.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Block Chain</p>
            </div>
            <div className=" w-[60px] h-[60px] my-10 relative">
              <img
                src={require("../../Assets/Images/offerings/cybersecurity.png")}
                className="w-full h-full object-cover"
                alt=""
              />
              <p>Cyber Security</p>
            </div>
          </div>
          </div>
          
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Offering;
