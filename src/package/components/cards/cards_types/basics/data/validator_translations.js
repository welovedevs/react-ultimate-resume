import { defineMessages } from 'react-intl';

export const basicsValidationTranslations = defineMessages({
    atLeastOneContractType: {
        id: 'Basics.form.validation.selectOne',
        defaultMessage: 'Veuillez sélectionner au moins un contrat !'
    },
    selectByGroup: {
        id: 'Basics.form.validation.byGroup',
        defaultMessage: 'Vous ne pouvez pas sélectionner Stage ou Alternance en meme temps que CDI/CDD/Freelance'
    }
});
