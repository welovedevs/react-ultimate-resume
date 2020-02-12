"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialActions = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _social_actions_styles = require("./social_actions_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_social_actions_styles.styles);

var SocialActionsComponent = function SocialActionsComponent(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, children);
};

var SocialActions = SocialActionsComponent;
exports.SocialActions = SocialActions;