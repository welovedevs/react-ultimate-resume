"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsEditDialog = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _skills_edit_form = require("./skills_edit_form/skills_edit_form");

var _skills_edit_dialog_styles = require("./skills_edit_dialog_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_skills_edit_dialog_styles.styles);

var SkillsEditDialogComponent = function SkillsEditDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      data = _ref.data,
      onEdit = _ref.onEdit;
  var classes = useStyles();
  return _react.default.createElement(_edit_dialog.EditDialog, {
    fullScreen: true,
    classes: {
      paper: classes.paper,
      content: classes.content,
      actions: classes.actions
    },
    open: open,
    onClose: onClose,
    data: data,
    onEdit: onEdit,
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