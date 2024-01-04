// modules
import React from "react";
// styles
import styles from "./styles.module.css";
// constants
import { petProjectArray, ProjectType } from "../../constants/petProjects";

const PetProjects = () => {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className={styles.container} id={"petProject"}>
      <p className={styles.title}>EXPERIMENTS & OPEN SOURCE</p>
      <h2 className={styles.text}>Web is fun.</h2>
      <div className={styles.projectContainer}>
        {petProjectArray.map((item: ProjectType, index: number) => (
          <div
            key={item.id}
            className={styles.projectCard}
            onClick={() => openLink(item.link)}
          >
            <img
              className={styles.projectImage}
              src={item.image}
              alt="project image"
            />
            <div className={styles.cardTextBox}>
              <p className={styles.cardTitle}>{item.title}</p>
              <p className={styles.cardText}>{item.description}</p>
            </div>
            <div className={styles.numberCardContainer}>
              <span className={styles.numberCard}>0{index + 1}</span>
              <div className={styles.verticalLine} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetProjects;
