"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactSpring = require("react-spring");

var _reactJss = require("react-jss");

var _recharts = require("recharts");

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery/useMediaQuery"));

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var _skills_back_recharts_utils = require("../utils/skills_back_recharts_utils");

var _skills_pie_chart_styles = require("./skills_pie_chart_styles");

// const GRAPH_PIE_RADIUS = 100;
var useStyles = (0, _reactJss.createUseStyles)(_skills_pie_chart_styles.styles);

var SkillsPieChart = function SkillsPieChart(_ref) {
  var data = _ref.data,
      variant = _ref.variant,
      springOnOpenOpacityProps = _ref.springOnOpenOpacityProps,
      springOnScrollOpacityProps = _ref.springOnScrollOpacityProps;
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
  return (/*#__PURE__*/_react.default.createElement(_reactSpring.animated.div, {
      // ref={wrapperRef}
      className: classes.wrapper,
      style: {
        opacity: springOnScrollOpacityProps && springOnScrollOpacityProps.opacity
      }
    }, /*#__PURE__*/_react.default.createElement(_recharts.ResponsiveContainer, {
      height: "100%",
      width: "100%"
    }, /*#__PURE__*/_react.default.createElement(_recharts.PieChart, null, /*#__PURE__*/_react.default.createElement(_recharts.Pie, {
      isAnimationActive: false,
      dataKey: "value",
      labelLine: false,
      label: function label(shapeProps) {
        return (/*#__PURE__*/_react.default.createElement(_skills_back_recharts_utils.CustomLabel, (0, _extends2.default)({
            customColor: contentColor,
            springProps: springOnOpenOpacityProps
          }, shapeProps))
        );
      },
      data: data,
      outerRadius: isMobile ? '50%' : '70%'
    }, data.map(function (entry, index) {
      return (/*#__PURE__*/_react.default.createElement(_recharts.Cell, {
          key: "cell-".concat(index),
          fill: colorPalette[index],
          stroke: backgroundColor
        })
      );
    })))))
  );
};

var _default = SkillsPieChart;
exports.default = _default;