"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterestedByCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _interested_by_front = require("./interested_by_front/interested_by_front");

var _interested_by_back = require("./interested_by_back/interested_by_back");

var _data_mapping = require("../../utils/data_mapping");

var _validator = require("./data/validator");

var _mapping = require("./data/mapping");

var _interested_by_edit_dialog = require("./edit_dialog/interested_by_edit_dialog");

var _profile = require("../../../profile");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InterestedByCardComponent = function InterestedByCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_profile.DeveloperProfileContext),
      data = _useContext.data,
      onEdit = _useContext.onEdit,
      isEditing = _useContext.isEditing;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _data_mapping.JsonResumeToFlatObject)(data, _mapping.InterestedByMapping);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _data_mapping.FlatObjectToJsonResume)(editedData, _mapping.InterestedByMapping));
  }, []);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card.ProfileCard, {
    data: mappedData,
    isEditingProfile: isEditing,
    sides: {
      front: _interested_by_front.InterestedByFront,
      back: _interested_by_back.InterestedByBack
    },
    editDialog: {
      component: _interested_by_edit_dialog.InterestedByEditDialog,
      validationSchema: _validator.InterestedByValidationSchema,
      onEdit: onDialogEdited
    },
    variant: variant,
    side: side
  }));
};

var InterestedByCard = InterestedByCardComponent;
exports.InterestedByCard = InterestedByCard;