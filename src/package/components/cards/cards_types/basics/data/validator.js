import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';

export const BasicsValidationSchema = formatMessage =>
    Yup.object({
        summary: Yup.string()
            .min(5, formatMessage(validationTranslations.min, { min: 10 }))
            .max(50, formatMessage(validationTranslations.min, { min: 50 })),
        currentCity: Yup.object()
            .nullable()
            .required(formatMessage(validationTranslations.required))
            .shape({
                name: Yup.string()
                    .min(5, formatMessage(validationTranslations.min, { min: 5 }))
                    .required(formatMessage(validationTranslations.required))
            }),
        experienceYears: Yup.number()
            .min(0, formatMessage(validationTranslations.min, { min: 0 }))
            .max(20, formatMessage(validationTranslations.max, { max: 20 }))
            .required(formatMessage(validationTranslations.required)),
        studiesLevel: Yup.number()
            .min(0, formatMessage(validationTranslations.min, { min: 0 }))
            .max(12, formatMessage(validationTranslations.max, { max: 12 }))
            .required(formatMessage(validationTranslations.required)),
        codingYears: Yup.number()
            .min(0, formatMessage(validationTranslations.min, { min: 0 }))
            .max(20, formatMessage(validationTranslations.max, { max: 20 }))
            .required(formatMessage(validationTranslations.required)),
        codingReason: Yup.string().min(10, formatMessage(validationTranslations.min, { min: 10 }))
    });
