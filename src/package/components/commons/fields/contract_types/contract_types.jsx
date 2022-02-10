import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import capitalize from 'lodash/capitalize';

import translations from './contract_types_translations';

export const ContractType = ({ contractTypes = [] }) => {
    const { formatMessage } = useIntl();

    if (!contractTypes?.length) {
        return null;
    }
    if (contractTypes.length === 1) {
        return (
            <FormattedMessage
                id="Basics.Back.WorkContract.single"
                defaultMessage={'Looking for a {contractType} contract'}
                values={{
                    contractType: capitalize(formatMessage(translations[contractTypes[0]] || translations.unknown))
                }}
            />
        );
    }

    return (
        <FormattedMessage
            id="Basics.Back.WorkContract.multi"
            defaultMessage={'Looking for a {contracts} or {lastContract} contract'}
            values={{
                lastContract: formatMessage(translations[contractTypes[contractTypes.length - 1]]),
                contracts: contractTypes
                    .slice(0, contractTypes.length - 1)
                    .map((key) => capitalize(formatMessage(translations[key] || translations.unknown)))
                    .join(', ')
            }}
        />
    );
};
