"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlInputDialog = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _dialog_title = require("../dialog/dialog_title/dialog_title");

var _url_input_dialog_styles = require("./url_input_dialog_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_url_input_dialog_styles.styles);

var UrlInputDialogComponent = function UrlInputDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm;
  var classes = useStyles();
  return _react.default.createElement(_core.Dialog, {
    open: open,
    onClose: onClose,
    classes: {
      paper: classes.paper
    }
  }, _react.default.createElement(_dialog_title.DialogTitle, null, "Entrer une URL"), _react.default.createElement(_core.DialogContent, null, _react.default.createElement(_ui.TextField, {
    fullWidth: true,
    placeholder: "https://pictures.com/0.jpg",
    variant: "flat"
  })), _react.default.createElement(_core.DialogActions, null, _react.default.createElement(_ui.Button, {
    onClick: onClose,
    size: "small"
  }, "Close"), _react.default.createElement(_ui.Button, {
    color: "primary",
    size: "small"
  }, "Confirm")));
};

var UrlInputDialog = UrlInputDialogComponent;
exports.UrlInputDialog = UrlInputDialog;