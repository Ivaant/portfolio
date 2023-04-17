import React, { Fragment, useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";

import css from "./Contact.module.scss";
import { cta, cta2 } from "../../utils/data";

const Contact = () => {
  const form = useRef();
  const [isRequestSent, setIsRequestSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6i9r65i",
        "template_qajkacq",
        form.current,
        "54xiZ5aY92FTfdaCB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsRequestSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      className={css.contact}
    >
      <a id="contact" className="anchor"></a>
      <div className={`innerWidth flexCenter ${css.contact__container}`}>
        {!isRequestSent && (
          <Fragment>
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className={`paddings flexVertical ${css.contact__container_left}`}
            >
              <p className="paddings primaryText">{cta}</p>
              <p className="paddings secondaryText">{cta2}</p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className={css.contact__container_right}
            >
              <form ref={form} onSubmit={sendEmail} className={css.form}>
                <div className={css.form__element}>
                  <h3 className={`yPaddings primaryText ${css.form__header}`}>
                    Send your <span>request now!</span>
                  </h3>
                </div>
                <div className={css.form__element}>
                  <input
                    type="text"
                    minLength="3"
                    required
                    name="user_name"
                    className={css.form__input}
                    placeholder="Name"
                  />
                </div>
                <div className={css.form__element}>
                  <input
                    type="email"
                    required
                    pattern="^\S+@\S+\.\S+$"
                    name="user_email"
                    className={css.form__input}
                    placeholder="Email"
                  />
                </div>
                <div className={css.form__element}>
                  <textarea
                    name="message"
                    required
                    minLength="10"
                    className={css.form__input}
                    placeholder="Message"
                    rows="8"
                    cols="33"
                  />
                </div>
                <div className={css.form__element}>
                  <input
                    type="submit"
                    value="Send"
                    className={`button button--solid ${css.form__submit}`}
                  />
                </div>
              </form>
            </motion.div>
          </Fragment>
        )}
        {isRequestSent && (
          <div
            className={`innerWidth flexVerticalSpread ${css.form__feedback}`}
          >
            <h3 className={`primaryText ${css.form__feedback_text}`}>
              Thanks for Contacting me! <span>I will respond</span> shortly.
            </h3>
            <div className="form__repeat">
              <button
                className={`button button--solid ${css.form__submit}`}
                onClick={() => setIsRequestSent(false)}
              >
                Send another message
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
