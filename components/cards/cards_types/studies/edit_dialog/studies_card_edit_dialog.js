"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudiesCardEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _reactSortableHoc = require("react-sortable-hoc");

var _formik = require("formik");

var _range = _interopRequireDefault(require("lodash/range"));

var _moment = _interopRequireDefault(require("moment"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _select = require("../../../../commons/select/select");

var _studies_styles = require("./studies_styles");

var _studies_translations = require("./studies_translations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
var useStyles = (0, _reactJss.createUseStyles)(_studies_styles.styles);

var StudiesCardEditDialogComponent = function StudiesCardEditDialogComponent(_ref) {
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
      id: "Basics.editDialog.title",
      defaultMessage: "Your basic information"
    })
  }, function (helpers) {
    return _react.default.createElement(FormationsEditForm, {
      helpers: helpers
    });
  });
};

var SelectComponent = (0, _react.memo)(function (_ref2) {
  var value = _ref2.value,
      onChange = _ref2.onChange,
      classes = _ref2.classes,
      id = _ref2.id;
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
  return _react.default.createElement(_select.Select, {
    variant: "outlined",
    value: value === null || value === void 0 ? void 0 : value.year(),
    onChange: onChange,
    textFieldIconProps: {
      className: classes.selectIcon
    }
  }, selectYearItems);
});
var FormationItem = (0, _reactSortableHoc.SortableElement)(function (_ref3) {
  var id = _ref3.id,
      formation = _ref3.formation,
      onChange = _ref3.onChange,
      onRemove = _ref3.onRemove,
      fieldErrors = _ref3.error,
      classes = _ref3.classes,
      index = _ref3.formationIndex;

  var _useIntl2 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  var handleInstitutionChange = (0, _react.useCallback)(function (event) {
    return onChange(index, 'institution', event.target.value);
  }, [index]);
  var handleStudyType = (0, _react.useCallback)(function (event) {
    return onChange(index, 'studyType', event.target.value);
  }, [index]);
  var handleAreaChange = (0, _react.useCallback)(function (event) {
    return onChange(index, 'area', event.target.value);
  }, [index]);
  var handleEndDate = (0, _react.useCallback)(function (value) {
    return onChange(index, 'endDate', (0, _moment.default)({
      year: value
    }));
  }, [index]);
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
    onChange: handleInstitutionChange,
    id: "formation_institution_".concat(id),
    placeholder: formatMessage(_studies_translations.translations.schoolNamePlaceholder)
  }), fieldErrors && fieldErrors.institution && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.institution)), _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(SelectComponent, {
    onChange: handleEndDate,
    id: formation.id,
    value: formation.endDate,
    classes: classes
  }), fieldErrors && fieldErrors.endDate && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.endDate))), _react.default.createElement("div", {
    className: classes.fieldGroup
  }, _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(_ui.TextField, {
    id: "formation_diploma_".concat(id),
    label: formatMessage(_studies_translations.translations.diplomaTitle),
    placeholder: formatMessage(_studies_translations.translations.diplomaPlaceholder),
    value: formation.studyType,
    onChange: handleStudyType,
    margin: "normal",
    error: fieldErrors && fieldErrors.studyType
  }), fieldErrors && fieldErrors.studyType && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.studyType)), _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(_ui.TextField, {
    id: "formation_area_".concat(id),
    label: formatMessage(_studies_translations.translations.mainCourse),
    placeholder: formatMessage(_studies_translations.translations.mainCoursePlaceholder),
    value: formation.area,
    onChange: handleAreaChange,
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
var SortableFormationsItems = (0, _reactSortableHoc.SortableContainer)(function (_ref4) {
  var items = _ref4.items,
      formationChanged = _ref4.formationChanged,
      formationDeleted = _ref4.formationDeleted,
      errors = _ref4.errors,
      name = _ref4.name,
      schools = _ref4.schools,
      classes = _ref4.classes;
  return _react.default.createElement(_ui.List, null, items.map(function (formation, index) {
    return _react.default.createElement(FormationItem, _extends({
      key: "".concat(name, "_").concat(formation.id, "_").concat(index),
      onChange: formationChanged,
      onRemove: formationDeleted,
      id: formation.id,
      formationIndex: index,
      error: errors && errors[index]
    }, {
      index: index,
      formation: formation,
      schools: schools,
      classes: classes
    }));
  }));
});

var FormationsEditForm = function FormationsEditForm(_ref5) {
  var handleValueChange = _ref5.helpers.handleValueChange;
  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      education = _useFormikContext.values.education,
      validationErrors = _useFormikContext.errors;

  var errors = validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.education;
  var formationChanged = (0, _react.useCallback)(function (educationsIndex, field, value) {
    handleValueChange("education[".concat(educationsIndex, "].").concat(field))(value);
  }, []);
  var formationDeleted = (0, _react.useCallback)(function (deletedId) {
    return function () {
      handleValueChange('education')(education.filter(function (_ref6) {
        var id = _ref6.id;
        return deletedId !== id;
      }));
    };
  }, [JSON.stringify(education)]);
  var formationAdded = (0, _react.useCallback)(function () {
    var id = (0, _v.default)();
    return handleValueChange('education')([].concat(_toConsumableArray(education), [{
      position: education.length,
      id: id
    }]));
  }, [JSON.stringify(education)]);
  var move = (0, _react.useCallback)(function (_ref7) {
    var oldIndex = _ref7.oldIndex,
        newIndex = _ref7.newIndex;
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

var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref8) {
  var classes = _ref8.classes;
  return _react.default.createElement(MoveIcon, {
    className: classes.dragHandle
  });
});
var StudiesCardEditDialog = StudiesCardEditDialogComponent;
exports.StudiesCardEditDialog = StudiesCardEditDialog;