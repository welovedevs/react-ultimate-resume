"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformTheme = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      var _ref2 = _slicedToArray(_ref, 2),
          colorName = _ref2[0],
          shades = _ref2[1];

      var colorAccumulator = colorsAcc;
      colorAccumulator[colorName] = _objectSpread({}, shades, {
        rgbShades: Object.entries(shades).reduce(function (shadesAcc, _ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              shade = _ref4[0],
              shadeValue = _ref4[1];

          if (isNaN(parseInt(shade, 10))) {
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
    var _ref6 = _slicedToArray(_ref5, 2),
        path = _ref6[0],
        transform = _ref6[1];

    acc[path] = transform((0, _get.default)(theme, path));
    return acc;
  }, theme);
};

exports.transformTheme = transformTheme;