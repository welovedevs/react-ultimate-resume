import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@welovedevs/ui';

import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './profile_card_title_styles';

const useStyles = createUseStyles(styles);

export const ProfileCardTitle = ({
    component: Component = 'div',
    style,
    beforeTypography,
    overrideColor,
    children,
    classes: receivedClasses = {}
}) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant, overrideColor });
    return (
        <Component className={cn(classes.container, receivedClasses.container)} style={style}>
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
    );
};
