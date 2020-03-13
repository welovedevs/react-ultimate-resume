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

var _add_button = require("../../add_button/add_button");

var useStyles = (0, _reactJss.createUseStyles)(_no_project_styles.styles);

var NoProjectComponent = function NoProjectComponent(_ref) {
  var handleAddButtonClick = _ref.handleAddButtonClick;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_ui.Typography, {
    color: "primary",
    variant: "h4",
    component: "h4"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.noProject.title",
    defaultMessage: "D\xE9crivez ici un projet qui vous a plus en tant que d\xE9veloppeur, ce projet peut avoir \xE9t\xE9 r\xE9alis\xE9 pendant vos \xE9tudes, sur votre temps personnel ou au sein d'une entreprise."
  })), _react.default.createElement(_add_button.AddButton, {
    handleAddButtonClick: handleAddButtonClick,
    classes: {
      container: classes.button
    }
  }));
};

var NoProject = NoProjectComponent;
exports.NoProject = NoProject;