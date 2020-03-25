"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundtrackCard = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _soundtrack_front = require("./soundtrack_front/soundtrack_front");

var _soundtrack_back = require("./soundtrack_back/soundtrack_back");

var _data_mapping = require("../../utils/data_mapping");

var _soundtrack_card_edit_dialog = require("./edit_dialog/soundtrack_card_edit_dialog");

var _mapping = require("./data/mapping");

var _contexts = require("../../../../utils/context/contexts");

var _validator = require("./data/validator");

var _side = require("../../../commons/profile_card/profile_card_side/side");

var _use_mode = require("../../../hooks/use_mode");

var SoundtrackCardComponent = function SoundtrackCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useMode = (0, _use_mode.useMode)(),
      _useMode2 = (0, _slicedToArray2.default)(_useMode, 1),
      mode = _useMode2[0];

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      isEditing = _useContext.isEditing,
      onEdit = _useContext.onEdit;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _data_mapping.JsonResumeToFlatObject)(data, _mapping.SoundtrackMapping);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _data_mapping.FlatObjectToJsonResume)(editedData, _mapping.SoundtrackMapping));
  }, [onEdit]);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateSoundtrackComplete)(mappedData);
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
    kind: "soundtrack",
    isComplete: isComplete,
    isEditingProfile: isEditing,
    data: mappedData,
    sides: {
      front: function front(props) {
        return _react.default.createElement(_soundtrack_front.SoundtrackFront, props);
      },
      back: function back(props) {
        return _react.default.createElement(_soundtrack_back.SoundtrackBack, props);
      }
    },
    editDialog: {
      component: _soundtrack_card_edit_dialog.SoundtrackCardEditDialog,
      onEdit: onDialogEdited,
      validationSchema: _validator.SoundtrackValidationSchema
    },
    variant: variant,
    side: currentSide,
    isTransitionUnique: false
  });
};

var SoundtrackCard = SoundtrackCardComponent;
exports.SoundtrackCard = SoundtrackCard;