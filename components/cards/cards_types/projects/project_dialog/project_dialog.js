"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _use_card_has_dialog_opened = require("../../../../commons/profile_card/profile_card_hooks/use_card_has_dialog_opened");

var _project_dialog_styles = require("./project_dialog_styles");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _validator = require("../data/validator");

var _mapping = require("../data/mapping");

var _project_dialog_content_link = require("./project_dialog_content_link/project_dialog_content_link");

var _contexts = require("../../../../../utils/context/contexts");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_styles.styles);

var ProjectDialogComponent = function ProjectDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      _ref$project = _ref.project,
      project = _ref$project === void 0 ? {} : _ref$project;
  var classes = useStyles();

  var _useHasDialogOpened = (0, _use_card_has_dialog_opened.useHasDialogOpened)(),
      _useHasDialogOpened2 = _slicedToArray(_useHasDialogOpened, 2),
      setHasDialogOpened = _useHasDialogOpened2[1];

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      onEdit = _useContext.onEdit,
      data = _useContext.data;

  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    console.log({
      editedData: editedData
    });
    onEdit((0, _mapping.updateProjectsArray)((0, _mapping.mapProjectToJsonResume)(editedData), data));
    onClose();
  }, [data]);
  var validator = (0, _react.useMemo)(function () {
    return (0, _validator.ProjectValidator)(formatMessage);
  }, []);
  (0, _react.useEffect)(function () {
    return setHasDialogOpened(open);
  }, [open]);
  return _react.default.createElement(_edit_dialog.EditDialog, {
    classes: {
      content: classes.container,
      paper: classes.paper
    },
    open: open,
    onClose: onClose,
    data: project,
    onEdit: onDialogEdited,
    validationSchema: validator,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Project.editDialog.title",
      defaultMessage: "Le projet en d\xE9tails"
    })
  }, function (helpers) {
    return _react.default.createElement(ProjectDialogContent, {
      helpers: helpers
    });
  });
};

var ProjectDialogContent = function ProjectDialogContent() {
  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      project = _useFormikContext.values;

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: classes.headrow
  }, _react.default.createElement(_project_dialog_content_title.ProjectDialogContentTitle, {
    title: project.title
  }), _react.default.createElement(_project_dialog_content_date.ProjectDialogContentDate, {
    date: project.data
  })), _react.default.createElement(_project_dialog_content_description.ProjectDialogContentDescription, {
    description: project.description
  }), _react.default.createElement(_project_dialog_content_link.ProjectDialogContentLink, {
    link: project.link
  }), _react.default.createElement(_project_dialog_content_images.ProjectDialogContentImages, {
    images: project.images
  }));
};

var ProjectDialog = ProjectDialogComponent;
exports.ProjectDialog = ProjectDialog;