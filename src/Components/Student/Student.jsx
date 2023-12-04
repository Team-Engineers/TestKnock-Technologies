import React from "react";
import "./student.css";

const Student = () => {
  return (
    <div className="max-w-[1240px] mx-auto md:mb-[5%] mb-[15%]">
      <div className="heading_main text-center font-bold md:mb-[6%] mb-[20%] md:mt-[3%] my-[12%] md:text-[40px] text-[30px]">
        <h2>Students Corner</h2>
      </div>
      <div className="cards-container mr-[10px] ml-[10px] grid  max-md:grid-cols-2 grid-cols-4 max-lg:grid-cols-2  max-sm:grid-cols-1">
        <div className="card-1  md:hover:scale-[110%] duration-100  max-h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/student1.jpeg")}
            alt=""
          />
          <p className="quote">
            The study content provided here is top-notch! The explanations are
            clear, and the quizzes are challenging yet helpful in reinforcing
            concepts. It's definitely helped me improve my aptitude skills
            significantly.
          </p>
          <p className="author">- Srishti</p>
        </div>

        <div className="card-2 md:hover:scale-[110%] duration-100 max-h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/student2.jpeg")}
            alt=""
          />
          <p className="quote">
            I'm so glad I found this website! The study material is
            comprehensive and well-organized, making it easy to grasp complex
            topics. The quizzes are a fantastic way to test my understanding and
            track my progress.
          </p>
          <p className="author">- Parth Garg</p>
        </div>

        <div className="card-3 md:hover:scale-[110%] duration-100 max-h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/student3.jpeg")}
            alt=""
          />
          <p className="quote">
            Outstanding resource! The study material for aptitude skills is
            comprehensive, making complex concepts easy to grasp. The quiz
            feature is an absolute gem—interactive, challenging, and perfect for
            honing skills
          </p>
          <p className="author">- Piyush Sharma</p>
        </div>

        <div className="card-4 md:hover:scale-[110%] duration-100 max-h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/student4.jpeg")}
            alt=""
          />
          <p className="quote ">
            Impressive Student Content! The study materials are organized and
            effective, and the quizzes are a brilliant way to track progress.
            It's an indispensable resource for anyone aiming to excel in
            aptitude tests.
          </p>
          <p className="author">- Akshra Tiwari</p>
        </div>
      </div>
    </div>
  );
};

export default Student;
