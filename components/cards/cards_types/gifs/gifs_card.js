"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsCard = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _gifs_front = require("./gifs_front/gifs_front");

var _gifs_back = require("./gifs_back/gifs_back");

var _gifs_edit_dialog = require("./gifs_edit_dialog/gifs_edit_dialog");

var _validator = require("./data/validator");

var _mapping = require("./data/mapping");

var _contexts = require("../../../../utils/context/contexts");

var _side = require("../../../commons/profile_card/profile_card_side/side");

var _use_mode = require("../../../hooks/use_mode");

var GifsCardComponent = function GifsCardComponent(_ref) {
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
    return (0, _mapping.mapInterestsFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapInterestsToJsonResume)(editedData));
  }, [onEdit]);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateInterestsComplete)(mappedData);
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
    kind: "gifs",
    isEditingProfile: isEditing,
    isComplete: isComplete,
    data: mappedData,
    sides: {
      front: function front(props) {
        return /*#__PURE__*/_react.default.createElement(_gifs_front.GifsFront, props);
      },
      back: function back(props) {
        return /*#__PURE__*/_react.default.createElement(_gifs_back.GifsBack, props);
      }
    },
    editDialog: {
      component: _gifs_edit_dialog.GifsEditDialog,
      validationSchema: _validator.interestsValidator,
      onEdit: onDialogEdited
    },
    variant: variant,
    side: currentSide
  });
};

var GifsCard = GifsCardComponent;
exports.GifsCard = GifsCard;