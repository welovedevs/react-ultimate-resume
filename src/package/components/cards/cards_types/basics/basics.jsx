import React, { useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';

import { BasicsFront } from './basics_front/basics_front';
import { BasicsBack } from './basics_back/basics_back';
import { DeveloperProfileContext } from '../../../profile';

const mapData = (data) => {
    return {
        currentPosition: data?.work[0]?.position,
        currentCity: data.basics?.location?.city,
        remoteWork: data.specific?.work.remote,
        experienceYears: data.specific?.work?.experienceYears,
        contractType: data.specific?.work?.contractType,
        studiesLevel: data.specific?.education?.studiesLevel,
        codingYears: data.specific?.work?.codingYears,
        codingReason: data.specific?.work?.codingReason
    };
};

const BasicsCardComponent = ({ variant, flipped }) => {
    const { data } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapData(data), [data]);
    return (
        <ProfileCard
            data={mappedData}
            sides={{
                front: BasicsFront,
                back: BasicsBack
            }}
            variant={variant}
            flipped={flipped}
        />
    );
};

export const BasicsCard = BasicsCardComponent;
