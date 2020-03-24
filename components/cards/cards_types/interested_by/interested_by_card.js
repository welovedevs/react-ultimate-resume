"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterestedByCard = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _interested_by_front = require("./interested_by_front/interested_by_front");

var _interested_by_back = require("./interested_by_back/interested_by_back");

var _data_mapping = require("../../utils/data_mapping");

var _interested_by_edit_dialog = require("./interested_by_edit_dialog/interested_by_edit_dialog");

var _mapping = require("./data/mapping");

var _validator = require("./data/validator");

var _contexts = require("../../../../utils/context/contexts");

var _use_mode = require("../../../hooks/use_mode");

var InterestedByCardComponent = function InterestedByCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;

  var _useMode = (0, _use_mode.useMode)(),
      _useMode2 = (0, _slicedToArray2.default)(_useMode, 1),
      mode = _useMode2[0];

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      data = _useContext.data,
      onEdit = _useContext.onEdit,
      isEditing = _useContext.isEditing;

  var mappedData = (0, _react.useMemo)(function () {
    return (0, _data_mapping.JsonResumeToFlatObject)(data, _mapping.interestedByMapping);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _data_mapping.FlatObjectToJsonResume)(editedData, _mapping.interestedByMapping));
  }, [onEdit]);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateInterestedByComplete)(mappedData);
  }, [mappedData]);

  if (!isComplete && mode !== 'edit') {
    return null;
  }

  return (/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_profile_card.ProfileCard, {
      kind: "interested_by",
      data: mappedData,
      isComplete: isComplete,
      isEditingProfile: isEditing,
      sides: {
        front: function front(props) {
          return (/*#__PURE__*/_react.default.createElement(_interested_by_front.InterestedByFront, props)
          );
        },
        back: function back(props) {
          return (/*#__PURE__*/_react.default.createElement(_interested_by_back.InterestedByBack, props)
          );
        }
      },
      editDialog: {
        component: _interested_by_edit_dialog.InterestedByEditDialog,
        validationSchema: _validator.interestedByValidationSchema,
        onEdit: onDialogEdited
      },
      variant: variant,
      side: side
    }))
  );
};

var InterestedByCard = InterestedByCardComponent;
exports.InterestedByCard = InterestedByCard;