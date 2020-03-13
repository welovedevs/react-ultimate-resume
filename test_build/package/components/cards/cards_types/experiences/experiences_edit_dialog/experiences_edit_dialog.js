"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperiencesEditDialog = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _reactSpring = require("react-spring");

var _reactEmojiRender = require("react-emoji-render");

var _reactSortableHoc = require("react-sortable-hoc");

var _formik = require("formik");

var _moment = _interopRequireDefault(require("moment"));

var _keyBy = _interopRequireDefault(require("lodash/keyBy"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery/useMediaQuery"));

var _ui = require("@wld/ui");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _year_month = require("../../../../commons/year_month/year_month");

var _location_field = require("../../../../commons/location_field/location_field");

var _add_button = require("../../../../commons/add_button/add_button");

var _experiences_edit_dialog_spring_props = require("./experiences_edit_dialog_spring_props");

var _experiences_edit_dialog_translations = require("./experiences_edit_dialog_translations");

var _experiences_edit_dialog_styles = require("./experiences_edit_dialog_styles");

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

var ArrowIcon = function ArrowIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M1.52 1l6 6 6-6",
    stroke: "#000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

ArrowIcon.defaultProps = {
  width: "15",
  height: "8",
  viewBox: "0 0 15 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_experiences_edit_dialog_styles.styles);
var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref) {
  var classes = _ref.classes;
  return _react.default.createElement("button", {
    className: classes.dragHandleButton,
    type: "button"
  }, _react.default.createElement(MoveIcon, {
    className: classes.dragHandle
  }));
});

var ExperiencesEditDialogComponent = function ExperiencesEditDialogComponent(_ref2) {
  var open = _ref2.open,
      onClose = _ref2.onClose,
      data = _ref2.data,
      onEdit = _ref2.onEdit,
      validationSchema = _ref2.validationSchema;

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
      id: "Experiences.editDialog.title",
      defaultMessage: "Edit your professional experiences?"
    })
  }, function (helpers) {
    return _react.default.createElement(ExperiencesEditFormWrapper, {
      helpers: helpers
    });
  });
};

var ExperiencesEditFormWrapper = function ExperiencesEditFormWrapper(_ref3) {
  var handleValueChange = _ref3.helpers.handleValueChange;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      work = _useFormikContext.values.work,
      validationErrors = _useFormikContext.errors;

  var errors = validationErrors;
  var experienceFieldChanged = (0, _react.useCallback)(function (experienceIndex, field, value) {
    handleValueChange("work[".concat(experienceIndex, "].").concat(field))(value);
  }, []);
  var experienceDeleted = (0, _react.useCallback)(function (idToDelete) {
    return function () {
      handleValueChange('work')(work.filter(function (_ref4) {
        var id = _ref4.id;
        return id !== idToDelete;
      }));
    };
  }, [JSON.stringify(work)]);
  var addExperience = (0, _react.useCallback)(function () {
    var id = (0, _v.default)();
    handleValueChange('work')(work.concat({
      index: work.length,
      id: id
    }));
  }, [JSON.stringify(work)]);
  var move = (0, _react.useCallback)(function (_ref5) {
    var oldIndex = _ref5.oldIndex,
        newIndex = _ref5.newIndex;
    handleValueChange('work')((0, _reactSortableHoc.arrayMove)(work, oldIndex, newIndex).map(function (data, index) {
      return _objectSpread({}, data, {
        index: index
      });
    }));
  }, [work]);
  return _react.default.createElement(ExperiencesEditForm, {
    data: work,
    errors: errors === null || errors === void 0 ? void 0 : errors.work,
    onAdd: addExperience,
    onMove: move,
    onFieldChange: experienceFieldChanged,
    onDelete: experienceDeleted
  });
};

var JobTitle = function JobTitle(_ref6) {
  var experience = _ref6.experience;

  var _useIntl2 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  var title = (0, _react.useMemo)(function () {
    var _experience$startDate, _experience$endDate;

    var payload = {
      jobTitle: experience.position,
      companyName: experience.name,
      start: (_experience$startDate = experience.startDate) === null || _experience$startDate === void 0 ? void 0 : _experience$startDate.format('MMMM YYYY'),
      end: (_experience$endDate = experience.endDate) === null || _experience$endDate === void 0 ? void 0 : _experience$endDate.format('MMMM YYYY')
    };

    if (payload.companyName) {
      if (!payload.end) {
        return formatMessage(_experiences_edit_dialog_translations.translations.jobTitleCompanyNoEnd, payload);
      }

      return formatMessage(_experiences_edit_dialog_translations.translations.jobTitleCompanyBothDates, payload);
    }

    if (payload.end) {
      return formatMessage(_experiences_edit_dialog_translations.translations.jobTitleNoCompanyNoEnd, payload);
    }

    return formatMessage(_experiences_edit_dialog_translations.translations.jobTitleNoCompanyBothDates, payload);
  }, [experience]);
  return title;
};

