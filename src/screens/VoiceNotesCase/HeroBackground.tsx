import React from "react";
import styles from "./styles.module.css";

const HeroBackground = () => (
  <div className={styles.heroBg} aria-hidden={true}>
    <svg
      className={styles.heroSvg}
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="vnRibbon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3f5fe6" />
          <stop offset="0.55" stopColor="#5b7cf5" />
          <stop offset="1" stopColor="#8aa4ff" />
        </linearGradient>
        <radialGradient id="vnGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#4c6ef5" stopOpacity="0.3" />
          <stop offset="1" stopColor="#4c6ef5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="520" r="380" fill="url(#vnGlow)" />
      <circle cx="1120" cy="150" r="360" fill="url(#vnGlow)" />
      <path
        d="M-40 300 C 220 160, 340 520, 620 430 S 980 210, 1340 360"
        fill="none"
        stroke="url(#vnRibbon)"
        strokeWidth="34"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M-40 420 C 260 300, 420 620, 700 500 S 1040 320, 1340 470"
        fill="none"
        stroke="url(#vnRibbon)"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>

    <div className={styles.heroFade} />

    <div className={`${styles.glassIcon} ${styles.glassChat}`}>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#dfe6ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </div>
    <div className={`${styles.glassIcon} ${styles.glassMic}`}>
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#dfe6ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 10a7 7 0 0 0 14 0M12 17v4" />
      </svg>
    </div>
    <div className={`${styles.glassIcon} ${styles.glassLock}`}>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#dfe6ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    </div>
    <div className={`${styles.glassIcon} ${styles.glassUser}`}>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#dfe6ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    </div>
    <div className={`${styles.glassIcon} ${styles.glassChart}`}>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#dfe6ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16" />
        <path d="M7 20v-6M12 20V6M17 20v-9" />
      </svg>
    </div>
  </div>
);

export default HeroBackground;
