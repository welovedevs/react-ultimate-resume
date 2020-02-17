"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsEditForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _formik = require("formik");

var _keyBy = _interopRequireDefault(require("lodash/keyBy"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _reactSortableHoc = require("react-sortable-hoc");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery/useMediaQuery"));

var _ui = require("@wld/ui");

var _search_gifs_dialog = require("../../../../../commons/search_gif_dialog/search_gifs_dialog");

var _add_button_dashed = require("../../../../../commons/add_button_dashed/add_button_dashed");

var _gifs_sortable_cards = require("./gifs_sortable_cards/gifs_sortable_cards");

var _gifs_edit_form_styles = require("./gifs_edit_form_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_gifs_edit_form_styles.styles);

var GifsEditFormComponent = function GifsEditFormComponent(_ref) {
  var handleValueChange = _ref.helpers.handleValueChange;
  var theme = (0, _reactJss.useTheme)();
  var isMobile = (0, _useMediaQuery.default)("(max-width: ".concat(theme.screenSizes.small, "px)"));
  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      interests = _useFormikContext.values.interests,
      validationErrors = _useFormikContext.errors;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  var removeSelectedIndex = (0, _react.useCallback)(function () {
    return setSelectedIndex(null);
  }, []);

  var _ref2 = validationErrors || {},
      errors = _ref2.interests;

  var keyedValues = (0, _react.useMemo)(function () {
    return (0, _keyBy.default)(interests, function (_ref3) {
      var id = _ref3.id;
      return id;
    });
  }, [interests]);
  var interestChanged = (0, _react.useCallback)(function (interestIndex, field, value) {
    handleValueChange("interests[".concat(interestIndex, "].").concat(field))(value);
  }, []);
  var interestDeleted = (0, _react.useCallback)(function (id) {
    console.log({
      id: id
    });
    console.log({
      keyedValues: keyedValues
    });
    handleValueChange('interests')(Object.values((0, _omit.default)(keyedValues, id)));
  }, [JSON.stringify(keyedValues)]);
  var addInterest = (0, _react.useCallback)(function () {
    var id = (0, _v.default)();
    handleValueChange('interests')(interests.concat({
      index: interests.length,
      id: id
    }));
    setSelectedIndex(interests.length);
  }, [JSON.stringify(interests)]);
  var move = (0, _react.useCallback)(function (_ref4) {
    var oldIndex = _ref4.oldIndex,
        newIndex = _ref4.newIndex;
    handleValueChange('interests')((0, _reactSortableHoc.arrayMove)(interests, oldIndex, newIndex).map(function (data, index) {
      return _objectSpread({}, data, {
        index: index
      });
    }));
  }, [interests]);
  var globalError = typeof errors === 'string' && errors;
  var handleGifChange = (0, _react.useCallback)(function (value) {
    return function () {
      return interestChanged(selectedIndex, 'gifUrl', value);
    };
  }, [selectedIndex]);
  var handleGifSelection = (0, _react.useCallback)(function (_ref5) {
    var url = _ref5.url;
    handleGifChange(url)();
    removeSelectedIndex();
  }, [handleGifChange]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_search_gifs_dialog.SearchGifsDialog, {
    open: Boolean(selectedIndex !== null),
    onClose: removeSelectedIndex,
    onSelect: handleGifSelection
  }), globalError && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "h4",
    component: "h4"
  }, globalError), isMobile && _react.default.createElement(_add_button_dashed.AddButtonDashed, {
    classes: {
      container: classes.addButtonDashed
    },
    onClick: addInterest
  }), _react.default.createElement(_gifs_sortable_cards.GifsSortableCards, {
    items: interests,
    interestDeleted: interestDeleted,
    interestChanged: interestChanged,
    errors: errors,
    onSortEnd: move,
    setSelectedIndex: setSelectedIndex
  }), !isMobile && _react.default.createElement(_add_button_dashed.AddButtonDashed, {
    classes: {
      container: classes.addButtonDashed
    },
    onClick: addInterest
  }));
};

var GifsEditForm = GifsEditFormComponent;
exports.GifsEditForm = GifsEditForm;