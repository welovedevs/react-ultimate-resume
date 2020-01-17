import React from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './profile_card_section_text_styles';

const useStyles = createUseStyles(styles);

const ProfileCardSectionTextComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <Typography component="p" customClasses={{ container: classes.typography }}>
            {children}
        </Typography>
    );
};

export const ProfileCardSectionText = ProfileCardSectionTextComponent;
