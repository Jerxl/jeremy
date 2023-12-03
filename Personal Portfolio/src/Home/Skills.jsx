import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// At the top of your SkillsSection.jsx
import "./Skills.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Skills Img
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

function SkillsSection() {
  const skills = [
    { name: "Figma", link: "#figma", img: Figma },
    { name: "Github", link: "#Github", img: Github },
    {
      name: "JavaScript",
      link: "#javascript",
      img: Javascript,
    },
    { name: "HTML", link: "#html", img: Html },
    { name: "Illustrator", link: "#Illustrator", img: Illustrator },
    { name: "Office", link: "#Office", img: Office },
    { name: "Photoshop", link: "#Photoshop", img: Photoshop },
    { name: "Python", link: "#Python", img: Python },
    { name: "Tableau", link: "#Tableau", img: Tableau },
    { name: "GA4", link: "#GA4", img: GA4 },
    { name: "GTM", link: "#GTM", img: GTM },
    { name: "React", link: "#React", img: React_icon },
    { name: "Solidworks", link: "#Solidworks", img: Solidworks },
    { name: "premiere-pro", link: "#premiere-pro", img: premiere_pro },
    { name: "Fusion360", link: "#Fusion360", img: Fusion360 },

    // Add more skills and their corresponding anchor link IDs
  ];

  // Render Swiper with slides
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {skills.map((skill, index) => (
        <SwiperSlide key={index}>
          <a href={skill.link} className="skill-bubble">
            <img src={skill.img} alt={skill.name} />
            {/* <p>{skill.name}</p> */}
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SkillsSection;
