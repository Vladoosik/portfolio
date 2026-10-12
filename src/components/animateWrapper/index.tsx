// modules
import {motion, useAnimation, useInView, useReducedMotion} from 'framer-motion';
import React, {JSX, useEffect, useRef} from 'react';

type WrapperProps = {
    children: JSX.Element,
    width?: 'fit-content' | '100%'
    background?: string
}
const AnimateWrapper = (props: WrapperProps) => {
    const {children, width = 'fit-content', background = 'rgba(40, 61, 145, 0.85)'} = props;
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const reduceMotion = useReducedMotion();

    const mainControl = useAnimation();
    const slideControl = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControl.start("visible")
            slideControl.start("visible")
        }
    }, [isInView, mainControl]);

    return (
        <div ref={ref} style={{position: 'relative', width}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial={'hidden'}
                animate={mainControl}
                transition={{duration: 0.5, delay: 0.4}}
            >
                {children}
            </motion.div>
            {/* only the sliding cover is clipped, so shadows of the content stay visible */}
            {!reduceMotion && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        zIndex: 20,
                    }}
                >
                    <motion.div
                        variants={{
                            hidden: {left: 0},
                            visible: {left: '100%'}
                        }}
                        initial={'hidden'}
                        animate={slideControl}
                        transition={{duration: 0.5, ease: 'easeIn', delay: 0.2}}
                        style={{
                            position: 'absolute',
                            top: 4,
                            bottom: 4,
                            left: 0,
                            width: '100%',
                            background,
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default AnimateWrapper;
