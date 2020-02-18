"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifCard = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _bouncing_round_button = require("../../../../../../commons/bouncing_round_button/bouncing_round_button");

var _gif_card_styles = require("./gif_card_styles");

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
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
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