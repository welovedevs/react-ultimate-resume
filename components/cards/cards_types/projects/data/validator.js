"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateProjectsComplete = exports.ProjectValidator = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _validation_translations = require("../../../../../utils/validation_translations");

var ProjectValidator = function ProjectValidator(formatMessage) {
  return Yup.object().shape({
    name: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).min(5, formatMessage(_validation_translations.validationTranslations.min, {
      min: 5
    })),
    description: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).min(100, formatMessage(_validation_translations.validationTranslations.min, {
      min: 100
    })),
    date: Yup.object().nullable().required(formatMessage(_validation_translations.validationTranslations.required)),
    images: Yup.array().of(Yup.object().shape({
      url: Yup.string().required(formatMessage(_validation_translations.validationTranslations.required)).url()
    }))
  });
};

exports.ProjectValidator = ProjectValidator;

var validateProjectsComplete = function validateProjectsComplete(data) {
  try {
    Yup.object({
      projects: Yup.array().required().min(1)
    }).validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateProjectsComplete = validateProjectsComplete;