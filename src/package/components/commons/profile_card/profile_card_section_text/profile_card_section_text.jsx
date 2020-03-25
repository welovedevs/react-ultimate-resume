import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './profile_card_section_text_styles';

const useStyles = createUseStyles(styles);

const ProfileCardSectionTextComponent = ({ children, component, customClasses = {} }) => {
    const classes = useStyles();
    return (
        <Typography component={component} customClasses={{ container: cn(classes.container, customClasses.container) }}>
            {children}
        </Typography>
    );
};

export const ProfileCardSectionText = ProfileCardSectionTextComponent;
