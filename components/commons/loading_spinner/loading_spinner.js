"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingSpinner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _respinner = require("respinner");

var _styles_utils = require("../../../utils/styles/styles_utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LoadingSpinnerComponent = function LoadingSpinnerComponent(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color;
  var theme = (0, _reactJss.useTheme)();
  var colorHex = (0, _react.useMemo)(function () {
    return (0, _styles_utils.getHexFromPaletteColor)(theme, color);
  }, [theme, color]);
  return _react.default.createElement(_respinner.WaveLoading, {
    stroke: colorHex,
    strokeWidth: 3,
    count: 2
  });
};

var LoadingSpinner = LoadingSpinnerComponent;
exports.LoadingSpinner = LoadingSpinner;