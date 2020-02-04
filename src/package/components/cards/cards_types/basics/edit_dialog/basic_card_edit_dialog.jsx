import React, { useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormikContext } from 'formik';

import { ListItem, TextField, Typography } from '@wld/ui';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';
import { SliderWithPopper } from '../../../../commons/slider_with_popper/slider_with_popper';
import { CheckboxField } from '../../../../commons/checkbox_field/checkbox_group';
import { LocationField } from '../../../../commons/location_field/location_field';
import { JOB_SEARCH_STATE } from '../../../../../utils/enums/job_serachstate/job_search_state';

import { Select } from '../../../../commons/select/select';

import { styles } from './basic_card_edit_dialog_styles';

import JobSearchStateTranslations from '../../../../../utils/enums/job_serachstate/job_search_state_translations';

const useStyles = createUseStyles(styles);

const BasicsCardEditDialogContent = ({ helpers: { handleValueChange, toggleValue } }) => {
    const { formatMessage } = useIntl();
    const classes = useStyles();
    const { values, errors, handleChange } = useFormikContext();
    const {
        currentCity,
        experienceYears,
        studiesLevel,
        codingYears,
        codingReason,
        visaSponsorship,
        searchState,
        personalDescription,
        summary
    } = values;

    return (
        <>
            <EditDialogField
                error={errors.summary}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.summary.title"
                        defaultMessage="Describe yourself in a few words"
                    />
                }
            >
                <TextField onChange={handleChange} name="summary" value={summary} variant="flat" fullWidth />
            </EditDialogField>
            <EditDialogField
                error={errors?.currentCity?.name || errors?.currentCity}
                title={(
                    <FormattedMessage
                        id="Basics.editDialog.location.title"
                        defaultMessage={"What's your current location?"}
                    />
                )}
            >
                <LocationField
                    value={currentCity?.name}
                    onLocationSelected={handleValueChange('currentCity')}
                    variant="flat"
                />
            </EditDialogField>
            <EditDialogField error={errors.visaSponsorship} classes={{ container: classes.visaSponsorship }}>
                <CheckboxField
                    variant="outlined"
                    title={(
                        <Typography>
                            <FormattedMessage
                                id="Basics.editDialog.visaSponsorship"
                                defaultMessage="I require a visa sponsorship"
                            />
                        </Typography>
                    )}
                    value={visaSponsorship}
                    onClick={toggleValue('visaSponsorship')}
                    onChange={toggleValue('visaSponsorship')}
                    checked={visaSponsorship}
                />
            </EditDialogField>
            <EditDialogField
                error={errors.searchState}
                title={(
                    <FormattedMessage
                        id="Basics.editDialog.searchState.title"
                        defaultMessage="What's your current job search state?"
                    />
                  )}
            >
                <Select
                    variant="outlined"
                    value={searchState}
                    onChange={handleChange('searchState')}
                    textFieldIconProps={{ className: classes.selectIcon }}
                >
                    {JOB_SEARCH_STATE.map((elemValue, index) => (
                        <ListItem key={`jobsearch_state${elemValue}_${index}`} value={elemValue}>
                            {formatMessage(JobSearchStateTranslations[elemValue])}
                        </ListItem>
                    ))}
                </Select>
            </EditDialogField>
            <EditDialogField
                error={errors.codingYears}
                title={(
                    <FormattedMessage
                        id="Basics.editDialog.codingYears.title"
                        defaultMessage="How long have you been coding?"
                    />
                )}
                subtitle={(
                    <FormattedMessage
                        id="Basics.editDialog.codingYears.subtitle"
                        defaultMessage="(every experiences, studies, personal projects, work...)"
                    />
                  )}
            >
                <SliderWithPopper
                    color="primary"
                    name="codingYears"
                    value={codingYears}
                    onChange={handleChange}
                    min={0}
                    max={20}
                />
                <Typography className={classes.sliderLabel}>
                    <FormattedMessage
                        id="Main.lang.years"
                        defaultMessage="{count, plural, one {# year} other {# years}}"
                        values={{ count: codingYears }}
                    />
                </Typography>
            </EditDialogField>
            <EditDialogField
                error={errors.studiesLevel}
                title={(
                    <FormattedMessage
                        id="Basics.editDialog.studiesLevel.title"
                        defaultMessage="What is your highest level of formal education?"
                    />
                )}
                subtitle={(
                    <FormattedMessage
                        id="Basics.editDialog.studiesLevel.subtitle"
                        defaultMessage="Bachelor = 3 years post graduate, Master = 5 years post graduate"
                    />
                )}
            >
                <SliderWithPopper
                    color="primary"
                    name="studiesLevel"
                    value={studiesLevel}
                    onChange={handleChange}
                    min={0}
                    max={12}
                />
                <Typography className={classes.sliderLabel}>
                    <FormattedMessage
                        id="Main.lang.years"
                        defaultMessage="{count, plural, one {# year} other {# years}}"
                        values={{ count: studiesLevel }}
                    />
                </Typography>
            </EditDialogField>
            <EditDialogField
                error={errors.experienceYears}
                title={(
                    <FormattedMessage
                        id="Basics.editDialog.experienceYears.title"
                        defaultMessage="How many years of professional experience do you have?"
                    />
                  )}
                subtitle={(
                    <FormattedMessage
                        id="Basics.editDialog.experienceYears.subtitle"
                        defaultMessage="Tech and non-tech experiences "
                    />
                  )}
            >
                <SliderWithPopper
                    color="primary"
                    name="experienceYears"
                    value={experienceYears}
                    onChange={handleChange}
                    min={0}
                    max={20}
                />
                <Typography className={classes.sliderLabel}>
                    <FormattedMessage
                        id="Main.lang.years"
                        defaultMessage="{count, plural, one {# year} other {# years}}"
                        values={{ count: experienceYears }}
                    />
                </Typography>
            </EditDialogField>
            <EditDialogField
                error={errors.codingReason}
                title={(
                    <FormattedMessage
                        id="Basics.editDialog.codingReason.title"
                        defaultMessage="What motivates you to write code?"
                    />
                  )}
            >
                <TextField onChange={handleChange} name="codingReason" value={codingReason} variant="flat" fullWidth />
            </EditDialogField>
            <EditDialogField
                error={errors.personalDescription}
                title={(
                    <FormattedMessage
                        id="Basics.editDialog.personalDescription.title"
                        defaultMessage="Do you want to tell a bit more about you?"
                    />
                  )}
                subtitle={(
                    <FormattedMessage
                        id="Basics.editDialog.personalDescription.subtitle"
                        defaultMessage="Use this space to describe yourself a bit more ! "
                    />
                  )}
            >
                <TextField
                    multiline
                    rows={4}
                    onChange={handleChange}
                    name="personalDescription"
                    value={personalDescription}
                    variant="flat"
                    fullWidth
                />
            </EditDialogField>
        </>
    );
};
export const BasicsCardEditDialog = ({ data, onEdit, validationSchema, onClose }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            data={data}
            onEdit={onEdit}
            onClose={onClose}
            validationSchema={validationSchemaToPass}
            open
            title={<FormattedMessage id="Basics.editDialog.title" defaultMessage="Your basic information" />}
        >
            {helpers => <BasicsCardEditDialogContent helpers={helpers} />}
        </EditDialog>
    );
};
