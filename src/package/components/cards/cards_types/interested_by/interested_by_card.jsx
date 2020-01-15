import React, { useMemo } from 'react';

const mapData = data => ({
    interestedBy: data.specific?.interestedBy
});

export const InterestedByCard = ({ data }) => {
    const mappedData = useMemo(() => mapData(data), [data]);
    return null;
};
