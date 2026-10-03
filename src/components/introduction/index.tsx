// modules
import React, { FC, JSX } from "react";
// styles
import styles from "./styles.module.css";

interface IntroductionProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  workLogo?: JSX.Element;
}

const Introduction: FC<IntroductionProps> = (props) => {
  const { title, description, link, linkText = "Visit Website", workLogo } = props;

  return (
    <div className={styles.theProjectContainer}>
      <p className={styles.projectTitle}>{title}</p>
      <p className={styles.projectText}>{description}</p>
      {link && (
        <a
          className={styles.button}
          href={link}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          {linkText}
        </a>
      )}
      {workLogo && workLogo}
    </div>
  );
};

export default Introduction;
