import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import Swal from "sweetalert2";
import { client } from "../../client";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (name.length && email.length && message.length) {
      setLoading(true);
      const contact = {
        _type: "contact",
        name: name,
        email: email,
        message: message,
      };
      client
        .create(contact)
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Message sent!",
          });
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        icon: "error",
        text: "Enter the fields!",
      });
    }

  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:aabdulsobur@gmail.com" className="p-text">
            aabdulsobur@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.phone} alt="mobile" />
          <a href="tel: +234 708 234 3512" className="p-text">
            +234 708 234 3512
          </a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex app__inputs">
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeInput}
            className="p-text"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeInput}
            className="p-text"
            placeholder="Email Address"
          />

          <select name="subject" id="">
            <option defaultValue disabled>
              Subject (optional)
            </option>
            <option value="React">Web Design</option>
            <option value="Front-End Development">Front-End Development</option>
            <option value="Animation">Animation</option>
          </select>
        </div>
        <div className="app__flex">
          <textarea
            className="p-text"
            name="message"
            value={message}
            onChange={handleChangeInput}
            placeholder="Your message here"
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </>
  );
};

export default AppWrap(Footer, "contact", "app__footer");
