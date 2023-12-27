// modules
import React, {FC, memo, useCallback, useEffect, useRef} from "react";
// styles
import styles from "./styles.module.css";
// assets
import {DoubleWave, Line, SemiCircle, Triangle, Wave} from "../../assets";
// types
import {AnimatedIconType} from "../../types/AnimatedIconType";
// utils
import {iconPosition} from "../../utils/iconPosition";

const arrayIcons = [
    {
        id: 1,
        icon: <Wave color={"#CF4981"}/>,
        style: iconPosition("25%", "90%", "50%"),
        invertedMove: false,
    },
    {
        id: 2,
        icon: <DoubleWave color={"#CF4981"}/>,
        style: iconPosition("50%", "70%", "50%"),
        invertedMove: true,
    },
    {
        id: 3,
        icon: <Line color={"#CF4981"}/>,
        style: iconPosition("12%", "50%", "50%"),
        invertedMove: false,
    },
    {
        id: 4,
        icon: <Triangle color={"#0f6898"}/>,
        style: iconPosition("80%", "10%", "10%"),
        invertedMove: true,
    },
    {
        id: 5,
        icon: <Wave color={"yellow"}/>,
        color: "#CF4981",

        invertedMove: false,
    },
    {
        id: 6,
        icon: <Triangle color={"#3a9a5c"}/>,
        style: iconPosition("10%", "10%", "10%"),
        invertedMove: false,
    },
    {
        id: 7,
        icon: <Triangle color={"#49cfb0"}/>,
        style: iconPosition("10%", "80%", "50%"),
        invertedMove: true,
    },
    {
        id: 8,
        icon: <SemiCircle/>,
        style: iconPosition("50%", "20%", "50%"),
        invertedMove: false,
    },
    {
        id: 9,
        icon: <Triangle color={"#49cfb0"}/>,
        style: iconPosition("70%", "90%", "50%"),
        invertedMove: true,
    },
    {
        id: 12,
        icon: <Triangle color={"#49cfb0"}/>,
        style: iconPosition("82%", "50%", "50%"),
        invertedMove: true,
    },
    {
        id: 121,
        icon: <Line/>,
        style: iconPosition("12%", "25%", "60%"),
        invertedMove: false,
    },
];

const AnimatedIcons: FC<AnimatedIconType> = (props) => {
    const {cursorPosition} = props;

    const iconRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        iconRefs.current = iconRefs.current.slice(0, arrayIcons.length);
    }, []);

    const updateIconsPosition = useCallback(() => {
        iconRefs.current.forEach((iconRef, index) => {
            if (iconRef) {
                const horizontalDuration = arrayIcons[index].invertedMove
                    ? -cursorPosition.x
                    : cursorPosition.x;
                const verticalDuration = arrayIcons[index].invertedMove
                    ? -cursorPosition.y
                    : cursorPosition.y;
                iconRef.style.transform = `translate(-50%, -50%) translate(${
                    horizontalDuration * 0.08
                }px, ${verticalDuration * 0.08}px)`;
            }
        });
        requestAnimationFrame(updateIconsPosition);
    }, [cursorPosition]);

    useEffect(() => {
        requestAnimationFrame(updateIconsPosition);
    }, [updateIconsPosition]);

    return (
        <>
            {arrayIcons.map((item, index) => (
                <div
                    key={item.id}
                    className={styles.iconAnimation}
                    ref={(el) => (iconRefs.current[index] = el)}
                    style={{...item.style}}
                >
                    {item.icon}
                </div>
            ))}
        </>
    );
};

export default memo(AnimatedIcons);
