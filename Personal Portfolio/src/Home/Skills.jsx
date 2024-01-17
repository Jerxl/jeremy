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
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API}`,
        },
      })
        .then((res) => res.json())
        .then(async (data) => {
          const fetchIcons = data.records.map(async (record) => {
            let iconDataUrl = "defaultIconPath.jpg";
            if (record.fields["icon"] && record.fields["icon"][0]) {
              try {
                const response = await fetch(record.fields["icon"][0].url);
                const blob = await response.blob();
                iconDataUrl = await new Promise((resolve) => {
                  const reader = new FileReader();
                  reader.onloadend = () => resolve(reader.result);
                  reader.readAsDataURL(blob);
                });
              } catch (error) {
                console.error("Error fetching icon:", error);
              }
            }
            return {
              "Skill Name": record.fields["Skill Name"],
              link: `/credentials#${record.fields["Skill Name"]}`,
              icon: iconDataUrl,
              proficiency: record.fields["proficiency"],
            };
          });

          const transformedSkills = await Promise.all(fetchIcons);
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
