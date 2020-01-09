import React, { useMemo } from 'react';
import * as moment from 'moment';

const mapData = data => ({
    education: data.education
        ?.map(({ school }) => ({
            ...school,
            startMoment: school.startDate && moment(school.startDate, 'YYYY-MM-DD'),
            endMoment: school.endDate && moment(school.endDate, 'YYYY-MM-DD')
        }))
        .sort(({ startMoment: a }, { startMoment: b }) => b?.valueOf() - a?.valueOf())
});

export const InterestedByCard = ({ data }) => {
    const mappedData = useMemo(() => mapData(data), [data]);
    return null;
};
