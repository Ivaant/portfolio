import React, { useState } from "react";
import css from "./Header.module.scss";
import { SiWebflow } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const menuIconHandler = () => setIsMenuShown((prev) => !prev);

  const menuItemHandler = (event) => {
    setActiveMenuItem((prev) => event.target.textContent);
    setIsMenuShown(false);
  };

  const headerShadow = useHeaderShadow();

  const menuIconPic = isMenuShown ? (
    <RxCross2 size={"5rem"} />
  ) : (
    <FiMenu size={"5rem"} />
  );

  const menuItems = ["services", "process", "projects", "contact"];
  const menuElems = menuItems.map((item, i) => {
    return (
      <li key={i} onClick={menuItemHandler}>
        <a
          href={`#${item}`}
          className={activeMenuItem === item ? css["menu__item--active"] : null}
        >
          {item}
        </a>
      </li>
    );
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-primary paddings primaryText ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={css.logo}>
        <a href="#">
          <span className={css.logo_icon}>
            <SiWebflow size="4rem" />
          </span>
          <p>What's Web</p>
        </a>
      </div>
      <div className={css.menu__icon} onClick={menuIconHandler}>
        {menuIconPic}
      </div>
      <ul className={`${css.menu} ${isMenuShown ? css.show : css.hide}`}>
        {menuElems}
      </ul>
    </motion.div>
  );
};

export default Header;
