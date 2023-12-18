// modules
import React from "react";
// styles
import styles from "./styles.module.css";
// components
import {WorkCards} from "../../components";
// types
import {WorksType} from "../../types/WorksType";

const Works = () => {
    const worksArr: WorksType[] = [
        {
            id: 12,
            title: "ForDream",
            text: "Landing Site for company",
            image: require("../../assets/png/ForDreamCase.png"),
        },
        {
            id: 13,
            title: "My status",
            text: "Social Network on React-Native",
            image: require("../../assets/png/ForDreamCase.png"),
        },
        {
            id: 14,
            title: "Catchy-Web",
            text: "Admin panel for music studio",
            image: require("../../assets/png/ForDreamCase.png"),
        },
    ];

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
