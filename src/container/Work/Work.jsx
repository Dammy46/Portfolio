import React from 'react';
import './Work.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
const Work = () => {
  const works = [
    {
      title: 'Credit Fast ',
      description: 'This application is based on digital banking.',
      projectLink: 'https://credit-fast.netlify.app/',
      img: images.banking,
      codeLink: 'https://github.com/Dammy46/credit_fast',
    },
    {
      title: 'Facial Recognition',
      description: 'This helps to detect celebrity faces in a picture',
      projectLink: 'https://celebrity-model.herokuapp.com/',
      img: images.facial,
      codeLink: 'https://github.com/Dammy46/celebrity_model',
    },
    {
      title: 'Movie Search',
      description: 'Movie search application.',
      projectLink: 'https://moviesearchh.netlify.app/',
      img: images.movie,
      codeLink: 'https://github.com/Dammy46/movie-search',
    },
    {
      title: 'Calculator',
      description: 'Javascript Project',
      projectLink: 'https://dammy46.github.io/Calculator/',
      img: images.calculator,
      codeLink: 'https://github.com/Dammy46/Calculator',
    },
    {
      title: 'Cloned website',
      description: 'A basic HTML/CSS/Javascript webpage',
      projectLink: 'https://dammy46.github.io/Interior',
      img: images.interior,
      codeLink: 'https://github.com/Dammy46/Interior',
    },
    {
      title: 'Design Buddy',
      description: 'React Project',
      projectLink: 'https://d3signbuddy.netlify.app/',
      img: images.designBuddy,
      codeLink: 'https://github.com/Dammy46/design_buddy',
    },
    {
      title: 'Simon Game',
      description: 'Javascript Project',
      projectLink: 'https://dammy46.github.io/Simon-Game/',
      img: images.simon,
      codeLink: 'https://github.com/Dammy46/Simon-Game',
    },
    {
      title: 'Note Application',
      description: 'React Project',
      projectLink: 'https://dreamy-dodol-8f2817.netlify.app/',
      img: images.note,
      codeLink: 'https://github.com/Dammy46/Note_demo',
    },
  ];
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Project</span>
        <br /> That <span>I've Work on</span>
      </h2>

      <motion.div className="app__work-portfolio">
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={`work${index}`}>
            <div className="app__work-img app__flex">
              <img src={work.img} alt="name" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} >
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} >
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
