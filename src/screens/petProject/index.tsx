// modules
import React from "react";
// styles
import styles from "./styles.module.css";
// components
import {AnimateWrapper} from "../../components";
// constants
import {petProjectArray, ProjectType} from "../../constants/petProjects";

const PetProjects = () => {
    return (
        <div className={styles.container} id={"petProject"}>
            <p className={styles.title}>EXPERIMENTS & OPEN SOURCE</p>
            <h2 className={styles.text}>Web is fun.</h2>
            <AnimateWrapper width={'100%'} background={'rgba(97, 218, 251, 0.5)'}>
                <div className={styles.projectContainer}>
                    {petProjectArray.map((item: ProjectType, index: number) => (
                        <a
                            key={item.id}
                            className={styles.projectCard}
                            href={item.link}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                        >
                            <img
                                className={styles.projectImage}
                                src={item.image}
                                alt={`${item.title} project preview`}
                                loading="lazy"
                            />
                            <div className={styles.cardTextBox}>
                                <p className={styles.cardTitle}>{item.title}</p>
                                <p className={styles.cardText}>{item.description}</p>
                            </div>
                            <div className={styles.numberCardContainer}>
                                <span className={styles.numberCard}>0{index + 1}</span>
                                <div className={styles.verticalLine}/>
                            </div>
                        </a>
                    ))}
                </div>
            </AnimateWrapper>
        </div>
    );
};

export default PetProjects;
