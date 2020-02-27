"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardFrontTypography = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _use_card_variant = require("../profile_card_hooks/use_card_variant");

var _profile_card_front_typography_styles = require("./profile_card_front_typography_styles");

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_front_typography_styles.styles);
var ProfileCardFrontTypographyComponent = (0, _react.forwardRef)(function (_ref, ref) {
  var _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'h2' : _ref$component,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'h1' : _ref$variant,
      overrideColor = _ref.overrideColor,
      children = _ref.children,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      cardVariant = _useCardVariant2[0];

  var classes = useStyles({
    variant: cardVariant,
    overrideColor: overrideColor
  });
  return _react.default.createElement(_ui.Typography, {
    containerRef: ref,
    variant: variant,
    component: component,
    customClasses: {
      container: (0, _classnames.default)(classes.container, receivedClasses.container)
    }
  }, children);
});
var ProfileCardFrontTypography = ProfileCardFrontTypographyComponent;
exports.ProfileCardFrontTypography = ProfileCardFrontTypography;