var ExperienceItem = (0, _reactSortableHoc.SortableElement)(function (_ref7) {
  var id = _ref7.id,
      experience = _ref7.experience,
      onChange = _ref7.onChange,
      onRemove = _ref7.onRemove,
      fieldErrors = _ref7.error,
      folded = _ref7.folded,
      toggleFold = _ref7.toggleFold,
      classes = _ref7.classes,
      index = _ref7.experienceIndex;

  var _useIntl3 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl3.formatMessage;

  var theme = (0, _reactJss.useTheme)();
  var isMobile = (0, _useMediaQuery.default)("(max-width: ".concat(theme.screenSizes.small, "px)"));

  var _useSpring = (0, _reactSpring.useSpring)({
    rotate: folded ? -90 : 0
  }),
      rotate = _useSpring.rotate;

  var contentTransitions = (0, _reactSpring.useTransition)(!folded ? experience : null, function (item) {
    return "".concat(item ? 'visible' : 'invisible', "_experience_").concat(item === null || item === void 0 ? void 0 : item.id, "_content");
  }, _objectSpread({}, _experiences_edit_dialog_spring_props.EXPERIENCE_CONTENT_TRANSITION_SPRING_PROPS, {
    unique: true
  }));
  var hasError = Boolean(fieldErrors);
  return _react.default.createElement("div", {
    className: classes.experience
  }, _react.default.createElement("div", {
    className: classes.smallItemContainer
  }, _react.default.createElement(DragHandle, {
    classes: classes
  }), _react.default.createElement("div", {
    className: classes.divider
  }), _react.default.createElement(_ui.Tooltip, {
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.delete",
      defaultMessage: "Supprimer"
    })
  }, _react.default.createElement("button", {
    className: classes.removeButton,
    type: "button",
    onClick: onRemove(id)
  }, _react.default.createElement(DeleteIcon, {
    className: classes.removeIcon
  }))), !isMobile && _react.default.createElement("div", {
    className: classes.divider
  }), _react.default.createElement(_ui.ListItem, {
    button: true,
    className: (0, _classnames.default)(classes.listItem, hasError && classes.listItemError),
    onClick: function onClick() {
      return toggleFold(!folded);
    }
  }, _react.default.createElement(_reactSpring.animated.div, {
    className: classes.arrowContainer,
    style: {
      transform: rotate.interpolate(function (value) {
        return "rotate(".concat(value, "deg)");
      })
    }
  }, _react.default.createElement(ArrowIcon, {
    className: (0, _classnames.default)('refinement-arrow')
  })), hasError && _react.default.createElement(_reactEmojiRender.Twemoji, {
    className: classes.warningIcon,
    svg: true,
    text: "\u26A0\uFE0F"
  }), _react.default.createElement(_ui.Typography, {
    className: classes.smallTitle,
    color: "dark"
  }, _react.default.createElement(JobTitle, {
    experience: experience
  })))), contentTransitions.map(function (_ref8) {
    var item = _ref8.item,
        key = _ref8.key,
        props = _ref8.props;
    return item && _react.default.createElement(_reactSpring.animated.div, {
      key: key,
      style: props
    }, _react.default.createElement(ContentFields, {
      key: key,
      fieldErrors: fieldErrors,
      id: id,
      formatMessage: formatMessage,
      experience: experience,
      onChange: onChange,
      classes: classes,
      index: index
    }));
  }));
});

