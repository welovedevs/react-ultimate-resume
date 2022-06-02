import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { motion } from 'framer-motion';

import { styles } from './profile_card_side_styles';

const useStyles = makeStyles(styles);

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
