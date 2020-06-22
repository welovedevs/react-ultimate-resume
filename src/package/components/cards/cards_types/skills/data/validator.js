import * as Yup from 'yup';
import { skillTranslations } from './validator_translations';

const DEFAULT_MAX_ITEMS = 12;
export const SkillsValidationSchema = (formatMessage = () => {}, options = { limitTo: DEFAULT_MAX_ITEMS }) => {
    const count = Number.isNaN(Number(options.limitTo)) ? DEFAULT_MAX_ITEMS : options.limitTo;
    return Yup.object({
        skills: Yup.array()
            .required(formatMessage(skillTranslations.atLeastOne))
            .min(1, formatMessage(skillTranslations.atLeastOne))
            .max(count, formatMessage(skillTranslations.atMost, { count }))
    });
};
export const validateSkillsComplete = (data) => {
    try {
        SkillsValidationSchema().validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
