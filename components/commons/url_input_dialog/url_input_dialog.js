"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlInputDialog = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _dialog_title = require("../dialog/dialog_title/dialog_title");

var _url_input_dialog_styles = require("./url_input_dialog_styles");

var useStyles = (0, _reactJss.createUseStyles)(_url_input_dialog_styles.styles);

var UrlInputDialogComponent = function UrlInputDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm;
  var classes = useStyles();

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var handleTextFieldChange = (0, _react.useCallback)(function (event) {
    return setUrl(event.target.value);
  }, []);
  var onClick = (0, _react.useCallback)(function () {
    return onConfirm(url);
  }, [url]);
  return /*#__PURE__*/_react.default.createElement(_core.Dialog, {
    open: open,
    onClose: onClose,
    classes: {
      paper: classes.paper
    }
  }, /*#__PURE__*/_react.default.createElement(_dialog_title.DialogTitle, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Form.Url.input.title",
    defaultMessage: "Enter an url"
  })), /*#__PURE__*/_react.default.createElement(_core.DialogContent, null, /*#__PURE__*/_react.default.createElement(_ui.TextField, {
    fullWidth: true,
    placeholder: "https://pictures.com/0.jpg",
    variant: "flat",
    onChange: handleTextFieldChange,
    value: url
  })), /*#__PURE__*/_react.default.createElement(_core.DialogActions, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    onClick: onClose,
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.close",
    defaultMessage: "Close"
  })), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    color: "primary",
    size: "small",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.save",
    defaultMessage: "Save"
  }))));
};

var UrlInputDialog = UrlInputDialogComponent;
exports.UrlInputDialog = UrlInputDialog;