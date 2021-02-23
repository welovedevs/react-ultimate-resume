import React from 'react';

import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

import { styles } from './profile_card_side_styles';

const useStyles = createUseStyles(styles);

export const ProfileCardSide = ({ children, animationProps }) => {
    const classes = useStyles();

    return (
        <motion.div
            className={classes.container}
            variants={animationProps}
            transition={{ type: 'spring', velocity: 1, stiffness: 80 }}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};
