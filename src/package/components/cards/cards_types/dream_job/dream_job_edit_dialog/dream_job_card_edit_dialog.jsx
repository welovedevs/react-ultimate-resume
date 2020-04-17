import React, { useCallback, useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormikContext } from 'formik';
import uuid from 'uuid/v4';

import { ListItem } from '@welovedevs/ui';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';
import { CheckboxGroup } from '../../../../commons/checkbox_group/checkbox_group';

import { CONTRACT_TYPES } from '../../../../../utils/enums/contract_types/contract_types';

import { Select } from '../../../../commons/select/select';
import { SalaryField } from './salary_field/salary_field';

import { PerksField } from './perks_field/perks_field';
import { CurrentJobIssuesField } from './current_job_issues_field/current_job_issues_field';
import { LocationPlacesField } from './location_places_field/location_places_field';

import { REMOTE_FREQUENCY } from '../../../../../utils/enums/remote/remote_utils';
import { remoteSelectTranslations } from '../../../../../utils/enums/remote/remote_filter_translations';
import { contractTypesTranslations } from '../../../../../utils/enums/contract_types/contract_types_translations';

import { styles } from './dream_job_card_edit_dialog_styles';

const useStyles = createUseStyles(styles);

const DEFAULT_OBJECT = {};

const DreamJobCardEditDialogComponent = ({ open, onClose, data, onEdit, validationSchema, isEditing }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            open={open}
            onClose={onClose}
            data={data}
            onEdit={onEdit}
            isEditing={isEditing}
            validationSchema={validationSchemaToPass}
            title={<FormattedMessage id="DreamJob.editDialog.title" defaultMessage="Your dream job information" />}
        >
            {(helpers) => <Content helpers={helpers} />}
        </EditDialog>
    );
};

const Content = ({ helpers: { handleValueChange } }) => {
    const { formatMessage } = useIntl();
    const classes = useStyles();
    const { values, errors, handleChange, setFieldValue } = useFormikContext();
    const { averageDailyRate, places, salary, remoteFrequency, contractTypes } = values;

    const perks = values.perks ?? DEFAULT_OBJECT;
    const currentJobIssues = values.currentJobIssues ?? DEFAULT_OBJECT;

    const addPlace = useCallback((place) => handleValueChange('places')(places.concat({ ...place, id: uuid() })), [
        places
    ]);

    const removePlace = useCallback(
        (id) => () => handleValueChange('places')(places.filter((place) => place.id !== id)),
        [places]
    );

    return (
        <>
            <LocationPlacesField
                onChange={handleValueChange('places')}
                error={errors?.places}
                places={places}
                addPlace={addPlace}
                removePlace={removePlace}
            />
            <PerksField
                error={errors?.perks}
                perks={perks}
                onChange={handleValueChange('perks')}
                setFieldValue={setFieldValue}
            />
            <EditDialogField
                error={errors.remoteFrequency}
                title={
                    <FormattedMessage
                        id="DreamJob.editDialog.remoteFrequency.title"
                        defaultMessage="Do you want to work remotely?"
                    />
                }
            >
                <Select
                    fullWidth
                    value={remoteFrequency}
                    onChange={handleChange('remoteFrequency')}
                    textFieldProps={{ variant: 'flat' }}
                    textFieldIconProps={{ className: classes.selectIcon }}
                >
                    {Object.values(REMOTE_FREQUENCY).map((elemValue, index) => (
                        <ListItem key={`remote_frequency_${elemValue}_${index}`} value={elemValue}>
                            {formatMessage(remoteSelectTranslations[elemValue])}
                        </ListItem>
                    ))}
                </Select>
            </EditDialogField>
            <EditDialogField
                error={errors.contractTypes}
                title={
                    <FormattedMessage
                        id="DreamJob.editDialog.contractTypes.title"
                        defaultMessage="What contract types are you currently looking for?"
                    />
                }
            >
                <CheckboxGroup
                    values={CONTRACT_TYPES}
                    translations={contractTypesTranslations}
                    value={contractTypes}
                    name="contractTypes"
                    variant="outlined"
                    onChange={handleValueChange('contractTypes')}
                />
            </EditDialogField>
            <SalaryField
                salary={salary}
                contractTypes={contractTypes}
                averageDailyRate={averageDailyRate}
                errors={errors}
                handleChange={handleChange}
            />
            <CurrentJobIssuesField
                error={errors?.currentJobIssues}
                currentJobIssues={currentJobIssues}
                onChange={handleValueChange('currentJobIssues')}
                setFieldValue={setFieldValue}
            />
        </>
    );
};

export const DreamJobCardEditDialog = DreamJobCardEditDialogComponent;
