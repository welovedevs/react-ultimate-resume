"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentAddImage = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

var _url_upload_file_dialog = require("../../../../../../commons/url_upload_file_dialog/url_upload_file_dialog");

var _add_button_dashed = require("../../../../../../commons/add_button_dashed/add_button_dashed");

var _use_callback_open = require("../../../../../../hooks/use_callback_open");

var ProjectDialogContentAddImageComponent = function ProjectDialogContentAddImageComponent() {
  var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
      _useCallbackOpen2 = (0, _slicedToArray2.default)(_useCallbackOpen, 3),
      openDialog = _useCallbackOpen2[0],
      setDialogOpened = _useCallbackOpen2[1],
      setDialogClosed = _useCallbackOpen2[2];

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      setFieldValue = _useFormikContext.setFieldValue;

  var onFileAdded = (0, _react.useCallback)(function (url) {
    return setFieldValue('images', [].concat((0, _toConsumableArray2.default)(values.images || []), [{
      url: url
    }]));
  }, [JSON.stringify(values.images)]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_url_upload_file_dialog.UrlUploadFileDialog, {
    open: openDialog,
    onClose: setDialogClosed,
    onAdd: onFileAdded
  }), /*#__PURE__*/_react.default.createElement(_add_button_dashed.AddButtonDashed, {
    onClick: setDialogOpened,
    title: "Add an image"
  }));
};

var ProjectDialogContentAddImage = ProjectDialogContentAddImageComponent;
exports.ProjectDialogContentAddImage = ProjectDialogContentAddImage;