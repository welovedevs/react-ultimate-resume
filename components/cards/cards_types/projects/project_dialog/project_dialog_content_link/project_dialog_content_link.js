"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentLink = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _formik = require("formik");

var _use_is_editing = require("../../../../../hooks/use_is_editing");

var _project_dialog_content_link_styles = require("./project_dialog_content_link_styles");

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_link_styles.styles);

var ProjectDialogContentLinkComponent = function ProjectDialogContentLinkComponent(_ref) {
  var link = _ref.link;

  var _useIsEditing = (0, _use_is_editing.useIsEditing)(),
      _useIsEditing2 = (0, _slicedToArray2.default)(_useIsEditing, 1),
      isEditing = _useIsEditing2[0];

  var classes = useStyles({
    isEditing: isEditing
  });
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(Content, {
    title: link,
    isEditing: isEditing,
    classes: classes
  }));
};

var Content = function Content(_ref2) {
  var link = _ref2.link,
      isEditing = _ref2.isEditing,
      classes = _ref2.classes;

  if (isEditing) {
    return _react.default.createElement(EditingContent, {
      title: link,
      classes: classes
    });
  }

  return _react.default.createElement(DefaultContent, {
    title: link,
    classes: classes
  });
};

var DefaultContent = function DefaultContent(_ref3) {
  var link = _ref3.link,
      classes = _ref3.classes;
  return _react.default.createElement(_ui.Typography, {
    variant: "h2",
    component: "h3",
    customClasses: {
      container: classes.typography
    }
  }, link);
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
    id: "Project.dialog.link.title",
    defaultMessage: "Lien du projet"
  })), _react.default.createElement(_ui.TextField, {
    fullWidth: true,
    variant: "flat",
    onChange: handleChange,
    name: "link",
    value: values.link,
    customClasses: {
      container: classes.textField
    }
  }), (errors === null || errors === void 0 ? void 0 : errors.name) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, errors.name));
};

var ProjectDialogContentLink = ProjectDialogContentLinkComponent;
exports.ProjectDialogContentLink = ProjectDialogContentLink;