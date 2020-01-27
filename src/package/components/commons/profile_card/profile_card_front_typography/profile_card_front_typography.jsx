import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { useCardVariant } from '../profile_card_hooks/use_card_variant';

import { styles } from './profile_card_front_typography_styles';

const useStyles = createUseStyles(styles);

const ProfileCardFrontTypographyComponent = ({
    component = 'h2',
    level = 'h1',
    overrideColor,
    children,
    customClasses = {}
}) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant, overrideColor });

    return (
        <Typography
            variant={level}
            component={component}
            customClasses={{ container: cn(classes.container, customClasses.container) }}
        >
            {children}
        </Typography>
    );
};

export const ProfileCardFrontTypography = ProfileCardFrontTypographyComponent;
