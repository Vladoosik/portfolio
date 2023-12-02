// modules
import React, { FC } from "react";
// types
import { SvgTypes } from "../../types/SvgType";

const Line: FC<SvgTypes> = (props) => {
  const { className, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      className={className}
      viewBox="0 0 24 25"
    >
      <g clipPath="url(#clip0_8_39)">
        <g clipPath="url(#clip1_8_39)">
          <path
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M19.924 5.61L4.43 24.075"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_8_39">
          <path
            fill="#fff"
            d="M0 0H22V22H0z"
            transform="rotate(85 10.733 12.25)"
          ></path>
        </clipPath>
        <clipPath id="clip1_8_39">
          <path
            fill="#fff"
            d="M0 0H22V22H0z"
            transform="rotate(85 10.733 12.25)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Line;

Line.defaultProps = {
  color: "#CF4981",
};
