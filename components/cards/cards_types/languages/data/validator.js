"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLanguagesComplete = exports.LanguageValidator = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Yup = _interopRequireWildcard(require("yup"));

var _validation_translations = require("../../../../../utils/validation_translations");

var _validator_translations = require("./validator_translations");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var LanguageValidator = function LanguageValidator(formatMessage) {
  return Yup.object().shape({
    languages: Yup.array().of(Yup.object().transform(function (value) {
      return _objectSpread({}, value, {
        stillEmployed: !value.endDate
      });
    }).shape({
      language: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).min(2, formatMessage(_validation_translations.validationTranslations.minNumber, {
        min: 2
      })),
      value: Yup.number().required(formatMessage(_validation_translations.validationTranslations.required)).min(0, formatMessage(_validation_translations.validationTranslations.minNumber, {
        min: 0
      })).max(100, formatMessage(_validation_translations.validationTranslations.maxNumber, {
        max: 100
      }))
    })).required(formatMessage(_validator_translations.languagesTranslations.atLeastOne))
  });
};

exports.LanguageValidator = LanguageValidator;

var validateLanguagesComplete = function validateLanguagesComplete(data) {
  try {
    Yup.object({
      languages: Yup.array().required().min(1)
    }).validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateLanguagesComplete = validateLanguagesComplete;