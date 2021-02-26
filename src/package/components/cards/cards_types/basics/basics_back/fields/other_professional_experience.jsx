import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

export const OtherExperienceYears = ({ codeExperienceYears, otherExperienceYears }) => {
    const otherExperienceValue = useMemo(() => {
        const numberValue = Number(otherExperienceYears);
        if (Number.isNaN(numberValue)) {
            return 0;
        }
        return numberValue;
    }, [otherExperienceYears]);
    if (!otherExperienceValue || Number.isNaN(Number(codeExperienceYears))) {
        return null;
    }
    return (
        <FormattedMessage
            id="Basics.Back.OtherExperienceYear.value"
            defaultMessage={
                ' and {otherExperienceValue, plural, one {# year} other {# years} } of other work experiences'
            }
            values={{ otherExperienceValue }}
        />
    );
};
