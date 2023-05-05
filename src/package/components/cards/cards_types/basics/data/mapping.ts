import { DeveloperResume } from '../../../../../types/resume/resume';

export const mapJsonResumeToBasicData = (jsonResume: DeveloperResume) => {
    const city = jsonResume.basics?.location?.city;
    const countryCode = jsonResume.basics?.location?.countryCode;
    let currentCity: { name?: string } = {};
    if (city || countryCode) {
        currentCity = {
            name: `${[city, countryCode].filter(Boolean).join(', ')}`
        };
    }

    return {
        currentCity,
        summary: jsonResume?.basics?.summary,
        experienceYears: jsonResume?.specific?.work?.experienceYears,
        codeExperienceYears: jsonResume?.specific?.work?.codeExperienceYears ?? 0,
        otherExperienceYears: jsonResume?.specific?.work?.otherExperienceYears ?? 0,
        studiesLevel: jsonResume?.specific?.education?.studiesLevel ?? 0,
        codingYears: jsonResume?.specific?.work?.codingYears ?? 0,
        codingReason: jsonResume?.specific?.work?.codingReason,
        visaSponsorship: jsonResume?.specific?.basics?.visaSponsorship,
        searchState: jsonResume?.specific?.work?.searchState,
        personalDescription: jsonResume?.specific?.basics?.personalDescription,
        globalJobTitle: jsonResume?.specific?.basics?.globalJobTitle
    };
};

export type BasicCardDataType = ReturnType<typeof mapJsonResumeToBasicData>;

export const mapBasicsDataToJsonResume = (data: BasicCardDataType): Partial<DeveloperResume> => ({
    basics: {
        summary: data.summary,
        location: data.currentCity && { ...data.currentCity, city: data.currentCity.name }
    },
    specific: {
        basics: {
            visaSponsorship: data.visaSponsorship,
            personalDescription: data.personalDescription,
            globalJobTitle: data.globalJobTitle
        },
        work: {
            experienceYears: data.experienceYears,
            codeExperienceYears: data.codeExperienceYears,
            otherExperienceYears: data.otherExperienceYears,
            codingYears: data.codingYears,
            codingReason: data.codingReason,
            searchState: data.searchState
        },
        education: {
            studiesLevel: data.studiesLevel
        }
    }
});
