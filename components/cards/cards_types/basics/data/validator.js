"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateBasicsComplete = exports.BasicsValidationSchema = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _validation_translations = require("../../../../../utils/validation_translations");

var BasicsValidationSchema = function BasicsValidationSchema(formatMessage) {
  return Yup.object({
    summary: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).min(5, formatMessage(_validation_translations.validationTranslations.min, {
      min: 5
    })).max(50, formatMessage(_validation_translations.validationTranslations.max, {
      max: 50
    })),
    currentCity: Yup.object().nullable().required(formatMessage(_validation_translations.validationTranslations.required)).shape({
      name: Yup.string().min(5, formatMessage(_validation_translations.validationTranslations.min, {
        min: 5
      })).required(formatMessage(_validation_translations.validationTranslations.required))
    }),
    experienceYears: Yup.number().min(0, formatMessage(_validation_translations.validationTranslations.min, {
      min: 0
    })).max(20, formatMessage(_validation_translations.validationTranslations.max, {
      max: 20
    })).required(formatMessage(_validation_translations.validationTranslations.required)),
    studiesLevel: Yup.number().min(0, formatMessage(_validation_translations.validationTranslations.min, {
      min: 0
    })).max(12, formatMessage(_validation_translations.validationTranslations.max, {
      max: 12
    })).required(formatMessage(_validation_translations.validationTranslations.required)),
    codingYears: Yup.number().min(0, formatMessage(_validation_translations.validationTranslations.min, {
      min: 0
    })).max(20, formatMessage(_validation_translations.validationTranslations.max, {
      max: 20
    })).required(formatMessage(_validation_translations.validationTranslations.required)),
    codingReason: Yup.string().min(10, formatMessage(_validation_translations.validationTranslations.min, {
      min: 10
    }))
  });
};

exports.BasicsValidationSchema = BasicsValidationSchema;

var validateBasicsComplete = function validateBasicsComplete(data) {
  try {
    Yup.object({
      summary: Yup.string().required(),
      currentCity: Yup.object().nullable().required(),
      experienceYears: Yup.number().required(),
      studiesLevel: Yup.number().required(),
      codingYears: Yup.number().required()
    }).validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateBasicsComplete = validateBasicsComplete;