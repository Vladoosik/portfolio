import React from "react";
import styles from "./styles.module.css";

const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#4c6ef5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#4c6ef5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#4c6ef5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const AboutVisual = () => (
  <div className={styles.aboutStage}>
    <div className={styles.aboutGlow} />

    <div className={styles.aboutPhone}>
      <div className={styles.aboutNotch} />
      <img
        className={styles.aboutScreen}
        src={require("../../assets/png/voice_notes_clients.png")}
        alt="Voice Notes clients screen"
      />
    </div>

    <div className={`${styles.aboutTag} ${styles.aboutTag1}`}>
      <UserIcon />
      Client · Maria
    </div>
    <div className={`${styles.aboutTag} ${styles.aboutTag2}`}>
      <ChatIcon />
      Session note
    </div>
    <div className={`${styles.aboutTag} ${styles.aboutTag3}`}>
      <LockIcon />
      Encrypted
    </div>
  </div>
);

export default AboutVisual;
