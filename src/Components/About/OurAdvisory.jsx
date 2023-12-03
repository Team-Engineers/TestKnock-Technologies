import React from "react";

const OurAdvisory = () => {
  return (
    <div className=" container mx-auto">
      <div className="flex justify-center ">
        <h2 className="heading_main text-center font-bold md:my-[2%] my-[12%] md:text-[40px] text-[30px] ">OUR ADVISORY MEMBERS</h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 overflow-hidden ">
        <div className="flex  flex-col">
          <div className="w-50 h-50 rounded-full mr-auto ml-auto flex justify-center">
            <img
              className="rounded-full h-[180px] w-[180px] my-[20px]"
              src={require("../../Assets/Images/advisory/animesh_ikshit.jpeg")}
              alt=""
            />
          </div>
          <div className=" lg:w-[300px] w-[250px] mr-auto ml-auto text-justify  mt-auto mb-auto">
            <h1 className="mr-auto  ml-auto text-center">
              <span className="text-[200%] text-center font-bold">Animesh Ikshit</span>
              <br />
              <span className="yellowww text-[#063970] font-bold  text-[80%]">
                DESIGN AND CREATIVITY EXPERT
              </span>
              <br />
              <strong>
                  B. Des. from NIFT Delhi
                </strong>
            </h1>
             <h className="text-[90%] font-style: italic ">
                "Meet our Design and Creativity Expert, Animesh, who holds a Bachelor's in Design from NIFT Delhi. With a keen eye for aesthetics and a passion for innovation, Animesh brings a wealth of experience in transforming ideas into visually stunning realities. Their creative prowess is a driving force behind our commitment to cutting-edge design."
              </h>
          </div>
        </div>
        <div className="flex  flex-col ">
          <div className="w-50 h-50 rounded-full mr-auto ml-auto flex justify-center">
            <img
              className="rounded-full h-[180px] w-[180px] my-[20px]"
              src={require("../../Assets/Images/advisory/manoj_jha.jpeg")}
              alt=""
            />
          </div>
          <div className=" lg:w-[300px] w-[250px] mr-auto ml-auto text-justify  mt-auto mb-auto">
            <h1 className="mr-auto  ml-auto text-center">
              <span className="text-[200%]  font-bold">Manoj Jha</span>
              <br />
              <span className="yellowww text-[#063970] font-bold  text-[80%]">
                EXPERT IN STRATEGIES
              </span>
              <br />
                <strong>
                  Management Graduate from IIM Indore
                </strong>
              <br />
            </h1>
             <span className="text-[90%] font-style: italic text-justify">
               "We are proud to have Manoj, an Expert in Strategies, as a valuable member of our advisory team. A graduate from IIM Indore, Manoj brings a strategic mindset that is second to none. Their analytical acumen and business insights play a pivotal role in shaping our long-term goals and ensuring the success of our strategic initiatives."
              </span>
          </div>
        </div>
        <div className="flex  flex-col ">
          <div className="w-50 h-50 rounded-full mr-auto ml-auto flex justify-center">
            <img
              className="rounded-full h-[180px] w-[180px] my-[20px]"
              src={require("../../Assets/Images/advisory/prasanjit_sharma.jpeg")}
              alt=""
            />
          </div>
          <div className=" lg:w-[300px] w-[250px] mr-auto ml-auto text-justify  mt-auto mb-auto">
            <h1 className="mr-auto  ml-auto text-center">
              <span className="text-[200%]  font-bold">Prasanjit Sharma</span>
              <br />
              <span className="yellowww text-[#063970] font-bold  text-[80%]">
                TECH ARCHITECT
              </span>
              <br />
              <strong>  B. Tech CSE from IIT Delhi </strong> <br />
            </h1>
            <span className="text-[90%] font-style: italic">
                "Our Tech Architect, Prasanjit, is a graduate in Computer Science and Engineering from IIT Delhi. With a solid foundation in technology and a passion for architectural excellence, Prasanjit plays a crucial role in shaping the technological landscape of our organization. Their innovative solutions and expertise in system design make them an invaluable asset to our team."
              </span>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-[10%] overflow-hidden  justify-center  mr-auto ml-auto my-[5%] ">
          <div className="flex  flex-col ">
            <div className="w-50 h-50 rounded-full mr-auto ml-auto flex justify-center">
              <img
                className="rounded-full h-[180px] w-[180px] my-[20px]"
                src={require("../../Assets/Images/advisory/omansh_mathur.jpeg")}
                alt=""
              />
            </div>
            <div className=" lg:w-[300px] w-[250px] mr-auto ml-auto text-justify  mt-auto mb-auto">
              <h1 className="mr-auto  ml-auto text-center">
                <span className="text-[200%]  font-bold">Omansh Mathur</span>
                <br />
                <span className="yellowww text-[#063970] font-bold  text-[80%]">
                  SDE 3 at GOOGLE
                </span>
                <br />
                <strong>Btech CSE from Indian Institute of Technology, Varanasi </strong><br/>
              </h1>
              <span className="text-[90%] font-style: italic">
                  "Introducing Omansh, our accomplished Software Development Engineer 3, currently making waves at Google. Holding a B.Tech in Computer Science and Engineering from IIT Varanasi, Omansh brings a wealth of experience and expertise to our advisory team. Their contributions to cutting-edge projects at Google reflect the caliber we proudly embrace."
                </span>
            </div>
          </div>
          <div className="flex  flex-col">
            <div className="w-50 h-50 rounded-full mr-auto ml-auto flex justify-center">
              <img
                className="rounded-full h-[180px] w-[180px] my-[20px]"
                src={require("../../Assets/Images/advisory/pranav_vijayvaran.jpeg")}
                alt=""
              />
            </div>
            <div className=" lg:w-[300px] w-[250px] mr-auto ml-auto text-justify  mt-auto mb-auto">
              <h1 className="mr-auto  ml-auto text-center">
                <span className="text-[200%]  font-bold">
                  Pranav Vijayvaran
                </span>
                <br />
                <span className="yellowww text-[#063970] font-bold  text-[80%]">
                  SENIOR SOFTWARE ENGINEER at MICROSOFT
                </span>
                <br />
                <strong>
                  Btech CSE from IIT Bombay
                    </strong>
              </h1>
              <span className="text-[90%] font-style: italic">
                  "We are honored to have Pranav, a Senior Software Engineer at Microsoft, as a key member of our advisory board. Armed with a B.Tech in Computer Science and Engineering from IIT Bombay, Pranav brings a wealth of experience in software development. Their insights and contributions are instrumental in shaping the technological trajectory of our organization."
                </span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default OurAdvisory;
