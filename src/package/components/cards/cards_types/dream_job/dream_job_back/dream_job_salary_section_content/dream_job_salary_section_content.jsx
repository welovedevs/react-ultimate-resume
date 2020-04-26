import React from 'react';

import { FormattedMessage, useIntl } from 'react-intl';

import { ProfileCardSectionTitle } from '../../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { hasOnlyFreelanceContract } from '../../../../utils/has_only_freelance_contract';
import {
    currenciesDisplayTranslationsBefore,
    currenciesDisplayTranslationsAfter
} from '../../../../../../utils/enums/currencies/currencies_filter_translations';

const DreamJobSalarySectionContentComponent = ({ contractTypes, salary, currency, averageDailyRate }) => {
    const { formatMessage } = useIntl();

    if (hasOnlyFreelanceContract(contractTypes)) {
        return (
            <>
                <ProfileCardSectionTitle>
                    <FormattedMessage id="Dreamjob.Back.AverageDailyRate.Title" defaultMessage="Average Daily Rate" />
                </ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    {formatMessage(
                        currenciesDisplayTranslationsBefore[currency] || currenciesDisplayTranslationsBefore.euro
                    )}
                    {`${averageDailyRate}`}
                    {formatMessage(
                        currenciesDisplayTranslationsAfter[currency] || currenciesDisplayTranslationsAfter.euro
                    )}
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
                {formatMessage(
                    currenciesDisplayTranslationsBefore[currency] || currenciesDisplayTranslationsBefore.euro
                )}
                {`${salary}`}
                {formatMessage(currenciesDisplayTranslationsAfter[currency] || currenciesDisplayTranslationsAfter.euro)}
            </ProfileCardSectionText>
        </>
    );
};

export const DreamJobSalarySectionContent = DreamJobSalarySectionContentComponent;
