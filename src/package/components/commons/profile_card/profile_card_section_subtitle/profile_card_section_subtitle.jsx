import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './profile_card_section_subtitle_styles';

const useStyles = createUseStyles(styles);

const ProfileCardSectionSubtitleComponent = ({ children, customClasses = {} }) => {
    const classes = useStyles();
    return (
        <Typography
            variant="h4"
            component="h4"
            customClasses={{ container: cn(classes.container, customClasses.container) }}
        >
            {children}
        </Typography>
    );
};

export const ProfileCardSectionSubtitle = ProfileCardSectionSubtitleComponent;
