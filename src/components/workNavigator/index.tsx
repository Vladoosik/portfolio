// modules
import React, { FC } from "react"; // styles
import styles from "./styles.module.css";
import { ArrowIcon } from "../../assets";

interface WorkNavProp {
  nextProjectName: string;
}

const WorkNavigator: FC<WorkNavProp> = (props) => {
  const { nextProjectName } = props;
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default WorkNavigator;
