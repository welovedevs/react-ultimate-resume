import moment from 'moment';
import uuid from 'uuid/v4';

export const mapStudiesFromJsonResume = jsonResume => ({
    education: jsonResume?.education?.map(study => ({
        ...study,
        // generating uuid for manipulating data if not present
        id: study.id || uuid(),
        startDate: study.startDate && moment(study.startDate, 'YYYY-MM-DD'),
        endDate: study.endDate && moment(study.endDate, 'YYYY-MM-DD')
    }))
});

export const mapStudiesToJsonResume = data => ({
    education: data.education?.map(study => ({
        ...study,
        startDate: study.startDate?.format('YYYY-MM-DD'),
        endDate: study.endDate?.format('YYYY-MM-DD')
    }))
});
