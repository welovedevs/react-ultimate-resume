"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _gifs_edit_form = require("./gifs_edit_form/gifs_edit_form");

var _gifs_edit_dialog_styles = require("./gifs_edit_dialog_styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _reactJss.createUseStyles)(_gifs_edit_dialog_styles.styles);

var GifsEditDialogComponent = function GifsEditDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      data = _ref.data,
      onEdit = _ref.onEdit,
      validationSchema = _ref.validationSchema;
  var classes = useStyles();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var validationSchemaToPass = (0, _react.useMemo)(function () {
    return validationSchema(formatMessage);
  }, [validationSchema]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_edit_dialog.EditDialog, {
    fullScreen: true,
    classes: {
      paper: classes.paper
    },
    open: open,
    onClose: onClose,
    validationSchema: validationSchemaToPass,
    data: data,
    onEdit: onEdit,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Interests.editDialog.title",
      defaultMessage: "Show your loved hobbies with fancy gifs!"
    })
  }, function (helpers) {
    return _react.default.createElement(_gifs_edit_form.GifsEditForm, {
      helpers: helpers
    });
  }));
};

var GifsEditDialog = GifsEditDialogComponent;
exports.GifsEditDialog = GifsEditDialog;