"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.existsAndNotEmpty = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var existsAndNotEmpty = function existsAndNotEmpty(value) {
  if (!value) {
    return false;
  }

  if (Array.isArray(value)) {
    return Boolean(value.length);
  }

  if ((0, _typeof2.default)(value) === 'object') {
    return Boolean(Object.keys(value).length);
  }

  return Boolean(value);
};

exports.existsAndNotEmpty = existsAndNotEmpty;