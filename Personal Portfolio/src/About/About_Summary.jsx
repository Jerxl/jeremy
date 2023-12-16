import React from "react";
import "./About_Summary.css";
import profileimg from "../assets/Personal_img.png";
import Deco1 from "../assets/Deco1.png";
import Signature from "../assets/signature.png";
import "bootstrap-icons/font/bootstrap-icons.css";
function About_Summary() {
  return (
    <div className="container min-h-screen box-border">
      {/* Intro */}
      <div className="flex h-80 gap-4 ">
        <div className=" max-w-xs  p-3 rounded-3xl bg-my-gradient flex-1">
          <img src={profileimg} alt="Zhao Xinlei" className="rounded-3xl" />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-5xl font-medium text-text-colour md:text-3xl">
            ✨SELF-SUMMARY✨
          </h2>
          <div className="bg-my-gradient rounded-3xl p-3 h-full ">
            <img src={Deco1} alt="" className="mb-4 md:h-12" />
            <h3 className="text-3xl font-medium mb-2 text-text-colour md:text-2xl">
              Zhao Xinlei
            </h3>

            <p className="text-xl text-text-colour2 md:text-lg">
              Engineering student passionate about embracing and advancing
              technology, driven by innovation and creative problem-solving.
            </p>
          </div>
        </div>
      </div>

      <div className="About_Summary_Background mt-5 flex h-auto gap-3">
        <div className="About_Summary_Background_Left flex-1 bg-my-gradient rounded-3xl p-4">
          <h2 className="text-2xl text-text-colour mb-3 font-medium">
            EDUCATION
          </h2>
          <div className="flex gap-5 flex-col">
            <div className="flex gap-2 flex-col">
              <h5 className="text-text-colour2 font-normal  ">
                April 2021 - Current
              </h5>
              <h3 className="text-text-colour text-lg font-semibold">
                Diploma in Industrial & Operations Management
              </h3>
              <h4 className="text-text-colour2">Republic Polytechnic</h4>
            </div>
            <div className="flex gap-2 flex-col">
              <h5 className="text-text-colour2 font-normal">
                Mar 2020 - Mar 2021
              </h5>
              <h3 className="text-text-colour text-lg font-medium">
                Human Resoruce Management & Services
              </h3>
              <h4 className="text-text-colour2 font-normal">
                Institute of Technical Education
              </h4>
            </div>
          </div>
        </div>

        <div className="About_Summary_Background_Right flex-1 bg-my-gradient rounded-3xl p-4">
          <h2 className="text-2xl text-text-colour mb-3 font-medium">
            EXPERIENCE
          </h2>
          <div className="flex gap-5 flex-col">
            <div className="flex gap-2 flex-col">
              <h5 className="text-text-colour2">March 2022 - Present</h5>
              <h4 className="text-text-colour text-lg font-semibold">
                Stellar
              </h4>
              <h3 className="text-text-colour2 font-normal">
                Intern - Automation Engineer
              </h3>
            </div>
            <div className="flex gap-2 flex-col">
              <h5 className="text-text-colour2">March 2022 - Present</h5>
              <h4 className="text-text-colour text-lg font-semibold">
                Starboard
              </h4>
              <h3 className="text-text-colour2 font-normal">
                Intern - Automation Engineer
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex mt-5 gap-3 mb-5">
        <div className="About_Summary_Socal bg-my-gradient flex-1 p-2 rounded-3xl">
          <div className="SocialMedia">
            <a
              href="mailto:jeremyzhaoxl@gmail.com"
              target="blank"
              className="flex justify-center"
            >
              <i className="bi bi-envelope-at"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/zhao-xinlei-80875b211/"
              target="blank"
              className="flex justify-center"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/Jerxl"
              target="blank"
              className="flex justify-center"
            >
              <i className="bi bi-github"></i>
            </a>
            <a href="" target="blank" className="flex justify-center">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <div className="CV_Portfo_content">
            <div>
              <div>Channles</div>
              <div className="Font_Focus">Contact Me</div>
            </div>
            <div>
              <i className="bi bi-arrow-right-circle"></i>
            </div>
          </div>
        </div>

        <div className="About_Summary_Contact flex-1  ">
          <div className="Personal_Exp_CTA h-full">
            <span className="text-4xl text-text-colour font-medium">
              Let's work together.
            </span>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </div>
        </div>
        <div className="About_MeCard">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Signature} alt="Signature" />
          </div>
          <div className="About_MeCard_content">
            <div>
              <div>More About Me</div>
              <div className="Font_Focus">Credentials</div>
            </div>
            <div>
              <i
                className="bi bi-arrow-right-circle"
                style={{ fontSize: "2rem" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_Summary;