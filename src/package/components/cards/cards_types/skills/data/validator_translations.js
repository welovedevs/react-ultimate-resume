import { defineMessages } from 'react-intl';

export const skillTranslations = defineMessages({
    atLeastOne: {
        id: 'Skills.form.validation.atLeastOne',
        defaultMessage: 'Select at least one skill.'
    },
    atMost: {
        id: 'Skills.form.validation.atMost',
        defaultMessage: 'Select at most {limitTo} skill{limitTo, plural, one {} other{s}}.'
    }
});
