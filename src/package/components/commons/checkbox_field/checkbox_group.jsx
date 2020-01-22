import React from 'react';
import { Checkbox } from '@wld/ui';
import { createUseStyles } from 'react-jss';
import { checkboxStyles } from './checkbox_styles';

const useStyles = createUseStyles(checkboxStyles);

export const CheckboxField = ({
    title,
    value,
    checked,
    name,
    onChange,
    color = 'secondary',
    variant = 'raised',
    onClick
}) => {
    const classes = useStyles();

    return (
        <div onClick={onClick} className={classes.checkbox}>
            <Checkbox variant={variant} color={color} checked={checked} value={value} name={name} onChange={onChange} />
            {title}
        </div>
    );
};
