import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './profile_card_title_styles';

const useStyles = createUseStyles(styles);

const ProfileCardTitleComponent = ({
    component: Component = 'div',
    style,
    beforeTypography,
    overrideColor,
    children,
    customClasses = {}
}) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant, overrideColor });
    return (
        <Component className={cn(classes.container, customClasses.container)} style={style}>
            {beforeTypography}
            <Typography
                variant="h2"
                component="h3"
                customClasses={{
                    container: cn(classes.typography, customClasses.typography)
                }}
            >
                {children}
            </Typography>
        </Component>
    );
};

export const ProfileCardTitle = ProfileCardTitleComponent;
