"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInformations = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _avatar = require("../../../commons/avatar/avatar");

var _column = require("../../../commons/column/column");

var _contexts = require("../../../../utils/context/contexts");

var _user_informations_styles = require("./user_informations_styles");

var _use_additional_nodes = require("../../../hooks/use_additional_nodes");

var useStyles = (0, _reactJss.createUseStyles)(_user_informations_styles.styles);

var UserInformationsComponent = function UserInformationsComponent() {
  var _data$basics, _data$basics2, _data$basics3;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data;

  var _useAdditionalNodes = (0, _use_additional_nodes.useAdditionalNodes)('banner.userInformations', null),
      _useAdditionalNodes2 = (0, _slicedToArray2.default)(_useAdditionalNodes, 1),
      additionalNodes = _useAdditionalNodes2[0];

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
    component: "h4"
  }, (_data$basics3 = data.basics) === null || _data$basics3 === void 0 ? void 0 : _data$basics3.summary), additionalNodes));
};

var UserInformations = UserInformationsComponent;
exports.UserInformations = UserInformations;