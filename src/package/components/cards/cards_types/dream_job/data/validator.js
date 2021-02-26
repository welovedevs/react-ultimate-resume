import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';
import { dreamjobValidationTranslations } from './validator_translations';
import { hasOnlyFreelanceContract } from '../../../utils/has_only_freelance_contract';

export const DreamJobValidationSchema = (formatMessage) =>
    Yup.object({
        places: Yup.array().of(
            Yup.object().shape({
                name: Yup.string()
                    .min(5, formatMessage(validationTranslations.min, { min: 5 }))
                    .required(formatMessage(validationTranslations.required))
            })
        ),
        contractTypes: Yup.array()
            .test(
                'is-not-empty',
                formatMessage(dreamjobValidationTranslations.atLeastOneContractType),
                (value) => !!(value || []).length
            )
            .test(
                'is-exclusif',
                formatMessage(dreamjobValidationTranslations.selectByGroup),
                (value) =>
                    !(
                        ['permanent', 'fixedTerm', 'freelance'].filter((val) => value.includes(val)).length &&
                        ['apprenticeship', 'internship'].filter((val) => value.includes(val)).length
                    )
            ),
        salary: Yup.number().when('contractTypes', {
            is: (contractType) => hasOnlyFreelanceContract(contractType),
            then: Yup.number().nullable().notRequired(),
            otherwise: Yup.number().min(1, formatMessage(validationTranslations.minNumber, { min: 1 }))
        }),
        averageDailyRate: Yup.number().when('contractTypes', {
            is: (contractType) => hasOnlyFreelanceContract(contractType),
            then: Yup.number().min(1, formatMessage(validationTranslations.minNumber, { min: 1 })),
            otherwise: Yup.number().nullable().notRequired()
        })
    });

export const validateDreamjobComplete = (data) => {
    try {
        Yup.object({
            places: Yup.array().required(),
            contractTypes: Yup.array().required()
        }).validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
