// import { React, useEffect, useRef, useState } from "react";
// import "./home.css";
// import profileimg from "../assets/Personal_img.png";
// import Signature from "../assets/signature.png";
// import Portfolio from "../assets/Portfolio.png";
// import CV from "../assets/image-removebg-preview.png";
// import Resume from "../assets/Resume.pdf";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import Typed from "typed.js";
// import Skills from "./Skills.jsx";
// import { NavLink } from "react-router-dom";

// function home() {
//   const el = useRef(null);
//   const [quotes, setQuotes] = useState(["Loading quotes..."]);
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     async function fetchQuotes() {
//       const LINK = `https://api.airtable.com/v0/appXL3iEhr6CYaPow/tblYWdFiNYMekfiNE/`;
//       try {
//         const response = await fetch(LINK, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer patUTdw0o5sbUll6Z.0cadd11aeac24e50341262e4ef524ce9bd05a8d4d48fbcf0731ddce46fb7d163`, // Be sure to replace with your actual API key
//           },
//         });
//         const data = await response.json();
//         const shuffled = data.records.sort(() => 0.5 - Math.random());
//         let selectedQuotes = shuffled
//           .slice(0, 5)
//           .map((record) => record.fields.Quotes);
//         setQuotes(selectedQuotes);
//       } catch (error) {
//         setQuotes(["Error loading quotes..."]);
//       }
//     }

//     fetchQuotes();
//   }, []);

//   useEffect(() => {
//     if (quotes.length > 0) {
//       const typed = new Typed(el.current, {
//         strings: quotes,
//         typeSpeed: 50,
//         fadeOut: true,
//         loop: true,
//         showCursor: false,
//       });

//       return () => {
//         typed.destroy();
//       };
//     }
//   }, [quotes]);

//   // Function to handle CV download
//   const handleDownloadCV = () => {
//     // Create a link and trigger the download
//     const link = document.createElement("a");
//     link.href = Resume;
//     link.download = "Resume.pdf"; // Set the download file name
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="Master_Main float-up">
//       <div className={`Main`}>
//         <div className="Personal_Top">
//           <div className="Intro ">
//             <div className="Profile_Img">
//               <img src={profileimg} alt="" />
//             </div>
//             <div className="Profile_Content ">
//               <p>A Web Developer</p>
//               <p style={{ color: "#d1d1cf", fontSize: "30px" }}>Jeremy Zhao</p>
//               <p>
//                 Engineering student passionate about embracing and advancing
//                 technology, driven by innovation and creative problem-solving.
//               </p>
//             </div>
//           </div>
//           <div className="Intro_Top_left">
//             <div className="Type_js_Intro">
//               <span ref={el}></span>
//             </div>
//             <div className="About_me">
//               <div className="About_MeCard ">
//                 <NavLink to="/credentials#About_Container ">
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <img src={Signature} alt="Signature" />
//                   </div>
//                   <div className="About_MeCard_content">
//                     <div>
//                       <div>More About Me</div>

//                       <div className="Font_Focus">Credentials</div>
//                     </div>
//                     <div>
//                       <i
//                         className="bi bi-arrow-right-circle"
//                         style={{ fontSize: "2rem" }}
//                       ></i>
//                     </div>
//                   </div>
//                 </NavLink>
//               </div>

//               <div className="About_MeCard">
//                 <NavLink to="/Works">
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <img src={Portfolio} alt="Portfolio" />
//                   </div>
//                   <div className="About_MeCard_content">
//                     <div>
//                       <div>Showcase</div>
//                       <div className="Font_Focus">Portfolio</div>
//                     </div>
//                     <div>
//                       <i
//                         className="bi bi-arrow-right-circle"
//                         style={{ fontSize: "2rem" }}
//                       ></i>
//                     </div>
//                   </div>
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Personal_Botm">
//           {/* CV */}
//           <div className="CV_Portfo" onClick={handleDownloadCV}>
//             <div className="CV_Img">
//               <img src={CV} alt="CV" />
//             </div>
//             <div className="CV_Portfo_content">
//               <div>
//                 <div>My cv</div>
//                 <div className="Font_Focus">Download</div>
//               </div>
//               <div>
//                 <i
//                   className="bi bi-arrow-right-circle"
//                   style={{ fontSize: "2rem" }}
//                 ></i>
//               </div>
//             </div>
//           </div>

//           <div className="TopSkills">
//             <div className="Skills_Container">
//               <Skills />
//             </div>
//             <div className="Skills_content">
//               <div>
//                 <div>Professional Skills </div>
//                 <div className="Font_Focus">Skills Overview</div>
//               </div>
//             </div>
//           </div>
//           <div className="CV_Portfo">
//             {/* Contact */}
//             <div>
//               <div className="SocialMedia_Wrap">
//                 <div className="SocialMedia">
//                   <a href="mailto:jeremyzhaoxl@gmail.com" target="blank">
//                     <i className="bi bi-envelope-at"></i>
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/in/zhao-xinlei-80875b211/"
//                     target="blank"
//                   >
//                     <i className="bi bi-linkedin"></i>
//                   </a>

//                   <a href="https://github.com/Jerxl" target="blank">
//                     <i className="bi bi-github"></i>
//                   </a>
//                   <a href="">
//                     <i className="bi bi-instagram" target="blank"></i>
//                   </a>
//                 </div>
//               </div>
//               <div className="CV_Portfo_content">
//                 <div>
//                   <div>Channles</div>
//                   <div className="Font_Focus">Contact Me</div>
//                 </div>
//                 <div>
//                   <i
//                     className="bi bi-arrow-right-circle"
//                     style={{ fontSize: "2rem" }}
//                   ></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* // In your React component file */}
//         <div className="Personal_Experience">
//           <div className="Personal_Exp">
//             <div className="Personal_Exp_Card">
//               <NavLink to="/credentials#Achievements">
//                 <div className=" flex justify-center">
//                   <i className="bi bi-award icon"></i>
//                 </div>

//                 <div>ACHIVEMENTS</div>
//               </NavLink>
//             </div>
//             <div className="Personal_Exp_Card">
//               <NavLink to="/credentials#Educations">
//                 <div className=" flex justify-center">
//                   <i className="bi bi-book icon"></i>
//                 </div>

//                 <div>EDUCATION</div>
//               </NavLink>
//             </div>
//             <div className="Personal_Exp_Card">
//               <NavLink to="/credentials#Experience">
//                 <div className=" flex justify-center">
//                   <i className="bi bi-buildings icon"></i>
//                 </div>

//                 <div>WORK EXPERIENCE</div>
//               </NavLink>
//             </div>
//           </div>

//           <div className="Personal_Exp_CTA w-full justify-center  lg:justify-start">
//             <NavLink to="/contact">
//               <span>Let's work together.</span>
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default home;

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
      const LINK = `https://api.airtable.com/v0/appcrSl7Zgy2SpKCZ/tbldO5btIPv4GKgkB/`;
      try {
        const response = await fetch(LINK, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API}`, // Be sure to replace with your actual API key
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
    <div className=" container float-up text-text-colour box-border min-h-screen">
      {/* Top Container */}
      <div className="flex flex-col gap-3 lg:flex-row w-full">
        <div className="flex flex-col justify-center items-center bg-my-gradient rounded-3xl p-3  md:w-[100%] lg:w-[50%] lg:flex-row lg:gap-4">
          {/* Intro */}
          <div className=" w-64  lg:w-[600px]">
            <img src={profileimg} alt="Profile Image" className="rounded-3xl" />
          </div>
          <div>
            <p className=" text-lg text-text-colour2 font-medium">
              A Web Developer
            </p>

            <p className=" text-2xl font-semibold md:text-3xl">Jeremy Zhao</p>

            <p className=" text-base font-medium ">
              Engineering student passionate about embracing and advancing
              technology, driven by innovation and creative problem-solving.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3  w-[100%]">
          <div className="bg-my-gradient rounded-2xl p-1.5 h-auto min-h-[3rem] w-full">
            {/* Quote */}

            <span ref={el}></span>
          </div>
          <div className="flex gap-3 w-[100%] flex-col md:flex-row">
            {/* About ME */}
            <div className=" bg-my-gradient rounded-3xl p-3 flex-1 group hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out">
              {/* Credentials */}
              <NavLink to="/credentials#About_Container ">
                <div className="flex justify-center lg:min-h-[150px] ">
                  <img src={Signature} alt="Signature" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className=" text-text-colour2 text-base font-medium">
                      More About Me
                    </div>
                    <div className="text-2xl font-semibold">Credentials</div>
                  </div>
                  <div>
                    <i className="bi bi-arrow-right-circle text-text-colour2 text-3xl group-hover:text-text-colour"></i>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className=" bg-my-gradient rounded-3xl p-3  flex-1 group hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out">
              {/* Credentials */}
              <NavLink to="/Works">
                <div className="flex justify-center">
                  <img src={Portfolio} alt="Portfolio" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-text-colour2 text-base font-medium">
                      Showcase
                    </div>
                    <div className="text-2xl font-semibold">Portfolio</div>
                  </div>
                  <div>
                    <i className="bi bi-arrow-right-circle text-text-colour2 text-3xl group-hover:text-text-colour"></i>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Middle Container */}
      <div className="flex flex-col gap-3 lg:flex-row w-full mt-3 ">
        <div className="flex gap-3 flex-1">
          <div
            className="bg-my-gradient rounded-3xl p-3  flex-1 cursor-pointer group hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
            onClick={handleDownloadCV}
          >
            <div className=" w-52 ml-auto mr-auto ">
              <img src={CV} alt="CV" className="" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-text-colour2 text-base font-medium">
                  My cv
                </div>
                <div className="text-2xl font-semibold">Download</div>
              </div>
              <div>
                <i className="bi bi-arrow-right-circle text-text-colour2 text-3xl group-hover:text-text-colour"></i>
              </div>
            </div>
          </div>
          {/* 2nd social */}
          <div className="bg-my-gradient rounded-3xl p-3  flex-1 cursor-pointer hidden md:block lg:hidden group">
            {/* Contact */}

            <div className="flex flex-col">
              <div className="md:flex-wrap md:w-[250px] xl:max-w-[300px] md:gap-14 lg:gap-2.5 flex gap-3 justify-center md:ml-auto md:mr-auto ">
                <a
                  href="mailto:jeremyzhaoxl@gmail.com"
                  target="blank"
                  className=" bg-bg-colour2 rounded-full p-4 flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
                >
                  <i className="bi bi-envelope-at text-5xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/zhao-xinlei-80875b211/"
                  target="blank"
                  className=" bg-bg-colour2 rounded-full p-4  flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
                >
                  <i className="bi bi-linkedin text-5xl"></i>
                </a>

                <a
                  href="https://github.com/Jerxl"
                  target="blank"
                  className=" bg-bg-colour2 rounded-full p-4  flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
                >
                  <i className="bi bi-github text-5xl"></i>
                </a>
                <a
                  href=""
                  className=" bg-bg-colour2 rounded-full p-4  flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
                >
                  <i className="bi bi-instagram text-5xl " target="blank"></i>
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
          </div>
        </div>
        {/* Skills */}
        <div className="bg-my-gradient rounded-3xl p-3  flex-2 cursor-pointer  flex justify-around flex-col overflow-hidden">
          <div className=" max-w-[550px] lg:max-w-[450px] xl:max-w-[650px]  max-h-[200px] w-auto  ml-auto mr-auto">
            <Skills />
          </div>
          <div className="flex justify-between items-center flex-col">
            <div className="text-text-colour2 text-base font-medium">
              Professional Skills
            </div>
            <div className="text-2xl font-semibold">Skills Overview</div>
          </div>
        </div>

        <div className="bg-my-gradient rounded-3xl p-3  flex-1 cursor-pointer md:hidden lg:block group">
          {/* Contact */}

          <div className="flex flex-col ">
            <div className="md:flex-wrap md:w-[250px] xl:max-w-[300px] md:gap-14 lg:gap-2.5 flex gap-3 justify-center ml-auto mr-auto">
              <a
                href="mailto:jeremyzhaoxl@gmail.com"
                target="blank"
                className=" bg-bg-colour2 rounded-full p-3 flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
              >
                <i className="bi bi-envelope-at text-5xl lg:text-6xl "></i>
              </a>
              <a
                href="https://www.linkedin.com/in/zhao-xinlei-80875b211/"
                target="blank"
                className=" bg-bg-colour2 rounded-full p-3 flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
              >
                <i className="bi bi-linkedin text-5xl lg:text-6xl"></i>
              </a>

              <a
                href="https://github.com/Jerxl"
                target="blank"
                className=" bg-bg-colour2 rounded-full p-3 flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
              >
                <i className="bi bi-github text-5xl lg:text-6xl"></i>
              </a>
              <a
                href=""
                className=" bg-bg-colour2 rounded-full p-3 flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out"
              >
                <i
                  className="bi bi-instagram text-5xl lg:text-6xl"
                  target="blank"
                ></i>
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
        </div>
      </div>
      {/* Bottom Container */}
      <div className="flex flex-col gap-3 lg:flex-row w-full mt-3 ">
        <div className="flex flex-col gap-3 md:flex-row lg:w-2/3">
          <div className="bg-my-gradient rounded-3xl p-3  flex-1 hover:-translate-y-2 hover:duration-100 hover:ease-in-out">
            <NavLink to="/credentials#Achievements">
              <div className="flex justify-center items-center md:flex-col md:gap-1.5 ">
                <div className=" flex justify-center">
                  <i className="bi bi-award icon text-5xl "></i>
                </div>

                <div className="text-2xl font-semibold">ACHIVEMENTS</div>
              </div>
            </NavLink>
          </div>
          <div className="bg-my-gradient rounded-3xl p-3  flex-1 hover:-translate-y-2 hover:duration-100 hover:ease-in-out">
            <NavLink to="/credentials#Educations">
              <div className="flex justify-center items-center gap-2 md:flex-col">
                <div className=" flex justify-center">
                  <i className="bi bi-book icon text-5xl"></i>
                </div>

                <div className="text-2xl font-semibold">EDUCATION</div>
              </div>
            </NavLink>
          </div>
          <div className="bg-my-gradient rounded-3xl p-3  flex-1 basis-1 hover:-translate-y-2 hover:duration-100 hover:ease-in-out">
            <NavLink to="/credentials#Experience">
              <div className="flex justify-center items-center gap-2 md:flex-col">
                <div className=" flex justify-center">
                  <i className="bi bi-buildings icon text-5xl"></i>
                </div>

                <div className="text-2xl font-semibold ">EXPERIENCE</div>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="bg-my-gradient rounded-3xl p-3  flex-1">
          <NavLink to="/contact">
            <span className="text-2xl font-semibold">Let's work together.</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default home;
