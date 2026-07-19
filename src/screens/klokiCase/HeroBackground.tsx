import React from "react";
import styles from "./styles.module.css";

const Check = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#160f1f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

type Habit = {
  text: string;
  sub: string;
  state: "green" | "purple" | "empty";
  cls: string;
};

const habits: Habit[] = [
  { text: "Drink 2L of water", sub: "12-day streak", state: "green", cls: "todo1" },
  { text: "Morning run", sub: "8:00 · Mn–Fr", state: "purple", cls: "todo2" },
  { text: "Read 20 minutes", sub: "today", state: "empty", cls: "todo3" },
  { text: "Meditate", sub: "", state: "green", cls: "todo4" },
];

const HeroBackground = () => (
  <div className={styles.heroBg} aria-hidden={true}>
    <svg
      className={styles.heroSvg}
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="klGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#a855f7" stopOpacity="0.42" />
          <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="940" cy="230" r="330" fill="url(#klGlow)" />
      <circle cx="230" cy="560" r="250" fill="url(#klGlow)" />
    </svg>

    {habits.map((h) => (
      <div key={h.cls} className={`${styles.todoCard} ${styles[h.cls]}`}>
        <div
          className={`${styles.todoCheck} ${
            h.state === "green"
              ? styles.checkGreen
              : h.state === "purple"
                ? styles.checkPurple
                : styles.checkEmpty
          }`}
        >
          {h.state !== "empty" && <Check />}
        </div>
        <div>
          <div
            className={`${styles.todoText} ${h.state !== "empty" ? styles.todoDone : ""}`}
          >
            {h.text}
          </div>
          {h.sub && <div className={styles.todoSub}>{h.sub}</div>}
        </div>
      </div>
    ))}

    <div className={styles.heroFade} />
  </div>
);

export default HeroBackground;
