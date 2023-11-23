import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import teamData from "./teamData";
import './teamPage.css';

const { title, tagline, teams } = teamData;

const Team = ({ className = "" }) => {
  const renderMember = ({ id, name, title, image, description }) => {
    const isOdd = id % 2 !== 0;
    const imageAlignment = isOdd ? 'left' : 'right';
    const textAlignment = isOdd ? 'right' : 'left';

return (
  <div>
     <div
      className={`team-member__container flex-row lg:flex hidden team-member__container--${imageAlignment}`}
    >
      {imageAlignment === 'left' && (
        <div className="team-member__img">
          <Image
            // src={require(`..//images/team/${image}`).default.src}
            src={require(`../../Assets/Images/team/${image}`)}
            // src={require('../../Assets/Images/team/yojana_tripathi.jpeg')}
            alt=""
          />
        </div>
      )}
      <div className={`team-member__details text-${textAlignment}`}>
        <p className="team-member__title">{title}</p>
        <h4 className="team-member__name">{name}</h4>
        <p className="team-member__description">{description}</p>
      </div>
      {imageAlignment === 'right' && (
        <div className="team-member__img">
          <Image
            src={require(`../../Assets/Images/team/${image}`)}
            // src={require('../../Assets/Images/team/yojana_tripathi.jpeg')}
            alt=""
          />
        </div>
      )}
    </div>
    <div
      className={`team-member__container flex-col lg:hidden flex   team-member__container--${imageAlignment}`}
    >
      {imageAlignment && (
        <div className="team-member__img mt-[20px] mb-[-50px]">
          <Image
            src={require(`../../Assets/Images/team/${image}`)}
            alt=""
          />
        </div>
      )}
      <div className={`team-member__details text-[.9em] text-${textAlignment}`}>
        <p className="team-member__title">{title}</p>
        <h4 className="team-member__name">{name}</h4>
        <p className="team-member__description">{description}</p>
      </div>
    </div>
  </div>
    
  );
};

return (
  <section className={`team-one-new ${className}`}>
    <Container>
      {!className && (
        <h2 title={title} className="text-center" />
      )}
      <Row>
        {teams.slice(0, className ? undefined : 6).map(renderMember)}
      </Row>
    </Container>
  </section>
);
};


export default Team;
