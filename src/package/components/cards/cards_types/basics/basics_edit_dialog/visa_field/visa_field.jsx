import React from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@welovedevs/ui';

import { CheckboxField } from '../../../../../commons/checkbox_field/checkbox_group';

import { styles } from './visa_field_styles';

const useStyles = makeStyles(styles);

const VisaFieldComponent = ({ value, toggleValue, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return (
        <CheckboxField
            classes={{
                container: cn(classes.container, receivedClasses.container)
            }}
            variant="outlined"
            color="primary"
            title={
                <Typography>
                    <FormattedMessage
                        id="Basics.editDialog.visaSponsorship"
                        defaultMessage="I require a visa sponsorship"
                    />
                </Typography>
            }
            value={value}
            onClick={toggleValue('visaSponsorship')}
            onChange={toggleValue('visaSponsorship')}
            checked={value}
        />
    );
};

export const VisaField = VisaFieldComponent;
