// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// // At the top of your SkillsSection.jsx
// import "./Skills.css";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// // Import Skills Img
// import Figma from "../assets/Skills_Img/Figma.png";
// import Github from "../assets/Skills_Img/Github.png";
// import Html from "../assets/Skills_Img/Html.png";
// import Illustrator from "../assets/Skills_Img/illustrator.png";
// import Office from "../assets/Skills_Img/Ms office.png";
// import Photoshop from "../assets/Skills_Img/photoshop.png";
// import Python from "../assets/Skills_Img/python.png";
// import Tableau from "../assets/Skills_Img/Tableau.png";
// import GTM from "../assets/Skills_Img/GTM Icon.png";
// import Javascript from "../assets/Skills_Img/Javascript.png";
// import GA4 from "../assets/Skills_Img/GA4 Icon.png";
// import React_icon from "../assets/Skills_Img/React.png";
// import Solidworks from "../assets/Skills_Img/Solidworks.png";
// import premiere_pro from "../assets/Skills_Img/premiere-pro.png";
// import Fusion360 from "../assets/Skills_Img/Fusion 360.png";

// function SkillsSection() {
//   const skills = [
//     { name: "Figma", link: "/credentials#Figma", img: Figma },
//     { name: "Github", link: "/credentials#Github", img: Github },
//     {
//       name: "Javascript",
//       link: "/credentials#Javascript",
//       img: Javascript,
//     },
//     { name: "Html", link: "/credentials#Html", img: Html },
//     { name: "Illustrator", link: "/credentials#Illustrator", img: Illustrator },
//     { name: "Office", link: "/credentials#Office", img: Office },
//     { name: "Photoshop", link: "/credentials#Photoshop", img: Photoshop },
//     { name: "Python", link: "/credentials#Python", img: Python },
//     { name: "Tableau", link: "/credentials#Tableau", img: Tableau },
//     { name: "GA4", link: "/credentials#GA4", img: GA4 },
//     { name: "GTM", link: "/credentials#GTM", img: GTM },
//     { name: "React", link: "/credentials#React", img: React_icon },
//     { name: "Solidworks", link: "/credentials#Solidworks", img: Solidworks },
//     {
//       name: "premiere-pro",
//       link: "/credentials#premiere",
//       img: premiere_pro,
//     },
//     { name: "Fusion360", link: "/credentials#Fusion360", img: Fusion360 },

//     // Add more skills and their corresponding anchor link IDs
//   ];

//   // Render Swiper with slides
//   return (
//     <Swiper
//       modules={[Autoplay]}
//       spaceBetween={30}
//       slidesPerView={4}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       loop={true}
//     >
//       {skills.map((skill, index) => (
//         <SwiperSlide key={index}>
//           <Link to={skill.link} className="skill-bubble">
//             <img src={skill.img} alt={skill.name} />
//             {/* <p>{skill.name}</p> */}
//           </Link>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// export default SkillsSection;
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "./Skills.css"; // Ensure you have the Skills.css file in the same directory

function SkillsSection() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const cachedSkills = sessionStorage.getItem("skills");

    if (cachedSkills) {
      setSkills(JSON.parse(cachedSkills));
    } else {
      fetch("https://api.airtable.com/v0/appcrSl7Zgy2SpKCZ/tbl5o8SBZ21RWiQ2q", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer patuYfQKHplr0F44g.7d0135b2eaef3da73448ccb00bb74e9dbe2c1cfdc96f427ab8001fca87b69b2a", // Replace with your actual API key
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // Transform records to match the structure expected by Swiper
          const transformedSkills = data.records.map((record) => {
            const iconUrl =
              record.fields["icon"] && record.fields["icon"][0]
                ? record.fields["icon"][0].url
                : "defaultIconPath.jpg"; // Provide a default path to an icon image
            return {
              "Skill Name": record.fields["Skill Name"], // Ensure the field name matches your Airtable field
              link: `/credentials#${record.fields["Skill Name"]}`, // Construct the link dynamically
              icon: iconUrl, // Use the correct field name and a default icon path
              proficiency: record.fields["proficiency"],
            };
          });
          setSkills(transformedSkills);
          sessionStorage.setItem("skills", JSON.stringify(transformedSkills));
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, []);

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
          <Link to={skill.link} className="skill-bubble">
            <img src={skill.icon} alt={skill.name} />
            {/* Optionally you can display the skill name */}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SkillsSection;
