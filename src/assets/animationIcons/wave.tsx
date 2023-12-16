// modules
import React, {FC} from "react";
// types
import {SvgTypes} from "../../types/SvgType";

const Wave: FC<SvgTypes> = (props) => {
    const {className, color} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            className={className}
            fill="none"
            viewBox="0 0 28 29"
        >
            <g clipPath="url(#clip0_8_42)">
                <g clipPath="url(#clip1_8_42)">
                    <path
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="3"
                        d="M26.5 14.044c0 7.206-5.84 13.046-13.047 13.046C6.248 27.09.407 21.25.407 14.044"
                    ></path>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_8_42">
                    <path
                        fill="#fff"
                        d="M0 0H28V28H0z"
                        transform="rotate(180 14 14.295)"
                    ></path>
                </clipPath>
                <clipPath id="clip1_8_42">
                    <path
                        fill="#fff"
                        d="M0 0H28V28H0z"
                        transform="rotate(180 14 14.295)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export default Wave;

Wave.defaultProps = {
    color: "#CF4981",
};
