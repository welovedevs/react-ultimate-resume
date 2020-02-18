"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSkillsComplete = exports.SkillsValidationSchema = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _validator_translations = require("./validator_translations");

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