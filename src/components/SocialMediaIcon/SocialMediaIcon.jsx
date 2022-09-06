import React from 'react'
import './SocialMediaIcon.scss';
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa';
const SocialMediaIcon = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebookF />
      </div>

      <div>
        <BsInstagram />
      </div>
    </div>
  );
}

export default SocialMediaIcon