import { React, useEffect, useRef, useState } from "react";
import "./home.css";
import profileimg from "../assets/Personal_img.png";
import Signature from "../assets/signature.png";
import Portfolio from "../assets/Portfolio.png";
import CV from "../assets/image-removebg-preview.png";
import Resume from "../assets/Resume.pdf";
import "bootstrap-icons/font/bootstrap-icons.css";
import Typed from "typed.js";
import Skills from "./Skills.jsx";

// import achivement_img from "../assets/achivement.png";
// import experience_img from "../assets/experience.png";
// import education_img from "../assets/education.png";

function home() {
  const el = useRef(null);
  const [quotes, setQuotes] = useState(["Loading quotes..."]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    async function fetchQuotes() {
      const LINK = `https://api.airtable.com/v0/appXL3iEhr6CYaPow/tblYWdFiNYMekfiNE/`;
      try {
        const response = await fetch(LINK, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer patUTdw0o5sbUll6Z.0cadd11aeac24e50341262e4ef524ce9bd05a8d4d48fbcf0731ddce46fb7d163`, // Be sure to replace with your actual API key
          },
        });
        const data = await response.json();
        const shuffled = data.records.sort(() => 0.5 - Math.random());
        let selectedQuotes = shuffled
          .slice(0, 5)
          .map((record) => record.fields.Quotes);
        setQuotes(selectedQuotes);
      } catch (error) {
        setQuotes(["Error loading quotes..."]);
      }
    }

    fetchQuotes();
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      const typed = new Typed(el.current, {
        strings: quotes,
        typeSpeed: 50,
        fadeOut: true,
        loop: true,
        showCursor: false,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [quotes]);

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a link and trigger the download
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Resume.pdf"; // Set the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="Master_Main">
      <div className={`Main`}>
        <div className="Personal_Top">
          <div className="Intro">
            <div className="Profile_Img">
              <img src={profileimg} alt="" />
            </div>
            <div className="Profile_Content">
              <p>A Web Developer</p>
              <p style={{ color: "#d1d1cf", fontSize: "30px" }}>Jeremy Zhao</p>
              <p>
                Engineering student passionate about embracing and advancing
                technology, driven by innovation and creative problem-solving.
              </p>
            </div>
          </div>
          <div className="Intro_Top_left">
            <div className="Type_js_Intro">
              <span ref={el}></span>
            </div>
            <div className="About_me">
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
              <div className="About_MeCard">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={Portfolio} alt="Signature" />
                </div>
                <div className="About_MeCard_content">
                  <div>
                    <div>Showcase</div>
                    <div className="Font_Focus">Portfolio</div>
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
        </div>
        <div className="Personal_Botm">
          {/* CV */}
          <div className="CV_Portfo" onClick={handleDownloadCV}>
            <div className="CV_Img">
              <img src={CV} alt="CV" />
            </div>
            <div className="CV_Portfo_content">
              <div>
                <div>My cv</div>
                <div className="Font_Focus">Download</div>
              </div>
              <div>
                <i
                  className="bi bi-arrow-right-circle"
                  style={{ fontSize: "2rem" }}
                ></i>
              </div>
            </div>
          </div>

          <div className="TopSkills">
            <div className="Skills_Container">
              <Skills />
            </div>
            <div className="Skills_content">
              <div>
                <div>Professional Skills </div>
                <div className="Font_Focus">Skills Overview</div>
              </div>
            </div>
          </div>
          <div className="CV_Portfo">
            {/* Contact */}
            <div>
              <div className="SocialMedia_Wrap">
                <div className="SocialMedia">
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
              </div>
              <div className="CV_Portfo_content">
                <div>
                  <div>Channles</div>
                  <div className="Font_Focus">Contact Me</div>
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
        {/* // In your React component file */}
        <div className="Personal_Experience">
          <div className="Personal_Exp">
            <div className="Personal_Exp_Card">
              <div>
                <i className="bi bi-award icon"></i>
              </div>
              <div>07</div>
              <div>ACHIVEMENTS</div>
            </div>
            <div className="Personal_Exp_Card">
              <div>
                <i className="bi bi-book icon"></i>
              </div>
              <div>Tertiary</div>
              <div>EDUCATION</div>
            </div>
            <div className="Personal_Exp_Card">
              <div>
                <i className="bi bi-buildings icon"></i>
              </div>
              <div>3</div>
              <div>WORK EXPERIENCE</div>
            </div>
          </div>
          <div className="Personal_Exp_CTA">
            <span>Let's work together.</span>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
