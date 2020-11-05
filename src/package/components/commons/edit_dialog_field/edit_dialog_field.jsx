import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@welovedevs/ui';

import { styles } from './edit_dialog_field_styles';

const useStyles = createUseStyles(styles);

const EditDialogFieldComponent = ({ title, subtitle, children, error, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return (
        <div className={cn(classes.container, receivedClasses.container)}>
            {title && (
                <Typography classes={{ container: classes.title }} component="h3" variant="h4" color="dark">
                    {title}
                </Typography>
            )}
            {subtitle && (
                <Typography classes={{ container: classes.subtitle }} component="p" variant="body2" color="dark">
                    {subtitle}
                </Typography>
            )}
            <div className={cn(classes.componentErrorContainer, receivedClasses.componentErrorContainer)}>
                <div className={cn(classes.component, receivedClasses.component)}>{children}</div>
                {error && (
                    <Typography color="danger" variant="helper" component="p">
                        {typeof error === 'string' ? (
                            error
                        ) : (
                            <FormattedMessage id="Main.lang.error" defaultMessage="Error" />
                        )}
                    </Typography>
                )}
            </div>
        </div>
    );
};

export const EditDialogField = EditDialogFieldComponent;
