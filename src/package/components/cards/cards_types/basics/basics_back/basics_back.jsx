import React, { useContext, useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';

import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { ContractType } from '../../../../commons/fields/contract_types/contract_types';

import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';

import { translations } from '../../../../../utils/enums/job_serachstate/job_search_state_translations';
import { styles } from './basics_back_styles';
import { NoDataButton } from '../../../../commons/no_data_button/no_data_button';
import { DeveloperProfileContext } from '../../../../../utils/context/contexts';

const useStyles = createUseStyles(styles);

const BasicsBackComponent = ({ data, handleAddButtonClick }) => {
    const { mode } = useContext(DeveloperProfileContext);
    const classes = useStyles();

    const {
        currentCity: { name: currentCityName },
        experienceYears,
        contractTypes,
        studiesLevel,
        codingYears,
        codingReason,
        searchState,
        visaSponsorship,
        personalDescription
    } = data;

    const descriptionContent = useMemo(() => {
        if (personalDescription && mode === 'edit') {
            return <span>{personalDescription}</span>;
        }
        return (
            <NoDataButton
                handleAddButtonClick={handleAddButtonClick}
                classes={{
                    container: classes.addButton
                }}
            >
                <FormattedMessage id="Basics.noDescription.buttonLabel" defaultMessage="Ajouter une description" />
            </NoDataButton>
        );
    }, [personalDescription, mode, handleAddButtonClick, classes]);

    const sections = useMemo(
        () => ({
            personalDescription: {
                title: null,
                hide: false,
                value: descriptionContent
            },
            visaSponsorship: {
                hide: !existsAndNotEmpty(visaSponsorship),
                value: (
                    <span className={classes.bold}>
                        <FormattedMessage
                            id="Basics.Back.VisaSponsorship"
                            defaultMessage="I require a visa sponsorship"
                        />
                    </span>
                )
            },
            work: {
                title: <FormattedMessage id="Basics.Back.Work.Title" defaultMessage="Work" />,
                hide: !experienceYears && !existsAndNotEmpty(contractTypes) && !existsAndNotEmpty(searchState),
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
                        <JobSearchState searchState={searchState} />
                    </>
                )
            },
            codingYears: {
                title: <FormattedMessage id="Basics.Back.CodingYears.title" defaultMessage="Experience" />,
                hide: !personalDescription,
                value: (
                    <FormattedMessage
                        id="Basics.Back.CodingYears.value"
                        defaultMessage={'{codingYears} years coding'}
                        values={{ codingYears }}
                    />
                )
            },
            studies: {
                title: <FormattedMessage id="Basics.Back.StudiesLevel.Title" defaultMessage="Training" />,
                hide: !studiesLevel,
                value: (
                    <>
                        <FormattedMessage
                            id="Basics.Back.StudiesLevel"
                            defaultMessage={'{studiesLevel} years of higher education'}
                            values={{ studiesLevel }}
                        />
                        <br />
                        <br />
                        {codingReason && <span>{codingReason}</span>}
                    </>
                )
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
            descriptionContent,
            searchState
        ]
    );

    return (
        <ProfileCardAnimatedBack title={<FormattedMessage id="Basics.Back.Title" defaultMessage="Who?" />}>
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

const JobSearchState = ({ searchState }) => {
    const { formatMessage } = useIntl();
    if (!searchState) {
        return null;
    }
    return <span>{formatMessage(translations[searchState] || translations.unknown)}</span>;
};

export const BasicsBack = BasicsBackComponent;
