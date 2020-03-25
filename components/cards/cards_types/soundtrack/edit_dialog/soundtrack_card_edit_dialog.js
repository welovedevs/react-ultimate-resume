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
var URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
var SPOTIFY_DOMAIN = 'https://open.spotify.com';

var SoundtrackCardEditDialog = function SoundtrackCardEditDialog(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      data = _ref.data,
      onEdit = _ref.onEdit,
      isEditing = _ref.isEditing;
  return (/*#__PURE__*/_react.default.createElement(_edit_dialog.EditDialog, {
      data: data,
      onEdit: onEdit,
      onClose: onClose,
      isEditing: isEditing,
      open: open,
      title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Sountrack.editDialog.title",
        defaultMessage: "Embed your musical tastes in your profile."
      })
    }, function (helpers) {
      return (/*#__PURE__*/_react.default.createElement(Content, {
          helpers: helpers
        })
      );
    })
  );
};

exports.SoundtrackCardEditDialog = SoundtrackCardEditDialog;

var Content = function Content(_ref2) {
  var _ref2$helpers = _ref2.helpers,
      fullScreen = _ref2$helpers.fullScreen,
      isMobile = _ref2$helpers.isMobile;
  var classes = useStyles({
    fullScreen: fullScreen,
    isMobile: isMobile
  });

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      errors = _useFormikContext.errors,
      setFieldValue = _useFormikContext.setFieldValue;

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
  var handleFieldChange = (0, _react.useCallback)(function (event) {
    var value = event.target.value;

    if (!URL_REGEX.test(value) || !value.startsWith(SPOTIFY_DOMAIN)) {
      return;
    }

    var finalValue = value;

    if (!value.includes('/embed')) {
      finalValue = "".concat(value.substring(0, SPOTIFY_DOMAIN.length), "/embed/").concat(value.substring(SPOTIFY_DOMAIN.length + 1, value.length));
    }

    setFieldValue('embedUrl', finalValue);
  }, [setFieldValue, embedUrl]);
  var clearField = (0, _react.useCallback)(function () {
    setFieldValue('embedUrl', '');
  }, [setFieldValue]);
  var isValidUrl = (0, _react.useMemo)(function () {
    return URL_REGEX.test(iframeUrl) && (iframeUrl === null || iframeUrl === void 0 ? void 0 : iframeUrl.includes('/embed'));
  }, [iframeUrl]);
  (0, _react.useEffect)(function () {
    if (isValidUrl) {
      setHasLoaded(null);
    }
  }, [isValidUrl]);
  return (/*#__PURE__*/_react.default.createElement("div", {
      className: classes.container
    }, /*#__PURE__*/_react.default.createElement(_edit_dialog_field.EditDialogField, {
      classes: {
        container: classes.field
      },
      error: errors.codingReason,
      title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Soundtrack.editDialog.embedUrl.title",
        defaultMessage: "Enter a Spotify embed URL."
      }),
      subtitle: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Soundtrack.editDialog.embedUrl.subtitle",
        defaultMessage: "Ex: https://open.spotify.com/embed/album/79dL7FLiJFOO0EoehUHQBv"
      })
    }, /*#__PURE__*/_react.default.createElement(_ui.TextField, {
      onChange: handleFieldChange,
      name: "embedUrl",
      value: embedUrl,
      variant: "flat",
      onClick: clearField,
      onFocus: clearField,
      fullWidth: true
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: classes.divider
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: classes.iframeContainer
    }, hasLoaded === null && /*#__PURE__*/_react.default.createElement(_loading_spinner.LoadingSpinner, null), iframeUrl && /*#__PURE__*/_react.default.createElement("iframe", {
      className: classes.iframe,
      key: frameHashCode,
      title: "Soundtrack",
      src: iframeUrl,
      height: "100%",
      width: 600,
      frameBorder: "0",
      allow: "encrypted-media",
      onLoad: handleLoad
    })))
  );
};