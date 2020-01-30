"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundtrackCardEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _formik = require("formik");

var _ui = require("@wld/ui");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _edit_dialog_field = require("../../../../commons/edit_dialog_field/edit_dialog_field");

var _reactSpring = require("react-spring");

var _useDebounce3 = require("use-debounce");

var _reactJss = require("react-jss");

var _soundtrack_card_edit_dialog_styles = require("./soundtrack_card_edit_dialog_styles");

var _string_utils = require("../../../../../utils/string_utils");

var _loading_spinner = require("../../../../commons/loading_spinner/loading_spinner");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_soundtrack_card_edit_dialog_styles.styles);

var SoundtrackCardEditDialogContent = function SoundtrackCardEditDialogContent() {
  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      errors = _useFormikContext.errors,
      handleChange = _useFormikContext.handleChange;

  var embedUrl = values.embedUrl;

  var _useDebounce = (0, _useDebounce3.useDebounce)(embedUrl, 1000),
      _useDebounce2 = _slicedToArray(_useDebounce, 1),
      iframeUrl = _useDebounce2[0];

  var frameHashCode = (0, _react.useMemo)(function () {
    return (0, _string_utils.hashCode)(iframeUrl);
  }, [iframeUrl]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasLoaded = _useState2[0],
      setHasLoaded = _useState2[1];

  var handleLoad = (0, _react.useCallback)(function () {
    return setHasLoaded(true);
  }, []);
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.codingReason,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Soundtrack.editDialog.embedUrl.title",
      defaultMessage: "Embed an url ?"
    })
  }, _react.default.createElement(_ui.TextField, {
    onChange: handleChange,
    name: "embedUrl",
    value: embedUrl,
    variant: "flat",
    fullWidth: true
  })), _react.default.createElement("div", {
    className: classes.iframe
  }, !hasLoaded && _react.default.createElement(_loading_spinner.LoadingSpinner, {
    color: "primary"
  }), _react.default.createElement(_reactSpring.animated.iframe, {
    key: frameHashCode,
    title: "Soundtrack",
    src: iframeUrl,
    height: 300,
    width: 200,
    frameBorder: "0",
    allow: "encrypted-media",
    onLoad: handleLoad
  })));
};

var SoundtrackCardEditDialog = function SoundtrackCardEditDialog(_ref) {
  var data = _ref.data,
      onEdit = _ref.onEdit,
      onClose = _ref.onClose;
  return _react.default.createElement(_edit_dialog.EditDialog, {
    data: data,
    onEdit: onEdit,
    onClose: onClose,
    open: true,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Sountrack.editDialog.title",
      defaultMessage: "Your embed playlist in your profile!"
    })
  }, function (helpers) {
    return _react.default.createElement(SoundtrackCardEditDialogContent, {
      helpers: helpers
    });
  });
};

exports.SoundtrackCardEditDialog = SoundtrackCardEditDialog;