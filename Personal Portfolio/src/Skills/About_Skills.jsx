import React from "react";
import Figma from "../assets/Skills_Img/Figma.png";
import Github from "../assets/Skills_Img/Github.png";
import Html from "../assets/Skills_Img/Html.png";
import Illustrator from "../assets/Skills_Img/illustrator.png";
import Office from "../assets/Skills_Img/Ms office.png";
import Photoshop from "../assets/Skills_Img/photoshop.png";
import Python from "../assets/Skills_Img/python.png";
import Tableau from "../assets/Skills_Img/Tableau.png";
import GTM from "../assets/Skills_Img/GTM Icon.png";
import Javascript from "../assets/Skills_Img/Javascript.png";
import GA4 from "../assets/Skills_Img/GA4 Icon.png";
import React_icon from "../assets/Skills_Img/React.png";
import Solidworks from "../assets/Skills_Img/Solidworks.png";
import premiere_pro from "../assets/Skills_Img/premiere-pro.png";
import Fusion360 from "../assets/Skills_Img/Fusion 360.png";
import "./About_Skills.css";

const skills = [
  { name: "Figma", icon: Figma, proficiency: "80%" },
  { name: "Github", icon: Github, proficiency: "75%" },
  { name: "Html", icon: Html, proficiency: "75%" },
  { name: "Illustrator", icon: Illustrator, proficiency: "75%" },
  { name: "Photoshop", icon: Photoshop, proficiency: "75%" },
  { name: "Python", icon: Python, proficiency: "75%" },
  { name: "Tableau", icon: Tableau, proficiency: "75%" },
  { name: "GTM", icon: GTM, proficiency: "75%" },
  { name: "Office", icon: Office, proficiency: "75%" },
  { name: "Javascript", icon: Javascript, proficiency: "75%" },
  { name: "GA4", icon: GA4, proficiency: "75%" },
  { name: "React", icon: React_icon, proficiency: "75%" },
  { name: "Solidworks", icon: Solidworks, proficiency: "75%" },
  { name: "premiere", icon: premiere_pro, proficiency: "75%" },
  { name: "Fusion360", icon: Fusion360, proficiency: "75%" },
  // ... Add other skills similarly
];
function SkillCard({ skill }) {
  return (
    <div
      className="flip-card w-24 h-24 m-2 perspective"
      style={{ perspective: "1000px" }}
      id={skill.name}
    >
      <div
        className="flip-card-inner relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flip-card-front absolute w-full h-full flex items-center justify-center p-4">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flip-card-back absolute w-full h-full flex items-center justify-center p-4">
          <div className="text-center">
            <p className="font-bold">{skill.name}</p>
            <p>Proficiency: {skill.proficiency}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="Skills mt-4">
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
