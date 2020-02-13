import { defineMessages } from 'react-intl';

export const workTranslations = defineMessages({
    noFutureDate: {
        id: 'Work.form.validation.noFutureDate',
        defaultMessage: 'Cette date ne peut pas être dans le futur.'
    },
    atLeastOne: {
        id: 'Work.form.validation.atLeastOne',
        defaultMessage: 'Fill at least one work experience.'
    }
});
