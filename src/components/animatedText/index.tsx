// modules
import {motion} from 'framer-motion';
import React, {FC, memo} from 'react';


interface AnimatedTextProps {
    text: string
    className?: string
}

const defaultAnimation = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    }
}

const AnimatedText: FC<AnimatedTextProps> = (props) => {
    const {text, className} = props;
    return (
        <motion.span
            initial={'initial'}
            animate={'visible'}
            transition={{staggerChildren: 0.07, delayChildren: 0.5}}
            aria-hidden
            className={className}
        >
            {text.split('').map((letter, index) =>
                <motion.span variants={defaultAnimation} key={index}>{letter}</motion.span>
            )}
        </motion.span>
    );
};

export default memo(AnimatedText);