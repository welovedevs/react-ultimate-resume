"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectsCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _projects_front = require("./projects_front/projects_front");

var _projects_back = require("./projects_back/projects_back");

var _add_button_rounded = require("./add_button_rounded/add_button_rounded");

var _project_dialog = require("./project_dialog/project_dialog");

var _use_callback_open = require("../../../hooks/use_callback_open");

var _mapping = require("./data/mapping");

var _contexts = require("../../../../utils/context/contexts");

var _validator = require("./data/validator");

var ProjectsCardComponent = function ProjectsCardComponent(_ref) {
  var _mappedData$projects, _mappedData$projects2;

  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      isEditing = _useContext.isEditing,
      mode = _useContext.mode;

  var defaultMappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapProjectsFromJsonResume)(data);
  }, [data]);

  var _useState = (0, _react.useState)(defaultMappedData),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      mappedData = _useState2[0],
      setMappedData = _useState2[1];

  var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
      _useCallbackOpen2 = (0, _slicedToArray2.default)(_useCallbackOpen, 3),
      openNewProjectDialog = _useCallbackOpen2[0],
      setNewProjectDialogOpened = _useCallbackOpen2[1],
      setNewProjectDialogClosed = _useCallbackOpen2[2];

  (0, _react.useEffect)(function () {
    setMappedData(defaultMappedData);
  }, [defaultMappedData]);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateProjectsComplete)(mappedData);
  }, [mappedData]);
  var handleAddButtonClick = (0, _react.useCallback)(function () {
    setMappedData({
      projects: [].concat((0, _toConsumableArray2.default)(mappedData.projects), [{
        id: (0, _v.default)(),
        name: 'Nouveau projet',
        description: 'Description du nouveau projet...'
      }])
    });
    setNewProjectDialogOpened();
  }, [mappedData]);

  if (!isComplete && mode !== 'edit') {
    return null;
  }

  return _react.default.createElement(_profile_card.ProfileCard, {
    data: mappedData,
    isComplete: isComplete,
    isEditingProfile: isEditing,
    sides: {
      front: function front(props) {
        return _react.default.createElement(_projects_front.ProjectsFront, (0, _extends2.default)({
          handleAddButtonClick: handleAddButtonClick
        }, props));
      },
      back: function back(props) {
        return _react.default.createElement(_projects_back.ProjectsBack, (0, _extends2.default)({
          handleAddButtonClick: handleAddButtonClick
        }, props));
      }
    },
    variant: variant,
    side: side,
    customEditAction: _react.default.createElement(_add_button_rounded.AddButton, {
      title: "Ajouter un projet",
      onClick: handleAddButtonClick
    })
  }, _react.default.createElement(_project_dialog.ProjectDialog, {
    open: openNewProjectDialog,
    onClose: setNewProjectDialogClosed,
    project: mappedData === null || mappedData === void 0 ? void 0 : (_mappedData$projects = mappedData.projects) === null || _mappedData$projects === void 0 ? void 0 : _mappedData$projects[(mappedData === null || mappedData === void 0 ? void 0 : (_mappedData$projects2 = mappedData.projects) === null || _mappedData$projects2 === void 0 ? void 0 : _mappedData$projects2.length) - 1]
  }));
};

var ProjectsCard = ProjectsCardComponent;
exports.ProjectsCard = ProjectsCard;