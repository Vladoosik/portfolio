// modules
import React, {FC, useRef} from "react";
import {animated, useSprings} from "@react-spring/web";
import {useDrag} from "@use-gesture/react";
// styles
import styles from "./styles.module.css";
// types
import {ProjectColorType} from "../../types/ProjectColorType";

// circle (160px) + gap (50px) — horizontal pitch of one item
const ITEM = 210;

const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(n, max));

// immutably move an element from one index to another
const move = (arr: number[], from: number, to: number) => {
    const next = arr.slice();
    const [picked] = next.splice(from, 1);
    next.splice(to, 0, picked);
    return next;
};

// spring values for every item given the current order
const fn =
    (order: number[], active = false, originalIndex = 0, curIndex = 0, x = 0) =>
        (index: number) =>
            active && index === originalIndex
                ? {
                    x: curIndex * ITEM + x,
                    scale: 1.1,
                    zIndex: 10,
                    immediate: (key: string) => key === "x" || key === "zIndex",
                }
                : {
                    x: order.indexOf(index) * ITEM,
                    scale: 1,
                    zIndex: 0,
                    immediate: false,
                };

interface ColorCircleListProps {
    data: ProjectColorType[];
}

const ColorCircleList: FC<ColorCircleListProps> = ({data}) => {
    const order = useRef<number[]>(data.map((_, i) => i));
    const [springs, api] = useSprings(data.length, fn(order.current));

    const bind = useDrag(({args: [originalIndex], active, movement: [mx]}) => {
        const curIndex = order.current.indexOf(originalIndex);
        const curCol = clamp(
            Math.round((curIndex * ITEM + mx) / ITEM),
            0,
            data.length - 1,
        );
        const newOrder = move(order.current, curIndex, curCol);
        api.start(fn(newOrder, active, originalIndex, curIndex, mx));
        // commit the new order only once the drag is released
        if (!active) order.current = newOrder;
    });

    return (
        <div className={styles.reorderRow} style={{width: data.length * ITEM}}>
            {springs.map(({zIndex, x}, i) => (
                <animated.div
                    key={i}
                    className={styles.reorderItem}
                    {...bind(i)}
                    style={{zIndex, x, width: ITEM}}
                >
                    <div
                        className={styles.circle}
                        style={{backgroundColor: data[i].color}}
                    />
                    <p>{data[i].name}</p>
                </animated.div>
            ))}
        </div>
    );
};

export default ColorCircleList;
