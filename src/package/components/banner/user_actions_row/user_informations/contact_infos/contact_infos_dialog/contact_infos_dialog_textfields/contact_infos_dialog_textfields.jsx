import React, { memo, useCallback } from 'react';

import { createUseStyles } from 'react-jss';
import { useIntl } from 'react-intl';

import { Tooltip, TextField, TextFieldIcon } from '@welovedevs/ui';

import { CONTACT_INFOS_DATA } from '../../contact_infos_data';

import { styles } from './contact_infos_dialog_textfields_styles';

const useStyles = createUseStyles(styles);

export const ContactInfosDialogTextFields = memo(({ inputs, setInputs }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    const handleChange = useCallback(
        (type) => (event) => {
            setInputs({
                ...inputs,
                [type]: event.target.value
            });
        },
        [inputs]
    );

    return (
        <div className={classes.container}>
            {Object.entries(CONTACT_INFOS_DATA).map(([contactInformationId, { translation, icon: Icon }]) => {
                const value = inputs?.[contactInformationId];
                const translated = formatMessage(translation);
                return (
                    <TextField
                        key={`contact_info_field_${contactInformationId}`}
                        fullWidth
                        classes={{
                            container: classes.textField
                        }}
                        variant="flat"
                        beforeChildren={
                            <Tooltip title={translated}>
                                <TextFieldIcon>
                                    <Icon className={classes.icon} />
                                </TextFieldIcon>
                            </Tooltip>
                        }
                        onChange={handleChange(contactInformationId)}
                        value={value}
                        placeholder={translated}
                    />
                );
            })}
        </div>
    );
});
