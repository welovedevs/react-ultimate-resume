"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearMonth = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _reactEmojiRender = require("react-emoji-render");

var _moment = _interopRequireDefault(require("@date-io/moment"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _pickers = require("@material-ui/pickers");

var _ui = require("@wld/ui");

var _year_month_styles = _interopRequireDefault(require("./year_month_styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_year_month_styles.default);

var YearMonthComponent = function YearMonthComponent(_ref) {
  var className = _ref.className,
      value = _ref.value,
      onChange = _ref.onChange,
      title = _ref.title,
      error = _ref.error,
      variant = _ref.variant,
      _ref$textfieldProps = _ref.textfieldProps,
      textfieldProps = _ref$textfieldProps === void 0 ? {} : _ref$textfieldProps;
  var classes = useStyles();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var onPickerChange = (0, _react.useCallback)(function (newValue) {
    if (newValue === null) {
      onChange(null);
      return;
    }

    setIsOpen(false);
    onChange(newValue);
  }, [onChange]);
  var date = (0, _react.useMemo)(function () {
    return value ? new Date(value.year(), value.month()) : new Date();
  }, [value]);
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(className, classes.fieldsContainer)
  }, _react.default.createElement("div", {
    className: classes.selectContainer
  }, _react.default.createElement(_react.default.Fragment, null, title && _react.default.createElement(_ui.Typography, {
    color: "dark",
    variant: "label",
    component: function component(_ref2) {
      var children = _ref2.children,
          props = _objectWithoutProperties(_ref2, ["children"]);

      return _react.default.createElement(_reactEmojiRender.Twemoji, _extends({
        svg: true,
        text: children
      }, props));
    }
  }, formatMessage(title))), _react.default.createElement(_ui.TextField, _extends({}, textfieldProps, {
    variant: variant,
    value: (value === null || value === void 0 ? void 0 : value.format('MMMM YYYY')) || '',
    onClick: function onClick() {
      return setIsOpen(true);
    }
  })), _react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _moment.default
  }, _react.default.createElement(_pickers.DatePicker, {
    clearable: true,
    open: isOpen,
    views: ['year', 'month'],
    minDate: new Date('1980-01-01'),
    maxDate: new Date(),
    className: classes.input,
    InputProps: {
      className: classes.pickerInput,
      disableUnderline: true
    },
    value: date,
    onChange: onPickerChange,
    onClose: function onClose() {
      return setIsOpen(false);
    }
  })), error && typeof error === 'string' && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, error)));
};

var YearMonth = (0, _react.memo)(YearMonthComponent, function (nextProps, oldProps) {
  return (0, _isEqual.default)((0, _pick.default)(nextProps, ['value', 'error', 'onChange']), (0, _pick.default)(oldProps, ['value', 'error', 'onChange']));
});
exports.YearMonth = YearMonth;