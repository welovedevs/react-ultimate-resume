import React from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './profie_card_title_styles';

const useStyles = createUseStyles(styles);

const ProfileCardTitleComponent = ({ component: Component = 'div', style, children, cardVariant }) => {
    const classes = useStyles({ cardVariant });
    return (
        <Component className={classes.container} style={style}>
            <Typography
                variant="h2"
                component="h3"
                customClasses={{ container: classes.typography }}
            >
                {children}
            </Typography>
        </Component>
    );
};

export const ProfileCardTitle = ProfileCardTitleComponent;
