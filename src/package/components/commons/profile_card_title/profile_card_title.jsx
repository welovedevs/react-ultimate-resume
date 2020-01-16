import React from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './profie_card_title_styles';

const useStyles = createUseStyles(styles);

const ProfileCardTitleComponent = ({ children, cardVariant }) => {
    const classes = useStyles({ cardVariant });
    return (
        <div className={classes.container}>
            <Typography
                variant="h2"
                component="h3"
                customClasses={{ container: classes.typography }}
            >
                {children}
            </Typography>
        </div>
    );
};

export const ProfileCardTitle = ProfileCardTitleComponent;
