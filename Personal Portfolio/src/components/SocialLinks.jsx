import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

/**
 * Reusable Social Media Links Component
 * @param {string} variant - "default" | "compact" | "large"
 * @param {string} layout - "horizontal" | "vertical"
 * @param {boolean} showLabels - Whether to show labels below icons
 */
function SocialLinks({
  variant = "default",
  layout = "horizontal",
  showLabels = false,
  className = "",
}) {
  const socialMediaLinks = [
    {
      name: "Email",
      url: "mailto:jeremyzhaoxl@gmail.com",
      icon: "bi-envelope-at",
      ariaLabel: "Send email to Jeremy Zhao",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zhao-xinlei-80875b211/",
      icon: "bi-linkedin",
      ariaLabel: "Visit Jeremy Zhao's LinkedIn profile",
    },
    {
      name: "GitHub",
      url: "https://github.com/Jerxl",
      icon: "bi-github",
      ariaLabel: "Visit Jeremy Zhao's GitHub profile",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/xinleiz/",
      icon: "bi-instagram",
      ariaLabel: "Visit Jeremy Zhao's Instagram profile",
    },
  ];

  // Define size classes based on variant
  const sizeClasses = {
    compact: "p-2 text-4xl",
    default: "p-3 text-5xl",
    large: "p-4 text-6xl",
  };

  const iconSize = sizeClasses[variant] || sizeClasses.default;

  // Layout classes
  const layoutClasses =
    layout === "vertical" ? "flex-col" : "flex-row flex-wrap";

  return (
    <div
      className={`flex gap-3 justify-center ${layoutClasses} ${className}`}
      role="list"
      aria-label="Social media links"
    >
      {socialMediaLinks.map((social) => (
        <div key={social.name} role="listitem">
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-bg-colour2 rounded-full ${iconSize} flex items-center justify-center hover:bg-bg-colour hover:-translate-y-2 hover:duration-300 hover:ease-in-out transition-all`}
            aria-label={social.ariaLabel}
            title={social.name}
          >
            <i className={`bi ${social.icon}`}></i>
          </a>
          {showLabels && (
            <p className="text-center text-sm mt-1 text-text-colour2">
              {social.name}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default SocialLinks;

