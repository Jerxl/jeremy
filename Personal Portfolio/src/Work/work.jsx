import React, { useContext, useState, useEffect } from "react";
import Modal from "./Modal"; // Import a Modal component
import profileimg from "../assets/Personal_img.png";
import WorksContext from "./WorksContext.jsx";

function Work() {
  const { works, setWorks } = useContext(WorksContext);
  const [selectedWork, setSelectedWork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container text-text-colour min-h-screen float-up">
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">
          ✨ALL PROJECTS✨
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {works.map((work) => (
            <div
              key={work.id}
              className="bg-my-gradient w-[350px] min-h-[400px] p-3 rounded-3xl flex flex-col items-center gap-3 hover:cursor-pointer hover:animate-slide-top group"
              onClick={() => openModal(work)}
            >
              <div className="w-[300px] h-[300px] rounded-3xl">
                <img
                  src={
                    work.fields.ImageDataUrls &&
                    work.fields.ImageDataUrls.length > 0
                      ? work.fields.ImageDataUrls[0]
                      : profileimg // Fallback image if ImageDataUrls is not available or empty
                  }
                  alt={work.fields["Project Name"]}
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between w-[90%] items-center">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {work.fields["Project Name"]}
                  </h2>
                  <div className="text-text-colour2 flex gap-2 flex-wrap">
                    {work.fields["Skills Applied"]
                      .slice(0, 3)
                      .map((skill, index) => (
                        <span
                          key={index}
                          className="bg-bg-colour pl-2 pr-2 rounded-xl text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    {work.fields["Skills Applied"].length > 3 && (
                      <span className="bg-bg-colour pl-2 pr-2 rounded-xl text-sm">
                        ...
                      </span>
                    )}
                  </div>
                </div>
                <i
                  className="bi bi-arrow-right-circle text-bg-colour-hover group-hover:text-text-colour"
                  style={{ fontSize: "2rem" }}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Conditional rendering of Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <Modal work={selectedWork} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
}

export default Work;
