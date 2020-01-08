import React from 'react';
import { FormattedMessage } from 'react-intl';

export const BasicCardFront = ({ data }) => {
    const { currentPosition, currentCity } = data;
    return (
        <div>
            <FormattedMessage
                id="Basics.Front.MainPhrase"
                defaultMessage={'{currentPosition} based in {currentCity}'}
                values={{ currentCity, currentPosition }}
            />
        </div>
    );
};
