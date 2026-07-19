import React from "react";
import styles from "./styles.module.css";

// one diagonal "speed streak": [x, y, width, height, fill, opacity]
type Streak = [number, number, number, number, string, number];

const L = "#cdeb00";
const W = "#ffffff";

const streaks: Streak[] = [
  [-300, 70, 300, 7, L, 0.9],
  [120, 70, 150, 4, W, 0.5],
  [560, 66, 430, 9, L, 0.5],
  [1060, 72, 240, 3, W, 0.25],
  [-160, 150, 200, 4, W, 0.3],
  [260, 146, 560, 9, L, 0.95],
  [900, 150, 180, 5, W, 0.55],
  [-260, 250, 360, 5, L, 0.35],
  [430, 248, 150, 4, W, 0.4],
  [760, 246, 520, 8, L, 0.6],
  [60, 330, 240, 4, W, 0.28],
  [470, 326, 430, 8, L, 0.85],
  [1000, 330, 220, 3, W, 0.22],
  [-200, 430, 330, 6, L, 0.5],
  [300, 432, 180, 4, W, 0.35],
  [720, 428, 360, 6, L, 0.7],
  [120, 520, 480, 8, L, 0.9],
  [760, 524, 200, 4, W, 0.4],
  [-120, 600, 300, 5, L, 0.4],
  [420, 606, 260, 5, W, 0.28],
];

const HeroBackground = () => (
  <div className={styles.heroBg} aria-hidden={true}>
    <svg
      className={styles.heroSvg}
      viewBox="0 0 1280 720"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="idGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#cdeb00" stopOpacity="0.4" />
          <stop offset="1" stopColor="#cdeb00" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="960" cy="250" r="320" fill="url(#idGlow)" />
      <circle cx="220" cy="560" r="240" fill="url(#idGlow)" />
      <g transform="rotate(-29 640 360)">
        {streaks.map(([x, y, w, h, fill, opacity], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            rx={h / 2}
            fill={fill}
            opacity={opacity}
          />
        ))}
      </g>
    </svg>

    <div className={styles.heroFade} />
  </div>
);

export default HeroBackground;
