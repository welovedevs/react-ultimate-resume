import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { animated, useTransition } from 'react-spring';

import { FormattedMessage, useIntl } from 'react-intl';
import { TextField, Typography } from '@wld/ui';
import { CheckboxGroup } from '../../../../../commons/checkbox_group/checkbox_group';
import { CheckboxField } from '../../../../../commons/checkbox_field/checkbox_group';
import { JobIssues } from '../../../../../../utils/enums/job_issues/job_issues_utils';
import { EditDialogField } from '../../../../../commons/edit_dialog_field/edit_dialog_field';

import { CURRENT_JOB_ISSUES_FIELD_OTHER_TEXTFIELD_TRANSITIONS_SPRING_PROPS } from './current_job_issues_field_spring_props';

import { translations } from '../../../../../../utils/enums/job_issues/job_issues_translations';
import { styles } from './current_job_issues_field_styles';

const useStyles = createUseStyles(styles);

const CurrentJobIssuesFieldComponent = ({
    error,
    checkboxGroupCurrentJobIssues,
    checkedCurrentJobIssues,
    onChange,
    toggleOtherCurrentJobIssue,
    otherCurrentJobIssue,
    handleChange,
    currentJobIssues
}) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    const transitions = useTransition(
        otherCurrentJobIssue !== null,
        item => `other_field_${item ? 'visible' : 'invisible'}`,
        {
            ...CURRENT_JOB_ISSUES_FIELD_OTHER_TEXTFIELD_TRANSITIONS_SPRING_PROPS,
            unique: true
        }
    );

    return (
        <EditDialogField
            error={error}
            title={
                <FormattedMessage
                    id="DreamJob.editDialog.currentJobIssues.title"
                    defaultMessage="Which issues do you encounter in your current job?"
                />
            }
        >
            <CheckboxGroup
                rows={2}
                values={checkboxGroupCurrentJobIssues}
                translations={translations}
                value={checkedCurrentJobIssues}
                name="perks"
                variant="outlined"
                onChange={onChange}
            />
            <div className={classes.othersCheckbox}>
                <CheckboxField
                    title={<Typography>{formatMessage(translations.other)}</Typography>}
                    onClick={toggleOtherCurrentJobIssue}
                    checked={otherCurrentJobIssue !== null}
                    variant="outlined"
                    color="secondary"
                />
            </div>
            {transitions.map(
                ({ item, key, props }) =>
                    item && (
                        <TextField
                            fullWidth
                            key={key}
                            containerElement={animated.div}
                            customClasses={{ container: cn(classes.textField, classes.otherTextField) }}
                            onChange={handleChange}
                            name={`currentJobIssue[${JobIssues.OTHER}]`}
                            value={currentJobIssues[JobIssues.OTHER]}
                            variant="flat"
                            containerProps={{ style: props }}
                        />
                    )
            )}
        </EditDialogField>
    );
};

export const CurrentJobIssuesField = CurrentJobIssuesFieldComponent;
