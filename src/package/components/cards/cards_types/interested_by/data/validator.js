import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';

export const interestedByValidationSchema = (formatMessage) =>
    Yup.object({
        interestedBy: Yup.string()
            .min(15, formatMessage(validationTranslations.min, { min: 15 }))
            .required(formatMessage(validationTranslations.required))
    });

export const validateInterestedByComplete = (data) => {
    try {
        Yup.object({
            interestedBy: Yup.string().required()
        }).validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
