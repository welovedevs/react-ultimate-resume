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

var _side = require("../../../commons/profile_card/profile_card_side/side");

var SkillsCardComponent = function SkillsCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      onEdit = _useContext.onEdit,
      isEditing = _useContext.isEditing,
      mode = _useContext.mode;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapSkillsFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapSkillsToJsonResume)(editedData));
  }, [onEdit]);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateSkillsComplete)(mappedData);
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
    kind: "skills",
    isEditingProfile: isEditing,
    isComplete: isComplete,
    sides: {
      front: function front(props) {
        return _react.default.createElement(_skills_front.SkillsFront, props);
      },
      back: function back(props) {
        return _react.default.createElement(_skills_back.SkillsBack, props);
      }
    },
    editDialog: {
      component: _skills_edit_dialog.SkillsEditDialog,
      validationSchema: _validator.SkillsValidationSchema,
      onEdit: onDialogEdited
    },
    data: mappedData,
    variant: variant,
    side: currentSide
  });
};

var SkillsCard = SkillsCardComponent;
exports.SkillsCard = SkillsCard;