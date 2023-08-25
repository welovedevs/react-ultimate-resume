// @ts-ignore
import uuid from 'uuid/v4';
import { DeveloperResume } from '../../../../../types/resume/resume';

export const mapDreamJobFromJsonResume = (jsonResume: DeveloperResume) => ({
    places: (jsonResume.specific?.dreamJob?.locations ?? []).map((location) => ({
        ...location,
        id: location.id || uuid()
    })),
    perks: jsonResume.specific?.dreamJob?.perks,
    salary: jsonResume.specific?.dreamJob?.salary,
    remoteFrequency: jsonResume.specific?.dreamJob?.remoteFrequency,
    averageDailyRate: jsonResume.specific?.dreamJob?.averageDailyRate,
    contractTypes: jsonResume.specific?.work?.contractTypes,
    currentJobIssues: jsonResume.specific?.currentJob?.issues
});

export const mapDreamJobToJsonResume = (data: ReturnType<typeof mapDreamJobFromJsonResume>) => ({
    specific: {
        dreamJob: {
            locations: data.places,
            perks: data.perks,
            salary: data.salary,
            remoteFrequency: data.remoteFrequency,
            averageDailyRate: data.averageDailyRate
        },
        work: {
            contractTypes: data.contractTypes
        },
        currentJob: {
            issues: data.currentJobIssues
        }
    }
});
