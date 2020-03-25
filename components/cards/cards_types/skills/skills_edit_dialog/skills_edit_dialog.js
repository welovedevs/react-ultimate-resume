"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _skills_edit_form = require("./skills_edit_form/skills_edit_form");

var _skills_edit_dialog_styles = require("./skills_edit_dialog_styles");

var useStyles = (0, _reactJss.createUseStyles)(_skills_edit_dialog_styles.styles);

var SkillsEditDialogComponent = function SkillsEditDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      data = _ref.data,
      onEdit = _ref.onEdit,
      validationSchema = _ref.validationSchema,
      isEditing = _ref.isEditing;
  var classes = useStyles();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var validationSchemaToPass = (0, _react.useMemo)(function () {
    return validationSchema(formatMessage);
  }, [validationSchema]);
  return _react.default.createElement(_edit_dialog.EditDialog, {
    fullScreen: true,
    classes: {
      paper: classes.paper,
      content: classes.content
    },
    open: open,
    isEditing: isEditing,
    onClose: onClose,
    data: data,
    onEdit: onEdit,
    validationSchema: validationSchemaToPass,
    dialogClasses: {
      dialog: {
        root: classes.dialogRoot,
        paper: classes.dialogPaper
      }
    },
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Skills.editDialog.title",
      defaultMessage: "What are your main skills?"
    })
  }, function (helpers) {
    return _react.default.createElement(_skills_edit_form.SkillsEditForm, {
      helpers: helpers
    });
  });
};

var SkillsEditDialog = SkillsEditDialogComponent;
exports.SkillsEditDialog = SkillsEditDialog;