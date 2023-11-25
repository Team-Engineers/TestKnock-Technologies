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

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="w-full bg-white py-16 px-4"
    >
      <p className=" text-[40px] text-center font-sans ">OUR SERVICES</p>
      <motion.div
        className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-6 py-10 "
        variants={fadeIn("up", "tween", 0.2, 1)}
        ref={ref1}
        animate={controls1}
      >
        <div className="offeringbox"></div>
        <div className="shadow-xl h-[500px] w-[500px] my-4 bg-gray-200 overflow-hidden ">
          <img
            src={require("../../Assets/Images/offerings/offering1.png")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" h-[400px] my-4 ">
          <h2 className="text-3xl  text-center py-8 text-green-800 font-serif">
            Web Development:
          </h2>
          <p className=" text-lg text-justify">
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
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-4 py-10"
        ref={ref2}
        animate={controls2}
      >
        <div className=" h-[400px] my-4 ">
          <h2 className="text-3xl  text-left py-8 -my-10 text-green-800 font-serif">
            We Supply
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
        </div>
        <div className="shadow-xl h-[700px] w-[400px] my-4 mx-[100px] bg-gray-200 overflow-hidden rounded-3xl">
          <img
            src={require("../../Assets/Images/offerings/offering2.png")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <motion.div
        className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-4 py-10"
        variants={fadeIn("right", "tween", 0.2, 1)}
        ref={ref3}
        animate={controls3}
      >
        <div className="offeringbox1"></div>
        <div className="shadow-xl h-[400px] w-[600px] my-10 -m-8 bg-gray-200 overflow-hidden rounded-3xl">
          <img
            src={require("../../Assets/Images/offerings/offering3.png")}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className=" h-[400px] my-4">
          <h2 className="text-3xl text-center py-8 mx-8 text-green-800 font-serif">
            Mobile App :
          </h2>
          <p className=" text-lg text-justify mx-10">
            In Mobile app development streamline the process, ensuring a
            seamless user experience and functionality. By addressing all facets
            of mobile app creation, these solutions empower businesses to
            deliver high-quality, feature-rich mobile applications that meet the
            diverse needs of users in today's mobile-centric world."
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Offering;