var ContentFields = function ContentFields(_ref9) {
  var _experience$place;

  var fieldErrors = _ref9.fieldErrors,
      id = _ref9.id,
      formatMessage = _ref9.formatMessage,
      experience = _ref9.experience,
      onChange = _ref9.onChange,
      classes = _ref9.classes,
      index = _ref9.index;
  var stillEmployed = !experience.endDate;
  var handleStillEmployedChange = (0, _react.useCallback)(function () {
    if (!stillEmployed) {
      onChange(index, 'endDate', null);
    } else {
      onChange(index, 'endDate', (0, _moment.default)());
    }
  }, [index, stillEmployed]);

  var stillEmployedComponent = _react.default.createElement(StillEmployedField, (0, _extends2.default)({
    value: stillEmployed
  }, {
    handleStillEmployedChange: handleStillEmployedChange,
    formatMessage: formatMessage,
    classes: classes
  }));

  var handleNameChange = (0, _react.useCallback)(function (e) {
    return onChange(index, 'name', e.target.value);
  }, [index]);
  var handlePositionChange = (0, _react.useCallback)(function (e) {
    return onChange(index, 'position', e.target.value);
  }, [index]);
  var handleSummaryChange = (0, _react.useCallback)(function (e) {
    return onChange(index, 'summary', e.target.value);
  }, [index]);
  var handleStartDate = (0, _react.useCallback)(function (value) {
    return onChange(index, 'startDate', value);
  }, [index]);
  var handleEndDate = (0, _react.useCallback)(function (value) {
    return onChange(index, 'endDate', value);
  }, [index]);
  var handleLocationChange = (0, _react.useCallback)(function (value) {
    return onChange(index, 'place', value);
  }, [index]);
  var handleLocationTextChange = (0, _react.useCallback)(function (value) {
    return onChange(index, 'place', {
      name: value.target.value
    });
  }, [index]);
  return _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement("div", {
    className: classes.line
  }), _react.default.createElement("div", {
    className: classes.fields
  }, _react.default.createElement("div", {
    className: classes.fieldRow
  }, _react.default.createElement("div", {
    className: classes.fieldContainer
  }, _react.default.createElement(_ui.Typography, {
    component: "p",
    color: "dark",
    variant: "label"
  }, formatMessage(_experiences_edit_dialog_translations.translations.companyName)), _react.default.createElement(_ui.TextField, {
    id: "experience_companyName_".concat(id),
    placeholder: formatMessage(_experiences_edit_dialog_translations.translations.companyNamePlaceholder),
    value: experience.name,
    onChange: handleNameChange,
    margin: "normal",
    variant: "flat"
  }), (fieldErrors === null || fieldErrors === void 0 ? void 0 : fieldErrors.name) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.name)), _react.default.createElement("div", {
    className: classes.fieldContainer
  }, _react.default.createElement(_ui.Typography, {
    component: "p",
    color: "dark",
    variant: "label"
  }, formatMessage(_experiences_edit_dialog_translations.translations.jobTitle)), _react.default.createElement(_ui.TextField, {
    id: "experience_jobTitle_".concat(id),
    placeholder: formatMessage(_experiences_edit_dialog_translations.translations.jobTitlePlaceholder),
    value: experience.position,
    onChange: handlePositionChange,
    margin: "normal",
    variant: "flat"
  }), (fieldErrors === null || fieldErrors === void 0 ? void 0 : fieldErrors.position) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.position))), _react.default.createElement("div", {
    className: classes.fieldRow
  }, _react.default.createElement("div", {
    className: classes.fieldContainer
  }, _react.default.createElement(_ui.Typography, {
    component: "p",
    color: "dark",
    variant: "label"
  }, formatMessage(_experiences_edit_dialog_translations.translations.jobPlace)), _react.default.createElement(_location_field.LocationField, {
    id: "experience_jobPlace_".concat(id),
    placeholder: formatMessage(_experiences_edit_dialog_translations.translations.jobPlacePlaceholder),
    value: (_experience$place = experience.place) === null || _experience$place === void 0 ? void 0 : _experience$place.name,
    onLocationSelected: handleLocationChange,
    onChange: handleLocationTextChange,
    margin: "normal",
    variant: "flat"
  }), (fieldErrors === null || fieldErrors === void 0 ? void 0 : fieldErrors.place) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, (fieldErrors === null || fieldErrors === void 0 ? void 0 : fieldErrors.place.name) || fieldErrors.place))), _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.fieldRow, classes.yearMonthRow)
  }, _react.default.createElement("div", {
    className: classes.yearMonthWrapper
  }, _react.default.createElement(_year_month.YearMonth, {
    textfieldProps: {
      fullWidth: true
    },
    variant: "flat",
    value: experience.startDate,
    onChange: handleStartDate,
    title: _experiences_edit_dialog_translations.translations.startDate,
    error: fieldErrors === null || fieldErrors === void 0 ? void 0 : fieldErrors.startDate
  }), !stillEmployed && _react.default.createElement(_year_month.YearMonth, {
    variant: "flat",
    value: experience.endDate,
    onChange: handleEndDate,
    title: _experiences_edit_dialog_translations.translations.endDate,
    error: fieldErrors === null || fieldErrors === void 0 ? void 0 : fieldErrors.endDate
  })), stillEmployed && stillEmployedComponent), !stillEmployed && stillEmployedComponent, _react.default.createElement("div", {
    className: classes.fieldRow
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.fieldContainer, classes.fullWidthFieldContainer)
  }, _react.default.createElement(_ui.Typography, {
    component: "p",
    color: "dark",
    variant: "label"
  }, formatMessage(_experiences_edit_dialog_translations.translations.descriptionTitle)), _react.default.createElement(_ui.TextField, {
    fullWidth: true,
    id: "experience_description_".concat(id),
    placeholder: formatMessage(_experiences_edit_dialog_translations.translations.descriptionPlaceholder),
    value: experience.summary,
    onChange: handleSummaryChange,
    margin: "normal",
    variant: "flat",
    multiline: true,
    rows: 4
  }), (fieldErrors === null || fieldErrors === void 0 ? void 0 : fieldErrors.summary) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, fieldErrors.summary)))));
};

