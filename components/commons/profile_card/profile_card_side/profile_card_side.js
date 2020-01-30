"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardSide = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _profile_card_side_styles = require("./profile_card_side_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_side_styles.styles);

var ProfileCardSideComponent = function ProfileCardSideComponent(_ref) {
  var style = _ref.style,
      children = _ref.children;
  var classes = useStyles();
  return _react.default.createElement(_reactSpring.animated.div, {
    className: classes.container,
    style: style
  }, children);
};

var ProfileCardSide = ProfileCardSideComponent;
exports.ProfileCardSide = ProfileCardSide;