import React from 'react';

import { createUseStyles } from 'react-jss';

import { Avatar } from '../../../commons/avatar/avatar';
import { Column } from '../../../commons/column/column';

import { styles } from './user_informations_styles';

const useStyles = createUseStyles(styles);

const UserInformationsComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Avatar />
            <Column>
                {'Marie Bodin'}
            </Column>
        </div>
    );
};

export const UserInformations = UserInformationsComponent;
