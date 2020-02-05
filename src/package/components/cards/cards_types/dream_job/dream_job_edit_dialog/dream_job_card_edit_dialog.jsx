import React, { useCallback, useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormikContext } from 'formik';
import uuid from 'uuid/v4';

import { ListItem, TextField, Typography } from '@wld/ui';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';
import { CheckboxGroup } from '../../../../commons/checkbox_group/checkbox_group';

import { CONTRACT_TYPES } from '../../../../../utils/enums/contract_types/contract_types';

import { Select } from '../../../../commons/select/select';
import { JobPerks } from '../../../../../utils/enums/job_perks/job_perks_utils';
import { CheckboxField } from '../../../../commons/checkbox_field/checkbox_group';
import { LocationPlacesField } from './location_places_field/location_places_field';

import { REMOTE_FREQUENCY } from '../../../../../utils/enums/remote/remote_utils';
import { remoteSelectTranslations } from '../../../../../utils/enums/remote/remote_filter_translations';
import { contractTypesTranslations } from '../../../../../utils/enums/contract_types/contract_types_translations';

import { jobPerksTranslations } from '../../../../../utils/enums/job_perks/job_perks_translations';

import { styles } from './dream_job_card_edit_dialog_styles';

const useStyles = createUseStyles(styles);

const checkboxGroupPerks = Object.values(JobPerks).filter(perk => perk !== JobPerks.OTHER);

const DEFAULT_OBJECT = {};

const DreamJobCardEditDialogComponent = ({ open, onClose, data, onEdit, validationSchema }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            open={open}
            onClose={onClose}
            data={data}
            onEdit={onEdit}
            validationSchema={validationSchemaToPass}
            title={<FormattedMessage id="DreamJob.editDialog.title" defaultMessage="Your dream job information" />}
        >
            {helpers => <Content helpers={helpers} />}
        </EditDialog>
    );
};

const Content = ({ helpers: { handleValueChange } }) => {
    const { formatMessage } = useIntl();
    const classes = useStyles();
    const { values, errors, handleChange } = useFormikContext();
    const { places, salary, remoteFrequency, contractTypes } = values;

    const perks = values.perks || DEFAULT_OBJECT;

    const addPlace = useCallback(place => handleValueChange('places')(places.concat({ ...place, id: uuid() })), [
        places
    ]);

    const removePlace = useCallback(id => () => handleValueChange('places')(places.filter(place => place.id !== id)), [
        places
    ]);

    const onChangePerks = useCallback(
        newPerks =>
            handleValueChange('perks')({
                ...newPerks.reduce((acc, perk) => {
                    acc[perk] = true;
                    return acc;
                }, {}),
                [JobPerks.OTHER]: perks[JobPerks.OTHER]
            }),
        [perks]
    );

    const checkedPerks = useMemo(
        () =>
            Object.entries(perks || {})
                .filter(([, value]) => value === true)
                .map(([perk]) => perk),
        [perks]
    );
    const toggleOtherPerk = useCallback(
        () =>
            handleValueChange('perks')({
                ...perks,
                [JobPerks.OTHER]: perks[JobPerks.OTHER] !== null ? null : ''
            }),
        [perks]
    );

    const otherPerk = useMemo(() => perks[JobPerks.OTHER] ?? null, [perks]);
    return (
        <>
            <LocationPlacesField
                error={errors?.places}
                places={places}
                addPlace={addPlace}
                removePlace={removePlace}
            />
            <EditDialogField
                classes={{
                    containerChildren: classes.column
                }}
                error={errors.perks}
                title={(
                    <FormattedMessage
                        id="DreamJob.editDialog.perks.title"
                        defaultMessage="What perks are important to you ?"
                    />
                )}
            >
                <CheckboxGroup
                    values={checkboxGroupPerks}
                    translations={jobPerksTranslations}
                    value={checkedPerks}
                    name="perks"
                    variant="outlined"
                    onChange={onChangePerks}
                />
                <div className={classes.othersCheckbox}>
                    <CheckboxField
                        title={<Typography>{formatMessage(jobPerksTranslations[JobPerks.OTHER])}</Typography>}
                        onClick={toggleOtherPerk}
                        checked={otherPerk !== null}
                        variant="outlined"
                        color="secondary"
                    />
                    {otherPerk !== null && (
                        <TextField
                            onChange={handleChange}
                            name={`perks[${JobPerks.OTHER}]`}
                            value={perks[JobPerks.OTHER]}
                            variant="flat"
                        />
                    )}
                </div>
            </EditDialogField>
            <EditDialogField
                title={(
                    <FormattedMessage
                        id="DreamJob.editDialog.salary.title"
                        defaultMessage="What's your wanted salary?"
                    />
                  )}
                error={errors.salary}
            >
                <TextField onChange={handleChange} name="salary" value={salary} variant="flat" fullWidth />
            </EditDialogField>
            <EditDialogField
                error={errors.remoteFrequency}
                title={(
                    <FormattedMessage
                        id="DreamJob.editDialog.remoteFrequency.title"
                        defaultMessage="Do you want to work remotely"
                    />
                )}
            >
                <Select
                    variant="outlined"
                    value={remoteFrequency}
                    onChange={handleChange('remoteFrequency')}
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
                title={(
                    <FormattedMessage
                        id="DreamJob.editDialog.contractTypes.title"
                        defaultMessage="What contract types are you currently looking for?"
                    />
                  )}
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
        </>
    );
};

export const DreamJobCardEditDialog = DreamJobCardEditDialogComponent;
