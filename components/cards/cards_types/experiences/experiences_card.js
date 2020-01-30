"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperiencesCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _experiences_front = require("./experiences_front/experiences_front");

var _experiences_back = require("./experiences_back/experiences_back");

var _experiences_card_edit_dialog = require("./edit_dialog/experiences_card_edit_dialog");

var _validator = require("./data/validator");

var _profile = require("../../../profile");

var _mapping = require("./data/mapping");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ExperiencesCardComponent = function ExperiencesCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_profile.DeveloperProfileContext),
      data = _useContext.data,
      onEdit = _useContext.onEdit,
      isEditing = _useContext.isEditing;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapWorkFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    return onEdit((0, _mapping.mapWorkToJsonResume)(editedData));
  }, []);
  return _react.default.createElement(_profile_card.ProfileCard, {
    isEditingProfile: isEditing,
    data: mappedData,
    sides: {
      front: _experiences_front.ExperiencesFront,
      back: _experiences_back.ExperiencesBack
    },
    editDialog: {
      component: _experiences_card_edit_dialog.ExperiencesEditDialog,
      validationSchema: _validator.WorkValidator,
      onEdit: onDialogEdited
    },
    variant: variant,
    side: side
  });
};

var ExperiencesCard = ExperiencesCardComponent;
exports.ExperiencesCard = ExperiencesCard;