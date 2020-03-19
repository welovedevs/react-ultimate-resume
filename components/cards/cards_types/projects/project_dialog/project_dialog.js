"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _formik = require("formik");

var _project_dialog_content_title = require("./project_dialog_content_title/project_dialog_content_title");

var _project_dialog_content_images = require("./project_dialog_content_images/project_dialog_content_images");

var _project_dialog_content_description = require("./project_dialog_content_description/project_dialog_content_description");

var _project_dialog_content_date = require("./project_dialog_content_date/project_dialog_content_date");

var _project_dialog_styles = require("./project_dialog_styles");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _validator = require("../data/validator");

var _mapping = require("../data/mapping");

var _project_dialog_content_link = require("./project_dialog_content_link/project_dialog_content_link");

var _contexts = require("../../../../../utils/context/contexts");

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_styles.styles);

var ProjectDialogComponent = function ProjectDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      project = _ref.data,
      isEditing = _ref.isEditing;
  var classes = useStyles();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      onEdit = _useContext.onEdit,
      data = _useContext.data;

  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    var updateProjectsArray1 = (0, _mapping.updateProjectsArray)((0, _mapping.mapProjectToJsonResume)(editedData), data);
    onEdit(updateProjectsArray1);
    onClose();
  }, [onEdit, data]);
  var validator = (0, _react.useMemo)(function () {
    return (0, _validator.ProjectValidator)(formatMessage);
  }, []);
  return _react.default.createElement(_edit_dialog.EditDialog, {
    classes: {
      content: classes.container,
      paper: classes.paper
    },
    open: open,
    onClose: onClose,
    data: project || {},
    onEdit: onDialogEdited,
    validationSchema: validator,
    isEditing: isEditing,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Project.editDialog.title",
      defaultMessage: "Project's details"
    })
  }, function () {
    return _react.default.createElement(ProjectDialogContent, {
      isEditing: isEditing
    });
  });
};

var ProjectDialogContent = function ProjectDialogContent(_ref2) {
  var isEditing = _ref2.isEditing;
  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      project = _useFormikContext.values;

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: classes.headrow
  }, _react.default.createElement(_project_dialog_content_title.ProjectDialogContentTitle, {
    isEditing: isEditing,
    title: project.title
  }), _react.default.createElement(_project_dialog_content_date.ProjectDialogContentDate, {
    isEditing: isEditing,
    date: project.data
  })), _react.default.createElement(_project_dialog_content_description.ProjectDialogContentDescription, {
    isEditing: isEditing,
    description: project.description
  }), _react.default.createElement(_project_dialog_content_link.ProjectDialogContentLink, {
    isEditing: isEditing,
    link: project.link
  }), _react.default.createElement(_project_dialog_content_images.ProjectDialogContentImages, {
    isEditing: isEditing,
    images: project.images
  }));
};

var ProjectDialog = ProjectDialogComponent;
exports.ProjectDialog = ProjectDialog;