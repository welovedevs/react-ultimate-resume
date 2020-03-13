"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translations = void 0;

var _reactIntl = require("react-intl");

var translations = (0, _reactIntl.defineMessages)({
  companyName: {
    "id": "Experiences.editDialog.companyName.title",
    "defaultMessage": "Nom de l'entreprise"
  },
  companyNamePlaceholder: {
    "id": "Experiences.editDialog.companyName.placeholder",
    "defaultMessage": "Exemple : WeLoveDevs.com (facultatif)"
  },
  stillEmployed: {
    "id": "Experiences.editDialog.stillEmployed",
    "defaultMessage": "Toujours en poste"
  },
  jobTitle: {
    "id": "Experiences.editDialog.jobTitle.title",
    "defaultMessage": "Intitul\xE9 du poste"
  },
  jobTitlePlaceholder: {
    "id": "Experiences.editDialog.jobTitle.placeholder",
    "defaultMessage": "Saisissez l'intitul\xE9 du poste pour cette entreprise"
  },
  descriptionTitle: {
    "id": "Experiences.editDialog.description.title",
    "defaultMessage": "Description  du poste"
  },
  descriptionPlaceholder: {
    "id": "Experiences.editDialog.description.placeholder",
    "defaultMessage": "Vos comp\xE9tences et technologies utilis\xE9es pour ce poste - Quel contrat aviez-vous (CDI, Alternance...) ? (30 car. mini)"
  },
  startDate: {
    "id": "Experiences.editDialog.start",
    "defaultMessage": "D\xE9but : "
  },
  endDate: {
    "id": "Experiences.editDialog.end",
    "defaultMessage": "Fin : "
  },
  jobTitleNoCompanyBothDates: {
    "id": "Experiences.editDialog.jobTitleNoCompanyBothDates",
    "defaultMessage": "{jobTitle} de {start} \xE0 {end}"
  },
  jobTitleNoCompanyNoEnd: {
    "id": "Experiences.editDialog.jobTitleNoCompanyNoEnd",
    "defaultMessage": "{jobTitle} depuis {start}"
  },
  jobTitleCompanyBothDates: {
    "id": "Experiences.editDialog.jobTitleCompanyBothDates",
    "defaultMessage": "{jobTitle} chez {companyName} de {start} \xE0 {end}"
  },
  jobTitleCompanyNoEnd: {
    "id": "Experiences.editDialog.jobTitleCompanyNoEnd",
    "defaultMessage": "{jobTitle} chez {companyName} depuis {start}"
  },
  jobPlace: {
    "id": "Experiences.editDialog.jobPlace.title",
    "defaultMessage": "Localisation du poste"
  },
  jobPlacePlaceholder: {
    "id": "Experiences.editDialog.jobPlace.placeholder",
    "defaultMessage": "Where is/was it located?"
  }
});
exports.translations = translations;