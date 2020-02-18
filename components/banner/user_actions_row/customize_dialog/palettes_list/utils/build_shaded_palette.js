"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildShadedPalette = void 0;

var _values = _interopRequireDefault(require("values.js"));

var buildShadedPalette = function buildShadedPalette(hex) {
  var values = new _values.default(hex);
  return {
    50: "#".concat(values.tint(90).hex),
    100: "#".concat(values.tint(80).hex),
    200: "#".concat(values.tint(60).hex),
    300: "#".concat(values.tint(40).hex),
    400: "#".concat(values.tint(20).hex),
    500: hex,
    600: "#".concat(values.shade(20).hex),
    700: "#".concat(values.shade(40).hex),
    800: "#".concat(values.shade(60).hex),
    900: "#".concat(values.shade(80).hex),
    contrastDefaultColor: 'light'
  };
};

exports.buildShadedPalette = buildShadedPalette;