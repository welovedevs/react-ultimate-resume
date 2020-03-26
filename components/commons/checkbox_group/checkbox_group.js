"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroup = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _checkbox_group = require("../checkbox_field/checkbox_group");

var _checkbox_group_styles = require("./checkbox_group_styles");

var useStyles = (0, _reactJss.createUseStyles)(_checkbox_group_styles.styles);

var CheckboxGroupComponent = function CheckboxGroupComponent(_ref) {
  var values = _ref.values,
      translations = _ref.translations,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      name = _ref.name,
      onChange = _ref.onChange,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'secondary' : _ref$color,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 2 : _ref$rows,
      variant = _ref.variant,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var classes = useStyles({
    rows: rows
  });

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var onFieldClicked = (0, _react.useCallback)(function (enumValue) {
    return function () {
      if (typeof onChange !== 'function') {
        return;
      }

      if (!value.includes(enumValue)) {
        onChange([].concat((0, _toConsumableArray2.default)(value), [enumValue]));
        return;
      }

      onChange(value.filter(function (checkedItem) {
        return checkedItem !== enumValue;
      }));
    };
  }, [value, onChange]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, receivedClasses.container)
  }, values.map(function (enumValue, index) {
    return /*#__PURE__*/_react.default.createElement(_checkbox_group.CheckboxField, {
      classes: {
        container: (0, _classnames.default)(classes.checkboxField, receivedClasses.checkboxField)
      },
      title: /*#__PURE__*/_react.default.createElement(_ui.Typography, null, formatMessage(translations[enumValue])),
      onClick: onFieldClicked(enumValue),
      checked: value.includes(enumValue),
      value: enumValue,
      variant: variant,
      color: color,
      key: "".concat(name, "_").concat(index, "_").concat(enumValue)
    });
  }));
};

var CheckboxGroup = CheckboxGroupComponent;
exports.CheckboxGroup = CheckboxGroup;