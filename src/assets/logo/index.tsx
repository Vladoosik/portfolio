// modules
import React from 'react';
// types
import {SvgTypes} from "@/types/SvgTypes";

const Logo = (props: SvgTypes) => {
    const {width, height, className, color} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            version="1"
            viewBox="0 0 369 342"
        >
            <path
                fill={color}
                d="M461 2778c30-57 1021-1772 1028-1780 3-3 165 269 358 605l353 612-238 3c-220 2-238 1-252-16-8-10-60-96-114-190-54-95-101-172-105-172-3 1-130 216-281 480l-275 479-243 1H449l12-22z"
                transform="matrix(.1 0 0 -.1 0 342)"
            ></path>
            <path
                fill={color}
                d="M1932 2593l-120-208 334-3c184-1 334-4 334-6 0-3-201-352-446-777-337-584-444-776-437-789 22-46 229-400 233-400 3 0 170 287 372 638 202 350 505 876 674 1167 168 292 312 542 320 558l15 27H2052l-120-207z"
                transform="matrix(.1 0 0 -.1 0 342)"
            />
        </svg>
    )
};

export default Logo;

Logo.defaultProps = {
    width: 69,
    height: 62,
    color: 'white'
}