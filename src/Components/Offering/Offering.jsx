import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1 });
    } else {
      controls2.start({ opacity: 0.5 });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1 });
    } else {
      controls3.start({ opacity: 0.5 });
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start({ opacity: 1 });
    } else {
      controls4.start({ opacity: 0.5 });
    }
  }, [controls4, inView4]);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className=" bg-white overflow-hidden  ml-[20px] mr-[20px]"
    >
      <p className=" text-[20px] md:text-[30px] font-bold text-center font-sans ">
        What We Do <br></br>
        <span className="text-[30px]  md:text-[40px] font-bold text-center  font-sans">
          OUR SERVICES
        </span>
      </p>
      <motion.div
        className="max-w-[1240px] mx-auto lg:grid grid-cols-2 gap-10 "
        variants={fadeIn("up", "tween", 0.2, 1)}
        ref={ref1}
        animate={controls1}
      >
        <div>
          <div className="shadow-2xl max-lg:ml-auto max-lg:mr-auto 2xl:w-[550px] 2xl:h-[400px] lg:w-[370px] lg:h-[460px] xl:w-[500px] xl:h-[450px] w-[300px] h-[300px] my-10 relative ">
            <div className="absolute top-[3vw] 2xl:w-[550px] 2xl:h-[400px] lg:w-[370px] lg:h-[460px] xl:w-[500px] xl:h-[450px] w-[300px] h-[300px]  left-[3vw] z-10 inset-0 border-[3px] border-black  "></div>
            <img
              src={require("../../Assets/Images/offerings/offering5.png")}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <h3 className="text-[#063970] font-bold flex justify-center my-2 mx-auto font-sans; text-3xl md:text-4xl  ">
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
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="max-w-[1240px] mt-[5vw]  max-md:mb-[10vw] mx-auto lg:grid grid-cols-2 gap-10 max-lg:mb-[20%]"
        ref={ref2}
        animate={controls2}
      >
        <div className=" h-[400px] relative top-[10vw]  lg:flex hidden  flex-col justify-center">
          <h3 className="text-[#063970] flex justify-center  mx-auto font-sans; text-3xl md:text-4xl ">
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
        <div className="shadow-2xl lg:h-[700px] h-[400px] lg:w-[500px]  w-[300px] my-10">
          <img
            src={require("../../Assets/Images/offerings/offering6.png")}
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="  max-lg:h-[500px]md:h-[400px] max-md:h-full lg:hidden block ">
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
      </motion.div>
      <motion.div
        className="max-w-[1240px] mx-auto lg:grid grid-cols-2 gap-10 "
        variants={fadeIn("right", "tween", 0.2, 1)}
        ref={ref3}
        animate={controls3}
      >
        <div className="shadow-2xl max-lg:ml-auto max-lg:mr-auto 2xl:w-[550px] 2xl:h-[400px] lg:w-[370px] lg:h-[460px] xl:w-[550px] xl:h-[350px] w-[260px] h-[300px] my-10 relative">
          <div className="absolute top-[4vw] 2xl:w-[550px] 2xl:h-[400px] lg:w-[370px] lg:h-[460px] xl:w-[550px] xl:h-[350px] w-[260px] h-[300px] left-[3vw] z-10 inset-0 border-[3px] border-black  "></div>
          <img
            src={require("../../Assets/Images/offerings/offering4.png")}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-center">
          <h3 className="text-[#063970] font-bold flex justify-center my-2 mx-auto font-sans; text-3xl md:text-4xl ">
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
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="max-w-[1240px] mt-[5vw] max-lg:mb-[25vw] max-md:mb-[10vw] mx-auto lg:grid grid-cols-2 gap-10 "
        ref={ref4}
        animate={controls4}
      >
        <div className=" h-[400px] relative top-[10vw]  lg:flex hidden  flex-col justify-center">
          <h2 className="text-[#063970] flex justify-center my-2 mx-auto font-sans; text-3xl md:text-4xl ">
            We Provide
          </h2>
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
        <div className="shadow-2xl lg:h-[700px] h-[400px] lg:w-[500px] w-[300px] my-10">
          <img
            src={require("../../Assets/Images/offerings/offering-1.png")}
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className=" md:h-[400px]   lg:hidden block  ">
          <h2 className="text-3xl  text-left  flex justify-center text-[#063970] font-serif">
            We Provide
          </h2>
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
            <div className=" grid grid-cols-4 gap-[80px] justify-center items-center ml-auto mr-auto my-8">
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
            <p>Server-Side Scripting</p>
          </div>
          <div className="shadow-2xl w-[60px] h-[60px] my-10 relative">
            <img
              src={require("../../Assets/Images/offerings/progressive.png")}
              className="w-full h-full object-cover"
              alt=""
            />
            <p>Progressive Web Apps</p>
          </div>
      </div>
          <h2 className="text-[20px] text-left py-10">Mobile App :</h2>
          <p className=" text-sm text-justify -my-6">
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
      </motion.div>
    </motion.div>
  );
};

export default Offering;
