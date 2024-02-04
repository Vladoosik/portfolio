// modules
import React, { FC, JSX } from "react";
// styles
import styles from "./styles.module.css";

interface IntroductionProps {
  title: string;
  description: string;
  onButtonPress?: () => void;
  workLogo?: JSX.Element;
}

const Introduction: FC<IntroductionProps> = (props) => {
  const { title, description, onButtonPress, workLogo } = props;

  return (
    <div className={styles.theProjectContainer}>
      <p className={styles.projectTitle}>{title}</p>
      <p className={styles.projectText}>{description}</p>
      <button className={styles.button} onClick={onButtonPress}>
        Visit Website
      </button>
      {workLogo && workLogo}
    </div>
  );
};

export default Introduction;
