import React from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

import { Typography } from '@welovedevs/ui';

import { styles } from './profile_card_section_subtitle_styles';

const useStyles = makeStyles(styles);

export const ProfileCardSectionSubtitle = ({ children, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return (
        <Typography
            variant="h4"
            component="h4"
            classes={{ container: cn(classes.container, receivedClasses.container) }}
        >
            {children}
        </Typography>
    );
};
