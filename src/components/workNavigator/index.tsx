// modules
import React, {FC} from "react";
// styles
import styles from "./styles.module.css";
// assets
import {ArrowIcon} from "../../assets";

interface WorkNavProp {
    nextProjectName: string;
    onClick?: () => void
}

const WorkNavigator: FC<WorkNavProp> = (props) => {
    const {nextProjectName, onClick} = props;
    return (
        <div className={styles.container} onClick={onClick}>
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
