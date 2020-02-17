"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSkillsComplete = exports.SkillsValidationSchema = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _validator_translations = require("./validator_translations");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SkillsValidationSchema = function SkillsValidationSchema() {
  var formatMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  return Yup.object({
    skills: Yup.array().required(formatMessage(_validator_translations.skillTranslations.atLeastOne)).min(1)
  });
};

exports.SkillsValidationSchema = SkillsValidationSchema;

var validateSkillsComplete = function validateSkillsComplete(data) {
  try {
    SkillsValidationSchema().validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateSkillsComplete = validateSkillsComplete;