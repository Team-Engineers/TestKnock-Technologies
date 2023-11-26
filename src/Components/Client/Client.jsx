import React from "react";
const Client = () => {
  return (
    <div className=" px-4">
      <div className="flex justify-center">
        <h2 className=" md:text-[50px] text-[30px] font-sans ">
          What Our Client Say
        </h2>
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-4 gap-6 md:py-10">
        <div className="shadow-xl h-[500px] client1 my-4 bg-red-200 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
          <div className="w-32 h-32 lg:top-[160px] max-md:mb-[10vw] relative rounded-full  flex items-center justify-center">
            <img
              className="w-[120px] h-[120px] max-md:mb-[10vw] rounded-full object-cover"
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
              alt=""
            />
          </div>
          <p className="] relative text-md font-serif lg:my-[200px] text-center mx-4">
            "Reading fellow students' reviews gave me a clear roadmap for
            selecting courses and understanding what to expect. A must-visit for
            anyone navigating the academic journey!"
            <p className="my-10">Celia Almeda</p>
          </p>
        </div>

        <div className="shadow-xl h-[500px] client1 my-4 bg-blue-300 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
          <div className="w-32 h-32 lg:top-[160px] max-md:mb-[10vw] relative rounded-full  flex items-center justify-center">
            <img
              className="w-[120px] h-[120px] max-md:mb-[10vw] rounded-full object-cover"
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
              alt=""
            />
          </div>
          <p className="] relative text-md font-serif lg:my-[200px] text-center mx-4">
            "Reading fellow students' reviews gave me a clear roadmap for
            selecting courses and understanding what to expect. A must-visit for
            anyone navigating the academic journey!"
            <p className="my-10">Celia Almeda</p>
          </p>
        </div>
        <div className="shadow-xl h-[500px] client1 my-4 bg-green-300 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
          <div className="w-32 h-32 lg:top-[160px] max-md:mb-[10vw] relative rounded-full  flex items-center justify-center">
            <img
              className="w-[120px] h-[120px] max-md:mb-[10vw] rounded-full object-cover"
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
              alt=""
            />
          </div>
          <p className="] relative text-md font-serif lg:my-[200px] text-center mx-4">
            "Reading fellow students' reviews gave me a clear roadmap for
            selecting courses and understanding what to expect. A must-visit for
            anyone navigating the academic journey!"
            <p className="my-10">Celia Almeda</p>
          </p>
        </div>
        <div className="shadow-xl h-[500px] client1 my-4 bg-yellow-200 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
          <div className="w-32 h-32 lg:top-[160px] max-md:mb-[10vw] relative rounded-full  flex items-center justify-center">
            <img
              className="w-[120px] h-[120px] max-md:mb-[10vw] rounded-full object-cover"
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
              alt=""
            />
          </div>
          <p className="] relative text-md font-serif lg:my-[200px] text-center mx-4">
            "Reading fellow students' reviews gave me a clear roadmap for
            selecting courses and understanding what to expect. A must-visit for
            anyone navigating the academic journey!"
            <p className="my-10">Celia Almeda</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Client;