import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';

export const interestedByValidationSchema = formatMessage =>
    Yup.object({
        interestedBy: Yup.string()
            .min(15, formatMessage(validationTranslations.min, { min: 15 }))
            .required(formatMessage(validationTranslations.required))
    });
