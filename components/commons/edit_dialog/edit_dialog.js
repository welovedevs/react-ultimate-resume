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
      isEditing = _ref.isEditing,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var classes = useStyles();
  var theme = (0, _reactJss.useTheme)();
  var isMobile = (0, _useMediaQuery.default)("(max-width: ".concat(theme.screenSizes.small, "px)"));
  return (/*#__PURE__*/_react.default.createElement(_core.Dialog, {
      fullScreen: fullScreen || isMobile,
      classes: {
        paper: (0, _classnames.default)(classes.paper, receivedClasses.paper, fullScreen && classes.fullScreen)
      },
      open: open,
      onClose: onClose
    }, /*#__PURE__*/_react.default.createElement(_formik.Formik, {
      validateOnChange: false,
      initialValues: data,
      onSubmit: function onSubmit(newValues) {
        return onEdit(newValues);
      },
      validationSchema: validationSchema
    }, /*#__PURE__*/_react.default.createElement(TitleContent, {
      title: title,
      fullScreen: fullScreen,
      isMobile: isMobile,
      onClose: onClose,
      classes: classes,
      receivedClasses: receivedClasses,
      isEditing: isEditing
    }, children)))
  );
};

var TitleContent = function TitleContent(_ref2) {
  var title = _ref2.title,
      fullScreen = _ref2.fullScreen,
      isMobile = _ref2.isMobile,
      onClose = _ref2.onClose,
      children = _ref2.children,
      classes = _ref2.classes,
      receivedClasses = _ref2.receivedClasses,
      isEditing = _ref2.isEditing;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      handleSubmit = _useFormikContext.handleSubmit,
      setFieldValue = _useFormikContext.setFieldValue,
      values = _useFormikContext.values;

  return (/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.titleContainer
    }, /*#__PURE__*/_react.default.createElement(_dialog_title.DialogTitle, null, title), fullScreen && !isMobile && /*#__PURE__*/_react.default.createElement(Actions, {
      fullScreen: true,
      onClose: onClose,
      handleSubmit: handleSubmit,
      classes: classes,
      receivedClasses: receivedClasses,
      isEditing: isEditing
    })), /*#__PURE__*/_react.default.createElement(Content, {
      onClose: onClose,
      handleSubmit: handleSubmit,
      setFieldValue: setFieldValue,
      values: values,
      fullScreen: fullScreen,
      isMobile: isMobile,
      classes: classes,
      receivedClasses: receivedClasses,
      isEditing: isEditing
    }, children))
  );
};

var Content = function Content(_ref3) {
  var children = _ref3.children,
      onClose = _ref3.onClose,
      handleSubmit = _ref3.handleSubmit,
      setFieldValue = _ref3.setFieldValue,
      values = _ref3.values,
      fullScreen = _ref3.fullScreen,
      isMobile = _ref3.isMobile,
      classes = _ref3.classes,
      receivedClasses = _ref3.receivedClasses,
      isEditing = _ref3.isEditing;
  var handleValueChange = (0, _react.useCallback)(function (name) {
    return function (value) {
      console.log("[Edit Dialog] Setting field ".concat(name, " to value."), {
        value: value
      });
      return setFieldValue(name, value);
    };
  }, [setFieldValue]);
  var toggleValue = (0, _react.useCallback)(function (name) {
    return function () {
      return setFieldValue(name, !values[name]);
    };
  }, [setFieldValue, values]);
  return (/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.DialogContent, {
      classes: {
        root: (0, _classnames.default)(classes.content, receivedClasses.content)
      }
    }, children({
      handleValueChange: handleValueChange,
      toggleValue: toggleValue,
      fullScreen: fullScreen,
      isMobile: isMobile
    })), (!fullScreen || isMobile) && /*#__PURE__*/_react.default.createElement(Actions, {
      onClose: onClose,
      handleSubmit: handleSubmit,
      classes: classes,
      receivedClasses: receivedClasses,
      isEditing: isEditing
    }))
  );
};

var Actions = function Actions(_ref4) {
  var onClose = _ref4.onClose,
      handleSubmit = _ref4.handleSubmit,
      fullScreen = _ref4.fullScreen,
      classes = _ref4.classes,
      receivedClasses = _ref4.receivedClasses,
      isEditing = _ref4.isEditing;
  return (/*#__PURE__*/_react.default.createElement(_core.DialogActions, {
      classes: {
        root: (0, _classnames.default)(classes.actions, receivedClasses.actions)
      }
    }, /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
      title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "EditDialog.close.tooltip",
        defaultMessage: "Any modification won't be saved!"
      })
    }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
      size: "small",
      onClick: onClose
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.close",
      defaultMessage: "Close"
    }))), isEditing && /*#__PURE__*/_react.default.createElement(_ui.Button, {
      variant: fullScreen ? 'contained' : 'text',
      type: "submit",
      size: "small",
      color: "primary",
      onClick: handleSubmit
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.save",
      defaultMessage: "Save"
    })))
  );
};

var EditDialog = EditDialogComponent;
exports.EditDialog = EditDialog;