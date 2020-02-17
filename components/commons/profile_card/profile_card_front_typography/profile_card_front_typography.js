"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardFrontTypography = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _use_card_variant = require("../profile_card_hooks/use_card_variant");

var _profile_card_front_typography_styles = require("./profile_card_front_typography_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_front_typography_styles.styles);

var ProfileCardFrontTypographyComponent = function ProfileCardFrontTypographyComponent(_ref) {
  var _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'h2' : _ref$component,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'h1' : _ref$variant,
      overrideColor = _ref.overrideColor,
      children = _ref.children,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = _slicedToArray(_useCardVariant, 1),
      cardVariant = _useCardVariant2[0];

  var classes = useStyles({
    variant: cardVariant,
    overrideColor: overrideColor
  });
  return _react.default.createElement(_ui.Typography, {
    variant: variant,
    component: component,
    customClasses: {
      container: (0, _classnames.default)(classes.container, receivedClasses.container)
    }
  }, children);
};

var ProfileCardFrontTypography = ProfileCardFrontTypographyComponent;
exports.ProfileCardFrontTypography = ProfileCardFrontTypography;