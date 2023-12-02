// modules
import React, { FC } from "react";
// types
import { SvgTypes } from "../../types/SvgType";

const CssIcon: FC<SvgTypes> = (props) => {
  const { width, height, className, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      className={className}
    >
      <path
        fill={color}
        d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
      ></path>
    </svg>
  );
};

export default CssIcon;

CssIcon.defaultProps = {
  width: 64,
  height: 64,
  color: "#444",
};
