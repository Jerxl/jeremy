import { React, useEffect, useRef, useState } from "react";
import "./home.css";
import profileimg from "../assets/Personal_img.png";
import Signature from "../assets/signature.png";
import CV from "../assets/image-removebg-preview.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import Typed from "typed.js";

function home() {
  const el = useRef(null);
  const [quotes, setQuotes] = useState(["Loading quotes..."]);

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
        console.error("Error fetching quotes:", error);
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
  return (
    <div className="Main">
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
              <div>
                <img src={Signature} alt="Signature" />
              </div>
              <div className="About_MeCard_content">
                <div>
                  <div>More About Me</div>
                  <div style={{ fontSize: "20px", color: "#d1d1cf" }}>
                    Credentials
                  </div>
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
              <div>
                <img src={Signature} alt="Signature" />
              </div>
              <div className="About_MeCard_content">
                <div>
                  <div>Showcase</div>
                  <div style={{ fontSize: "20px", color: "#d1d1cf" }}>
                    Portfolio
                  </div>
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
        <div className="CV_Portfo">
          <div className="CV_Img">
            <img src={CV} alt="CV" />
          </div>
          <div className="CV_Portfo_content">
            <div>
              <div>My cv</div>
              <div style={{ fontSize: "20px", color: "#d1d1cf" }}>Download</div>
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
          <div className="CV_Img">
            <img src={CV} alt="CV" />
          </div>
          <div className="CV_Portfo_content">
            <div>
              <div>Skills</div>
              <div style={{ fontSize: "20px", color: "#d1d1cf" }}>
                List of Skills
              </div>
            </div>
            <div>
              <i
                className="bi bi-arrow-right-circle"
                style={{ fontSize: "2rem" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="CV_Portfo">
          {/* Contact */}
          <div>
            <div className="SocialMedia_Wrap">
              <div className="SocialMedia">
                <div>
                  <a href="mailto:jeremyzhaoxl@gmail.com" target="blank">
                    <i class="bi bi-envelope-at"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zhao-xinlei-80875b211/"
                    target="blank"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/Jerxl" target="blank">
                    <i class="bi bi-github"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram" target="blank"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="CV_Portfo_content">
              <div>
                <div>Channles</div>
                <div style={{ fontSize: "20px", color: "#d1d1cf" }}>
                  Contact Me
                </div>
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
  );
}

export default home;
