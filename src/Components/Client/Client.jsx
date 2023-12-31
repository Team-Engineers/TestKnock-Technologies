import React from "react";
import "./client.css";

const Client = () => {
  return (
    <div className="max-w-[1240px] mx-auto md:mb-[5%] mb-[15%]">
      <div className="heading_main md:text-[30px] text-[30px]  font-sans md:mt-[-40px] md:mb-[100px] max-md:my-[10%]">
        <h2>What Our Clients Say</h2>
      </div>
      <div className="cards-container mr-[10px] ml-[10px] grid  max-md:grid-cols-2 grid-cols-4 max-lg:grid-cols-2  max-sm:grid-cols-1">
        <div className="card-1  md:hover:scale-[110%] duration-100 max-h-[550px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/client1.jpeg")}
            alt=""
          />
          <p className="quote ">
          "Working with this team has been an absolute pleasure! They understood our vision for a new website and translated it into a sleek and functional reality. The attention to detail and responsiveness throughout the process was impressive. Our website not only looks fantastic but also performs seamlessly. Highly recommend their services!"
          </p>
          <p className="author">- Ayush Dubey</p>
        </div>

        <div className="card-2 md:hover:scale-[110%] duration-100 max-h-[550px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/client2.jpeg")}
            alt=""
          />
          <p className="quote">
          "Incredible experience with this company! They developed a mobile app for our business, and we couldn't be happier with the results. The team demonstrated a deep understanding of our industry, providing valuable insights that enhanced the app's features. Their commitment to delivering on time and within budget exceeded our expectations. Looking forward to future collaborations!"
          </p>
          <p className="author">- Monika Bist</p>
        </div>

        <div className="card-3 md:hover:scale-[110%] duration-100 max-h-[550px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/client3.jpeg")}
            alt=""
          />
          <p className="quote">
          "Top-notch service from start to finish! Our website needed a complete overhaul, and this team delivered beyond our expectations. They were creative, technically proficient, and great communicators. The end result is a modern, user-friendly website that truly represents our brand. It's been a game-changer for our online presence. Thank you for the excellent work!"
          </p>
          <p className="author">- Harshika Bansal</p>
        </div>

        <div className="card-4 md:hover:scale-[110%] duration-100 max-h-[550px]">
          <img
            className="profile-image relative mr-auto ml-auto top-[-70px]"
            src={require("../../Assets/Images/offerings/client4.jpeg")}
            alt=""
          />
          <p className="quote">
          "Choosing this company for our app development was one of the best decisions we made. They brought our concept to life with a user-friendly design and robust functionality. The development process was smooth, and they were responsive to our feedback. The app has been well-received by our users, and we continue to receive compliments on its usability. Highly recommended for anyone seeking top-tier development services!"
          </p>
          <p className="author">- Vinay MR</p>
        </div>
      </div>
    </div>
  );
};

export default Client;

