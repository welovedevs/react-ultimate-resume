"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectsBack = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _profile_card_title = require("../../../../commons/profile_card/profile_card_title/profile_card_title");

var _profile_card_content = require("../../../../commons/profile_card/profile_card_content/profile_card_content");

var _project_section = require("./project_section/project_section");

var _images = require("../utils/images");

var _projects_back_styles = require("./projects_back_styles");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _contexts = require("../../../../../utils/context/contexts");

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _no_project = require("./no_project/no_project");

var useStyles = (0, _reactJss.createUseStyles)(_projects_back_styles.styles);

var ProjectsBackComponent = function ProjectsBackComponent(_ref) {
  var _data$projects2, _data$projects2$, _data$projects3, _data$projects3$, _data$projects4;

  var data = _ref.data,
      handleAddButtonClick = _ref.handleAddButtonClick;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      onEdit = _useContext.onEdit;

  var classes = useStyles({
    variant: variant
  });
  var imageSrc = (0, _react.useMemo)(function () {
    var _ref2, _data$projects, _data$projects$, _data$projects$$image;

    return (_ref2 = (_data$projects = data.projects) === null || _data$projects === void 0 ? void 0 : (_data$projects$ = _data$projects[0]) === null || _data$projects$ === void 0 ? void 0 : (_data$projects$$image = _data$projects$.images) === null || _data$projects$$image === void 0 ? void 0 : _data$projects$$image.url) !== null && _ref2 !== void 0 ? _ref2 : _images.DEFAULT_PROJECT_IMAGE;
  }, [(_data$projects2 = data.projects) === null || _data$projects2 === void 0 ? void 0 : (_data$projects2$ = _data$projects2[0]) === null || _data$projects2$ === void 0 ? void 0 : _data$projects2$.images]);
  var alt = (_data$projects3 = data.projects) === null || _data$projects3 === void 0 ? void 0 : (_data$projects3$ = _data$projects3[0]) === null || _data$projects3$ === void 0 ? void 0 : _data$projects3$.title;
  var handleProjectDeletion = (0, _react.useCallback)(function (index) {
    var newProjects = (0, _toConsumableArray2.default)(data.projects);
    newProjects.splice(index, 1);
    onEdit({
      projects: newProjects
    });
  }, [data, onEdit]);
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
  })), _react.default.createElement(_profile_card_content.ProfileCardContent, null, (_data$projects4 = data.projects) === null || _data$projects4 === void 0 ? void 0 : _data$projects4.map(function (project) {
    return _react.default.createElement(_project_section.ProjectSection, {
      project: project,
      key: "project_".concat(project.id),
      onDelete: handleProjectDeletion
    });
  }), !(0, _exists_and_not_empty.existsAndNotEmpty)(data === null || data === void 0 ? void 0 : data.projects) && _react.default.createElement(_no_project.NoProject, {
    handleAddButtonClick: handleAddButtonClick
  })));
};

var ProjectsBack = (0, _react.memo)(ProjectsBackComponent);
exports.ProjectsBack = ProjectsBack;