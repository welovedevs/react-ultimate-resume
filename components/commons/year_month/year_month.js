"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearMonth = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, classes.fieldsContainer)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.selectContainer
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, title && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    color: "dark",
    variant: "label",
    component: function component(_ref2) {
      var children = _ref2.children,
          props = (0, _objectWithoutProperties2.default)(_ref2, ["children"]);
      return /*#__PURE__*/_react.default.createElement(_reactEmojiRender.Twemoji, (0, _extends2.default)({
        svg: true,
        text: children
      }, props));
    }
  }, formatMessage(title))), /*#__PURE__*/_react.default.createElement(_ui.TextField, (0, _extends2.default)({}, textfieldProps, {
    variant: variant,
    value: (value === null || value === void 0 ? void 0 : value.format('MMMM YYYY')) || '',
    onClick: function onClick() {
      return setIsOpen(true);
    }
  })), /*#__PURE__*/_react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _moment.default
  }, /*#__PURE__*/_react.default.createElement(_pickers.DatePicker, {
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
  })), error && typeof error === 'string' && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, error)));
};

var YearMonth = (0, _react.memo)(YearMonthComponent, function (nextProps, oldProps) {
  return (0, _isEqual.default)((0, _pick.default)(nextProps, ['value', 'error', 'onChange']), (0, _pick.default)(oldProps, ['value', 'error', 'onChange']));
});
exports.YearMonth = YearMonth;