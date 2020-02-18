"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _formik = require("formik");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _dialog_title = require("../dialog/dialog_title/dialog_title");

var _edit_dialog_styles = require("./edit_dialog_styles");

var useStyles = (0, _reactJss.createUseStyles)(_edit_dialog_styles.styles);

var EditDialogComponent = function EditDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      fullScreen = _ref.fullScreen,
      data = _ref.data,
      onEdit = _ref.onEdit,
      children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '✏️' : _ref$title,
      validationSchema = _ref.validationSchema,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var theme = (0, _reactJss.useTheme)();
  var isMobile = (0, _useMediaQuery.default)("(max-width: ".concat(theme.screenSizes.small, "px)"));
  var classes = useStyles();
  return _react.default.createElement(_core.Dialog, {
    fullScreen: fullScreen || isMobile,
    classes: {
      paper: (0, _classnames.default)(classes.paper, receivedClasses.paper)
    },
    open: open,
    onClose: onClose
  }, _react.default.createElement(_dialog_title.DialogTitle, null, title), _react.default.createElement(_formik.Formik, {
    validateOnChange: false,
    initialValues: data,
    onSubmit: function onSubmit(newValues) {
      return onEdit(newValues);
    },
    validationSchema: validationSchema
  }, _react.default.createElement(Content, {
    onClose: onClose,
    classes: classes,
    receivedClasses: receivedClasses
  }, children)));
};

var Content = function Content(_ref2) {
  var children = _ref2.children,
      onClose = _ref2.onClose,
      classes = _ref2.classes,
      receivedClasses = _ref2.receivedClasses;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      handleSubmit = _useFormikContext.handleSubmit,
      setFieldValue = _useFormikContext.setFieldValue,
      values = _useFormikContext.values;

  var handleValueChange = (0, _react.useCallback)(function (name) {
    return function (value) {
      console.debug("Setting field ".concat(name, " to value ").concat(value));
      return setFieldValue(name, value);
    };
  }, [setFieldValue]);
  var toggleValue = (0, _react.useCallback)(function (name) {
    return function () {
      return setFieldValue(name, !values[name]);
    };
  }, [setFieldValue, values]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.DialogContent, {
    classes: {
      root: (0, _classnames.default)(classes.content, receivedClasses.content)
    }
  }, children({
    handleValueChange: handleValueChange,
    toggleValue: toggleValue
  })), _react.default.createElement(_core.DialogActions, {
    classes: {
      root: (0, _classnames.default)(classes.actions, receivedClasses.actions)
    }
  }, _react.default.createElement(_ui.Button, {
    size: "small",
    onClick: onClose
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.close",
    defaultMessage: "Close"
  })), _react.default.createElement(_ui.Button, {
    type: "submit",
    size: "small",
    color: "primary",
    onClick: handleSubmit
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.save",
    defaultMessage: "Save"
  }))));
};

var EditDialog = EditDialogComponent;
exports.EditDialog = EditDialog;