"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentDate = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _pickers = require("@material-ui/pickers");

var _moment = _interopRequireDefault(require("@date-io/moment"));

var _ui = require("@wld/ui");

var _formik = require("formik");

var _project_dialog_content_date_styles = require("./project_dialog_content_date_styles");

var _year_month = require("../../../../../commons/year_month/year_month");

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_date_styles.styles);

var ProjectDialogContentDateComponent = function ProjectDialogContentDateComponent(_ref) {
  var date = _ref.date,
      isEditing = _ref.isEditing;
  var classes = useStyles({
    isEditing: isEditing
  });
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(Content, {
    date: date,
    isEditing: isEditing,
    classes: classes
  }));
};

var Content = function Content(_ref2) {
  var date = _ref2.date,
      isEditing = _ref2.isEditing,
      classes = _ref2.classes;

  if (isEditing) {
    return _react.default.createElement(EditingContent, {
      title: date,
      classes: classes
    });
  }

  return _react.default.createElement(DefaultContent, {
    title: date,
    classes: classes
  });
};

var DefaultContent = function DefaultContent(_ref3) {
  var date = _ref3.date,
      classes = _ref3.classes;
  return _react.default.createElement(_ui.Typography, {
    variant: "h2",
    component: "h3",
    customClasses: {
      container: classes.typography
    }
  }, date && date.format('LL'));
};

var EditingContent = function EditingContent(_ref4) {
  var classes = _ref4.classes;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      setFieldValue = _useFormikContext.setFieldValue,
      values = _useFormikContext.values,
      errors = _useFormikContext.errors;

  var handleStartDate = (0, _react.useCallback)(function (value) {
    setFieldValue('date', value);
  }, [JSON.stringify(values)]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _moment.default
  }, _react.default.createElement(_year_month.YearMonth, {
    textfieldProps: {
      fullWidth: true
    },
    className: classes.datePicker,
    variant: "flat",
    value: values.date,
    onChange: handleStartDate,
    title: {
      id: 'Project.editDialog.date',
      defaultMessage: 'Project date'
    },
    error: errors === null || errors === void 0 ? void 0 : errors.date
  })), (errors === null || errors === void 0 ? void 0 : errors.date) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, errors.date));
};

var ProjectDialogContentDate = ProjectDialogContentDateComponent;
exports.ProjectDialogContentDate = ProjectDialogContentDate;