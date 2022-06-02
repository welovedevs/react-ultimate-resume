import React from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

import { styles } from './profile_card_padded_front_styles';

const useStyles = makeStyles(styles);

export const ProfileCardPaddedFront = ({ children, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return <div className={cn(classes.container, receivedClasses.container)}>{children}</div>;
};
