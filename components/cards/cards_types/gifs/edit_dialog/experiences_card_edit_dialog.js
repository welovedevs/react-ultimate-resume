"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterestsEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _reactSortableHoc = require("react-sortable-hoc");

var _ui = require("@wld/ui");

var _experiences_card_edit_dialog_translations = _interopRequireDefault(require("./experiences_card_edit_dialog_translations"));

var _experiences_card_edit_dialog_styles = _interopRequireDefault(require("./experiences_card_edit_dialog_styles"));

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _formik = require("formik");

var _keyBy = _interopRequireDefault(require("lodash/keyBy"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _use_giphy_results = require("../../../../hooks/giphy/use_giphy_results");

var _loading_spinner = require("../../../../commons/loading_spinner/loading_spinner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddIcon = function AddIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M14.52 8h-6v6h-2V8h-6V6h6V0h2v6h6v2z"
  }));
};

AddIcon.defaultProps = {
  width: "15",
  height: "14",
  viewBox: "0 0 15 14",
  fill: "#230CAE",
  xmlns: "http://www.w3.org/2000/svg"
};

var MoveIcon = function MoveIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M3.52 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18V6h-18z"
  }));
};

MoveIcon.defaultProps = {
  width: "25",
  height: "24",
  viewBox: "0 0 25 24",
  fill: "#181818",
  xmlns: "http://www.w3.org/2000/svg"
};

var DeleteIcon = function DeleteIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M8.277 25.334C8.277 26.8 9.498 28 10.99 28h10.857c1.493 0 2.714-1.2 2.714-2.666v-16H8.277v16zm17.642-20h-4.75L19.813 4h-6.785L11.67 5.333H6.92V8h19V5.333z"
  }));
};

DeleteIcon.defaultProps = {
  width: "33",
  height: "32",
  viewBox: "0 0 33 32",
  fill: "#fff",
  xmlns: "http://www.w3.org/2000/svg"
};

var RandomIcon = function RandomIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.51.467a.761.761 0 0 0-.523.217.717.717 0 0 0-.215.51V2.65h-1.5a.762.762 0 0 0-.53.213l-4.717 4.577-4.717-4.577a.762.762 0 0 0-.53-.213H1.28a.77.77 0 0 0-.536.21.727.727 0 0 0-.223.517.709.709 0 0 0 .223.518.752.752 0 0 0 .536.21h4.188l4.497 4.363-4.497 4.364H1.28a.771.771 0 0 0-.537.209.727.727 0 0 0-.223.518.708.708 0 0 0 .223.518.753.753 0 0 0 .537.21h4.498c.199 0 .39-.077.53-.214l4.717-4.576 4.717 4.576c.141.137.332.213.53.213h1.5v1.455c0 .144.044.284.126.404.082.12.2.213.337.268a.772.772 0 0 0 .816-.158l2.25-2.182a.717.717 0 0 0 .219-.514.717.717 0 0 0-.22-.514l-2.249-2.182a.752.752 0 0 0-.541-.213.761.761 0 0 0-.523.217.717.717 0 0 0-.215.51v1.455h-1.19l-4.497-4.364 4.498-4.364h1.189v1.455c0 .144.044.284.126.404.082.12.2.213.337.268a.771.771 0 0 0 .816-.158l2.25-2.182a.717.717 0 0 0 .219-.514.716.716 0 0 0-.22-.514L19.051.68a.752.752 0 0 0-.541-.213z",
    fill: "#8D8D8D"
  }));
};

RandomIcon.defaultProps = {
  width: "22",
  height: "17",
  viewBox: "0 0 22 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_experiences_card_edit_dialog_styles.default);
var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref) {
  var classes = _ref.classes;
  return _react.default.createElement(MoveIcon, {
    className: classes.dragHandle
  });
});
var InterestItem = (0, _reactSortableHoc.SortableElement)(function (_ref2) {
  var id = _ref2.id,
      interest = _ref2.interest,
      onChange = _ref2.onChange,
      onRemove = _ref2.onRemove,
      fieldErrors = _ref2.error,
      classes = _ref2.classes,
      index = _ref2.interestIndex,
      setSelectedIndex = _ref2.setSelectedIndex,
      selected = _ref2.selected;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var hasError = !!fieldErrors;
  return _react.default.createElement("div", {
    className: classes.experience
  }, _react.default.createElement(DragHandle, {
    classes: classes
  }), _react.default.createElement(_ui.ListItem, {
    button: true,
    className: (0, _classnames.default)(classes.listItem, hasError && classes.listItemError, selected && classes.listItemSelected)
  }, _react.default.createElement(ContentFields, {
    setSelectedIndex: setSelectedIndex,
    fieldErrors: fieldErrors,
    id: id,
    formatMessage: formatMessage,
    interest: interest,
    onChange: onChange,
    classes: classes,
    index: index,
    onRemove: onRemove
  })));
});

