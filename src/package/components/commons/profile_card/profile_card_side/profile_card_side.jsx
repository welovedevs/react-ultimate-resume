import React from 'react';

import { createUseStyles } from 'react-jss';
import { AnimatePresence, motion } from 'framer-motion';

import { styles } from './profile_card_side_styles';

const useStyles = createUseStyles(styles);

const ProfileCardSideComponent = ({ children, animationProps }) => {
    const classes = useStyles();

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                className={classes.container}
                transition={{ duration: 1 }}
                variants={animationProps}
                initial="initial"
                animate="enter"
                exit="leave"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export const ProfileCardSide = ProfileCardSideComponent;
