"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundtrackCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _soundtrack_front = require("./soundtrack_front/soundtrack_front");

var _soundtrack_back = require("./soundtrack_back/soundtrack_back");

var _profile = require("../../../profile");

var _data_mapping = require("../../utils/data_mapping");

var _soundtrack_card_edit_dialog = require("./edit_dialog/soundtrack_card_edit_dialog");

var _mapping = require("./data/mapping");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SoundtrackCardComponent = function SoundtrackCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_profile.DeveloperProfileContext),
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