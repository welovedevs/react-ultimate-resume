"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudiesCardEditDialog = exports.FormationsEditForm = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _reactSpring = require("react-spring");

var _reactEmojiRender = require("react-emoji-render");

var _reactSortableHoc = require("react-sortable-hoc");

var _formik = require("formik");

var _keyBy = _interopRequireDefault(require("lodash/keyBy"));

var _range = _interopRequireDefault(require("lodash/range"));

var _moment = _interopRequireDefault(require("moment"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _select = require("../../../../commons/select/select");

var _add_button = require("../../../../commons/add_button/add_button");

var _studies_translations = require("./studies_translations");

var _studies_styles = require("./studies_styles");

var _studies_edit_dialog_spring_props = require("./studies_edit_dialog_spring_props");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MoveIcon = function MoveIcon(props) {
  return (/*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
      d: "M3.52 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18V6h-18z"
    }))
  );
};

MoveIcon.defaultProps = {
  width: "25",
  height: "24",
  viewBox: "0 0 25 24",
  fill: "#181818",
  xmlns: "http://www.w3.org/2000/svg"
};

var DeleteIcon = function DeleteIcon(props) {
  return (/*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
      d: "M8.277 25.334C8.277 26.8 9.498 28 10.99 28h10.857c1.493 0 2.714-1.2 2.714-2.666v-16H8.277v16zm17.642-20h-4.75L19.813 4h-6.785L11.67 5.333H6.92V8h19V5.333z"
    }))
  );
};

DeleteIcon.defaultProps = {
  width: "33",
  height: "32",
  viewBox: "0 0 33 32",
  fill: "#fff",
  xmlns: "http://www.w3.org/2000/svg"
};

var ArrowIcon = function ArrowIcon(props) {
  return (/*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
      d: "M1.52 1l6 6 6-6",
      stroke: "#000",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  );
};

ArrowIcon.defaultProps = {
  width: "15",
  height: "8",
  viewBox: "0 0 15 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref) {
  var classes = _ref.classes;
  return (/*#__PURE__*/_react.default.createElement("button", {
      className: classes.dragHandleButton,
      type: "button"
    }, /*#__PURE__*/_react.default.createElement(MoveIcon, {
      className: classes.dragHandle
    }))
  );
});
var useStyles = (0, _reactJss.createUseStyles)(_studies_styles.styles);

var StudiesCardEditDialogComponent = function StudiesCardEditDialogComponent(_ref2) {
  var open = _ref2.open,
      onClose = _ref2.onClose,
      data = _ref2.data,
      onEdit = _ref2.onEdit,
      validationSchema = _ref2.validationSchema,
      isEditing = _ref2.isEditing;
  var classes = useStyles();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var validationSchemaToPass = (0, _react.useMemo)(function () {
    return validationSchema(formatMessage);
  }, [validationSchema]);
  return (/*#__PURE__*/_react.default.createElement(_edit_dialog.EditDialog, {
      classes: {
        paper: classes.paper
      },
      open: open,
      onClose: onClose,
      data: data,
      isEditing: isEditing,
      onEdit: onEdit,
      validationSchema: validationSchemaToPass,
      title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Studies.editDialog.title",
        defaultMessage: "Your studies"
      })
    }, function (helpers) {
      return (/*#__PURE__*/_react.default.createElement(FormationsEditFormWrapper, {
          helpers: helpers
        })
      );
    })
  );
};

var FormationsEditFormWrapper = function FormationsEditFormWrapper(_ref3) {
  var handleValueChange = _ref3.helpers.handleValueChange;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      education = _useFormikContext.values.education,
      validationErrors = _useFormikContext.errors;

  var errors = validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.education;
  var formationChanged = (0, _react.useCallback)(function (educationsIndex, field, value) {
    handleValueChange("education[".concat(educationsIndex, "].").concat(field))(value);
  }, []);
  var formationDeleted = (0, _react.useCallback)(function (deletedId) {
    return function () {
      handleValueChange('education')(education.filter(function (_ref4) {
        var id = _ref4.id;
        return deletedId !== id;
      }));
    };
  }, [JSON.stringify(education)]);
  var formationAdded = (0, _react.useCallback)(function () {
    var id = (0, _v.default)();
    return handleValueChange('education')([].concat((0, _toConsumableArray2.default)(education), [{
      position: education.length,
      id: id
    }]));
  }, [JSON.stringify(education)]);
  var move = (0, _react.useCallback)(function (_ref5) {
    var oldIndex = _ref5.oldIndex,
        newIndex = _ref5.newIndex;
    handleValueChange('education')((0, _reactSortableHoc.arrayMove)(education, oldIndex, newIndex));
  }, [JSON.stringify(education)]);
  return (/*#__PURE__*/_react.default.createElement(FormationsEditForm, {
      data: education,
      onMove: move,
      onAdd: formationAdded,
      onFieldChange: formationChanged,
      onDelete: formationDeleted,
      errors: errors
    })
  );
};

