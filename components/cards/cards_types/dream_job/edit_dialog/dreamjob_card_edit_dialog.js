"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamjobCardEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _formik = require("formik");

var _ui = require("@wld/ui");

var _v = _interopRequireDefault(require("uuid/v4"));

var _reactJss = require("react-jss");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _edit_dialog_field = require("../../../../commons/edit_dialog_field/edit_dialog_field");

var _checkbox_group = require("../../../../commons/checkbox_group/checkbox_group");

var _location_field = require("../../../../commons/location_field/location_field");

var _contract_types = require("../../../../../utils/enums/contract_types/contract_types");

var _contract_types_translations = require("../../../../../utils/enums/contract_types/contract_types_translations");

var _dreamjob_card_edit_dialog_styles = require("./dreamjob_card_edit_dialog_styles");

var _select = require("../../../../commons/select/select");

var _job_perks_utils = require("../../../../../utils/enums/job_perks/job_perks_utils");

var _job_perks_translations = require("../../../../../utils/enums/job_perks/job_perks_translations");

var _remote_utils = require("../../../../../utils/enums/remote/remote_utils");

var _remote_filter_translations = require("../../../../../utils/enums/remote/remote_filter_translations");

var _checkbox_group2 = require("../../../../commons/checkbox_field/checkbox_group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TrashIcon = function TrashIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M8.277 25.334C8.277 26.8 9.498 28 10.99 28h10.857c1.493 0 2.714-1.2 2.714-2.666v-16H8.277v16zm17.642-20h-4.75L19.813 4h-6.785L11.67 5.333H6.92V8h19V5.333z"
  }));
};

TrashIcon.defaultProps = {
  width: "33",
  height: "32",
  viewBox: "0 0 33 32",
  fill: "#fff",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_dreamjob_card_edit_dialog_styles.styles);
var checkboxGroupPerks = Object.values(_job_perks_utils.JobPerks).filter(function (perk) {
  return perk !== _job_perks_utils.JobPerks.OTHER;
});
var DEFAULT_OBJECT = {};

