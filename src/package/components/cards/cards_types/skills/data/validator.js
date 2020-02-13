import * as Yup from 'yup';

export const validateSkillsComplete = data => {
    try {
        Yup.object({
            skills: Yup.array()
                .required()
                .min(1)
        }).validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
