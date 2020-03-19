"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectsCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _projects_front = require("./projects_front/projects_front");

var _projects_back = require("./projects_back/projects_back");

var _add_button_rounded = require("./add_button_rounded/add_button_rounded");

var _project_dialog = require("./project_dialog/project_dialog");

var _mapping = require("./data/mapping");

var _contexts = require("../../../../utils/context/contexts");

var _validator = require("./data/validator");

var _side = require("../../../commons/profile_card/profile_card_side/side");

var ProjectsCardComponent = function ProjectsCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      isEditing = _useContext.isEditing,
      mode = _useContext.mode;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapProjectsFromJsonResume)(data);
  }, [data]);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateProjectsComplete)(mappedData);
  }, [mappedData]);
  var currentSide = (0, _react.useMemo)(function () {
    if (!isComplete && !isEditing) {
      return _side.SIDES.FRONT;
    }

    return side;
  }, [side, isComplete, isEditing]);

  if (!isComplete && mode !== 'edit') {
    return null;
  }

  return _react.default.createElement(_profile_card.ProfileCard, {
    data: mappedData,
    isComplete: isComplete,
    isEditingProfile: isEditing,
    sides: {
      front: function front(props) {
        return _react.default.createElement(_projects_front.ProjectsFront, props);
      },
      back: function back(props) {
        return _react.default.createElement(_projects_back.ProjectsBack, props);
      }
    },
    variant: variant,
    side: currentSide,
    customEditAction: function customEditAction(props) {
      return _react.default.createElement(_add_button_rounded.AddButton, (0, _extends2.default)({
        title: "Ajouter un projet"
      }, props));
    },
    editDialog: {
      component: _project_dialog.ProjectDialog,
      data: mappedData === null || mappedData === void 0 ? void 0 : mappedData.projects
    }
  });
};

var ProjectsCard = ProjectsCardComponent;
exports.ProjectsCard = ProjectsCard;