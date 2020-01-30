"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudiesCardEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _range = _interopRequireDefault(require("lodash/range"));

var _keyBy = _interopRequireDefault(require("lodash/keyBy"));

var _reactIntl = require("react-intl");

var _moment = _interopRequireDefault(require("moment"));

var _reactSortableHoc = require("react-sortable-hoc");

var uuid = _interopRequireWildcard(require("uuid/v4"));

var _core = require("@material-ui/core");

var _ui = require("@wld/ui");

var _studies_styles = require("./studies_styles");

var _studies_translations = _interopRequireDefault(require("./studies_translations"));

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _formik = require("formik");

var _reactJss = require("react-jss");

var _select = require("../../../../commons/select/select");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var useStyles = (0, _reactJss.createUseStyles)(_studies_styles.styles);
var FormationItem = (0, _reactSortableHoc.SortableElement)(function (_ref2) {
  var _formation$endDate;

  var id = _ref2.id,
      formation = _ref2.formation,
      onChange = _ref2.onChange,
      onRemove = _ref2.onRemove,
      fieldErrors = _ref2.error,
      classes = _ref2.classes;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var handleChange = (0, _react.useCallback)(function (field) {
    return function (value) {
      onChange(id, _objectSpread({}, formation, _defineProperty({}, field, value)));
    };
  }, [JSON.stringify(formation), onChange]);
  var handleEventChange = (0, _react.useCallback)(function (field) {
    return function (event) {
      handleChange(field)(event.target.value);
    };
  }, [JSON.stringify(formation), onChange]);
  var handleChangeYear = (0, _react.useCallback)(function (field) {
    return function (value) {
      handleChange(field)((0, _moment.default)({
        year: value
      }));
    };
  }, [JSON.stringify(formation), onChange]);
  var selectYearItems = (0, _react.useMemo)(function () {
    return (0, _range.default)(1980, (0, _moment.default)().year() + 8).sort(function (a, b) {
      return b - a;
    }).map(function (year) {
      return _react.default.createElement(_core.MenuItem, {
        key: "formation_year_".concat(id, "_").concat(year),
        value: year
      }, year);
    });
  }, []);
  return _react.default.createElement("div", {
    className: classes.itemContainer
  }, _react.default.createElement(DragHandle, {
    classes: classes
  }), _react.default.createElement(_ui.ListItem, {
    className: (0, _classnames.default)(classes.listItem, fieldErrors && classes.listItemError)
  }, _react.default.createElement("div", null, _react.default.createElement("div", {
    className: classes.fieldGroup
  }, _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(_ui.TextField, {
    value: formation.institution,
    onChange: handleEventChange('institution'),
    id: "formation_institution_".concat(id),
    placeholder: formatMessage(_studies_translations.default.schoolNamePlaceholder)
  }), fieldErrors && fieldErrors.institution && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.institution)), _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(_select.Select, {
    variant: "outlined",
    value: (_formation$endDate = formation.endDate) === null || _formation$endDate === void 0 ? void 0 : _formation$endDate.year(),
    onChange: handleChangeYear('endDate'),
    textFieldIconProps: {
      className: classes.selectIcon
    }
  }, selectYearItems), fieldErrors && fieldErrors.endDate && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.endDate))), _react.default.createElement("div", {
    className: classes.fieldGroup
  }, _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(_ui.TextField, {
    id: "formation_diploma_".concat(id),
    label: formatMessage(_studies_translations.default.diplomaTitle),
    placeholder: formatMessage(_studies_translations.default.diplomaPlaceholder),
    value: formation.studyType,
    onChange: handleEventChange('studyType'),
    margin: "normal",
    error: fieldErrors && fieldErrors.studyType
  }), fieldErrors && fieldErrors.studyType && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.studyType)), _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(_ui.TextField, {
    id: "formation_diploma_".concat(id),
    label: formatMessage(_studies_translations.default.mainCourse),
    placeholder: formatMessage(_studies_translations.default.mainCoursePlaceholder),
    value: formation.area,
    onChange: handleEventChange('area'),
    margin: "normal",
    error: fieldErrors && fieldErrors.area
  }), fieldErrors && fieldErrors.area && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.area)))), _react.default.createElement(_ui.Tooltip, {
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.delete",
      defaultMessage: "Supprimer"
    })
  }, _react.default.createElement(_ui.Button, {
    className: classes.button,
    onClick: onRemove(id)
  }, _react.default.createElement(TrashIcon, null)))));
});
var SortableFormationsItems = (0, _reactSortableHoc.SortableContainer)(function (_ref3) {
  var items = _ref3.items,
      formationChanged = _ref3.formationChanged,
      formationDeleted = _ref3.formationDeleted,
      errors = _ref3.errors,
      name = _ref3.name,
      schools = _ref3.schools,
      classes = _ref3.classes;
  return _react.default.createElement(_ui.List, null, items.map(function (formation, index) {
    return _react.default.createElement(FormationItem, _extends({
      key: "".concat(name, "_").concat(formation.id, "_").concat(index),
      onChange: formationChanged,
      onRemove: formationDeleted,
      id: formation.id,
      error: errors && errors[index]
    }, {
      index: index,
      formation: formation,
      schools: schools,
      classes: classes
    }));
  }));
});

