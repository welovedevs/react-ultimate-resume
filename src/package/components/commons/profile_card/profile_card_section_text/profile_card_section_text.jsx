import React from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

import { Typography } from '@welovedevs/ui';

import { styles } from './profile_card_section_text_styles';

const useStyles = makeStyles(styles);

export const ProfileCardSectionText = ({ children, component, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return (
        <Typography component={component} classes={{ container: cn(classes.container, receivedClasses.container) }}>
            {children}
        </Typography>
    );
};
