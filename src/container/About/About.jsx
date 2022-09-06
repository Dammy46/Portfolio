import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
const About = () => {
  const abouts = [
    {
      title: 'Web Design',
      description:
        'I am a Web Design with a passion for bulding beautiful and functional web application',
      img: images.about01,
    },
    {
      title: 'Frontend Development',
      description:
        'I am a Frontend developer with a passion for bulding beautiful and functional web application',
      img: images.about02,
    },
    {
      title: 'Animation',
      description:
        "I blew a little magic to make static designs work without coding. Yah! It's Animation.",
      img: images.about03,
    },
    {
      title: 'Illustration',
      description:
        'Describe things abstract become visible with a impressive look.',
      img: images.about04,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        i know that <span>Good Development</span>
        <br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={`${index}-item`}
          >
            <img src={item.img} alt={item.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {item.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
