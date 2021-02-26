import * as Yup from 'yup';
import moment from 'moment';
import { validationTranslations } from '../../../../../utils/validation_translations';
import { workTranslations } from './validator_translations';

export const WorkValidator = (formatMessage) =>
    Yup.object().shape({
        work: Yup.array()
            .required(formatMessage(workTranslations.atLeastOne))
            .min(1, formatMessage(workTranslations.atLeastOne))
            .of(
                Yup.object()
                    .transform((value) => ({ ...value, stillEmployed: !value.endDate }))
                    .shape({
                        position: Yup.string().required(formatMessage(validationTranslations.required)),
                        name: Yup.string().required(formatMessage(validationTranslations.required)),
                        summary: Yup.string()
                            .required(formatMessage(validationTranslations.required))
                            .min(30, formatMessage(validationTranslations.min, { min: 30 })),
                        place: Yup.object()
                            .nullable()
                            .shape({
                                name: Yup.string()
                                    .required(formatMessage(validationTranslations.required))
                                    .min(5, formatMessage(validationTranslations.min, { min: 5 }))
                            }),
                        startDate: Yup.object()
                            .required(formatMessage(validationTranslations.required))
                            .test(
                                'is-not-in-future',
                                formatMessage(workTranslations.noFutureDate),
                                (value) => value && value.isBefore(moment().add(1, 'day'))
                            )
                            .test(
                                'is-not-empty',
                                formatMessage(validationTranslations.required),
                                (value) =>
                                    !!value &&
                                    !Number.isNaN(Number(value.year())) &&
                                    !Number.isNaN(Number(value.month()))
                            ),

                        endDate: Yup.object().when('stillEmployed', {
                            is: true,
                            then: Yup.object().nullable().notRequired(),
                            otherwise: Yup.object().when('startDate', (start) =>
                                Yup.object()
                                    .test(
                                        'is-not-empty',
                                        formatMessage(validationTranslations.required),
                                        (value) =>
                                            !!value &&
                                            !Number.isNaN(Number(value.year())) &&
                                            !Number.isNaN(Number(value.month()))
                                    )
                                    .test('isafter', formatMessage(validationTranslations.isAfter), (value) => {
                                        if (
                                            !start ||
                                            Number.isNaN(Number(start.year())) ||
                                            Number.isNaN(Number(start.month()))
                                        ) {
                                            return true;
                                        }
                                        return moment(value).isSameOrAfter(start);
                                    })
                            )
                        })
                    })
            )
    });

export const validateWorkComplete = (data) => {
    try {
        Yup.object({
            work: Yup.array().required().min(1)
        }).validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
