//modules
import React, { FC } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";
// styles
import styles from "./styles.module.css";

interface ColorCircleProps {
  item: {
    color: string;
    id: number;
    name?: string;
  };
}

const ColorCircle: FC<ColorCircleProps> = (props) => {
  const { item } = props;
  const [{ x }, api] = useSpring(() => ({ x: 0 }));
  const bind = useDrag(({ down, movement: [mx] }) =>
    api.start({ x: down ? mx : 0 }),
  );

  return (
    <animated.div className={styles.circleContainer} {...bind()} style={{ x }}>
      <div className={styles.circle} style={{ backgroundColor: item.color }} />
      <p>{item?.name}</p>
    </animated.div>
  );
};

export default ColorCircle;
