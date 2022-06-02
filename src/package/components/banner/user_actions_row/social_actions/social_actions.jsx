import React from 'react';

import makeStyles from '@mui/styles/makeStyles';

import { styles } from './social_actions_styles';

const useStyles = makeStyles(styles);

const SocialActionsComponent = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>{children}</div>;
};

export const SocialActions = SocialActionsComponent;
