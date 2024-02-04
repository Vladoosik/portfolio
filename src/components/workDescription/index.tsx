// modules
import React, { CSSProperties, FC } from "react";
// styles
import styles from "./styles.module.css";

interface WorkDescriptionProp {
  role: string;
  context: string;
  period: string;
  titleColor?: string;
  style?: CSSProperties;
}

const WorkDescription: FC<WorkDescriptionProp> = (props) => {
  const { role, period, context, titleColor = "#f06449", style } = props;

  return (
    <div className={styles.aboutContainer} style={style}>
      <div>
        <span>
          <strong style={{ color: titleColor }}>Role</strong>
          {role}
        </span>
      </div>
      <div>
        <span>
          <strong style={{ color: titleColor }}>Context</strong>
          {context}
        </span>
      </div>
      <div>
        <span>
          <strong style={{ color: titleColor }}>Period</strong>
          {period}
        </span>
      </div>
    </div>
  );
};

export default WorkDescription;
