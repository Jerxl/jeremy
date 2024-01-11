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

  useEffect(() => {
    // Function to fetch skills from Airtable
    const fetchSkills = () => {
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
          // Cache the fetched data in sessionStorage
          sessionStorage.setItem("skills", JSON.stringify(transformedSkills));
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    };

    // Check if cached data exists
    const cachedSkills = sessionStorage.getItem("skills");
    if (cachedSkills) {
      setSkills(JSON.parse(cachedSkills));
    } else {
      // Fetch skills from Airtable if not cached
      fetchSkills();
    }
  }, []);

  return (
    <div className="Skills mt-4">
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <SkillCard key={skill["Skill Name"]} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
