"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardEditDialog = void 0;

var _react = require("react");

var ProfileCardEditDialogComponent = function ProfileCardEditDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      editDialog = _ref.editDialog,
      data = _ref.data,
      isEditing = _ref.isEditing;

  if (!editDialog) {
    return null;
  }

  return (0, _react.createElement)(editDialog.component, {
    onEdit: function onEdit() {
      onClose();
      editDialog.onEdit.apply(editDialog, arguments);
    },
    validationSchema: editDialog.validationSchema,
    data: editDialog.data || data,
    open: open,
    onClose: onClose,
    isEditing: isEditing
  });
};

var ProfileCardEditDialog = ProfileCardEditDialogComponent;
exports.ProfileCardEditDialog = ProfileCardEditDialog;