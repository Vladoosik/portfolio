// modules
import React, {FC} from "react";
// types
import {SvgTypes} from "../../types/SvgType";

const ArrowIcon: FC<SvgTypes> = (props) => {
    const {width, height, className, color} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            fill="none"
            viewBox="0 0 36 35"
        >
            <g clipPath="url(#clip0_8_64)">
                <path
                    fill={color}
                    d="M30.76 12.31l-1.558 1.56 2.527 2.528H.95v2.204h30.78l-2.528 2.528 1.559 1.56 5.189-5.19"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_8_64">
                    <path
                        fill={color}
                        d="M0 0H35V35H0z"
                        transform="translate(.95)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export default ArrowIcon;

ArrowIcon.defaultProps = {
    width: 36,
    height: 35,
    color: "#fff",
};
