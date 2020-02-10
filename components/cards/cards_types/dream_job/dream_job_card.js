"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamJobCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _dream_job_front = require("./dream_job_front/dream_job_front");

var _dream_job_back = require("./dream_job_back/dream_job_back");

var _profile = require("../../../profile");

var _mapping = require("./data/mapping");

var _dream_job_card_edit_dialog = require("./dream_job_edit_dialog/dream_job_card_edit_dialog");

var _validator = require("./data/validator");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DreamJobCardComponent = function DreamJobCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_profile.DeveloperProfileContext),
      data = _useContext.data,
      isEditing = _useContext.isEditing,
      onEdit = _useContext.onEdit;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapDreamJobFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapDreamJobToJsonResume)(editedData));
  }, []);
  return _react.default.createElement(_profile_card.ProfileCard, {
    isEditingProfile: isEditing,
    data: mappedData,
    sides: {
      front: _dream_job_front.DreamJobFront,
      back: _dream_job_back.DreamJobBack
    },
    editDialog: {
      component: _dream_job_card_edit_dialog.DreamJobCardEditDialog,
      validationSchema: _validator.DreamJobValidationSchema,
      onEdit: onDialogEdited
    },
    variant: variant,
    side: side
  });
};

var DreamJobCard = DreamJobCardComponent;
exports.DreamJobCard = DreamJobCard;