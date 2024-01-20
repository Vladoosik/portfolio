// modules
import React, { FC } from "react";
// styles
import styles from "./styles.module.css";

interface WorkDescriptionProp {
  role: string;
  context: string;
  period: string;
  titleColor?: string;
}

const WorkDescription: FC<WorkDescriptionProp> = (props) => {
  const { role, period, context, titleColor = "#f06449" } = props;

  return (
    <div className={styles.aboutContainer}>
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
