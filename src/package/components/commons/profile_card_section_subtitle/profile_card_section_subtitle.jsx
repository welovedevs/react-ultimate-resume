import React from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './profile_card_section_subtitle_styles';

const useStyles = createUseStyles(styles);

const ProfileCardSectionSubtitleComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <Typography variant="h4" component="h4" customClasses={{ container: classes.typography }}>
            {children}
        </Typography>
    );
};

export const ProfileCardSectionSubtitle = ProfileCardSectionSubtitleComponent;
