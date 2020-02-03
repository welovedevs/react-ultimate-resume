"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlUploadFileDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile = require("../../profile");

var _upload_file_dialog = require("../upload_file_dialog/upload_file_dialog");

var _url_input_dialog = require("../url_input_dialog/url_input_dialog");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var UrlUploadFileDialogComponent = function UrlUploadFileDialogComponent(props) {
  var _useContext = (0, _react.useContext)(_profile.DeveloperProfileContext),
      onFilesUpload = _useContext.onFilesUpload;

  if (typeof onFilesUpload === 'function') {
    return _react.default.createElement(_upload_file_dialog.UploadFileDialog, props);
  }

  return _react.default.createElement(_url_input_dialog.UrlInputDialog, props);
};

var UrlUploadFileDialog = UrlUploadFileDialogComponent;
exports.UrlUploadFileDialog = UrlUploadFileDialog;