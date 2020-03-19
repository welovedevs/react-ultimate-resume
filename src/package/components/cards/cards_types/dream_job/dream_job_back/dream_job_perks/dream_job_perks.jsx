import React from 'react';

import { createUseStyles } from 'react-jss';
import { useIntl } from 'react-intl';

import { JobPerks } from '../../../../../../utils/enums/job_perks/job_perks_utils';
import { jobPerksTranslations } from '../../../../../../utils/enums/job_perks/job_perks_translations';
import { styles } from './dream_job_perks_styles';

const useStyles = createUseStyles(styles);

const DreamJobPerksComponent = ({ perks = {} }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    return (
        <ul className={classes.list}>
            {Object.entries(perks)
                .filter(([, value]) => Boolean(value))
                .map(([perkId, value]) => {
                    if (perkId === JobPerks.OTHER) {
                        return value;
                    }
                    return (
                        <li className={classes.listItem} key={`dream_job_perk_${perkId}`}>
                            {formatMessage(jobPerksTranslations[perkId.toLowerCase()] || jobPerksTranslations.others)}
                        </li>
                    );
                })}
        </ul>
    );
};

export const DreamJobPerks = DreamJobPerksComponent;
