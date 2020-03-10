import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';
import { interestsTranslations } from './validator_translations';

export const interestsValidator = formatMessage =>
    Yup.object().shape({
        interests: Yup.array()
            .of(
                Yup.object()
                    .transform(value => ({ ...value, stillEmployed: !value.endDate }))
                    .shape({
                        name: Yup.string()
                            .required(formatMessage(validationTranslations.required))
                            .min(2, formatMessage(validationTranslations.min, { min: 2 })),
                        gifUrl: Yup.string()
                    })
            )
            .required(formatMessage(interestsTranslations.atLeastOne))
    });

export const validateInterestsComplete = data => {
    try {
        Yup.object({
            interests: Yup.array()
                .required()
                .min(1)
        }).validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
