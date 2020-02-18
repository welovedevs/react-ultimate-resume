"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateWorkComplete = exports.WorkValidator = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Yup = _interopRequireWildcard(require("yup"));

var _moment = _interopRequireDefault(require("moment"));

var _validation_translations = require("../../../../../utils/validation_translations");

var _validator_translations = require("./validator_translations");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var WorkValidator = function WorkValidator(formatMessage) {
  return Yup.object().shape({
    work: Yup.array().required(formatMessage(_validator_translations.workTranslations.atLeastOne)).min(1, formatMessage(_validator_translations.workTranslations.atLeastOne)).of(Yup.object().transform(function (value) {
      return _objectSpread({}, value, {
        stillEmployed: !value.endDate
      });
    }).shape({
      position: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)),
      name: Yup.string().min(5, formatMessage(_validation_translations.validationTranslations.min, {
        min: 5
      })),
      summary: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).min(30, formatMessage(_validation_translations.validationTranslations.min, {
        min: 30
      })),
      place: Yup.object().nullable().shape({
        name: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).min(5, formatMessage(_validation_translations.validationTranslations.min, {
          min: 5
        }))
      }),
      startDate: Yup.object().required(formatMessage(_validation_translations.validationTranslations.required)).test('is-not-in-future', formatMessage(_validator_translations.workTranslations.noFutureDate), function (value) {
        return value && value.isBefore((0, _moment.default)().add(1, 'day'));
      }).test('is-not-empty', formatMessage(_validation_translations.validationTranslations.required), function (value) {
        return !!value && !Number.isNaN(Number(value.year())) && !Number.isNaN(Number(value.month()));
      }),
      endDate: Yup.object().when('stillEmployed', {
        is: true,
        then: Yup.object().nullable().notRequired(),
        otherwise: Yup.object().when('startDate', function (start) {
          return Yup.object().test('is-not-empty', formatMessage(_validation_translations.validationTranslations.required), function (value) {
            return !!value && !Number.isNaN(Number(value.year())) && !Number.isNaN(Number(value.month()));
          }).test('isafter', formatMessage(_validation_translations.validationTranslations.isAfter), function (value) {
            if (!start || Number.isNaN(Number(start.year())) || Number.isNaN(Number(start.month()))) {
              return true;
            }

            return (0, _moment.default)(value).isAfter(start);
          });
        })
      })
    }))
  });
};

exports.WorkValidator = WorkValidator;

var validateWorkComplete = function validateWorkComplete(data) {
  try {
    Yup.object({
      work: Yup.array().required().min(1)
    }).validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateWorkComplete = validateWorkComplete;