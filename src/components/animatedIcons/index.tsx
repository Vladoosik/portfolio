// modules
import React, { FC, memo, useEffect, useRef } from "react";
// styles
import styles from "./styles.module.css";
// types
import {
  AnimatedIconType,
  CursorPositionType,
} from "../../types/AnimatedIconType";
// utils
import { animatedIcons } from "../../constants/iconsArray";

const AnimatedIcons: FC<AnimatedIconType> = ({ cursorPosition }) => {
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);
  const animationFrameRef = useRef<number>();

  const lastPosition = useRef<CursorPositionType>({ x: 0, y: 0 });

  const updateIconsPosition = () => {
    const current = cursorPosition.current;
    if (!current) return;

    const deltaX = current.x - lastPosition.current.x;
    const deltaY = current.y - lastPosition.current.y;

    // если движение минимально, пропускаем кадр
    if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) {
      animationFrameRef.current = requestAnimationFrame(updateIconsPosition);
      return;
    }

    iconRefs.current.forEach((iconRef, index) => {
      if (iconRef) {
        const { invertedMove } = animatedIcons[index];
        const x = invertedMove ? -current.x : current.x;
        const y = invertedMove ? -current.y : current.y;

        iconRef.style.transform = `translate(-50%, -50%) translate(${
          x * 0.08
        }px, ${y * 0.08}px)`;
      }
    });

    lastPosition.current = current;
    animationFrameRef.current = requestAnimationFrame(updateIconsPosition);
  };

  useEffect(() => {
    iconRefs.current = iconRefs.current.slice(0, animatedIcons.length);
    animationFrameRef.current = requestAnimationFrame(updateIconsPosition);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {animatedIcons.map((item, index) => (
        <div
          key={item.id}
          className={styles.iconAnimation}
          ref={(el) => (iconRefs.current[index] = el)}
          style={{ ...item.style }}
        >
          {item.icon}
        </div>
      ))}
    </>
  );
};

export default memo(AnimatedIcons);
