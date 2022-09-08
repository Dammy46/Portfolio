import React from 'react';
import './Footer.scss';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
const Footer = () => {
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:aabdulsobur@gmail.com" className="p-text">
            aabdulsobur@gmail
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.email} alt="mobile" />
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
            className="p-text"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            className="p-text"
            placeholder="Email Address"
          />

          <select name="subject" id="">
            <option defaultValue disabled selected>
              Subject (optional)
            </option>
            <option value="">React</option>
            <option value="">React</option>
            <option value="">React</option>
          </select>
        </div>
        <div className="app__flex">
          <textarea
            className="p-text"
            name="message"
            placeholder="Your message here"
          />
        </div>
        <button type="button" className="p-text">
          {'Send message'}
        </button>
      </div>
    </>
  );
};

export default AppWrap(Footer, 'contact', 'app__footer');
