"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _dialog_title = require("../dialog/dialog_title/dialog_title");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var EditDialogContent = function EditDialogContent(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      dialogClasses = _ref.dialogClasses;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      handleSubmit = _useFormikContext.handleSubmit,
      setFieldValue = _useFormikContext.setFieldValue,
      values = _useFormikContext.values;

  var handleValueChange = (0, _react.useCallback)(function (name) {
    return function (value) {
      console.debug("Setting field ".concat(name, " to value ").concat(value));
      return setFieldValue(name, value);
    };
  }, [setFieldValue]);
  var toggleValue = (0, _react.useCallback)(function (name) {
    return function () {
      return setFieldValue(name, !values[name]);
    };
  }, [setFieldValue, values]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.DialogContent, {
    className: dialogClasses.content
  }, children({
    handleValueChange: handleValueChange,
    toggleValue: toggleValue
  })), _react.default.createElement(_core.DialogActions, {
    className: dialogClasses.actions
  }, _react.default.createElement(_ui.Button, {
    size: "small",
    onClick: onClose
  }, "Close"), _react.default.createElement(_ui.Button, {
    type: "submit",
    size: "small",
    color: "primary",
    onClick: handleSubmit
  }, "Save")));
};

var EditDialog = function EditDialog(_ref2) {
  var open = _ref2.open,
      onClose = _ref2.onClose,
      data = _ref2.data,
      onEdit = _ref2.onEdit,
      children = _ref2.children,
      title = _ref2.title,
      validationSchema = _ref2.validationSchema,
      _ref2$dialogClasses = _ref2.dialogClasses,
      dialogClasses = _ref2$dialogClasses === void 0 ? {} : _ref2$dialogClasses;
  return _react.default.createElement(_core.Dialog, {
    open: open,
    onClose: onClose,
    classes: dialogClasses.dialog
  }, _react.default.createElement(_dialog_title.DialogTitle, null, title || 'Coucou'), _react.default.createElement(_formik.Formik, {
    validateOnChange: false,
    initialValues: data,
    onSubmit: function onSubmit(newValues) {
      return onEdit(newValues);
    },
    validationSchema: validationSchema
  }, _react.default.createElement(EditDialogContent, {
    onClose: onClose,
    dialogClasses: dialogClasses
  }, children)));
};

exports.EditDialog = EditDialog;