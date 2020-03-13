"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperiencesCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _experiences_front = require("./experiences_front/experiences_front");

var _experiences_back = require("./experiences_back/experiences_back");

var _experiences_edit_dialog = require("./experiences_edit_dialog/experiences_edit_dialog");

var _validator = require("./data/validator");

var _mapping = require("./data/mapping");

var _contexts = require("../../../../utils/context/contexts");

var ExperiencesCardComponent = function ExperiencesCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      onEdit = _useContext.onEdit,
      isEditing = _useContext.isEditing,
      mode = _useContext.mode;

  console.log({
    data: data
  });
  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapWorkFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    return onEdit((0, _mapping.mapWorkToJsonResume)(editedData));
  }, []);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateWorkComplete)(mappedData);
  }, [mappedData]);

  if (!isComplete && mode !== 'edit') {
    return null;
  }

  return _react.default.createElement(_profile_card.ProfileCard, {
    isEditingProfile: isEditing,
    isComplete: isComplete,
    data: mappedData,
    sides: {
      front: _experiences_front.ExperiencesFront,
      back: _experiences_back.ExperiencesBack
    },
    editDialog: {
      component: _experiences_edit_dialog.ExperiencesEditDialog,
      validationSchema: _validator.WorkValidator,
      onEdit: onDialogEdited
    },
    variant: variant,
    side: side
  });
};

var ExperiencesCard = ExperiencesCardComponent;
exports.ExperiencesCard = ExperiencesCard;