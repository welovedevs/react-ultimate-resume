"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudiesValidator = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _validation_translations = require("../../../../../utils/validation_translations");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StudiesValidator = function StudiesValidator(formatMessage) {
  return Yup.object().shape({
    education: Yup.array().of(Yup.object({
      institution: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)),
      studyType: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)),
      area: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)),
      endDate: Yup.object().test('is-not-empty', formatMessage(_validation_translations.validationTranslations.required), function (value) {
        return !!value && !Number.isNaN(Number(value.year()));
      })
    }))
  });
};

exports.StudiesValidator = StudiesValidator;