var DreamjobCardEditDialogContent = function DreamjobCardEditDialogContent(_ref) {
  var handleValueChange = _ref.helpers.handleValueChange;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      errors = _useFormikContext.errors,
      handleChange = _useFormikContext.handleChange;

  var places = values.places,
      salary = values.salary,
      remoteFrequency = values.remoteFrequency,
      contractTypes = values.contractTypes;
  var perks = values.perks || DEFAULT_OBJECT;
  var addPlace = (0, _react.useCallback)(function (place) {
    return handleValueChange('places')(places.concat(_objectSpread({}, place, {
      id: (0, _v.default)()
    })));
  }, [places]);
  var removePlace = (0, _react.useCallback)(function (id) {
    return function () {
      return handleValueChange('places')(places.filter(function (place) {
        return place.id !== id;
      }));
    };
  }, [places]);
  var onChangePerks = (0, _react.useCallback)(function (newPerks) {
    return handleValueChange('perks')(_objectSpread({}, newPerks.reduce(function (acc, perk) {
      acc[perk] = true;
      return acc;
    }, {}), _defineProperty({}, _job_perks_utils.JobPerks.OTHER, perks[_job_perks_utils.JobPerks.OTHER])));
  }, [perks]);
  var checkedPerks = (0, _react.useMemo)(function () {
    return Object.entries(perks || {}).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          value = _ref3[1];

      return value === true;
    }).map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 1),
          perk = _ref5[0];

      return perk;
    });
  }, [perks]);
  var toggleOtherPerk = (0, _react.useCallback)(function () {
    return handleValueChange('perks')(_objectSpread({}, perks, _defineProperty({}, _job_perks_utils.JobPerks.OTHER, perks[_job_perks_utils.JobPerks.OTHER] !== null ? null : '')));
  }, [perks]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_edit_dialog_field.EditDialogField, {
    classes: {
      containerChildren: classes.flexColumn
    },
    error: errors === null || errors === void 0 ? void 0 : errors.places,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.editDialog.location.title",
      defaultMessage: "What's your dreamjob location?"
    })
  }, _react.default.createElement(_location_field.LocationField, {
    onLocationSelected: addPlace,
    fullWidth: true
  }), _react.default.createElement("div", {
    className: classes.currentCities
  }, places.map(function (_ref6) {
    var name = _ref6.name,
        id = _ref6.id;
    return _react.default.createElement(_ui.Tag, {
      className: classes.deleteTag
    }, _react.default.createElement(TrashIcon, {
      onClick: removePlace(id),
      className: classes.deleteIcon
    }), _react.default.createElement(_ui.Typography, null, name));
  }))), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    classes: {
      containerChildren: classes.flexColumn
    },
    error: errors.perks,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.editDialog.perks.title",
      defaultMessage: "What perks are important to you ?"
    })
  }, _react.default.createElement(_checkbox_group.CheckboxGroup, {
    values: checkboxGroupPerks,
    translations: _job_perks_translations.JobPerksTranslations,
    value: checkedPerks,
    name: "perks",
    variant: "outlined",
    onChange: onChangePerks
  }), _react.default.createElement("div", {
    className: classes.othersCheckbox
  }, _react.default.createElement(_checkbox_group2.CheckboxField, {
    title: _react.default.createElement(_ui.Typography, null, formatMessage(_job_perks_translations.JobPerksTranslations[_job_perks_utils.JobPerks.OTHER])),
    onClick: toggleOtherPerk,
    checked: perks[_job_perks_utils.JobPerks.OTHER] !== null,
    variant: "outlined",
    color: "secondary"
  }), perks[_job_perks_utils.JobPerks.OTHER] !== null && _react.default.createElement(_ui.TextField, {
    onChange: handleChange,
    name: "perks[".concat(_job_perks_utils.JobPerks.OTHER, "]"),
    value: perks[_job_perks_utils.JobPerks.OTHER],
    variant: "flat"
  }))), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.editDialog.salary.title",
      defaultMessage: "What's your wanted salary?"
    }),
    error: errors.salary
  }, _react.default.createElement(_ui.TextField, {
    onChange: handleChange,
    name: "salary",
    value: salary,
    variant: "flat",
    fullWidth: true
  })), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.remoteFrequency,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.editDialog.remoteFrequency.title",
      defaultMessage: "Do you want to work remotely"
    })
  }, _react.default.createElement(_select.Select, {
    variant: "outlined",
    value: remoteFrequency,
    onChange: handleChange('remoteFrequency'),
    textFieldIconProps: {
      className: classes.selectIcon
    }
  }, Object.values(_remote_utils.REMOTE_FREQUENCY).map(function (elemValue, index) {
    return _react.default.createElement(_ui.ListItem, {
      key: "remote_frequency_".concat(elemValue, "_").concat(index),
      value: elemValue
    }, formatMessage(_remote_filter_translations.RemoteSelectTranslations[elemValue]));
  }))), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.contractTypes,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.editDialog.contractTypes.title",
      defaultMessage: "What contract types are you currently looking for?"
    })
  }, _react.default.createElement(_checkbox_group.CheckboxGroup, {
    values: _contract_types.CONTRACT_TYPES,
    translations: _contract_types_translations.contractTypesTranslations,
    value: contractTypes,
    name: "contractTypes",
    variant: "outlined",
    onChange: handleValueChange('contractTypes')
  })));
};

var DreamjobCardEditDialog = function DreamjobCardEditDialog(_ref7) {
  var data = _ref7.data,
      onEdit = _ref7.onEdit,
      validationSchema = _ref7.validationSchema,
      onClose = _ref7.onClose;

  var _useIntl2 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  var validationSchemaToPass = (0, _react.useMemo)(function () {
    return validationSchema(formatMessage);
  }, [validationSchema]);
  return _react.default.createElement(_edit_dialog.EditDialog, {
    data: data,
    onEdit: onEdit,
    onClose: onClose,
    validationSchema: validationSchemaToPass,
    open: true,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.editDialog.title",
      defaultMessage: "Your dreamjob information"
    })
  }, function (helpers) {
    return _react.default.createElement(DreamjobCardEditDialogContent, {
      helpers: helpers
    });
  });
};

exports.DreamjobCardEditDialog = DreamjobCardEditDialog;