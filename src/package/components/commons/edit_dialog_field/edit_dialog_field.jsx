import { createUseStyles } from 'react-jss';
import { styles } from './edit_dialog_field_styles';
import { Typography } from '@wld/ui';

import React from 'react';

const useStyles = createUseStyles(styles);

export const EditDialogField = ({ title, subtitle, children }) => {
    const classes = useStyles();

    return (
        <div className={classes.field}>
            {title && (
                <Typography component="h3" variant="h3">
                    {title}
                </Typography>
            )}
            {subtitle && (
                <Typography component="h4" variant="h4">
                    {subtitle}
                </Typography>
            )}
            {children}
        </div>
    );
};
