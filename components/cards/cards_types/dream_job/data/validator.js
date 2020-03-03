"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDreamjobComplete = exports.DreamJobValidationSchema = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _validation_translations = require("../../../../../utils/validation_translations");

var _validator_translations = require("./validator_translations");

var DreamJobValidationSchema = function DreamJobValidationSchema(formatMessage) {
  return Yup.object({
    places: Yup.array().of(Yup.object().shape({
      name: Yup.string().min(5, formatMessage(_validation_translations.validationTranslations.min, {
        min: 5
      })).required(formatMessage(_validation_translations.validationTranslations.required))
    })),
    contractTypes: Yup.array().test('is-not-empty', formatMessage(_validator_translations.basicsValidationTranslations.atLeastOneContractType), function (value) {
      return !!(value || []).length;
    }).test('is-exclusif', formatMessage(_validator_translations.basicsValidationTranslations.selectByGroup), function (value) {
      return !(['permanent', 'fixedTerm', 'freelance'].filter(function (val) {
        return value.includes(val);
      }).length && ['apprenticeship', 'internship'].filter(function (val) {
        return value.includes(val);
      }).length);
    }),
    salary: Yup.string().min(2, formatMessage(_validation_translations.validationTranslations.min, {
      min: 2
    }))
  });
};

exports.DreamJobValidationSchema = DreamJobValidationSchema;

var validateDreamjobComplete = function validateDreamjobComplete(data) {
  try {
    Yup.object({
      places: Yup.array().required(),
      contractTypes: Yup.array().required()
    }).validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateDreamjobComplete = validateDreamjobComplete;