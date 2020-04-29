import React from 'react';

import { FormattedMessage, FormattedNumber } from 'react-intl';

import { ProfileCardSectionTitle } from '../../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { hasOnlyFreelanceContract } from '../../../../utils/has_only_freelance_contract';

const DreamJobSalarySectionContentComponent = ({ contractTypes, salary, currency, averageDailyRate }) => {
    if (hasOnlyFreelanceContract(contractTypes)) {
        return (
            <>
                <ProfileCardSectionTitle>
                    <FormattedMessage id="Dreamjob.Back.AverageDailyRate.Title" defaultMessage="Average Daily Rate" />
                </ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    <FormattedNumber
                        /* eslint-disable-next-line react/style-prop-object */
                        style="currency"
                        value={averageDailyRate}
                        currency={currency || 'eur'}
                        currencyDisplay="name"
                        notation="compact"
                    />
                </ProfileCardSectionText>
            </>
        );
    }
    return (
        <>
            <ProfileCardSectionTitle>
                <FormattedMessage id="Dreamjob.Back.Salary.Title" defaultMessage="Ideal yearly salary" />
            </ProfileCardSectionTitle>
            <ProfileCardSectionText>
                <FormattedNumber
                    /* eslint-disable-next-line react/style-prop-object */
                    style="currency"
                    value={salary * 1000}
                    currency={currency || 'eur'}
                    currencyDisplay="name"
                    notation="compact"
                />
            </ProfileCardSectionText>
        </>
    );
};

export const DreamJobSalarySectionContent = DreamJobSalarySectionContentComponent;
