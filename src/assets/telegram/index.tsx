// modules
import React, { FC } from "react";
// types
import { SvgTypes } from "../../types/SvgType";

const Telegram: FC<SvgTypes> = (props) => {
  const { width, height, className, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={className}
      version="1.1"
      viewBox="0 0 189.473 189.473"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M152.531 179.476c-1.48 0-2.95-.438-4.211-1.293l-47.641-32.316-25.552 18.386a7.502 7.502 0 01-11.633-4.174l-12.83-48.622L4.821 93.928a7.501 7.501 0 01-.094-13.975l174.312-69.36a7.503 7.503 0 0110.282 8.408L159.898 173.38a7.499 7.499 0 01-7.367 6.096zm-47.669-48.897l42.437 28.785L170.193 39.24l-82.687 79.566 17.156 11.638c.069.043.135.089.2.135zm-35.327-6.401l5.682 21.53 12.242-8.809-16.03-10.874a7.478 7.478 0 01-1.894-1.847zM28.136 86.782l31.478 12.035a7.5 7.5 0 014.573 5.092l3.992 15.129a7.504 7.504 0 012.259-4.624L149.227 38.6 28.136 86.782z"
      ></path>
    </svg>
  );
};

export default Telegram;

Telegram.defaultProps = {
  width: 50,
  height: 50,
  color: "#B0B2C3",
};
