import React from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";
import "./Modal.css";

const Modal = ({ work, closeModal }) => {
  if (!work) return null;

  // Convert Markdown content to HTML
  const markdownToHtml = (markdownContent) => {
    return marked(markdownContent);
  };

  // Function to safely set inner HTML
  const createMarkup = (htmlContent) => {
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

  return (
    <div className="modal-container" onClick={closeModal}>
      <div
        className="modal-content bg-slate-800 rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="Modal-Header">
          <h2 className="modal-title">{work.fields["Project Name"]}</h2>
          <button className="modal-close-btn" onClick={closeModal}>
            <i className="bi bi-x-lg text-3xl"></i>
          </button>
        </div>

        <img
          src={
            work.fields["Cover Image"]
              ? work.fields["Cover Image"][0].url
              : "defaultImagePath.jpg"
          }
          alt={work.fields["Project Name"]}
          className="modal-image"
        />

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
  );
};

export default Modal;
