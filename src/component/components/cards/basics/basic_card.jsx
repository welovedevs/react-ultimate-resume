import React from 'react';

import { Card } from '../utils/card';
import { BasicCardFront } from './front_content';
import { BasicCardBack } from './back_content';

const mapData = data => {
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

export const BasicCard = ({ data, variant }) => (
    <Card data={mapData(data)} FrontComponent={BasicCardFront} BackComponent={BasicCardBack} variant={variant} />
);
