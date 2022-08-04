import React from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
import { motion } from 'framer-motion';

import { Tooltip } from '@welovedevs/ui';

import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';

import { TRANSITION_PROPS } from './bouncing_round_button_props';

import { styles } from './bouncing_round_button_styles';

const useStyles = makeStyles(styles);

const BouncingRoundButtonComponent = ({
    title = 'Click me!',
    tooltipPlacement = 'top',
    onClick,
    icon: Icon = EditIcon,
    classes: receivedClasses = {},
    ...others
}) => {
    const classes = useStyles();

    return (
        <Tooltip title={title} placement={tooltipPlacement}>
            <motion.button
                type="button"
                className={cn(classes.container, receivedClasses.container)}
                onClick={onClick}
                variants={TRANSITION_PROPS}
                initial="default"
                whileTap="active"
                {...others}
            >
                <Icon className={cn(classes.icon, classes.iconContainer)} />
            </motion.button>
        </Tooltip>
    );
};

export const BouncingRoundButton = BouncingRoundButtonComponent;
