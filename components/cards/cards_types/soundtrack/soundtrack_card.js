"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundtrackCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _soundtrack_front = require("./soundtrack_front/soundtrack_front");

var _soundtrack_back = require("./soundtrack_back/soundtrack_back");

var _data_mapping = require("../../utils/data_mapping");

var _soundtrack_card_edit_dialog = require("./edit_dialog/soundtrack_card_edit_dialog");

var _mapping = require("./data/mapping");

var _contexts = require("../../../../utils/context/contexts");

var SoundtrackCardComponent = function SoundtrackCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      isEditing = _useContext.isEditing,
      onEdit = _useContext.onEdit;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _data_mapping.JsonResumeToFlatObject)(data, _mapping.SoundtrackMapping);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _data_mapping.FlatObjectToJsonResume)(editedData, _mapping.SoundtrackMapping));
  }, []);
  return _react.default.createElement(_profile_card.ProfileCard, {
    isEditingProfile: isEditing,
    data: mappedData,
    sides: {
      front: _soundtrack_front.SoundtrackFront,
      back: _soundtrack_back.SoundtrackBack
    },
    editDialog: {
      component: _soundtrack_card_edit_dialog.SoundtrackCardEditDialog,
      onEdit: onDialogEdited
    },
    variant: variant,
    side: side,
    isTransitionUnique: false
  });
};

var SoundtrackCard = SoundtrackCardComponent;
exports.SoundtrackCard = SoundtrackCard;