"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentAddImage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

var _url_upload_file_dialog = require("../../../../../../commons/url_upload_file_dialog/url_upload_file_dialog");

var _add_button_dashed = require("../../../../../../commons/add_button_dashed/add_button_dashed");

var _use_callback_open = require("../../../../../../hooks/use_callback_open");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProjectDialogContentAddImageComponent = function ProjectDialogContentAddImageComponent() {
  var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
      _useCallbackOpen2 = _slicedToArray(_useCallbackOpen, 3),
      openDialog = _useCallbackOpen2[0],
      setDialogOpened = _useCallbackOpen2[1],
      setDialogClosed = _useCallbackOpen2[2];

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      setFieldValue = _useFormikContext.setFieldValue;

  var onFileAdded = (0, _react.useCallback)(function (url) {
    return setFieldValue('images', [].concat(_toConsumableArray(values.images), [{
      url: url,
      name: 'sometthing'
    }]));
  }, [JSON.stringify(values.images)]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_url_upload_file_dialog.UrlUploadFileDialog, {
    open: openDialog,
    onClose: setDialogClosed,
    onAdd: onFileAdded
  }), _react.default.createElement(_add_button_dashed.AddButtonDashed, {
    onClick: setDialogOpened,
    title: "Add an image"
  }));
};

var ProjectDialogContentAddImage = ProjectDialogContentAddImageComponent;
exports.ProjectDialogContentAddImage = ProjectDialogContentAddImage;