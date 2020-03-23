import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

export const StudiesLevel = ({ studiesLevel }) => {
    const studiesLevelValue = useMemo(() => {
        const numberValue = Number(studiesLevel);
        if (Number.isNaN(numberValue)) {
            return 0;
        }
        return numberValue;
    }, [studiesLevel]);
    if (studiesLevelValue === 0) {
        return (
            <FormattedMessage
                id="Basics.Back.StudiesLevel.noHigherEducation"
                defaultMessage="Did not pursue higher education"
                values={{ studiesLevel: studiesLevelValue }}
            />
        );
    }
    return (
        <FormattedMessage
            id="Basics.Back.StudiesLevel.value"
            defaultMessage={'{studiesLevel, plural, one {# year} other {# years}} higher education'}
            values={{ studiesLevel: studiesLevelValue }}
        />
    );
};
