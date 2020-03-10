"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSoundtrackComplete = exports.SoundtrackValidationSchema = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var SoundtrackValidationSchema = function SoundtrackValidationSchema() {
  return Yup.object({
    embedUrl: Yup.string().max(100).url().required()
  });
};

exports.SoundtrackValidationSchema = SoundtrackValidationSchema;

var validateSoundtrackComplete = function validateSoundtrackComplete(data) {
  try {
    SoundtrackValidationSchema().validateSync(data);
  } catch (e) {
    return false;
  }

  return true;
};

exports.validateSoundtrackComplete = validateSoundtrackComplete;