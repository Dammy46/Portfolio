import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
const Header = () => {
  const scaleVariant = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  const __React = images.react;
  const __Redux = images.redux;
  const __Javascript = images.javascript;
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <div className="p-text">Hello, I am</div>
              <h1 className="head-text">Abdulzobur</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
          src={images.circle}
          alt="circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circles"
      >
        <div className="circle_wrap">
          <div className="circle-cmp first app__flex">
            <img src={__Javascript} alt="img" />
          </div>
          <p className="p-text bold">Javascript</p>
        </div>
        <div className="circle_wrap contain">
          <div className="circle-cmp second app__flex">
            <img src={__React} alt="img" />
          </div>
          <p className="p-text bold">React</p>
        </div>
        <div className="circle_wrap">
          <div className="circle-cmp third app__flex">
            <img src={__Redux} alt="img" />
          </div>
          <p className="p-text bold ">Redux</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
