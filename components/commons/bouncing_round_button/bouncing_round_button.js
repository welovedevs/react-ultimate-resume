"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BouncingRoundButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _bouncing_round_button_spring_props = require("./bouncing_round_button_spring_props");

var _bouncing_round_button_styles = require("./bouncing_round_button_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EditIcon = function EditIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M25.112 6.643a.834.834 0 0 0-1.18-.002L5.728 24.852a.834.834 0 0 0 0 1.178l8.247 8.247a.834.834 0 0 0 1.179 0L33.349 16.08a.832.832 0 0 0 0-1.176l-8.237-8.26zM4.05 28.001a.833.833 0 0 0-1.4.395L.14 38.857a.836.836 0 0 0 .222.784.849.849 0 0 0 .783.22l10.454-2.5a.833.833 0 0 0 .395-1.4L4.05 28zM38.667 4.873l-3.538-3.54a4.167 4.167 0 0 0-5.887 0L26.88 3.695a.834.834 0 0 0 0 1.178l8.25 8.249a.834.834 0 0 0 1.178 0l2.36-2.365a4.166 4.166 0 0 0 0-5.884z"
  }));
};

EditIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_bouncing_round_button_styles.styles);

var BouncingRoundButtonComponent = function BouncingRoundButtonComponent(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Click me!' : _ref$title,
      _ref$tooltipPlacement = _ref.tooltipPlacement,
      tooltipPlacement = _ref$tooltipPlacement === void 0 ? 'top' : _ref$tooltipPlacement,
      onClick = _ref.onClick,
      _ref$icon = _ref.icon,
      Icon = _ref$icon === void 0 ? EditIcon : _ref$icon,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var classes = useStyles();

  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return _bouncing_round_button_spring_props.SPRING_PROPS.default;
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      springProps = _useSpring2[0],
      setSpringProps = _useSpring2[1];

  var handleMouseDown = (0, _react.useCallback)(function () {
    return setSpringProps(_bouncing_round_button_spring_props.SPRING_PROPS.active);
  }, []);
  var handleMouseUp = (0, _react.useCallback)(function () {
    return setSpringProps(_bouncing_round_button_spring_props.SPRING_PROPS.default);
  }, []);
  return _react.default.createElement(_ui.Tooltip, {
    title: title,
    placement: tooltipPlacement
  }, _react.default.createElement(_reactSpring.animated.button, {
    type: "button",
    className: (0, _classnames.default)(classes.container, receivedClasses.container),
    onClick: onClick,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseUp,
    style: {
      transform: springProps.scale.interpolate(function (value) {
        return "scale3d(".concat(value, ", ").concat(value, ", ").concat(value, ")");
      })
    }
  }, _react.default.createElement(Icon, {
    className: classes.icon
  })));
};

var BouncingRoundButton = BouncingRoundButtonComponent;
exports.BouncingRoundButton = BouncingRoundButton;