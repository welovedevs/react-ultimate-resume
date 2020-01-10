"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserActionsRow = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _user_informations = require("./user_informations/user_informations");

var _user_actions_row_styles = require("./user_actions_row_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_user_actions_row_styles.styles);

var UserActionsRowComponent = function UserActionsRowComponent() {
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_user_informations.UserInformations, null));
};

var UserActionsRow = UserActionsRowComponent;
exports.UserActionsRow = UserActionsRow;