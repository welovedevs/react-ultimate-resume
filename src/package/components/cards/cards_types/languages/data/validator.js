import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';
import { languagesTranslations } from './validator_translations';

export const LanguageValidator = formatMessage =>
    Yup.object().shape({
        languages: Yup.array()
            .of(
                Yup.object()
                    .transform(value => ({ ...value, stillEmployed: !value.endDate }))
                    .shape({
                        language: Yup.string()
                            .required(formatMessage(validationTranslations.required))
                            .min(2, formatMessage(validationTranslations.minNumber, { min: 2 })),
                        value: Yup.number()
                            .required(formatMessage(validationTranslations.required))
                            .min(0, formatMessage(validationTranslations.minNumber, { min: 0 }))
                            .max(100, formatMessage(validationTranslations.maxNumber, { max: 100 }))
                    })
            )
            .required(formatMessage(languagesTranslations.atLeastOne))
    });

export const validateLanguagesComplete = data => {
    try {
        Yup.object({
            languages: Yup.array()
                .required()
                .min(1)
        }).validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
