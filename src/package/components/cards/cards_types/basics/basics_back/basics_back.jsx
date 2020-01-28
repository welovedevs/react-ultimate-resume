import React, { useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { createUseStyles } from 'react-jss';
import { styles } from './basics_back_styles';
import JobSearchStateTranslations from '../../../../../utils/enums/job_serachstate/job_search_state_translations';
import { ContractType } from '../../../../commons/fields/contract_types/contract_types';

const useStyles = createUseStyles(styles);

const BasicsBackComponent = ({ data }) => {
    const classes = useStyles();

    const {
        currentCity: { name: currentCityName },
        experienceYears,
        contractTypes,
        studiesLevel,
        codingYears,
        codingReason,
        jobSearchState,
        visaSponsorship,
        personalDescription
    } = data;

    const sections = useMemo(
        () => ({
            visaSponsorship: {
                hide: !!visaSponsorship,
                value: (
                    <span className={classes.bold}>
                        <FormattedMessage
                            id="Basics.Back.VisaSponsorship"
                            defaultMessage={'I require a visa sponsorship'}
                        />
                    </span>
                )
            },
            work: {
                title: <FormattedMessage id="Basics.Back.Work.Title" defaultMessage="Work" />,
                value: (
                    <>
                        <FormattedMessage
                            id="Basics.Back.Work"
                            defaultMessage={'{experienceYears} years of experience'}
                            values={{ experienceYears }}
                        />
                        <br />
                        <ContractType contractTypes={contractTypes} />
                        <br />
                        <JobSearchState jobSearchState={jobSearchState} />
                    </>
                )
            },
            studies: {
                title: <FormattedMessage id="Basics.Back.StudiesLevel.Title" defaultMessage="Training" />,
                value: (
                    <FormattedMessage
                        id="Basics.Back.StudiesLevel"
                        defaultMessage={'{studiesLevel} years of higher education'}
                        values={{ studiesLevel }}
                    />
                )
            },
            codingYears: {
                title: <FormattedMessage id="Basics.Back.CodingYears" defaultMessage="Experience" />,
                value: (
                    <FormattedMessage
                        id="Basics.Back.CodingYears"
                        defaultMessage={'{codingYears} years coding'}
                        values={{ codingYears }}
                    />
                )
            },
            personalDescription: {
                title: (
                    <FormattedMessage id="Basics.Back.PersonalDescription" defaultMessage="A bit more about me : " />
                ),
                value: <span>{personalDescription}</span>
            }
        }),
        [
            currentCityName,
            experienceYears,
            contractTypes,
            studiesLevel,
            codingYears,
            codingReason,
            visaSponsorship,
            personalDescription,
            jobSearchState
        ]
    );

    return (
        <ProfileCardAnimatedBack title="Who ?">
            {Object.entries(sections)
                .filter(([, { hide }]) => !hide)
                .map(([id, { title, value }]) => (
                    <ProfileCardSection key={id}>
                        {title && <ProfileCardSectionTitle>{title}</ProfileCardSectionTitle>}
                        <ProfileCardSectionText>{value}</ProfileCardSectionText>
                    </ProfileCardSection>
                ))}
        </ProfileCardAnimatedBack>
    );
};

const JobSearchState = ({ jobSearchState }) => {
    const { formatMessage } = useIntl();
    if (!jobSearchState) {
        return null;
    }
    return <span>{formatMessage(JobSearchStateTranslations[jobSearchState])}</span>;
};

export const BasicsBack = BasicsBackComponent;
