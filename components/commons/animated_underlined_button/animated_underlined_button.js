"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedUnderlinedButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _use_opener_state = require("../../hooks/use_opener_state");

var _animated_underlined_button_spring_props = require("./animated_underlined_button_spring_props");

var _animated_underlined_button_styles = require("./animated_underlined_button_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_animated_underlined_button_styles.styles);

var AnimatedUnderlinedButtonComponent = function AnimatedUnderlinedButtonComponent(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      onClick = _ref.onClick,
      children = _ref.children;
  var classes = useStyles({
    color: color
  });

  var _useOpenerState = (0, _use_opener_state.useOpenerState)({
    defaultHandlers: {
      onClick: onClick
    }
  }),
      _useOpenerState2 = _slicedToArray(_useOpenerState, 2),
      isUnderlineDisplayed = _useOpenerState2[0],
      handlers = _useOpenerState2[1];

  var underlineTransitions = (0, _reactSpring.useTransition)(isUnderlineDisplayed, function (item) {
    return "".concat(item ? 'visible' : 'hidden', "_underline");
  }, _animated_underlined_button_spring_props.ANIMATED_UNDERLINED_BUTTON_TRANSITIONS_SPRING_PROPS);
  return _react.default.createElement("button", _extends({
    type: "button",
    className: classes.container,
    onClick: onClick
  }, handlers), children, _react.default.createElement("div", {
    className: classes.underlineContainer
  }, underlineTransitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return item && _react.default.createElement(_reactSpring.animated.div, {
      key: key,
      className: classes.underline,
      style: props
    });
  })));
};

var AnimatedUnderlinedButton = AnimatedUnderlinedButtonComponent;
exports.AnimatedUnderlinedButton = AnimatedUnderlinedButton;