import React from 'react';

import { createUseStyles } from 'react-jss';

import { Button } from '@wld/ui';
import { FormattedMessage } from 'react-intl';

import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg';

import { styles } from './add_button_styles';

const useStyles = createUseStyles(styles);

const AddButtonComponent = ({ color = 'primary', variant = 'outlined', ...other }) => {
    const classes = useStyles({ color });
    return (
        <Button color={color} variant={variant} {...other}>
            <AddIcon className={classes.icon} />
            <FormattedMessage id="Main.Lang.Add" defaultMessage="Add" />
        </Button>
    );
};

export const AddButton = AddButtonComponent;
