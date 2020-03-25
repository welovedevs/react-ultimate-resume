"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoProject = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _no_project_styles = require("./no_project_styles");

var _no_data_button = require("../../../../../commons/no_data_button/no_data_button");

var useStyles = (0, _reactJss.createUseStyles)(_no_project_styles.styles);

var NoProjectComponent = function NoProjectComponent(_ref) {
  var handleAddButtonClick = _ref.handleAddButtonClick;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_ui.Typography, {
    style: {
      color: 'inherit'
    },
    variant: "h4",
    component: "h4"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.noProject.title",
    defaultMessage: "Describe a project that you've enjoyed as a developer. This project may have been realized during your studies, your personal time or while working at a company."
  })), _react.default.createElement(_no_data_button.NoDataButton, {
    handleAddButtonClick: handleAddButtonClick,
    classes: {
      container: classes.button
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.noProject.buttonLabel",
    defaultMessage: "Ajouter un projet"
  })));
};

var NoProject = NoProjectComponent;
exports.NoProject = NoProject;