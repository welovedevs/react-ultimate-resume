"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroup = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ui = require("@wld/ui");

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _checkbox_group_styles = require("./checkbox_group_styles");

var _checkbox_group = require("../checkbox_field/checkbox_group");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var useStyles = (0, _reactJss.createUseStyles)(_checkbox_group_styles.checkboxGroupStyles);

var CheckboxGroup = function CheckboxGroup(_ref) {
  var values = _ref.values,
      translations = _ref.translations,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      name = _ref.name,
      onChange = _ref.onChange,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'secondary' : _ref$color,
      variant = _ref.variant;
  var classes = useStyles();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var onFieldClicked = (0, _react.useCallback)(function (enumValue) {
    return function () {
      if (typeof onChange !== 'function') {
        return;
      }

      console.log(value);

      if (!value.includes(enumValue)) {
        onChange([].concat(_toConsumableArray(value), [enumValue]));
        return;
      }

      onChange(value.filter(function (checkedItem) {
        return checkedItem !== enumValue;
      }));
    };
  }, [value, onChange]);
  return _react.default.createElement("div", {
    className: classes.checkboxGroup
  }, values.map(function (enumValue, index) {
    return _react.default.createElement(_checkbox_group.CheckboxField, {
      title: _react.default.createElement(_ui.Typography, null, formatMessage(translations[enumValue])),
      onClick: onFieldClicked(enumValue),
      checked: value.includes(enumValue),
      value: enumValue,
      variant: variant,
      color: color,
      key: "".concat(name, "_").concat(index, "_").concat(enumValue)
    });
  }));
};

exports.CheckboxGroup = CheckboxGroup;