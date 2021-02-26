import React, { useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormikContext } from 'formik';

import { TextField, Typography } from '@welovedevs/ui';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';
import { SliderWithPopper } from '../../../../commons/slider_with_popper/slider_with_popper';
import { VisaField } from './visa_field/visa_field';
import { LocationField } from '../../../../commons/location_field/location_field';
import { JobSearchStateField } from './job_search_state_field/job_search_state_field';

import { styles } from './basic_edit_dialog_styles';

const useStyles = createUseStyles(styles);

const BasicsCardEditDialogComponent = ({ open, onClose, data, onEdit, validationSchema, isEditing }) => {
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
            title={<FormattedMessage id="Basics.editDialog.title" defaultMessage="Your basic informations" />}
        >
            {(helpers) => <Content helpers={helpers} />}
        </EditDialog>
    );
};

const Content = ({ helpers: { handleValueChange, toggleValue } }) => {
    const classes = useStyles();
    const { values, errors, handleChange } = useFormikContext();
    const {
        currentCity,
        codeExperienceYears,
        otherExperienceYears,
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
                error={errors.personalDescription}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.personalDescription.title"
                        defaultMessage="Do you want to tell a bit more about you?"
                    />
                }
                subtitle={
                    <FormattedMessage
                        id="Basics.editDialog.personalDescription.subtitle"
                        defaultMessage="Use this space to describe yourself a bit more ! "
                    />
                }
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
            <EditDialogField
                classes={{
                    container: classes.field
                }}
                error={errors?.summary}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.summary.title"
                        defaultMessage="Describe yourself in a few words."
                    />
                }
            >
                <TextField fullWidth variant="flat" onChange={handleChange} value={summary} name="summary" />
            </EditDialogField>
            <EditDialogField
                error={errors?.currentCity?.name || errors?.currentCity}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.location.title"
                        defaultMessage="What's your current location?"
                    />
                }
            >
                <LocationField
                    fullWidth
                    variant="flat"
                    value={currentCity?.name}
                    onLocationSelected={handleValueChange('currentCity')}
                />
                <VisaField value={visaSponsorship} toggleValue={toggleValue} />
            </EditDialogField>
            <EditDialogField
                error={errors.searchState}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.searchState.title"
                        defaultMessage="What's your current job search state?"
                    />
                }
            >
                <JobSearchStateField value={searchState} handleChange={handleChange} />
            </EditDialogField>
            <EditDialogField
                error={errors.codingYears}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.codingYears.title"
                        defaultMessage="How long have you been coding?"
                    />
                }
                subtitle={
                    <FormattedMessage
                        id="Basics.editDialog.codingYears.subtitle"
                        defaultMessage="(every experiences, studies, personal projects, work...)"
                    />
                }
            >
                <div className={classes.valueSliderContainer}>
                    <Typography className={classes.sliderValue}>
                        <FormattedMessage
                            id="Main.lang.years"
                            defaultMessage="{countNode} year{count, plural, one {} other {s}}"
                            values={{
                                count: codingYears,
                                countNode: <span className={classes.bolden}>{codingYears}</span>
                            }}
                        />
                    </Typography>
                    <SliderWithPopper
                        color="primary"
                        name="codingYears"
                        value={codingYears}
                        step={0.5}
                        onChange={handleChange}
                        min={0}
                        max={20}
                        popperCardProps={{
                            classes: {
                                container: classes.sliderPopperCard,
                                arrowContainer: classes.sliderPopperCardArrowContainer
                            }
                        }}
                    />
                </div>
            </EditDialogField>
            <EditDialogField
                error={errors.studiesLevel}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.studiesLevel.title"
                        defaultMessage="What is your highest level of formal education?"
                    />
                }
                subtitle={
                    <FormattedMessage
                        id="Basics.editDialog.studiesLevel.subtitle"
                        defaultMessage="Bachelor = 3 years post graduate. Master = 5 years post graduate."
                    />
                }
            >
                <div className={classes.valueSliderContainer}>
                    <Typography className={classes.sliderValue}>
                        <FormattedMessage
                            id="Main.lang.years"
                            defaultMessage="{countNode} year{count, plural, one {} other {s}}"
                            values={{
                                count: studiesLevel,
                                countNode: <span className={classes.bolden}>{studiesLevel}</span>
                            }}
                        />
                    </Typography>
                    <SliderWithPopper
                        color="primary"
                        name="studiesLevel"
                        value={studiesLevel}
                        onChange={handleChange}
                        min={0}
                        max={12}
                        popperCardProps={{
                            classes: {
                                container: classes.sliderPopperCard,
                                arrowContainer: classes.sliderPopperCardArrowContainer
                            }
                        }}
                    />
                </div>
            </EditDialogField>
            <EditDialogField
                error={errors.codeExperienceYears}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.codeExperienceYears.title"
                        defaultMessage="How many years of professional experience as a developer do you have?"
                    />
                }
                subtitle={
                    <FormattedMessage
                        id="Basics.editDialog.codeExperienceYears.subtitle"
                        defaultMessage="Tech experiences"
                    />
                }
            >
                <div className={classes.valueSliderContainer}>
                    <Typography className={classes.sliderValue}>
                        <FormattedMessage
                            id="Main.lang.years"
                            defaultMessage="{countNode} year{count, plural, one {} other {s}}"
                            values={{
                                count: codeExperienceYears,
                                countNode: <span className={classes.bolden}>{codeExperienceYears}</span>
                            }}
                        />
                    </Typography>
                    <SliderWithPopper
                        color="primary"
                        name="codeExperienceYears"
                        value={codeExperienceYears}
                        onChange={handleChange}
                        min={0}
                        max={20}
                        step={0.5}
                        popperCardProps={{
                            classes: {
                                container: classes.sliderPopperCard,
                                arrowContainer: classes.sliderPopperCardArrowContainer
                            }
                        }}
                    />
                </div>
            </EditDialogField>
            <EditDialogField
                error={errors.otherExperienceYears}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.otherExperienceYears.title"
                        defaultMessage="How many years of other professional experience do you have?"
                    />
                }
                subtitle={
                    <FormattedMessage
                        id="Basics.editDialog.otherExperienceYears.subtitle"
                        defaultMessage="Non-tech experiences"
                    />
                }
            >
                <div className={classes.valueSliderContainer}>
                    <Typography className={classes.sliderValue}>
                        <FormattedMessage
                            id="Main.lang.years"
                            defaultMessage="{countNode} year{count, plural, one {} other {s}}"
                            values={{
                                count: otherExperienceYears,
                                countNode: <span className={classes.bolden}>{otherExperienceYears}</span>
                            }}
                        />
                    </Typography>
                    <SliderWithPopper
                        color="primary"
                        name="otherExperienceYears"
                        value={otherExperienceYears}
                        onChange={handleChange}
                        min={0}
                        max={20}
                        step={0.5}
                        popperCardProps={{
                            classes: {
                                container: classes.sliderPopperCard,
                                arrowContainer: classes.sliderPopperCardArrowContainer
                            }
                        }}
                    />
                </div>
            </EditDialogField>
            <EditDialogField
                error={errors.codingReason}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.codingReason.title"
                        defaultMessage="What motivates you to write code?"
                    />
                }
            >
                <TextField onChange={handleChange} name="codingReason" value={codingReason} variant="flat" fullWidth />
            </EditDialogField>
        </>
    );
};

export const BasicsCardEditDialog = BasicsCardEditDialogComponent;
