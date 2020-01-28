import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { styles } from './profile_card_padded_front_styles';

const useStyles = createUseStyles(styles);

const ProfileCardPaddedFrontComponent = ({ children, customClasses = {} }) => {
    const classes = useStyles();
    return <div className={cn(classes.container, customClasses.container)}>{children}</div>;
};

export const ProfileCardPaddedFront = ProfileCardPaddedFrontComponent;
