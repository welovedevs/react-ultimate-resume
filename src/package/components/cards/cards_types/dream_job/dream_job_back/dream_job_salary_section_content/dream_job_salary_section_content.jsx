import React from 'react';

import { FormattedMessage } from 'react-intl';

import { ProfileCardSectionTitle } from '../../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { hasOnlyFreelanceContract } from '../../../../utils/has_only_freelance_contract';

const DreamJobSalarySectionContentComponent = ({ contractTypes, salary, averageDailyRate }) => {
    if (hasOnlyFreelanceContract(contractTypes)) {
        return (
            <>
                <ProfileCardSectionTitle>
                    <FormattedMessage id="Dreamjob.Back.AverageDailyRate.Title" defaultMessage="Average Daily Rate" />
                </ProfileCardSectionTitle>
                <ProfileCardSectionText>{`${averageDailyRate} €`}</ProfileCardSectionText>
            </>
        );
    }
    return (
        <>
            <ProfileCardSectionTitle>
                <FormattedMessage id="Dreamjob.Back.Salary.Title" defaultMessage="Ideal yearly salary" />
            </ProfileCardSectionTitle>
            <ProfileCardSectionText>{`${salary} k€`}</ProfileCardSectionText>
        </>
    );
};

export const DreamJobSalarySectionContent = DreamJobSalarySectionContentComponent;
