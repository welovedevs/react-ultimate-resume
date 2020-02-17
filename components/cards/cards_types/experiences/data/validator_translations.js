"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.workTranslations = void 0;

var _reactIntl = require("react-intl");

var workTranslations = (0, _reactIntl.defineMessages)({
  noFutureDate: {
    "id": "Work.form.validation.noFutureDate",
    "defaultMessage": "Cette date ne peut pas \xEAtre dans le futur."
  },
  atLeastOne: {
    "id": "Work.form.validation.atLeastOne",
    "defaultMessage": "Fill at least one work experience."
  }
});
exports.workTranslations = workTranslations;