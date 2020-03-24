"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxField = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _checkbox_styles = require("./checkbox_styles");

var useStyles = (0, _reactJss.createUseStyles)(_checkbox_styles.checkboxStyles);

var CheckboxField = function CheckboxField(_ref) {
  var title = _ref.title,
      value = _ref.value,
      checked = _ref.checked,
      name = _ref.name,
      onChange = _ref.onChange,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'raised' : _ref$variant,
      onClick = _ref.onClick,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var classes = useStyles();
  return (/*#__PURE__*/_react.default.createElement("button", {
      className: (0, _classnames.default)(classes.container, receivedClasses.container),
      type: "button",
      onClick: onClick
    }, /*#__PURE__*/_react.default.createElement(_ui.Checkbox, {
      className: classes.checkbox,
      variant: variant,
      color: color,
      checked: checked,
      value: value,
      name: name,
      onChange: onChange
    }), title)
  );
};

exports.CheckboxField = CheckboxField;