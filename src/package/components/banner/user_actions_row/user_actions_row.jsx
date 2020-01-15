import React from 'react';

import { createUseStyles } from 'react-jss';

import { UserInformations } from './user_informations/user_informations';
import { SocialActions } from './social_actions/social_actions';

import { styles } from './user_actions_row_styles';

const useStyles = createUseStyles(styles);

const UserActionsRowComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <UserInformations />
            <SocialActions />
        </div>
    );
};

export const UserActionsRow = UserActionsRowComponent;
