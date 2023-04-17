import React from "react";
import css from "./Process.module.scss";
import { SiWebflow } from "react-icons/si";
import { motion } from "framer-motion";
import {
  staggerChildren,
  fadeIn,
  zoomIn,
  textVariant2,
} from "../../utils/motion";
import { processStages } from "../../utils/data";

const Process = () => {
  let processElems = processStages.map((stage, i) => {
    return (
      <motion.div
        variants={textVariant2}
        className={`innerWidth flexCenter ${css.process__stage}`}
        key={i}
      >
        <div className={css.process__stage_image}>
          <img src={stage.img} alt={stage.heading.replace(/ .*/, "")} />
        </div>
        <div className={css.process__stage_text}>
          <h3 className="primaryText">{stage.heading}</h3>
          <p className="flexStart secondaryText">{stage.text}</p>
        </div>
      </motion.div>
    );
  });

  const circles = new Array(6).fill(1);
  const circleElems = circles.map((item, i) => {
    return (
      <div key={i}>
        <div className={`${css.circle} ${css["circle_" + (i + 1)]}`}></div>
      </div>
    );
  });

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.15 }}
      className={` flexVertical ${css.process}`}
    >
      <a id="process" className="anchor"></a>
      <h2 className="innerWidth paddings yPaddings primaryText flexCenter">
        Process
      </h2>
      {processElems}

      <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
        <motion.div
          variants={fadeIn("down", "tween", 2, 1.5)}
          className={css.line}
        ></motion.div>
        {circleElems}
      </motion.div>
    </motion.section>
  );
};

export default Process;
