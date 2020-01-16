import React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './profile_card_content_styles';

const useStyles = createUseStyles(styles);

const ProfileCardContentComponent = ({ children }) => {
    const classes = useStyles(styles);
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export const ProfileCardContent = ProfileCardContentComponent;
