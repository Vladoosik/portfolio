// modules
import React, { FC, JSX } from "react";
// styles
import styles from "./styles.module.css";
// components
import { ColorCircle } from "../index";
// types
import { ProjectColorType } from "../../types/ProjectColorType";

interface AboutProjectProps {
  data: ProjectColorType[];
  description: JSX.Element;
  photoSource?: string;
}

const AboutProject: FC<AboutProjectProps> = (props) => {
  const {
    data,
    description,
    photoSource = require("../../assets/png/phone.png"),
  } = props;
  return (
    <div className={styles.cardContainer}>
      <p className={styles.workTitle}>ANALYSIS & PREPARATION</p>
      <h2 className={styles.workText}>Responsibilities</h2>
      <div className={styles.workCard}>
        <div>
          <p className={styles.cardTitle}>
            Designed with customer care and love.
          </p>
          <div className={styles.line} />
          <p className={styles.workDescription}>{description}</p>
        </div>
        <div className={styles.phoneContainer}>
          <img className={styles.phoneCard} src={photoSource} alt="phone" />
        </div>
      </div>
      <div className={styles.circleContainer}>
        {data.map((item: ProjectColorType, index: number) => (
          <ColorCircle key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AboutProject;
