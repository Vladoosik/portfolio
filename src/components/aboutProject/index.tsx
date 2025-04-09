// modules
import React, {FC, JSX} from "react";
// styles
import styles from "./styles.module.css";
// components
import {ColorCircle} from "../index";
// types
import {ProjectColorType} from "../../types/ProjectColorType";
import {useMediaQuery} from "react-responsive";

interface AboutProjectProps {
    data: ProjectColorType[];
    description: JSX.Element;
    photoSource?: string;
    imageStyle?: object;
}

const AboutProject: FC<AboutProjectProps> = (props) => {
    const {
        data,
        description,
        photoSource = require("../../assets/png/phone.png"),
        imageStyle,
    } = props;
    const isMobile: boolean = useMediaQuery({query: '(max-width: 1000px)'});
    return (
        <div className={styles.cardContainer}>
            <p className={styles.workTitle}>ANALYSIS & PREPARATION</p>
            <h2 className={styles.workText}>Responsibilities</h2>
            <div className={styles.workCard}>
                <div>
                    <p className={styles.cardTitle}>
                        Designed with customer care and love.
                    </p>
                    <div className={styles.line}/>
                    <p className={styles.workDescription}>{description}</p>
                </div>
                <div className={isMobile ? styles.phoneContainerMob : styles.phoneContainer}>
                    <img
                        className={styles.phoneCard}
                        style={imageStyle}
                        src={photoSource}
                        alt="phone"
                    />
                </div>
            </div>
            <div className={styles.circleContainer}>
                {data.map((item: ProjectColorType, index: number) => (
                    <ColorCircle key={index} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default AboutProject;
