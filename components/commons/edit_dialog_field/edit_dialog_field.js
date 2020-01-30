"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditDialogField = void 0;

var _reactJss = require("react-jss");

var _edit_dialog_field_styles = require("./edit_dialog_field_styles");

var _ui = require("@wld/ui");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_edit_dialog_field_styles.styles);

var EditDialogField = function EditDialogField(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children,
      error = _ref.error,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes;
  var innerClasses = useStyles();
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(innerClasses.field, classes.container)
  }, title && _react.default.createElement(_ui.Typography, {
    component: "h2",
    variant: "h4"
  }, title), subtitle && _react.default.createElement(_ui.Typography, {
    component: "div",
    variant: "body"
  }, subtitle), _react.default.createElement("div", {
    className: (0, _classnames.default)(innerClasses.fieldEditComponent, classes.container)
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(innerClasses.fieldEditChildren, classes.containerChildren)
  }, children), error && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, error)));
};

exports.EditDialogField = EditDialogField;