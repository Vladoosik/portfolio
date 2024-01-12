//modules
import React, { FC } from "react";
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
  return (
    <div className={styles.circleContainer}>
      <div className={styles.circle} style={{ backgroundColor: item.color }} />
      <p>{item?.name}</p>
    </div>
  );
};

export default ColorCircle;
