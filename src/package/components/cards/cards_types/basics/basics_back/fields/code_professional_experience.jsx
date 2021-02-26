import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

export const CodeExperienceYears = ({ experienceYears, codeExperienceYears }) => {
    const codeExperienceValue = useMemo(() => {
        const numberValue = Number(codeExperienceYears);
        if (Number.isNaN(numberValue)) {
            return 0;
        }
        return numberValue;
    }, [codeExperienceYears]);
    if (!Number.isNaN(Number(experienceYears)) && Number.isNaN(Number(codeExperienceYears))) {
        console.warn('experienceYears is deprecated, please use codeExperienceYears and otherExperienceYears');
        return null;
    }

    if (codeExperienceValue === 0) {
        return (
            <FormattedMessage
                id="Basics.Back.CodeExperienceYear.noExperience"
                defaultMessage={'No experience (yet!) as a developer'}
            />
        );
    }
    return (
        <FormattedMessage
            id="Basics.Back.CodeExperienceYear.value"
            defaultMessage="{codeExperienceYears, plural, one {# year} other {# years} } of work experience as developer"
            values={{ codeExperienceYears }}
        />
    );
};