var SelectComponent = (0, _react.memo)(function (_ref6) {
  var value = _ref6.value,
      onChange = _ref6.onChange,
      classes = _ref6.classes,
      id = _ref6.id;
  var selectYearItems = (0, _react.useMemo)(function () {
    return (0, _range.default)(1980, (0, _moment.default)().year() + 8).sort(function (a, b) {
      return b - a;
    }).map(function (year) {
      return (/*#__PURE__*/_react.default.createElement(_core.MenuItem, {
          key: "formation_year_".concat(id, "_").concat(year),
          value: year
        }, year)
      );
    });
  }, []);
  console.log({
    value: value
  });
  return (/*#__PURE__*/_react.default.createElement(_select.Select, {
      textFieldProps: {
        fullWidth: true,
        variant: 'flat'
      },
      value: _moment.default.isMoment(value) ? value.year() : null,
      onChange: onChange,
      textFieldIconProps: {
        className: classes.selectIcon
      }
    }, selectYearItems)
  );
});
var FormationItem = (0, _reactSortableHoc.SortableElement)(function (_ref7) {
  var id = _ref7.id,
      formation = _ref7.formation,
      onChange = _ref7.onChange,
      onRemove = _ref7.onRemove,
      fieldErrors = _ref7.error,
      folded = _ref7.folded,
      toggleFold = _ref7.toggleFold,
      classes = _ref7.classes,
      index = _ref7.formationIndex;
  var theme = (0, _reactJss.useTheme)();
  var isMobile = (0, _core.useMediaQuery)("(max-width: ".concat(theme.screenSizes.small, "px)"));

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

  var _useSpring = (0, _reactSpring.useSpring)({
    rotate: folded ? -90 : 0
  }),
      rotate = _useSpring.rotate;

  var contentTransitions = (0, _reactSpring.useTransition)(!folded ? formation : null, function (item) {
    return "".concat(item ? 'visible' : 'invisible', "_study_").concat(item === null || item === void 0 ? void 0 : item.id, "_content");
  }, _objectSpread({}, _studies_edit_dialog_spring_props.STUDIES_CONTENT_TRANSITION_SPRING_PROPS, {
    unique: true
  }, _reactSpring.config.stiff));
  var hasError = Boolean(fieldErrors);
  return (/*#__PURE__*/_react.default.createElement("div", {
      className: classes.study
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.itemContainer
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.header
    }, /*#__PURE__*/_react.default.createElement(DragHandle, {
      classes: classes
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: classes.divider
    }), /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
      title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Main.lang.delete",
        defaultMessage: "Delete"
      })
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: classes.removeButton,
      type: "button",
      onClick: onRemove(id)
    }, /*#__PURE__*/_react.default.createElement(DeleteIcon, {
      className: classes.removeIcon
    }))), !isMobile && /*#__PURE__*/_react.default.createElement("div", {
      className: classes.divider
    }), /*#__PURE__*/_react.default.createElement(_ui.ListItem, {
      button: true,
      className: (0, _classnames.default)(classes.listItem, hasError && classes.listItemError),
      onClick: function onClick() {
        return toggleFold(!folded);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactSpring.animated.div, {
      className: classes.arrowContainer,
      style: {
        transform: rotate.interpolate(function (value) {
          return "rotate(".concat(value, "deg)");
        })
      }
    }, /*#__PURE__*/_react.default.createElement(ArrowIcon, {
      className: (0, _classnames.default)('refinement-arrow')
    })), hasError && /*#__PURE__*/_react.default.createElement(_reactEmojiRender.Twemoji, {
      className: classes.warningIcon,
      svg: true,
      text: "\u26A0\uFE0F"
    }), /*#__PURE__*/_react.default.createElement(_ui.Typography, {
      className: classes.smallTitle,
      color: "dark"
    }, formation.institution))), contentTransitions.map(function (_ref8) {
      var item = _ref8.item,
          key = _ref8.key,
          props = _ref8.props;
      return item && /*#__PURE__*/_react.default.createElement(_reactSpring.animated.div, {
        key: key,
        style: props,
        className: (0, _classnames.default)(classes.listItem, fieldErrors && classes.listItemError)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classes.fieldGroup
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classes.field
      }, /*#__PURE__*/_react.default.createElement(_ui.TextField, {
        fullWidth: true,
        variant: "flat",
        value: formation.institution,
        onChange: handleInstitutionChange,
        id: "formation_institution_".concat(id),
        placeholder: formatMessage(_studies_translations.translations.schoolNamePlaceholder)
      }), fieldErrors && fieldErrors.institution && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
        color: "danger",
        variant: "helper",
        component: "p"
      }, fieldErrors.institution)), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.field
      }, /*#__PURE__*/_react.default.createElement(SelectComponent, {
        onChange: handleEndDate,
        id: formation.id,
        value: formation.endDate,
        classes: classes
      }), fieldErrors && fieldErrors.endDate && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
        color: "danger",
        variant: "helper",
        component: "p"
      }, fieldErrors.endDate))), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.fieldGroup
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classes.field
      }, /*#__PURE__*/_react.default.createElement(_ui.TextField, {
        id: "formation_diploma_".concat(id),
        fullWidth: true,
        variant: "flat",
        label: formatMessage(_studies_translations.translations.diplomaTitle),
        placeholder: formatMessage(_studies_translations.translations.diplomaPlaceholder),
        value: formation.studyType,
        onChange: handleStudyType,
        margin: "normal",
        error: fieldErrors && fieldErrors.studyType
      }), fieldErrors && fieldErrors.studyType && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
        color: "danger",
        variant: "helper",
        component: "p"
      }, fieldErrors.studyType)), /*#__PURE__*/_react.default.createElement("div", {
        className: classes.field
      }, /*#__PURE__*/_react.default.createElement(_ui.TextField, {
        id: "formation_area_".concat(id),
        fullWidth: true,
        variant: "flat",
        label: formatMessage(_studies_translations.translations.mainCourse),
        placeholder: formatMessage(_studies_translations.translations.mainCoursePlaceholder),
        value: formation.area,
        onChange: handleAreaChange,
        margin: "normal",
        error: fieldErrors && fieldErrors.area
      }), fieldErrors && fieldErrors.area && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
        color: "danger",
        variant: "helper",
        component: "p"
      }, fieldErrors.area))));
    })))
  );
});
var SortableFormationsItems = (0, _reactSortableHoc.SortableContainer)(function (_ref9) {
  var items = _ref9.items,
      formationChanged = _ref9.formationChanged,
      formationDeleted = _ref9.formationDeleted,
      errors = _ref9.errors,
      name = _ref9.name,
      schools = _ref9.schools,
      classes = _ref9.classes;
  var keyedValues = (0, _react.useMemo)(function () {
    return (0, _keyBy.default)(items, function (_ref10) {
      var id = _ref10.id;
      return id;
    });
  }, [items]);

  var _useState = (0, _react.useState)(Object.keys(keyedValues || {}).reduce(function (state, id) {
    // eslint-disable-next-line no-param-reassign
    state[id] = true;
    return state;
  }, {})),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      foldedState = _useState2[0],
      setFoldState = _useState2[1];

  var toggleFold = (0, _react.useCallback)(function (id) {
    return function (value) {
      var newFoldState = _objectSpread({}, foldedState);

      newFoldState[id] = value;
      setFoldState(newFoldState);
    };
  }, [foldedState]);
  return (/*#__PURE__*/_react.default.createElement(_ui.List, null, items.map(function (formation, index) {
      return (/*#__PURE__*/_react.default.createElement(FormationItem, (0, _extends2.default)({
          key: "".concat(name, "_").concat(formation.id, "_").concat(index),
          onChange: formationChanged,
          onRemove: formationDeleted,
          id: formation.id,
          formationIndex: index,
          error: errors && errors[index],
          toggleFold: toggleFold(formation.id),
          folded: foldedState[formation.id]
        }, {
          index: index,
          formation: formation,
          schools: schools,
          classes: classes
        }))
      );
    }))
  );
});

var FormationsEditForm = function FormationsEditForm(_ref11) {
  var data = _ref11.data,
      onMove = _ref11.onMove,
      onAdd = _ref11.onAdd,
      onFieldChange = _ref11.onFieldChange,
      onDelete = _ref11.onDelete,
      errors = _ref11.errors;
  var classes = useStyles();
  var globalError = typeof errors === 'string' && errors;
  return (/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(SortableFormationsItems, (0, _extends2.default)({
      lockToContainerEdges: true,
      helperClass: classes.sortableHelper,
      items: data,
      onSortEnd: onMove,
      distance: 20,
      useDragHandle: true,
      lockAxis: "y",
      name: "education",
      formationChanged: onFieldChange,
      formationDeleted: onDelete,
      errors: errors
    }, {
      classes: classes
    })), /*#__PURE__*/_react.default.createElement(_add_button.AddButton, {
      onClick: onAdd
    }), globalError && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
      color: "danger",
      component: "p"
    }, errors))
  );
};

exports.FormationsEditForm = FormationsEditForm;
var StudiesCardEditDialog = StudiesCardEditDialogComponent;
exports.StudiesCardEditDialog = StudiesCardEditDialog;