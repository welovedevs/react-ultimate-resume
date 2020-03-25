"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PALETTE_KEY_TRANSLATIONS = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var PALETTE_KEY_TRANSLATIONS = Object.freeze({
  primary: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "PaletteVisual.Key.Primary",
    defaultMessage: "Primary"
  }),
  secondary: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "PaletteVisual.Key.Secondary",
    defaultMessage: "Secondary"
  }),
  tertiary: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "PaletteVisual.Key.Tertiary",
    defaultMessage: "Tertiary"
  })
});
exports.PALETTE_KEY_TRANSLATIONS = PALETTE_KEY_TRANSLATIONS;