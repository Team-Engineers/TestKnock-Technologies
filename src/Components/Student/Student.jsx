import React from "react";
import "./student.css"; 

const Student = () => {
  return (
    <div className="container mr-auto ml-auto md:mb-[5%] mb-[15%]">
      <div className="heading md:text-[30px] text-[30px]  font-sans md:my-[5%] my-[20%]">
        <h2>What Our Students Say</h2>
      </div>
      <div className="cards-container">
        <div className="card-1  md:hover:scale-[110%] duration-100 h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/student-1.png")}
            alt=""
          />
          <p className="quote">
            "Reading fellow students' reviews gave me a clear roadmap for
            selecting courses and understanding what to expect. A must-visit for
            anyone navigating the academic journey!"
          </p>
          <p className="author">- Srishti</p>
        </div>

        <div className="card-2 md:hover:scale-[110%] duration-100 h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/student-2.png")}
            alt=""
          />
          <p className="quote">
            "I believe the website could benefit from improved navigation.
            Simplifying the user interface would greatly enhance the overall
            experience."
          </p>
          <p className="author">- Parth Garg</p>
        </div>

        <div className="card-3 md:hover:scale-[110%] duration-100 h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/student-3.png")}
            alt=""
          />
          <p className="quote">
            "This platform has been my go-to for honest insights. The support
            from fellow students is incredible. From exam stress to balancing
            work and studies."
          </p>
          <p className="author">- Piyush Sharma</p>
        </div>

        <div className="card-4 md:hover:scale-[110%] duration-100 h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/student-4.png")}
            alt=""
          />
          <p className="quote">
            "This website isn't just about reviews; it's a source of inspiration
            for anyone navigating the academic landscape. Kudos to the website
            for providing such invaluable resources!"
          </p>
          <p className="author">- Akshra Tiwari</p>
        </div>
      </div>
    </div>
  );
};

export default Student;


