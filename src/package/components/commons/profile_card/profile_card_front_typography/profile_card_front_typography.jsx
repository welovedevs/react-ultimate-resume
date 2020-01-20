import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './profile_card_front_typography_styles';

const useStyles = createUseStyles(styles);

const ProfileCardFrontTypographyComponent = ({ children, customClasses = {} }) => {
    const classes = useStyles();
    return (
        <Typography
            variant="h1"
            component="h2"
            customClasses={{ container: cn(classes.container, customClasses.container) }}
        >
            {children}
        </Typography>
    );
};

export const ProfileCardFrontTypography = ProfileCardFrontTypographyComponent;
