"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _profile_card_content_styles = require("./profile_card_content_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_content_styles.styles);

var ProfileCardContentComponent = function ProfileCardContentComponent(_ref) {
  var children = _ref.children;
  var classes = useStyles(_profile_card_content_styles.styles);
  return _react.default.createElement("div", {
    className: classes.container
  }, children);
};

var ProfileCardContent = ProfileCardContentComponent;
exports.ProfileCardContent = ProfileCardContent;