"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _skills_front = require("./skills_front/skills_front");

var _skills_back = require("./skills_back/skills_back");

var _skills_edit_dialog = require("./skills_edit_dialog/skills_edit_dialog");

var _mapping = require("./data/mapping");

var _contexts = require("../../../../utils/context/contexts");

var _validator = require("./data/validator");

var SkillsCardComponent = function SkillsCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      onEdit = _useContext.onEdit,
      isEditing = _useContext.isEditing;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapSkillsFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapSkillsToJsonResume)(editedData));
  }, []);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateSkillsComplete)(mappedData);
  }, [mappedData]);
  return _react.default.createElement(_profile_card.ProfileCard, {
    isEditingProfile: isEditing,
    isComplete: isComplete,
    sides: {
      front: _skills_front.SkillsFront,
      back: _skills_back.SkillsBack
    },
    editDialog: {
      component: _skills_edit_dialog.SkillsEditDialog,
      validationSchema: _validator.SkillsValidationSchema,
      onEdit: onDialogEdited
    },
    data: mappedData,
    variant: variant,
    side: side
  });
};

var SkillsCard = SkillsCardComponent;
exports.SkillsCard = SkillsCard;