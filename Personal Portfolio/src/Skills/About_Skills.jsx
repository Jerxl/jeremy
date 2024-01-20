import React, { useState, useEffect } from "react";
import "./About_Skills.css";

function SkillCard({ skill }) {
  // Use skill fields from the API response
  return (
    <div
      className="flip-card w-24 h-24 m-2 perspective"
      id={skill["Skill Name"]}
    >
      <div className="flip-card-inner relative w-full h-full">
        <div className="flip-card-front absolute w-full h-full flex items-center justify-center p-4">
          <img
            src={skill["icon"]}
            alt={skill["Skill Name"]}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flip-card-back absolute w-full h-full flex items-center justify-center p-4">
          <div className="text-center">
            <p className="font-bold">{skill["Skill Name"]}</p>
            <p>Proficiency: {skill.proficiency}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [showAllSkills, setShowAllSkills] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(
          "https://api.airtable.com/v0/appcrSl7Zgy2SpKCZ/tbl5o8SBZ21RWiQ2q",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API}`, // Replace with your actual API key
            },
          }
        );

        const data = await response.json();
        const fetchIcons = data.records
          .filter((record) => record.fields["Status"] === "Publish")
          .map(async (record) => {
            let iconDataUrl = "defaultIconPath.jpg"; // Fallback icon path
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
              icon: iconDataUrl, // Data URL
              proficiency: record.fields["proficiency"],
            };
          });

        const transformedSkills = await Promise.all(fetchIcons);
        setSkills(transformedSkills);
        sessionStorage.setItem("skills", JSON.stringify(transformedSkills));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    const cachedSkills = sessionStorage.getItem("skills");
    if (cachedSkills) {
      setSkills(JSON.parse(cachedSkills));
    } else {
      fetchSkills();
    }
  }, []);

  const toggleShowAllSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  return (
    <div className="Skills mt-4">
      <div className="flex flex-wrap justify-center">
        {skills.slice(0, showAllSkills ? skills.length : 9).map((skill) => (
          <SkillCard key={skill["Skill Name"]} skill={skill} />
        ))}
      </div>
      {skills.length > 9 && (
        <button
          onClick={toggleShowAllSkills}
          className="mt-4 bg-bg-colour2 text-white py-2 px-4 rounded  sm:block"
        >
          {showAllSkills ? "Less Skills" : "More Skills"}
        </button>
      )}
    </div>
  );
}

export default SkillsSection;
