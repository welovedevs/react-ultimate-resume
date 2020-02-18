"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundtrackCardEditDialog = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _formik = require("formik");

var _useDebounce3 = require("use-debounce");

var _ui = require("@wld/ui");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _edit_dialog_field = require("../../../../commons/edit_dialog_field/edit_dialog_field");

var _loading_spinner = require("../../../../commons/loading_spinner/loading_spinner");

var _string_utils = require("../../../../../utils/string_utils");

var _soundtrack_card_edit_dialog_styles = require("./soundtrack_card_edit_dialog_styles");

var useStyles = (0, _reactJss.createUseStyles)(_soundtrack_card_edit_dialog_styles.styles);

var SoundtrackCardEditDialog = function SoundtrackCardEditDialog(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      data = _ref.data,
      onEdit = _ref.onEdit;
  return _react.default.createElement(_edit_dialog.EditDialog, {
    data: data,
    onEdit: onEdit,
    onClose: onClose,
    open: open,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Sountrack.editDialog.title",
      defaultMessage: "Embed your musical tastes in your profile."
    })
  }, function (helpers) {
    return _react.default.createElement(Content, {
      helpers: helpers
    });
  });
};

exports.SoundtrackCardEditDialog = SoundtrackCardEditDialog;

var Content = function Content() {
  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      errors = _useFormikContext.errors,
      handleChange = _useFormikContext.handleChange;

  var embedUrl = values.embedUrl;

  var _useDebounce = (0, _useDebounce3.useDebounce)(embedUrl, 1000),
      _useDebounce2 = (0, _slicedToArray2.default)(_useDebounce, 1),
      iframeUrl = _useDebounce2[0];

  var frameHashCode = (0, _react.useMemo)(function () {
    return (0, _string_utils.hashCode)(iframeUrl);
  }, [iframeUrl]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      hasLoaded = _useState2[0],
      setHasLoaded = _useState2[1];

  var handleLoad = (0, _react.useCallback)(function () {
    return setHasLoaded(true);
  }, []);
  var isValidUrl = (0, _react.useMemo)(function () {
    return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi.test(iframeUrl);
  }, [iframeUrl]);
  (0, _react.useEffect)(function () {
    if (isValidUrl) {
      setHasLoaded(null);
    }
  }, [isValidUrl]);
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_edit_dialog_field.EditDialogField, {
    classes: {
      container: classes.field
    },
    error: errors.codingReason,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Soundtrack.editDialog.embedUrl.title",
      defaultMessage: "Enter a Spotify embed URL."
    })
  }, _react.default.createElement(_ui.TextField, {
    onChange: handleChange,
    name: "embedUrl",
    value: embedUrl,
    variant: "flat",
    fullWidth: true
  })), _react.default.createElement("div", {
    className: classes.divider
  }), _react.default.createElement("div", {
    className: classes.iframeContainer
  }, hasLoaded === null && _react.default.createElement(_loading_spinner.LoadingSpinner, null), isValidUrl && _react.default.createElement("iframe", {
    className: classes.iframe,
    key: frameHashCode,
    title: "Soundtrack",
    src: iframeUrl,
    height: 375,
    width: 600,
    frameBorder: "0",
    allow: "encrypted-media",
    onLoad: handleLoad
  })));
};