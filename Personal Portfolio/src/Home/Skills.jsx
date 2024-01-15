// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "./Skills.css"; // Ensure you have the Skills.css file in the same directory

// function SkillsSection() {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     const cachedSkills = sessionStorage.getItem("skills");

//     if (cachedSkills) {
//       setSkills(JSON.parse(cachedSkills));
//     } else {
//       fetch("https://api.airtable.com/v0/appcrSl7Zgy2SpKCZ/tbl5o8SBZ21RWiQ2q", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API}`, // Replace with your actual API key
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           // Transform records to match the structure expected by Swiper
//           const transformedSkills = data.records.map((record) => {
//             const iconUrl =
//               record.fields["icon"] && record.fields["icon"][0]
//                 ? record.fields["icon"][0].url
//                 : "defaultIconPath.jpg"; // Provide a default path to an icon image
//             return {
//               "Skill Name": record.fields["Skill Name"], // Ensure the field name matches your Airtable field
//               link: `/credentials#${record.fields["Skill Name"]}`, // Construct the link dynamically
//               icon: iconUrl, // Use the correct field name and a default icon path
//               proficiency: record.fields["proficiency"],
//             };
//           });
//           setSkills(transformedSkills);
//           sessionStorage.setItem("skills", JSON.stringify(transformedSkills));
//         })
//         .catch((error) => {
//           console.error("Error fetching data: ", error);
//         });
//     }
//   }, []);

//   return (
//     <Swiper
//       modules={[Autoplay, Pagination, Navigation]}
//       spaceBetween={30}
//       slidesPerView={4} // Default number of slides per view
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       loop={true}
//       // Define responsive breakpoints
//       breakpoints={{
//         // when window width is >= 320px
//         320: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         // when window width is >= 768px
//         768: {
//           slidesPerView: 3, // Set 3 slides per view for 'md' size
//           spaceBetween: 30,
//         },
//         // Add more breakpoints if needed
//         1024: {
//           slidesPerView: 4,
//           spaceBetween: 40,
//         },
//       }}
//     >
//       {skills.map((skill, index) => (
//         <SwiperSlide key={index}>
//           <Link to={skill.link} className="skill-bubble">
//             <img src={skill.icon} alt={skill["Skill Name"]} />
//             {/* Optionally you can display the skill name */}
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
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API}`, // Replace with your actual API key
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
      spaceBetween={0}
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
