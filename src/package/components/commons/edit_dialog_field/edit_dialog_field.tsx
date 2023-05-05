import React from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@welovedevs/ui';

import { styles } from './edit_dialog_field_styles';

// @ts-ignore
const useStyles = makeStyles(styles);

export const EditDialogField: React.FC<{
    title?: React.ReactElement;
    subtitle?: React.ReactElement;
    error?: string | any;
    classes?: {
        container?: string;
        componentErrorContainer?: string;
        component?: string;
    };
}> = ({ title, subtitle = null, children, error = null, classes: receivedClasses = {} }) => {
    const classes = useStyles() as any;
    return (
        <div className={cn(classes.container, receivedClasses.container)}>
            <div className="ds-flex ds-flex-col flex-1">
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
            </div>

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
