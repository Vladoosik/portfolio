// modules
import React, {CSSProperties, FC, useEffect, useRef, useState} from "react";
import {animated, useSprings} from "@react-spring/web";
import {useDrag} from "@use-gesture/react";
// styles
import styles from "./styles.module.css";
// types
import {ProjectColorType} from "../../types/ProjectColorType";

// circle (160px) + gap (50px) — horizontal pitch of one item
const MAX_ITEM = 210;
// side padding kept around the row on narrow screens
const ROW_GUTTER = 32;

// pitch of one item that lets the whole row fit into the viewport
const getItemSize = (count: number) =>
    Math.min(MAX_ITEM, Math.floor((window.innerWidth - ROW_GUTTER) / count));

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
    (order: number[], item: number, active = false, originalIndex = 0, curIndex = 0, x = 0) =>
        (index: number) =>
            active && index === originalIndex
                ? {
                    x: curIndex * item + x,
                    scale: 1.1,
                    zIndex: 10,
                    immediate: (key: string) => key === "x" || key === "zIndex",
                }
                : {
                    x: order.indexOf(index) * item,
                    scale: 1,
                    zIndex: 0,
                    immediate: false,
                };

interface ColorCircleListProps {
    data: ProjectColorType[];
}

const ColorCircleList: FC<ColorCircleListProps> = ({data}) => {
    const order = useRef<number[]>(data.map((_, i) => i));
    const [item, setItem] = useState<number>(() => getItemSize(data.length));
    const [springs, api] = useSprings(data.length, fn(order.current, item));

    useEffect(() => {
        const handleResize = () => setItem(getItemSize(data.length));
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [data.length]);

    useEffect(() => {
        api.start(fn(order.current, item));
    }, [api, item]);

    const bind = useDrag(({args: [originalIndex], active, movement: [mx]}) => {
        const curIndex = order.current.indexOf(originalIndex);
        const curCol = clamp(
            Math.round((curIndex * item + mx) / item),
            0,
            data.length - 1,
        );
        const newOrder = move(order.current, curIndex, curCol);
        api.start(fn(newOrder, item, active, originalIndex, curIndex, mx));
        // commit the new order only once the drag is released
        if (!active) order.current = newOrder;
    });

    return (
        <div
            className={styles.reorderRow}
            style={{width: data.length * item, "--item": `${item}px`} as CSSProperties}
        >
            {springs.map(({zIndex, x}, i) => (
                <animated.div
                    key={i}
                    className={styles.reorderItem}
                    {...bind(i)}
                    style={{zIndex, x, width: item}}
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
