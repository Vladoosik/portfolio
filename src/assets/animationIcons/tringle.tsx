// modules
import React, {FC} from "react";
// types
import {SvgTypes} from "../../types/SvgType";

const Triangle: FC<SvgTypes> = (props) => {
    const {className, color} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            className={className}
            viewBox="0 0 25 25"
        >
            <g clipPath="url(#clip0_8_9)">
                <g clipPath="url(#clip1_8_9)">
                    <g clipPath="url(#clip2_8_9)">
                        <path
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="3"
                            d="M12.163 22l-5.12-8.868-5.12-8.868h20.48l-5.12 8.868L12.163 22z"
                        ></path>
                    </g>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_8_9">
                    <path
                        fill="#fff"
                        d="M0 0H25V25H0z"
                        transform="rotate(180 12.5 12.5)"
                    ></path>
                </clipPath>
                <clipPath id="clip1_8_9">
                    <path
                        fill="#fff"
                        d="M0 0H25V25H0z"
                        transform="rotate(180 12.5 12.5)"
                    ></path>
                </clipPath>
                <clipPath id="clip2_8_9">
                    <path
                        fill="#fff"
                        d="M0 0H25.675V22.236H0z"
                        transform="rotate(180 12.5 12.5)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export default Triangle;

Triangle.defaultProps = {
    color: "#CF4981",
};
