// modules
import React, { FC } from "react";
// types
import { SvgTypes } from "../../types/SvgType";

const Download: FC<SvgTypes> = (props) => {
  const { width, height, color, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
    >
      <path fill={color} d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
    </svg>
  );
};

export default Download;

Download.defaultProps = {
  width: 24,
  height: 24,
  color: "black",
};
