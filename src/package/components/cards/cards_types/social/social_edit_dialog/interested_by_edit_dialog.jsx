import React, { useMemo } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import { useFormikContext } from 'formik';

import { TextField } from '@welovedevs/ui';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';
import translations from './intested_by_translations';

const InterestedByEditDialogComponent = ({ open, onClose, data, onEdit, validationSchema, isEditing }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            open={open}
            onClose={onClose}
            data={data}
            isEditing={isEditing}
            onEdit={onEdit}
            validationSchema={validationSchemaToPass}
            title={
                <FormattedMessage
                    id="InterestedBy.editDialog.title"
                    defaultMessage="What technologies are you interested in?"
                />
            }
        >
            {(helpers) => <Content helpers={helpers} />}
        </EditDialog>
    );
};

const Content = () => {
    const { values, errors, handleChange } = useFormikContext();
    const { interestedBy } = values;
    const { formatMessage } = useIntl();

    return (
        <>
            <EditDialogField error={errors?.interestedBy}>
                <TextField
                    multiline
                    variant="flat"
                    fullWidth
                    rows={4}
                    placeholder={formatMessage(translations.interestedByPlaceholder)}
                    value={interestedBy}
                    onChange={handleChange}
                    name="interestedBy"
                />
            </EditDialogField>
        </>
    );
};

export const InterestedByEditDialog = InterestedByEditDialogComponent;
