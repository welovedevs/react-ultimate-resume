import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

export const ExperienceYears = ({ experienceYears, codeExperienceYears }) => {
    const experienceValue = useMemo(() => {
        const numberValue = Number(experienceYears);
        if (Number.isNaN(numberValue)) {
            return 0;
        }
        return numberValue;
    }, [experienceYears]);
    if (!Number.isNaN(Number(codeExperienceYears))) {
        return null;
    }

    console.warn('experienceYears is deprecated, please use codeExperienceYears and otherExperienceYears');
    if (experienceValue === 0) {
        return (
            <FormattedMessage
                id="Basics.Back.ExperienceYear.noExperience"
                defaultMessage={'No experience (yet!)'}
                values={{ experienceYears }}
            />
        );
    }
    return (
        <FormattedMessage
            id="Basics.Back.ExperienceYear.value"
            defaultMessage={'{experienceYears, plural, one {# year} other {# years} }  of experience'}
            values={{ experienceYears }}
        />
    );
};
