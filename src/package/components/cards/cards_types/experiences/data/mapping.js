import moment from 'moment';
import uuid from 'uuid/v4';

export const mapWorkFromJsonResume = jsonResume => ({
    work: jsonResume?.work?.map((work, index) => ({
        ...work,
        // generating uuid for manipulating data if not present
        id: work.id || uuid(),
        startDate: work.startDate && moment(work.startDate, 'YYYY-MM-DD'),
        endDate: work.endDate && moment(work.endDate, 'YYYY-MM-DD'),
        place: {
            name: work.location,
            placeId: work.placeId
        },
        stillEmployed: !work.endDate,
        index
    }))
});

export const mapWorkToJsonResume = data => ({
    work: data.work?.map(work => ({
        ...work,
        location: work.place?.name ?? work.location,
        startDate: work.startDate?.format('YYYY-MM-DD'),
        endDate: work.endDate?.format('YYYY-MM-DD')
    }))
});
