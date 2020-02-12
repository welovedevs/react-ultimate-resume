"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationTranslations = void 0;

var _reactIntl = require("react-intl");

var validationTranslations = (0, _reactIntl.defineMessages)({
  required: {
    "id": "Form.validation.global.mandatory",
    "defaultMessage": "Ce champ est obligatoire"
  },
  isAfter: {
    "id": "Form.validation.global.date.mustBeAfter",
    "defaultMessage": "La date de fin doit \xEAtre sup\xE9rieure \xE0 la date de d\xE9but"
  },
  min: {
    "id": "Form.validation.global.min",
    "defaultMessage": "Ce champ doit contenir au moins {min} caract\xE8res"
  },
  max: {
    "id": "Form.validation.global.max",
    "defaultMessage": "Ce champ doit contenir au maximum {max} caract\xE8res"
  },
  minNumber: {
    "id": "Form.validation.global.number.min",
    "defaultMessage": "Ce champ doit \xEAtre sup\xE9rieur \xE0 {min}"
  },
  maxNumber: {
    "id": "Form.validation.global.number.max",
    "defaultMessage": "Ce champ doit \xEAtre inf\xE9rieur \xE0 {max}"
  },
  phoneNumber: {
    "id": "Form.validation.global.phoneNumber",
    "defaultMessage": "Ce champ doit \xEAtre un num\xE9ro de t\xE9l\xE9phone"
  },
  changeDefault: {
    "id": "Form.validation.global.changeNumber",
    "defaultMessage": "Veuillez changer la valeur par d\xE9faut de ce champ"
  },
  url: {
    "id": "Form.validation.global.url",
    "defaultMessage": "Ce champ doit \xEAtre une URL valide"
  }
});
exports.validationTranslations = validationTranslations;