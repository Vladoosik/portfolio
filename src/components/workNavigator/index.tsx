// modules
import React, { FC, MouseEvent } from "react";
// styles
import styles from "./styles.module.css";
// assets
import { ArrowIcon } from "../../assets";

interface WorkNavProp {
  nextProjectName: string;
  href: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  overlayColor?: string;
  backgroundColor?: string;
}

const WorkNavigator: FC<WorkNavProp> = (props) => {
  const {
    nextProjectName,
    href,
    onClick,
    overlayColor = "#f06449",
    backgroundColor,
  } = props;
  return (
    <a
      className={styles.container}
      style={{ backgroundColor }}
      href={href}
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
    </a>
  );
};

export default WorkNavigator;
