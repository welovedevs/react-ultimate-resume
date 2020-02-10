"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _profile_card_button_styles = require("./profile_card_button_styles");

var _use_card_variant = require("../profile_card_hooks/use_card_variant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ArrowRight = function ArrowRight(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M7 16h18M16 7l9 9-9 9",
    stroke: "#F5F5F5",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

ArrowRight.defaultProps = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var DEFAULT_SPRING_PROPS = {
  translation: 0
};
var ACTIVE_SPRING_PROPS = {
  translation: 6
};
var ProfileCardButtonComponent = (0, _reactJss.default)(_profile_card_button_styles.styles)(function (_ref) {
  var overrideColor = _ref.overrideColor,
      classes = _ref.classes,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ["overrideColor", "classes", "children"]);

  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return DEFAULT_SPRING_PROPS;
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      springProps = _useSpring2[0],
      setSpringProps = _useSpring2[1];

  var setDefaultSpringProps = (0, _react.useCallback)(function () {
    return setSpringProps(function () {
      return DEFAULT_SPRING_PROPS;
    });
  }, []);
  var setActiveSpringProps = (0, _react.useCallback)(function () {
    return setSpringProps(function () {
      return ACTIVE_SPRING_PROPS;
    });
  }, []);
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_ui.Button, _extends({
    customClasses: {
      container: classes.button,
      typography: classes.typography
    },
    size: "small",
    variant: "text",
    onMouseEnter: setActiveSpringProps,
    onMouseLeave: setDefaultSpringProps
  }, other), children), _react.default.createElement(_reactSpring.animated.span, {
    className: classes.arrowContainer,
    style: {
      transform: springProps.translation.interpolate(function (value) {
        return "translate3d(".concat(value, "px, 0, 0)");
      })
    }
  }, _react.default.createElement(ArrowRight, {
    className: classes.arrow
  })));
});

var InjectVariantProfileCardButton = function InjectVariantProfileCardButton(props) {
  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = _slicedToArray(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  return _react.default.createElement(ProfileCardButtonComponent, _extends({}, props, {
    variant: variant
  }));
};

var ProfileCardButton = InjectVariantProfileCardButton;
exports.ProfileCardButton = ProfileCardButton;