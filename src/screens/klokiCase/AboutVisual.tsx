import React from "react";
import styles from "./styles.module.css";

const RepeatIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#7c3aed" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 2l4 4-4 4" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <path d="M7 22l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#7c3aed" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#7c3aed" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16" />
    <path d="M7 20v-6M12 20V6M17 20v-9" />
  </svg>
);

const AboutVisual = () => (
  <div className={styles.aboutStage}>
    <div className={styles.aboutGlow} />

    <div className={styles.aboutPhone}>
      <img
        className={styles.aboutScreen}
        src={require("../../assets/png/kloki_charts.png")}
        alt="Kloki charts screen"
      />
    </div>

    <div className={`${styles.aboutTag} ${styles.aboutTag1}`}>
      <RepeatIcon />
      Habits
    </div>
    <div className={`${styles.aboutTag} ${styles.aboutTag2}`}>
      <CalendarIcon />
      Daily plan
    </div>
    <div className={`${styles.aboutTag} ${styles.aboutTag3}`}>
      <ChartIcon />
      Progress
    </div>
  </div>
);

export default AboutVisual;