var FormationsEditForm = function FormationsEditForm(_ref4) {
  var handleValueChange = _ref4.helpers.handleValueChange;
  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      education = _useFormikContext.values.education,
      validationErrors = _useFormikContext.errors;

  var errors = validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.education;
  var keyedValues = (0, _react.useMemo)(function () {
    return (0, _keyBy.default)(education, function (_ref5) {
      var id = _ref5.id;
      return id;
    });
  }, [education]);
  var formationChanged = (0, _react.useCallback)(function (formationId, formation) {
    var value = _objectSpread({}, keyedValues, _defineProperty({}, formationId, formation));

    handleValueChange('education')(Object.values(value));
  }, [JSON.stringify(keyedValues)]);
  var formationDeleted = (0, _react.useCallback)(function (id) {
    return function () {
      handleValueChange('education')(Object.values((0, _omit.default)(keyedValues, id)));
    };
  }, [JSON.stringify(keyedValues)]);
  var formationAdded = (0, _react.useCallback)(function () {
    var id = uuid();
    return formationChanged(id, {
      position: Object.keys(keyedValues).length,
      id: id
    });
  }, [JSON.stringify(keyedValues)]);
  var move = (0, _react.useCallback)(function (_ref6) {
    var oldIndex = _ref6.oldIndex,
        newIndex = _ref6.newIndex;
    handleValueChange('education')((0, _reactSortableHoc.arrayMove)(education, oldIndex, newIndex));
  }, [JSON.stringify(education)]);
  var globalError = typeof errors === 'string' && errors;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(SortableFormationsItems, _extends({
    helperClass: classes.sortableHelper,
    items: education,
    onSortEnd: move,
    distance: 20,
    useDragHandle: true,
    lockAxis: "y",
    name: "education"
  }, {
    formationChanged: formationChanged,
    formationDeleted: formationDeleted,
    errors: errors,
    classes: classes
  })), _react.default.createElement("div", {
    className: classes.addButton,
    onClick: formationAdded
  }, _react.default.createElement(_ui.Tag, {
    className: classes.addTag
  }, _react.default.createElement(AddIcon, null)), _react.default.createElement(_ui.Typography, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.add",
    defaultMessage: "Ajouter"
  }))), globalError && _react.default.createElement(_ui.Typography, {
    color: "danger",
    component: "p"
  }, errors));
};

var StudiesCardEditDialog = function StudiesCardEditDialog(_ref7) {
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
      id: "Basics.editDialog.title",
      defaultMessage: "Your basic information"
    })
  }, function (helpers) {
    return _react.default.createElement(FormationsEditForm, {
      helpers: helpers
    });
  });
};

exports.StudiesCardEditDialog = StudiesCardEditDialog;