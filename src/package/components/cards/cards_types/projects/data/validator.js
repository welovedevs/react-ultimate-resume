import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';

export const ProjectValidator = formatMessage =>
    Yup.object().shape({
        name: Yup.string()
            .required(formatMessage(validationTranslations.required))
            .min(5, formatMessage(validationTranslations.min, { min: 5 })),
        description: Yup.string()
            .required(formatMessage(validationTranslations.required))
            .min(100, formatMessage(validationTranslations.min, { min: 100 })),
        date: Yup.object()
            .nullable()
            .required(formatMessage(validationTranslations.required)),
        images: Yup.array().of(
            Yup.object().shape({
                url: Yup.string()
                    .required(formatMessage(validationTranslations.required))
                    .url()
            })
        )
    });

export const validateProjectsComplete = data => {
    try {
        Yup.object({
            projects: Yup.array()
                .required()
                .min(1)
        }).validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
