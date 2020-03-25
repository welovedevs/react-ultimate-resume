"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomLabel = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _reactJss = require("react-jss");

var _skills_back_recharts_styles = require("./skills_back_recharts_styles");

var _use_technologies = require("../../../../../hooks/technologies/use_technologies");

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var _use_card_variant = require("../../../../../hooks/profile_card_hooks/use_card_variant");

var _icons = require("../../../../../../utils/icons");

var useStyles = (0, _reactJss.createUseStyles)(_skills_back_recharts_styles.styles);

var CustomLabel = function CustomLabel(props) {
  var theme = (0, _reactJss.useTheme)();
  var classes = useStyles();

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var _getColorsFromCardVar = (0, _styles_utils.getColorsFromCardVariant)(theme, variant),
      backgroundColor = _getColorsFromCardVar.backgroundColor;

  var _useTechnologies = (0, _use_technologies.useTechnologies)(),
      technologies = _useTechnologies.technologies;

  var cx = props.cx,
      cy = props.cy,
      midAngle = props.midAngle,
      customColor = props.customColor,
      outerRadius = props.outerRadius,
      name = props.name;
  var techno = (0, _react.useMemo)(function () {
    if (!technologies) {
      return null;
    }

    return technologies[name];
  }, [technologies, name]);
  var src = (0, _react.useMemo)(function () {
    var hex = (0, _styles_utils.getHexFromPaletteColor)(theme, backgroundColor);
    var luminance = (0, _chromaJs.default)(hex).luminance();

    if (luminance < 0.98) {
      return "https://process.filestackapi.com/output=format:png/negative/modulate=brightness:1000/compress/".concat((techno === null || techno === void 0 ? void 0 : techno.handle) || _icons.DEFAULT_TECHNO_HANDLE);
    }

    return "https://process.filestackapi.com/output=format:png/".concat((techno === null || techno === void 0 ? void 0 : techno.handle) || _icons.DEFAULT_TECHNO_HANDLE);
  }, [techno, theme, backgroundColor]);

  var _useMemo = (0, _react.useMemo)(function () {
    var RADIAN = Math.PI / 180;
    var textOffset = name.length * 4.5;
    var sinLocal = Math.sin(-RADIAN * midAngle);
    var cosLocal = Math.cos(-RADIAN * midAngle);
    var startXLocal = cx + outerRadius * cosLocal;
    var startYLocal = cy + outerRadius * sinLocal;
    var inflexionXLocal = cx + (outerRadius + 20) * cosLocal;
    var inflexionYLocal = cy + (outerRadius + 20) * sinLocal;
    var endXLocal = inflexionXLocal + (cosLocal >= 0 ? 1 : -1) * 25;
    return {
      cos: cosLocal,
      startX: startXLocal,
      startY: startYLocal,
      inflexionX: inflexionXLocal,
      inflexionY: inflexionYLocal,
      endX: endXLocal,
      endY: inflexionYLocal,
      textAnchor: cosLocal >= 0 ? 'start' : 'end',
      logoXOffset: cosLocal >= 0 ? textOffset - 12.5 : -textOffset - 12.5
    };
  }, [midAngle, outerRadius, cx, cy]),
      cos = _useMemo.cos,
      startX = _useMemo.startX,
      startY = _useMemo.startY,
      inflexionX = _useMemo.inflexionX,
      inflexionY = _useMemo.inflexionY,
      endX = _useMemo.endX,
      endY = _useMemo.endY,
      textAnchor = _useMemo.textAnchor,
      logoXOffset = _useMemo.logoXOffset;

  return _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M".concat(startX, ",").concat(startY, "L").concat(inflexionX, ",").concat(inflexionY, "L").concat(endX, ",").concat(endY),
    stroke: customColor,
    fill: "none"
  }), _react.default.createElement("g", {
    transform: "translate(".concat(endX + (cos >= 0 ? 1 : -1) * 8, ",").concat(endY - 10, ")"),
    width: "100"
  }, _react.default.createElement("image", {
    width: "25",
    height: "25",
    xlinkHref: src,
    y: "-10",
    transform: "translate(".concat(logoXOffset, ",-6)")
  }), _react.default.createElement("text", {
    textAnchor: textAnchor,
    fill: customColor,
    fontWeight: "500",
    className: classes.text,
    transform: "translate(0, 29)"
  }, name))));
};

exports.CustomLabel = CustomLabel;