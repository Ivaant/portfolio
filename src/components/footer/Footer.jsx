import React from "react";
import css from "./Footer.module.scss";
import { SiWebflow } from "react-icons/si";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className={`bg-primary-dark ${css.footer}`}>
      <div className={`innerWidth primaryText ${css.footer__container}`}>
        <div className={`flexStart paddings ${css.footer__container_left}`}>
          <ul className={`flexVerticalStart ${css.footer__menu}`}>
            <h4>Navigate</h4>
            <li>
              <a href="#services">Sevices</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className={`flexVerticalStart ${css.footer__menu}`}>
            <h4>Social</h4>
            <li>
              <a href="https://github.com/Ivaant" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className={`flexCenter ${css.footer__container_right}`}>
          <div className={css.footer__logo}>
            <span className={css.footer__logo_icon}>
              <SiWebflow size="4rem" />
            </span>
            <p>What's Web</p>
          </div>
        </div>
      </div>
      <div className={`${css.footer__copyright}`}>
        <p className="centerText primaryText">
          Designed and built by &copy; What's Web Lab {currentYear}
        </p>
      </div>
    </section>
  );
}

export default Footer;
