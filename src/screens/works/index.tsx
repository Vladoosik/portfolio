// modules
import React from "react";
// styles
import styles from "./styles.module.css";
// components
import {WorkCards} from "../../components";
// types
import {WorksType} from "../../types/WorksType";
// constants
import {worksArr} from "../../constants/commerceProject";

const Works = () => {

    return (
        <div id={'work'}>
            <p className={styles.workTitle}>CASE STUDIES</p>
            <h2 className={styles.workText}>Latest Works</h2>
            <div className={styles.cardContainer}>
                {worksArr.map((item: WorksType, index: number) => (
                    <WorkCards item={item} index={index} key={item.id}/>
                ))}
            </div>
        </div>
    );
};

export default Works;
