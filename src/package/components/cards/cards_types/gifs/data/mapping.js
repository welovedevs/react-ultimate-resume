import uuid from 'uuid/v4';

export const mapInterestsFromJsonResume = jsonResume => ({
    interests: jsonResume?.interests?.map((interest, index) => ({
        ...interest,
        // generating uuid for manipulating data if not present
        id: interest.id || uuid(),
        index
    }))
});

export const mapInterestsToJsonResume = data => ({
    interests: data.interests
});
