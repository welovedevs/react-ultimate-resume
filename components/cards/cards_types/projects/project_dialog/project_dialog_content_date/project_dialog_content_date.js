"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentDate = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _use_is_editing = require("../../../../../hooks/use_is_editing");

var _project_dialog_content_date_styles = require("./project_dialog_content_date_styles");

var _formik = require("formik");

var _moment = _interopRequireDefault(require("@date-io/moment"));

var _pickers = require("@material-ui/pickers");

var _year_month = require("../../../../../commons/year_month/year_month");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_date_styles.styles);

var ProjectDialogContentDateComponent = function ProjectDialogContentDateComponent(_ref) {
  var date = _ref.date;

  var _useIsEditing = (0, _use_is_editing.useIsEditing)(),
      _useIsEditing2 = _slicedToArray(_useIsEditing, 1),
      isEditing = _useIsEditing2[0];

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
  }, []);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _moment.default
  }, _react.default.createElement(_year_month.YearMonth, {
    className: classes.datePicker,
    variant: "flat",
    value: values.date,
    onChange: handleStartDate,
    title: {
      id: 'Project.editDialog.date',
      defaultMessage: 'Date Du projet'
    },
    error: errors === null || errors === void 0 ? void 0 : errors.date
  })), (errors === null || errors === void 0 ? void 0 : errors.name) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, errors.name));
};

var ProjectDialogContentDate = ProjectDialogContentDateComponent;
exports.ProjectDialogContentDate = ProjectDialogContentDate;