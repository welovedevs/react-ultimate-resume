"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentDescription = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _formik = require("formik");

var _project_dialog_content_description_styles = require("./project_dialog_content_description_styles");

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_description_styles.styles);

var ProjectDialogContentDescriptionComponent = function ProjectDialogContentDescriptionComponent(_ref) {
  var description = _ref.description,
      isEditing = _ref.isEditing;
  var classes = useStyles({
    isEditing: isEditing
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(Content, {
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
    return /*#__PURE__*/_react.default.createElement(EditingContent, {
      description: description,
      classes: classes
    });
  }

  return /*#__PURE__*/_react.default.createElement(DefaultContent, {
    description: description,
    classes: classes
  });
};

var DefaultContent = function DefaultContent(_ref3) {
  var description = _ref3.description,
      classes = _ref3.classes;
  return /*#__PURE__*/_react.default.createElement(_ui.Typography, {
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    variant: "label",
    component: "div"
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Project.details.dialog.title",
    defaultMessage: "Project details"
  })), /*#__PURE__*/_react.default.createElement(_ui.TextField, {
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
  }), (errors === null || errors === void 0 ? void 0 : errors.description) && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, errors.description));
};

var ProjectDialogContentDescription = ProjectDialogContentDescriptionComponent;
exports.ProjectDialogContentDescription = ProjectDialogContentDescription;