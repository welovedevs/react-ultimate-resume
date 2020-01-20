import React, { useCallback } from 'react';
import { Checkbox, Typography } from '@wld/ui';
import { useIntl } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { checkboxGroupStyles } from './checkbox_group_styles';
import { CheckboxField } from '../checkbox_field/checkbox_group';

const useStyles = createUseStyles(checkboxGroupStyles);

export const CheckboxGroup = ({ values, translations, value = [], name, onChange, color = 'secondary', variant }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    const onFieldClicked = useCallback(
        enumValue => () => {
            if (!value.includes(enumValue)) {
                onChange([...value, enumValue]);
                return;
            }
            onChange(value.filter(checkedItem => checkedItem !== enumValue));
        },
        [value]
    );
    return (
        <div className={classes.checkboxGroup}>
            {values.map((enumValue, index) => (
                <CheckboxField
                    title={<Typography>{formatMessage(translations[enumValue])}</Typography>}
                    onClick={onFieldClicked(enumValue)}
                    checked={value.includes(enumValue)}
                    value={enumValue}
                    variant={variant}
                    color={color}
                    key={`${name}_${index}_${enumValue}`}
                />
            ))}
        </div>
    );
};
