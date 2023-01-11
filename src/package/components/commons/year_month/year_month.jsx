import React, { memo, useCallback, useMemo, useState } from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
import { useIntl } from 'react-intl';
import { Twemoji } from 'react-emoji-render';
import isEqual from 'lodash/isEqual';
import pick from 'lodash/pick';

import { TextField, Typography } from '@welovedevs/ui';

import styles from './year_month_styles';

const useStyles = makeStyles(styles);

const YearMonthComponent = ({ className, value, onChange, title, error, variant, textfieldProps = {} }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    const [isOpen, setIsOpen] = useState(false);
    const onPickerChange = useCallback(
        (newValue) => {
            if (newValue === null) {
                onChange(null);
                return;
            }
            onChange(newValue);
        },
        [onChange]
    );
    const date = useMemo(() => moment(value ? new Date(value.year(), value.month()) : null), [value]);
    return (
        <div className={cn(className, classes.fieldsContainer)}>
            <div className={classes.selectContainer}>
                <>
                    {title && (
                        <Typography
                            color="dark"
                            variant="label"
                            component={({ children, ...props }) => (
                                <Twemoji
                                    options={{ baseUrl: '//cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/' }}
                                    svg
                                    text={children}
                                    {...props}
                                />
                            )}
                        >
                            {formatMessage(title)}
                        </Typography>
                    )}
                </>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                        renderInput={(params) => (
                            <TextField
                                {...textfieldProps}
                                {...params}
                                variant={variant}
                                value={value?.format('MMMM YYYY') || ''}
                                onClick={() => setIsOpen(true)}
                            />
                        )}
                        clearable
                        open={isOpen}
                        views={['year', 'month']}
                        minDate={moment('1980-01-01')}
                        maxDate={moment()}
                        className={classes.input}
                        InputProps={{ className: classes.pickerInput, disableUnderline: true }}
                        value={date}
                        onChange={onPickerChange}
                        onClose={() => setIsOpen(false)}
                    />
                </LocalizationProvider>
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
    isEqual(pick(nextProps, ['value', 'error', 'onChange']), pick(oldProps, ['value', 'error', 'onChange']))
);
