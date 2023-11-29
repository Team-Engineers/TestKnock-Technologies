import React from "react";
import "./client.css"; 

const Client = () => {
  return (
    <div className="container mr-auto ml-auto md:mb-[5%] mb-[15%]">
      <div className="heading_main text-center font-bold md:mb-[4%] md:mt-[3%] my-[12%] md:text-[40px] text-[30px]">
        <h2>What Our Clients Say</h2>
      </div>
      <div className="cards-container ">
        <div className="card-1  md:hover:scale-[110%] duration-100 h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/client-1.png")}
            alt=""
          />
          <p className="quote ">
            "I stumbled upon this website during a stressful exam period, and it
            turned out to be a hidden gem. The tips and study strategies shared
            by other students were a lifeline. "
          </p>
          <p className="author">- Ayush Dubey</p>
        </div>

        <div className="card-2 md:hover:scale-[110%] duration-100 h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/client-2.png")}
            alt=""
          />
          <p className="quote">
            "As someone navigating the complex world of academia, I can't
            express how much this website has simplified my decision-making
            process. "
          </p>
          <p className="author">- Mansi Sharma</p>
        </div>

        <div className="card-3 md:hover:scale-[110%] duration-100 h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/client-3.png")}
            alt=""
          />
          <p className="quote">
            "The intuitive design and diverse range of content make it a
            one-stop-shop for academic insights. Whether you're a freshman or a
            seasoned student."
          </p>
          <p className="author">- Harshika Bansal</p>
        </div>

        <div className="card-4 md:hover:scale-[110%] duration-100 h-[400px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/client-4.png")}
            alt=""
          />
          <p className="quote">
            "The intuitive design and diverse range of content make it a
            one-stop-shop for academic insights. Whether you're a freshman or a
            seasoned student."
          </p>
          <p className="author">Abhay Yadav</p>
        </div>
      </div>
    </div>
  );
};

export default Client;

