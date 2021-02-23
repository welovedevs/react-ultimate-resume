import React, { useEffect } from 'react';

import { createUseStyles } from 'react-jss';

import { AnimatePresence, motion } from 'framer-motion';

import { useOpenerState } from '../../hooks/use_opener_state';

import { ANIMATED_UNDERLINED_BUTTON_TRANSITIONS_PROPS } from './animated_underlined_button_props';

import { styles } from './animated_underlined_button_styles';
import { DEFAULT_SPRING_TYPE as spring } from '../../../utils/framer_motion/common_types/spring_type';

const useStyles = createUseStyles(styles);

const AnimatedUnderlinedButtonComponent = ({ color = 'primary', onClick, children }) => {
    const classes = useStyles({ color });
    const [isUnderlineDisplayed, handlers] = useOpenerState({
        defaultHandlers: { onClick }
    });

    useEffect(() => {}, []);

    return (
        <button type="button" className={classes.container} onClick={onClick} {...handlers}>
            {children}
            <div className={classes.underlineContainer}>
                <AnimatePresence initial={false}>
                    {isUnderlineDisplayed && (
                        <motion.div
                            variants={ANIMATED_UNDERLINED_BUTTON_TRANSITIONS_PROPS}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            transition={spring}
                            className={classes.underline}
                        />
                    )}
                </AnimatePresence>
            </div>
        </button>
    );
};

export const AnimatedUnderlinedButton = AnimatedUnderlinedButtonComponent;
