import React from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import ReactTooltip from 'react-tooltip';
const Skills = () => {
  const skills = [
    {
      name: 'Html',
      bgColor: '',
      icon: images.html,
    },
    {
      name: 'Css',
      bgColor: '',
      icon: images.css,
    },
    {
      name: 'Javascript',
      bgColor: '',
      icon: images.javascript,
    },
    {
      name: 'Api',
      bgColor: '',
      icon: images.api,
    },
    {
      name: 'Redux',
      bgColor: '',
      icon: images.redux,
    },
    {
      name: 'React',
      bgColor: '',
      icon: images.react,
    },
    {
      name: 'Sass',
      bgColor: '',
      icon: images.sass,
    },
  ];

  const experience = [
    {
      year: '2020',
      work: [
        {
          name: 'Senior Product Designer',
          company: 'AMAZON INC',
          description: "I've worked as a frontend developer",
        },
      ],
    },
    {
      year: '2019',
      work: [
        {
          name: 'Frontend Developer',
          company: 'GOOGLE',
          description: "I've worked as a frontend developer",
        },
        {
          name: 'UI/UX Web Designer',
          company: 'GOOGLE',
          description: "I've worked as a frontend developer",
        },
      ],
    },
    {
      year: '2018',
      work: [
        {
          name: 'Frontend Developer',
          company: 'Google',
          description: "I've worked as a frontend developer",
        },
        {
          name: 'Senior WP Front-End Developer',
          company: 'Amazon',
          description: "I've worked as a frontend developer",
        },
        {
          name: 'Internship React Mastery',
          company: 'Amazon',
          description: "I've worked as a frontend developer",
        },
      ],
    },
  ];
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skils-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index + 'skill'}
            >
              <div className="app__flex" style={{}}>
                <img src={skill.icon} alt="icon" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience?.map((item) => (
            <motion.div className="app__skills-exp-item" key={item.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{item.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {item.work.map((exp) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={exp.name}
                      key={exp.name}
                    >
                      <h4 className="bold-text">{exp.name}</h4>
                      <p className="p-text">{exp.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={exp.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {exp.description}
                    </ReactTooltip>
                  </>
                ))}
     
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');
