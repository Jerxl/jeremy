import React from "react";
import "./home.css";
import profileimg from "../assets/Personal_img.png";
import Signature from "../assets/signature.png";
import "bootstrap-icons/font/bootstrap-icons.css";

function home() {
  return (
    <div className="Main">
      <div className="Personal_Top">
        <div className="Intro">
          <div className="Profile_Img">
            <img src={profileimg} alt="" />
          </div>
          <div className="Profile_Content">
            <p>A Web Developer</p>
            <p>Jeremy Zhao</p>
            <p>I'm a freshgrad from Republic poly</p>
            <span>Icon</span>
          </div>
        </div>
        <div className="Intro_Top_left">
          <div className="Type_js_Intro">Hello i am</div>
          <div className="About_me">
            <div className="Credentials">
              <div>
                <img src={Signature} alt="Signature" className="Signature" />
              </div>
              <div className="Credentials_content">
                <div>
                  <div>More About Me</div>
                  <div>Credentials</div>
                </div>
                <div>
                  <i
                    className="bi bi-box-arrow-in-down-right"
                    style={{ fontSize: "2rem" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="Credentials">
              <div>
                <img src={Signature} alt="Signature" className="Signature" />
              </div>
              <div className="Credentials_content">
                <div>
                  <div>Showcase</div>
                  <div>Portfolio</div>
                </div>
                <div>
                  <i
                    className="bi bi-box-arrow-in-down-right"
                    style={{ fontSize: "2rem" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Personal_Botm">
        <div className="CV">CV</div>
        <div className="TopSkills"></div>
        <div className="Contacts"></div>
      </div>
    </div>
  );
}

export default home;
