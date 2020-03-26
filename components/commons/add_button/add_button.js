"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _reactIntl = require("react-intl");

var _add_button_styles = require("./add_button_styles");

var AddIcon = function AddIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.52 8h-6v6h-2V8h-6V6h6V0h2v6h6v2z"
  }));
};

AddIcon.defaultProps = {
  width: "15",
  height: "14",
  viewBox: "0 0 15 14",
  fill: "#230CAE",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_add_button_styles.styles);

var AddButtonComponent = function AddButtonComponent(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      other = (0, _objectWithoutProperties2.default)(_ref, ["color", "variant"]);
  var classes = useStyles({
    color: color
  });
  return /*#__PURE__*/_react.default.createElement(_ui.Button, (0, _extends2.default)({
    color: color,
    variant: variant
  }, other), /*#__PURE__*/_react.default.createElement(AddIcon, {
    className: classes.icon
  }), /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.Lang.Add",
    defaultMessage: "Add"
  }));
};

var AddButton = AddButtonComponent;
exports.AddButton = AddButton;