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

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery/useMediaQuery"));

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var _skills_back_recharts_utils = require("../utils/skills_back_recharts_utils");

var _skills_pie_chart_styles = require("./skills_pie_chart_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// const GRAPH_PIE_RADIUS = 100;
var useStyles = (0, _reactJss.createUseStyles)(_skills_pie_chart_styles.styles);

var SkillsPieChart = function SkillsPieChart(_ref) {
  var data = _ref.data,
      variant = _ref.variant,
      springOnOpenOpacityProps = _ref.springOnOpenOpacityProps,
      springOnScrollOpacityProps = _ref.springOnScrollOpacityProps,
      onAnimationEnd = _ref.onAnimationEnd;
  var classes = useStyles();
  var theme = (0, _reactJss.useTheme)();
  var isMobile = (0, _useMediaQuery.default)("(max-width: ".concat(theme.screenSizes.small, "px)"));

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
  return _react.default.createElement(_reactSpring.animated.div, {
    // ref={wrapperRef}
    className: classes.wrapper,
    style: {
      opacity: springOnScrollOpacityProps && springOnScrollOpacityProps.opacity
    }
  }, _react.default.createElement(_recharts.ResponsiveContainer, {
    height: "100%",
    width: "100%"
  }, _react.default.createElement(_recharts.PieChart, null, _react.default.createElement(_recharts.Pie, {
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
    outerRadius: isMobile ? '50%' : undefined,
    onAnimationEnd: onAnimationEnd
  }, data.map(function (entry, index) {
    return _react.default.createElement(_recharts.Cell, {
      key: "cell-".concat(index),
      fill: colorPalette[index],
      stroke: backgroundColor
    });
  })))));
};

var _default = SkillsPieChart;
exports.default = _default;