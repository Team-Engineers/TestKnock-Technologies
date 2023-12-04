import React from "react";
import teamData from "./teamData";
import "./teamPage.css";

const TeamMember = ({ id, title, name, description, image }) => {
  const isOdd = id % 2 !== 0;
  return (
    <div className="team_main mb-[3vw]">
      <div className={`team-member 2xl:gap-[7vw] xl:gap-[7vw] lg:gap-[7vw]  gap-[8vw]  ${isOdd ? "oddteam" : "eventeam"}`}>
        <div className="team-image max-md:mx-auto lg:max-w-[280px] xl:max-w-[280px] 2xl:max-w-[360px] max-w-[280px]">
          <img className="team-image rounded-[20px]" src={require(`../../Assets/Images/team/${image}`)}
            alt={name} />
        </div>
        <div className="team-info relative overflow-hidden lg:max-w-[400px] xl:max-w-[400px] 2xl:max-w-[600px] max-w-[400px]">
          <p className="team_title lg:text-[1.3em] md:text-[1.3em] text-[1em]">{title}</p>
          <p className="team_name 2xl:text-[3.5em] xl:text-[2.5em] lg:text-[2.5em] md:text-[2.2em] text-[2.1em]">{name}</p>
          <p className="team_description 2xl:text-[1.2em] xl:text-[1em] lg:text-[1em] text-[1em]">{description}</p>
        </div>

      </div>
    </div>
  );
};

const team = () => {
  return (
    <div className="team-container">
      <div className="team-members">
        {teamData.teams.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default team;