"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentDescription = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _use_is_editing = require("../../../../../hooks/use_is_editing");

var _project_dialog_content_description_styles = require("./project_dialog_content_description_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_description_styles.styles);

var ProjectDialogContentDescriptionComponent = function ProjectDialogContentDescriptionComponent(_ref) {
  var description = _ref.description;

  var _useIsEditing = (0, _use_is_editing.useIsEditing)(),
      _useIsEditing2 = _slicedToArray(_useIsEditing, 1),
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
  var description = _ref4.description,
      classes = _ref4.classes;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.Typography, {
    variant: "label",
    component: "div"
  }, "Description du projet"), _react.default.createElement(_ui.TextField, {
    fullWidth: true,
    multiline: true,
    rows: 8,
    variant: "flat",
    value: description,
    customClasses: {
      container: classes.textField
    }
  }));
};

var ProjectDialogContentDescription = ProjectDialogContentDescriptionComponent;
exports.ProjectDialogContentDescription = ProjectDialogContentDescription;