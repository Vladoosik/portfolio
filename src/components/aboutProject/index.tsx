// modules
import React, {FC, JSX} from "react";
// styles
import styles from "./styles.module.css";
// components
import ColorCircleList from "../colorCircle/ColorCircleList";
// types
import {ProjectColorType} from "../../types/ProjectColorType";
import {useMediaQuery} from "react-responsive";

interface AboutProjectProps {
    data: ProjectColorType[];
    description: JSX.Element;
    photoSource?: string;
    imageStyle?: object;
    visual?: JSX.Element;
    background?: string;
}

const AboutProject: FC<AboutProjectProps> = (props) => {
    const {
        data,
        description,
        photoSource = require("../../assets/png/phone.png"),
        imageStyle,
        visual,
        background,
    } = props;
    const isMobile: boolean = useMediaQuery({query: '(max-width: 1000px)'});
    return (
        <div className={styles.cardContainer} style={background ? {background} : undefined}>
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
                    {visual ? (
                        visual
                    ) : (
                        <img
                            className={styles.phoneCard}
                            style={imageStyle}
                            src={photoSource}
                            alt="phone"
                        />
                    )}
                </div>
            </div>
            <div className={styles.circleContainer}>
                <ColorCircleList data={data}/>
            </div>
        </div>
    );
};

export default AboutProject;
