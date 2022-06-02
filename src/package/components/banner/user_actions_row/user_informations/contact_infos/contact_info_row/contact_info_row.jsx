import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { useIntl } from 'react-intl';

import { Tooltip, Typography } from '@welovedevs/ui';

import { styles } from './contact_info_row_styles';

const useStyles = makeStyles(styles);

export const ContactInfoRow = ({ icon: Icon, translation, value }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    return (
        <div className={classes.container}>
            <Tooltip title={formatMessage(translation)}>
                <button className={classes.button} type="button">
                    <Icon className={classes.icon} />
                </button>
            </Tooltip>
            <Typography
                classes={{
                    container: classes.typography
                }}
                color="light"
            >
                {value}
            </Typography>
        </div>
    );
};
