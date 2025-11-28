import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";
import Slider from "react-slick";
import profileimg from "../assets/Personal_img.png";
import "./Modal.css";

const Modal = ({ work, closeModal }) => {
  const [animationClass, setAnimationClass] = useState("modal-zoom-in");
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  if (!work) return null;

  // Get all available images/media
  const allImages =
    work.fields.ImageDataUrls && work.fields.ImageDataUrls.length > 0
      ? work.fields.ImageDataUrls
      : [profileimg];

  // Helper function to detect media type
  const getMediaType = (url) => {
    if (!url || url === profileimg) return "image";

    const extension = url.split(".").pop().toLowerCase().split("?")[0];

    if (["mp4", "webm", "ogg", "mov"].includes(extension)) {
      return "video";
    } else if (["gif"].includes(extension)) {
      return "gif";
    } else {
      return "image";
    }
  };

  // Render media based on type
  const renderMedia = (mediaUrl, alt, className, onClick, index = null) => {
    const mediaType = getMediaType(mediaUrl);
    const key = index !== null ? index : "single";

    if (mediaType === "video") {
      return (
        <video
          key={key}
          src={mediaUrl}
          className={className}
          controls
          onClick={onClick}
          style={{ cursor: "pointer" }}
          title="Click to enlarge"
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      );
    } else {
      // Both images and GIFs use img tag
      return (
        <img
          key={key}
          src={mediaUrl}
          alt={alt}
          className={className}
          onClick={onClick}
          style={{ cursor: "pointer" }}
          title={
            mediaType === "gif"
              ? "Click to enlarge (GIF)"
              : "Click to enlarge (use arrow keys to navigate)"
          }
        />
      );
    }
  };

  const handleClose = () => {
    setAnimationClass("modal-zoom-out");
  };

  const handleImageClick = (imageUrl, index = 0) => {
    setZoomedImage(imageUrl);
    setCurrentImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeZoom = (e) => {
    if (e) {
      e.stopPropagation(); // Prevent event from bubbling to modal close
    }
    setZoomedImage(null);
    document.body.style.overflow = "hidden"; // Keep modal scroll disabled
  };

  const navigateImage = (direction) => {
    if (allImages.length <= 1) return;

    let newIndex;
    if (direction === "next") {
      newIndex = (currentImageIndex + 1) % allImages.length;
    } else {
      newIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    }

    setCurrentImageIndex(newIndex);
    setZoomedImage(allImages[newIndex]);
  };

  // Touch handlers for swipe navigation in lightbox
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && allImages.length > 1) {
      navigateImage("next");
    }
    if (isRightSwipe && allImages.length > 1) {
      navigateImage("prev");
    }
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

  // Handle modal close animation
  useEffect(() => {
    const handleAnimationEnd = () => {
      if (animationClass === "modal-zoom-out") {
        closeModal();
      }
    };

    document.addEventListener("animationend", handleAnimationEnd);

    return () => {
      document.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [animationClass, closeModal]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (!zoomedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateImage("next");
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeZoom();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomedImage, currentImageIndex, allImages]);

  return (
    <div
      className={`modal-container ${animationClass}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content rounded-3xl "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-wrapper">
          <div className="modal-header">
            <h2 id="modal-title">{work.fields["Project Name"]}</h2>
            <button
              className={`modal-close-btn ${animationClass}`}
              onClick={handleClose}
              aria-label="Close project details modal"
            >
              <i
                className="bi bi-x-circle text-3xl text-text-colour2 hover:text-text-colour "
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>

        <div className="modal-body scroll-y">
          {/* Carousel for Cover Images */}
          {work.fields.ImageDataUrls && work.fields.ImageDataUrls.length > 1 ? (
            <Slider {...settings}>
              {work.fields.ImageDataUrls.map((mediaUrl, index) => (
                <div key={index}>
                  {renderMedia(
                    mediaUrl || profileimg,
                    `Cover ${index + 1}`,
                    "modal-image clickable-image",
                    () => handleImageClick(mediaUrl || profileimg, index),
                    index
                  )}
                </div>
              ))}
            </Slider>
          ) : (
            renderMedia(
              work.fields.ImageDataUrls && work.fields.ImageDataUrls.length > 0
                ? work.fields.ImageDataUrls[0]
                : profileimg,
              work.fields["Project Name"],
              "modal-image clickable-image",
              () =>
                handleImageClick(
                  work.fields.ImageDataUrls &&
                    work.fields.ImageDataUrls.length > 0
                    ? work.fields.ImageDataUrls[0]
                    : profileimg,
                  0
                )
            )
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

            <div
              className="modal-skills"
              role="list"
              aria-label="Technologies and skills used in this project"
            >
              {work.fields["Skills Applied"].map((skill, index) => (
                <span key={index} className="skill-tag" role="listitem">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Zoom/Lightbox */}
      {zoomedImage && (
        <div
          className="image-lightbox"
          onClick={(e) => {
            e.stopPropagation();
            closeZoom(e);
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image view"
        >
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeZoom(e);
            }}
            aria-label="Close enlarged image"
          >
            <i className="bi bi-x-circle-fill"></i>
          </button>

          {/* Navigation arrows - only show if multiple images */}
          {allImages.length > 1 && (
            <>
              <button
                className="lightbox-nav lightbox-nav-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                aria-label="Previous image"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="lightbox-nav lightbox-nav-next"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                aria-label="Next image"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </>
          )}

          {/* Render zoomed media */}
          {getMediaType(zoomedImage) === "video" ? (
            <video
              src={zoomedImage}
              className="lightbox-image"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={zoomedImage}
              alt={`Enlarged view - ${getMediaType(
                zoomedImage
              ).toUpperCase()} ${currentImageIndex + 1} of ${allImages.length}`}
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {/* Image counter */}
          {allImages.length > 1 && (
            <div className="lightbox-counter">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          )}

          <p className="lightbox-hint">
            {allImages.length > 1
              ? "Use arrow keys to navigate • Click outside to close"
              : "Click outside to close"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Modal;
