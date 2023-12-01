// modules
import React, {FC} from 'react';
// types
import {SvgTypes} from "@/types/SvgTypes";

const Gmail: FC<SvgTypes> = (props) => {
    const {width, height, className,color, onClick} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            version="1.1"
            viewBox="0 0 21.51 21.51"
            xmlSpace="preserve"
            onClick={onClick}
        >
            <path
                fill={color}
                d="M0 2.963v15.584h21.51V2.963H0zm15.722.548l-4.969 4.966-5.547-4.966h10.516zM2.912 5.993l5.992 5.19-5.992 4.589V5.993zm15.685 12.04H2.912v-1.41l6.403-4.926 1.438 1.438 1.507-1.438 6.337 4.926v1.41zm0-2.261l-5.822-4.725 5.822-5.755v10.48z"
            ></path>
        </svg>
    );
};

export default Gmail;

Gmail.defaultProps = {
    width: 60,
    height: 60,
    color: '#B0B2C3',
}