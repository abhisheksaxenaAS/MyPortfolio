import React from "react";
import { SiGmail } from "react-icons/si";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:abhisheksaxena505@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail className={`${styles.icon} cursor-pointer hover:scale-110 transition-all ease-in-out`} />
            <span className={styles.text}>abhisheksaxena505@gmail.com</span>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/abhisheksaxenaas/" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin className={`${styles.icon} cursor-pointer hover:scale-110 transition-all ease-in-out`} />
            <span className={styles.text}>abhisheksaxenaAS</span>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/abhisheksaxenaAS" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub className={`${styles.icon} cursor-pointer hover:scale-110 transition-all ease-in-out`} />
            <span className={styles.text}>abhisheksaxenaAS</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};
