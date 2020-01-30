import head from 'lodash/head';
import merge from 'lodash/merge';
import moment from 'moment';

const extractExperienceYears = (works = []) => {
    const oldestJob = head(
        works
            .map(work => ({
                ...work,
                startMoment: moment(work.startDate, 'YYYY-MM-DD'),
                endMoment: moment(work.endDate, 'YYYY-MM-DD')
            }))
            .sort(({ startMoment: momentA }, { startMoment: momentB }) => momentA - momentB)
    );
    if (!oldestJob) {
        return null;
    }
    return moment().diff(oldestJob.startMoment, 'years');
};

export const prepareJsonResume = jsonResume => {
    const experienceYears = extractExperienceYears(jsonResume.work);
    return merge({}, jsonResume, { specific: { work: { experienceYears } } });
};
