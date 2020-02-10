"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectsFront = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _projects_front_styles = require("./projects_front_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_projects_front_styles.styles);

var ProjectsFrontComponent = function ProjectsFrontComponent(_ref) {
  var _data$projects, _data$projects$;

  var data = _ref.data;
  var classes = useStyles();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: classes.background
  }, _react.default.createElement("img", {
    className: classes.backgroundImage,
    src: "https://source.unsplash.com/random/750x400",
    alt: "Project Background"
  })), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_ui.Typography, {
    variant: "h2",
    component: "h2",
    customClasses: {
      container: classes.text
    }
  }, "My \uD83D\uDC36 project:", (_data$projects = data.projects) === null || _data$projects === void 0 ? void 0 : (_data$projects$ = _data$projects[0]) === null || _data$projects$ === void 0 ? void 0 : _data$projects$.name)), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, null, "2 more projects")));
};

var ProjectsFront = ProjectsFrontComponent;
exports.ProjectsFront = ProjectsFront;