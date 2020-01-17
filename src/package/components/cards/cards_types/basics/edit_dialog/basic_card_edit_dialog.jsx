import React from 'react';

import { useFormikContext } from 'formik';
import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';
import { SliderWithPopper } from '../../../../commons/slider_with_popper/slider_with_popper';
import { FormattedMessage } from 'react-intl';

const BasicsCardEditDialogContent = () => {
    const { values, handleChange } = useFormikContext();
    return (
        <>
            <EditDialogField
                title={
                    <FormattedMessage
                        id="Basics.editDialog.experienceYears.title"
                        defaultMessage={'Professional experience years'}
                    />
                }
                subtitle={
                    <FormattedMessage
                        id="Basics.editDialog.experienceYears.subtitle"
                        defaultMessage={'Your overall experience years'}
                    />
                }
            >
                <SliderWithPopper
                    color="primary"
                    name="experienceYears"
                    value={values.experienceYears}
                    onChange={handleChange}
                    min={0}
                    max={20}
                />
            </EditDialogField>
        </>
    );
};
export const BasicsCardEditDialog = ({ data, onEdit }) => (
    <EditDialog
        data={data}
        onEdit={onEdit}
        open
        title={<FormattedMessage id={'Basics.editDialog.title'} defaultMessage="Your basic information" />}
    >
        <BasicsCardEditDialogContent />
    </EditDialog>
);
