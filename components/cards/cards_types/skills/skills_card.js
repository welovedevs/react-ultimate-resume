"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _skills_front = require("./skills_front/skills_front");

var _skills_back = require("./skills_back/skills_back");

var _skills_edit_dialog = require("./skills_edit_dialog/skills_edit_dialog");

var _profile = require("../../../profile");

var _mapping = require("./data/mapping");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SkillsCardComponent = function SkillsCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_profile.DeveloperProfileContext),
      data = _useContext.data,
      onEdit = _useContext.onEdit,
      isEditing = _useContext.isEditing;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapSkillsFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapSkillsToJsonResume)(editedData));
  }, []);
  return _react.default.createElement(_profile_card.ProfileCard, {
    isEditingProfile: isEditing,
    sides: {
      front: _skills_front.SkillsFront,
      back: _skills_back.SkillsBack
    },
    editDialog: {
      component: _skills_edit_dialog.SkillsEditDialog,
      onEdit: onDialogEdited
    },
    data: mappedData,
    variant: variant,
    side: side
  });
};

var SkillsCard = SkillsCardComponent;
exports.SkillsCard = SkillsCard;