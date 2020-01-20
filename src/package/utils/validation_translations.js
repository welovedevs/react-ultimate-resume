import { defineMessages } from 'react-intl';

export const validationTranslations = defineMessages({
    required: {
        id: 'Form.validation.global.mandatory',
        defaultMessage: 'Ce champ est obligatoire'
    },
    isAfter: {
        id: 'Form.validation.global.date.mustBeAfter',
        defaultMessage: 'La date de fin doit être supérieure à la date de début'
    },
    min: {
        id: 'Form.validation.global.min',
        defaultMessage: 'Ce champ doit contenir au moins {min} caractères'
    },
    max: {
        id: 'Form.validation.global.max',
        defaultMessage: 'Ce champ doit contenir au maximum {max} caractères'
    },
    minNumber: {
        id: 'Form.validation.global.number.min',
        defaultMessage: 'Ce champ doit être supérieur à {min}'
    },
    maxNumber: {
        id: 'Form.validation.global.number.max',
        defaultMessage: 'Ce champ doit être inférieur à {max}'
    },
    phoneNumber: {
        id: 'Form.validation.global.phoneNumber',
        defaultMessage: 'Ce champ doit être un numéro de téléphone'
    },
    changeDefault: {
        id: 'Form.validation.global.changeNumber',
        defaultMessage: 'Veuillez changer la valeur par défaut de ce champ'
    },
    url: {
        id: 'Form.validation.global.url',
        defaultMessage: 'Ce champ doit être une URL valide'
    }
});
