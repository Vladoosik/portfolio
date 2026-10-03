// modules
import React, {FC} from "react";
import {NavigateFunction} from "react-router/dist/lib/hooks";
// styles
import styles from "./styles.module.css";
// types
import {WorksType} from "../../types/WorksType";
// components
import Button from "../button";
import AnimateWrapper from "../animateWrapper";
// utils
import {handleLinkClick} from "../../utils/navigation";

interface WorkProps {
    item: WorksType;
    index: number;
    navigate: NavigateFunction;
}

const WorkCards: FC<WorkProps> = (props) => {
    const {item, index, navigate} = props;
    const odd: boolean = index % 2 === 0;

    return (
        <AnimateWrapper>
            <a
                href={`/${item.path}`}
                className={styles.cardLink}
                onClick={(e) => handleLinkClick(e, navigate, `/${item.path}`)}
            >
                <div className={`${styles.workCard} ${odd ? styles.cardLeft : styles.cardRight}`}>
                    <p
                        className={styles.cardNumber}
                        style={odd ? {right: 0} : {left: 0}}
                    >
                        0{index + 1}
                    </p>
                    <img
                        src={item.image}
                        alt={`${item.title} case study cover`}
                        loading="lazy"
                        className={styles.image}
                    />
                    <div className={odd ? styles.textLeft : styles.textRight}>
                        <p className={styles.cardTitle}>{item.title}</p>
                        <p className={styles.cardText}>{item.text}</p>
                        <div className={styles.btnContainer}>
                            <Button text={"Case Study"}/>
                        </div>
                    </div>
                </div>
            </a>
        </AnimateWrapper>
    );
};

export default WorkCards;
