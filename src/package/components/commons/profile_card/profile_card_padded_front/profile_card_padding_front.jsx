import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { styles } from './profile_card_padded_front_styles';

const useStyles = createUseStyles(styles);

export const ProfileCardPaddedFront = ({ children, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return <div className={cn(classes.container, receivedClasses.container)}>{children}</div>;
};
