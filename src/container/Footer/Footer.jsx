import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import './Footer.scss';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import Swal from 'sweetalert2';
const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          'service_chgnc5j',
          'template_3qxyl1i',
          form.current,
          'uJmijd7_EEC8yYPmo'
        )
        .then(
          (result) => {
            Swal.fire({
              icon: 'success',
              text: 'successful',
            });
          },
          (error) => {
            console.log(error.text);
          }
      );
      e.target.reset();
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
          <img src={images.email} alt="mobile" />
          <a href="tel: +234 708 234 3512" className="p-text">
            +234 708 234 3512
          </a>
        </div>
      </div>

      <form
        className="app__footer-form app__flex"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="app__flex app__inputs">
          <input
            type="text"
            name="user_name"
            className="p-text"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_name"
            className="p-text"
            placeholder="Email Address"
            required
          />

          <select name="subject" id="">
            <option defaultValue disabled selected>
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
            placeholder="Your message here"
            required
          />
        </div>
        <button type="submit" className="p-text">
          {'Send message'}
        </button>
      </form>
    </>
  );
};

export default AppWrap(Footer, 'contact', 'app__footer');
