// modules
import React, { FC, memo, useCallback, useEffect, useRef } from "react";
// styles
import styles from "./styles.module.css";
// types
import { AnimatedIconType } from "../../types/AnimatedIconType";
// utils
import { animatedIcons } from "../../constants/iconsArray";

const AnimatedIcons: FC<AnimatedIconType> = (props) => {
  const { cursorPosition } = props;

  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    iconRefs.current = iconRefs.current.slice(0, animatedIcons.length);
  }, []);

  const updateIconsPosition = useCallback(() => {
    iconRefs.current.forEach((iconRef, index) => {
      if (iconRef) {
        const horizontalDuration = animatedIcons[index].invertedMove
          ? -cursorPosition.x
          : cursorPosition.x;
        const verticalDuration = animatedIcons[index].invertedMove
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
