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
      console.log("Form data:", { name, email, subject, message });
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
      }).then(console.log("Message Posted"));
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // Optionally, reset the submission state after a delay
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className=" container min-h-[80vh] mb-10 md:mt-40 float-up">
      <div className="flex  text-text-colour justify-center gap-10 flex-col md:flex-row items-center md:items-start">
        {/* Left Contact Info */}
        <div className="flex-2">
          <h2 className=" text-2xl font-semibold">CONTACT INFO</h2>
          <div className="flex gap-3 items-center mt-3 ">
            {/* Mail */}
            <div className=" bg-bg-colour2 p-2.5 rounded-md">
              <i className="bi bi-envelope text-3xl "></i>
            </div>
            <div>
              <h3 className="text-text-colour2  font-semibold">EMAIL</h3>
              <p className="font-medium">Jeremy.zhaoxl@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-3 ">
            {/* Contact US */}
            <div className=" bg-bg-colour2 p-2.5 rounded-md">
              <i className="bi bi-telephone text-3xl"></i>
            </div>
            <div>
              <h3 className="text-text-colour2  font-semibold">CONTACT ME</h3>
              <p className="font-medium">+65 ••••••••</p>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-3 ">
            {/* Location */}
            <div className=" bg-bg-colour2 p-2.5 rounded-md">
              <i className="bi bi-geo-alt text-3xl"></i>
            </div>
            <div>
              <h3 className="text-text-colour2  font-semibold">LOCATION</h3>
              <p className="font-medium">Singapore</p>
            </div>
          </div>
        </div>
        {/* Right Contact Form */}
        <div className=" bg-my-gradient flex-1 p-10 md:p-16 rounded-3xl relative max-w-[900px]">
          <div>
            <h2 className=" font-semibold text-4xl mb-4">
              Lets Work
              <span className=" text-blue-600"> Together</span>
              <img
                src={Deco1}
                alt=""
                className="mb-4 w-5 md:w-10 float-right absolute right-16 top-0 hidden md:block"
              />
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-bg-colour border-none text-white focus:border-none focus:outline-none focus:bg-bg-colour focus:ring-0 placeholder-text-colour2 h-12  "
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name}</span>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control bg-bg-colour border-none text-white focus:border-none focus:outline-none focus:bg-bg-colour focus:ring-0 placeholder-text-colour2 h-12  "
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="Subject"
                  className="form-control bg-bg-colour border-none text-white focus:border-none focus:outline-none focus:bg-bg-colour focus:ring-0 placeholder-text-colour2 h-12  "
                  id="Subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                {errors.subject && (
                  <span className="text-red-500">{errors.subject}</span>
                )}
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control bg-bg-colour border-none text-white focus:border-none focus:outline-none focus:bg-bg-colour focus:ring-0 placeholder-text-colour2"
                  id="message"
                  rows="3"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500">{errors.message}</span>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary bg-bg-colour2 border-none hover:bg-bg-colour pl-6 pr-6"
              >
                Submit
              </button>
              {isSubmitted && (
                <div className="text-green-500 mt-3 flex items-center">
                  <i className="bi bi-check-circle-fill mr-2 text-2xl"></i>
                  Message submitted successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_Me;
