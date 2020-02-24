"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectsBack = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _profile_card_title = require("../../../../commons/profile_card/profile_card_title/profile_card_title");

var _profile_card_content = require("../../../../commons/profile_card/profile_card_content/profile_card_content");

var _project_section = require("./project_section/project_section");

var _projects_back_styles = require("./projects_back_styles");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var useStyles = (0, _reactJss.createUseStyles)(_projects_back_styles.styles);

var ProjectsBackComponent = function ProjectsBackComponent(_ref) {
  var _data$projects, _data$projects$0$imag, _data$projects$0$imag2, _data$projects2, _data$projects3;

  var data = _ref.data;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant
  });
  var imageSrc = (_data$projects = data.projects) === null || _data$projects === void 0 ? void 0 : (_data$projects$0$imag = _data$projects[0].images) === null || _data$projects$0$imag === void 0 ? void 0 : (_data$projects$0$imag2 = _data$projects$0$imag[0]) === null || _data$projects$0$imag2 === void 0 ? void 0 : _data$projects$0$imag2.url;
  var alt = (_data$projects2 = data.projects) === null || _data$projects2 === void 0 ? void 0 : _data$projects2[0].title;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_title.ProfileCardTitle, {
    customClasses: {
      container: classes.title,
      typography: classes.typography
    },
    beforeTypography: _react.default.createElement("div", {
      className: classes.background
    }, imageSrc && _react.default.createElement("img", {
      className: classes.backgroundImage,
      src: imageSrc,
      alt: alt
    }), !imageSrc && _react.default.createElement("div", {
      className: classes.stubBackground
    }))
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.back.title",
    defaultMessage: "Projects"
  })), _react.default.createElement(_profile_card_content.ProfileCardContent, null, (_data$projects3 = data.projects) === null || _data$projects3 === void 0 ? void 0 : _data$projects3.map(function (project) {
    return _react.default.createElement(_project_section.ProjectSection, {
      project: project,
      key: "project_".concat(project.id)
    });
  })));
};

var ProjectsBack = ProjectsBackComponent;
exports.ProjectsBack = ProjectsBack;