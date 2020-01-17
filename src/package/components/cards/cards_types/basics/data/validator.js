import * as Yup from 'yup';

export const BasicSchema = Yup.object({
    currentCity: 'basics.location.city',
    remoteWork: 'specific.work.remote',
    experienceYears: 'specific.work.experienceYears',
    contractType: 'specific.work.contractType',
    studiesLevel: 'specific.education.studiesLevel',
    codingYears: 'specific.work.codingYears',
    codingReason: 'specific.work.codingReason'
});
