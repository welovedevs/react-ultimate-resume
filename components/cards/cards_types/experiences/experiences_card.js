"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperiencesCard = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _experiences_front = require("./experiences_front/experiences_front");

var _experiences_back = require("./experiences_back/experiences_back");

var _experiences_edit_dialog = require("./experiences_edit_dialog/experiences_edit_dialog");

var _validator = require("./data/validator");

var _mapping = require("./data/mapping");

var _contexts = require("../../../../utils/context/contexts");

var _side = require("../../../commons/profile_card/profile_card_side/side");

var _use_mode = require("../../../hooks/use_mode");

var ExperiencesCardComponent = function ExperiencesCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useMode = (0, _use_mode.useMode)(),
      _useMode2 = (0, _slicedToArray2.default)(_useMode, 1),
      mode = _useMode2[0];

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      onEdit = _useContext.onEdit,
      isEditing = _useContext.isEditing;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapWorkFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    return onEdit((0, _mapping.mapWorkToJsonResume)(editedData));
  }, [onEdit]);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateWorkComplete)(mappedData);
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

  return /*#__PURE__*/_react.default.createElement(_profile_card.ProfileCard, {
    kind: "experience",
    isEditingProfile: isEditing,
    isComplete: isComplete,
    data: mappedData,
    sides: {
      front: function front(props) {
        return /*#__PURE__*/_react.default.createElement(_experiences_front.ExperiencesFront, props);
      },
      back: function back(props) {
        return /*#__PURE__*/_react.default.createElement(_experiences_back.ExperiencesBack, props);
      }
    },
    editDialog: {
      component: _experiences_edit_dialog.ExperiencesEditDialog,
      validationSchema: _validator.WorkValidator,
      onEdit: onDialogEdited
    },
    variant: variant,
    side: currentSide
  });
};

var ExperiencesCard = ExperiencesCardComponent;
exports.ExperiencesCard = ExperiencesCard;