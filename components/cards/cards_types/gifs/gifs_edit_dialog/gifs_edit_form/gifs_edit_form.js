"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsEditForm = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _formik = require("formik");

var _keyBy = _interopRequireDefault(require("lodash/keyBy"));

var _capitalize = _interopRequireDefault(require("lodash/capitalize"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _reactSortableHoc = require("react-sortable-hoc");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery/useMediaQuery"));

var _ui = require("@wld/ui");

var _search_gifs_dialog = require("../../../../../commons/search_gif_dialog/search_gifs_dialog");

var _add_button_dashed = require("../../../../../commons/add_button_dashed/add_button_dashed");

var _gifs_sortable_cards = require("./gifs_sortable_cards/gifs_sortable_cards");

var _gifs_edit_form_styles = require("./gifs_edit_form_styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
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
  }, [JSON.stringify(interests)]);
  var interestChanged = (0, _react.useCallback)(function (interestIndex, field, value) {
    handleValueChange("interests[".concat(interestIndex, "].").concat(field))(value);
  }, []);
  var interestDeleted = (0, _react.useCallback)(function (id) {
    handleValueChange('interests')(Object.values((0, _omit.default)(keyedValues, id)));
  }, [JSON.stringify(keyedValues), JSON.stringify(interests)]);
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
  var handleGifSelection = (0, _react.useCallback)(function (_ref5) {
    var url = _ref5.url,
        query = _ref5.query;
    interestChanged(selectedIndex, 'name', (0, _capitalize.default)(query));
    interestChanged(selectedIndex, 'gifUrl', url);
    removeSelectedIndex();
  }, [interestChanged, selectedIndex]);
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