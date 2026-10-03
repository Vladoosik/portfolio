// modules
import React, { FC } from "react";
// styles
import styles from "./styles.module.css";
// assets
import { Download } from "../../assets";
// constants
import { CV_FILE_NAME, CV_URL } from "../../constants/cv";

interface CvLinkProps {
  className?: string;
}

const CvLink: FC<CvLinkProps> = (props) => {
  const { className = "" } = props;

  return (
    <a
      href={CV_URL}
      download={CV_FILE_NAME}
      className={`${styles.link} ${className}`}
    >
      <Download className={styles.icon} color={"currentColor"} width={20} height={20} />
      <span className={styles.text}>Download CV</span>
      <span className={styles.format}>PDF</span>
    </a>
  );
};

export default CvLink;
