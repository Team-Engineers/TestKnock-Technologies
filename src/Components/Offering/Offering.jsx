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
      className=" bg-white overflow-hidden py-[100px] px-4 mx-auto ml-[20px] mr-[20px]"
    >
      <p className=" text-[20px] text-center font-sans ">
        What We Do <br></br>
        <span className="text-[50px] text-center  font-sans">OUR SERVICES</span>
      </p>
      <motion.div
        className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-10 "
        variants={fadeIn("up", "tween", 0.2, 1)}
        ref={ref1}
        animate={controls1}
      >
        <div>
        <div className="shadow-xl max-lg:ml-auto max-lg:mr-auto 2xl:w-[450px] 2xl:h-[550px] lg:w-[370px] lg:h-[460px] xl:w-[400px] xl:h-[500px] w-[260px] h-[400px] my-10 relative">
            <div className="absolute top-[5vw] 2xl:w-[450px] 2xl:h-[550px] lg:w-[370px] lg:h-[460px] xl:w-[400px] xl:h-[500px] w-[260px] h-[400px] left-[8vw] z-10 inset-0 border-[2px] border-black  "></div>

            <img
              src={require("../../Assets/Images/offerings/offering-2.png")}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <h3 className="text-green-800 flex justify-center my-2 mx-auto font-sans; text-[38px] md:text-[40px] ">
            Content Creations
          </h3>
          <p className=" text-[20px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] text-justify leading-7 ">
            web development encompass a comprehensive approach to designing,
            developing, and deploying web applications. From the initial concept
            and user experience design to the backend infrastructure and
            front-end interfaces, end-to-end solutions provide a seamless and
            integrated development process. These solutions often include
            aspects such as database management, server-side scripting,
            client-side scripting, and user interface design.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="max-w-[1240px] mt-[5vw] max-lg:mb-[25vw] max-md:mb-[10vw] mx-auto lg:grid grid-cols-2 gap-10 "
        ref={ref2}
        animate={controls2}
      >
        <div className=" h-[400px] relative top-[10vw]  lg:flex hidden  flex-col justify-center">
          <h3 className="text-green-800 flex justify-center  mx-auto font-sans; text-[38px] md:text-[40px] ">
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
            src={require("../../Assets/Images/offerings/offering1.png")}
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="  md:h-[400px] lg:hidden block ">
          <h2 className="text-3xl  text-left flex justify-center text-green-800 font-serif">
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
        className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-10 "
        variants={fadeIn("right", "tween", 0.2, 1)}
        ref={ref3}
        animate={controls3}
      >
        <div className="shadow-xl max-lg:ml-auto max-lg:mr-auto 2xl:w-[450px] 2xl:h-[550px] lg:w-[370px] lg:h-[460px] xl:w-[400px] xl:h-[500px] w-[260px] h-[400px] my-10 relative">
            <div className="absolute top-[5vw] 2xl:w-[450px] 2xl:h-[550px] lg:w-[370px] lg:h-[460px] xl:w-[400px] xl:h-[500px] w-[260px] h-[400px] left-[8vw] z-10 inset-0 border-[2px] border-black  "></div>

          <img
            src={require("../../Assets/Images/offerings/offering-3.png")}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-center">
          <h3 className="text-green-800 flex justify-center my-2 mx-auto font-sans; text-[38px] md:text-[40px] ">
            Tech Solutions
          </h3>
          <p className=" text-[20px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] text-justify leading-7 ">
            In Mobile app development streamline the process, ensuring a
            seamless user experience and functionality. By addressing all facets
            of mobile app creation, these solutions empower businesses to
            deliver high-quality, feature-rich mobile applications that meet the
            diverse needs of users in today's mobile-centric world."
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
          <h2 className="text-green-800 flex justify-center my-2 mx-auto font-sans; text-[38px] md:text-[40px] ">
            We Provide
          </h2>
          <h2 className="text-[20px] text-left py-6">Web Development</h2>
          <p className=" text-sm text-justify -my-4">
            In web development encompass a wide range of tools and practices
            aimed at creating robust, scalable, and user-friendly websites and
            web applications.Here are some key aspects of tech solutions in web
            development:<br></br>
            <p className=" text-sm text-justify my-2">1.Responsive Design</p>
            <br></br>
            <p className=" text-sm text-justify ">2.Front-End Frameworks</p>
            <br></br>
            <p className=" text-sm text-justify ">3.Server-Side Scripting</p>
            <br></br>
            <p className=" text-sm text-justify ">4.Progressive Web Apps</p>
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
            <p className=" text-sm text-justify ">2.Cloud Integration</p>
            <br></br>
            <p className=" text-sm text-justify ">3.Machine Learning and AI</p>
            <br></br>
            <p className=" text-sm text-justify ">4.Blockchain Technology</p>
            <br></br>
            <p className=" text-sm text-justify ">5.Cybersecurity Measures</p>
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
          <h2 className="text-3xl  text-left  flex justify-center text-green-800 font-serif">
            We Provide
          </h2>
          <h2 className="text-[20px] text-left py-6">Web Development</h2>
          <p className=" text-sm text-justify -my-4">
            In web development encompass a wide range of tools and practices
            aimed at creating robust, scalable, and user-friendly websites and
            web applications.Here are some key aspects of tech solutions in web
            development:
            <br/>
            <p className=" text-sm text-justify my-2">1.Responsive Design</p>
            <br></br>
            <p className=" text-sm text-justify ">2.Front-End Frameworks</p>
            <br></br>
            <p className=" text-sm text-justify ">3.Server-Side Scripting</p>
            <br></br>
            <p className=" text-sm text-justify ">4.Progressive Web Apps</p>
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
            <p className=" text-sm text-justify ">2.Cloud Integration</p>
            <br></br>
            <p className=" text-sm text-justify ">3.Machine Learning and AI</p>
            <br></br>
            <p className=" text-sm text-justify ">4.Blockchain Technology</p>
            <br></br>
            <p className=" text-sm text-justify ">5.Cybersecurity Measures</p>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Offering;
