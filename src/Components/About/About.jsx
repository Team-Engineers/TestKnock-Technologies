import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import './aboutPage.css';

const aboutData = {
    title: "Know about us",
    tagline: "Know more about us.",
    about: [
      {
        id: 1,
        image: "our_story.jpg",
        title: "Our Story",
        description: "We noticed a gap in accessible, reliable content and tech solutions. Fueled by a passion for innovation, I envisioned a startup focused on delivering top-notch content and cutting-edge tech solutions. Recognizing the need, I aimed to bridge this gap, leveraging expertise and creativity to empower businesses with quality, transformative offerings.",
      },
      {
        id: 2,
        image: "our_vision.jpg",
        title: "Our Vision",
        description: "Our startup envisions a seamless blend of cutting-edge technology and premium content creation. We aim to redefine excellence by offering innovative tech solutions intertwined with high-quality, engaging content. Our vision centers on empowering users with dynamic, user-centric experiences while fostering a community built on creativity, innovation, and unparalleled value.",
      },
      {
        id: 3,
        image: "our_mission.jpg",
        title: "Our Mission",
        description: "We are planning to provide affordable and quality education.Our startup aims to revolutionize content and tech solutions by delivering unparalleled quality. We're committed to crafting engaging, innovative content and cutting-edge technological solutions. Our mission is to empower businesses and individuals with top-notch, accessible tools, ensuring they thrive in an ever-evolving digital landscape ",
      },
    ]}
      

const { title, about } = aboutData;

const About = ({ className = "" }) => {
  const renderMember = ({ id, title, image, description }) => {
    const isOdd = id % 2 !== 0;
    const imageAlignment = isOdd ? 'left' : 'right';
    const textAlignment = isOdd ? 'right' : 'left';

return (
  <div>
<div
      className={`about-member__container hidden  md:flex flex-col lg:flex-row about-member__container--${imageAlignment}`}
    >
      {imageAlignment === 'left' && (
        <div className="about-member__img">
          <Image
            // src={require(`..//images/about/${image}`).default.src}
            src={require(`../../Assets/Images/about/${image}`)}
            // src={require('../../Assets/Images/about/our_vision.jpg')}
            alt=""
          />
        </div>
      )}
      <div className={`about-member__details text-${textAlignment}`}>
        <p className="about-member__title">{title}</p>
        <p className="about-member__description">{description}</p>
      </div>
      {imageAlignment === 'right' && (
        <div className="about-member__img">
          <Image
            src={require(`../../Assets/Images/about/${image}`)}
            // src={require('../../Assets/Images/about/our_mission.jpg')}
            alt=""
          />
        </div>
      )}
    </div>
    <div
      className={`about-member__container md:hidden flex flex-col lg:flex-row about-member__container--${imageAlignment}`}
    >
      {imageAlignment && (
        <div className="about-member__img">
          <Image
            src={require(`../../Assets/Images/about/${image}`)}
            alt=""
          />
        </div>
      )}
      <div className={`about-member__details text-${textAlignment}`}>
        <p className="about-member__title">{title}</p>
        <p className="about-member__description">{description}</p>
      </div>
    </div>
  </div>
    
    
  );
};

return (
  <section className={`about-one-new overflow-hidden ${className}`}>
    <Container>
      {!className && (
        <h2 title={title} className="text-center" />
      )}
      <Row>
        {about.slice(0, className ? undefined : 6).map(renderMember)}
      </Row>
    </Container>

    <div className="py-[10px]">
  <div className="flex justify-center">
    <h2 className="font-bold text-[40px]  max-md:mt-[40px] p-[30px]">OUR TEAM</h2>
  </div>
  <div className="max-w-[1240px]  mx-auto md:grid grid-cols-2 gap-6">
    <div className=" h-[300px] mx-auto max-w-[550px] my-0 hover:scale-90 duration-100 relative">
      <Image
        src={require('../../Assets/Images/team/devendra_singh_rana07.png')}
        alt=""
        className="h-full w-full object-cover"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="h-[300px] md:hidden block p-[10px] text-justify about-member__description">
    <div className="flex flex-col justify-center my-[10px] ">
        <h2 className="font-bold text-[30px] text-indigo-600	 ">Founder<p className="font-bold text-black text-[20px]">Devendra Singh Rana</p>
</h2>
      </div>    
      <h>
      Devendra Singh Rana, our Founder, brings a wealth of international expertise, having spearheaded transformative initiatives at an esteemed Australian firm. His tenure as MTS 1 at Fyle Company further solidifies his strategic prowess in shaping technological landscapes, and fostering a culture of excellence. His visionary leadership and extensive industry experience drive the technological prowess that underpins our innovation.      </h>
    </div>
    <div className="h-[300px] mx-auto  max-w-[550px] max-md:my-5 hover:scale-90 duration-100 relative flex items-center">
    {/* <div className=" h-[300px] mx-auto max-w-[550px] my-0 hover:scale-90 duration-100 relative mt-0"> */}

  <Image
    src={require('../../Assets/Images/team/nitya_dwivedi008.png')}
    alt=""
    className="h-full mx-auto"
    layout="fill"
  />
</div>


    <div className="h-[300px] md:hidden block  p-[10px] text-justify about-member__description">
    <div className="flex flex-col justify-center my-[10px] ">
        <h2 className="font-bold text-[30px] text-indigo-600	">Co-Founder<p className="text-black font-bold text-[20px]">Nitya Dwivedi</p>
</h2>
      </div>       <h>
      Nitya Dwivedi, an IIT Delhi alumna, embodies the epitome of a versatile full stack developer. With a year of invaluable experience, she adeptly navigates both frontend and backend realms while occasionally delving into technical content creation. Nitya's multifaceted skill set fuels our innovation engine.      </h>
    </div>
    <div className="h-[300px] md:block hidden p-[10px] text-justify about-member__description">
    <div className="flex flex-col justify-center my-[10px] ">
        <h2 className="font-bold text-[30px] text-indigo-600	 ">Founder<p className="font-bold text-black text-[20px]">Devendra Singh Rana</p>
</h2>
      </div>    
      <h>
      Devendra Singh Rana, our Founder, brings a wealth of international expertise, having spearheaded transformative initiatives at an esteemed Australian firm. His tenure as MTS 1 at Fyle Company further solidifies his strategic prowess in shaping technological landscapes, and fostering a culture of excellence. His visionary leadership and extensive industry experience drive the technological prowess that underpins our innovation.      </h>
    </div>
    <div className="h-[300px] md:block hidden p-[10px] text-justify about-member__description">
    <div className="flex flex-col justify-center my-[10px] ">
        <h2 className="font-bold text-[30px] text-indigo-600	">Co-Founder<p className="text-black font-bold text-[20px]">Nitya Dwivedi</p>
</h2>
      </div>       <h>
      Nitya Dwivedi, an IIT Delhi alumna, embodies the epitome of a versatile full stack developer. With a year of invaluable experience, she adeptly navigates both frontend and backend realms while occasionally delving into technical content creation. Nitya's multifaceted skill set fuels our innovation engine.      </h>
    </div>
  </div>
  <div className="flex justify-center  ">
  <a href="/team" className="bg-[black] w-[200px] rounded-md font-medium my-6 py-3 text-white text-center">
              Meet Our Team
            </a>      </div>
  
</div>

  </section>
);
};


export default About;
