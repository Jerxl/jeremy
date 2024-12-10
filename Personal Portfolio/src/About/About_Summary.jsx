import React from "react";
import profileimg from "../assets/Personal_img.png";
import Deco1 from "../assets/Deco1.png";
import Signature from "../assets/signature.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";
function About_Summary() {
  return (
    <div className="container min-h-screen box-border float-up">
      {/* Intro */}
      <div className="flex h-auto gap-4 flex-col lg:flex-row  ">
        <div className=" max-w-xs  p-3 rounded-3xl bg-my-gradient flex-1 ml-auto mr-auto">
          <img src={profileimg} alt="Zhao Xinlei" className="rounded-3xl " />
        </div>
        <div className="flex-1 flex flex-col gap-3 items-center md:items-start">
          <h2 className="text-3xl font-medium text-text-colour md:text-4xl lg:text-5xl">
            ✨SELF-SUMMARY✨
          </h2>
          <div className="bg-my-gradient rounded-3xl p-3 h-full ">
            <img src={Deco1} alt="" className="mb-4 w-5 md:w-6" />
            <h3 className="text-2xl font-medium mb-2 text-text-colour md:text-3xl">
              Zhao Xinlei
            </h3>

            <p className="text-base text-text-colour2 md:text-lg font-medium">
              Hello, I'm Zhao Xinlei, a graduate of Republic Polytechnic with a strong passion for technology and innovation. My journey in engineering is driven by a love for learning and problem-solving. I am eager to embrace advancements in technology and contribute meaningfully to impactful projects in the field.
            </p>
          </div>
        </div>
      </div>

      <div className="About_Summary_Background mt-5 flex h-auto gap-3 flex-col sm:flex-row">
        <div className="About_Summary_Background_Left flex-1 bg-my-gradient rounded-3xl p-4">
          <h2 className="text-2xl text-text-colour mb-3 font-medium">
            EDUCATION
          </h2>
          <div className="flex gap-5 flex-col">
            <div className="flex gap-2 flex-col">
              <h5 className="text-text-colour2 font-medium  ">
                April 2021 - May 2024
              </h5>
              <h3 className="text-text-colour text-lg font-semibold">
                Diploma in Industrial & Operations Management
              </h3>
              <h4 className="text-text-colour2 font-medium">
                Republic Polytechnic
              </h4>
            </div>
            <div className="flex gap-2 flex-col">
              <h5 className="text-text-colour2 font-medium">
                March 2020 - March 2021
              </h5>
              <h3 className="text-text-colour text-lg font-medium">
                Human Resoruce Management & Services
              </h3>
              <h4 className="text-text-colour2 font-medium">
                Institute of Technical Education
              </h4>
            </div>
          </div>
        </div>

        <div className="About_Summary_Background_Right flex-1 bg-my-gradient rounded-3xl p-4 ">
          <h2 className="text-2xl text-text-colour mb-3 font-medium">
            EXPERIENCE
          </h2>
          <div className="flex gap-5 flex-col">
            <div className="flex gap-2 flex-col">
              <h5 className="text-text-colour2 font-medium">
                March 2022 - November 2024
              </h5>
              <h4 className="text-text-colour text-lg font-semibold">
                Stellar
              </h4>
              <h3 className="text-text-colour2 font-medium ">
                Automation Engineer
              </h3>
            </div>
            <div className="flex gap-2 flex-col">
              <h5 className="text-text-colour2 font-medium">
                September 2022 - October 2022
              </h5>
              <h4 className="text-text-colour text-lg font-semibold">
                Starboard
              </h4>
              <h3 className="text-text-colour2 font-medium">
                Intern - Automation Engineer
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex mt-5 gap-3 mb-5 flex-col md:flex-row">
        <div className=" text-text-colour bg-my-gradient flex-1 p-3 flex justify-between flex-col rounded-3xl group hover:scale-105 transition ease-in-out duration-300 ">
          <div className=" xl:mt-5 md:flex-wrap md:w-[250px] lg:max-w-[300px] xl:max-w-none xl:flex-nowrap xl:w-auto md:gap-14 lg:gap-2.5 flex gap-3 justify-center ml-auto mr-auto ">
            <a
              href="mailto:jeremyzhaoxl@gmail.com"
              target="blank"
              className="bg-bg-colour2 rounded-full p-3 flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
            >
              <i className="bi bi-envelope-at text-5xl lg:text-6xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/zhao-xinlei-80875b211/"
              target="blank"
              className="bg-bg-colour2 rounded-full p-3 flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
            >
              <i className="bi bi-linkedin text-5xl lg:text-6xl"></i>
            </a>
            <a
              href="https://github.com/Jerxl"
              target="blank"
              className="bg-bg-colour2 rounded-full p-3 flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
            >
              <i className="bi bi-github text-5xl lg:text-6xl"></i>
            </a>
            <a
              href="https://www.instagram.com/xinleiz/"
              target="blank"
              className="bg-bg-colour2 rounded-full p-3 flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
            >
              <i className="bi bi-instagram text-5xl lg:text-6xl"></i>
            </a>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className=" text-text-colour2 text-base font-medium">
                Channels
              </div>
              <div className="text-2xl font-semibold">Contact Me</div>
            </div>
            <div>
              <i className="bi bi-arrow-right-circle text-text-colour2 text-3xl group-hover:text-text-colour"></i>
            </div>
          </div>
        </div>

        <div className=" flex-1  relative">
          <img
            src={Deco1}
            alt=""
            className="mb-4 w-5 md:w-8 absolute top-0 left-5 hidden md:block xl:w-11"
          />
          <NavLink to="/contact">
            <div className="bg-my-gradient rounded-3xl p-3 flex-1 group h-full flex justify-between items-center hover:bg-none hover:bg-[#007bff] hover:-translate-y-2 hover:duration-300 hover:ease-in-out">
              <span className="text-4xl text-text-colour font-medium">
                Let's work together.
              </span>
              <i className="bi bi-arrow-right-circle-fill text-text-colour2 text-3xl group-hover:text-text-colour"></i>
            </div>
          </NavLink>
        </div>
        <div className=" bg-my-gradient rounded-3xl p-3 flex-1 group hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out">
          {/* Credentials */}
          <NavLink to="/credentials#About_Container ">
            <div className="flex justify-center lg:min-h-[150px]  md:mb-6 md:mt-6 xl:mb-0 xl:mt-0">
              <img src={Signature} alt="Signature" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className=" text-text-colour2 text-base font-medium">
                  More About Me
                </div>
                <div className="text-2xl font-semibold text-text-colour">
                  Credentials
                </div>
              </div>
              <div>
                <i className="bi bi-arrow-right-circle text-text-colour2 text-3xl group-hover:text-text-colour"></i>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default About_Summary;
