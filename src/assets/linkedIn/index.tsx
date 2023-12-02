// modules
import React, { FC } from "react";
// types
import { SvgTypes } from "../../types/SvgType";

const LinkedIn: FC<SvgTypes> = (props: any) => {
  const { width, height, color, className, onCLick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      onClick={onCLick}
      viewBox="0 0 56 54"
      className={className}
    >
      <path
        fill={color}
        d="M55.61 32.944v20.334H43.822V34.306c0-4.766-1.705-8.019-5.972-8.019-3.258 0-5.196 2.192-6.049 4.313-.31.758-.391 1.813-.391 2.874v19.804H19.618s.159-32.132 0-35.462H31.41v5.027c-.024.038-.055.078-.077.114h.077v-.114c1.567-2.413 4.365-5.86 10.627-5.86 7.758 0 13.574 5.069 13.574 15.96v.001zM7.283.722C3.249.722.61 3.368.61 6.848c0 3.404 2.562 6.13 6.516 6.13h.079c4.112 0 6.67-2.726 6.67-6.13-.078-3.48-2.558-6.126-6.592-6.126zM1.31 53.278h11.788V17.816H1.31v35.462z"
      ></path>
    </svg>
  );
};

export default LinkedIn;

LinkedIn.defaultProps = {
  width: 58,
  height: 56,
  color: "#B0B2C3",
};
