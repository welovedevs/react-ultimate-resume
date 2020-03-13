"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _basics_back = require("./basics_back/basics_back");

var _mapping = require("./data/mapping");

var _basic_edit_dialog = require("./basics_edit_dialog/basic_edit_dialog");

var _validator = require("./data/validator");

var _contexts = require("../../../../utils/context/contexts");

var _basics_front = require("./basics_front/basics_front");

var BasicsCardComponent = function BasicsCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      isEditing = _useContext.isEditing,
      onEdit = _useContext.onEdit,
      mode = _useContext.mode;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _mapping.mapJsonResumeToBasicData)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapBasicsDataToJsonResume)(editedData));
  }, []);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateBasicsComplete)(mappedData);
  }, [mappedData]);

  if (!isComplete && mode !== 'edit') {
    return null;
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card.ProfileCard, {
    data: mappedData,
    isEditingProfile: isEditing,
    editDialog: {
      component: _basic_edit_dialog.BasicsCardEditDialog,
      validationSchema: _validator.BasicsValidationSchema,
      onEdit: onDialogEdited
    },
    sides: {
      front: _basics_front.BasicsFront,
      back: _basics_back.BasicsBack
    },
    variant: variant,
    isComplete: isComplete,
    side: side
  }));
};

var BasicsCard = BasicsCardComponent;
exports.BasicsCard = BasicsCard;