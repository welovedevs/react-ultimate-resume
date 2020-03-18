import { defineMessages } from 'react-intl';

export const workTranslations = defineMessages({
    noFutureDate: {
        id: 'Work.form.validation.noFutureDate',
        defaultMessage: 'This date cannot be in the future.'
    },
    atLeastOne: {
        id: 'Work.form.validation.atLeastOne',
        defaultMessage: 'Fill at least one work experience.'
    }
});