var ContentFields = function ContentFields(_ref3) {
  var fieldErrors = _ref3.fieldErrors,
      id = _ref3.id,
      formatMessage = _ref3.formatMessage,
      interest = _ref3.interest,
      onChange = _ref3.onChange,
      classes = _ref3.classes,
      index = _ref3.index,
      setSelectedIndex = _ref3.setSelectedIndex,
      onRemove = _ref3.onRemove;
  var handleNameChange = (0, _react.useCallback)(function (e) {
    return onChange(index, 'name', e.target.value);
  }, [index]);
  var onGifClick = (0, _react.useCallback)(function () {
    return setSelectedIndex(index);
  }, [index]);
  return _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement("div", {
    className: classes.gifItem,
    onClick: onGifClick
  }, _react.default.createElement("div", {
    className: classes.imageWrapper
  }, _react.default.createElement("img", {
    className: classes.image,
    src: interest.gifUrl,
    alt: interest.name
  })), _react.default.createElement("div", {
    className: classes.textFieldWrapper
  }, _react.default.createElement(_ui.TextField, {
    id: "interest_name_".concat(id),
    inputClassName: classes.interestNameTextFieldInput,
    placeholder: formatMessage(_experiences_card_edit_dialog_translations.default.interestNamePlaceholder),
    value: interest.name,
    onChange: handleNameChange,
    margin: "normal",
    size: "small",
    variant: "flat"
  }), _react.default.createElement(_ui.Tooltip, {
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.delete",
      defaultMessage: "Supprimer"
    })
  }, _react.default.createElement(_ui.Button, {
    className: classes.deleteButton,
    onClick: onRemove(id)
  }, _react.default.createElement(DeleteIcon, null)))), (fieldErrors === null || fieldErrors === void 0 ? void 0 : fieldErrors.name) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.name)));
};

var SortableInterests = (0, _reactSortableHoc.SortableContainer)(function (_ref4) {
  var _ref4$items = _ref4.items,
      items = _ref4$items === void 0 ? [] : _ref4$items,
      interestDeleted = _ref4.interestDeleted,
      interestChanged = _ref4.interestChanged,
      errors = _ref4.errors,
      setSelectedIndex = _ref4.setSelectedIndex,
      classes = _ref4.classes,
      selectedIndex = _ref4.selectedIndex;
  return _react.default.createElement(_ui.List, {
    component: "nav",
    className: classes.list
  }, items.filter(Boolean).sort(function (_ref5, _ref6) {
    var a = _ref5.index;
    var b = _ref6.index;
    return a - b;
  }).map(function (interest, index) {
    return _react.default.createElement(InterestItem, {
      selected: selectedIndex === index,
      index: index,
      key: "interest_".concat(interest.id, "_").concat(index),
      onChange: interestChanged,
      onRemove: interestDeleted,
      setSelectedIndex: setSelectedIndex,
      id: interest.id,
      interest: interest,
      error: errors && errors[index],
      classes: classes,
      interestIndex: index
    });
  }));
});

var GifPicker = function GifPicker(_ref7) {
  var classes = _ref7.classes,
      onSelect = _ref7.onSelect;

  var _useIntl2 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useGiphyResults = (0, _use_giphy_results.useGiphyResults)(input, page, 10),
      gifs = _useGiphyResults.gifs,
      loading = _useGiphyResults.loading;

  (0, _react.useEffect)(function () {
    return setPage(0);
  }, [input]);
  var showNextPage = (0, _react.useCallback)(function () {
    return setPage(page + 1);
  }, [page]);
  var handleInputChange = (0, _react.useCallback)(function (e) {
    return setInput(e.target.value);
  }, []);
  return _react.default.createElement("div", {
    className: classes.gifPicker
  }, _react.default.createElement("div", {
    className: classes.gifSearchFieldWrapper
  }, _react.default.createElement(_ui.TextField, {
    className: classes.gifSearchField,
    value: input,
    onChange: handleInputChange,
    placeholder: formatMessage(_experiences_card_edit_dialog_translations.default.gifSearchPlaceholder),
    variant: "flat"
  }), gifs && input && _react.default.createElement(_ui.Button, {
    onClick: showNextPage
  }, _react.default.createElement(RandomIcon, null)), loading && _react.default.createElement(_loading_spinner.LoadingSpinner, null)), gifs && input && _react.default.createElement("div", {
    className: classes.giphyResults
  }, gifs.map(function (_ref8, index) {
    var url = _ref8.url,
        id = _ref8.id,
        title = _ref8.title;
    return _react.default.createElement("div", {
      onClick: onSelect(url),
      key: "gif_".concat(id),
      className: (0, _classnames.default)(classes.imageWrapper, classes.gif)
    }, _react.default.createElement("img", {
      src: url,
      alt: title,
      className: classes.image
    }));
  })));
};

