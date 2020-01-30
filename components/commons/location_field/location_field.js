"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _use_google_maps_predictions = require("../../hooks/location/use_google_maps_predictions");

var _location_field_style = require("./location_field_style");

var _location_field_translations = require("./location_field_translations");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_location_field_style.locationFieldStyles);

var LocationFieldComponent = function LocationFieldComponent(_ref) {
  var variant = _ref.variant,
      onLocationSelected = _ref.onLocationSelected,
      value = _ref.value,
      clearOnSelect = _ref.clearOnSelect,
      onChange = _ref.onChange,
      fullWidth = _ref.fullWidth;
  var classes = useStyles();

  var _useIntl = (0, _reactIntl.useIntl)(),
      locale = _useIntl.locale,
      formatMessage = _useIntl.formatMessage;

  var inputRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      preventBlur = _useState4[0],
      setPreventBlur = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isFocused = _useState6[0],
      setIsFocused = _useState6[1];

  var _useGoogleMapsPredict = (0, _use_google_maps_predictions.useGoogleMapsPredictions)(input),
      predictions = _useGoogleMapsPredict.predictions;

  (0, _react.useEffect)(function () {
    setInput(value);
  }, [value]);
  var clear = (0, _react.useCallback)(function () {
    return setInput('');
  }, []);
  var handleChange = (0, _react.useCallback)(function (e) {
    setInput(e.target.value);

    if (typeof onChange === 'function') {
      e.persist();
      onChange(e);
    }

    if (typeof onLocationSelected === 'function' && !e.target.value) {
      onLocationSelected(null);
    }
  });
  var onPredictionSelected = (0, _react.useCallback)(function (placeId, description) {
    if (typeof onLocationSelected === 'function') {
      onLocationSelected({
        name: description,
        placeId: placeId,
        locale: locale
      });
    }

    setIsFocused(false);
  }, [locale, onLocationSelected]);
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, _react.default.createElement(_ui.TextField, {
    fullWidth: fullWidth,
    className: classes.input,
    onClick: function onClick(e) {
      return e.target && e.target.select && e.target.select();
    },
    value: input,
    onChange: handleChange,
    placeholder: formatMessage(_location_field_translations.locationFieldTranslations.placeholder),
    onBlur: function onBlur() {
      if (!preventBlur) {
        setIsFocused(false);
      }
    },
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    variant: variant || 'outlined',
    label: formatMessage(_location_field_translations.locationFieldTranslations.title),
    containerRef: inputRef
  }), isFocused && _react.default.createElement(PredictionsList, _extends({
    setPreventBlur: setPreventBlur,
    input: inputRef.current
  }, {
    predictions: predictions,
    classes: classes,
    onPredictionSelected: onPredictionSelected,
    locale: locale,
    setIsFocused: setIsFocused,
    setInput: setInput,
    clear: clear,
    clearOnSelect: clearOnSelect
  }))));
};

var PredictionsList = function PredictionsList(_ref2) {
  var _ref2$predictions = _ref2.predictions,
      predictions = _ref2$predictions === void 0 ? [] : _ref2$predictions,
      setPreventBlur = _ref2.setPreventBlur,
      input = _ref2.input,
      onPredictionSelected = _ref2.onPredictionSelected,
      classes = _ref2.classes,
      setInput = _ref2.setInput;
  return _react.default.createElement(_ui.PopperCard, {
    open: true,
    anchorElement: input,
    customClasses: {
      popper: classes.popperCard
    }
  }, _react.default.createElement(_ui.List, {
    className: classes.popperList
  }, predictions.filter(function (item) {
    return item;
  }).map(function (_ref3) {
    var description = _ref3.description,
        placeId = _ref3.place_id;
    return _react.default.createElement(_ui.ListItem, {
      key: "prediction_".concat(placeId),
      onMouseDown: function onMouseDown() {
        return setPreventBlur(true);
      },
      onMouseUp: function onMouseUp() {
        setPreventBlur(false);
        input && input.focus();
      },
      onClick: function onClick() {
        if (!placeId) {
          return;
        }

        setInput(description);
        onPredictionSelected(placeId, description);
      }
    }, _react.default.createElement(_ui.Typography, null, description || ''));
  })));
};

var LocationField = LocationFieldComponent;
exports.LocationField = LocationField;