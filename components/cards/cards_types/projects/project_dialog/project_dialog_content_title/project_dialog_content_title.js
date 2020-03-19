"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _formik = require("formik");

var _project_dialog_content_title_styles = require("./project_dialog_content_title_styles");

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_title_styles.styles);

var ProjectDialogContentTitleComponent = function ProjectDialogContentTitleComponent(_ref) {
  var title = _ref.title,
      isEditing = _ref.isEditing;
  var classes = useStyles({
    isEditing: isEditing
  });
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(Content, {
    title: title,
    isEditing: isEditing,
    classes: classes
  }));
};

var Content = function Content(_ref2) {
  var title = _ref2.title,
      isEditing = _ref2.isEditing,
      classes = _ref2.classes;

  if (isEditing) {
    return _react.default.createElement(EditingContent, {
      title: title,
      classes: classes
    });
  }

  return _react.default.createElement(DefaultContent, {
    title: title,
    classes: classes
  });
};

var DefaultContent = function DefaultContent(_ref3) {
  var title = _ref3.title,
      classes = _ref3.classes;
  return _react.default.createElement(_ui.Typography, {
    variant: "h2",
    component: "h3",
    customClasses: {
      container: classes.typography
    }
  }, title);
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
    id: "Projects.dialog.content.title",
    defaultMessage: "Project title"
  })), _react.default.createElement(_ui.TextField, {
    fullWidth: true,
    variant: "flat",
    onChange: handleChange,
    name: "name",
    value: values.name,
    customClasses: {
      container: classes.textField
    }
  }), (errors === null || errors === void 0 ? void 0 : errors.name) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, errors.name));
};

var ProjectDialogContentTitle = ProjectDialogContentTitleComponent;
exports.ProjectDialogContentTitle = ProjectDialogContentTitle;