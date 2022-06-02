import React from 'react';

import makeStyles from '@mui/styles/makeStyles';

import cn from 'classnames';

import { Typography } from '@welovedevs/ui';

import { styles } from './dialog_title_styles';

const useStyles = makeStyles(styles);

const DialogTitleComponent = ({ children, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return (
        <Typography variant="h3" component="h3" classes={{ container: cn(classes.container, receivedClasses.root) }}>
            {children}
        </Typography>
    );
};

export const DialogTitle = DialogTitleComponent;
