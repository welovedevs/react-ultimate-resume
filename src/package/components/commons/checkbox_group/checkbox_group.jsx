import React, { useCallback } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { useIntl } from 'react-intl';

import { Typography } from '@wld/ui';

import { CheckboxField } from '../checkbox_field/checkbox_group';

import { styles } from './checkbox_group_styles';

const useStyles = createUseStyles(styles);

const CheckboxGroupComponent = ({
    values,
    translations,
    value = [],
    name,
    onChange,
    color = 'secondary',
    rows = 2,
    variant,
    classes: receivedClasses = {}
}) => {
    const classes = useStyles({ rows });
    const { formatMessage } = useIntl();

    const onFieldClicked = useCallback(
        enumValue => () => {
            if (typeof onChange !== 'function') {
                return;
            }
            if (!value.includes(enumValue)) {
                onChange([...value, enumValue]);
                return;
            }
            onChange(value.filter(checkedItem => checkedItem !== enumValue));
        },
        [value, onChange]
    );

    return (
        <div className={cn(classes.container, receivedClasses.container)}>
            {values.map((enumValue, index) => (
                <CheckboxField
                    classes={{
                        container: cn(classes.checkboxField, receivedClasses.checkboxField)
                    }}
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

export const CheckboxGroup = CheckboxGroupComponent;
