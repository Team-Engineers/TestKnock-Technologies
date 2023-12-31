import React from "react";

import { NavLink } from "react-router-dom";
import "./aboutPage.css";
const aboutData = {
  title: "Know about us",
  tagline: "Know more about us.",
  about: [
    {
      id: 1,
      image: "our_story_02.jpg",
      title: "Our Story",
      description: "We noticed a gap in accessible, reliable content and tech solutions. Fueled by a passion for innovation, We envisioned a startup focused on delivering top-notch content and cutting-edge tech solutions. Recognizing the need, We aimed to bridge this gap, leveraging expertise and creativity to empower businesses with quality, transformative offerings.",
    },
    {
      id: 2,
      image: "our_vision01.jpg",
      title: "Our Vision",
      description: "Our startup envisions a seamless blend of cutting-edge technology and premium content creation. We aim to redefine excellence by offering innovative tech solutions intertwined with high-quality, engaging content. Our vision centers on empowering users with dynamic, user-centric experiences while fostering a community built on creativity, innovation, and unparalleled value.",
    },
    {
      id: 3,
      image: "our_mission01.jpg",
      title: "Our Mission",
      description: "We are planning to provide affordable and quality education. Our startup aims to revolutionize content and tech solutions by delivering unparalleled quality. We're committed to crafting engaging, innovative content and cutting-edge technological solutions. Our mission is to empower businesses and individuals with top-notch, accessible tools, ensuring they thrive in an ever-evolving digital landscape. ",
    },
  ]
}

