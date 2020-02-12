"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSpring = require("react-spring");

var _reactJss = require("react-jss");

var _recharts = require("recharts");

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var _skills_back_recharts_utils = require("../utils/skills_back_recharts_utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var GRAPH_HEIGHT = 250;
var GRAPH_PIE_RADIUS = 100;

var SkillsPieChart = function SkillsPieChart(_ref) {
  var _theme$components, _theme$components$car;

  var data = _ref.data,
      variant = _ref.variant,
      springOnOpenOpacityProps = _ref.springOnOpenOpacityProps,
      springOnScrollOpacityProps = _ref.springOnScrollOpacityProps,
      onAnimationEnd = _ref.onAnimationEnd,
      widthProps = _ref.width;
  var theme = (0, _reactJss.useTheme)();

  var _useMemo = (0, _react.useMemo)(function () {
    return {
      contentColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color),
      backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backgroundColor)
    };
  }, [theme, variant]),
      contentColor = _useMemo.contentColor,
      backgroundColor = _useMemo.backgroundColor;

  var colorPalette = (0, _react.useMemo)(function () {
    return Array.from({
      length: 3
    }, function (v, k) {
      return _chromaJs.default.mix(contentColor, backgroundColor, 2 * k / 10).hex();
    });
  }, [contentColor, backgroundColor]);
  var width = widthProps || (theme === null || theme === void 0 ? void 0 : (_theme$components = theme.components) === null || _theme$components === void 0 ? void 0 : (_theme$components$car = _theme$components.cards) === null || _theme$components$car === void 0 ? void 0 : _theme$components$car.width);
  return _react.default.createElement(_reactSpring.animated.div, {
    style: {
      opacity: springOnScrollOpacityProps && springOnScrollOpacityProps.opacity
    }
  }, _react.default.createElement(_recharts.PieChart, {
    width: width,
    height: GRAPH_HEIGHT
  }, _react.default.createElement(_recharts.Pie, {
    dataKey: "value",
    animationDuration: 750,
    labelLine: false,
    label: function label(shapeProps) {
      return _react.default.createElement(_skills_back_recharts_utils.CustomLabel, _extends({
        customColor: contentColor,
        springProps: springOnOpenOpacityProps
      }, shapeProps));
    },
    data: data,
    cx: width / 2,
    cy: GRAPH_HEIGHT / 2,
    outerRadius: GRAPH_PIE_RADIUS,
    onAnimationEnd: onAnimationEnd
  }, data.map(function (entry, index) {
    return _react.default.createElement(_recharts.Cell, {
      key: "cell-".concat(index),
      fill: colorPalette[index],
      stroke: backgroundColor
    });
  }))));
};

var _default = SkillsPieChart;
exports.default = _default;