"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguagesCardEditDialog = exports.LanguagesEditForm = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntl = require("react-intl");

var _reactSortableHoc = require("react-sortable-hoc");

var _v = _interopRequireDefault(require("uuid/v4"));

var _ui = require("@wld/ui");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery/useMediaQuery"));

var _formik = require("formik");

var _reactJss = require("react-jss");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _slider_with_popper = require("../../../../commons/slider_with_popper/slider_with_popper");

var _add_button = require("../../../../commons/add_button/add_button");

var _languages_edit_dialog_translations = _interopRequireDefault(require("./languages_edit_dialog_translations"));

var _languages_edit_dialog_styles = require("./languages_edit_dialog_styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
var useStyles = (0, _reactJss.createUseStyles)(_languages_edit_dialog_styles.styles);

var LanguagesCardEditDialogComponent = function LanguagesCardEditDialogComponent(_ref) {
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
      id: "Languages.editDialog.title",
      defaultMessage: "Your languages"
    })
  }, function (helpers) {
    return _react.default.createElement(LanguagesEditFormWrapper, {
      helpers: helpers
    });
  });
};

var LanguageItem = (0, _reactSortableHoc.SortableElement)(function (_ref2) {
  var id = _ref2.id,
      language = _ref2.language,
      onChange = _ref2.onChange,
      onRemove = _ref2.onRemove,
      fieldErrors = _ref2.error,
      classes = _ref2.classes,
      index = _ref2.languageIndex;

  var _useIntl2 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  var theme = (0, _reactJss.useTheme)();
  var isMobile = (0, _useMediaQuery.default)("(max-width: ".concat(theme.screenSizes.small, "px)"));
  var handleLanguageChange = (0, _react.useCallback)(function (e) {
    return onChange(index, 'language', e.target.value);
  }, [index]);
  var handleValueChange = (0, _react.useCallback)(function (e) {
    return onChange(index, 'value', Number(e.target.value));
  }, [index]);
  return _react.default.createElement("div", {
    className: classes.itemContainer
  }, _react.default.createElement("div", {
    className: classes.actions
  }, _react.default.createElement(DragHandle, {
    classes: classes
  }), _react.default.createElement("div", {
    className: classes.divider
  }), _react.default.createElement(_ui.Tooltip, {
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.delete",
      defaultMessage: "Delete"
    })
  }, _react.default.createElement("button", {
    type: "button",
    className: classes.button,
    onClick: onRemove(id)
  }, _react.default.createElement(TrashIcon, {
    className: classes.removeIcon
  }))), !isMobile && _react.default.createElement("div", {
    className: classes.divider
  })), _react.default.createElement("div", {
    className: classes.listItem
  }, _react.default.createElement("div", {
    className: classes.fieldGroup
  }, _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(_ui.Typography, {
    color: "dark",
    variant: "label"
  }, formatMessage(_languages_edit_dialog_translations.default.language)), _react.default.createElement(_ui.TextField, {
    value: language.language,
    onChange: handleLanguageChange,
    id: "language_language_".concat(id),
    placeholder: formatMessage(_languages_edit_dialog_translations.default.languagePlaceholder),
    variant: "flat"
  }), fieldErrors && fieldErrors.language && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.language)), _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.field, classes.sliderValueContainer)
  }, _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.sliderValue
    },
    color: "dark",
    variant: "label"
  }, formatMessage(_languages_edit_dialog_translations.default.level, {
    valueNode: _react.default.createElement("span", {
      className: classes.bolden
    }, language.value)
  })), _react.default.createElement(_slider_with_popper.SliderWithPopper, {
    color: "primary",
    name: "value",
    value: language.value,
    onChange: handleValueChange,
    min: 0,
    max: 100,
    className: classes.slider,
    popperCardProps: {
      customClasses: {
        container: classes.sliderPopperCard,
        arrowContainer: classes.sliderPopperCardArrowContainer
      }
    }
  }), fieldErrors && fieldErrors.value && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.value)))));
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
    return _react.default.createElement(LanguageItem, (0, _extends2.default)({
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
var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref4) {
  var classes = _ref4.classes;
  return _react.default.createElement("button", {
    type: "button"
  }, _react.default.createElement(MoveIcon, {
    className: classes.dragHandle
  }));
});

var LanguagesEditForm = function LanguagesEditForm(_ref5) {
  var data = _ref5.data,
      onMove = _ref5.onMove,
      onValueChange = _ref5.onValueChange,
      onDelete = _ref5.onDelete,
      onAdd = _ref5.onAdd,
      validationErrors = _ref5.errors;
  var classes = useStyles();
  var globalError = typeof validationErrors === 'string' && validationErrors;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(SortableLanguagesItems, (0, _extends2.default)({
    useDragHandle: true,
    lockToContainerEdges: true,
    helperClass: classes.sortableHelper,
    items: data,
    onSortEnd: onMove,
    distance: 20,
    lockAxis: "y",
    name: "education",
    onChange: onValueChange,
    onDelete: onDelete,
    errors: validationErrors
  }, {
    classes: classes
  })), _react.default.createElement(_add_button.AddButton, {
    onClick: onAdd
  }), globalError && _react.default.createElement(_ui.Typography, {
    color: "danger",
    component: "p"
  }, validationErrors));
};

exports.LanguagesEditForm = LanguagesEditForm;

var LanguagesEditFormWrapper = function LanguagesEditFormWrapper(_ref6) {
  var handleValueChange = _ref6.helpers.handleValueChange;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      languages = _useFormikContext.values.languages,
      validationErrors = _useFormikContext.errors;

  var languageChanged = (0, _react.useCallback)(function (experienceIndex, field, value) {
    handleValueChange("languages[".concat(experienceIndex, "].").concat(field))(value);
  }, []);
  var languageDeleted = (0, _react.useCallback)(function (deletingId) {
    return function () {
      handleValueChange('languages')(languages.filter(function (_ref7) {
        var id = _ref7.id;
        return deletingId !== id;
      }));
    };
  }, [languages]);
  var addLanguage = (0, _react.useCallback)(function () {
    var id = (0, _v.default)();
    handleValueChange('languages')(languages.concat({
      index: languages.length,
      id: id
    }));
  }, [JSON.stringify(languages)]);
  var move = (0, _react.useCallback)(function (_ref8) {
    var oldIndex = _ref8.oldIndex,
        newIndex = _ref8.newIndex;
    handleValueChange('languages')((0, _reactSortableHoc.arrayMove)(languages, oldIndex, newIndex).map(function (data, index) {
      return _objectSpread({}, data, {
        index: index
      });
    }));
  }, [languages]);
  return _react.default.createElement(LanguagesEditForm, {
    data: languages,
    onMove: move,
    onValueChange: languageChanged,
    onDelete: languageDeleted,
    onAdd: addLanguage,
    errors: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.languages
  });
};

var LanguagesCardEditDialog = LanguagesCardEditDialogComponent;
exports.LanguagesCardEditDialog = LanguagesCardEditDialog;