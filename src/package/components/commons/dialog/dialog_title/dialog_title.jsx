import React from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './dialog_title_styles';

const useStyles = createUseStyles(styles);

const DialogTitleComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <Typography variant="h3" component="h3" customClasses={{ container: classes.container }}>
            {children}
        </Typography>
    );
};

export const DialogTitle = DialogTitleComponent;
