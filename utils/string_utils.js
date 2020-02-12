"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashCode = void 0;

// eslint-disable-next-line no-bitwise
var hashCode = function hashCode(str) {
  return Array.from(str).reduce(function (s, c) {
    return Math.imul(31, s) + c.charCodeAt(0) | 0;
  }, 0);
};

exports.hashCode = hashCode;