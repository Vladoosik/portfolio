import React from "react";
import styles from "./styles.module.css";

const BookIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#5b7a00" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h9a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z" />
    <path d="M20 4h-3a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h4z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#5b7a00" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#5b7a00" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
  </svg>
);

const AboutVisual = () => (
  <div className={styles.aboutStage}>
    <div className={styles.aboutGlow} />

    <div className={styles.aboutPhone}>
      <img
        className={styles.aboutScreen}
        src={require("../../assets/png/idriver_home_screen.png")}
        alt="IDriver home screen"
      />
    </div>

    <div className={`${styles.aboutTag} ${styles.aboutTag1}`}>
      <BookIcon />
      Theory + practice
    </div>
    <div className={`${styles.aboutTag} ${styles.aboutTag2}`}>
      <CheckIcon />
      PDR mock tests
    </div>
    <div className={`${styles.aboutTag} ${styles.aboutTag3}`}>
      <BoltIcon />
      Daily plan
    </div>
  </div>
);

export default AboutVisual;
