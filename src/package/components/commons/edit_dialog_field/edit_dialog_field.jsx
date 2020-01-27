import { createUseStyles } from 'react-jss';
import { styles } from './edit_dialog_field_styles';
import { Typography } from '@wld/ui';
import cn from 'classnames';

import React from 'react';

const useStyles = createUseStyles(styles);

export const EditDialogField = ({ title, subtitle, children, error, customClasses = {} }) => {
    const classes = useStyles();

    return (
        <div className={cn(classes.field, customClasses.container)}>
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
            <div className={cn(classes.fieldEditComponent, customClasses.container)}>
                <div className={classes.fieldEditChildren}>{children}</div>
                {error && (
                    <Typography color="danger" variant="helper" component="p">
                        {error}
                    </Typography>
                )}
            </div>
        </div>
    );
};
