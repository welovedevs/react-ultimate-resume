"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadFileDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _core = require("@material-ui/core");

var _dialog_title = require("../dialog/dialog_title/dialog_title");

var _file_drop_zone = require("../file_drop_zone/file_drop_zone");

var _profile = require("../../profile");

var _upload_file_dialog_styles = require("./upload_file_dialog_styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _reactJss.createUseStyles)(_upload_file_dialog_styles.styles);

var UploadFileDialogComponent = function UploadFileDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose;
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_profile.DeveloperProfileContext),
      onFilesUpload = _useContext.onFilesUpload;

  return _react.default.createElement(_core.Dialog, {
    open: open,
    onClose: onClose
  }, _react.default.createElement(_dialog_title.DialogTitle, null, "Upload un fichier"), _react.default.createElement(_core.DialogContent, null, _react.default.createElement(_file_drop_zone.FileDropZone, {
    onDrop: onFilesUpload
  })), _react.default.createElement(_core.DialogActions, null));
};

var UploadFileDialog = UploadFileDialogComponent;
exports.UploadFileDialog = UploadFileDialog;