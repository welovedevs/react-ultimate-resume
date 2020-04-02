import uuid from 'uuid/v4';

export const mapLanguagesFromJsonResume = (jsonResume) => ({
    languages: jsonResume?.languages?.map((language, index) => ({
        ...language,
        // generating uuid for manipulating data if not present
        id: language.id || uuid(),
        index
    }))
});

export const mapLanguagesToJsonResume = (data) => ({
    languages: data.languages
});
