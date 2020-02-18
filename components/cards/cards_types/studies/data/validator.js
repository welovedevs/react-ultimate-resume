"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateStudiesComplete = exports.StudiesValidator = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _validation_translations = require("../../../../../utils/validation_translations");

var _validator_translations = require("./validator_translations");

var StudiesValidator = function StudiesValidator(formatMessage) {
  return Yup.object().shape({
    education: Yup.array().of(Yup.object({
      institution: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)),
      studyType: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)),
      area: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)),
      endDate: Yup.object().test('is-not-empty', formatMessage(_validation_translations.validationTranslations.required), function (value) {
        return !!value && !Number.isNaN(Number(value.year()));
      })
    })).required(formatMessage(_validator_translations.studiesTranslations.atLeastOne))
  });
};

exports.StudiesValidator = StudiesValidator;

var validateStudiesComplete = function validateStudiesComplete(data) {
  try {
    Yup.object({
      education: Yup.array().required().min(1)
    }).validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateStudiesComplete = validateStudiesComplete;