import React from 'react'
import './SocialMediaIcon.scss';
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa';
const SocialMediaIcon = () => {
  return (
    <div className="app__social">
      <a
        href="https://twitter.com/devdammy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsTwitter />
        </div>
      </a>
      <a
        href="https://web.facebook.com/profile.php?id=100087052156658"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <FaFacebookF />
        </div>
      </a>
      <a
        href="https://www.instagram.com/devdammy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
}

export default SocialMediaIcon