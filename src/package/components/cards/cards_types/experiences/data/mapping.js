import moment from 'moment';
import * as uuid from 'uuid/v4';
import set from 'lodash/set';

export const mapWorkFromJsonResume = jsonResume => ({
    work: jsonResume?.work.map((work, index) => ({
        ...work,
        //generating uuid for manipulating data if not present
        id: work.id || uuid(),
        startDate: moment(work.startDate, 'YYYY-MM-DD'),
        endDate: moment(work.endDate, 'YYYY-MM-DD'),
        stillEmployed: !work.endDate,
        index
    })),
    currentJobTitle: jsonResume.specific?.work?.currentJob?.summary,
    currentJobLocation: { name: jsonResume.specific?.work?.currentJob?.location }
});

export const mapWorkToJsonResume = data => {
    const newVar = {
        work: data.work?.map(work => ({
            ...work,
            startDate: work.startDate?.format('YYYY-MM-DD'),
            endDate: work.endDate?.format('YYYY-MM-DD')
        }))
    };
    set(newVar, 'specific.work.currentJob.summary', data.currentJobTitle);
    set(newVar, 'specific.work.currentJob.location', data.currentJobLocation?.name);
    return newVar;
};
