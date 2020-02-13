"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PALETTE_KEY_TRANSLATIONS = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PALETTE_KEY_TRANSLATIONS = Object.freeze({
  primary: _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "PaletteVisual.Key.Primary",
    defaultMessage: "Primaire"
  }),
  secondary: _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "PaletteVisual.Key.Secondary",
    defaultMessage: "Secondaire"
  }),
  tertiary: _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "PaletteVisual.Key.Tertiary",
    defaultMessage: "Tertiaire"
  })
});
exports.PALETTE_KEY_TRANSLATIONS = PALETTE_KEY_TRANSLATIONS;