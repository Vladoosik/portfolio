// modules
import React, {FC} from 'react';
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {animateScroll as scroll} from 'react-scroll';
// styles
import styles from './styles.module.css';
// types
import {WorksType} from "../../types/WorksType";
// components
import Button from '../button';


interface WorkProps {
    item: WorksType
    index: number
    navigate: NavigateFunction
}

const WorkCards: FC<WorkProps> = (props) => {
    const {item, index, navigate} = props;
    const odd: boolean = index % 2 === 0;

    const handleNavigation = () => {
        const options = {
            duration: 200,
            smooth: true,
        };
        scroll.scrollToTop(options);
        setTimeout(() => navigate(item.path), 300);
    }

    return (
        <div onClick={handleNavigation}>
            <div className={styles.workCard} style={{left: odd ? -30 : 30}}>
                <p className={styles.cardNumber} style={odd ? {right: 0} : {left: 0}}>0{index + 1}</p>
                <img src={item.image} alt="case" className={styles.image}/>
                <div className={odd ? styles.textLeft : styles.textRight}>
                    <p className={styles.cardTitle}>{item.title}</p>
                    <p className={styles.cardText}>{item.text}</p>
                    <div className={styles.btnContainer}>
                        <Button text={'Case Study'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkCards;