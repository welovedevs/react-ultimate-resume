import React, { useCallback, useMemo } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import { useFormikContext } from 'formik';

import { ListItem, Tag, TextField, Typography } from '@wld/ui';

import * as uuid from 'uuid/v4';
import { createUseStyles } from 'react-jss';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';
import { CheckboxGroup } from '../../../../commons/checkbox_group/checkbox_group';
import { LocationField } from '../../../../commons/location_field/location_field';

import { CONTRACT_TYPES } from '../../../../../utils/enums/contract_types/contract_types';

import { contractTypesTranslations } from '../../../../../utils/enums/contract_types/contract_types_translations';
import { styles } from './dreamjob_card_edit_dialog_styles';
import { Select } from '../../../../commons/select/select';
import { ReactComponent as TrashIcon } from '../../../../../assets/icons/trash.svg';
import { JobPerks } from '../../../../../utils/enums/job_perks/job_perks_utils';
import { JobPerksTranslations } from '../../../../../utils/enums/job_perks/job_perks_translations';
import { REMOTE_FREQUENCY } from '../../../../../utils/enums/remote/remote_utils';
import { RemoteSelectTranslations } from '../../../../../utils/enums/remote/remote_filter_translations';
import { CheckboxField } from '../../../../commons/checkbox_field/checkbox_group';

const useStyles = createUseStyles(styles);
const checkboxGroupPerks = Object.values(JobPerks).filter(perk => perk !== JobPerks.OTHER);

const DreamjobCardEditDialogContent = ({ helpers: { handleValueChange, toggleValue } }) => {
    const { formatMessage } = useIntl();
    const classes = useStyles();
    const { values, errors, handleChange } = useFormikContext();
    const { places, perks, salary, remoteFrequency, contractTypes } = values;

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
            Object.entries(perks)
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
    return (
        <>
            <EditDialogField
                classes={{
                    containerChildren: classes.flexColumn
                }}
                error={errors?.places}
                title={
                    <FormattedMessage
                        id="Dreamjob.editDialog.location.title"
                        defaultMessage={"What's your dreamjob location?"}
                    />
                }
            >
                <LocationField onLocationSelected={addPlace} fullWidth />
                <div className={classes.currentCities}>
                    {places.map(({ name, id }) => (
                        <Tag className={classes.deleteTag}>
                            <TrashIcon onClick={removePlace(id)} className={classes.deleteIcon} />
                            <Typography>{name}</Typography>
                        </Tag>
                    ))}
                </div>
            </EditDialogField>
            <EditDialogField
                classes={{
                    containerChildren: classes.flexColumn
                }}
                error={errors.perks}
                title={
                    <FormattedMessage
                        id="Dreamjob.editDialog.perks.title"
                        defaultMessage="What perks are important to you ?"
                    />
                }
            >
                <CheckboxGroup
                    values={checkboxGroupPerks}
                    translations={JobPerksTranslations}
                    value={checkedPerks}
                    name="perks"
                    variant="outlined"
                    onChange={onChangePerks}
                />
                <div className={classes.othersCheckbox}>
                    <CheckboxField
                        title={<Typography>{formatMessage(JobPerksTranslations[JobPerks.OTHER])}</Typography>}
                        onClick={toggleOtherPerk}
                        checked={perks[JobPerks.OTHER] !== null}
                        variant="outlined"
                        color="secondary"
                    />
                    {perks[JobPerks.OTHER] !== null && (
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
                title={
                    <FormattedMessage
                        id="Dreamjob.editDialog.salary.title"
                        defaultMessage="What's your wanted salary?"
                    />
                }
                error={errors.salary}
            >
                <TextField onChange={handleChange} name="salary" value={salary} variant="flat" fullWidth />
            </EditDialogField>
            <EditDialogField
                error={errors.remoteFrequency}
                title={
                    <FormattedMessage
                        id="Dreamjob.editDialog.remoteFrequency.title"
                        defaultMessage="Do you want to work remotely"
                    />
                }
            >
                <Select
                    variant="outlined"
                    value={remoteFrequency}
                    onChange={handleChange('remoteFrequency')}
                    textFieldIconProps={{ className: classes.selectIcon }}
                >
                    {Object.values(REMOTE_FREQUENCY).map((elemValue, index) => (
                        <ListItem key={`remote_frequency_${elemValue}_${index}`} value={elemValue}>
                            {formatMessage(RemoteSelectTranslations[elemValue])}
                        </ListItem>
                    ))}
                </Select>
            </EditDialogField>
            <EditDialogField
                error={errors.contractTypes}
                title={
                    <FormattedMessage
                        id="Dreamjob.editDialog.contractTypes.title"
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
        </>
    );
};
export const DreamjobCardEditDialog = ({ data, onEdit, validationSchema, onClose }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            data={data}
            onEdit={onEdit}
            onClose={onClose}
            validationSchema={validationSchemaToPass}
            open
            title={<FormattedMessage id="Dreamjob.editDialog.title" defaultMessage="Your dreamjob information" />}
        >
            {helpers => <DreamjobCardEditDialogContent helpers={helpers} />}
        </EditDialog>
    );
};
