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
    title: string;
    data: ProjectColorType[];
    description: JSX.Element;
    photoSource?: string;
    imageStyle?: object;
    visual?: JSX.Element;
    background?: string;
}

const AboutProject: FC<AboutProjectProps> = (props) => {
    const {
        title,
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
                    <p className={styles.cardTitle}>{title}</p>
                    <div className={styles.line}/>
                    <div className={styles.workDescription}>{description}</div>
                </div>
                <div className={isMobile ? styles.phoneContainerMob : styles.phoneContainer}>
                    {visual ? (
                        visual
                    ) : (
                        <img
                            className={styles.phoneCard}
                            style={imageStyle}
                            src={photoSource}
                            alt="App screen mockup"
                        />
                    )}
                </div>
            </div>
            <p className={styles.paletteTitle}>Design system · project palette</p>
            <div className={styles.circleContainer}>
                <ColorCircleList data={data}/>
            </div>
        </div>
    );
};

export default AboutProject;
