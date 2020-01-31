"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _basics_front = require("./basics_front/basics_front");

var _basics_back = require("./basics_back/basics_back");

var _mapping = require("./data/mapping");

var _profile = require("../../../profile");

var _basic_card_edit_dialog = require("./edit_dialog/basic_card_edit_dialog");

var _validator = require("./data/validator");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BasicsCardComponent = function BasicsCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_profile.DeveloperProfileContext),
      data = _useContext.data,
      isEditing = _useContext.isEditing,
      onEdit = _useContext.onEdit;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapJsonResumeToBasicData)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapBasicsDataToJsonResume)(editedData));
  }, []);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card.ProfileCard, {
    data: mappedData,
    isEditingProfile: isEditing,
    editDialog: {
      component: _basic_card_edit_dialog.BasicsCardEditDialog,
      validationSchema: _validator.BasicsValidationSchema,
      onEdit: onDialogEdited
    },
    sides: {
      front: _basics_front.BasicsFront,
      back: _basics_back.BasicsBack
    },
    variant: variant,
    side: side
  }));
};

var BasicsCard = BasicsCardComponent;
exports.BasicsCard = BasicsCard;