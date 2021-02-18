import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { FormattedMessage, useIntl } from 'react-intl';
import { TextField, Typography } from '@welovedevs/ui';
import { CheckboxGroup } from '../../../../../commons/checkbox_group/checkbox_group';
import { CheckboxField } from '../../../../../commons/checkbox_field/checkbox_group';
import { JobPerks } from '../../../../../../utils/enums/job_perks/job_perks_utils';
import { EditDialogField } from '../../../../../commons/edit_dialog_field/edit_dialog_field';

import { jobPerksTranslations } from '../../../../../../utils/enums/job_perks/job_perks_translations';

import { PERKS_FIELD_OTHER_TEXTFIELD_TRANSITIONS_PROPS } from './perks_field_transitions_props';

import { styles } from './perks_field_styles';
import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../../../utils/framer_motion/common_types/spring_type';

const useStyles = createUseStyles(styles);

const checkboxGroupPerks = Object.values(JobPerks).filter((perk) => perk !== JobPerks.OTHER);

const PerksFieldComponent = ({ error, perks, onChange, setFieldValue }) => {
    const timerRef = useRef();

    const classes = useStyles();
    const { formatMessage } = useIntl();
    const otherPerk = useMemo(() => perks[JobPerks.OTHER] ?? null, [perks]);
    const [otherPerkValue, setOtherPerkValue] = useState(otherPerk);

    const checkedPerks = useMemo(
        () =>
            Object.entries(perks || {})
                .filter(([, value]) => value === true)
                .map(([perk]) => perk),
        [perks]
    );

    const handleCheckboxGroupChange = useCallback(
        (newPerks) =>
            onChange({
                ...newPerks.reduce((acc, perk) => {
                    acc[perk] = true;
                    return acc;
                }, {}),
                [JobPerks.OTHER]: perks[JobPerks.OTHER]
            }),
        [perks]
    );

    const toggleOtherPerk = useCallback(
        () => setFieldValue(`perks.${JobPerks.OTHER}`, typeof perks[JobPerks.OTHER] === 'string' ? null : ''),
        [perks]
    );

    useEffect(() => setOtherPerkValue(otherPerk), [otherPerk]);
    const handleOtherPerkValueChange = useCallback((e) => setOtherPerkValue(e.target.value), []);
    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        if (typeof otherPerkValue !== 'string' || !otherPerkValue.length) {
            return;
        }

        timerRef.current = setTimeout(() => {
            setFieldValue(`perks.${JobPerks.OTHER}`, otherPerkValue);
        }, 500);
    }, [otherPerkValue]);

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
                onChange={handleCheckboxGroupChange}
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
            {otherPerk !== null && (
                <AnimatePresence>
                    <TextField
                        fullWidth
                        key={`other_field_${otherPerk ? 'visible' : 'invisible'}`}
                        containerElement={motion.div}
                        classes={{ container: cn(classes.textField, classes.otherTextField) }}
                        onChange={handleOtherPerkValueChange}
                        name={`perks[${JobPerks.OTHER}]`}
                        value={otherPerkValue}
                        variant="flat"
                        containerProps={{
                            variants: PERKS_FIELD_OTHER_TEXTFIELD_TRANSITIONS_PROPS,
                            initial: 'initial',
                            animate: 'animate',
                            exit: 'exit',
                            transition: spring
                        }}
                    />
                </AnimatePresence>
            )}
        </EditDialogField>
    );
};

export const PerksField = PerksFieldComponent;
