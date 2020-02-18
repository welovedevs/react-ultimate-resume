"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformTheme = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _get = _interopRequireDefault(require("lodash/get"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var hexToRgb = function hexToRgb(hex) {
  var c;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');

    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }

    c = "0x".concat(c.join('')); // eslint-disable-next-line no-bitwise

    return [c >> 16 & 255, c >> 8 & 255, c & 255];
  }

  throw new Error('Bad Hex');
};

var THEME_TRANSFORMS = Object.freeze({
  palette: function palette(colors) {
    return Object.entries(colors).reduce(function (colorsAcc, _ref) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
          colorName = _ref2[0],
          shades = _ref2[1];

      var colorAccumulator = colorsAcc;
      colorAccumulator[colorName] = _objectSpread({}, shades, {
        rgbShades: Object.entries(shades).reduce(function (shadesAcc, _ref3) {
          var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
              shade = _ref4[0],
              shadeValue = _ref4[1];

          if (Number.isNaN(parseInt(shade, 10))) {
            return shadesAcc;
          }

          var shadesAccumulator = shadesAcc;
          shadesAccumulator[shade] = hexToRgb(shadeValue);
          return shadesAccumulator;
        }, {})
      });
      return colorAccumulator;
    }, {});
  }
});

var transformTheme = function transformTheme(theme) {
  return Object.entries(THEME_TRANSFORMS).reduce(function (acc, _ref5) {
    var _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
        path = _ref6[0],
        transform = _ref6[1];

    acc[path] = transform((0, _get.default)(theme, path));
    return acc;
  }, theme);
};

exports.transformTheme = transformTheme;