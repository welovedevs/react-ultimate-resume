"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateWorkComplete = exports.WorkValidator = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _moment = _interopRequireDefault(require("moment"));

var _validation_translations = require("../../../../../utils/validation_translations");

var _validator_translations = require("./validator_translations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WorkValidator = function WorkValidator(formatMessage) {
  return Yup.object().shape({
    work: Yup.array().of(Yup.object().transform(function (value) {
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
    })).required(formatMessage(_validation_translations.validationTranslations.required))
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