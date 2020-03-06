"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeOmitNull = void 0;

var mergeOmitNull = function mergeOmitNull(a, b) {
  return b === null ? a : undefined;
};

exports.mergeOmitNull = mergeOmitNull;