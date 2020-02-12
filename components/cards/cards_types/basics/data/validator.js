"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsValidationSchema = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _validation_translations = require("../../../../../utils/validation_translations");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BasicsValidationSchema = function BasicsValidationSchema(formatMessage) {
  return Yup.object({
    summary: Yup.string().min(5, formatMessage(_validation_translations.validationTranslations.min, {
      min: 10
    })).max(50, formatMessage(_validation_translations.validationTranslations.min, {
      min: 50
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