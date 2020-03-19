"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashCode = void 0;

/* eslint-disable no-bitwise */
var hashCode = function hashCode() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Array.from(str !== null && str !== void 0 ? str : '').reduce(function (s, c) {
    return Math.imul(31, s) + c.charCodeAt(0) | 0;
  }, 0);
};

exports.hashCode = hashCode;