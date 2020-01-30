"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentAddImage = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _url_input_dialog = require("../../../../../../commons/url_input_dialog/url_input_dialog");

var _use_callback_open = require("../../../../../../hooks/use_callback_open");

var _project_dialog_content_add_image_styles = require("./project_dialog_content_add_image_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_add_image_styles.styles);

var ProjectDialogContentAddImageComponent = function ProjectDialogContentAddImageComponent() {
  var classes = useStyles();

  var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
      _useCallbackOpen2 = _slicedToArray(_useCallbackOpen, 3),
      openDialog = _useCallbackOpen2[0],
      setDialogOpened = _useCallbackOpen2[1],
      setDialogClosed = _useCallbackOpen2[2];

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_url_input_dialog.UrlInputDialog, {
    open: openDialog,
    onClose: setDialogClosed
  }), _react.default.createElement(_ui.Tooltip, {
    title: "Ajouter une image"
  }, _react.default.createElement("button", {
    type: "button",
    className: classes.container,
    onClick: setDialogOpened
  }, _react.default.createElement(_ui.Typography, {
    variant: "h2"
  }, "+"))));
};

var ProjectDialogContentAddImage = ProjectDialogContentAddImageComponent;
exports.ProjectDialogContentAddImage = ProjectDialogContentAddImage;