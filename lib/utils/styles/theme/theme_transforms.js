"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformTheme = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var hexToRgb = function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF").
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
};

var THEME_TRANSFORMS = Object.freeze({
  palette: function palette(colors) {
    return Object.entries(colors).reduce(function (colorsAcc, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          colorName = _ref2[0],
          shades = _ref2[1];

      var colorAccumulator = colorsAcc;
      colorAccumulator[colorName].rgbShades = Object.entries(shades).reduce(function (shadesAcc, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            shade = _ref4[0],
            shadeValue = _ref4[1];

        if (isNaN(parseInt(shade, 10))) {
          return shadesAcc;
        }

        var shadesAccumulator = shadesAcc;
        shadesAccumulator[shade] = hexToRgb(shadeValue);
        return shadesAccumulator;
      }, {});
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
  }, theme);
};

exports.transformTheme = transformTheme;