import { defineMessages } from 'react-intl';

export const dreamjobValidationTranslations = defineMessages({
    atLeastOneContractType: {
        id: 'Dreamjob.form.validation.selectOne',
        defaultMessage: 'Please select at least one contract !'
    },
    selectByGroup: {
        id: 'Dreamjob.form.validation.byGroup',
        defaultMessage: "You can't pick internship or apprenticeship with Long/Short term contracts or freelance"
    }
});