var SortableExperiences = (0, _reactSortableHoc.SortableContainer)(function (_ref10) {
  var _ref10$items = _ref10.items,
      items = _ref10$items === void 0 ? [] : _ref10$items,
      experienceFieldChanged = _ref10.experienceFieldChanged,
      experienceDeleted = _ref10.experienceDeleted,
      formatMessage = _ref10.formatMessage,
      errors = _ref10.errors,
      foldedState = _ref10.foldedState,
      toggleFold = _ref10.toggleFold,
      classes = _ref10.classes;
  return _react.default.createElement(_ui.List, {
    component: "nav"
  }, items.filter(Boolean).sort(function (_ref11, _ref12) {
    var a = _ref11.index;
    var b = _ref12.index;
    return a - b;
  }).map(function (experience, index) {
    return _react.default.createElement(ExperienceItem, {
      index: index,
      key: "work_".concat(experience.id, "_").concat(index),
      onChange: experienceFieldChanged,
      onRemove: experienceDeleted,
      id: experience.id,
      experience: experience,
      formatMessage: formatMessage,
      error: errors && errors[index],
      folded: foldedState[experience.id],
      toggleFold: toggleFold(experience.id),
      classes: classes,
      experienceIndex: index
    });
  }));
});

var StillEmployedField = function StillEmployedField(_ref13) {
  var value = _ref13.value,
      classes = _ref13.classes,
      handleStillEmployedChange = _ref13.handleStillEmployedChange,
      formatMessage = _ref13.formatMessage;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.fieldRow, value && (0, _classnames.default)(classes.fieldRowJustifyEnd, classes.withMarginStillEmployedFieldRow))
  }, _react.default.createElement("button", {
    type: "button",
    className: (0, _classnames.default)(classes.fieldContainer, classes.checkboxField),
    onClick: handleStillEmployedChange
  }, _react.default.createElement(_ui.Checkbox, {
    color: "secondary",
    checked: value,
    variant: "outlined"
  }), _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.typography
    },
    color: "dark",
    component: "div"
  }, formatMessage(_experiences_edit_dialog_translations.translations.stillEmployed))));
};

var ExperiencesEditForm = function ExperiencesEditForm(_ref14) {
  var data = _ref14.data,
      errors = _ref14.errors,
      onAdd = _ref14.onAdd,
      onMove = _ref14.onMove,
      onFieldChange = _ref14.onFieldChange,
      onDelete = _ref14.onDelete;
  var classes = useStyles({});
  var keyedValues = (0, _react.useMemo)(function () {
    return (0, _keyBy.default)(data, function (_ref15) {
      var id = _ref15.id;
      return id;
    });
  }, [data]);

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
  var globalError = typeof errors === 'string' && errors;
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(SortableExperiences, (0, _extends2.default)({
    lockToContainerEdges: true,
    helperClass: classes.sortableHelper,
    onSortEnd: onMove,
    items: data,
    distance: 15,
    useDragHandle: true,
    lockAxis: "y",
    experienceFieldChanged: onFieldChange,
    experienceDeleted: onDelete
  }, {
    errors: errors,
    foldedState: foldedState,
    toggleFold: toggleFold,
    classes: classes
  })), _react.default.createElement(_add_button.AddButton, {
    onClick: onAdd
  }), globalError && _react.default.createElement(_ui.Typography, {
    color: "danger",
    component: "p"
  }, errors));
};

var ExperiencesEditDialog = ExperiencesEditDialogComponent;
exports.ExperiencesEditDialog = ExperiencesEditDialog;