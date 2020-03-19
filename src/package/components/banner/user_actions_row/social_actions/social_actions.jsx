import React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './social_actions_styles';

const useStyles = createUseStyles(styles);

const SocialActionsComponent = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>{children}</div>;
};

export const SocialActions = SocialActionsComponent;
