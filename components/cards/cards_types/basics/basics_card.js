"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsCard = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _basics_back = require("./basics_back/basics_back");

var _mapping = require("./data/mapping");

var _basic_edit_dialog = require("./basics_edit_dialog/basic_edit_dialog");

var _validator = require("./data/validator");

var _contexts = require("../../../../utils/context/contexts");

var _basics_front = require("./basics_front/basics_front");

var _use_mode = require("../../../hooks/use_mode");

var BasicsCardComponent = function BasicsCardComponent(_ref) {
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
    return (0, _mapping.mapJsonResumeToBasicData)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapBasicsDataToJsonResume)(editedData));
  }, [onEdit]);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateBasicsComplete)(mappedData);
  }, [mappedData]);

  if (!isComplete && mode !== 'edit') {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_profile_card.ProfileCard, {
    kind: "basics",
    data: mappedData,
    isEditingProfile: isEditing,
    editDialog: {
      component: _basic_edit_dialog.BasicsCardEditDialog,
      validationSchema: _validator.BasicsValidationSchema,
      onEdit: onDialogEdited
    },
    sides: {
      front: function front(props) {
        return /*#__PURE__*/_react.default.createElement(_basics_front.BasicsFront, props);
      },
      back: function back(props) {
        return /*#__PURE__*/_react.default.createElement(_basics_back.BasicsBack, props);
      }
    },
    variant: variant,
    isComplete: isComplete,
    side: side
  }));
};

var BasicsCard = BasicsCardComponent;
exports.BasicsCard = BasicsCard;