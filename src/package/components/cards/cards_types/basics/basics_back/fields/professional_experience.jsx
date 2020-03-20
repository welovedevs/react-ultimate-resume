import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

export const ExperienceYears = ({ experienceYears }) => {
    const experienceValue = useMemo(() => {
        const numberValue = Number(experienceYears);
        if (Number.isNaN(numberValue)) {
            return 0;
        }
        return numberValue;
    }, [experienceYears]);
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
