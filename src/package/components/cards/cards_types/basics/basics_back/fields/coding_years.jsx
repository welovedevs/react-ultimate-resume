import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

export const CodingYears = ({ codingYears }) => {
    const codingYearsValue = useMemo(() => {
        const numberValue = Number(codingYears);
        if (Number.isNaN(numberValue)) {
            return 0;
        }
        return numberValue;
    }, [codingYears]);
    if (codingYearsValue === 0) {
        return <FormattedMessage id="Basics.Back.CodingYears.noExperience" defaultMessage="I've just started coding" />;
    }
    return (
        <FormattedMessage
            id="Basics.Back.CodingYears.value"
            defaultMessage={'{codingYears, plural, one {# year} other {# years} } coding'}
            values={{ codingYears }}
        />
    );
};
