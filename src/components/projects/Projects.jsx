import React from "react";
import css from "./Projects.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, fadeIn, textVariant2 } from "../../utils/motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import { projects } from "../../utils/data";

const Projects = () => {
  const projectElems = projects.map((project, i) => {
    return (
      <motion.div
        variants={textVariant2}
        className={`innerWidth flexCenter ${css.project}`}
        key={i}
      >
        <div className={css.project__image}>
          <a href={project.url} target="_blank">
            <motion.img
              variants={fadeIn("up", "tween", 0.5 + i * 2, 0.6)}
              src={project.screenshot}
              alt={project.name}
            />
          </a>
        </div>
        <motion.div
          variants={fadeIn("left", "tween", 0.5 + i * 2, 0.6)}
          className={css.project__text}
        >
          <h3 className="primaryText">{project.name}</h3>
          <p className="flexStart secondaryText">{project.text}</p>
          <div
            className={`flexStart secondaryText yPaddings ${css.project__techstack}`}
          >
            {project.techs.map((tech, i) => {
              return (
                <div key={i} className={css["project__tech-item"]}>
                  {tech}
                </div>
              );
            })}
          </div>
          <div
            className={`flexStart yPaddings secondaryText ${css.project__text_link}`}
          >
            <a href={project.url} target="_blank">
              <div className={css.project__text_link_container}>
                <span>Project Site</span>
                <span>
                  <FiExternalLink size="2rem" />
                </span>
              </div>
            </a>
            <a href={project.git} target="_blank">
              <div className={css.project__text_link_container}>
                <span>Project Code</span>
                <span>
                  <FiGithub size="2rem" />
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    );
  });
  return (
    <motion.section
      initial="show"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings bg-primary ${css.projects}`}
    >
      <a id="projects" className="anchor"></a>
      <div
        className={`innerWidth flexVerticalSpread ${css.projects__container}`}
      >
        <h2 className={`innerWidth paddings yPaddings primaryText flexCenter`}>
          Projects
        </h2>

        <div className={`flexVerticalSpread ${css.projects__showCase}`}>
          {projectElems}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
