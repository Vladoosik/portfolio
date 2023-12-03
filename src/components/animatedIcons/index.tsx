// modules
import React, {FC} from 'react';
// styles
import styles from "./styles.module.css";
// assets
import {DoubleWave, Line, SemiCircle, Triangle, Wave} from "../../assets";
// types
import {AnimatedIconType} from "../../types/AnimatedIconType";

const AnimatedIcons: FC<AnimatedIconType> = (props) => {
    const {cursorPosition} = props;

    const iconPosition = (top: string, left: string, transX: string) => {
        return {
            position: 'absolute',
            top,
            left,
            transform: `translateX(${transX})`,
        };
    };

    const arrayIcons = [
        {
            id: 1,
            icon: <Wave color={'#CF4981'}/>,
            style: iconPosition('25%', '90%', '50%'),
            invertedMove: false
        },
        {
            id: 2,
            icon: <DoubleWave color={'#CF4981'}/>,
            style: iconPosition('50%', '70%', '50%'),
            invertedMove: true
        },
        {id: 3, icon: <Line color={'#CF4981'}/>, style: iconPosition('12%', '50%', '50%'), invertedMove: false},
        {id: 4, icon: <Triangle color={'#0f6898'}/>, style: iconPosition('80%', '10%', '10%'), invertedMove: true},
        {
            id: 5,
            icon: <Wave color={'yellow'}/>,
            color: '#CF4981',
            style: iconPosition('70%', '40%', '50%'),
            invertedMove: false
        },
        {id: 6, icon: <Triangle color={'#3a9a5c'}/>, style: iconPosition('10%', '10%', '10%'), invertedMove: false},
        {id: 7, icon: <Triangle color={'#49cfb0'}/>, style: iconPosition('10%', '80%', '50%'), invertedMove: true},
        {id: 8, icon: <SemiCircle/>, style: iconPosition('50%', '20%', '50%'), invertedMove: false},
        {id: 9, icon: <Triangle color={'#49cfb0'}/>, style: iconPosition('70%', '90%', '50%'), invertedMove: true},
        {id: 121, icon: <Line/>, style: iconPosition('12%', '25%', '60%'), invertedMove: false},
    ]
    return (
        <>
            {arrayIcons.map((item) => {
                const horizontalDuration = item.invertedMove ? -cursorPosition.x : cursorPosition.x;
                const verticalDuration = item.invertedMove ? -cursorPosition.y : cursorPosition.y;
                return (
                    <div
                        key={item.id}
                        className={styles.iconAnimation}
                        // @ts-ignore
                        style={{
                            ...item.style,
                            transform: `translate(-50%, -50%) translate(${horizontalDuration * 0.08}px, ${
                                verticalDuration * 0.08
                            }px)`,
                        }}
                    >
                        {item.icon}
                    </div>
                )
            })}
        </>
    );
};

export default AnimatedIcons;