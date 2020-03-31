import React, { useCallback, useEffect, useState } from 'react';
import { TextField, Typography } from '@welovedevs/ui';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { styles } from './url_failover_field_styles';

const useStyles = createUseStyles(styles);

export const URLFailoverField = ({ onChange, value: inputValue }) => {
    const classes = useStyles();

    const [input, setInput] = useState(null);

    useEffect(() => setInput(inputValue), [inputValue]);

    const handleChange = useCallback(
        (e) => {
            setInput(e.target.value);
            onChange({ url: e.target.value });
        },
        [input]
    );

    return (
        <div className={classes.container}>
            <Typography component="div" className={classes.title}>
                <FormattedMessage id="URLFailover.title" defaultMessage="Enter an URL" />
            </Typography>
            <TextField fullWidth variant="flat" placeholder="URL" onChange={handleChange} name="name" value={input} />
        </div>
    );
};
