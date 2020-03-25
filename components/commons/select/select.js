"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _core = require("@material-ui/core");

var _clickable_text_field = require("../clickable_text_field/clickable_text_field");

var _select_styles = _interopRequireDefault(require("./select_styles"));

function getValueFromChildren(children, value) {
  var selectedChild = children.map(function (child) {
    return child.props || {};
  }).find(function (childProps) {
    return childProps.value === value;
  });

  if (selectedChild && typeof selectedChild.children === 'string') {
    return selectedChild.children;
  }

  return value;
}

var SelectComponent = function SelectComponent(_ref) {
  var disabled = _ref.disabled,
      fullWidth = _ref.fullWidth,
      className = _ref.className,
      value = _ref.value,
      onChange = _ref.onChange,
      onClose = _ref.onClose,
      _onMouseOver = _ref.onMouseOver,
      _onFocus = _ref.onFocus,
      textFieldProps = _ref.textFieldProps,
      textFieldIconProps = _ref.textFieldIconProps,
      children = _ref.children,
      id = _ref.id;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      anchorElement = _useState2[0],
      setAnchorElement = _useState2[1];

  var handleClose = (0, _react.useCallback)(function () {
    if (onClose) {
      onClose();
    }

    return setAnchorElement(null);
  }, []);
  var setAnchorElementCallback = (0, _react.useCallback)(function (e) {
    return !disabled && setAnchorElement(e.currentTarget);
  }, [disabled]);
  var selectedChildValue = getValueFromChildren(children, value);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.Menu, {
    anchorEl: anchorElement,
    keepMounted: true,
    open: Boolean(anchorElement),
    onClose: handleClose
  }, _react.default.Children.map(children, function (child) {
    return (0, _react.cloneElement)(child, {
      onClick: function onClick() {
        if (onChange) {
          onChange(child.props.value);
        }

        setAnchorElement(null);
      },
      onMouseOver: function onMouseOver() {
        if (_onMouseOver) {
          _onMouseOver(child.props.value);
        }
      },
      onFocus: function onFocus() {
        if (_onFocus) {
          _onFocus(child.props.value);
        }
      }
    });
  })), _react.default.createElement(_clickable_text_field.ClickableTextField, (0, _extends2.default)({
    customClasses: {
      container: className
    },
    value: selectedChildValue,
    onClick: setAnchorElementCallback,
    arrowRotation: anchorElement ? -90 : 0
  }, {
    id: id,
    textFieldIconProps: textFieldIconProps,
    fullWidth: fullWidth,
    disabled: disabled
  }, textFieldProps)));
};

var Select = (0, _reactJss.default)(_select_styles.default)(SelectComponent);
exports.Select = Select;