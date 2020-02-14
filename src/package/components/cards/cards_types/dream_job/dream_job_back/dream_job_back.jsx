import React, { useMemo, useRef } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';

import { List, ListItem, PopperCard, Typography } from '@wld/ui';

import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { ContractType } from '../../../../commons/fields/contract_types/contract_types';
import { JobPerks } from '../../../../../utils/enums/job_perks/job_perks_utils';

import { useOpenerState } from '../../../../hooks/use_opener_state';

import { jobPerksTranslations } from '../../../../../utils/enums/job_perks/job_perks_translations';
import { remoteDisplayTranslations } from '../../../../../utils/enums/remote/remote_filter_translations';

import { REMOTE_FREQUENCY } from '../../../../../utils/enums/remote/remote_utils';

import { styles } from './dream_job_back_styles';

const useStyles = createUseStyles(styles);

const DreamJobBackComponent = ({ data }) => {
    const classes = useStyles();
    const { places, perks, salary, remoteFrequency, contractTypes } = data;
    return (
        <ProfileCardAnimatedBack
            title={<FormattedMessage id="Dreamjob.Back.Title" defaultMessage="Dream job" />}
        >
            <ProfileCardSection>
                <DreamJobLocations places={places} remoteFrequency={remoteFrequency} classes={classes} />
            </ProfileCardSection>
            <ProfileCardSection>
                <ProfileCardSectionTitle>
                    <FormattedMessage id="Dreamjob.Back.Salary.Title" defaultMessage="Ideal yearly salary" />
                </ProfileCardSectionTitle>
                <ProfileCardSectionText>{salary}</ProfileCardSectionText>
            </ProfileCardSection>
            <ProfileCardSection>
                <ProfileCardSectionTitle>
                    <FormattedMessage id="Dreamjob.Back.ContractTypes.Title" defaultMessage="Contract types" />
                </ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    <ContractType contractTypes={contractTypes} />
                </ProfileCardSectionText>
            </ProfileCardSection>
            <ProfileCardSection>
                <ProfileCardSectionTitle>
                    <FormattedMessage
                        id="Dreamjob.Back.Location.Perks.Title"
                        defaultMessage="Important perks in my job"
                    />
                </ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    <DreamJobPerks perks={perks} />
                </ProfileCardSectionText>
            </ProfileCardSection>
        </ProfileCardAnimatedBack>
    );
};

const DreamJobLocations = ({ remoteFrequency, places, classes }) => {
    const { formatMessage } = useIntl();
    if (remoteFrequency === REMOTE_FREQUENCY.FULL_TIME) {
        return (
            <FormattedMessage id="Dreamjob.Back.Location.RemoteOnly" defaultMessage="I only want to work remotely" />
        );
    }

    return (
        <>
            <ProfileCardSectionTitle>
                <FormattedMessage id="Dreamjob.Back.Location.Title" defaultMessage="My dreamjob location" />
            </ProfileCardSectionTitle>
            <ProfileCardSectionText>
                <DreamJobPlaces places={places} classes={classes} />
                <br />
                {remoteFrequency &&
                    formatMessage(remoteDisplayTranslations[remoteFrequency] || remoteDisplayTranslations.others)}
            </ProfileCardSectionText>
        </>
    );
};

const DreamJobPlaces = ({ places = [], classes }) => {
    const textAnchor = useRef();
    const [open, handlers] = useOpenerState();
    const { firstPlace, remainingPlaces } = useMemo(() => {
        const placesCopy = [...places];
        const item = placesCopy.shift();
        return { firstPlace: item, remainingPlaces: placesCopy };
    }, [places]);

    if (!remainingPlaces.length) {
        return (
            <ProfileCardSectionText>
                <FormattedMessage
                    id="Dreamjob.Back.Location.OnePlace"
                    defaultMessage="I want to work in {place}"
                    values={{ place: firstPlace?.name ?? '' }}
                />
            </ProfileCardSectionText>
        );
    }

    return (
        <>
            <button className={classes.button} type="button" ref={textAnchor} {...handlers}>
                <FormattedMessage
                    id="Dreamjob.Back.Location.ManyPlaces"
                    defaultMessage="I want to work in {place} and {length, plural, one {one other place} other {# other places}}"
                    values={{ place: firstPlace.name, length: remainingPlaces.length }}
                />
            </button>
            <PopperCard open={open} anchorElement={textAnchor.current}>
                <List>
                    {remainingPlaces
                        .filter(item => item)
                        .map(({ name }, index) => (
                            <ListItem key={`place_popper_${index}`}>
                                <Typography>{name}</Typography>
                            </ListItem>
                        ))}
                </List>
            </PopperCard>
        </>
    );
};

const DreamJobPerks = ({ perks = {} }) => {
    const { formatMessage } = useIntl();

    return Object.entries(perks || {})
        .map(([key, value]) => {
            if (key === JobPerks.OTHER) {
                return value;
            }
            return formatMessage(jobPerksTranslations[key.toLowerCase()] || jobPerksTranslations.others);
        })
        .join(', ');
};

export const DreamJobBack = DreamJobBackComponent;
