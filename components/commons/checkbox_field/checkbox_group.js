"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxField = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@wld/ui");

var _reactJss = require("react-jss");

var _checkbox_styles = require("./checkbox_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_checkbox_styles.checkboxStyles);

var CheckboxField = function CheckboxField(_ref) {
  var title = _ref.title,
      value = _ref.value,
      checked = _ref.checked,
      name = _ref.name,
      onChange = _ref.onChange,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'secondary' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'raised' : _ref$variant,
      onClick = _ref.onClick;
  var classes = useStyles();
  return _react.default.createElement("div", {
    onClick: onClick,
    className: classes.checkbox
  }, _react.default.createElement(_ui.Checkbox, {
    variant: variant,
    color: color,
    checked: checked,
    value: value,
    name: name,
    onChange: onChange
  }), title);
};

exports.CheckboxField = CheckboxField;