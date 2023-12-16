import React from "react";
import profileimg from "../assets/Personal_img.png";
import "./about.css";
function About() {
  return (
    <div className="About_Main">
      <aside className="About_Aside">
        <div className="About_Aside_Account">
          <img src={profileimg} alt="" className="About_Aside_Account_Img" />
          <p>Zhao Xinlei</p>
          <p>xxxxxx</p>
        </div>
        <div className="About_Aside_SocialMedia">
          <a href="mailto:jeremyzhaoxl@gmail.com" target="blank">
            <i className="bi bi-envelope-at"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/zhao-xinlei-80875b211/"
            target="blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a href="https://github.com/Jerxl" target="blank">
            <i className="bi bi-github"></i>
          </a>
          <a href="">
            <i className="bi bi-instagram" target="blank"></i>
          </a>
        </div>
        <div className="About_Aside_Information">
          <div>
            <p>Country</p>
            <p>Singapore</p>
          </div>
          <div>
            <p>School</p>
            <p>Republic</p>
          </div>
          <div>
            <p>Major</p>
            <p>DIOM</p>
          </div>
        </div>
        <div className="About_Aside_CTA"></div>
      </aside>
      <div className="About_Content_Main">
        <div className="About_Intro">
          <p>HI MY NEW FRIEND!</p>
          <h1>Hello</h1>
          <h1>I'm Zhao Xinlei</h1>
          <button>Read More</button>
        </div>
        <div className="About_Me"></div>
        <div className="About_Educations"></div>
        <div className="About_Achievements"></div>
        <div className="About_Testimonials"></div>
      </div>
    </div>
  );
}

export default About;
