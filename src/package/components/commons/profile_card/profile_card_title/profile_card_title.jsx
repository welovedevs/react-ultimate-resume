import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './profile_card_title_styles';

const useStyles = createUseStyles(styles);

const ProfileCardTitleComponent = ({ component: Component = 'div', style, beforeTypography, children, cardVariant, customClasses = {} }) => {
    const classes = useStyles({ cardVariant });
    return (
        <Component className={cn(classes.container, customClasses.container)} style={style}>
            {beforeTypography}
            <Typography
                variant="h2"
                component="h3"
                customClasses={{ container: cn(classes.typography, customClasses.typography) }}
            >
                {children}
            </Typography>
        </Component>
    );
};

export const ProfileCardTitle = ProfileCardTitleComponent;