var InterestsEditForm = function InterestsEditForm(_ref9) {
  var handleValueChange = _ref9.helpers.handleValueChange,
      classes = _ref9.classes;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      interests = _useFormikContext.values.interests,
      validationErrors = _useFormikContext.errors,
      handleChange = _useFormikContext.handleChange;

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedIndex = _useState6[0],
      setSelectedIndex = _useState6[1];

  var errors = validationErrors;
  var keyedValues = (0, _react.useMemo)(function () {
    return (0, _keyBy.default)(interests, function (_ref10) {
      var id = _ref10.id;
      return id;
    });
  }, [interests]);
  var interestChanged = (0, _react.useCallback)(function (interestIndex, field, value) {
    handleValueChange("interests[".concat(interestIndex, "].").concat(field))(value);
  }, []);
  var interestDeleted = (0, _react.useCallback)(function (id) {
    return function () {
      handleValueChange('interests')(Object.values((0, _omit.default)(keyedValues, id)));
    };
  }, [JSON.stringify(keyedValues)]);
  var addInterest = (0, _react.useCallback)(function () {
    var id = (0, _v.default)();
    handleValueChange('interests')(interests.concat({
      index: interests.length,
      id: id
    }));
    setSelectedIndex(interests.length);
  }, [JSON.stringify(interests)]);
  var move = (0, _react.useCallback)(function (_ref11) {
    var oldIndex = _ref11.oldIndex,
        newIndex = _ref11.newIndex;
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
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: classes.currentElements
  }, _react.default.createElement(SortableInterests, _extends({
    helperClass: classes.sortableHelper,
    onSortEnd: move,
    items: interests,
    distance: 15,
    useDragHandle: true,
    lockAxis: "y",
    selectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex
  }, {
    interestChanged: interestChanged,
    interestDeleted: interestDeleted,
    errors: errors === null || errors === void 0 ? void 0 : errors.interests,
    classes: classes
  })), _react.default.createElement("div", {
    className: classes.addButton,
    onClick: addInterest
  }, _react.default.createElement(_ui.Tag, {
    className: classes.addTag
  }, _react.default.createElement(AddIcon, null)), _react.default.createElement(_ui.Typography, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.add",
    defaultMessage: "Ajouter"
  }))), globalError && _react.default.createElement(_ui.Typography, {
    color: "danger",
    component: "p"
  }, errors)), selectedIndex === null && _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.gifPickerPlaceHolder)
  }, _react.default.createElement(_ui.Typography, {
    variant: "h4",
    component: "h4"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Interests.editDialog.gifs.placeholder",
    defaultMessage: "Select an item to change its gif !"
  }))), selectedIndex !== null && _react.default.createElement(GifPicker, {
    selectedIndex: selectedIndex,
    classes: classes,
    onSelect: handleGifChange
  }));
};

var InterestsEditDialog = function InterestsEditDialog(_ref12) {
  var data = _ref12.data,
      onEdit = _ref12.onEdit,
      validationSchema = _ref12.validationSchema,
      onClose = _ref12.onClose;

  var _useIntl3 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl3.formatMessage;

  var validationSchemaToPass = (0, _react.useMemo)(function () {
    return validationSchema(formatMessage);
  }, [validationSchema]);
  var classes = useStyles({});
  return _react.default.createElement(_edit_dialog.EditDialog, {
    dialogClasses: {
      content: classes.dialogContent,
      dialog: {
        root: classes.dialogRoot,
        paper: classes.dialogPaper
      }
    },
    data: data,
    onEdit: onEdit,
    onClose: onClose,
    validationSchema: validationSchemaToPass,
    open: false,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Interests.editDialog.title",
      defaultMessage: "Show your loved hobbies with fancy gifs !"
    })
  }, function (helpers) {
    return _react.default.createElement(InterestsEditForm, {
      helpers: helpers,
      classes: classes
    });
  });
};

exports.InterestsEditDialog = InterestsEditDialog;