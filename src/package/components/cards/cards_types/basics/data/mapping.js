export const mapJsonResumeToBasicData = (jsonResume) => {
    const city = jsonResume.basics?.location?.city;
    const countryCode = jsonResume.basics?.location?.countryCode;
    let currentCity = {};
    if (city || countryCode) {
        currentCity = {
            name: `${[city, countryCode].filter(Boolean).join(', ')}`
        };
    }

    return {
        currentCity,
        summary: jsonResume?.basics?.summary,
        experienceYears: jsonResume?.specific?.work?.experienceYears,
        codeExperienceYears: jsonResume?.specific?.work?.codeExperienceYears,
        otherExperienceYears: jsonResume?.specific?.work?.otherExperienceYears,
        studiesLevel: jsonResume?.specific?.education?.studiesLevel,
        codingYears: jsonResume?.specific?.work?.codingYears,
        codingReason: jsonResume?.specific?.work?.codingReason,
        visaSponsorship: jsonResume?.specific?.basics?.visaSponsorship,
        searchState: jsonResume?.specific?.work?.searchState,
        personalDescription: jsonResume?.specific?.basics?.personalDescription
    };
};

export const mapBasicsDataToJsonResume = (data) => ({
    basics: {
        summary: data.summary,
        location: data.currentCity && { ...data.currentCity, city: data.currentCity.name }
    },
    specific: {
        basics: {
            visaSponsorship: data.visaSponsorship,
            personalDescription: data.personalDescription
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
