import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aʙʜɪꜱʜᴇᴋ</h1>
        <p className={styles.description}>
        I'm a final-year Computer Science student with a passion for full-stack development
        using React and Node.js. Reach out if you'd like to know more!
        </p>
        <a href="mailto:abhisheksaxena505@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
