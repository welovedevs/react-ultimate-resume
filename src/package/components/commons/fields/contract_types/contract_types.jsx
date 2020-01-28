import { FormattedMessage } from 'react-intl';
import React from 'react';

export const ContractType = ({ contractTypes = [] }) => {
    const contracts = [...contractTypes];
    const lastContract = contracts.pop();
    if (!lastContract) {
        return null;
    }
    if (!contracts.length) {
        return (
            <FormattedMessage
                id="Basics.Back.WorkContract.single"
                defaultMessage={'Looking for a {contractType} contract'}
                values={{ contractType: lastContract }}
            />
        );
    }
    return (
        <FormattedMessage
            id="Basics.Back.WorkContract.multi"
            defaultMessage={'Looking for a {contracts} or {lastContract} contract'}
            values={{ lastContract, contracts: contracts.join(', ') }}
        />
    );
};
