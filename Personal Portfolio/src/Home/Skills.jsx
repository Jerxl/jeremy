import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { getCachedData, setCachedData } from "../utils/cacheUtils";
import "./Skills.css"; // Ensure you have the Skills.css file in the same directory

function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      // Try to get cached data first
      const cachedSkills = getCachedData("cache_skills");

      if (cachedSkills) {
        setSkills(cachedSkills);
        setIsLoading(false);
        return;
      }

      // If no cache, fetch from API
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.airtable.com/v0/appcrSl7Zgy2SpKCZ/tbl5o8SBZ21RWiQ2q",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const fetchIcons = data.records
          .filter((record) => record.fields["Status"] === "Publish")
          .map(async (record) => {
            let iconDataUrl = "defaultIconPath.jpg";
            if (record.fields["icon"] && record.fields["icon"][0]) {
              try {
                const iconResponse = await fetch(record.fields["icon"][0].url);
                const blob = await iconResponse.blob();
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
        setCachedData("cache_skills", transformedSkills);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching skills data:", error);
        setError("Failed to load skills. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-text-colour2">Loading skills...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (skills.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-text-colour2">No skills available</div>
      </div>
    );
  }

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
            <img src={skill.icon} alt={skill["Skill Name"] || "Skill icon"} />
            {/* Optionally you can display the skill name */}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SkillsSection;
