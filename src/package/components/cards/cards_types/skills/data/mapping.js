import uuid from 'uuid/v4';

export const mapSkillsFromJsonResume = jsonResume => ({
    skills: (jsonResume?.skills || []).map((item, index) => ({ ...item, index, id: uuid() }))
});
export const mapSkillsToJsonResume = newData => ({
    skills: newData?.skills || []
});
