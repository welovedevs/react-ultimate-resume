import React, { memo, useCallback, useMemo, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { useIntl } from 'react-intl';
import { Twemoji } from 'react-emoji-render';
import MomentUtils from '@date-io/moment';
import isEqual from 'lodash/isEqual';
import pick from 'lodash/pick';

import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { TextField, Typography } from '@wld/ui';

import styles from './year_month_styles';

const useStyles = createUseStyles(styles);

const YearMonthComponent = ({ className, value, onChange, title, error, variant, textfieldProps = {} }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    const [isOpen, setIsOpen] = useState(false);
    const onPickerChange = useCallback(
        newValue => {
            if (newValue === null) {
                onChange(null);
                return;
            }
            setIsOpen(false);
            onChange(newValue);
        },
        [onChange]
    );
    const date = useMemo(() => (value ? new Date(value.year(), value.month()) : new Date()), [value]);
    return (
        <div className={cn(className, classes.fieldsContainer)}>
            <div className={classes.selectContainer}>
                <>
                    {title && (
                        <Typography
                            color="dark"
                            variant="label"
                            component={({ children, ...props }) => <Twemoji svg text={children} {...props} />}
                        >
                            {formatMessage(title)}
                        </Typography>
                    )}
                </>
                <TextField
                    {...textfieldProps}
                    variant={variant}
                    value={value?.format('MMMM YYYY') || ''}
                    onClick={() => setIsOpen(true)}
                />
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker
                        clearable
                        open={isOpen}
                        views={['year', 'month']}
                        minDate={new Date('1980-01-01')}
                        maxDate={new Date()}
                        className={classes.input}
                        InputProps={{ className: classes.pickerInput, disableUnderline: true }}
                        value={date}
                        onChange={onPickerChange}
                        onClose={() => setIsOpen(false)}
                    />
                </MuiPickersUtilsProvider>
                {error && typeof error === 'string' && (
                    <Typography color="danger" variant="helper" component="p">
                        {error}
                    </Typography>
                )}
            </div>
        </div>
    );
};

export const YearMonth = memo(YearMonthComponent, (nextProps, oldProps) =>
    isEqual(pick(nextProps, ['value', 'error', 'onChange']), pick(oldProps, ['value', 'error', 'onChange'])));
