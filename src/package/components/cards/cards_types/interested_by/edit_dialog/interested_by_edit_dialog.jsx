import React, { useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { useFormikContext } from 'formik';
import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';
import { TextField } from '@wld/ui';

const BasicsCardEditDialogContent = () => {
    const { values, errors, handleChange } = useFormikContext();
    const { interestedBy } = values;

    return (
        <>
            <EditDialogField error={errors?.interestedBy}>
                <TextField
                    multiline
                    variant="flat"
                    fullWidth
                    rows={4}
                    placeholder={
                        <FormattedMessage
                            id="InterestedBy.editDialog.interestedBy.placeholder"
                            defaultMessage="Vue.js, blockchain, datadog"
                        />
                    }
                    value={interestedBy}
                    onChange={handleChange}
                    name="interestedBy"
                />
            </EditDialogField>
        </>
    );
};
export const InterestedByEditDialog = ({ data, onEdit, validationSchema, onClose }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            data={data}
            onEdit={onEdit}
            onClose={onClose}
            validationSchema={validationSchemaToPass}
            open
            title={
                <FormattedMessage
                    id={'InterestedBy.editDialog.title'}
                    defaultMessage="What technologies are you interested in ?"
                />
            }
        >
            {helpers => <BasicsCardEditDialogContent helpers={helpers} />}
        </EditDialog>
    );
};
