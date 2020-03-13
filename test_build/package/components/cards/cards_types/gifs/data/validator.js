"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInterestsComplete = exports.interestsValidator = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Yup = _interopRequireWildcard(require("yup"));

var _validation_translations = require("../../../../../utils/validation_translations");

var _validator_translations = require("./validator_translations");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var interestsValidator = function interestsValidator(formatMessage) {
  return Yup.object().shape({
    interests: Yup.array().of(Yup.object().transform(function (value) {
      return _objectSpread({}, value, {
        stillEmployed: !value.endDate
      });
    }).shape({
      name: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).min(2, formatMessage(_validation_translations.validationTranslations.min, {
        min: 2
      })),
      gifUrl: Yup.string()
    })).required(formatMessage(_validator_translations.interestsTranslations.atLeastOne))
  });
};

exports.interestsValidator = interestsValidator;

var validateInterestsComplete = function validateInterestsComplete(data) {
  try {
    Yup.object({
      interests: Yup.array().required().min(1)
    }).validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateInterestsComplete = validateInterestsComplete;