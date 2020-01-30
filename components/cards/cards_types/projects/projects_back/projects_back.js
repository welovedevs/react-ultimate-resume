"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectsBack = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _profile_card_title = require("../../../../commons/profile_card/profile_card_title/profile_card_title");

var _profile_card_content = require("../../../../commons/profile_card/profile_card_content/profile_card_content");

var _project_section = require("./project_section/project_section");

var _projects_back_styles = require("./projects_back_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_projects_back_styles.styles);

var ProjectsBackComponent = function ProjectsBackComponent() {
  var classes = useStyles();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_title.ProfileCardTitle, {
    customClasses: {
      container: classes.title,
      typography: classes.typography
    },
    beforeTypography: _react.default.createElement("div", {
      className: classes.background
    }, _react.default.createElement("img", {
      className: classes.backgroundImage,
      src: "https://source.unsplash.com/random/750x400",
      alt: "Project Background"
    }))
  }, "Projects"), _react.default.createElement(_profile_card_content.ProfileCardContent, null, _react.default.createElement(_project_section.ProjectSection, null), _react.default.createElement(_project_section.ProjectSection, null), _react.default.createElement(_project_section.ProjectSection, null)));
};

var ProjectsBack = ProjectsBackComponent;
exports.ProjectsBack = ProjectsBack;