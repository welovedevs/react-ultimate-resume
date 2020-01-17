import React from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './profile_card_title_section_title_styles';

const useStyles = createUseStyles(styles);

const ProfileCardSectionTitleComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <Typography variant="h3" component="h3" customClasses={{ container: classes.typography }}>
            {children}
        </Typography>
    );
};

export const ProfileCardSectionTitle = ProfileCardSectionTitleComponent;
