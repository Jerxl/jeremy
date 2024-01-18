import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";
import Slider from "react-slick";
import "./Modal.css";

const Modal = ({ work, closeModal }) => {
  const [animationClass, setAnimationClass] = useState("modal-zoom-in");

  if (!work) return null;

  useEffect(() => {
    // When the modal is closing, change the animation
    const handleAnimationEnd = () => {
      if (animationClass === "modal-zoom-out") {
        closeModal();
      }
    };

    return () => {
      document.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [animationClass, closeModal]);

  const handleClose = () => {
    setAnimationClass("modal-zoom-out");
  };

  // Convert Markdown content to HTML
  const markdownToHtml = (markdownContent) => {
    return marked(markdownContent);
  };

  // Function to safely set inner HTML
  const createMarkup = (htmlContent) => {
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Inside your Modal component
  useEffect(() => {
    const handleAnimationEnd = () => {
      if (animationClass === "modal-zoom-out") {
        // Trigger the actual close function passed from the parent
        closeModal();
      }
    };

    document.addEventListener("animationend", handleAnimationEnd);

    return () => {
      document.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [animationClass, closeModal]);

  return (
    <div className={`modal-container ${animationClass}`} onClick={handleClose}>
      <div
        className="modal-content rounded-3xl "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-bg"></div>
        <div className="modal-header">
          <h2>{work.fields["Project Name"]}</h2>
          <button
            className={`modal-close-btn ${animationClass}`}
            onClick={handleClose}
          >
            <i className="bi bi-x-circle text-3xl text-text-colour2 hover:text-text-colour "></i>
          </button>
        </div>

        <div className="modal-body scroll-y">
          {/* Carousel for Cover Images */}
          {work.fields.ImageDataUrls && work.fields.ImageDataUrls.length > 1 ? (
            <Slider {...settings}>
              {work.fields.ImageDataUrls.map((imageDataUrl, index) => (
                <div key={index}>
                  <img
                    src={imageDataUrl || profileimg}
                    alt={`Cover ${index}`}
                    className="modal-image"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <img
              src={
                work.fields.ImageDataUrls &&
                work.fields.ImageDataUrls.length > 0
                  ? work.fields.ImageDataUrls[0]
                  : profileimg
              }
              alt={work.fields["Project Name"]}
              className="modal-image"
            />
          )}

          {/* Rest of the modal content */}
          {/* ... */}
          <div className="modal-body">
            <div
              className="modal-description"
              dangerouslySetInnerHTML={createMarkup(
                markdownToHtml(work.fields["Introduction"])
              )}
            ></div>
            <div
              className="modal-markdown"
              dangerouslySetInnerHTML={createMarkup(
                markdownToHtml(work.fields["Content"])
              )}
            ></div>

            <div className="modal-skills">
              {work.fields["Skills Applied"].map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
