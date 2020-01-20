import React, { useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { InterestedByFront } from './interested_by_front/interested_by_front';
import { InterestedByBack } from './interested_by_back/interested_by_back';

const mapData = data => ({
    interestedBy: data?.specific?.interestedBy
});

const InterestedByCardComponent = ({ data, variant, flipped }) => {
    const mappedData = useMemo(() => mapData(data), [data]);
    return (
        <ProfileCard
            data={mappedData}
            sides={{
                front: InterestedByFront,
                back: InterestedByBack
            }}
            variant={variant}
            flipped={flipped}
        />
    );
};

export const InterestedByCard = InterestedByCardComponent;
