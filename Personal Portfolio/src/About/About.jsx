import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import profileimg from "../assets/Personal_img.png";
import { useEffect } from "react";
import Skill from "../Skills/About_Skills.jsx";
import SocialLinks from "../components/SocialLinks.jsx";

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
      <aside className=" bg-my-gradient rounded-2xl p-3 flex flex-col md:h-[550px] md:w-[500px] md:sticky md:top-0" role="complementary" aria-label="Profile sidebar">
        <div className=" flex flex-col items-center mb-3 mt-3">
          <img 
            src={profileimg} 
            alt="Jeremy Zhao (Zhao Xinlei) - Professional headshot" 
            className=" w-96 rounded-3xl md:w-72" 
          />
          <h2 className=" text-3xl font-semibold text-text-colour mt-2">
            Zhao Xinlei
          </h2>
        </div>

        <div className="pt-2 pb-2">
          <SocialLinks variant="compact" />
        </div>
        <NavLink 
          to="/contact" 
          className="center_item bg-bg-colour m-4 p-2 rounded-3xl text-xl hover:bg-bg-colour-hover hover:transition"
          aria-label="Go to contact page"
        >
          <span className="text-text-colour font-semibold">Contact Me</span>
        </NavLink>
      </aside>
      <div className="text-text-colour flex flex-col gap-20 mt-4 md:mt-0 w-[100%]" role="main">
        <section className="About_Me" aria-labelledby="about-heading">
          <h2 id="about-heading" className=" text-xl font-semibold mb-2 md:text-2xl">ABOUT ME</h2>
          <p className="mb-2 font-medium">
            Hello, I'm Zhao Xinlei, a graduate of Republic Polytechnic with a deep passion for technology and innovation. My journey in engineering is driven by a love for learning and problem-solving, where I eagerly embrace advancements in technology to contribute meaningfully to the field.
          </p>

          <p className="font-medium">
            My academic and professional experiences have strengthened my skills in proactive problem-solving and teamwork. I approach challenges with a positive mindset and a strong sensitivity to team dynamics, fostering effective collaboration even in complex situations. These abilities were honed through active participation in prestigious competitions such as the SUTD 3D Printing Design Innovation Challenge, NUS MIEC2022, and the National IIOT Competition 2023, where I delivered innovative solutions to address emerging challenges. I am excited to bring my enthusiasm, creativity, and collaborative spirit to the professional world, striving to grow and make a meaningful impact in the field of engineering and technology.
          </p>
        </section>
        <section className="About_Educations" id="Educations" aria-labelledby="education-heading">
          <h2 id="education-heading" className="text-xl font-semibold mb-2 md:text-2xl">EDUCATION</h2>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-text-colour2 mb-0.5 font-medium">
                2021 - 2024
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
        </section>
        <section className="Experience" id="Experience" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="text-xl font-semibold mb-2 md:text-2xl">EXPERIENCE</h2>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-lg font-medium mb-0.5  text-[#5b78f6]">
                Automaton Engineer
              </h2>
              <p className="text-text-colour2 mb-0.5 font-medium">Stellar</p>
              <p className="font-medium">
                At Stellar, renowned for its meticulous process-driven ethos, I
                embraced the art of efficiency within a vibrant and structured
                work culture. My tenure as an Automation Engineer Intern was
                marked by a rigorous documentation standard that cultivated my
                process-oriented mindset and analytical skills. Key
                accomplishments and learning experiences include:
              </p>
              <ul className="list-none ml-5 mb-4 mt-3 space-y-3">
                <li>
                  <strong>Process Optimization:</strong> Mastered the skill of
                  deconstructing complex tasks into manageable subtasks, laying
                  the groundwork for potential automation, which led to a
                  reduction in process time.
                </li>
                <li>
                  <strong>Automation Projects:</strong> Participated in the
                  end-to-end development of automation systems aimed at
                  enhancing operational efficiency. Contributed to several
                  projects that resulted in reducing manual intervention by{" "}
                  <strong>60%</strong>.
                </li>
                <li>
                  <strong>Machine Learning:</strong> Acquired practical
                  experience in machine learning, specifically in fine-tuning
                  models to assist customers with corporate compliance issues.
                  This work provided valuable insights that contributed to
                  shaping business strategies
                </li>
                <li>
                  <strong>Data Management:</strong> Developed proficiency in
                  data scraping, alongside advanced techniques in data filtering
                  and cleaning, ensuring high-quality data for analysis and
                  decision-making processes.
                </li>
                <li>
                  <strong>Collaborative Development:</strong> Worked
                  collaboratively with cross-functional teams to identify
                  automation opportunities, resulting in the seamless
                  integration of automated solutions into existing workflows.
                </li>
              </ul>
              <p className="font-medium">
                This experience fortified my technical foundation and honed my
                ability to innovate and execute within a forward-thinking
                organization that values precision, efficiency, and the
                transformative power of automation technology.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-0.5 text-[#5b78f6]">
                Intern - Automation Engineer
              </h2>
              <p className="text-text-colour2 mb-0.5 font-medium">Starboard</p>
              <p className="font-medium">
                In my role as an Automation Engineer Intern at Starboard, I
                specialized in leveraging cutting-edge automation tools to
                streamline and optimize business processes. Key aspects of my
                role included:
              </p>
              <ul className="list-none ml-5 mb-4 mt-3 space-y-3">
                <li>
                  <strong>Process Automation Expertise:</strong> Proficiently
                  utilized UiPath, a leading robotic process automation (RPA)
                  tool, to automate repetitive and time-consuming tasks. This
                  significantly improved operational efficiency by reducing
                  manual effort and error rates.
                </li>
                <li>
                  <strong>Workflow Optimization with Zapier:</strong> Skilled in
                  integrating various applications and services using Zapier.
                  This enabled seamless workflow automation between different
                  business tools, enhancing overall productivity and data
                  consistency.
                </li>
                <li>
                  <strong>Strategic Process Improvement:</strong> Collaborated
                  with cross-functional teams to identify and target key areas
                  for process optimization. My efforts led to more streamlined
                  operations, with noticeable improvements in speed and quality
                  of output.
                </li>
                <li>
                  <strong>Innovation and Problem-Solving:</strong> Continuously
                  sought innovative solutions to complex challenges,
                  demonstrating strong problem-solving skills. My contributions
                  were instrumental in enhancing the automation strategy at
                  Starboard, leading to more agile and efficient business
                  processes.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-0.5 text-[#5b78f6]">
                Intern - Human Resources
              </h2>
              <p className="text-text-colour2 mb-0.5 font-medium">ARYZTA</p>
              <p className="font-medium">
                As an HR Intern at ARYZTA, a leader in the food and bakery
                industry, I had the valuable opportunity to develop key skills
                in communication and gain insights into the intricacies of
                business operations. My role encompassed:
              </p>
              <ul className="list-none ml-5 mb-4 mt-3 space-y-3">
                <li>
                  <strong>Effective Communication:</strong> Honed my
                  communication skills by interacting with employees across
                  various departments. This experience taught me the importance
                  of clear, empathetic, and effective communication in
                  maintaining a positive and productive work environment.
                </li>
                <li>
                  <strong>Business Operations Insight:</strong> Gained a
                  comprehensive overview of business operations at ARYZTA. This
                  included understanding the integral role of human resources in
                  aligning employee goals with business objectives, managing
                  workforce dynamics, and contributing to overall operational
                  efficiency.
                </li>
                <li>
                  <strong>Collaborative Learning:</strong> Worked closely with
                  experienced HR professionals and business managers, which
                  allowed me to observe and learn about strategic
                  decision-making processes, employee relations, and the
                  implementation of HR policies.
                </li>
                <li>
                  <strong>Skills Development:</strong> This role was
                  instrumental in developing my interpersonal and organizational
                  skills. I learned to navigate complex workplace dynamics,
                  adapt to diverse professional settings, and contribute
                  effectively to team objectives.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="Skills" id="Skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-xl font-semibold mb-2 md:text-2xl">SKILLS</h2>
          <p>
            A versatile and strategic thinker equipped with a diverse range of
            skills tailored for excellence in the digital era. My expertise
            includes:
          </p>
          {<Skill />}
        </section>
        <section className="About_Achievements" id="Achievements" aria-labelledby="achievements-heading">
          <h2 id="achievements-heading" className="text-xl font-semibold mb-2 md:text-2xl">
            ACHIEVEMENTS
          </h2>
          <div className="flex flex-col gap-3">
            <div>
              <h3 className=" text-lg font-medium mb-0.5 text-[#5b78f6]">
                UiPath Student Developer Champion
              </h3>
              <p className=" font-medium">
                In 2023, I was honored with the UiPath Student Developer
                Champion title, a recognition of my advanced expertise in
                robotic process automation (RPA) using UiPath. A significant
                aspect of my achievement was my dedication to peer learning and
                leadership within the UiPath community. I actively engaged in
                sharing my knowledge and expertise, guiding fellow peers, and
                participating in various collaborative projects. This experience
                not only allowed me to contribute to the community but also to
                grow as a leader in the field of automation technology.
              </p>
            </div>
            <div>
              <h3 className=" text-lg font-medium mb-0.5 text-[#5b78f6]">
                National IIOT Competition 2023
              </h3>
              <p className=" font-medium">
                In 2023, I participated in the National IIOT Competition
                focusing on Smart Farming, an esteemed event encouraging
                innovation in automation, precision agriculture, and smart
                irrigation among students. Our team engaged in rigorous
                preparation, including a workshop on IIoT technologies, Arduino,
                and MIT Inventor software. Our efforts culminated in us winning
                the 1st runner-up position, securing 2nd place in the
                competition held at Republic Polytechnic. This achievement not
                only honed our technical skills but also demonstrated our
                ability to collaborate effectively and innovate in the realm of
                Smart Farming.
              </p>
            </div>
            <div>
              <h3 className=" text-lg font-medium mb-0.5 text-[#5b78f6]">
                NUS MIEC 2022
              </h3>
              <p className=" font-medium">
                In the 2022 NUS Materials Innovation and Engineering Challenge,
                focused on 3D printing in Material Science and Engineering, our
                team "Chicken Little" represented Republic Polytechnic and
                secured the position of 2nd Runner Up. Tasked with designing a
                glider for egg transportation, our innovative approach and
                application of 3D printing and engineering principles led us to
                this notable achievement in a competition that evaluated both
                the distance covered and the egg's safety.
              </p>
            </div>
          </div>
        </section>
        <section className="About_Testimonials" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="text-xl font-semibold mb-2 md:text-2xl">
            Testimonials
          </h2>
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-lg font-medium mb-0.5  text-[#5b78f6]">
                Ling Siew Hui
              </h2>
              <p className="text-text-colour2 mb-0.5 font-medium">
                Republic Polytechnic | Assistant Programme Chair (DIOM)
              </p>
              <p className="font-medium">
                I highly recommend Zhao Xinlei, who excelled in my Operations
                Planning class at Republic Polytechnic, earning a Distinction.
                Over two years, he demonstrated exceptional leadership,
                problem-solving skills, and teamwork, notably in various
                competitions like the SUTD 3D Printing Design Innovation
                Challenge. His proactive attitude and innovative approach make
                him an excellent candidate for any academic or professional
                opportunity.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
