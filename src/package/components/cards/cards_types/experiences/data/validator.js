import * as Yup from 'yup';
import * as moment from 'moment';
import { validationTranslations } from '../../../../../utils/validation_translations';
import { workTranslations } from './validator_translations';

export const WorkValidator = formatMessage =>
    Yup.object().shape({
        currentJobTitle: Yup.string()
            .required(formatMessage(validationTranslations.required))
            .min(10, formatMessage(validationTranslations.min, { min: 10 })),
        currentJobLocation: Yup.object()
            .nullable()
            .required(formatMessage(validationTranslations.required))
            .shape({
                name: Yup.string()
                    .min(5, formatMessage(validationTranslations.min, { min: 5 }))
                    .required(formatMessage(validationTranslations.required))
            }),
        work: Yup.array()
            .of(
                Yup.object()
                    .transform(value => ({ ...value, stillEmployed: !value.endDate }))
                    .shape({
                        position: Yup.string().required(formatMessage(validationTranslations.required)),
                        name: Yup.string().min(5, formatMessage(validationTranslations.min, { min: 5 })),
                        summary: Yup.string()
                            .required(formatMessage(validationTranslations.required))
                            .min(30, formatMessage(validationTranslations.min, { min: 30 })),
                        startDate: Yup.object()
                            .required(formatMessage(validationTranslations.required))
                            .test(
                                'is-not-in-future',
                                formatMessage(workTranslations.noFutureDate),
                                value => value && value.isBefore(moment().add(1, 'day'))
                            )
                            .test(
                                'is-not-empty',
                                formatMessage(validationTranslations.required),
                                value =>
                                    !!value &&
                                    !Number.isNaN(Number(value.year())) &&
                                    !Number.isNaN(Number(value.month()))
                            ),

                        endDate: Yup.object().when('stillEmployed', {
                            is: true,
                            then: Yup.object()
                                .nullable()
                                .notRequired(),
                            otherwise: Yup.object().when('startDate', start =>
                                Yup.object()
                                    .test(
                                        'is-not-empty',
                                        formatMessage(validationTranslations.required),
                                        value =>
                                            !!value &&
                                            !Number.isNaN(Number(value.year())) &&
                                            !Number.isNaN(Number(value.month()))
                                    )
                                    .test('isafter', formatMessage(validationTranslations.isAfter), value => {
                                        if (
                                            !start ||
                                            Number.isNaN(Number(start.year())) ||
                                            Number.isNaN(Number(start.month()))
                                        ) {
                                            return true;
                                        }
                                        return moment(value).isAfter(start);
                                    })
                            )
                        })
                    })
            )
            .required(formatMessage(validationTranslations.required))
    });
