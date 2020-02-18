"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentDescription = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _formik = require("formik");

var _use_is_editing = require("../../../../../hooks/use_is_editing");

var _project_dialog_content_description_styles = require("./project_dialog_content_description_styles");

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_description_styles.styles);

var ProjectDialogContentDescriptionComponent = function ProjectDialogContentDescriptionComponent(_ref) {
  var description = _ref.description;

  var _useIsEditing = (0, _use_is_editing.useIsEditing)(),
      _useIsEditing2 = (0, _slicedToArray2.default)(_useIsEditing, 1),
      isEditing = _useIsEditing2[0];

  var classes = useStyles({
    isEditing: isEditing
  });
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(Content, {
    description: description,
    isEditing: isEditing,
    classes: classes
  }));
};

var Content = function Content(_ref2) {
  var description = _ref2.description,
      isEditing = _ref2.isEditing,
      classes = _ref2.classes;

  if (isEditing) {
    return _react.default.createElement(EditingContent, {
      description: description,
      classes: classes
    });
  }

  return _react.default.createElement(DefaultContent, {
    description: description,
    classes: classes
  });
};

var DefaultContent = function DefaultContent(_ref3) {
  var description = _ref3.description,
      classes = _ref3.classes;
  return _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.typography
    }
  }, description);
};

var EditingContent = function EditingContent(_ref4) {
  var classes = _ref4.classes;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      handleChange = _useFormikContext.handleChange,
      values = _useFormikContext.values,
      errors = _useFormikContext.errors;

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.Typography, {
    variant: "label",
    component: "div"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Project.details.dialog.title",
    defaultMessage: "Project details"
  })), _react.default.createElement(_ui.TextField, {
    fullWidth: true,
    multiline: true,
    rows: 8,
    variant: "flat",
    onChange: handleChange,
    name: "description",
    value: values.description,
    customClasses: {
      container: classes.textField
    }
  }), (errors === null || errors === void 0 ? void 0 : errors.description) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, errors.description));
};

var ProjectDialogContentDescription = ProjectDialogContentDescriptionComponent;
exports.ProjectDialogContentDescription = ProjectDialogContentDescription;