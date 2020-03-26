"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamJobCard = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _dream_job_front = require("./dream_job_front/dream_job_front");

var _dream_job_back = require("./dream_job_back/dream_job_back");

var _dream_job_card_edit_dialog = require("./dream_job_edit_dialog/dream_job_card_edit_dialog");

var _validator = require("./data/validator");

var _mapping = require("./data/mapping");

var _contexts = require("../../../../utils/context/contexts");

var _use_mode = require("../../../hooks/use_mode");

var DreamJobCardComponent = function DreamJobCardComponent(_ref) {
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
    return (0, _mapping.mapDreamJobFromJsonResume)(data);
  }, [data]);
  var onDialogEdited = (0, _react.useCallback)(function (editedData) {
    onEdit((0, _mapping.mapDreamJobToJsonResume)(editedData));
  }, [onEdit]);
  var isComplete = (0, _react.useMemo)(function () {
    return (0, _validator.validateDreamjobComplete)(mappedData);
  }, [mappedData]);

  if (!isComplete && mode !== 'edit') {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_profile_card.ProfileCard, {
    kind: "dreamjob",
    isEditingProfile: isEditing,
    isComplete: isComplete,
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