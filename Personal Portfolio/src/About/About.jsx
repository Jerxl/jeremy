import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import profileimg from "../assets/Personal_img.png";
import { useEffect } from "react";
import Skill from "../Skills/About_Skills.jsx";

function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  return (
    <div
      className="container h-auto flex flex-col md:flex-row pl-5 pr-5 md:pl-2 md:pr-2 md:gap-6 lg:pr-0 lg:pl-0 mb-24 float-up"
      id="About_Container"
    >
      <aside className=" bg-my-gradient rounded-2xl p-3 flex flex-col md:h-[550px] md:w-[500px] md:sticky md:top-0">
        <div className=" flex flex-col items-center mb-3 mt-3">
          <img src={profileimg} alt="" className=" w-96 rounded-3xl md:w-72" />
          <p className=" text-3xl font-semibold text-text-colour mt-2">
            Zhao Xinlei
          </p>
        </div>

        <div className="flex justify-evenly pt-2 pb-2 group/icons">
          <div className="bg-bg-colour w-16 h-16 rounded-full center_item hover:bg-bg-colour-hover2 hover:-translate-y-2 hover:duration-100">
            <a href="mailto:jeremyzhaoxl@gmail.com" target="blank">
              <i className="bi bi-envelope-at text-text-colour text-3xl"></i>
            </a>
          </div>
          <div className="bg-bg-colour w-16 h-16 rounded-full center_item hover:bg-bg-colour-hover2 hover:-translate-y-2 hover:duration-100">
            <a
              href="https://www.linkedin.com/in/zhao-xinlei-80875b211/"
              target="blank"
            >
              <i className="bi bi-linkedin text-text-colour text-3xl"></i>
            </a>
          </div>

          <div className="bg-bg-colour w-16 h-16 rounded-full center_item hover:bg-bg-colour-hover2 hover:-translate-y-2 hover:duration-100">
            <a href="https://github.com/Jerxl" target="blank">
              <i className="bi bi-github text-text-colour text-3xl"></i>
            </a>
          </div>
          <div className=" bg-bg-colour w-16  h-16 rounded-full center_item hover:bg-bg-colour-hover2 hover:-translate-y-2 hover:duration-100">
            <a href="">
              <i
                className="bi bi-instagram text-text-colour text-3xl"
                target="blank"
              ></i>
            </a>
          </div>
        </div>
        <NavLink to="/contact">
          <div className="center_item bg-bg-colour m-4 p-2 rounded-3xl text-xl hover:bg-bg-colour-hover hover:transition">
            <p className="text-text-colour font-semibold">Contact Me</p>
          </div>
        </NavLink>
      </aside>
      <div className="text-text-colour flex flex-col gap-20 mt-4 md:mt-0 w-[100%]">
        <div className="About_Me">
          <h2 className=" text-xl font-semibold mb-2 md:text-2xl">ABOUT ME</h2>
          <p className="mb-2 font-medium">
            Hello, I'm Zhao Xinlei, a passionate 3rd-year Engineering student at
            Republic Polytechnic with a deep interest in technology and
            innovation. My journey in engineering is fueled by a love for
            learning and problem-solving, where I eagerly embrace advancements
            in technology and strive to contribute meaningfully to the field.
          </p>

          <p className="font-medium">
            My academic and extracurricular experiences have honed my strengths
            in proactive problem-solving and teamwork. I approach challenges
            with a positive mindset and have a keen sensitivity to team
            dynamics, ensuring effective collaboration even in complex
            situations. These skills were put to the test and further developed
            through active participation in prestigious competitions like the
            SUTD 3D Printing Design Innovation Challenge, NUS MIEC2022, and the
            National IIOT Competition 2023. Here, I contributed innovative
            solutions to address some of tomorrow's pressing issues. I am eager
            to bring my enthusiasm, creativity, and collaborative spirit to a
            professional setting, where I can continue to grow and make a
            positive impact in the world of engineering.
          </p>
        </div>
        <div className="About_Educations" id="Educations">
          <h2 className="text-xl font-semibold mb-2 md:text-2xl">EDUCATION</h2>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-text-colour2 mb-0.5 font-medium">
                2021 - Current
              </p>
              <h2 className="text-lg font-medium mb-0.5 text-[#5b78f6]">
                Diploma in Industrial & Operations Management
              </h2>
              <p className="text-text-colour2 mb-0.5 font-medium">
                Republic Poly
              </p>
              <p className="font-medium mb-2">
                I focused on understanding and optimizing complex industrial and
                operational processes. This program offered a comprehensive
                exploration of the latest trends and techniques in the field,
                laying a solid foundation for my future endeavors in engineering
                and technology. Active participation in practical projects and
                competitions, enhancing my hands-on experience in the field.
                Active participation in practical projects and competitions,
                enhancing my hands-on experience in the field.
              </p>
            </div>
            <div>
              <p className="text-text-colour2 mb-0.5 font-medium">
                2020 - 2021
              </p>
              <h2 className="text-lg font-medium mb-0.5 text-[#5b78f6]">
                Higher Nitec in Human Resources Management
              </h2>
              <p className="text-text-colour2 mb-0.5 font-medium">
                ITE College Central
              </p>
              <p className="font-medium">
                Acquired foundational knowledge and skills in human resources
                management, contributing to my understanding of team dynamics
                and effective collaboration. Developed a strong base in people
                management and organizational behavior, skills that are valuable
                in every professional setting.
              </p>
            </div>
          </div>
        </div>
        <div className="Experience" id="Experience">
          <h2 className="text-xl font-semibold mb-2 md:text-2xl">EXPERIENCE</h2>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-lg font-medium mb-0.5  text-[#5b78f6]">
                Intern - Automaton Engineer
              </h2>
              <p className="text-text-colour2 mb-0.5 font-medium">Stellar</p>
              <p className="font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                eaque placeat numquam vel repudiandae impedit pariatur ratione
                nam dolorem labore error, quos nulla, atque a nostrum. Nulla
                repellendus sint blanditiis.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-0.5 text-[#5b78f6]">
                Intern - Automation Engineer
              </h2>
              <p className="text-text-colour2 mb-0.5 font-medium">Starboard</p>
              <p className="font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                eaque placeat numquam vel repudiandae impedit pariatur ratione
                nam dolorem labore error, quos nulla, atque a nostrum. Nulla
                repellendus sint blanditiis.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-0.5 text-[#5b78f6]">
                Intern - Human Resources
              </h2>
              <p className="text-text-colour2 mb-0.5 font-medium">ARYZTA</p>
              <p className="font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                eaque placeat numquam vel repudiandae impedit pariatur ratione
                nam dolorem labore error, quos nulla, atque a nostrum. Nulla
                repellendus sint blanditiis.
              </p>
            </div>
          </div>
        </div>
        <div className="Skills" id="Skills">
          <h2 className="text-xl font-semibold mb-2 md:text-2xl">SKILLS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus eius reiciendis itaque maiores facilis ipsa consequatur
            explicabo labore nostrum officiis totam earum numquam omnis, error
            deserunt voluptatum! Perferendis illo corporis quisquam, optio ut,
            ex autem repellat nisi id veniam totam!
          </p>
          {<Skill />}
        </div>
        <div className="About_Achievements" id="Achievements">
          <h2 className="text-xl font-semibold mb-2 md:text-2xl">
            ACHIEVEMENTS
          </h2>
          <div className="flex flex-col gap-3">
            <div>
              <h3 className=" text-lg font-medium mb-0.5 text-[#5b78f6]">
                UiPath Student Developer Champion Awarded for demonstrating
              </h3>
              <p className=" font-medium">
                Awarded for demonstrating exceptional skills in automation and
                innovation, underscoring my commitment to staying at the
                forefront of technological advancements.
              </p>
            </div>
            <div>
              <h3 className=" text-lg font-medium mb-0.5 text-[#5b78f6]">
                National IIOT Competition 2023
              </h3>
              <p className=" font-medium">
                Awarded for demonstrating exceptional skills in automation and
                innovation, underscoring my commitment to staying at the
                forefront of technological advancements.
              </p>
            </div>
            <div>
              <h3 className=" text-lg font-medium mb-0.5 text-[#5b78f6]">
                NUS MIEC 2022
              </h3>
              <p className=" font-medium">
                Awarded for demonstrating exceptional skills in automation and
                innovation, underscoring my commitment to staying at the
                forefront of technological advancements.
              </p>
            </div>
          </div>
        </div>
        <div className="About_Testimonials">
          <h2 className="text-xl font-semibold mb-2 md:text-2xl">
            Testimonials
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus eius reiciendis itaque maiores facilis ipsa consequatur
            explicabo labore nostrum officiis totam earum numquam omnis, error
            deserunt voluptatum! Perferendis illo corporis quisquam, optio ut,
            ex autem repellat nisi id veniam totam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Necessitatibus unde recusandae,
            obcaecati voluptates asperiores quod consequuntur vitae et, nam
            earum deserunt culpa aut in? Repellendus, minus! Reiciendis est
            nobis corrupti.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
