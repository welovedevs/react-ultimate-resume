import React from 'react';

import makeStyles from '@mui/styles/makeStyles';

import { styles } from './profile_card_actions_styles';

const useStyles = makeStyles(styles);

const ProfileCardActionsComponent = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>{children}</div>;
};

export const ProfileCardActions = ProfileCardActionsComponent;
