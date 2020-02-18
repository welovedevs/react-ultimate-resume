"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInterestedByComplete = exports.interestedByValidationSchema = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _validation_translations = require("../../../../../utils/validation_translations");

var interestedByValidationSchema = function interestedByValidationSchema(formatMessage) {
  return Yup.object({
    interestedBy: Yup.string().min(15, formatMessage(_validation_translations.validationTranslations.min, {
      min: 15
    })).required(formatMessage(_validation_translations.validationTranslations.required))
  });
};

exports.interestedByValidationSchema = interestedByValidationSchema;

var validateInterestedByComplete = function validateInterestedByComplete(data) {
  try {
    Yup.object({
      interestedBy: Yup.string().required()
    }).validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateInterestedByComplete = validateInterestedByComplete;