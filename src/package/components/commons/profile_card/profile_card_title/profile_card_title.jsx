import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@welovedevs/ui';

import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './profile_card_title_styles';
import { AnimatePresence } from 'framer-motion';

const useStyles = createUseStyles(styles);

export const ProfileCardTitle = ({
    component: Component = 'div',
    motionSettings,
    beforeTypography,
    overrideColor,
    children,
    classes: receivedClasses = {}
}) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant, overrideColor });
    return (
        <AnimatePresence>
            <Component
                className={cn(classes.container, receivedClasses.container)}
                {...motionSettings}
            >
                {beforeTypography}
                <Typography
                    variant="h2"
                    component="h3"
                    classes={{
                        container: cn(classes.typography, receivedClasses.typography)
                    }}
                >
                    {children}
                </Typography>
            </Component>
        </AnimatePresence>
    );
};
