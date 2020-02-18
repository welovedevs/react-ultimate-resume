"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudiesCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _studies_front = require("./studies_front/studies_front");

var _studies_back = require("./studies_back/studies_back");

var _mapping = require("./data/mapping");

var _studies_card_edit_dialog = require("./edit_dialog/studies_card_edit_dialog");

var _validator = require("./data/validator");

var _contexts = require("../../../../utils/context/contexts");

var StudiesCardComponent = function StudiesCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      onEdit = _useContext.onEdit,
      isEditing = _useContext.isEditing;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapStudiesFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapStudiesToJsonResume)(editedData));
  }, []);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateStudiesComplete)(mappedData);
  }, [mappedData]);
  return _react.default.createElement(_profile_card.ProfileCard, {
    data: mappedData,
    isComplete: isComplete,
    isEditingProfile: isEditing,
    sides: {
      front: _studies_front.StudiesFront,
      back: _studies_back.StudiesBack
    },
    editDialog: {
      component: _studies_card_edit_dialog.StudiesCardEditDialog,
      validationSchema: _validator.StudiesValidator,
      onEdit: onDialogEdited
    },
    variant: variant,
    side: side
  });
};

var StudiesCard = StudiesCardComponent;
exports.StudiesCard = StudiesCard;