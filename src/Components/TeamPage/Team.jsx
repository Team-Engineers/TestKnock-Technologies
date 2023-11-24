import React from "react";
import teamData from "./teamData";
import "./teamPage.css"
const TeamMember = ({ id, title, name, description, image }) => {
  const isOdd = id % 2 !== 0;
  return (
    <div className="team_main">
      <div className={`team-member ${isOdd ? "odd" : "even"}`}>
      <div className="team-info lg:max-w-[400px] xl:max-w-[400px] 2xl:max-w-[600px] max-w-[400px]" >
        <h2 className="team_title">{title}</h2>
        <p className="team_name 2xl:text-[5em] xl:text-[4em] lg:text-[4em] text-[4em]">{name}</p>
        <p className="team_description 2xl:text-[1.3em] xl:text-[1em] lg:text-[1em] text-[1em]">{description}</p>
      </div>
      <div className="team-image  lg:max-w-[400px] xl:max-w-[400px] 2xl:max-w-[600px] max-w-[400px]">
        <img className="team-image rounded-[20px]" src={require(`../../Assets/Images/team/${image}`)}
 alt={name} />
      </div>
    </div>
    </div>
    
  );
};
  
const Team = () => {
  return (
    <div className="team-container mb-[100px]">
      <div className="team-members">
        {teamData.teams.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};


export default Team;