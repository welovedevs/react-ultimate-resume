"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeeProjectDetail = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _project_dialog = require("../project_dialog/project_dialog");

var _animated_underlined_button = require("../../../../commons/animated_underlined_button/animated_underlined_button");

var _use_callback_open = require("../../../../hooks/use_callback_open");

var _see_project_detail_styles = require("./see_project_detail_styles");

var _contexts = require("../../../../../utils/context/contexts");

var EyeIcon = function EyeIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M20 8.752c-6.718-.113-13.667 4.582-18.035 9.39a2.771 2.771 0 0 0 0 3.71C6.238 26.56 13.167 31.362 20 31.247c6.834.115 13.764-4.688 18.04-9.395a2.771 2.771 0 0 0 0-3.71C33.668 13.334 26.72 8.639 20 8.752z",
    strokeWidth: "2.50005"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M26.25 20a6.25 6.25 0 1 1-12.5.007 6.25 6.25 0 0 1 12.5-.012V20z",
    strokeWidth: "2.50005"
  })));
};

EyeIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};

var EditIcon = function EditIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
    d: "M25.112 6.643a.834.834 0 0 0-1.18-.002L5.728 24.852a.834.834 0 0 0 0 1.178l8.247 8.247a.834.834 0 0 0 1.179 0L33.349 16.08a.832.832 0 0 0 0-1.176l-8.237-8.26zM4.05 28.001a.833.833 0 0 0-1.4.395L.14 38.857a.836.836 0 0 0 .222.784.849.849 0 0 0 .783.22l10.454-2.5a.833.833 0 0 0 .395-1.4L4.05 28zM38.667 4.873l-3.538-3.54a4.167 4.167 0 0 0-5.887 0L26.88 3.695a.834.834 0 0 0 0 1.178l8.25 8.249a.834.834 0 0 0 1.178 0l2.36-2.365a4.166 4.166 0 0 0 0-5.884z"
  }));
};

EditIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_see_project_detail_styles.styles);

var SeeProjectDetailComponent = function SeeProjectDetailComponent(_ref) {
  var color = _ref.color,
      project = _ref.project;
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      isEditing = _useContext.isEditing;

  var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
      _useCallbackOpen2 = (0, _slicedToArray2.default)(_useCallbackOpen, 3),
      openDialog = _useCallbackOpen2[0],
      setDialogOpened = _useCallbackOpen2[1],
      setDialogClosed = _useCallbackOpen2[2];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_project_dialog.ProjectDialog, {
    isEditing: isEditing,
    data: project,
    open: openDialog,
    onClose: setDialogClosed,
    handleProfileCardHasDialogOpened: true
  }), /*#__PURE__*/_react.default.createElement(_animated_underlined_button.AnimatedUnderlinedButton, {
    color: color,
    onClick: setDialogOpened
  }, !isEditing && /*#__PURE__*/_react.default.createElement(EyeIcon, {
    className: classes.icon
  }), isEditing && /*#__PURE__*/_react.default.createElement(EditIcon, {
    className: classes.fillIcon
  }), /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.detailTypography
    },
    color: "primary"
  }, !isEditing && /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.details.seemore",
    defaultMessage: "See more"
  }), isEditing && /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.edit",
    defaultMessage: "Edit"
  }))));
};

var SeeProjectDetail = SeeProjectDetailComponent;
exports.SeeProjectDetail = SeeProjectDetail;