"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeeProjectDetail = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _project_dialog = require("../project_dialog/project_dialog");

var _animated_underlined_button = require("../../../../commons/animated_underlined_button/animated_underlined_button");

var _use_callback_open = require("../../../../hooks/use_callback_open");

var _see_project_detail_styles = require("./see_project_detail_styles");

var EyeIcon = function EyeIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }, _react.default.createElement("path", {
    d: "M20 8.752c-6.718-.113-13.667 4.582-18.035 9.39a2.771 2.771 0 0 0 0 3.71C6.238 26.56 13.167 31.362 20 31.247c6.834.115 13.764-4.688 18.04-9.395a2.771 2.771 0 0 0 0-3.71C33.668 13.334 26.72 8.639 20 8.752z",
    strokeWidth: "2.50005"
  }), _react.default.createElement("path", {
    d: "M26.25 20a6.25 6.25 0 1 1-12.5.007 6.25 6.25 0 0 1 12.5-.012V20z",
    strokeWidth: "2.50005"
  })));
};

EyeIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_see_project_detail_styles.styles);

var SeeProjectDetailComponent = function SeeProjectDetailComponent(_ref) {
  var project = _ref.project;
  var classes = useStyles();

  var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
      _useCallbackOpen2 = (0, _slicedToArray2.default)(_useCallbackOpen, 3),
      openDialog = _useCallbackOpen2[0],
      setDialogOpened = _useCallbackOpen2[1],
      setDialogClosed = _useCallbackOpen2[2];

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_project_dialog.ProjectDialog, {
    project: project,
    open: openDialog,
    onClose: setDialogClosed,
    handleProfileCardHasDialogOpened: true
  }), _react.default.createElement(_animated_underlined_button.AnimatedUnderlinedButton, {
    onClick: setDialogOpened
  }, _react.default.createElement(EyeIcon, {
    className: classes.icon
  }), _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.detailTypography
    },
    color: "primary"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.details.seemore",
    defaultMessage: "See more"
  }))));
};

var SeeProjectDetail = SeeProjectDetailComponent;
exports.SeeProjectDetail = SeeProjectDetail;