import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { animated, useTransition } from 'react-spring';

import { FormattedMessage, useIntl } from 'react-intl';
import { TextField, Typography } from '@welovedevs/ui';
import { CheckboxGroup } from '../../../../../commons/checkbox_group/checkbox_group';
import { CheckboxField } from '../../../../../commons/checkbox_field/checkbox_group';
import { JobPerks } from '../../../../../../utils/enums/job_perks/job_perks_utils';
import { EditDialogField } from '../../../../../commons/edit_dialog_field/edit_dialog_field';

import { jobPerksTranslations } from '../../../../../../utils/enums/job_perks/job_perks_translations';

import { PERKS_FIELD_OTHER_TEXTFIELD_TRANSITIONS_SPRING_PROPS } from './perks_field_transitions_spring_props';

import { styles } from './perks_field_styles';

const useStyles = createUseStyles(styles);

const PerksFieldComponent = ({
    error,
    checkboxGroupPerks,
    checkedPerks,
    onChange,
    toggleOtherPerk,
    otherPerk,
    handleChange,
    perks
}) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    const transitions = useTransition(otherPerk !== null, item => `other_field_${item ? 'visible' : 'invisible'}`, {
        ...PERKS_FIELD_OTHER_TEXTFIELD_TRANSITIONS_SPRING_PROPS,
        unique: true
    });

    return (
        <EditDialogField
            error={error}
            title={
                <FormattedMessage
                    id="DreamJob.editDialog.perks.title"
                    defaultMessage="What perks are important to you ?"
                />
            }
        >
            <CheckboxGroup
                rows={2}
                values={checkboxGroupPerks}
                translations={jobPerksTranslations}
                value={checkedPerks}
                name="perks"
                variant="outlined"
                onChange={onChange}
            />
            <div className={classes.othersCheckbox}>
                <CheckboxField
                    title={<Typography>{formatMessage(jobPerksTranslations.others)}</Typography>}
                    onClick={toggleOtherPerk}
                    checked={otherPerk !== null}
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
                            name={`perks[${JobPerks.OTHER}]`}
                            value={perks[JobPerks.OTHER]}
                            variant="flat"
                            containerProps={{ style: props }}
                        />
                    )
            )}
        </EditDialogField>
    );
};

export const PerksField = PerksFieldComponent;
