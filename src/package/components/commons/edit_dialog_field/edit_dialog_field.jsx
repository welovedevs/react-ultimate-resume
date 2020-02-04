import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './edit_dialog_field_styles';

const useStyles = createUseStyles(styles);

export const EditDialogField = ({ title, subtitle, children, error, classes = {} }) => {
    const innerClasses = useStyles();

    return (
        <div className={cn(innerClasses.field, classes.container)}>
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
            <div className={cn(innerClasses.fieldEditComponent, classes.container)}>
                <div className={cn(innerClasses.fieldEditChildren, classes.containerChildren)}>{children}</div>
                {error && (
                    <Typography color="danger" variant="helper" component="p">
                        {error}
                    </Typography>
                )}
            </div>
        </div>
    );
};
