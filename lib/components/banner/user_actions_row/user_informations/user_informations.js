"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInformations = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _avatar = require("../../../commons/avatar/avatar");

var _column = require("../../../commons/column/column");

var _user_informations_styles = require("./user_informations_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_user_informations_styles.styles);

var UserInformationsComponent = function UserInformationsComponent() {
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_avatar.Avatar, null), _react.default.createElement(_column.Column, null, 'Marie Bodin'));
};

var UserInformations = UserInformationsComponent;
exports.UserInformations = UserInformations;