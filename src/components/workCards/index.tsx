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
import {handleNavigation} from "../../utils/navigation";

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
            <div onClick={() => handleNavigation(navigate, item.path)}>
                <div className={styles.workCard} style={{left: odd ? -30 : 30}}>
                    <p
                        className={styles.cardNumber}
                        style={odd ? {right: 0} : {left: 0}}
                    >
                        0{index + 1}
                    </p>
                    <img src={item.image} alt="case" className={styles.image}/>
                    <div className={odd ? styles.textLeft : styles.textRight}>
                        <p className={styles.cardTitle}>{item.title}</p>
                        <p className={styles.cardText}>{item.text}</p>
                        <div className={styles.btnContainer}>
                            <Button text={"Case Study"}/>
                        </div>
                    </div>
                </div>
            </div>
        </AnimateWrapper>
    );
};

export default WorkCards;
