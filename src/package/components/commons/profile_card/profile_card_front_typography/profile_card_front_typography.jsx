import React, { forwardRef } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@welovedevs/ui';

import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './profile_card_front_typography_styles';

const useStyles = createUseStyles(styles);

export const ProfileCardFrontTypography = forwardRef(
    ({ component = 'h2', variant = 'h1', overrideColor, children, classes: receivedClasses = {} }, ref) => {
        const [cardVariant] = useCardVariant();
        const classes = useStyles({ variant: cardVariant, overrideColor });

        return (
            <Typography
                containerRef={ref}
                variant={variant}
                component={component}
                classes={{ container: cn(classes.container, receivedClasses.container) }}
            >
                {children}
            </Typography>
        );
    }
);