const AboutMember = ({ id, title, name, description, image }) => {
  const isOdd = id % 2 !== 0;
  const below = id === 3;
  return (
    <div className="about_main">
      <div className={`about-member ${isOdd ? "odd" : "even"}`}>
        <div className={`about-image   shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ${below ? "belowig" : "ee"}	 lg:max-w-[450px] xl:max-w-[450px] 2xl:max-w-[520px] w-full  `}>
          <img className="about-image rounded object-cover h-full" src={require(`../../Assets/Images/about/${image}`)} alt={name} />
        </div>
        <div className={`about-info relative overflow-hidden shadow-xl  lg:max-w-[500px] xl:max-w-[500px] 2xl:max-w-[600px] max-w-full lg:max-h-[500px] xl:max-h-[500px] 2xl:max-h-[600px] h-full  ${below ? "belowid" : "ee"} ${isOdd ? "oddd" : "evenn"}`}>
          <div className="absolute right-[-10vw] z-[-1] hover:scale-0  h-[300px]   w-[300px] bg-blue-300 rounded-full ">
          </div>
          <div className="absolute top-[17vw] right-[24vw] z-[-1] hover:scale-0  h-[300px]   w-[300px] bg-yellow-300 rounded-full ">
          </div>
          <h2 className="about_title">{title}</h2>
          <p className="about_name 2xl:text-[5em] xl:text-[4em] lg:text-[4em] text-[4em]">{name}</p>
          <p className="about_description xl:text-[110%] 2xl:text-[130%] lg:text-[100%] 1xl:text-[100%]  text-[80%]">{description}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <div className="about-members">
        {aboutData.about.map((member) => (
          <AboutMember key={member.id} {...member} />
        ))}
      </div>
      <div className=" ml-[10px] mr-[10px]">
        <div className="flex justify-center">
          <h2 className="heading_main text-center font-bold md:my-[2%] my-[12%] md:text-[40px] text-[30px]">OUR FOUNDING MEMBERS</h2>
        </div>
        <div className="max-w-[1200px]  mx-auto md:grid grid-cols-2 gap-6">
          <div className="max-md:overflow-hidden relative flex items-center justify-center">
            <div className="absolute z-[-1] hover:scale-0 h-[230px] overflow-hidden w-[230px] bg-[#4698c7] rounded-full mx-auto">
            </div>
            <div className="relative z-[1] h-[250px] mx-auto max-w-[300px] my-0 hover:scale-110 duration-100">
              <img
                src={require('../../Assets/Images/team/devendra_singh_rana07.png')}
                alt=""
                className="h-full w-full object-cover rounded-md"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className=" md:hidden block p-[10px] text-justify about-member__description">
            <div className="flex flex-col justify-center my-[10px] ">
              <h2 className="page_font font-bold text-[20px] text-[#063970]	 ">Founder<p className="page_font text-left font-bold text-black leading-[50px] text-[170%]">Devendra Singh Rana</p>
              </h2>
            </div>
            <h >
              Meet Devendra Singh Rana, our globe-trotting Founder with a knack
              for turning tech tides! With a resume that reads like a world tour
              of innovation, he's not just a tech maestro; he's the Jedi Master
              of strategic moves. From steering ship at a top Aussie firm to
              tech sorcery as MTS 1 at Fyle Company, his leadership is the
              secret sauce behind our high-tech concoctions. His visionary drive
              and industry wizardry make our innovation more electric than a
              Pikachu parade!  </h>
          </div>

          <div className="max-md:overflow-hidden relative flex items-center justify-center">
            <div className="absolute overflow-hidden   z-[-1] hover:scale-0  h-[230px]  w-[230px] bg-yellow-400 rounded-full ">
            </div>
            <div className="h-[250px] mx-auto  max-w-[300px] max-md:my-5 hover:scale-110 duration-100 relative flex items-center">
              <img
                src={require('../../Assets/Images/team/nitya_dwivedi008.png')}
                alt=""
                className="h-full mx-auto "
                layout="fill"
              />
            </div>
          </div>
          <div className=" md:hidden block  p-[10px] text-justify about-member__description">
            <div className="flex flex-col justify-center my-[10px] ">
              <h2 className="page_font font-bold text-[20px] text-[#063970]">Co-Founder<p className="page_font text-left text-black leading-[50px] font-bold text-[170%]">Nitya Dwivedi</p>
              </h2>
            </div>      <h>
              Introducing Nitya Dwivedi, our jack-of-all-tech-trades Co-founder!
              She's the Swiss Army knife of developers, cruising through
              frontend and backend realms with the finesse of a symphony
              conductor. And guess what? She sprinkles her coding magic with the
              occasional wizardry of crafting tech tales. Nitya's diverse skill
              set isn't just impressive; it's the turbo fuel for our innovation
              engine, adding more spark than a disco ball on a Saturday night!</h>
          </div>
          <div className="h-[300px] md:block hidden p-[10px] text-justify about-member__description">
            <div className="flex flex-col justify-center my-[10px] ">
              <h2 className="page_font font-bold xl:text-[20px] 2xl:text-[25px] lg:text-[20px] text-[#063970] "> <span className="page_font  uppercase">Founder</span><p className="page_font  font-bold text-black xl:text-[40px] 2xl:text-[40px] lg:text-[30px]">Devendra Singh Rana</p>
              </h2>
            </div>
            <h>
              Meet Devendra Singh Rana, our globe-trotting Founder with a knack
              for turning tech tides! With a resume that reads like a world tour
              of innovation, he's not just a tech maestro; he's the Jedi Master
              of strategic moves. From steering ship at a top Aussie firm to
              tech sorcery as MTS 1 at Fyle Company, his leadership is the
              secret sauce behind our high-tech concoctions. His visionary drive
              and industry wizardry make our innovation more electric than a
              Pikachu parade! </h>
          </div>
          <div className="h-[300px] md:block  hidden p-[10px] text-justify about-member__description">
            <div className="flex flex-col justify-center my-[10px] ">
              <h2 className="page_font font-bold xl:text-[20px] 2xl:text-[25px] lg:text-[20px]  text-[#063970] "><span className=" page_font uppercase">co-Founder</span><p className="page_font  text-black font-bold xl:text-[40px] 2xl:text-[40px] lg:text-[30px]">Nitya Dwivedi</p>
              </h2>
            </div>       <h>
              Introducing Nitya Dwivedi, our jack-of-all-tech-trades Co-founder!
              She's the Swiss Army knife of developers, cruising through
              frontend and backend realms with the finesse of a symphony
              conductor. And guess what? She sprinkles her coding magic with the
              occasional wizardry of crafting tech tales. Nitya's diverse skill
              set isn't just impressive; it's the turbo fuel for our innovation
              engine, adding more spark than a disco ball on a Saturday night!</h>
          </div>
        </div>
        <div className="flex justify-center  ">
          <NavLink to="/team" className="bg-[black] w-[200px] hover:text-[gray] rounded-md font-medium  lg:my-[5%] my-[10%] max-lg:mt-[20%] py-3 text-white text-center">
            Meet Our Team
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;