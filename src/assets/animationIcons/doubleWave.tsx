// modules
import React, {FC} from "react";
// types
import {SvgTypes} from "../../types/SvgType";

const DoubleWave: FC<SvgTypes> = (props) => {
    const {className, color, width, height} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            className={className}
            viewBox="0 0 36 37"
        >
            <g clipPath="url(#clip0_8_30)">
                <g clipPath="url(#clip1_8_30)">
                    <path
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="3"
                        d="M9.945 35.024S1.46 31.79 1.5 24.33c.04-7.46 11.73-4.797 11.73-4.797S3.82 17.118 4.18 9.18c.36-7.938 12.784-7.255 12.784-7.255"
                    ></path>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_8_30">
                    <path
                        fill="#fff"
                        d="M0 0H36V36H0z"
                        transform="translate(0 .41)"
                    ></path>
                </clipPath>
                <clipPath id="clip1_8_30">
                    <path
                        fill="#fff"
                        d="M0 0H36V36H0z"
                        transform="translate(0 .41)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export default DoubleWave;

DoubleWave.defaultProps = {
    color: "#CF4981",
    width: 36,
    height: 37,
};
