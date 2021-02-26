import React from 'react';

import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { Tooltip, Typography } from '@welovedevs/ui';

import { styles } from './add_button_dashed_styles';

const useStyles = createUseStyles(styles);

const AddButtonDashedComponent = ({ onClick, title = 'Add', classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return (
        <Tooltip title={title}>
            <button type="button" className={cn(classes.container, receivedClasses.container)} onClick={onClick}>
                <Typography classes={{ container: receivedClasses.typography }} variant="h2">
                    <FormattedMessage id="AddButton.plus" defaultMessage="+" />
                </Typography>
            </button>
        </Tooltip>
    );
};

export const AddButtonDashed = AddButtonDashedComponent;
