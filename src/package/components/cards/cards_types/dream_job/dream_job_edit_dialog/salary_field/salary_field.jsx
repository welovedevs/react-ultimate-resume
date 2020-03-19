import React from 'react';
import { FormattedMessage } from 'react-intl';
import { TextField } from '@wld/ui';
import { EditDialogField } from '../../../../../commons/edit_dialog_field/edit_dialog_field';

import { hasOnlyFreelanceContract } from '../../../../utils/has_only_freelance_contract';

const SalaryFieldComponent = ({ salary, averageDailyRate, errors, contractTypes, handleChange }) => {
    const isFreelance = hasOnlyFreelanceContract(contractTypes);
    return (
        <EditDialogField
            title={<Title isFreelance={isFreelance} />}
            error={errors?.[isFreelance ? 'averageDailyRate' : 'salary']}
        >
            <TextField
                fullWidth
                onChange={handleChange}
                name={isFreelance ? 'averageDailyRate' : 'salary'}
                value={(isFreelance ? averageDailyRate : salary) ?? 0}
                variant="flat"
            />
        </EditDialogField>
    );
};

const Title = ({ isFreelance }) => {
    if (isFreelance) {
        return (
            <FormattedMessage
                id="DreamJob.editDialog.averageDailyRate.title"
                defaultMessage="What's your average daily rate?"
            />
        );
    }
    return <FormattedMessage id="DreamJob.editDialog.salary.title" defaultMessage="What's your desired salary?" />;
};

export const SalaryField = SalaryFieldComponent;
