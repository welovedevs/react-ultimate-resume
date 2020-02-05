"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguagesCardEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _keyBy = _interopRequireDefault(require("lodash/keyBy"));

var _reactIntl = require("react-intl");

var _reactSortableHoc = require("react-sortable-hoc");

var _v = _interopRequireDefault(require("uuid/v4"));

var _ui = require("@wld/ui");

var _languages_styles = require("./languages_styles");

var _languages_translations = _interopRequireDefault(require("./languages_translations"));

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _formik = require("formik");

var _reactJss = require("react-jss");

var _slider_with_popper = require("../../../../commons/slider_with_popper/slider_with_popper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref) {
  var classes = _ref.classes;
  return _react.default.createElement(MoveIcon, {
    className: classes.dragHandle
  });
});
var useStyles = (0, _reactJss.createUseStyles)(_languages_styles.styles);
var LanguageItem = (0, _reactSortableHoc.SortableElement)(function (_ref2) {
  var id = _ref2.id,
      language = _ref2.language,
      onChange = _ref2.onChange,
      onRemove = _ref2.onRemove,
      fieldErrors = _ref2.error,
      classes = _ref2.classes,
      index = _ref2.languageIndex;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var handleLanguageChange = (0, _react.useCallback)(function (e) {
    return onChange(index, 'language', e.target.value);
  }, [index]);
  var handleValueChange = (0, _react.useCallback)(function (e) {
    return onChange(index, 'value', Number(e.target.value));
  }, [index]);
  return _react.default.createElement("div", {
    className: classes.itemContainer
  }, _react.default.createElement(DragHandle, {
    classes: classes
  }), _react.default.createElement(_ui.ListItem, {
    className: (0, _classnames.default)(classes.listItem, fieldErrors && classes.listItemError)
  }, _react.default.createElement("div", {
    className: classes.fieldGroup
  }, _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(_ui.Typography, {
    color: "dark",
    variant: "label"
  }, formatMessage(_languages_translations.default.language)), _react.default.createElement(_ui.TextField, {
    fullwidth: true,
    value: language.language,
    onChange: handleLanguageChange,
    id: "language_language_".concat(id),
    placeholder: formatMessage(_languages_translations.default.languagePlaceholder)
  }), fieldErrors && fieldErrors.language && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.language)), _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(_ui.Typography, {
    color: "dark",
    variant: "label"
  }, formatMessage(_languages_translations.default.level)), _react.default.createElement(_slider_with_popper.SliderWithPopper, {
    color: "primary",
    name: "value",
    value: language.value,
    onChange: handleValueChange,
    min: 0,
    max: 100,
    className: classes.slider
  }), fieldErrors && fieldErrors.value && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.value))), _react.default.createElement(_ui.Tooltip, {
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.delete",
      defaultMessage: "Supprimer"
    })
  }, _react.default.createElement(_ui.Button, {
    className: classes.button,
    onClick: onRemove(id)
  }, _react.default.createElement(TrashIcon, null)))));
});
var SortableLanguagesItems = (0, _reactSortableHoc.SortableContainer)(function (_ref3) {
  var items = _ref3.items,
      onChange = _ref3.onChange,
      onDelete = _ref3.onDelete,
      errors = _ref3.errors,
      name = _ref3.name,
      schools = _ref3.schools,
      classes = _ref3.classes;
  return _react.default.createElement(_ui.List, null, items.map(function (language, index) {
    return _react.default.createElement(LanguageItem, _extends({
      key: "".concat(name, "_").concat(language.id, "_").concat(index),
      onChange: onChange,
      onRemove: onDelete,
      id: language.id,
      languageIndex: index,
      error: errors && errors[index]
    }, {
      index: index,
      language: language,
      schools: schools,
      classes: classes
    }));
  }));
});

var LanguagesEditForm = function LanguagesEditForm(_ref4) {
  var handleValueChange = _ref4.helpers.handleValueChange;
  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      languages = _useFormikContext.values.languages,
      validationErrors = _useFormikContext.errors;

  var keyedValues = (0, _react.useMemo)(function () {
    return (0, _keyBy.default)(languages, function (_ref5) {
      var id = _ref5.id;
      return id;
    });
  }, [languages]);
  var languageChanged = (0, _react.useCallback)(function (experienceIndex, field, value) {
    handleValueChange("languages[".concat(experienceIndex, "].").concat(field))(value);
  }, []);
  var languageDeleted = (0, _react.useCallback)(function (id) {
    return function () {
      handleValueChange('languages')(Object.values((0, _omit.default)(keyedValues, id)));
    };
  }, [JSON.stringify(keyedValues)]);
  var addLanguage = (0, _react.useCallback)(function () {
    var id = (0, _v.default)();
    handleValueChange('languages')(languages.concat({
      index: languages.length,
      id: id
    }));
  }, [JSON.stringify(languages)]);
  var move = (0, _react.useCallback)(function (_ref6) {
    var oldIndex = _ref6.oldIndex,
        newIndex = _ref6.newIndex;
    handleValueChange('languages')((0, _reactSortableHoc.arrayMove)(languages, oldIndex, newIndex).map(function (data, index) {
      return _objectSpread({}, data, {
        index: index
      });
    }));
  }, [languages]);
  var globalError = typeof validationErrors === 'string' && validationErrors;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(SortableLanguagesItems, _extends({
    helperClass: classes.sortableHelper,
    items: languages,
    onSortEnd: move,
    distance: 20,
    useDragHandle: true,
    lockAxis: "y",
    name: "education",
    onChange: languageChanged,
    onDelete: languageDeleted,
    errors: validationErrors.languages
  }, {
    classes: classes
  })), _react.default.createElement("div", {
    className: classes.addButton,
    onClick: addLanguage
  }, _react.default.createElement(_ui.Tag, {
    className: classes.addTag
  }, _react.default.createElement(AddIcon, null)), _react.default.createElement(_ui.Typography, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.add",
    defaultMessage: "Ajouter"
  }))), globalError && _react.default.createElement(_ui.Typography, {
    color: "danger",
    component: "p"
  }, validationErrors));
};

var LanguagesCardEditDialog = function LanguagesCardEditDialog(_ref7) {
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
    open: false,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Languages.editDialog.title",
      defaultMessage: "Your languages"
    })
  }, function (helpers) {
    return _react.default.createElement(LanguagesEditForm, {
      helpers: helpers
    });
  });
};

exports.LanguagesCardEditDialog = LanguagesCardEditDialog;