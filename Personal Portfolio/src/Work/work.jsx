import React, { useContext, useState, useEffect } from "react";
import Modal from "./Modal"; // Import a Modal component
import profileimg from "../assets/Personal_img.png";
import WorksContext from "./WorksContext.jsx";

function Work() {
  const { works, setWorks, isLoading, error } = useContext(WorksContext);
  const [selectedWork, setSelectedWork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);

  const openModal = (work) => {
    setSelectedWork(work);
    setClosingAnimation(false);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling on body
  };

  const closeModal = () => {
    setClosingAnimation(true);
    document.body.style.overflow = "auto"; // Re-enable scrolling on body
    setIsModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="container text-text-colour min-h-screen float-up">
        <div className="flex flex-col justify-center items-center min-h-[60vh]">
          <div className="text-2xl font-semibold mb-4">Loading projects...</div>
          <div className="text-text-colour2">Please wait while we fetch your projects</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-text-colour min-h-screen float-up">
        <div className="flex flex-col justify-center items-center min-h-[60vh]">
          <div className="text-2xl font-semibold mb-4 text-red-500">Error Loading Projects</div>
          <div className="text-text-colour2">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container text-text-colour min-h-screen float-up" role="main">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">
            ✨ALL PROJECTS✨
          </h1>
          <div className="flex flex-wrap gap-4 justify-center" role="list">
            {works.map((work) => (
              <article
                key={work.id}
                role="listitem"
                className="bg-my-gradient w-[350px] min-h-[400px] p-3 rounded-3xl flex flex-col items-center gap-3 hover:cursor-pointer hover:animate-slide-top group"
                onClick={() => openModal(work)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openModal(work);
                  }
                }}
                tabIndex={0}
                aria-label={`View details for ${work.fields["Project Name"]}`}
              >
                <div className="w-[300px] h-[300px] rounded-3xl">
                  <img
                    src={
                      work.fields.ImageDataUrls &&
                      work.fields.ImageDataUrls.length > 0
                        ? work.fields.ImageDataUrls[0]
                        : profileimg // Fallback image if ImageDataUrls is not available or empty
                    }
                    alt={`${work.fields["Project Name"]} project thumbnail`}
                    className="rounded-3xl w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between w-[90%] items-center">
                  <div>
                    <h2 className="text-2xl font-semibold">
                      {work.fields["Project Name"]}
                    </h2>
                    <div className="text-text-colour2 flex gap-2 flex-wrap" role="list" aria-label="Skills used">
                      {work.fields["Skills Applied"]
                        .slice(0, 3)
                        .map((skill, index) => (
                          <span
                            key={index}
                            role="listitem"
                            className="bg-bg-colour pl-2 pr-2 rounded-xl text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      {work.fields["Skills Applied"].length > 3 && (
                        <span 
                          className="bg-bg-colour pl-2 pr-2 rounded-xl text-sm"
                          aria-label={`and ${work.fields["Skills Applied"].length - 3} more skills`}
                        >
                          ...
                        </span>
                      )}
                    </div>
                  </div>
                  <i
                    className="bi bi-arrow-right-circle text-bg-colour-hover group-hover:text-text-colour"
                    style={{ fontSize: "2rem" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {/* Conditional rendering of Modal */}
      {isModalOpen && (
        <div className="modal-overlay text-text-colour">
          <Modal work={selectedWork} closeModal={closeModal} />
        </div>
      )}
    </>
  );
}

export default Work;
