import React from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

import { Checkbox } from '@welovedevs/ui';

import { checkboxStyles } from './checkbox_styles';

const useStyles = makeStyles(checkboxStyles);

export const CheckboxField = ({
    title,
    value = null,
    checked,
    name = null,
    onChange = null,
    color = 'primary',
    variant = 'raised',
    onClick,
    classes: receivedClasses = {}
}) => {
    const classes = useStyles();

    return (
        <button className={cn(classes.container, receivedClasses.container)} type="button" onClick={onClick}>
            <Checkbox
                className={classes.checkbox}
                variant={variant}
                color={color}
                checked={checked}
                value={value}
                name={name}
                onChange={onChange}
            />
            {title}
        </button>
    );
};
