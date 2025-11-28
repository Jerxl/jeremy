import React from "react";
import Deco1 from "../assets/Deco1.png";
import { useState } from "react";

function Contact_Me() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Check for errors
    let newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!subject.trim()) newErrors.subject = "Subject is required";
    if (!message.trim()) newErrors.message = "Message is required";

    // Update errors state
    setErrors(newErrors);

    // If no errors, process form submission (e.g., send data to API)
    if (Object.keys(newErrors).length === 0) {
      // Set the submission state to true
      setIsSubmitted(true);
      // Add your form submission logic here
      fetch("https://api.airtable.com/v0/appcrSl7Zgy2SpKCZ/tblWgcWJHYfu90s1d", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API}`, // Be sure to replace with your actual API key
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                "Full Name": name,
                "Email Address": email,
                Subject: subject,
                Message: message,
              },
            },
          ],
          typecast: true,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to send message");
          }
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setErrors({ submit: "Failed to send message. Please try again." });
          setIsSubmitted(false);
        });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // Optionally, reset the submission state after a delay
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div
      className=" container min-h-[80vh] mb-10 md:mt-40 float-up"
      role="main"
    >
      <div className="flex  text-text-colour justify-center gap-10 flex-col md:flex-row items-center md:items-start">
        {/* Left Contact Info */}
        <aside className="flex-2" aria-label="Contact information">
          <h2 className=" text-2xl font-semibold">CONTACT INFO</h2>
          <div className="flex gap-3 items-center mt-3 ">
            {/* Mail */}
            <div className=" bg-bg-colour2 p-2.5 rounded-md" aria-hidden="true">
              <i className="bi bi-envelope text-3xl "></i>
            </div>
            <div>
              <h3 className="text-text-colour2  font-semibold">EMAIL</h3>
              <a
                href="mailto:Jeremy.zhaoxl@gmail.com"
                className="font-medium hover:underline"
              >
                Jeremy.zhaoxl@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-3 ">
            {/* Contact US */}
            <div className=" bg-bg-colour2 p-2.5 rounded-md" aria-hidden="true">
              <i className="bi bi-telephone text-3xl"></i>
            </div>
            <div>
              <h3 className="text-text-colour2  font-semibold">CONTACT ME</h3>
              <p className="font-medium">+65 ••••••••</p>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-3 ">
            {/* Location */}
            <div className=" bg-bg-colour2 p-2.5 rounded-md" aria-hidden="true">
              <i className="bi bi-geo-alt text-3xl"></i>
            </div>
            <div>
              <h3 className="text-text-colour2  font-semibold">LOCATION</h3>
              <p className="font-medium">Singapore</p>
            </div>
          </div>
        </aside>
        {/* Right Contact Form */}
        <section
          className=" bg-my-gradient flex-1 p-10 md:p-16 rounded-3xl relative max-w-[900px]"
          aria-labelledby="contact-form-heading"
        >
          <div>
            <h2
              id="contact-form-heading"
              className=" font-semibold text-4xl mb-4"
            >
              Lets Work
              <span className=" text-blue-600"> Together</span>
              <img
                src={Deco1}
                alt=""
                aria-hidden="true"
                className="mb-4 w-5 md:w-10 float-right absolute right-16 top-0 hidden md:block"
              />
            </h2>

            <form onSubmit={handleSubmit} aria-label="Contact form">
              <div className="mb-3">
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control bg-bg-colour border-none text-white focus:border-none focus:outline-none focus:bg-bg-colour focus:ring-0 placeholder-text-colour2 h-12  "
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="text-red-500" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control bg-bg-colour border-none text-white focus:border-none focus:outline-none focus:bg-bg-colour focus:ring-0 placeholder-text-colour2 h-12  "
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="text-red-500" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control bg-bg-colour border-none text-white focus:border-none focus:outline-none focus:bg-bg-colour focus:ring-0 placeholder-text-colour2 h-12  "
                  id="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  aria-required="true"
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                />
                {errors.subject && (
                  <span
                    id="subject-error"
                    className="text-red-500"
                    role="alert"
                  >
                    {errors.subject}
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  className="form-control bg-bg-colour border-none text-white focus:border-none focus:outline-none focus:bg-bg-colour focus:ring-0 placeholder-text-colour2"
                  id="message"
                  rows="3"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                ></textarea>
                {errors.message && (
                  <span
                    id="message-error"
                    className="text-red-500"
                    role="alert"
                  >
                    {errors.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary bg-bg-colour2 border-none hover:bg-bg-colour pl-6 pr-6"
                aria-label="Submit contact form"
              >
                Submit
              </button>
              {isSubmitted && (
                <div
                  className="text-green-500 mt-3 flex items-center"
                  role="status"
                  aria-live="polite"
                >
                  <i
                    className="bi bi-check-circle-fill mr-2 text-2xl"
                    aria-hidden="true"
                  ></i>
                  Message submitted successfully!
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact_Me;
