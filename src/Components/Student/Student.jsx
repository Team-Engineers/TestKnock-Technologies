import React from "react";
import "./sudent.css";
const Student = () => {
  return (
    <div className=" px-4">
      <div className="flex justify-center">
        <h2 className=" text-[50px] font-sans ">What They Say</h2>
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-4 gap-6 py-10">
        <div className="shadow-xl h-[500px] student1 my-4 bg-gray-200 hover:scale-90 duration-100 rounded-3xl">
          <p className="text-md font-serif my-[200px] text-center mx-4">
            "Reading fellow students'reviews gave me a clear roadmap for
            selecting courses and understanding what to expect.A must-visit for
            anyone navigating the academic journey!"
            <p className="my-10">Celia Almeda</p>
          </p>
        </div>
        <div className="shadow-xl h-[500px] student2 my-4 bg-gray-200 hover:scale-90 duration-100 rounded-3xl">
          <p className="text-md font-serif my-[200px] text-center mx-4">
            "While the reviews are helpful, I believe the website could benefit
            from improved navigation.Simplifying the user interface would
            greatly enhance the overall experience."<br></br>
            <p className="my-10">Mattie Smith</p>
          </p>
        </div>
        <div className="shadow-xl h-[500px] student3 my-4 bg-gray-200 hover:scale-90 duration-100 rounded-3xl">
          <p className="text-md font-serif my-[200px] text-center mx-4">
            "This platform has been my go-to for honest insights.The support
            from fellow students is incredible.From exam stress to balancing
            work and studies,the shared tips and encouragement have been a
            lifeline!"<br></br>
            <p className="my-10">Bob Roberts</p>
          </p>
        </div>
        <div className="shadow-xl h-[500px] student4 my-4 bg-gray-200 hover:scale-90 duration-100 rounded-3xl">
          <p className="text-md font-serif my-[200px] text-center mx-4">
            "This website isn't just about reviews;it's a source of inspiration
            for anyone navigating the academic landscape.Kudos to the website
            for providing such invaluable resources!"<br></br>
            <p className="my-10">Nat Reynolds</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
