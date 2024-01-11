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
import { NavLink } from "react-router-dom";

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
    <div className="Master_Main float-up">
      <div className={`Main`}>
        <div className="Personal_Top">
          <div className="Intro ">
            <div className="Profile_Img">
              <img src={profileimg} alt="" />
            </div>
            <div className="Profile_Content ">
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
              <div className="About_MeCard ">
                <NavLink to="/credentials#About_Container ">
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
                </NavLink>
              </div>

              <div className="About_MeCard">
                <NavLink to="/Works">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Portfolio} alt="Portfolio" />
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
                </NavLink>
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
              <NavLink to="/credentials#Achievements">
                <div className=" flex justify-center">
                  <i className="bi bi-award icon"></i>
                </div>

                <div>ACHIVEMENTS</div>
              </NavLink>
            </div>
            <div className="Personal_Exp_Card">
              <NavLink to="/credentials#Educations">
                <div className=" flex justify-center">
                  <i className="bi bi-book icon"></i>
                </div>

                <div>EDUCATION</div>
              </NavLink>
            </div>
            <div className="Personal_Exp_Card">
              <NavLink to="/credentials#Experience">
                <div className=" flex justify-center">
                  <i className="bi bi-buildings icon"></i>
                </div>

                <div>WORK EXPERIENCE</div>
              </NavLink>
            </div>
          </div>

          <div className="Personal_Exp_CTA w-full justify-center  lg:justify-start">
            <NavLink to="/contact">
              <span>Let's work together.</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    // <div className=" container ">
    //   <div className="Personal_Top flex flex-col lg:flex-row ">
    //     <div className="flex flex-col bg-my-gradient justify-center items-center rounded-3xl p-3 ml-3 mr-3 md:flex-row flex-1 ">
    //       <div className=" ">
    //         <img
    //           src={profileimg}
    //           alt=""
    //           className=" rounded-3xl w-80 md:w-64"
    //         />
    //       </div>
    //       <div className="Profile_Content flex flex-col items-center  md:w-[500px] md:pl-10 md:items-start ">
    //         <p className=" text-xl text-text-colour font-semibold">
    //           A Web Developer
    //         </p>
    //         <p className="text-2xl text-text-colour font-bold">Jeremy Zhao</p>
    //         <p className=" font-medium text-text-colour lg:text-base">
    //           Engineering student passionate about embracing and advancing
    //           technology, driven by innovation and creative problem-solving.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col rounded-3xl p-3 flex-1 ">
    //       <div className="Type_js_Intro bg-my-gradient rounded-2xl p-2.5 text-text-colour font-medium">
    //         <span ref={el}></span>
    //       </div>
    //       <div className="flex mt-3  flex-col  gap-3 md:flex-row">
    //         <div className=" bg-my-gradient rounded-3xl p-3 flex-1">
    //           <NavLink to="/credentials#About_Container ">
    //             <div className="flex flex-col justify-center items-center w-full">
    //               <div>
    //                 <img src={Signature} alt="Signature" className=" " />
    //               </div>
    //               <div className="flex justify-around w-full text-text-colour font-medium">
    //                 <div>
    //                   <div className="text-text-colour2">More About Me</div>

    //                   <div className=" text-xl  font-semibold">Credentials</div>
    //                 </div>
    //                 <div>
    //                   <i
    //                     className="bi bi-arrow-right-circle"
    //                     style={{ fontSize: "2rem" }}
    //                   ></i>
    //                 </div>
    //               </div>
    //             </div>
    //           </NavLink>
    //         </div>

    //         <div className=" bg-my-gradient rounded-3xl p-3 flex-1">
    //           <NavLink to="/Works">
    //             <div className="flex flex-col justify-center items-center w-full">
    //               <div>
    //                 <img src={Portfolio} alt="Portfolio" className=" " />
    //               </div>
    //               <div className="flex justify-around w-full text-text-colour font-medium">
    //                 <div>
    //                   <div className="text-text-colour2">Showcase</div>
    //                   <div className="text-xl  font-semibold">Portfolio</div>
    //                 </div>
    //                 <div>
    //                   <i
    //                     className="bi bi-arrow-right-circle"
    //                     style={{ fontSize: "2rem" }}
    //                   ></i>
    //                 </div>
    //               </div>
    //             </div>
    //           </NavLink>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className=" flex   flex-col  gap-3 p-3">
    //     {/* CV */}
    //     <div
    //       className=" bg-my-gradient rounded-3xl p-3 flex w-full  flex-col justify-center items-center"
    //       onClick={handleDownloadCV}
    //     >
    //       <div className=" w-48">
    //         <img src={CV} alt="CV" />
    //       </div>
    //       <div className="flex justify-around w-full text-text-colour font-medium ">
    //         <div>
    //           <div className="text-text-colour2">My CV</div>
    //           <div className="text-xl  font-semibold">Download</div>
    //         </div>
    //         <div>
    //           <i
    //             className="bi bi-arrow-right-circle"
    //             style={{ fontSize: "2rem" }}
    //           ></i>
    //         </div>
    //       </div>
    //     </div>

    //     <div className=" bg-my-gradient rounded-3xl p-3">
    //       <div className="Skills_Container">
    //         <Skills />
    //       </div>

    //       <div className=" flex justify-around w-full text-text-colour font-medium flex-col items-center">
    //         <div className="text-text-colour2">Professional Skills </div>
    //         <div className="text-xl  font-semibold">Skills Overview</div>
    //       </div>
    //     </div>

    //     <div className="bg-my-gradient rounded-3xl p-3 text-text-colour">
    //       {/* Contact */}
    //       <div className="flex flex-col gap-3">
    //         <div className="flex justify-evenly text-4xl">
    //           <a
    //             href="mailto:jeremyzhaoxl@gmail.com"
    //             target="blank"
    //             className=" w-16 h-16 bg-bg-colour rounded-full flex justify-center items-center"
    //           >
    //             <i className="bi bi-envelope-at"></i>
    //           </a>
    //           <a
    //             href="https://www.linkedin.com/in/zhao-xinlei-80875b211/"
    //             target="blank"
    //             className=" w-16 h-16 bg-bg-colour rounded-full flex justify-center items-center"
    //           >
    //             <i className="bi bi-linkedin"></i>
    //           </a>

    //           <a
    //             href="https://github.com/Jerxl"
    //             target="blank"
    //             className=" w-16 h-16 bg-bg-colour rounded-full flex justify-center items-center"
    //           >
    //             <i className="bi bi-github"></i>
    //           </a>
    //           <a
    //             href=""
    //             className=" w-16 h-16 bg-bg-colour rounded-full flex justify-center items-center"
    //           >
    //             <i className="bi bi-instagram" target="blank"></i>
    //           </a>
    //         </div>

    //         <div className="flex justify-around w-full text-text-colour font-medium">
    //           <div>
    //             <div className="text-text-colour2">Channles</div>
    //             <div className="text-xl  font-semibold">Contact Me</div>
    //           </div>
    //           <div>
    //             <i
    //               className="bi bi-arrow-right-circle"
    //               style={{ fontSize: "2rem" }}
    //             ></i>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* // In your React component file */}
    //   <div className=" flex flex-col p-3 gap-3">
    //     <div className="flex flex-col text-text-colour gap-3 md:flex-row">
    //       <div className=" bg-my-gradient rounded-3xl p-3 flex-1">
    //         <NavLink to="/credentials#Achievements">
    //           <div className="flex items-center justify-center gap-4 pl-3 md:flex-col md:pl-0">
    //             <div className=" text-5xl">
    //               <i className="bi bi-award icon"></i>
    //             </div>

    //             <div className="text-xl  font-semibold">ACHIVEMENTS</div>
    //           </div>
    //         </NavLink>
    //       </div>
    //       <div className=" bg-my-gradient rounded-3xl p-3 flex-1">
    //         <NavLink to="/credentials#Educations">
    //           <div className="flex items-center justify-center gap-4 md:flex-col">
    //             <div className="text-5xl">
    //               <i className="bi bi-book icon"></i>
    //             </div>

    //             <div className="text-xl  font-semibold">EDUCATIONS</div>
    //           </div>
    //         </NavLink>
    //       </div>
    //       <div className=" bg-my-gradient rounded-3xl p-3 flex-1">
    //         <NavLink to="/credentials#Experience">
    //           <div className="flex items-center justify-center gap-4 pl-12 md:flex-col md:pl-0">
    //             <div className="text-5xl">
    //               <i className="bi bi-buildings icon"></i>
    //             </div>

    //             <div className="text-xl  font-semibold">WORK EXPERIENCE</div>
    //           </div>
    //         </NavLink>
    //       </div>
    //     </div>

    //     <div className="bg-my-gradient rounded-3xl p-3 text-text-colour flex justify-around text-2xl  font-semibold">
    //       <span>Let's work together.</span>
    //       <i className="bi bi-arrow-right-circle-fill"></i>
    //     </div>
    //   </div>
    // </div>
  );
}

export default home;
