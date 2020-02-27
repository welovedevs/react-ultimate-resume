"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInformations = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _avatar = require("../../../commons/avatar/avatar");

var _column = require("../../../commons/column/column");

var _contexts = require("../../../../utils/context/contexts");

var _user_informations_styles = require("./user_informations_styles");

var useStyles = (0, _reactJss.createUseStyles)(_user_informations_styles.styles);

var UserInformationsComponent = function UserInformationsComponent() {
  var _data$basics, _data$basics2, _data$basics3;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data;

  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_avatar.Avatar, {
    src: (_data$basics = data.basics) === null || _data$basics === void 0 ? void 0 : _data$basics.picture
  }), _react.default.createElement(_column.Column, {
    customClasses: {
      container: classes.textColumn
    }
  }, _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.name
    },
    variant: "h3",
    component: "h3"
  }, (_data$basics2 = data.basics) === null || _data$basics2 === void 0 ? void 0 : _data$basics2.name), _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.description
    },
    variant: "h4",
    component: "h4"
  }, (_data$basics3 = data.basics) === null || _data$basics3 === void 0 ? void 0 : _data$basics3.summary)));
};

var UserInformations = UserInformationsComponent;
exports.UserInformations = UserInformations;