import React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './user_actions_row_styles';

const useStyles = createUseStyles(styles);

const UserActionsRowComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {'coucou'}
        </div>
    );
}

export const UserActionsRow = UserActionsRowComponent;
