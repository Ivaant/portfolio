import React from "react";
import css from "./Services.module.scss";
import { SiWebflow } from "react-icons/si";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "../../utils/motion";
import {
  ValuePropHeader,
  projectServices,
  ProductFeatures,
} from "../../utils/data";

const Services = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-primary ${css.services}`}
    >
      <a id="services" className="anchor"></a>
      <motion.h1
        variants={textVariant(0.5)}
        className="innerWidth centerText paddings yPaddings primaryText"
      >
        {ValuePropHeader}
      </motion.h1>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.services__container}`}
      >
        <div className={css["services__container--left"]}>
          {projectServices.map((item, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={`flexStart ${css.services__card}`}
                key={i}
              >
                <div
                  className={`flexCenter ${css.services__icon}`}
                  style={{ background: item.bg }}
                >
                  <item.icon size={25} color="white" />
                </div>
                <div className="flexVertical">
                  <h3 className="primaryText">{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div
          className={`flexVerticalSpread ${css["services__container--right"]}`}
        >
          {ProductFeatures.map((item, i) => {
            return (
              <motion.div
                variants={fadeIn("left", "tween", (i + 1) * 0.2, 1)}
                className={`flexStart ${css["services__feature-card"]}`}
                key={i}
              >
                <SiWebflow size="3rem" />
                <p className={css.services__feature}>{item}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
