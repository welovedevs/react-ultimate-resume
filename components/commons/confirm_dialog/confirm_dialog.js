"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmDialog = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _dialog_title = require("../dialog/dialog_title/dialog_title");

var DefaultTitle = _react.default.createElement(_reactIntl.FormattedMessage, {
  id: "ConfirmDialog.title",
  defaultMessage: "Are you sure?"
});

var DefaultContent = _react.default.createElement(_reactIntl.FormattedMessage, {
  id: "ConfirmDialog.content",
  defaultMessage: "Do you really want to achieve this action?"
});

var ConfirmDialogComponent = function ConfirmDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? DefaultTitle : _ref$title,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? DefaultContent : _ref$content;
  return _react.default.createElement(_core.Dialog, {
    open: open,
    onClose: onClose
  }, _react.default.createElement(_dialog_title.DialogTitle, null, title), _react.default.createElement(_core.DialogContent, null, _react.default.createElement(_ui.Typography, null, content)), _react.default.createElement(_core.DialogActions, null, _react.default.createElement(_ui.Button, {
    size: "small",
    onClick: onClose
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.close",
    defaultMessage: "Close"
  })), _react.default.createElement(_ui.Button, {
    color: "primary",
    size: "small",
    onClick: onConfirm
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.confirm",
    defaultMessage: "Confirm"
  }))));
};

var ConfirmDialog = ConfirmDialogComponent;
exports.ConfirmDialog = ConfirmDialog;