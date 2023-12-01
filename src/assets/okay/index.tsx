'use client'
// modules
import React, {FC} from 'react';
import {motion} from "framer-motion";
// types
import {SvgTypes} from "@/types/SvgTypes";

const pathVariant = {
    hidden : {
        pathLength: 0,
        opacity: 1,
    },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            delay: 0.5,
            pathLength: {duration: 1},
            opacity: { duration: 1},
        }
    }
}


const Okay:FC<SvgTypes> = (props) => {
    const {color, className} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="220"
            fill="none"
            className={className}
            viewBox="0 0 220 220"
        >
            <motion.circle
                variants={pathVariant}
                cx="110"
                cy="110"
                r="107.5"
                fill='none'
                fillOpacity="0.3"
                stroke="#1F2AD1"
                initial={'hidden'}
                animate={'visible'}
                strokeWidth="5"
            />
            <motion.path
                initial={{
                    opacity: 0,
                    pathLength: 0
                }}
                animate={{
                    opacity: 1,
                    pathLength: 1,
                }}
                transition={{
                    delay: 0.5,
                    duration: 1
                }}
                stroke={"#1F2AD1"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="21"
                d="M56.281 102.513L91.83 164.04 168 62.96"
            />
        </svg>
    );
};

export default Okay;