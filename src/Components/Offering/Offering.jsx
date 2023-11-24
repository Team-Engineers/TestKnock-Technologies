import React from "react";

const Offering = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="flex justify-center mb-10">
        <h2 className="font-bold text-4xl font-sans">Top Quality Content</h2>
      </div>
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-center">
          <h2 className="text-green-800  text-4xl mb-4 font-serif">
            Our Content Offering
          </h2>
        </div>
        <p className=" text-lg text-justify">
          Our content caters to students in Class 9-10, Class 11-12, and
          College, providing a diverse range of subjects and topics tailored to
          meet the educational needs of students in different stages of their
          academic journey.<br></br>
          <strong>For Class 9-10:</strong> Our content includes subjects such as
          Science, Maths, and Current Affairs, offering comprehensive learning
          resources to help students build a strong foundation.<br></br>
          <strong>For Class 11-12:</strong> Dive deeper into subjects like
          Maths, General English, Logical Reasoning, Current Affairs, Polity,
          History, Geography, and Economics. Our content is designed to prepare
          students for higher-level examinations and enhance their critical
          thinking skills.<br></br>
          <strong>For College Students (Tech):</strong> Specialized content for
          technical streams covering topics like Quantitative Aptitude, Verbal
          Ability, Reading, Comprehension, Logical Reasoning, Data
          Interpretation, and more. We provide a holistic approach to support
          students in their tech-related studies.<br></br>
          <strong>For College Students (Non-Tech):</strong> Tailored content for
          non-tech streams, including Quantitative Aptitude, Verbal Ability,
          Reading, Comprehension, Logical Reasoning, Data Interpretation, and
          General Awareness. Our offerings ensure a well-rounded learning
          experience for students pursuing non-technical disciplines. Immerse
          yourself in a learning journey designed to make education interactive,
          enjoyable, and conceptually sound. Whether you're preparing for exams
          or simply eager to expand your knowledge, our content offering brings
          subjects to life, making learning a dynamic and fulfilling experience.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-6 py-10">
        <div className="shadow-xl h-[550px] w-[400px] my-4 mx-[100px] bg-green-200  hover:scale-90 duration-100 overflow-hidden rounded-3xl">
          <h2 className="text-3xl font-bold text-center py-8">School</h2>
          <p className="text-[25px] text-center mx-10">Class 9-10</p>
          <p className="text-[20px] mx-6 my-4">i. Science</p>
          <p className="text-[20px] mx-6 my-4">ii. Maths</p>
          <p className="text-[20px] mx-6 my-4">iii. Current Affairs</p>
        </div>
        <div className="shadow-xl h-[550px] w-[400px] my-4 mx-[80px] bg-yellow-100  hover:scale-90 duration-100 overflow-hidden rounded-3xl">
          <h2 className="text-3xl font-bold text-center py-8">School</h2>
          <p className="text-[25px] text-center mx-10">Class 11-12</p>
          <p className="text-[20px] mx-6 my-4">i. Maths</p>
          <p className="text-[20px] mx-6 my-4">ii. General English</p>
          <p className="text-[20px] mx-6 my-4">iii. Logical Reasoning</p>
          <p className="text-[20px] mx-6 my-4">iv. Current Affairs</p>
          <p className="text-[20px] mx-6 my-4">v. Polity</p>
          <p className="text-[20px] mx-6 my-4">vi. History</p>
          <p className="text-[20px] mx-6 my-4">vii. Geography</p>
          <p className="text-[20px] mx-6 my-4">viii. Economics</p>
        </div>
        <div className="shadow-xl h-[550px] w-[400px] my-4 mx-[100px] bg-yellow-100  hover:scale-90 duration-100 overflow-hidden rounded-3xl">
          <h2 className="text-3xl font-bold text-center py-8">Collage</h2>
          <p className="text-[25px] text-center mx-10">Tech</p>
          <p className="text-[20px] mx-6 my-4">i. Quantitative Aptitude</p>
          <p className="text-[20px] mx-6 my-4">
            ii. Verbal Ability and Reading
          </p>
          <p className="text-[20px] mx-6 my-4">iii. Comprehension</p>
          <p className="text-[20px] mx-6 my-4">iv. Logical Reasoning</p>
          <p className="text-[20px] mx-6 my-4">v. Data Interpretation</p>
        </div>
        <div className="shadow-xl h-[550px] w-[400px] my-4 mx-[80px] bg-green-200 hover:scale-90 duration-100  overflow-hidden rounded-3xl">
          <h2 className="text-3xl font-bold text-center py-8">Collage</h2>
          <p className="text-[25px] text-center mx-10">Non-Tech</p>
          <p className="text-[20px] mx-6 my-4">i. Quantitative Aptitude</p>
          <p className="text-[20px] mx-6 my-4">
            ii. Verbal Ability and Reading
          </p>
          <p className="text-[20px] mx-6 my-4">iii. Comprehension</p>
          <p className="text-[20px] mx-6 my-4">iv. Logical Reasoning</p>
          <p className="text-[20px] mx-6 my-4">v. Data Interpretation</p>
          <p className="text-[20px] mx-6 my-4">v. General Awareness</p>
        </div>
      </div>
      <div className="flex justify-center mb-10 py-12">
        <h2 className=" text-4xl font-bold font-sans">
          End-To-End Tech Solution
        </h2>
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-4 py-4">
        <div className="shadow-xl h-[400px] w-[600px] my-4 bg-gray-200 hover:scale-90 duration-100 overflow-hidden rounded-3xl">
          <img
            src={require("../../Assets/Images/offerings/web-1.jpg")}
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
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-4 py-10">
        <div className=" h-[400px] my-4">
          <h2 className="text-3xl text-center py-8 text-green-800 font-serif">
            Mobile App :
          </h2>
          <p className=" text-lg text-justify">
            In Mobile app development streamline the process, ensuring a
            seamless user experience and functionality. By addressing all facets
            of mobile app creation, these solutions empower businesses to
            deliver high-quality, feature-rich mobile applications that meet the
            diverse needs of users in today's mobile-centric world."
          </p>
        </div>

        <div className="shadow-xl h-[300px] w-[500px] my-10 bg-gray-200 hover:scale-90 duration-100 overflow-hidden rounded-3xl">
          <p className="text-[20px] text-center mx-10"></p>
          <img
            src={require("../../Assets/Images/offerings/mobile-1.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Offering;
