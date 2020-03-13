"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _gifs_front = require("./gifs_front/gifs_front");

var _gifs_back = require("./gifs_back/gifs_back");

var _gifs_edit_dialog = require("./gifs_edit_dialog/gifs_edit_dialog");

var _validator = require("./data/validator");

var _mapping = require("./data/mapping");

var _contexts = require("../../../../utils/context/contexts");

var GifsCardComponent = function GifsCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      isEditing = _useContext.isEditing,
      onEdit = _useContext.onEdit,
      mode = _useContext.mode;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapInterestsFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapInterestsToJsonResume)(editedData));
  }, []);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateInterestsComplete)(mappedData);
  }, [mappedData]);

  if (!isComplete && mode !== 'edit') {
    return null;
  }

  return _react.default.createElement(_profile_card.ProfileCard, {
    isEditingProfile: isEditing,
    isComplete: isComplete,
    data: mappedData,
    sides: {
      front: _gifs_front.GifsFront,
      back: _gifs_back.GifsBack
    },
    editDialog: {
      component: _gifs_edit_dialog.GifsEditDialog,
      validationSchema: _validator.interestsValidator,
      onEdit: onDialogEdited
    },
    variant: variant,
    side: side
  });
};

var GifsCard = GifsCardComponent;
exports.GifsCard = GifsCard;