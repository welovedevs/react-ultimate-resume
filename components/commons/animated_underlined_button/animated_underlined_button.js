"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedUnderlinedButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _use_opener_state = require("../../hooks/use_opener_state");

var _animated_underlined_button_spring_props = require("./animated_underlined_button_spring_props");

var _animated_underlined_button_styles = require("./animated_underlined_button_styles");

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
      _useOpenerState2 = (0, _slicedToArray2.default)(_useOpenerState, 2),
      isUnderlineDisplayed = _useOpenerState2[0],
      handlers = _useOpenerState2[1];

  var underlineTransitions = (0, _reactSpring.useTransition)(isUnderlineDisplayed, function (item) {
    return "".concat(item ? 'visible' : 'hidden', "_underline");
  }, _animated_underlined_button_spring_props.ANIMATED_UNDERLINED_BUTTON_TRANSITIONS_SPRING_PROPS);
  return _react.default.createElement("button", (0, _extends2.default)({
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