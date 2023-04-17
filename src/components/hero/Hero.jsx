import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`screenSection paddings`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth secondaryText ${css.container}`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.container__left}
        >
          <h2 className="secondaryText">
            From your <span>idea</span>
            <br />
            through our <span>development</span>
            <br />
            to your <span>success</span>
          </h2>
          <div className={css.action}>
            <a className="button button--solid" href="#contact">
              Get started
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={css.container__right}
        >
          <img src="hero.png" alt="Developer's Portait" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
