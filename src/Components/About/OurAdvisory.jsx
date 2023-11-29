import React from "react";

const OurAdvisory = () => {
  return (
    <>
      <div className="flex justify-center ">
        <h2 className="heading_main text-center font-bold md:my-[2%] my-[12%] md:text-[40px] text-[30px] ">OUR ADVISORY MEMBERS</h2>
      </div>
      <div className="h-[120%]">
        <div className="grid mr-auto ml-auto justify-center grid-cols-1  md:grid-cols-3 ">
          <div className="flex  flex-col">
            <div className="w-50 h-50 rounded-full mr-auto ml-auto flex justify-center">
              <img
                className="rounded-full h-[180px] w-[180px] my-[20px]"
                src={require("../../Assets/Images/advisory/animesh_ikshit.jpeg")}
                alt=""
              />
            </div>
            <div className="w-[300px] mr-auto ml-auto  mt-auto mb-auto">
              <h1 className="mr-auto  ml-auto text-center">
                <span className="text-[200%]  font-bold">Animesh Ikshit</span>
                <br />
                <span className="yellowww text-[#063970] font-bold  text-[80%]">
                  DESIGN AND CREATIVITY EXPERT CORE MEMBER
                </span>
                <br />
                <span className="text-[90%] font-style: italic">
                  B. Des. from NIFT Delhi M.A. in DESIGN STUDIES from NOTTINGHAM
                  TRENT UNIVERSITY (U.K.)
                </span>
                <br />
              </h1>
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
            <div className="w-[300px] mr-auto ml-auto  mt-auto mb-auto">
              <h1 className="mr-auto  ml-auto text-center">
                <span className="text-[200%]  font-bold">Manoj Jha</span>
                <br />
                <span className="yellowww text-[#063970] font-bold  text-[80%]">
                  EXPERT IN STRATEGIES
                </span>
                <br />
                <span className="text-[90%] font-style: italic">
                  Management Graduate
                </span>
                <br />
              </h1>
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
            <div className="w-[300px] mr-auto ml-auto  mt-auto mb-auto">
              <h1 className="mr-auto  ml-auto text-center">
                <span className="text-[200%]  font-bold">Prasanjit Sharma</span>
                <br />
                <span className="yellowww text-[#063970] font-bold  text-[80%]">
                  TECH ARCHITECT
                </span>
                <br />
                <span className="text-[90%] font-style: italic">
                  B. Tech from IIT Delhi
                </span>
                <br />
              </h1>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col  justify-center  mr-auto ml-auto my-[5%] ">
          <div className="flex  flex-col ">
            <div className="w-50 h-50 rounded-full mr-auto ml-auto flex justify-center">
              <img
                className="rounded-full h-[180px] w-[180px] my-[20px]"
                src={require("../../Assets/Images/advisory/omansh_mathur.jpeg")}
                alt=""
              />
            </div>
            <div className="w-[400px] mr-auto ml-auto  mt-auto mb-auto">
              <h1 className="mr-auto  ml-auto text-center">
                <span className="text-[200%]  font-bold">Omansh Mathur</span>
                <br />
                <span className="yellowww text-[#063970] font-bold  text-[80%]">
                  SDE 3 GOOGLE
                </span>
                <br />
                <span className="text-[90%] font-style: italic">
                  Graduated with a Dual Degree focused in Mathematics and
                  Computing from Indian Institute of Technology (Banaras Hindu
                  University), Varanasi
                </span>
                <br />
              </h1>
            </div>
          </div>
          <div className="flex  flex-col ">
            <div className="w-50 h-50 rounded-full mr-auto ml-auto flex justify-center">
              <img
                className="rounded-full h-[180px] w-[180px] my-[20px]"
                src={require("../../Assets/Images/advisory/pranav_vijayvaran.jpeg")}
                alt=""
              />
            </div>
            <div className="w-[400px] mr-auto ml-auto  mt-auto mb-auto">
              <h1 className="mr-auto  ml-auto text-center">
                <span className="text-[200%]  font-bold">
                  Pranav Vijayvaran
                </span>
                <br />
                <span className="yellowww text-[#063970] font-bold  text-[80%]">
                  SENIOR SOFTWARE ENGINEER MICROSOFT
                </span>
                <br />
                <span className="text-[90%] font-style: italic">
                  IIT Bombay
                </span>
                <br />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAdvisory;
