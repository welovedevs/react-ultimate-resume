import React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './profile_card_actions_styles';

const useStyles = createUseStyles(styles);

const ProfileCardActionsComponent = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>{children}</div>;
};

export const ProfileCardActions = ProfileCardActionsComponent;
