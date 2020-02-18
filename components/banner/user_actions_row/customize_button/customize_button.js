"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomizeButton = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _use_callback_open = require("../../../hooks/use_callback_open");

var _customize_dialog = require("../customize_dialog/customize_dialog");

var CustomizeButton = function CustomizeButton(_ref) {
  var customizationOptions = _ref.customizationOptions;

  var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
      _useCallbackOpen2 = (0, _slicedToArray2.default)(_useCallbackOpen, 3),
      dialogOpen = _useCallbackOpen2[0],
      open = _useCallbackOpen2[1],
      close = _useCallbackOpen2[2];

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_customize_dialog.CustomizeDialog, {
    open: dialogOpen,
    onClose: close,
    customizationOptions: customizationOptions
  }), _react.default.createElement(_ui.Button, {
    variant: "outlined",
    color: "light",
    onClick: open
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Banner.actions.customize",
    defaultMessage: "Customize"
  })));
};

exports.CustomizeButton = CustomizeButton;