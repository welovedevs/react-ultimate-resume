"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlUploadFileDialog = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _upload_file_dialog = require("../upload_file_dialog/upload_file_dialog");

var _url_input_dialog = require("../url_input_dialog/url_input_dialog");

var _contexts = require("../../../utils/context/contexts");

var UrlUploadFileDialogComponent = function UrlUploadFileDialogComponent(_ref) {
  var onAdd = _ref.onAdd,
      props = (0, _objectWithoutProperties2.default)(_ref, ["onAdd"]);

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      onFilesUpload = _useContext.onFilesUpload;

  if (typeof onFilesUpload === 'function') {
    return (/*#__PURE__*/_react.default.createElement(_upload_file_dialog.UploadFileDialog, (0, _extends2.default)({}, props, {
        onFileUploaded: onAdd
      }))
    );
  }

  return (/*#__PURE__*/_react.default.createElement(_url_input_dialog.UrlInputDialog, (0, _extends2.default)({}, props, {
      onConfirm: onAdd
    }))
  );
};

var UrlUploadFileDialog = UrlUploadFileDialogComponent;
exports.UrlUploadFileDialog = UrlUploadFileDialog;