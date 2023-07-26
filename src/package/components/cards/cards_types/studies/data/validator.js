import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';
import { studiesTranslations } from './validator_translations';

export const StudiesValidator = (formatMessage) =>
    Yup.object().shape({
        education: Yup.array()
            .of(
                Yup.object({
                    institution: Yup.string().required(formatMessage(validationTranslations.required)),
                    studyType: Yup.string().required(formatMessage(validationTranslations.required)),
                    area: Yup.string().required(formatMessage(validationTranslations.required)),
                    endDate: Yup.number()
                        .required(formatMessage(validationTranslations.required))
                        .min(1970, formatMessage(validationTranslations.minNumber, { min: 1970 }))
                        .max(2100, formatMessage(validationTranslations.minNumber, { min: 2100 }))
                })
            )
            .required(formatMessage(studiesTranslations.atLeastOne))
    });

export const validateStudiesComplete = (data) => {
    try {
        Yup.object({
            education: Yup.array().required().min(1)
        }).validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
