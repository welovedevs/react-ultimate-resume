import * as Yup from 'yup';
import { skillTranslations } from './validator_translations';

export const SkillsValidationSchema = (formatMessage = () => {}) =>
    Yup.object({
        skills: Yup.array().required(formatMessage(skillTranslations.atLeastOne)).min(1)
    });
export const validateSkillsComplete = (data) => {
    try {
        SkillsValidationSchema().validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
