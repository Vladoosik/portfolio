// modules
import React, {FC} from 'react';
// types
import {SvgTypes} from "@/types/SvgTypes";

const SemiCircle: FC<SvgTypes> = (props) => {
    const {className, color} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            className={className}
            viewBox="0 0 40 40"
        >
            <g clipPath="url(#clip0_8_25)">
                <path
                    stroke={color}
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M10.775 11.546c5.095-5.095 13.354-5.095 18.45.001 5.095 5.095 5.096 13.354 0 18.45"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_8_25">
                    <path
                        fill="#fff"
                        d="M0 0H28V28H0z"
                        transform="rotate(45 9.759 24.242)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export default SemiCircle;

SemiCircle.defaultProps = {
    color: "#CF4981",
}