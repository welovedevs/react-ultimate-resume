"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDreamjobComplete = exports.DreamJobValidationSchema = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _validation_translations = require("../../../../../utils/validation_translations");

var _validator_translations = require("./validator_translations");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      min: 5
    }))
  });
};

exports.DreamJobValidationSchema = DreamJobValidationSchema;

var validateDreamjobComplete = function validateDreamjobComplete(data) {
  try {
    Yup.object({
      places: Yup.array().required(),
      contractTypes: Yup.object().nullable().required()
    }).validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateDreamjobComplete = validateDreamjobComplete;