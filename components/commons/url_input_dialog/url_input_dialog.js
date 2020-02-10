"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlInputDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _dialog_title = require("../dialog/dialog_title/dialog_title");

var _url_input_dialog_styles = require("./url_input_dialog_styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_url_input_dialog_styles.styles);

var UrlInputDialogComponent = function UrlInputDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm;
  var classes = useStyles();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var handleTextFieldChange = (0, _react.useCallback)(function (event) {
    return setUrl(event.target.value);
  }, []);
  var onClick = (0, _react.useCallback)(function () {
    return onConfirm(url);
  }, [url]);
  return _react.default.createElement(_core.Dialog, {
    open: open,
    onClose: onClose,
    classes: {
      paper: classes.paper
    }
  }, _react.default.createElement(_dialog_title.DialogTitle, null, "Entrer une URL"), _react.default.createElement(_core.DialogContent, null, _react.default.createElement(_ui.TextField, {
    fullWidth: true,
    placeholder: "https://pictures.com/0.jpg",
    variant: "flat",
    onChange: handleTextFieldChange,
    value: url
  })), _react.default.createElement(_core.DialogActions, null, _react.default.createElement(_ui.Button, {
    onClick: onClose,
    size: "small"
  }, "Close"), _react.default.createElement(_ui.Button, {
    color: "primary",
    size: "small",
    onClick: onClick
  }, "Confirm")));
};

var UrlInputDialog = UrlInputDialogComponent;
exports.UrlInputDialog = UrlInputDialog;