"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterestedByEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _formik = require("formik");

var _ui = require("@wld/ui");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _edit_dialog_field = require("../../../../commons/edit_dialog_field/edit_dialog_field");

var _intested_by_translations = _interopRequireDefault(require("./intested_by_translations"));

var InterestedByEditDialogComponent = function InterestedByEditDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      data = _ref.data,
      onEdit = _ref.onEdit,
      validationSchema = _ref.validationSchema,
      isEditing = _ref.isEditing;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var validationSchemaToPass = (0, _react.useMemo)(function () {
    return validationSchema(formatMessage);
  }, [validationSchema]);
  return (/*#__PURE__*/_react.default.createElement(_edit_dialog.EditDialog, {
      open: open,
      onClose: onClose,
      data: data,
      isEditing: isEditing,
      onEdit: onEdit,
      validationSchema: validationSchemaToPass,
      title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "InterestedBy.editDialog.title",
        defaultMessage: "What technologies are you interested in?"
      })
    }, function (helpers) {
      return (/*#__PURE__*/_react.default.createElement(Content, {
          helpers: helpers
        })
      );
    })
  );
};

var Content = function Content() {
  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      errors = _useFormikContext.errors,
      handleChange = _useFormikContext.handleChange;

  var interestedBy = values.interestedBy;

  var _useIntl2 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  return (/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_edit_dialog_field.EditDialogField, {
      error: errors === null || errors === void 0 ? void 0 : errors.interestedBy
    }, /*#__PURE__*/_react.default.createElement(_ui.TextField, {
      multiline: true,
      variant: "flat",
      fullWidth: true,
      rows: 4,
      placeholder: formatMessage(_intested_by_translations.default.interestedByPlaceholder),
      value: interestedBy,
      onChange: handleChange,
      name: "interestedBy"
    })))
  );
};

var InterestedByEditDialog = InterestedByEditDialogComponent;
exports.InterestedByEditDialog = InterestedByEditDialog;