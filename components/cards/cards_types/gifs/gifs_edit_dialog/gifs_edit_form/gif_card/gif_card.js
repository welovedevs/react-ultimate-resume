"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _bouncing_round_button = require("../../../../../../commons/bouncing_round_button/bouncing_round_button");

var _gif_card_styles = require("./gif_card_styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_gif_card_styles.styles);

var GifCardComponent = function GifCardComponent(_ref) {
  var name = _ref.name,
      gifUrl = _ref.gifUrl,
      imageEditable = _ref.imageEditable,
      additionalActions = _ref.additionalActions,
      onImageEditClick = _ref.onImageEditClick,
      onChange = _ref.onChange,
      onRemove = _ref.onRemove,
      error = _ref.error;
  var classes = useStyles();

  var _useState = (0, _react.useState)(name),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var handleTextFieldChange = (0, _react.useCallback)(function (event) {
    return setInput(event.target.value);
  }, []);
  var isSaveDisabled = (0, _react.useMemo)(function () {
    return !input || input === name;
  }, [input, name]);
  var handleSave = (0, _react.useCallback)(function () {
    if (isSaveDisabled || typeof onChange !== 'function') {
      return;
    }

    onChange('name')(input);
  }, [onChange, isSaveDisabled, input]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.Card, {
    className: classes.container
  }, _react.default.createElement("div", {
    className: classes.imageContainer
  }, (error === null || error === void 0 ? void 0 : error.gifUrl) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "p"
  }, error === null || error === void 0 ? void 0 : error.gifUrl), gifUrl && _react.default.createElement("img", {
    className: classes.image,
    src: gifUrl,
    alt: name
  }), (imageEditable || additionalActions) && _react.default.createElement("div", {
    className: classes.actions
  }, imageEditable && _react.default.createElement(_bouncing_round_button.BouncingRoundButton, {
    title: "Change this gif",
    onClick: onImageEditClick
  }), additionalActions)), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_ui.TextField, {
    customClasses: {
      container: classes.textField
    },
    fullWidth: true,
    placeholder: "Gif's name",
    variant: "flat",
    value: input,
    onChange: handleTextFieldChange
  }), (error === null || error === void 0 ? void 0 : error.name) && _react.default.createElement(_ui.Typography, {
    color: "danger",
    component: "div",
    variant: "helper"
  }, error === null || error === void 0 ? void 0 : error.name)), _react.default.createElement(_ui.PopperCardActions, null, _react.default.createElement(_ui.Button, {
    color: "danger",
    size: "small",
    onClick: onRemove
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.remove",
    defaultMessage: "Remove"
  })), _react.default.createElement(_ui.Button, {
    disabled: isSaveDisabled,
    size: "small",
    color: "primary",
    onClick: handleSave
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.save",
    defaultMessage: "Save"
  })))));
};

var GifCard = GifCardComponent;
exports.GifCard = GifCard;