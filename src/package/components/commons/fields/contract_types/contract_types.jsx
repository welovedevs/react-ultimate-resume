import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import capitalize from 'lodash';

import translations from './contract_types_translations';

export const ContractType = ({ contractTypes = [] }) => {
    const { formatMessage } = useIntl();

    const contracts = [...contractTypes];
    const lastContract = contracts.pop();
    if (!lastContract) {
        return null;
    }

    if (contracts.length <= 1) {
        return (
            <FormattedMessage
                id="Basics.Back.WorkContract.single"
                defaultMessage={'Looking for a {contractType} contract'}
                values={{ contractType: capitalize(formatMessage(translations[lastContract] || translations.unknown)) }}
            />
        );
    }
    return (
        <FormattedMessage
            id="Basics.Back.WorkContract.multi"
            defaultMessage={'Looking for a {contracts} or {lastContract} contract'}
            values={{
                lastContract: formatMessage(translations[lastContract]),
                contracts: contracts
                    .map(key => capitalize(formatMessage(translations[key] || translations.unknown)))
                    .join(', ')
            }}
        />
    );
};
