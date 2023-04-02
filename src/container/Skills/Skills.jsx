import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import ReactTooltip from "react-tooltip";
import { client, urlFor } from "../../client";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperiennce] = useState([]);
  useEffect(() => {
    const query = '*[_type == "skills"]';
    const experiencesQuery = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
    client.fetch(experiencesQuery).then((data) => {
      setExperiennce(data);
    });
    //eslint-disable-next-line
  }, []);
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
              key={index + skill}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt="icon" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience?.map((item) => (
            <motion.div
              className="app__skills-exp-item"
              key={item.year + Math.round()}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{item.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {item.works.map((exp) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={exp.name}
                      key={exp.name + exp.company}
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
                      {exp.desc}
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

export default AppWrap(Skills, "skills");
