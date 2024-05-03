// modules
import React, { FC } from "react";
// styles
import styles from "./styles.module.css";
// assets
import { ArrowIcon } from "../../assets";

interface WorkNavProp {
  nextProjectName: string;
  onClick?: () => void;
  overlayColor?: string;
  backgroundColor?: string;
}

const WorkNavigator: FC<WorkNavProp> = (props) => {
  const {
    nextProjectName,
    onClick,
    overlayColor = "#f06449",
    backgroundColor,
  } = props;
  return (
    <div
      className={styles.container}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      <p className={styles.description}>Next work</p>
      <div className={styles.contentContainer}>
        <p className={styles.nextWorkText}>{nextProjectName}</p>
        <ArrowIcon
          color={"black"}
          width={60}
          height={60}
          className={styles.arrow}
        />
      </div>
      <div
        className={styles.overlay}
        style={{ backgroundColor: overlayColor }} // Используем цвет из пропса
      />
    </div>
  );
};

export default WorkNavigator;
