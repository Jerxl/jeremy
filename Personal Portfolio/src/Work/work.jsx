import { useEffect, useState } from "react";
import Modal from "./Modal"; // Import a Modal component
import profileimg from "../assets/Personal_img.png";

function Work() {
  const [works, setWorks] = useState([]);
  const [selectedWork, setSelectedWork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(import.meta.env.VITE_AIRTABLE_API);
  useEffect(() => {
    // Check if the works data is in session storage
    const cachedWorks = sessionStorage.getItem("worksData");
    if (cachedWorks) {
      // If data is cached, use it
      setWorks(JSON.parse(cachedWorks));
    } else {
      // If not, fetch data from the API
      fetch("https://api.airtable.com/v0/appcrSl7Zgy2SpKCZ/tblwm7dsYEfwofGU6", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API}`, // Replace with your actual API key
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const publishedWorks = data.records.filter(
            (record) => record.fields["Status"] === "Publish"
          );
          // Update the state with the fetched data
          setWorks(publishedWorks);
          // Cache the data in session storage
          sessionStorage.setItem("worksData", JSON.stringify(publishedWorks));
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, []);

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
                    work.fields["Cover Image"] &&
                    work.fields["Cover Image"].length > 0
                      ? work.fields["Cover Image"][0].url
                      : profileimg
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
