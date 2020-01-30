"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _use_is_editing = require("../../../../../hooks/use_is_editing");

var _project_dialog_content_title_styles = require("./project_dialog_content_title_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_title_styles.styles);

var ProjectDialogContentTitleComponent = function ProjectDialogContentTitleComponent(_ref) {
  var title = _ref.title;

  var _useIsEditing = (0, _use_is_editing.useIsEditing)(),
      _useIsEditing2 = _slicedToArray(_useIsEditing, 1),
      isEditing = _useIsEditing2[0];

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
  var title = _ref4.title,
      classes = _ref4.classes;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.Typography, {
    variant: "label",
    component: "div"
  }, "Titre du projet"), _react.default.createElement(_ui.TextField, {
    fullWidth: true,
    variant: "flat",
    value: title,
    customClasses: {
      container: classes.textField
    }
  }));
};

var ProjectDialogContentTitle = ProjectDialogContentTitleComponent;
exports.ProjectDialogContentTitle = ProjectDialogContentTitle;