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
                <Typography component="h2" variant="h4">
                    {title}
                </Typography>
            )}
            {subtitle && (
                <Typography component="div" variant="body">
                    {subtitle}
                </Typography>
            )}
            <div className={classes.fieldEditComponent}>{children}</div>
        </div>
    );
};
