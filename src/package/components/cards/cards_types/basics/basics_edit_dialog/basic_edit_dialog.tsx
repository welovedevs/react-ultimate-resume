import React, { useMemo } from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { FormattedMessage, IntlFormatters, useIntl } from 'react-intl';
import { useFormikContext } from 'formik';

import { TextField, Typography } from '@welovedevs/ui';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';

import { SliderWithPopper } from '../../../../commons/slider_with_popper/slider_with_popper';
import { VisaField } from './visa_field/visa_field';
import { LocationField } from '../../../../commons/location_field/location_field';
import { JobSearchStateField } from './job_search_state_field/job_search_state_field';

import { styles } from './basic_edit_dialog_styles';
import { BasicCardDataType } from '../data/mapping';
import { DialogContentRenderFunction } from '../../../../commons/edit_dialog/edit_dialog_types';
import { DialogProps } from '@mui/material';
import Yup from 'yup';
import { JobTitleField } from './job_title_field/job_title_field';

const useStyles = makeStyles(styles as any);

const BasicsCardEditDialogComponent: React.FC<
    {
        data: BasicCardDataType;
        onEdit: (newData: BasicCardDataType) => void;
        validationSchema: (formatMessage: IntlFormatters['formatMessage']) => Yup.Schema<any>;
        isEditing?: boolean;
    } & DialogProps
> = ({ open, onClose, data, onEdit, validationSchema, isEditing }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog<BasicCardDataType>
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

const Content: React.FC<{ helpers: DialogContentRenderFunction<BasicCardDataType> }> = ({
    helpers: { handleValueChange, toggleValue }
}) => {
    const classes: any = useStyles();
    const { values, errors, handleChange, setFieldValue } = useFormikContext<BasicCardDataType>();
    const {
        currentCity,
        codeExperienceYears,
        otherExperienceYears,
        studiesLevel,
        codingReason,
        visaSponsorship,
        searchState,
        personalDescription,
        summary,
        globalJobTitle
    } = values;
    return (
        <>
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
                error={errors?.currentCity?.name || errors?.currentCity}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.location.title"
                        defaultMessage="What's your current location?"
                    />
                }
            >
                {/*
                 // @ts-ignore */}
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
                error={errors.globalJobTitle}
                title={
                    <FormattedMessage
                        id="Basics.editDialog.globalJobTitle.title"
                        defaultMessage="What's your job title?"
                    />
                }
            >
                <JobTitleField<BasicCardDataType>
                    value={globalJobTitle}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                />
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
                classes={{
                    container: 'flex items-center',
                    component: 'flex items-center flex-row',
                    componentErrorContainer: 'max-w-[130px] w-130px'
                }}
            >
                {/*<div className={classes.valueSliderContainer}>*/}
                {/*<Typography className={classes.sliderValue}>*/}
                {/*    <FormattedMessage*/}
                {/*        id='Main.lang.years'*/}
                {/*        defaultMessage='{countNode} year{count, plural, one {} other {s}}'*/}
                {/*        values={{*/}
                {/*            count: studiesLevel,*/}
                {/*            countNode: <span className={classes.bolden}>{studiesLevel}</span>*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Typography>*/}
                {/*/!**/}
                {/*// @ts-ignore *!/*/}
                {/*<SliderWithPopper*/}
                {/*    color='primary'*/}
                {/*    name='studiesLevel'*/}
                {/*    value={studiesLevel}*/}
                {/*    onChange={handleChange}*/}
                {/*    min={0}*/}
                {/*    max={12}*/}
                {/*    popperCardProps={{*/}
                {/*        classes: {*/}
                {/*            container: classes.sliderPopperCard,*/}
                {/*            arrowContainer: classes.sliderPopperCardArrowContainer*/}
                {/*        }*/}
                {/*    }}*/}
                {/*/>*/}
                <TextField
                    type="number"
                    min={0}
                    max={12}
                    onChange={handleChange}
                    name="studiesLevel"
                    value={studiesLevel ?? 0}
                    variant="flat"
                />
                <Typography className="ml-1">
                    <FormattedMessage id="Main.lang.year" defaultMessage="year(s)" />
                </Typography>
                {/*</div>*/}
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
                classes={{
                    container: 'flex items-center',
                    component: 'flex items-center flex-row',
                    componentErrorContainer: 'max-w-[130px] w-130px'
                }}
            >
                {/*<div className={classes.valueSliderContainer}>*/}
                {/*<Typography className={classes.sliderValue}>*/}
                {/*    <FormattedMessage*/}
                {/*        id='Main.lang.years'*/}
                {/*        defaultMessage='{countNode} year{count, plural, one {} other {s}}'*/}
                {/*        values={{*/}
                {/*            count: codeExperienceYears,*/}
                {/*            countNode: <span className={classes.bolden}>{codeExperienceYears}</span>*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Typography>*/}

                {/*<SliderWithPopper*/}
                {/*    color='primary'*/}
                {/*    name='codeExperienceYears'*/}
                {/*    value={codeExperienceYears}*/}
                {/*    onChange={handleChange}*/}
                {/*    min={0}*/}
                {/*    max={20}*/}
                {/*    step={0.5}*/}
                {/*    popperCardProps={{*/}
                {/*        classes: {*/}
                {/*            container: classes.sliderPopperCard,*/}
                {/*            arrowContainer: classes.sliderPopperCardArrowContainer*/}
                {/*        }*/}
                {/*    }}*/}
                {/*/>*/}
                <TextField
                    type="number"
                    min={0}
                    max={40}
                    onChange={handleChange}
                    name="codeExperienceYears"
                    value={codeExperienceYears ?? 0}
                    variant="flat"
                />
                <Typography className="ml-1">
                    <FormattedMessage id="Main.lang.year" defaultMessage="year(s)" />
                </Typography>
                {/*</div>*/}
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
                classes={{
                    container: 'flex items-center',
                    component: 'flex items-center flex-row',
                    componentErrorContainer: 'max-w-[130px] w-130px'
                }}
            >
                {/*<div className={classes.valueSliderContainer}>*/}
                {/*<Typography className={classes.sliderValue}>*/}
                {/*    <FormattedMessage*/}
                {/*        id='Main.lang.years'*/}
                {/*        defaultMessage='{countNode} year{count, plural, one {} other {s}}'*/}
                {/*        values={{*/}
                {/*            count: otherExperienceYears,*/}
                {/*            countNode: <span className={classes.bolden}>{otherExperienceYears}</span>*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Typography>*/}
                {/*    <SliderWithPopper*/}
                {/*        color='primary'*/}
                {/*        name='otherExperienceYears'*/}
                {/*        value={otherExperienceYears}*/}
                {/*        onChange={handleChange}*/}
                {/*        min={0}*/}
                {/*        max={20}*/}
                {/*        step={0.5}*/}
                {/*        popperCardProps={{*/}
                {/*            classes: {*/}
                {/*                container: classes.sliderPopperCard,*/}
                {/*                arrowContainer: classes.sliderPopperCardArrowContainer*/}
                {/*            }*/}
                {/*        }}*/}
                {/*    />*/}
                <TextField
                    type="number"
                    min={0}
                    max={40}
                    onChange={handleChange}
                    name="otherExperienceYears"
                    value={otherExperienceYears ?? 0}
                    variant="flat"
                />
                <Typography className="ml-1">
                    <FormattedMessage id="Main.lang.year" defaultMessage="year(s)" />
                </Typography>

                {/*</div>*/}
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
