import React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './profile_card_section_styles';

const useStyles = createUseStyles(styles);

const ProfileCardSectionComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export const ProfileCardSection = ProfileCardSectionComponent;
