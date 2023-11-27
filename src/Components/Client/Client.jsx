// import React from "react";
// const Client = () => {
//   return (
//     <div className=" px-4  md:mb-[5%] mb-[15%]">
//       <div className="flex justify-center">
//         <h2 className=" md:text-4xl text-3xl font-sans mb-[3%] ">
//           What Our Client Say
//         </h2>
//       </div>
//       <div className="max-w-[1240px] mx-auto  md:grid-cols-1  lg:grid-cols-2 md:grid  grid-cols-4 gap-6 md:py-12">
//         <div className="shadow-xl h-[400px]  client1 my-4 bg-red-200 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
//           <div className="w-32 h-32 lg:top-[120px] max-md:mb-[10vw] top-[50px] relative rounded-full  flex items-center justify-center">
//             <img
//               className="w-[120px] h-[120px] max-lg:w-[90px] max-lg:h-[90px] max-md:mb-[10vw] rounded-full object-cover"
//               src={require("../../Assets/Images/offerings/client-1.png")}
//             />
//           </div>
//           <p className="] relative text-md font-serif lg:my-[200px] text-center mx-4 my-10 ">
//             "I stumbled upon this website during a stressful exam period, and it
//             turned out to be a hidden gem. The tips and study strategies shared
//             by other students were a lifeline. "
//             <p className="my-10 author">Ayush Dubey</p>
//           </p>
//         </div>

//         <div className="shadow-xl h-[400px] client1 my-4 bg-blue-300 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
//           <div className="w-32 h-32 lg:top-[120px] max-md:mb-[10vw] relative rounded-full  flex items-center justify-center">
//             <img
//               className="w-[120px] h-[120px] max-md:mb-[10vw] rounded-full object-cover"
//               src={require("../../Assets/Images/offerings/client-2.png")}
//             />
//           </div>
//           <p className="] relative text-md font-serif lg:my-[200px] text-center mx-4">
//             "As someone navigating the complex world of academia, I can't
//             express how much this website has simplified my decision-making
//             process. "<p className="my-10 author">Jamie Mah</p>
//           </p>
//         </div>

//         <div className="shadow-xl h-[400px] client1 my-4 bg-green-300 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
//           <div className="w-32 h-32 lg:top-[120px] max-md:mb-[10vw] relative rounded-full  flex items-center justify-center">
//             <img
//               className="w-[120px] h-[120px] max-md:mb-[10vw] rounded-full object-cover"
//               src={require("../../Assets/Images/offerings/client-3.png")}
//               alt=""
//             />
//           </div>
//           <p className="] relative text-md font-serif lg:my-[200px] text-center mx-4">
//             "The intuitive design and diverse range of content make it a
//             one-stop-shop for academic insights. Whether you're a freshman or a
//             seasoned student."
//             <p className="my-10 author">Harshika Bansal</p>
//           </p>
//         </div>

//         <div className="shadow-xl h-[400px] client1 my-4 bg-yellow-200 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
//           <div className="w-32 h-32 lg:top-[120px] max-md:mb-[10vw] relative rounded-full  flex items-center justify-center">
//             <img
//               className="w-[120px] h-[120px] max-md:mb-[10vw] rounded-full object-cover"
//               src={require("../../Assets/Images/offerings/client-4.png")}
//               alt=""
//             />
//           </div>
//           <p className="] relative text-md font-serif lg:my-[200px] text-center mx-4">
//             "The intuitive design and diverse range of content make it a
//             one-stop-shop for academic insights. Whether you're a freshman or a
//             seasoned student."
//             <p className="my-10 author">Travis Smith</p>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };


import React from "react";
const Client = () => {
  return (
    <div className=" px-4 md:my-[5%] my-[15%] ">
      <div className="flex justify-center">
        <h2 className=" text-center md:text-3xl text-xl md:mt-[5%] max-md:my-[10%] font-sans ">
          What Our Client Say
        </h2>
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-4 max-lg:grid-cols-2  gap-6 md:py-12">
        <div className="shadow-xl h-[500px] client1 my-4 max-lg:my-[30%] bg-green-200 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
          <div className="w-32 h-32 relative rounded-full flex items-center justify-center">
            <img
              className="w-[120px] h-[120px] max-lg:mt-[-14vh]  max-md:mt-[-40vh] rounded-full z-10 absolute md:top-0 object-cover"
              src={require("../../Assets/Images/offerings/client-1.png")}
              alt=""
            />
          </div>
          <p className="relative text-md font-serif lg:my-[200px] text-center mx-4">
            "I stumbled upon this website during a stressful exam period, and it
            turned out to be a hidden gem. The tips and study strategies
            shared  by other students were a lifeline. " 
            <p className="my-10 author">Ayush Dubey</p>
          </p>
        </div>

        <div className="shadow-xl h-[500px] client1 my-4 max-lg:my-[30%] bg-blue-200 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
          <div className="w-32 h-32 relative rounded-full flex items-center justify-center">
            <img
              className="w-[120px] h-[120px] max-lg:mt-[-14vh] max-md:mt-[-40vh] rounded-full z-10 absolute md:top-0 object-cover"
              src={require("../../Assets/Images/offerings/client-2.png")}
              alt=""
            />
          </div>
          <p className="relative text-md font-serif lg:my-[200px] text-center mx-4">
            "As someone navigating the complex world of academia, I can't
            express how much this website has simplified my decision-making
            process. "<p className="my-10 author">Jamie Mah</p>
          </p>
        </div>

        <div className="shadow-xl h-[500px] client1 my-4 max-lg:my-[30%] bg-yellow-200 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
          <div className="w-32 h-32 relative rounded-full flex items-center justify-center">
            <img
              className="w-[120px] h-[120px] max-lg:mt-[-14vh] max-md:mt-[-40vh] rounded-full z-10 absolute md:top-0 object-cover"
              src={require("../../Assets/Images/offerings/client-3.png")}
              alt=""
            />
          </div>
          <p className="] relative text-md font-serif lg:my-[200px] text-center mx-4">
            "The intuitive design and diverse range of content make it a
            one-stop-shop for academic insights. Whether you're a freshman or a
            seasoned student."
            <p className="my-10 author">Harshika Bansal</p>
          </p>
        </div>

        <div className="shadow-xl h-[500px] client1 my-4 max-lg:my-[30%] bg-red-200 lg:hover:scale-[110%] duration-100 rounded-3xl flex flex-col items-center justify-center">
          <div className="w-32 h-32 relative rounded-full flex items-center justify-center">
            <img
              className="w-[120px] h-[120px] max-lg:mt-[-14vh] max-md:mt-[-40vh] rounded-full z-10 absolute md:top-0 object-cover"
              src={require("../../Assets/Images/offerings/client-4.png")}
              alt=""
            />
          </div>
          <p className="] relative text-md font-serif lg:my-[200px] text-center mx-4">
            "The intuitive design and diverse range of content make it a
            one-stop-shop for academic insights. Whether you're a freshman or a
            seasoned student."
            <p className="my-10 author">Travis Smith</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Client;

