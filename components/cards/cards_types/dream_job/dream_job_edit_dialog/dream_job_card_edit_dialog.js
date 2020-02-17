"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamJobCardEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _formik = require("formik");

var _v = _interopRequireDefault(require("uuid/v4"));

var _ui = require("@wld/ui");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _edit_dialog_field = require("../../../../commons/edit_dialog_field/edit_dialog_field");

var _checkbox_group = require("../../../../commons/checkbox_group/checkbox_group");

var _contract_types = require("../../../../../utils/enums/contract_types/contract_types");

var _select = require("../../../../commons/select/select");

var _job_perks_utils = require("../../../../../utils/enums/job_perks/job_perks_utils");

var _perks_field = require("./perks_field/perks_field");

var _location_places_field = require("./location_places_field/location_places_field");

var _remote_utils = require("../../../../../utils/enums/remote/remote_utils");

var _remote_filter_translations = require("../../../../../utils/enums/remote/remote_filter_translations");

var _contract_types_translations = require("../../../../../utils/enums/contract_types/contract_types_translations");

var _dream_job_card_edit_dialog_styles = require("./dream_job_card_edit_dialog_styles");

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

var useStyles = (0, _reactJss.createUseStyles)(_dream_job_card_edit_dialog_styles.styles);
var checkboxGroupPerks = Object.values(_job_perks_utils.JobPerks).filter(function (perk) {
  return perk !== _job_perks_utils.JobPerks.OTHER;
});
var DEFAULT_OBJECT = {};

var DreamJobCardEditDialogComponent = function DreamJobCardEditDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      data = _ref.data,
      onEdit = _ref.onEdit,
      validationSchema = _ref.validationSchema;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var validationSchemaToPass = (0, _react.useMemo)(function () {
    return validationSchema(formatMessage);
  }, [validationSchema]);
  return _react.default.createElement(_edit_dialog.EditDialog, {
    open: open,
    onClose: onClose,
    data: data,
    onEdit: onEdit,
    validationSchema: validationSchemaToPass,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "DreamJob.editDialog.title",
      defaultMessage: "Your dream job information"
    })
  }, function (helpers) {
    return _react.default.createElement(Content, {
      helpers: helpers
    });
  });
};

var Content = function Content(_ref2) {
  var handleValueChange = _ref2.helpers.handleValueChange;

  var _useIntl2 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

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
    return Object.entries(perks || {}).filter(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          value = _ref4[1];

      return value === true;
    }).map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
          perk = _ref6[0];

      return perk;
    });
  }, [perks]);
  var toggleOtherPerk = (0, _react.useCallback)(function () {
    return handleValueChange('perks')(_objectSpread({}, perks, _defineProperty({}, _job_perks_utils.JobPerks.OTHER, perks[_job_perks_utils.JobPerks.OTHER] !== null ? null : '')));
  }, [perks]);
  var otherPerk = (0, _react.useMemo)(function () {
    var _perks$JobPerks$OTHER;

    return (_perks$JobPerks$OTHER = perks[_job_perks_utils.JobPerks.OTHER]) !== null && _perks$JobPerks$OTHER !== void 0 ? _perks$JobPerks$OTHER : null;
  }, [perks]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_location_places_field.LocationPlacesField, {
    error: errors === null || errors === void 0 ? void 0 : errors.places,
    places: places,
    addPlace: addPlace,
    removePlace: removePlace
  }), _react.default.createElement(_perks_field.PerksField, {
    error: errors === null || errors === void 0 ? void 0 : errors.perks,
    checkboxGroupPerks: checkboxGroupPerks,
    checkedPerks: checkedPerks,
    onChange: onChangePerks,
    toggleOtherPerk: toggleOtherPerk,
    otherPerk: otherPerk,
    handleChange: handleChange,
    perks: perks
  }), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "DreamJob.editDialog.salary.title",
      defaultMessage: "What's your desired salary?"
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
      id: "DreamJob.editDialog.remoteFrequency.title",
      defaultMessage: "Do you want to work remotely?"
    })
  }, _react.default.createElement(_select.Select, {
    fullWidth: true,
    value: remoteFrequency,
    onChange: handleChange('remoteFrequency'),
    textFieldProps: {
      variant: 'flat'
    },
    textFieldIconProps: {
      className: classes.selectIcon
    }
  }, Object.values(_remote_utils.REMOTE_FREQUENCY).map(function (elemValue, index) {
    return _react.default.createElement(_ui.ListItem, {
      key: "remote_frequency_".concat(elemValue, "_").concat(index),
      value: elemValue
    }, formatMessage(_remote_filter_translations.remoteSelectTranslations[elemValue]));
  }))), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.contractTypes,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "DreamJob.editDialog.contractTypes.title",
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

var DreamJobCardEditDialog = DreamJobCardEditDialogComponent;
exports.DreamJobCardEditDialog = DreamJobCardEditDialog;